"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import type { DetailContent, DetailPage } from "@/lib/detailPages";
import type { Language } from "@/lib/translations";

export type RelatedLink = { path: string; title: Record<Language, string> };

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

function ContentSection({ section }: { section: DetailContent["sections"][number] }) {
  const List = section.steps ? "ol" : "ul";
  return (
    <motion.div {...reveal}>
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">{section.heading}</h2>
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="text-muted text-lg leading-relaxed text-justify mb-6">
          {paragraph}
        </p>
      ))}
      {section.items && (
        <List className="grid sm:grid-cols-2 gap-4">
          {section.items.map((item, i) => (
            <li key={item} className="flex gap-4 items-start bg-surface rounded-2xl p-5 card-shadow">
              {section.steps ? (
                <span className="w-9 h-9 flex-shrink-0 rounded-xl gradient-primary text-white font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              ) : (
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-accent" />
              )}
              <span className="text-foreground leading-relaxed">{item}</span>
            </li>
          ))}
        </List>
      )}
    </motion.div>
  );
}

export default function DetailPageView({ page, related }: { page: DetailPage; related: RelatedLink[] }) {
  const { language, t } = useLanguage();
  const content = page.content[language];

  return (
    <>
      <section className="gradient-primary text-white pt-28 pb-16 sm:pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-white/70 mb-8">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {t.detail.home}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">{content.title}</li>
            </ol>
          </nav>
          <motion.div {...reveal}>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              {t.detail.sections[page.section]}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6 leading-tight">{content.title}</h1>
            <div className="space-y-4 text-white/85 text-lg leading-relaxed text-justify">
              {content.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto space-y-14">
          {page.media && (
            <motion.div {...reveal} className="relative aspect-video rounded-2xl overflow-hidden card-shadow-lg bg-black">
              {page.media.type === "video" ? (
                <video
                  src={page.media.src}
                  aria-label={content.title}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={page.media.src}
                  alt={t.imageAlts[page.media.alt]}
                  fill
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-cover"
                />
              )}
            </motion.div>
          )}

          {content.sections.map((section) => (
            <ContentSection key={section.heading} section={section} />
          ))}
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto">
          <motion.h2 {...reveal} className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-10">
            {t.detail.faqTitle}
          </motion.h2>
          <div className="space-y-4">
            {content.faq.map(({ question, answer }) => (
              <details key={question} className="group bg-white rounded-2xl p-6 card-shadow">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground">
                  {question}
                  <Plus className="w-5 h-5 flex-shrink-0 text-primary transition-transform group-open:rotate-45" aria-hidden="true" />
                </summary>
                <p className="mt-4 text-muted leading-relaxed text-justify">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding gradient-primary text-white text-center">
        <motion.div {...reveal} className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">{t.detail.ctaTitle}</h2>
          <p className="text-white/80 text-lg mb-8">{t.detail.ctaText}</p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-white/90 transition-all duration-300 shadow-xl"
          >
            {t.detail.ctaButton}
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-10">
            {t.detail.related[page.section]}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {related.map((p) => (
              <Link
                key={p.path}
                href={p.path}
                className="group flex items-center justify-between gap-4 bg-surface rounded-2xl p-5 card-shadow hover:card-shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <span className="font-semibold text-foreground">{p.title[language]}</span>
                <ArrowRight className="w-5 h-5 flex-shrink-0 text-primary transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
