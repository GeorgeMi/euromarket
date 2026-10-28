const { createServer } = require('http');
const next = require('next');

const dev = false;
const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Force HTTPS redirect
      if (req.headers['x-forwarded-proto'] === 'http') {
        res.writeHead(301, { Location: 'https://' + req.headers.host + req.url });
        res.end();
        return;
      }

      // Next.js parses the URL itself; url.parse() is deprecated.
      await handle(req, res);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
