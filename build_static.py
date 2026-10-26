"""Builds the static website into ./site (for GitHub Pages) and writes worker/worker.js.
Usage: python build_static.py"""
import os, json, shutil
_cfg = json.load(open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "site_config.json")))
os.environ["SITE_URL"] = _cfg["site_url"]
from app import app, slug, CFG
import pricing as P

OUT = "site"
HERE = os.path.dirname(os.path.abspath(__file__))
shutil.rmtree(OUT, ignore_errors=True)
os.makedirs(OUT)

routes = ["/", "/packages", "/dealers", "/fleet", "/faq", "/book", "/thanks"] + [f"/areas/{slug(c)}" for c in P.CITIES]
c = app.test_client()
for r in routes:
    html = c.get(r)
    assert html.status_code == 200, (r, html.status_code)
    path = os.path.join(OUT, "index.html") if r == "/" else os.path.join(OUT, r.strip("/"), "index.html")
    os.makedirs(os.path.dirname(path), exist_ok=True)
    open(path, "wb").write(html.data)

# 404 page
with app.test_request_context("/"):
    from flask import render_template
    open(os.path.join(OUT, "404.html"), "w").write(render_template("404.html"))

shutil.copytree(os.path.join(HERE, "static"), os.path.join(OUT, "static"), ignore=shutil.ignore_patterns(".gitkeep"))
site = CFG["site_url"]
open(os.path.join(OUT, "CNAME"), "w").write(site.split("//", 1)[1])
open(os.path.join(OUT, ".nojekyll"), "w").write("")
open(os.path.join(OUT, "robots.txt"), "w").write(f"User-agent: *\nAllow: /\nSitemap: {site}/sitemap.xml\n")
urls = "".join(f"<url><loc>{site}{'/' if r == '/' else r + '/'}</loc></url>" for r in routes if r != "/thanks")
open(os.path.join(OUT, "sitemap.xml"), "w").write(f'<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">{urls}</urlset>')

# checkout helper, with prices copied from pricing.py
tpl = open(os.path.join(HERE, "worker", "worker.template.js")).read()
open(os.path.join(HERE, "worker", "worker.js"), "w").write(tpl.replace("__PRICING__", json.dumps(P.public_data(), indent=1)).replace("__SITE__", site))
print("built", len(routes) + 1, "pages ->", OUT)
