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
    ];
  },
};

module.exports = nextConfig;
