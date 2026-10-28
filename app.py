import os, hmac, glob, sqlite3, re, json
from functools import wraps
from dotenv import load_dotenv
from flask import Flask, render_template, request, redirect, session, jsonify, abort, url_for
import stripe
import pricing as P
from faq import FAQ

load_dotenv()
stripe.api_key = os.environ.get("STRIPE_SECRET_KEY")
SITE_URL = os.environ.get("SITE_URL", "http://localhost:5050").rstrip("/")
TAX = os.environ.get("STRIPE_TAX_ENABLED", "false").lower() == "true"
HERE = os.path.dirname(os.path.abspath(__file__))
DB = os.environ.get("LEADS_DB", os.path.join(HERE, "leads.db"))

BIZ = {
    "name": "Tillis Auto Aesthetics",
    "phone": "(310) 701-0263", "tel": "tel:+13107010263", "sms": "sms:+13107010263",
    "email": "tillisautoaesthetics@gmail.com",
    "instagram": "https://www.instagram.com/tillisautoaesthetics",
    "facebook": "https://www.facebook.com/profile.php?id=61572672301525",
    "youtube": "https://www.youtube.com/@tar6a",
    "area": "South Bay",
}
with open(os.path.join(HERE, "site_config.json")) as _f:
    CFG = json.load(_f)  # public settings: checkout helper URL, Formspree form URL
slug = lambda c: c.lower().replace(" ", "-")
CITY_BY_SLUG = {slug(c): c for c in P.CITIES}

app = Flask(__name__)
app.secret_key = os.environ.get("SECRET_KEY", "dev-only")


def db():
    c = sqlite3.connect(DB)
    c.row_factory = sqlite3.Row
    return c


with db() as c:
    c.execute("""CREATE TABLE IF NOT EXISTS leads(id INTEGER PRIMARY KEY, created TEXT DEFAULT CURRENT_TIMESTAMP,
        kind TEXT, name TEXT, company TEXT, phone TEXT, email TEXT, message TEXT)""")


@app.context_processor
def inject():
    return {"cfg": CFG, "biz": BIZ, "cities": P.CITIES, "slug": slug, "site_url": SITE_URL,
            "ga_id": os.environ.get("GA_ID", ""), "pixel_id": os.environ.get("META_PIXEL_ID", ""),
            "dealer_min": min(min(p["prices"].values()) for p in P.DEALER_PACKAGES.values()), "vehicles": P.VEHICLES, "packages": P.PACKAGES, "conditions": P.CONDITIONS}


# ---------------- pages ----------------
@app.route("/")
def home():
    return render_template("index.html")


@app.route("/packages")
def packages():
    return render_template("packages.html", addons=P.ADDONS, membership=P.MEMBERSHIP, premium_includes=P.PREMIUM_INCLUDES)


@app.route("/dealers")
def dealers():
    return render_template("dealers.html", dealer_packages=P.DEALER_PACKAGES, maintenance=P.DEALER_MAINTENANCE)


@app.route("/fleet")
def fleet():
    return render_template("fleet.html", fleet=P.FLEET, membership=P.MEMBERSHIP, sent=request.args.get("sent"), err=request.args.get("err"))


@app.route("/faq")
def faq():
    schema = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
        {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for _, items in FAQ for q, a in items]}
    return render_template("faq.html", faq=FAQ, schema=schema)


@app.route("/areas/<city>")
def area(city):
    if city not in CITY_BY_SLUG:
        abort(404)
    return render_template("area.html", city=CITY_BY_SLUG[city])


@app.route("/inquiry", methods=["POST"])
def inquiry():
    f = request.form
    kind = f.get("kind", "general")
    back = {"dealer": "/dealers", "fleet": "/fleet"}.get(kind, "/")
    if f.get("website"):  # honeypot
        return redirect(f"{back}?sent=1#inquiry")
    if not (f.get("name") and (f.get("phone") or f.get("email")) and f.get("message")):
        return redirect(f"{back}?err=Please+add+your+name,+a+phone+or+email,+and+a+message#inquiry")
    with db() as c:
        c.execute("INSERT INTO leads(kind,name,company,phone,email,message) VALUES(?,?,?,?,?,?)",
                  (kind, f["name"][:100], f.get("company", "")[:100], f.get("phone", "")[:40], f.get("email", "")[:120], f["message"][:2000]))
    return redirect(f"{back}?sent=1#inquiry")


@app.route("/book")
def book():
    return render_template("book.html", data=P.public_data(), err=request.args.get("error"))


@app.route("/thanks")
def thanks():
    return render_template("thanks.html")


@app.route("/robots.txt")
def robots():
    return f"User-agent: *\nDisallow: /admin\nSitemap: {SITE_URL}/sitemap.xml\n", 200, {"Content-Type": "text/plain"}


@app.route("/sitemap.xml")
def sitemap():
    paths = ["/", "/packages", "/dealers", "/fleet", "/faq", "/book"] + [f"/areas/{slug(c)}" for c in P.CITIES]
    body = "".join(f"<url><loc>{SITE_URL}{p}</loc></url>" for p in paths)
    return f'<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">{body}</urlset>', 200, {"Content-Type": "application/xml"}


# ---------------- payments ----------------
def li(name, dollars, recurring=False):
    price = {"currency": "usd", "unit_amount": int(round(dollars * 100)),
             "product_data": {"name": name, "tax_code": "txcd_20030000"}}
    if recurring:
        price["recurring"] = {"interval": "month"}
    return {"price_data": price, "quantity": 1}


@app.route("/checkout", methods=["POST"])
def checkout():
    f = request.form
    vehicle, cond = f.get("vehicle"), f.get("condition", "light")
    if vehicle not in P.VEHICLES or cond not in P.CONDITIONS:
        return redirect("/book?error=Please+choose+your+vehicle+size+and+how+dirty+it+is")
    meta = {"vehicle": vehicle, "condition": cond, "city": f.get("city", "")[:60], "address": f.get("address", "")[:200],
            "date": f.get("date", "")[:40], "notes": f.get("notes", "")[:300]}
    base = dict(success_url=f"{SITE_URL}/thanks?session_id={{CHECKOUT_SESSION_ID}}", cancel_url=f"{SITE_URL}/book",
                phone_number_collection={"enabled": True}, billing_address_collection="required")
    if TAX:
        base["automatic_tax"] = {"enabled": True}
    if f.get("package") == "plan":
        price = P.MEMBERSHIP["prices"][vehicle]
        s = stripe.checkout.Session.create(mode="subscription", line_items=[li(f"{P.MEMBERSHIP['name']} - {P.VEHICLES[vehicle]}", price, True)],
                                           subscription_data={"metadata": meta}, metadata=meta, **base)
        return redirect(s.url, code=303)
    pkg = f.get("package")
    if pkg not in P.PACKAGES:
        return redirect("/book?error=Please+choose+a+package")
    lines = P.quote(pkg, vehicle, cond, f.getlist("addon"))
    meta["package"] = pkg
    s = stripe.checkout.Session.create(mode="payment", line_items=[li(n, p) for n, p in lines], invoice_creation={"enabled": True},
                                       metadata=meta, **base)
    return redirect(s.url, code=303)


# ---------------- admin ----------------
def admin_only(fn):
    @wraps(fn)
    def w(*a, **k):
        if not session.get("admin"):
            return redirect("/admin/login")
        return fn(*a, **k)
    return w


@app.route("/admin/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        if hmac.compare_digest(request.form.get("password", ""), os.environ.get("ADMIN_PASSWORD", "")):
            session["admin"] = True
            return redirect("/admin")
        return render_template("login.html", error="Wrong password")
    return render_template("login.html")


@app.route("/admin")
@admin_only
def admin():
    with db() as c:
        leads = c.execute("SELECT * FROM leads ORDER BY id DESC LIMIT 50").fetchall()
    return render_template("admin.html", invoices=stripe.Invoice.list(limit=10).data, leads=leads, dealer=P.DEALER_PACKAGES,
                           msg=request.args.get("msg"), err=request.args.get("err"))


@app.route("/admin/invoice", methods=["POST"])
@admin_only
def create_invoice():
    f = request.form
    try:
        cust = stripe.Customer.create(name=f["name"], email=f["email"], phone=f.get("phone") or None, metadata={"company": f.get("company", "")})
        n = 0
        for i in range(1, 5):
            pid, veh = f.get(f"pkg{i}"), f.get(f"veh{i}")
            if pid in P.DEALER_PACKAGES and veh in P.VEHICLES:
                qty = max(1, int(f.get(f"qty{i}") or 1))
                stripe.InvoiceItem.create(customer=cust.id, currency="usd", quantity=qty,
                                          unit_amount_decimal=str(P.DEALER_PACKAGES[pid]["prices"][veh] * 100),
                                          description=f"{P.DEALER_PACKAGES[pid]['name']} - {P.VEHICLES[veh]}")
                n += 1
        if f.get("vehicle"):
            pass
        for i in range(1, 3):
            if f.get(f"custom_amount{i}"):
                stripe.InvoiceItem.create(customer=cust.id, currency="usd", amount=int(float(f[f"custom_amount{i}"]) * 100),
                                          description=f.get(f"custom_desc{i}") or "Custom service")
                n += 1
        if not n:
            return redirect("/admin?err=Add+at+least+one+line+item")
        params = dict(customer=cust.id, collection_method="send_invoice", days_until_due=int(f.get("days") or 14), auto_advance=False,
                      pending_invoice_items_behavior="include", description=(f.get("vehicle") or None))
        if TAX:
            params["automatic_tax"] = {"enabled": True}
        inv = stripe.Invoice.finalize_invoice(stripe.Invoice.create(**params).id)
        stripe.Invoice.send_invoice(inv.id)
        return redirect(f"/admin?msg=Invoice+sent+to+{f['email']}")
    except stripe.error.StripeError as e:
        return redirect(f"/admin?err={(e.user_message or str(e))[:200]}")


@app.route("/webhook", methods=["POST"])
def webhook():
    secret = os.environ.get("STRIPE_WEBHOOK_SECRET")
    if not secret:
        abort(400)
    try:
        ev = stripe.Webhook.construct_event(request.data, request.headers.get("Stripe-Signature", ""), secret)
    except Exception:
        abort(400)
    if ev["type"] in ("checkout.session.completed", "invoice.paid"):
        print("PAID:", ev["type"], ev["data"]["object"]["id"])
    return jsonify(ok=True)


if __name__ == "__main__":
    app.run(debug=True, port=5050)
