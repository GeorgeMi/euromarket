import type { DetailPage } from "./types";

export const applications: DetailPage[] = [
  {
    section: "aplicatii",
    id: "sewage",
    media: { type: "image", src: "/images/statie-epurare-municipala-600-mc.webp", alt: "municipalPlant" },
    content: {
      ro: {
        metaTitle: "Stații de epurare ape uzate menajere și municipale",
        metaDescription:
          "Stații de epurare pentru case, pensiuni, comunități și localități: de la unități prefabricate mici la stații municipale. Tehnologii MBBR, SBR și MBR.",
        title: "Stații de epurare pentru ape uzate menajere și municipale",
        intro: [
          "Proiectăm și construim stații de epurare pentru ape uzate menajere, de la unități prefabricate pentru o singură gospodărie până la stații municipale care deservesc mii de locuitori. Fiecare stație este dimensionată în funcție de numărul de locuitori echivalenți, de debitul și încărcarea apelor uzate și de cerințele de calitate pentru efluent.",
          "Soluțiile noastre se bazează pe tehnologii de proces moderne – reactoare cu biofilm mobil (MBBR), reactoare secvențiale (SBR) și bioreactoare cu membrane (MBR) – alese pentru fiecare aplicație în parte.",
        ],
        sections: [
          {
            heading: "Pentru cine proiectăm stații de epurare",
            items: [
              "Case individuale și ansambluri rezidențiale",
              "Pensiuni, hoteluri și restaurante",
              "Comune și localități fără rețea de canalizare centralizată",
              "Stații municipale pentru orașe și aglomerări urbane",
              "Spitale, școli, baze turistice și alte obiective izolate",
            ],
          },
          {
            heading: "Ce include o stație de epurare",
            items: [
              "Pre-epurare: sitare, deznisipare și separarea grăsimilor",
              "Treapta biologică: MBBR, SBR sau MBR, în funcție de aplicație",
              "Decantare secundară sau filtrare prin membrane",
              "Tratarea și stocarea nămolului",
              "Dezinfecția efluentului, atunci când este cerută",
              "Automatizare și monitorizare, inclusiv SCADA",
            ],
          },
          {
            heading: "Stații prefabricate sau construite pe amplasament",
            paragraphs: [
              "Pentru debite mici și medii livrăm stații prefabricate sau containerizate, care se montează rapid și ocupă puțin spațiu. Pentru capacități mari proiectăm stații municipale pre-proiectate, cu echipamente fabricate în atelierul propriu și adaptate cerințelor fiecărui proiect.",
            ],
          },
        ],
        faq: [
          {
            question: "Cum se stabilește capacitatea stației de epurare?",
            answer:
              "Capacitatea se stabilește în funcție de numărul de locuitori echivalenți, de debitul zilnic și de încărcarea apelor uzate. Inginerii noștri fac dimensionarea pe baza datelor proiectului și a cerințelor autorităților.",
          },
          {
            question: "Ce tehnologie este potrivită pentru o stație mică?",
            answer:
              "Pentru gospodării și obiective mici se folosesc frecvent stații compacte MBBR sau SBR. Alegerea depinde de variațiile de debit, de spațiul disponibil și de calitatea cerută pentru apa epurată.",
          },
          {
            question: "Asigurați și mentenanța stației după punerea în funcțiune?",
            answer:
              "Da. Oferim operare și mentenanță, service post-vânzare și piese de schimb pentru stațiile și echipamentele livrate.",
          },
        ],
      },
      en: {
        metaTitle: "Domestic and Municipal Wastewater Treatment Plants",
        metaDescription:
          "Wastewater treatment plants for homes, guesthouses, communities and towns: from small prefabricated units to municipal plants. MBBR, SBR and MBR technologies.",
        title: "Domestic and municipal wastewater treatment plants",
        intro: [
          "We design and build treatment plants for domestic wastewater, from prefabricated units for a single household to municipal plants serving thousands of residents. Each plant is sized according to the population equivalent, the flow and load of the wastewater and the effluent quality requirements.",
          "Our solutions are based on modern process technologies – moving bed biofilm reactors (MBBR), sequencing batch reactors (SBR) and membrane bioreactors (MBR) – selected for each application.",
        ],
        sections: [
          {
            heading: "Who we design treatment plants for",
            items: [
              "Individual homes and residential developments",
              "Guesthouses, hotels and restaurants",
              "Villages and towns without a central sewer network",
              "Municipal plants for cities and urban areas",
              "Hospitals, schools, tourist facilities and other remote sites",
            ],
          },
          {
            heading: "What a treatment plant includes",
            items: [
              "Pre-treatment: screening, grit removal and grease separation",
              "Biological stage: MBBR, SBR or MBR, depending on the application",
              "Secondary clarification or membrane filtration",
              "Sludge treatment and storage",
              "Effluent disinfection, when required",
              "Automation and monitoring, including SCADA",
            ],
          },
          {
            heading: "Prefabricated or built on site",
            paragraphs: [
              "For small and medium flows we deliver prefabricated or containerised plants that are quick to install and take up little space. For large capacities we design pre-engineered municipal plants, with equipment manufactured in our own workshop and adapted to each project.",
            ],
          },
        ],
        faq: [
          {
            question: "How is the plant capacity determined?",
            answer:
              "Capacity is based on the population equivalent, the daily flow and the wastewater load. Our engineers size the plant using the project data and the authorities' requirements.",
          },
          {
            question: "Which technology suits a small plant?",
            answer:
              "Compact MBBR or SBR plants are commonly used for households and small sites. The choice depends on flow variations, available space and the required effluent quality.",
          },
          {
            question: "Do you maintain the plant after commissioning?",
            answer:
              "Yes. We provide operation and maintenance, after-sales service and spare parts for the plants and equipment we supply.",
          },
        ],
      },
    },
  },
  {
    section: "aplicatii",
    id: "water",
    content: {
      ro: {
        metaTitle: "Stații de tratare a apei potabile și industriale",
        metaDescription:
          "Stații și echipamente de tratare a apei: filtrare, clarificare, dedurizare, demineralizare, osmoză inversă și dezinfecție, pentru aplicații comerciale, industriale și municipale.",
        title: "Stații de tratare a apei pentru uz potabil, comercial și industrial",
        intro: [
          "Proiectăm și livrăm echipamente și stații complete de tratare a apei pentru aplicații comerciale, industriale și municipale. Procesele sunt alese și combinate în funcție de caracteristicile apei brute și de calitatea necesară a apei tratate.",
          "În multe cazuri, stațiile de tratare pot fi livrate în unități containerizate, gata de racordare.",
        ],
        sections: [
          {
            heading: "Procese de tratare a apei",
            items: [
              "Filtrare și clarificare",
              "Dedurizare",
              "Demineralizare",
              "Filtrare prin membrane – ultrafiltrare și osmoză inversă",
              "Dozare de reactivi chimici",
              "Dezinfecție",
            ],
          },
          {
            heading: "Aplicații",
            items: [
              "Stații de apă potabilă pentru localități",
              "Apă de proces pentru industrie",
              "Apă pentru cazane și sisteme de răcire",
              "Obiective comerciale și turistice",
            ],
          },
          {
            heading: "Cum lucrăm",
            paragraphs: [
              "Pornim de la analiza apei brute, realizată inclusiv în laboratorul nostru chimic, și stabilim schema de tratare potrivită. Urmează proiectarea, fabricarea echipamentelor, montajul, punerea în funcțiune și, la cerere, operarea și mentenanța.",
            ],
          },
        ],
        faq: [
          {
            question: "De ce informații aveți nevoie pentru o ofertă?",
            answer:
              "Sunt utile analiza apei brute, debitul necesar și utilizarea apei tratate. Dacă nu aveți o analiză recentă, vă putem ajuta să o realizați.",
          },
          {
            question: "Se pot livra stații de tratare containerizate?",
            answer:
              "Da. În multe cazuri, stațiile de tratare a apei pot fi livrate în containere, cu echipamentele montate și testate.",
          },
          {
            question: "Ce diferență este între dedurizare și demineralizare?",
            answer:
              "Dedurizarea elimină în principal calciul și magneziul, care produc depuneri, iar demineralizarea reduce aproape toate sărurile dizolvate din apă.",
          },
        ],
      },
      en: {
        metaTitle: "Drinking and Industrial Water Treatment Plants",
        metaDescription:
          "Water treatment plants and equipment: filtration, clarification, softening, demineralisation, reverse osmosis and disinfection, for commercial, industrial and municipal use.",
        title: "Water treatment plants for drinking, commercial and industrial use",
        intro: [
          "We design and supply water treatment equipment and complete plants for commercial, industrial and municipal applications. Processes are selected and combined according to the raw water characteristics and the required treated water quality.",
          "In many cases, treatment plants can be delivered as containerised units, ready to connect.",
        ],
        sections: [
          {
            heading: "Water treatment processes",
            items: [
              "Filtration and clarification",
              "Softening",
              "Demineralisation",
              "Membrane filtration – ultrafiltration and reverse osmosis",
              "Chemical dosing",
              "Disinfection",
            ],
          },
          {
            heading: "Applications",
            items: [
              "Drinking water plants for towns and villages",
              "Process water for industry",
              "Boiler feed and cooling water",
              "Commercial and tourist facilities",
            ],
          },
          {
            heading: "How we work",
            paragraphs: [
              "We start with a raw water analysis, including in our own chemical laboratory, and define the right treatment scheme. This is followed by design, equipment manufacturing, installation, commissioning and, on request, operation and maintenance.",
            ],
          },
        ],
        faq: [
          {
            question: "What information do you need for a quote?",
            answer:
              "A raw water analysis, the required flow and the intended use of the treated water. If you do not have a recent analysis, we can help you get one.",
          },
          {
            question: "Can treatment plants be delivered in containers?",
            answer:
              "Yes. In many cases, water treatment plants can be delivered in containers, with the equipment installed and tested.",
          },
          {
            question: "What is the difference between softening and demineralisation?",
            answer:
              "Softening mainly removes the calcium and magnesium that cause scaling, while demineralisation removes almost all dissolved salts.",
          },
        ],
      },
    },
  },
  {
    section: "aplicatii",
    id: "industrial",
    media: { type: "image", src: "/images/hala-statie-epurare-industriala-daf.jpeg", alt: "dafHall" },
    content: {
      ro: {
        metaTitle: "Epurarea apelor uzate industriale",
        metaDescription:
          "Stații de epurare pentru ape uzate industriale, de exemplu din industria alimentară: flotație DAF, tratare fizico-chimică și biologică, adaptate limitelor de evacuare.",
        title: "Stații de epurare pentru ape uzate industriale",
        intro: [
          "Epurarea apelor uzate industriale este o sarcină complexă. În funcție de caracteristicile apelor uzate, de condițiile specifice ale fiecărei aplicații și de limitele de evacuare impuse la efluent, combinăm diferite procese pentru a obține rezultatele cerute.",
          "Proiectăm soluții personalizate, de la pre-epurare înainte de deversarea în canalizare până la stații complete de epurare.",
        ],
        sections: [
          {
            heading: "Tipuri de ape uzate industriale",
            items: [
              "Industria alimentară: lactate, carne, panificație, băuturi",
              "Procesare și producție industrială",
              "Ape uzate cu încărcare organică mare",
              "Ape uzate cu grăsimi, uleiuri și suspensii",
            ],
          },
          {
            heading: "Procese folosite",
            items: [
              "Egalizare și neutralizare",
              "Flotație cu aer dizolvat (DAF)",
              "Tratare fizico-chimică, cu dozare de reactivi",
              "Tratare biologică: MBBR, SBR, MBR",
              "Deshidratarea nămolului",
            ],
          },
          {
            heading: "Conformitate cu limitele de evacuare",
            paragraphs: [
              "Fiecare soluție este proiectată pentru a respecta limitele de evacuare stabilite pentru efluent, fie că apa ajunge în rețeaua de canalizare, fie într-un emisar natural. Automatizarea și monitorizarea online permit controlul permanent al parametrilor.",
            ],
          },
        ],
        faq: [
          {
            question: "Ce este pre-epurarea?",
            answer:
              "Pre-epurarea reduce încărcarea apelor uzate industriale înainte de deversarea în rețeaua de canalizare, astfel încât să fie respectate limitele impuse de operatorul rețelei.",
          },
          {
            question: "Ce informații sunt necesare pentru proiectare?",
            answer:
              "Debitul, compoziția și variațiile apelor uzate, precum și limitele de evacuare. Analizele pot fi realizate și în laboratorul nostru.",
          },
          {
            question: "Puteți moderniza o stație industrială existentă?",
            answer:
              "Da. Stațiile cu capacitate insuficientă sau care nu mai respectă limitele pot fi modernizate cu soluții optime din punct de vedere al costurilor.",
          },
        ],
      },
      en: {
        metaTitle: "Industrial Wastewater Treatment",
        metaDescription:
          "Treatment plants for industrial wastewater, such as from the food industry: DAF flotation, physical-chemical and biological treatment, designed to meet discharge limits.",
        title: "Industrial wastewater treatment plants",
        intro: [
          "Industrial wastewater treatment is a complex task. Depending on the wastewater characteristics, the specific conditions of each application and the discharge limits set for the effluent, we combine different processes to achieve the required results.",
          "We design custom solutions, from pre-treatment before discharge to the sewer to complete treatment plants.",
        ],
        sections: [
          {
            heading: "Types of industrial wastewater",
            items: [
              "Food industry: dairy, meat, bakery, beverages",
              "Industrial processing and manufacturing",
              "High-strength organic wastewater",
              "Wastewater with fats, oils and suspended solids",
            ],
          },
          {
            heading: "Processes we use",
            items: [
              "Equalisation and neutralisation",
              "Dissolved air flotation (DAF)",
              "Physical-chemical treatment with chemical dosing",
              "Biological treatment: MBBR, SBR, MBR",
              "Sludge dewatering",
            ],
          },
          {
            heading: "Meeting discharge limits",
            paragraphs: [
              "Every solution is designed to meet the discharge limits set for the effluent, whether the water goes to the sewer network or to a natural receiving body. Automation and online monitoring allow continuous control of the parameters.",
            ],
          },
        ],
        faq: [
          {
            question: "What is pre-treatment?",
            answer:
              "Pre-treatment reduces the load of industrial wastewater before it is discharged to the sewer, so that the limits set by the network operator are met.",
          },
          {
            question: "What information is needed for design?",
            answer:
              "The flow, composition and variations of the wastewater, as well as the discharge limits. Analyses can also be carried out in our laboratory.",
          },
          {
            question: "Can you upgrade an existing industrial plant?",
            answer:
              "Yes. Plants with insufficient capacity or that no longer meet the limits can be upgraded with cost-effective solutions.",
          },
        ],
      },
    },
  },
];
