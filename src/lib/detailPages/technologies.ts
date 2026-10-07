import type { DetailPage } from "./types";

export const technologies: DetailPage[] = [
  {
    section: "tehnologii",
    id: "mbbr",
    media: { type: "video", src: "/videos/mbbr.mp4" },
    content: {
      ro: {
        metaTitle: "Stație de epurare MBBR – reactor cu biofilm mobil",
        metaDescription:
          "Tehnologia MBBR (Moving Bed Biofilm Reactor) pentru stații de epurare compacte, stabile și ușor de extins, pentru aplicații menajere, municipale și industriale.",
        title: "Tehnologia MBBR – reactor cu biofilm mobil",
        intro: [
          "MBBR (Moving Bed Biofilm Reactor) este o tehnologie de epurare biologică în care bacteriile se dezvoltă pe suporturi din plastic aflate în mișcare continuă în bazinul de aerare. Biofilmul format pe aceste suporturi descompune poluanții organici din apa uzată.",
          "Tehnologia este compactă, stabilă la variații de încărcare și ușor de extins, motiv pentru care este folosită atât în stații mici, cât și în stații municipale și industriale.",
        ],
        sections: [
          {
            heading: "Cum funcționează",
            steps: true,
            items: [
              "Apa uzată intră în reactorul aerat, care conține suporturile pentru biofilm",
              "Aerarea menține suporturile în mișcare și asigură oxigenul necesar bacteriilor",
              "Biofilmul descompune poluanții organici și, după caz, compușii azotului",
              "Apa trece apoi prin decantare sau filtrare, pentru separarea nămolului",
            ],
          },
          {
            heading: "Avantaje",
            items: [
              "Suprafață ocupată redusă pentru aceeași capacitate",
              "Funcționare stabilă la variații de debit și încărcare",
              "Operare simplă, fără recircularea nămolului în reactor",
              "Capacitate ușor de extins prin adăugarea de suporturi",
              "Potrivită pentru modernizarea bazinelor existente",
            ],
          },
          {
            heading: "Din proiectele noastre",
            paragraphs: [
              "Printre proiectele noastre se numără o stație de epurare municipală MBBR pentru aproximativ 3.000 de locuitori.",
            ],
          },
        ],
        faq: [
          {
            question: "Ce înseamnă MBBR?",
            answer: "MBBR vine de la Moving Bed Biofilm Reactor – reactor cu biofilm pe suport mobil.",
          },
          {
            question: "Pentru ce capacități se potrivește MBBR?",
            answer:
              "Tehnologia se folosește de la stații compacte pentru gospodării și pensiuni până la stații municipale și industriale.",
          },
          {
            question: "Care este diferența față de nămolul activ clasic?",
            answer:
              "În MBBR, bacteriile cresc atașate pe suporturi mobile, ceea ce permite o concentrație mai mare de biomasă într-un volum mai mic și o funcționare mai stabilă.",
          },
        ],
      },
      en: {
        metaTitle: "MBBR Treatment Plant – Moving Bed Biofilm Reactor",
        metaDescription:
          "MBBR (Moving Bed Biofilm Reactor) technology for compact, stable and easily expandable treatment plants, for domestic, municipal and industrial applications.",
        title: "MBBR technology – moving bed biofilm reactor",
        intro: [
          "MBBR (Moving Bed Biofilm Reactor) is a biological treatment technology in which bacteria grow on plastic carriers that move continuously in the aeration tank. The biofilm on these carriers breaks down the organic pollutants in the wastewater.",
          "The technology is compact, stable under load variations and easy to expand, which is why it is used in small plants as well as in municipal and industrial plants.",
        ],
        sections: [
          {
            heading: "How it works",
            steps: true,
            items: [
              "Wastewater enters the aerated reactor containing the biofilm carriers",
              "Aeration keeps the carriers moving and supplies oxygen to the bacteria",
              "The biofilm breaks down organic pollutants and, where required, nitrogen compounds",
              "The water then passes through clarification or filtration to separate the sludge",
            ],
          },
          {
            heading: "Advantages",
            items: [
              "Smaller footprint for the same capacity",
              "Stable operation under flow and load variations",
              "Simple operation, with no sludge recirculation in the reactor",
              "Capacity easily expanded by adding carriers",
              "Well suited to upgrading existing tanks",
            ],
          },
          {
            heading: "From our projects",
            paragraphs: ["Our projects include an MBBR municipal wastewater plant serving about 3,000 residents."],
          },
        ],
        faq: [
          {
            question: "What does MBBR stand for?",
            answer: "MBBR stands for Moving Bed Biofilm Reactor.",
          },
          {
            question: "What capacities is MBBR suitable for?",
            answer:
              "The technology is used from compact plants for households and guesthouses to municipal and industrial plants.",
          },
          {
            question: "How does it differ from conventional activated sludge?",
            answer:
              "In MBBR, bacteria grow attached to moving carriers, allowing a higher biomass concentration in a smaller volume and more stable operation.",
          },
        ],
      },
    },
  },
  {
    section: "tehnologii",
    id: "sbr",
    media: { type: "video", src: "/videos/sbr.mp4" },
    content: {
      ro: {
        metaTitle: "Stație de epurare SBR – reactor secvențial",
        metaDescription:
          "Tehnologia SBR (Sequencing Batch Reactor): epurare biologică în cicluri, într-un singur bazin, potrivită pentru debite variabile și aplicații menajere sau industriale.",
        title: "Tehnologia SBR – reactor secvențial",
        intro: [
          "SBR (Sequencing Batch Reactor) este o tehnologie de epurare cu nămol activ în care toate etapele – umplere, aerare, decantare și evacuare – au loc succesiv, în cicluri, în același bazin.",
          "Funcționarea în cicluri controlate automat face tehnologia potrivită pentru debite variabile și pentru aplicații în care spațiul este limitat.",
        ],
        sections: [
          {
            heading: "Etapele unui ciclu SBR",
            steps: true,
            items: [
              "Umplere – apa uzată intră în reactor",
              "Reacție – aerare și amestecare pentru descompunerea poluanților",
              "Decantare – nămolul se depune, iar apa limpede rămâne la suprafață",
              "Evacuare – apa epurată este evacuată, iar excesul de nămol este extras",
            ],
          },
          {
            heading: "Avantaje",
            items: [
              "Un singur bazin pentru tratare și decantare",
              "Flexibilitate la variații de debit și încărcare",
              "Control precis al procesului prin automatizare",
              "Eliminarea azotului și a fosforului prin ajustarea ciclurilor",
            ],
          },
          {
            heading: "Automatizare",
            paragraphs: [
              "Ciclurile SBR sunt controlate prin automatizare (PLC), iar parametrii pot fi monitorizați prin sisteme SCADA.",
            ],
          },
        ],
        faq: [
          {
            question: "Ce înseamnă SBR?",
            answer: "SBR vine de la Sequencing Batch Reactor – reactor secvențial cu funcționare în cicluri.",
          },
          {
            question: "Când se alege SBR?",
            answer:
              "Pentru debite variabile, pentru obiective cu activitate intermitentă și pentru aplicații industriale cu încărcări care variază.",
          },
          {
            question: "SBR sau MBBR?",
            answer:
              "Ambele tehnologii sunt eficiente. Alegerea depinde de debit, de variațiile de încărcare, de spațiul disponibil și de cerințele pentru efluent.",
          },
        ],
      },
      en: {
        metaTitle: "SBR Treatment Plant – Sequencing Batch Reactor",
        metaDescription:
          "SBR (Sequencing Batch Reactor) technology: cyclic biological treatment in a single tank, suited to variable flows and domestic or industrial applications.",
        title: "SBR technology – sequencing batch reactor",
        intro: [
          "SBR (Sequencing Batch Reactor) is an activated sludge technology in which all stages – fill, aeration, settling and decant – take place one after another, in cycles, in the same tank.",
          "Automatically controlled cycles make the technology well suited to variable flows and to applications with limited space.",
        ],
        sections: [
          {
            heading: "Stages of an SBR cycle",
            steps: true,
            items: [
              "Fill – wastewater enters the reactor",
              "React – aeration and mixing break down the pollutants",
              "Settle – the sludge settles and clear water remains on top",
              "Decant – treated water is discharged and excess sludge is removed",
            ],
          },
          {
            heading: "Advantages",
            items: [
              "A single tank for treatment and settling",
              "Flexibility under flow and load variations",
              "Precise process control through automation",
              "Nitrogen and phosphorus removal by adjusting the cycles",
            ],
          },
          {
            heading: "Automation",
            paragraphs: ["SBR cycles are controlled by automation (PLC), and parameters can be monitored via SCADA systems."],
          },
        ],
        faq: [
          {
            question: "What does SBR stand for?",
            answer: "SBR stands for Sequencing Batch Reactor, a reactor operating in cycles.",
          },
          {
            question: "When is SBR the right choice?",
            answer: "For variable flows, sites with intermittent activity and industrial applications with varying loads.",
          },
          {
            question: "SBR or MBBR?",
            answer:
              "Both technologies are effective. The choice depends on the flow, load variations, available space and effluent requirements.",
          },
        ],
      },
    },
  },
  {
    section: "tehnologii",
    id: "mbr",
    content: {
      ro: {
        metaTitle: "Stație de epurare MBR – bioreactor cu membrane",
        metaDescription:
          "Tehnologia MBR (Membrane Bioreactor) combină epurarea biologică cu filtrarea prin membrane, pentru apă epurată de calitate ridicată, potrivită pentru reutilizare.",
        title: "Tehnologia MBR – bioreactor cu membrane",
        intro: [
          "MBR (Membrane Bioreactor) combină epurarea biologică cu nămol activ cu filtrarea prin membrane de micro- sau ultrafiltrare. Membranele înlocuiesc decantorul secundar și rețin solidele în suspensie și o mare parte din bacterii.",
          "Rezultatul este un efluent de calitate ridicată, potrivit pentru evacuarea în zone sensibile sau pentru reutilizarea apei, într-o stație compactă.",
        ],
        sections: [
          {
            heading: "Avantaje",
            items: [
              "Calitate ridicată a apei epurate",
              "Stație compactă, fără decantor secundar",
              "Potrivită pentru reutilizarea apei, de exemplu la irigații sau în procese industriale",
              "Funcționare stabilă la concentrații mari de biomasă",
            ],
          },
          {
            heading: "Aplicații",
            items: [
              "Obiective în zone sensibile sau cu limite de evacuare stricte",
              "Hoteluri și complexe turistice",
              "Industrie, pentru reutilizarea apei",
              "Modernizarea stațiilor existente fără spațiu pentru extindere",
            ],
          },
          {
            heading: "Operare",
            paragraphs: [
              "Membranele necesită curățare periodică, realizată automat sau cu sisteme CIP. Automatizarea și monitorizarea online mențin procesul în parametri optimi.",
            ],
          },
        ],
        faq: [
          {
            question: "Ce înseamnă MBR?",
            answer: "MBR vine de la Membrane Bioreactor – bioreactor cu membrane.",
          },
          {
            question: "Apa epurată MBR poate fi reutilizată?",
            answer:
              "Calitatea ridicată a efluentului face posibilă reutilizarea apei pentru anumite aplicații, în funcție de cerințele legale și de utilizarea dorită.",
          },
          {
            question: "Cum se întrețin membranele?",
            answer:
              "Prin curățări periodice, automate sau cu sisteme CIP, conform recomandărilor producătorului membranelor.",
          },
        ],
      },
      en: {
        metaTitle: "MBR Treatment Plant – Membrane Bioreactor",
        metaDescription:
          "MBR (Membrane Bioreactor) technology combines biological treatment with membrane filtration, for high-quality treated water suitable for reuse.",
        title: "MBR technology – membrane bioreactor",
        intro: [
          "MBR (Membrane Bioreactor) combines activated sludge treatment with micro- or ultrafiltration membranes. The membranes replace the secondary clarifier and retain suspended solids and most bacteria.",
          "The result is a high-quality effluent, suitable for discharge in sensitive areas or for water reuse, from a compact plant.",
        ],
        sections: [
          {
            heading: "Advantages",
            items: [
              "High treated water quality",
              "Compact plant with no secondary clarifier",
              "Suitable for water reuse, for example irrigation or industrial processes",
              "Stable operation at high biomass concentrations",
            ],
          },
          {
            heading: "Applications",
            items: [
              "Sites in sensitive areas or with strict discharge limits",
              "Hotels and tourist complexes",
              "Industry, for water reuse",
              "Upgrading existing plants with no room to expand",
            ],
          },
          {
            heading: "Operation",
            paragraphs: [
              "Membranes need periodic cleaning, done automatically or with CIP systems. Automation and online monitoring keep the process within optimal parameters.",
            ],
          },
        ],
        faq: [
          {
            question: "What does MBR stand for?",
            answer: "MBR stands for Membrane Bioreactor.",
          },
          {
            question: "Can MBR effluent be reused?",
            answer:
              "The high effluent quality makes water reuse possible for certain applications, depending on legal requirements and the intended use.",
          },
          {
            question: "How are the membranes maintained?",
            answer: "Through periodic cleaning, automatic or with CIP systems, following the membrane manufacturer's recommendations.",
          },
        ],
      },
    },
  },
  {
    section: "tehnologii",
    id: "daf",
    media: { type: "video", src: "/videos/daf.mp4" },
    content: {
      ro: {
        metaTitle: "Flotație cu aer dizolvat (DAF) pentru ape uzate",
        metaDescription:
          "Unități de flotație cu aer dizolvat (DAF) pentru separarea grăsimilor, uleiurilor și suspensiilor din apele uzate industriale. Fabricație proprie Euromarket.",
        title: "Flotație cu aer dizolvat (DAF)",
        intro: [
          "Flotația cu aer dizolvat (DAF – Dissolved Air Flotation) separă grăsimile, uleiurile și solidele în suspensie din apa uzată cu ajutorul unor microbule de aer. Bulele se atașează de particule și le aduc la suprafață, de unde sunt îndepărtate mecanic.",
          "Fabricăm unități de flotație DAF în atelierul propriu, adaptate debitului și caracteristicilor apelor uzate din fiecare proiect.",
        ],
        sections: [
          {
            heading: "Cum funcționează",
            steps: true,
            items: [
              "Apa uzată poate fi tratată în prealabil cu reactivi de coagulare și floculare",
              "O parte din apă este saturată cu aer sub presiune",
              "La destindere se formează microbule, care se atașează de particule",
              "Particulele flotate sunt îndepărtate de la suprafață, iar apa limpezită este evacuată",
            ],
          },
          {
            heading: "Aplicații",
            items: [
              "Industria alimentară: lactate, carne, procesare",
              "Ape uzate cu grăsimi și uleiuri",
              "Pre-epurare înainte de treapta biologică",
              "Îngroșarea nămolului",
            ],
          },
          {
            heading: "Din proiectele noastre",
            paragraphs: ["Am realizat stații de epurare industriale cu flotație DAF, cu funcționare continuă, 24/7."],
          },
        ],
        faq: [
          {
            question: "Ce elimină flotația DAF?",
            answer:
              "În principal grăsimi, uleiuri și solide în suspensie, inclusiv o parte din încărcarea organică asociată acestora.",
          },
          {
            question: "Unde se folosește DAF?",
            answer:
              "Mai ales ca pre-epurare pentru apele uzate industriale, înainte de treapta biologică sau de deversarea în canalizare.",
          },
          {
            question: "Fabricați unitățile DAF?",
            answer: "Da. Unitățile de flotație DAF sunt fabricate în atelierul nostru și dimensionate pentru fiecare proiect.",
          },
        ],
      },
      en: {
        metaTitle: "Dissolved Air Flotation (DAF) for Wastewater",
        metaDescription:
          "Dissolved air flotation (DAF) units for removing fats, oils and suspended solids from industrial wastewater. Manufactured in-house by Euromarket.",
        title: "Dissolved air flotation (DAF)",
        intro: [
          "Dissolved air flotation (DAF) removes fats, oils and suspended solids from wastewater using micro air bubbles. The bubbles attach to particles and carry them to the surface, where they are removed mechanically.",
          "We manufacture DAF units in our own workshop, sized for the flow and wastewater characteristics of each project.",
        ],
        sections: [
          {
            heading: "How it works",
            steps: true,
            items: [
              "Wastewater can be pre-treated with coagulation and flocculation chemicals",
              "Part of the water is saturated with air under pressure",
              "On pressure release, micro bubbles form and attach to the particles",
              "Floated particles are skimmed off the surface and the clarified water is discharged",
            ],
          },
          {
            heading: "Applications",
            items: [
              "Food industry: dairy, meat, processing",
              "Wastewater with fats and oils",
              "Pre-treatment before the biological stage",
              "Sludge thickening",
            ],
          },
          {
            heading: "From our projects",
            paragraphs: ["We have built industrial wastewater plants with DAF flotation running continuously, 24/7."],
          },
        ],
        faq: [
          {
            question: "What does DAF remove?",
            answer: "Mainly fats, oils and suspended solids, including part of the associated organic load.",
          },
          {
            question: "Where is DAF used?",
            answer: "Mostly as pre-treatment for industrial wastewater, before the biological stage or discharge to the sewer.",
          },
          {
            question: "Do you manufacture the DAF units?",
            answer: "Yes. Our DAF units are manufactured in our workshop and sized for each project.",
          },
        ],
      },
    },
  },
  {
    section: "tehnologii",
    id: "ro",
    content: {
      ro: {
        metaTitle: "Osmoză inversă pentru tratarea apei",
        metaDescription:
          "Sisteme de osmoză inversă pentru demineralizare și apă de proces: reducerea sărurilor dizolvate și a contaminanților, pentru industrie și alte aplicații.",
        title: "Osmoză inversă pentru tratarea apei",
        intro: [
          "Osmoza inversă (RO – Reverse Osmosis) este un proces de filtrare prin membrane semipermeabile: apa este forțată sub presiune să treacă prin membrană, în timp ce sărurile dizolvate și majoritatea contaminanților sunt reținuți.",
          "Folosim osmoza inversă pentru demineralizarea apei, pentru apă de proces cu puritate ridicată și pentru tratarea apelor cu salinitate ridicată.",
        ],
        sections: [
          {
            heading: "Aplicații",
            items: [
              "Apă de proces pentru industrie",
              "Apă demineralizată pentru cazane și sisteme de răcire",
              "Tratarea apelor salmastre",
              "Treaptă finală în tratarea apei potabile, atunci când este necesar",
            ],
          },
          {
            heading: "Componentele unui sistem de osmoză inversă",
            items: [
              "Pre-tratare: filtrare, eventual ultrafiltrare, și dozare de antiscalant",
              "Pompe de înaltă presiune",
              "Module cu membrane de osmoză inversă",
              "Sistem de curățare CIP",
              "Automatizare și monitorizarea conductivității",
            ],
          },
          {
            heading: "Importanța pre-tratării",
            paragraphs: [
              "O pre-tratare corectă protejează membranele de colmatare și depuneri și le prelungește durata de viață. Schema de pre-tratare se stabilește în funcție de analiza apei brute.",
            ],
          },
        ],
        faq: [
          {
            question: "Ce elimină osmoza inversă?",
            answer: "Majoritatea sărurilor dizolvate, precum și o mare parte din alte substanțe dizolvate și microorganisme.",
          },
          {
            question: "Este nevoie de pre-tratare?",
            answer: "Da. Pre-tratarea protejează membranele și asigură funcționarea stabilă a sistemului.",
          },
          {
            question: "Cum se întrețin membranele de osmoză inversă?",
            answer: "Prin monitorizarea parametrilor de funcționare și prin curățări periodice cu sisteme CIP.",
          },
        ],
      },
      en: {
        metaTitle: "Reverse Osmosis for Water Treatment",
        metaDescription:
          "Reverse osmosis systems for demineralisation and process water: removal of dissolved salts and contaminants, for industry and other applications.",
        title: "Reverse osmosis for water treatment",
        intro: [
          "Reverse osmosis (RO) is a filtration process using semi-permeable membranes: water is forced through the membrane under pressure, while dissolved salts and most contaminants are retained.",
          "We use reverse osmosis for water demineralisation, high-purity process water and the treatment of high-salinity water.",
        ],
        sections: [
          {
            heading: "Applications",
            items: [
              "Process water for industry",
              "Demineralised water for boilers and cooling systems",
              "Brackish water treatment",
              "Final stage in drinking water treatment, when needed",
            ],
          },
          {
            heading: "Components of a reverse osmosis system",
            items: [
              "Pre-treatment: filtration, possibly ultrafiltration, and antiscalant dosing",
              "High-pressure pumps",
              "Reverse osmosis membrane modules",
              "CIP cleaning system",
              "Automation and conductivity monitoring",
            ],
          },
          {
            heading: "Why pre-treatment matters",
            paragraphs: [
              "Proper pre-treatment protects the membranes from fouling and scaling and extends their service life. The pre-treatment scheme is defined from the raw water analysis.",
            ],
          },
        ],
        faq: [
          {
            question: "What does reverse osmosis remove?",
            answer: "Most dissolved salts, as well as a large share of other dissolved substances and microorganisms.",
          },
          {
            question: "Is pre-treatment needed?",
            answer: "Yes. Pre-treatment protects the membranes and keeps the system running reliably.",
          },
          {
            question: "How are RO membranes maintained?",
            answer: "By monitoring operating parameters and periodic cleaning with CIP systems.",
          },
        ],
      },
    },
  },
  {
    section: "tehnologii",
    id: "uf",
    content: {
      ro: {
        metaTitle: "Ultrafiltrare – filtrarea apei prin membrane",
        metaDescription:
          "Sisteme de ultrafiltrare pentru apă potabilă, apă de proces și pre-tratare pentru osmoză inversă: reținerea suspensiilor, a bacteriilor și a turbidității.",
        title: "Ultrafiltrare pentru tratarea apei",
        intro: [
          "Ultrafiltrarea (UF) este un proces de filtrare prin membrane cu pori foarte fini, care rețin solidele în suspensie, turbiditatea, bacteriile și o mare parte din virusuri, lăsând să treacă apa și sărurile dizolvate.",
          "Ultrafiltrarea este folosită în tratarea apei potabile, pentru apă de proces și ca pre-tratare pentru sistemele de osmoză inversă.",
        ],
        sections: [
          {
            heading: "Aplicații",
            items: [
              "Tratarea apei potabile din surse de suprafață sau subterane",
              "Apă de proces pentru industrie",
              "Pre-tratare pentru osmoză inversă",
              "Tratare terțiară a apelor uzate epurate, pentru reutilizare",
            ],
          },
          {
            heading: "Avantaje",
            items: [
              "Calitate constantă a apei filtrate, chiar dacă apa brută variază",
              "Reținerea bacteriilor și a turbidității fără cantități mari de reactivi",
              "Sisteme compacte și modulare",
              "Funcționare automată, cu spălări periodice",
            ],
          },
          {
            heading: "Operare",
            paragraphs: [
              "Membranele de ultrafiltrare sunt spălate automat la intervale regulate și curățate chimic periodic, prin sisteme CIP. Automatizarea urmărește continuu presiunile și debitele.",
            ],
          },
        ],
        faq: [
          {
            question: "Ce diferență este între ultrafiltrare și osmoză inversă?",
            answer:
              "Ultrafiltrarea reține particulele, bacteriile și turbiditatea, dar nu și sărurile dizolvate. Osmoza inversă reține și majoritatea sărurilor dizolvate.",
          },
          {
            question: "Ultrafiltrarea înlocuiește dezinfecția?",
            answer:
              "Ultrafiltrarea reduce semnificativ microorganismele, dar în tratarea apei potabile se folosește, de regulă, și o treaptă de dezinfecție.",
          },
          {
            question: "Se poate folosi ultrafiltrarea pentru reutilizarea apei?",
            answer: "Da. Ultrafiltrarea este folosită ca tratare terțiară a apelor uzate epurate, atunci când apa urmează să fie reutilizată.",
          },
        ],
      },
      en: {
        metaTitle: "Ultrafiltration – Membrane Water Filtration",
        metaDescription:
          "Ultrafiltration systems for drinking water, process water and reverse osmosis pre-treatment: removal of suspended solids, bacteria and turbidity.",
        title: "Ultrafiltration for water treatment",
        intro: [
          "Ultrafiltration (UF) is a membrane filtration process with very fine pores that retain suspended solids, turbidity, bacteria and most viruses, while letting water and dissolved salts pass.",
          "Ultrafiltration is used in drinking water treatment, for process water and as pre-treatment for reverse osmosis systems.",
        ],
        sections: [
          {
            heading: "Applications",
            items: [
              "Drinking water treatment from surface or groundwater sources",
              "Process water for industry",
              "Pre-treatment for reverse osmosis",
              "Tertiary treatment of treated wastewater, for reuse",
            ],
          },
          {
            heading: "Advantages",
            items: [
              "Consistent filtrate quality, even when the raw water varies",
              "Retention of bacteria and turbidity without large amounts of chemicals",
              "Compact, modular systems",
              "Automatic operation with periodic backwashing",
            ],
          },
          {
            heading: "Operation",
            paragraphs: [
              "Ultrafiltration membranes are backwashed automatically at regular intervals and chemically cleaned periodically using CIP systems. Automation continuously monitors pressures and flows.",
            ],
          },
        ],
        faq: [
          {
            question: "What is the difference between ultrafiltration and reverse osmosis?",
            answer:
              "Ultrafiltration retains particles, bacteria and turbidity, but not dissolved salts. Reverse osmosis also retains most dissolved salts.",
          },
          {
            question: "Does ultrafiltration replace disinfection?",
            answer:
              "Ultrafiltration significantly reduces microorganisms, but drinking water treatment usually also includes a disinfection stage.",
          },
          {
            question: "Can ultrafiltration be used for water reuse?",
            answer: "Yes. Ultrafiltration is used as tertiary treatment of treated wastewater when the water is to be reused.",
          },
        ],
      },
    },
  },
];
