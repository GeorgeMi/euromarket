export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.euromarket-ro.com/#organization",
        name: "Euromarket WWE SRL",
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
          streetAddress: "B-dul Poitiers 50B",
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
          "Proiectare și construcție stații de epurare ape uzate în România. Tehnologii MBBR, SBR, MBR. Peste 500 proiecte din 1996.",
        url: "https://www.euromarket-ro.com",
        telephone: "+40-232-233693",
        email: "info@euromarket-ro.com",
        foundingDate: "1996",
        address: {
          "@type": "PostalAddress",
          streetAddress: "B-dul Poitiers 50B",
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
        name: "Stații Epurare Ape Uzate",
        description:
          "Proiectare și construcție stații de epurare municipale și industriale. Tehnologii MBBR, SBR, MBR pentru comunități de toate dimensiunile.",
        provider: {
          "@id": "https://www.euromarket-ro.com/#organization",
        },
        areaServed: "Romania",
        serviceType: "Statie Epurare",
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
