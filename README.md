# Tillis Auto Aesthetics (tillis.autos)

Static website published with GitHub Pages. GitHub builds it on every push (see `.github/workflows/deploy.yml`).

- Edit prices in `pricing.py`, FAQ in `faq.py`, pages in `templates/`, public settings in `site_config.json`.
- `python build_static.py` builds the site into `site/` and regenerates `worker/worker.js` (the checkout helper).
- After changing prices, re-paste `worker/worker.js` into the Cloudflare Worker.
- Secrets (Stripe keys) are NOT in this repo. They live in Cloudflare.
