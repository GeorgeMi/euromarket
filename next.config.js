// Images renamed for SEO; old URLs redirect to the new ones.
const renamedImages = {
  "hero-bg.webp": "statie-epurare-ape-uzate.webp",
  "office.jpg": "sediu-euromarket-iasi.jpg",
  "municipal_600_mc.webp": "statie-epurare-municipala-600-mc.webp",
  "sbr.jpeg": "statie-epurare-industriala-sbr.jpeg",
  "industrial_1.jpeg": "hala-statie-epurare-industriala-daf.jpeg",
  "industrial_2.jpeg": "unitate-flotatie-daf.jpeg",
  "productie.jpeg": "decantor-inox-statie-epurare.jpeg",
  "productie_1.jpeg": "montaj-bazin-inox-statie-epurare.jpeg",
  "productie_2.jpeg": "amplasare-statie-epurare-containerizata.jpeg",
  "productie_3.jpeg": "statie-epurare-containerizata-euromarket.jpeg",
  "productie_4.jpeg": "fabricatie-unitati-flotatie-daf.jpeg",
  "productie_5.jpeg": "transport-echipamente-statie-epurare.jpeg",
  "scada_2.jpeg": "scada-monitorizare-statie-epurare.jpeg",
  "scada_1.webp": "tablou-automatizare-statie-epurare.webp",
};

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
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Single host, so Google does not index duplicates.
      {
        source: "/:path*",
        has: [{ type: "host", value: "euromarket-ro.com" }],
        destination: "https://www.euromarket-ro.com/:path*",
        permanent: true,
      },
      ...Object.entries(renamedImages).map(([from, to]) => ({
        source: `/images/${from}`,
        destination: `/images/${to}`,
        permanent: true,
      })),
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
