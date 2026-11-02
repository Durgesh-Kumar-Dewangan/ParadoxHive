# Deploy ParadoxHive on Render

The website is plain static files in `site/` (no build step).

## Option A: Blueprint (uses render.yaml)
1. Put this folder in a GitHub repo (`git init`, commit, push). Old design files (`Main.dc.html`, `support.js`, `vendor/`) can stay; only `site/` is published.
2. In Render: New > Blueprint > pick the repo > Apply.

## Option B: Static Site by hand
1. Render: New > Static Site > pick the repo.
2. Build Command: leave empty (or `echo ok`).
3. Publish Directory: `site`
4. Create Static Site.

## Test locally
cd site
python -m http.server 8080
Open http://localhost:8080

## After deploy
- Add your custom domain under Settings > Custom Domains.
- Edit the site in `site/index.html`, `site/style.css`, `site/main.js`, then push to redeploy.
