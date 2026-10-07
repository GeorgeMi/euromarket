import type { Language, TranslationKeys } from "@/lib/translations";
import type { PageId, Section } from "./paths";

export type DetailContent = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  intro: string[];
  sections: { heading: string; paragraphs?: string[]; items?: string[]; steps?: boolean }[];
  faq: { question: string; answer: string }[];
};

export type DetailMedia =
  | { type: "video"; src: string }
  | { type: "image"; src: string; alt: keyof TranslationKeys["imageAlts"] };

export type DetailPage = {
  [S in Section]: {
    section: S;
    id: PageId<S>;
    media?: DetailMedia;
    content: Record<Language, DetailContent>;
  };
}[Section];
