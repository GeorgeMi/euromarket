import { applications } from "./applications";
import { services } from "./services";
import { technologies } from "./technologies";
import { pathFor, slugFor } from "./paths";
import type { DetailPage } from "./types";

export type { DetailContent, DetailMedia, DetailPage } from "./types";

export const DETAIL_PAGES: DetailPage[] = [...applications, ...services, ...technologies];

export const pageSlug = (page: DetailPage) => slugFor(page.section, page.id);
export const pagePath = (page: DetailPage) => pathFor(page.section, page.id);

export function findPage(section: string, slug: string): DetailPage | undefined {
  return DETAIL_PAGES.find((page) => page.section === section && pageSlug(page) === slug);
}
