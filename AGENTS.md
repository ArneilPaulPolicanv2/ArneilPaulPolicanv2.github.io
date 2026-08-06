# AGENTS.md

## Project overview

This is the personal GitHub Pages website `ArneilPaulPolicanv2.github.io`. It is a
plain static site (no Jekyll config, no build step). GitHub Pages serves the files
in the repository root directly, with `index.html` as the entry point.

- `index.html` — landing page / entry point
- `assets/style.css` — styles
- `assets/main.js` — small vanilla JS enhancements

## Cursor Cloud specific instructions

- There are no dependencies to install and no build step. The update script is a
  no-op; do not add a package manager or build tooling unless the site actually
  needs one.
- Local development = serve the repo root with any static file server. There is no
  hot reload; edit a file, then refresh the browser.
  - Recommended: `python3 -m http.server 8000` from the repo root, then open
    `http://localhost:8000/`.
  - Alternative: `npx --yes serve .` (Node 22 is available).
- "Running the app" means serving these static files; there is no backend. Test
  changes by loading pages in a browser (or `curl http://localhost:8000/`).
- Deployment is handled by GitHub Pages from the default branch — no manual build
  or deploy command is run locally.
