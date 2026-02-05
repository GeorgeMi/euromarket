/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Redirect old .htm pages to new site
      {
        source: "/index.htm",
        destination: "/",
        permanent: true,
      },
      {
        source: "/contact.htm",
        destination: "/#contact",
        permanent: true,
      },
      {
        source: "/echipamente.htm",
        destination: "/#technologies",
        permanent: true,
      },
      {
        source: "/servicii.htm",
        destination: "/#services",
        permanent: true,
      },
      {
        source: "/despre.htm",
        destination: "/#about",
        permanent: true,
      },
      {
        source: "/portofoliu.htm",
        destination: "/#portfolio",
        permanent: true,
      },
      {
        source: "/aplicatii.htm",
        destination: "/#applications",
        permanent: true,
      },
      // Catch-all for any other old .htm pages
      {
        source: "/:path*.htm",
        destination: "/",
        permanent: true,
      },
      // Redirect /terms to privacy (if old site had it)
      {
        source: "/terms",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/termeni",
        destination: "/privacy",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
