import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailPageView from "@/components/DetailPageView";
import { DETAIL_PAGES, findPage, pagePath, pageSlug } from "@/lib/detailPages";
import { SITE_NAME, SITE_URL, serializeJsonLd } from "@/lib/site";

type Props = {
  params: Promise<{ section: string; slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return DETAIL_PAGES.map((page) => ({ section: page.section, slug: pageSlug(page) }));
}

async function getPage(params: Props["params"]) {
  const { section, slug } = await params;
  const page = findPage(section, slug);
  if (!page) notFound();
  return page;
}

const OG_IMAGE = { url: "/images/og-image.png", width: 1200, height: 630 };

// Google cuts titles at ~60 characters, so the brand suffix is added only when it still fits.
const TITLE_SUFFIX = " | Euromarket WWE";
const fullTitle = (title: string) => (title.length + TITLE_SUFFIX.length <= 60 ? title + TITLE_SUFFIX : title);

// Metadata and JSON-LD use the Romanian content, which is what the server renders.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = await getPage(params);
  const { metaTitle, metaDescription } = page.content.ro;
  const url = `${SITE_URL}${pagePath(page)}`;
  const image = { ...OG_IMAGE, alt: metaTitle };

  return {
    title: { absolute: fullTitle(metaTitle) },
    description: metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "ro_RO",
      url,
      siteName: SITE_NAME,
      title: metaTitle,
      description: metaDescription,
      images: [image],
    },
    twitter: { card: "summary_large_image", title: metaTitle, description: metaDescription, images: [image.url] },
  };
}

export default async function DetailPage({ params }: Props) {
  const page = await getPage(params);
  const content = page.content.ro;
  const url = `${SITE_URL}${pagePath(page)}`;
  const related = DETAIL_PAGES.filter((p) => p.section === page.section && p.id !== page.id).map((p) => ({
    path: pagePath(p),
    title: { ro: p.content.ro.title, en: p.content.en.title },
  }));

  // The page's main entity is the Service; the FAQ is shown on the page but not marked up.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: content.metaTitle,
        description: content.metaDescription,
        inLanguage: "ro-RO",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${url}#mainentity` },
        primaryImageOfPage: { "@id": `${url}#primaryimage` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: { "@id": `${url}#mainentity` },
      },
      {
        "@type": "ImageObject",
        "@id": `${url}#primaryimage`,
        contentUrl: `${SITE_URL}${OG_IMAGE.url}`,
        url: `${SITE_URL}${OG_IMAGE.url}`,
        width: OG_IMAGE.width,
        height: OG_IMAGE.height,
        encodingFormat: "image/png",
        representativeOfPage: true,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Acasă", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: content.title, item: url },
        ],
      },
      {
        "@type": "Service",
        "@id": `${url}#mainentity`,
        name: content.title,
        serviceType: content.title,
        description: content.metaDescription,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "Romania" },
        url,
        mainEntityOfPage: { "@id": `${url}#webpage` },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <DetailPageView page={page} related={related} />
    </>
  );
}
