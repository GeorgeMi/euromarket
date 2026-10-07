import { SITE_NAME, SITE_URL, serializeJsonLd } from "@/lib/site";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": ORGANIZATION_ID,
      name: SITE_NAME,
      alternateName: "Euromarket",
      description:
        "Proiectare și construcție stații de epurare ape uzate în România. Tehnologii MBBR, SBR, MBR. Peste 500 proiecte din 1996.",
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/images/logo.png`,
      image: `${SITE_URL}/images/sediu-euromarket-iasi.jpg`,
      telephone: "+40232233693",
      email: "info@euromarket-ro.com",
      foundingDate: "1996",
      address: {
        "@type": "PostalAddress",
        streetAddress: "B-dul Poitiers 50B",
        addressLocality: "Iași",
        addressRegion: "Iași",
        postalCode: "700669",
        addressCountry: "RO",
      },
      hasMap: "https://maps.app.goo.gl/yx8QQRLUn6FrQgKn9",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+40232233693",
        email: "info@euromarket-ro.com",
        contactType: "customer service",
        availableLanguage: ["Romanian", "English"],
      },
      areaServed: { "@type": "Country", name: "Romania" },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      publisher: { "@id": ORGANIZATION_ID },
      inLanguage: ["ro-RO", "en-US"],
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service-wastewater`,
      name: "Stații Epurare Ape Uzate",
      description:
        "Proiectare și construcție stații de epurare municipale și industriale. Tehnologii MBBR, SBR, MBR pentru comunități de toate dimensiunile.",
      provider: { "@id": ORGANIZATION_ID },
      areaServed: { "@type": "Country", name: "Romania" },
      serviceType: "Stație de epurare",
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service-water`,
      name: "Tratarea Apei",
      description:
        "Soluții complete de purificare a apei incluzând filtrare, clarificare, demineralizare și dezinfecție.",
      provider: { "@id": ORGANIZATION_ID },
      areaServed: { "@type": "Country", name: "Romania" },
      serviceType: "Tratarea apei",
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }}
    />
  );
}
