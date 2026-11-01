# Euromarket WWE – euromarket-ro.com

Next.js site for Euromarket WWE SRL (wastewater and water treatment plants).

## Layout

| Path | Contents |
|---|---|
| `src/app/` | Routes: home, `[section]/[slug]` detail pages, `privacy`, `api/contact`, `sitemap.ts` |
| `src/components/layout/` | Site chrome shared by every page (Navbar, Footer, CookieConsent, StructuredData) and the home splash screen |
| `src/components/sections/` | Home page sections, in page order in `src/app/page.tsx` |
| `src/components/DetailPageView.tsx` | Renders a detail page |
| `src/lib/` | Translations and language context, detail page content (`detailPages/`), site constants, splash helpers |
| `public/` | Served as-is: images, videos, `robots.txt` |
| `server.js` | Production entry point run by cPanel |
| `.next/` | Committed production build (see Deploy) |
| `materiale/` | Non-website materials: original images, plus the local-only (gitignored) business card and equipment nameplates ([README](materiale/README.md)) |

## Development

```bash
npm install
npm run dev
```

## Deploy (cPanel)

The server runs the prebuilt `.next` folder with `server.js` and does not build, so always build locally before committing. `~/nodeapp` on the server is a clone of this repository.

1. Locally: `npm run build`, commit everything (including `.next`) and push. Make new commits; do not amend or force-push.
2. cPanel → Git™ Version Control → `euromarket` (`/home/euromark/nodeapp`) → Pull or Deploy → **Update from Remote**.
3. cPanel → Node.js → `euromarket-ro.com/`: **Run NPM Install** (only when `package.json` changed), then **Stop App**.
4. cPanel Terminal: `rm -rf ~/nodeapp/.next/server/route-cache`. The running server caches rendered pages there (gitignored). They survive pulls and restarts, so without this step the site keeps serving the old build's HTML, which points to JS chunks the pull deleted.
5. **Start App**. Check that the home page loads its `/_next/static/chunks/*.js` without 404s.

SMTP settings are environment variables of the Node.js app in cPanel (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_EMAIL`).
