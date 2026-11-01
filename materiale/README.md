# materiale

Euromarket materials that are not part of the website. Nothing here is served or built: Next.js serves only `public/`.

`carte-vizita/` and `etichete/` are gitignored because the repo is public. They exist only on the local machine, so back them up separately.

| Path | Contents |
|---|---|
| `carte-vizita/` | Business card: `carte_vizita.html` is the source and `carte_vizita.pdf` the print file. `qr-code.png` encodes `http://www.euromarket-ro.com`. The card's logo comes from `../../public/images/logo.png`. |
| `etichete/<TIP>_<PROIECT>/` | Equipment nameplates for engraving, at 150 × 100 mm. Each folder has a vector PDF, SVG, EPS and DXF (mm), plus 1-bit 1200 dpi PNG, BMP and TIF. `CITESTE.txt` is the note for the engraver. |
| `imagini-originale/` | Full-size sources of optimised images in `public/images/`. |

New nameplate: copy an existing `etichete/` folder, and in its SVG or PDF edit only the values (DENUMIRE, TIP, AN FABRICATIE, SR., CAPACITATE, PROIECT, GREUTATE).
