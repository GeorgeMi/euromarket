# Euromarket WWE – euromarket-ro.com

Next.js site for Euromarket WWE SRL (wastewater and water treatment plants).

## Development

```bash
npm install
npm run dev
```

## Deploy (cPanel)

The server runs the prebuilt `.next` folder with `server.js` and does not build, so always build locally before committing. `~/nodeapp` on the server is a clone of this repository.

1. Locally: `npm run build`, commit everything (including `.next`) and push. Make new commits; do not amend or force-push.
2. cPanel → Git™ Version Control → `euromarket` (`/home/euromark/nodeapp`) → Pull or Deploy → **Update from Remote**.
3. cPanel → Node.js → `euromarket-ro.com/`: **Run NPM Install** (only when `package.json` changed), then **Restart**.

SMTP settings are environment variables of the Node.js app in cPanel (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_EMAIL`).
