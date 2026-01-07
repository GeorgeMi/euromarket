export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.euromarket-ro.com/#organization",
        name: "S.C. Euromarket SRL",
        url: "https://www.euromarket-ro.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.euromarket-ro.com/images/logo.png",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+40-232-233693",
          contactType: "customer service",
          availableLanguage: ["Romanian", "English"],
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Bd. Poitier nr. 53",
          addressLocality: "Iași",
          postalCode: "700669",
          addressCountry: "RO",
        },
        sameAs: [],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.euromarket-ro.com/#localbusiness",
        name: "Euromarket SRL",
        description:
          "Experți în ingineria apei și apelor uzate din 1990. Proiectare, construcție și mentenanță stații de tratare a apei.",
        url: "https://www.euromarket-ro.com",
        telephone: "+40-232-233693",
        email: "info@euromarket-ro.com",
        foundingDate: "1990",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Bd. Poitier nr. 53",
          addressLocality: "Iași",
          postalCode: "700669",
          addressRegion: "Iași",
          addressCountry: "RO",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "47.1585",
          longitude: "27.6014",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "17:00",
        },
        priceRange: "$$",
        image: "https://www.euromarket-ro.com/images/office.jpg",
        areaServed: {
          "@type": "Country",
          name: "Romania",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.euromarket-ro.com/#website",
        url: "https://www.euromarket-ro.com",
        name: "Euromarket SRL",
        publisher: {
          "@id": "https://www.euromarket-ro.com/#organization",
        },
        inLanguage: ["ro-RO", "en-US"],
      },
      {
        "@type": "Service",
        "@id": "https://www.euromarket-ro.com/#service-water",
        name: "Tratarea Apei",
        description:
          "Soluții complete de purificare a apei incluzând filtrare, clarificare, demineralizare și dezinfecție.",
        provider: {
          "@id": "https://www.euromarket-ro.com/#organization",
        },
        areaServed: "Romania",
        serviceType: "Water Treatment",
      },
      {
        "@type": "Service",
        "@id": "https://www.euromarket-ro.com/#service-wastewater",
        name: "Tratarea Apelor Uzate",
        description:
          "Stații de epurare cu tehnologii avansate MBBR, SBR și MBR pentru comunități de toate dimensiunile.",
        provider: {
          "@id": "https://www.euromarket-ro.com/#organization",
        },
        areaServed: "Romania",
        serviceType: "Wastewater Treatment",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
