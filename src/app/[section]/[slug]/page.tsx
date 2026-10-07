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

// Metadata and JSON-LD use the Romanian content, which is what the server renders.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = await getPage(params);
  const { metaTitle, metaDescription } = page.content.ro;
  const url = `${SITE_URL}${pagePath(page)}`;
  const image = { url: "/images/og-image.png", width: 1200, height: 630, alt: metaTitle };

  return {
    title: metaTitle,
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["WebPage", "FAQPage"],
        "@id": `${url}#webpage`,
        url,
        name: content.metaTitle,
        description: content.metaDescription,
        inLanguage: "ro-RO",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${url}#service` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: content.faq.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
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
        "@id": `${url}#service`,
        name: content.title,
        description: content.metaDescription,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "Romania" },
        url,
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
