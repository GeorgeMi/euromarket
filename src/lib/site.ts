export const SITE_URL = "https://www.euromarket-ro.com";
export const SITE_NAME = "Euromarket WWE SRL";

/** Escaping "<" keeps the JSON from closing its <script> element. */
export const serializeJsonLd = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");
