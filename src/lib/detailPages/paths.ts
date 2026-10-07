// Kept apart from the page content so home page links do not bundle it.
export const SLUGS = {
  aplicatii: {
    sewage: "statii-epurare-ape-uzate-menajere",
    water: "statii-tratare-apa",
    industrial: "epurare-ape-uzate-industriale",
  },
  servicii: {
    design: "proiectare-constructie-statii-epurare",
    operation: "operare-mentenanta-statii-epurare",
    repair: "reparatii-modernizare-statii-epurare",
    equipment: "revizie-echipamente",
    pilot: "unitati-pilot-laborator",
    consulting: "consultanta-training-tratare-apa",
  },
  tehnologii: {
    mbbr: "mbbr",
    sbr: "sbr",
    mbr: "mbr",
    daf: "flotatie-daf",
    ro: "osmoza-inversa",
    uf: "ultrafiltrare",
  },
} as const;

export type Section = keyof typeof SLUGS;
export type PageId<S extends Section> = keyof (typeof SLUGS)[S];

export function slugFor(section: Section, id: string): string {
  const slug = (SLUGS[section] as Record<string, string>)[id];
  if (!slug) throw new Error(`Unknown page: ${section}/${id}`);
  return slug;
}

export const pathFor = (section: Section, id: string) => `/${section}/${slugFor(section, id)}`;
