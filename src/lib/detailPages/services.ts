import type { DetailPage } from "./types";

export const services: DetailPage[] = [
  {
    section: "servicii",
    id: "design",
    media: { type: "image", src: "/images/montaj-bazin-inox-statie-epurare.jpeg", alt: "tankAssembly" },
    content: {
      ro: {
        metaTitle: "Proiectare și construcție stații de epurare",
        metaDescription:
          "Proiectăm și construim stații de epurare și de tratare a apei la cheie: dimensionare, proiect tehnic, fabricație, montaj și punere în funcțiune.",
        title: "Proiectare și construcție stații de epurare și tratare a apei",
        intro: [
          "Proiectăm și construim stații de epurare și de tratare a apei în mod eficient și rentabil, ca sisteme complete care oferă soluția tehnică optimă. Clienții noștri beneficiază de tehnologii moderne integrate într-un sistem fiabil, cu costuri inițiale reduse și cheltuieli de operare minime pe termen lung.",
          "Din 1996 am finalizat peste 500 de proiecte în Europa și Orientul Mijlociu, de la stații pentru case individuale până la stații municipale și industriale.",
        ],
        sections: [
          {
            heading: "Etapele unui proiect",
            steps: true,
            items: [
              "Analiza cerințelor și a datelor de proiectare",
              "Alegerea tehnologiei și dimensionarea stației",
              "Proiectul tehnic",
              "Fabricarea echipamentelor în atelierul propriu",
              "Montajul, punerea în funcțiune și instruirea personalului",
              "Operare, mentenanță și service post-vânzare",
            ],
          },
          {
            heading: "De ce o soluție la cheie",
            paragraphs: [
              "Un singur partener pentru proiectare, fabricație, montaj și service înseamnă responsabilitate clară și o integrare mai bună între procese, echipamente și automatizare.",
            ],
          },
        ],
        faq: [
          {
            question: "Cât durează realizarea unei stații de epurare?",
            answer:
              "Durata depinde de capacitate, de tehnologie și de tipul stației – prefabricată sau construită pe amplasament. Termenul estimat este stabilit în ofertă, după analiza proiectului.",
          },
          {
            question: "Oferiți soluții la cheie?",
            answer:
              "Da. Ne ocupăm de proiectare, fabricarea echipamentelor, montaj, punere în funcțiune și, la cerere, de operare și mentenanță.",
          },
          {
            question: "Lucrați în toată țara?",
            answer: "Da. Realizăm proiecte în toată România, precum și în străinătate.",
          },
        ],
      },
      en: {
        metaTitle: "Design and Construction of Treatment Plants",
        metaDescription:
          "We design and build turnkey wastewater and water treatment plants: sizing, technical design, manufacturing, installation and commissioning.",
        title: "Design and construction of wastewater and water treatment plants",
        intro: [
          "We design and build water treatment plants efficiently and cost-effectively as complete systems that deliver optimal technical solutions. Our clients benefit from modern technologies integrated into reliable systems with low initial costs and minimal long-term operating expenses.",
          "Since 1996 we have completed over 500 projects across Europe and the Middle East, from plants for individual homes to municipal and industrial plants.",
        ],
        sections: [
          {
            heading: "Project stages",
            steps: true,
            items: [
              "Requirements and design data analysis",
              "Technology selection and plant sizing",
              "Technical design",
              "Equipment manufacturing in our own workshop",
              "Installation, commissioning and staff training",
              "Operation, maintenance and after-sales service",
            ],
          },
          {
            heading: "Why a turnkey solution",
            paragraphs: [
              "A single partner for design, manufacturing, installation and service means clear responsibility and better integration between processes, equipment and automation.",
            ],
          },
        ],
        faq: [
          {
            question: "How long does it take to build a treatment plant?",
            answer:
              "It depends on the capacity, the technology and the type of plant – prefabricated or built on site. The estimated timeline is set out in the quote, after reviewing the project.",
          },
          {
            question: "Do you offer turnkey solutions?",
            answer:
              "Yes. We handle design, equipment manufacturing, installation, commissioning and, on request, operation and maintenance.",
          },
          {
            question: "Do you work across the country?",
            answer: "Yes. We carry out projects throughout Romania and abroad.",
          },
        ],
      },
    },
  },
  {
    section: "servicii",
    id: "operation",
    media: { type: "image", src: "/images/scada-monitorizare-statie-epurare.jpeg", alt: "scadaScreen" },
    content: {
      ro: {
        metaTitle: "Operare și mentenanță stații de epurare",
        metaDescription:
          "Operare și mentenanță pentru stații de epurare și de tratare a apei: mentenanță preventivă, service post-vânzare, piese de schimb și monitorizare de la distanță.",
        title: "Operare și mentenanță pentru stații de epurare",
        intro: [
          "Asigurăm operarea și întreținerea fără probleme a stațiilor de tratare și a tuturor echipamentelor furnizate. Oferim servicii complete post-vânzare, mentenanță preventivă și suport tehnic permanent pentru toți clienții noștri.",
          "O stație întreținută corect funcționează eficient, respectă limitele de evacuare și are o durată de viață mai lungă.",
        ],
        sections: [
          {
            heading: "Ce include serviciul",
            items: [
              "Mentenanță preventivă planificată",
              "Intervenții corective și depanare",
              "Verificarea parametrilor de proces și ajustarea funcționării",
              "Stoc de piese de schimb și intervenție rapidă",
              "Monitorizare de la distanță prin SCADA și control cloud",
              "Analize de laborator pentru apa uzată și cea epurată",
            ],
          },
          {
            heading: "Monitorizare de la distanță",
            paragraphs: [
              "Stațiile echipate cu sisteme SCADA pot fi monitorizate de la distanță. Parametrii importanți – debite, oxigen dizolvat, pH, niveluri – sunt urmăriți continuu, iar alarmele permit intervenția rapidă.",
            ],
          },
        ],
        faq: [
          {
            question: "Cât de des trebuie întreținută o stație de epurare?",
            answer:
              "Frecvența depinde de tipul și de capacitatea stației. Planul de mentenanță se stabilește pentru fiecare stație, conform recomandărilor producătorilor echipamentelor.",
          },
          {
            question: "Aveți piese de schimb pe stoc?",
            answer: "Da. Avem stoc de piese de schimb și asigurăm răspuns rapid în situații de urgență.",
          },
          {
            question: "Preluați și stații livrate de alți furnizori?",
            answer:
              "Trimiteți-ne detaliile stației: evaluăm fiecare caz și vă propunem soluția potrivită.",
          },
        ],
      },
      en: {
        metaTitle: "Treatment Plant Operation and Maintenance",
        metaDescription:
          "Operation and maintenance of wastewater and water treatment plants: preventive maintenance, after-sales service, spare parts and remote monitoring.",
        title: "Treatment plant operation and maintenance",
        intro: [
          "We ensure trouble-free operation and maintenance of treatment plants and all supplied equipment. We provide complete after-sales services, preventive maintenance and ongoing technical support for all our clients.",
          "A well-maintained plant runs efficiently, meets discharge limits and lasts longer.",
        ],
        sections: [
          {
            heading: "What the service includes",
            items: [
              "Planned preventive maintenance",
              "Corrective interventions and troubleshooting",
              "Process parameter checks and operational adjustments",
              "Spare parts stock and rapid response",
              "Remote monitoring via SCADA and cloud control",
              "Laboratory analysis of raw and treated wastewater",
            ],
          },
          {
            heading: "Remote monitoring",
            paragraphs: [
              "Plants equipped with SCADA systems can be monitored remotely. Key parameters – flows, dissolved oxygen, pH, levels – are tracked continuously, and alarms allow a quick response.",
            ],
          },
        ],
        faq: [
          {
            question: "How often does a treatment plant need maintenance?",
            answer:
              "It depends on the type and capacity of the plant. A maintenance plan is set for each plant, following the equipment manufacturers' recommendations.",
          },
          {
            question: "Do you keep spare parts in stock?",
            answer: "Yes. We keep spare parts in stock and respond quickly to emergencies.",
          },
          {
            question: "Do you take over plants supplied by others?",
            answer: "Send us the plant details: we assess each case and propose the right solution.",
          },
        ],
      },
    },
  },
  {
    section: "servicii",
    id: "repair",
    content: {
      ro: {
        metaTitle: "Reparații și modernizare stații de epurare",
        metaDescription:
          "Modernizăm stații de epurare vechi sau subdimensionate: creșterea capacității, înlocuirea echipamentelor și automatizare, cu soluții optime ca cost.",
        title: "Reparații și modernizare pentru stații de epurare",
        intro: [
          "Transformăm instalațiile vechi sau ineficiente în sisteme fiabile, adaptate cerințelor actuale. Stațiile care necesită restaurare sau ale căror capacități nu mai sunt adecvate pot fi modernizate folosind soluții optime din punct de vedere al costurilor.",
          "Modernizarea unei stații existente este, de multe ori, o alternativă mai rapidă și mai economică decât construirea uneia noi.",
        ],
        sections: [
          {
            heading: "Când este nevoie de modernizare",
            items: [
              "Stația nu mai respectă limitele de evacuare",
              "Capacitatea a devenit insuficientă",
              "Echipamentele sunt uzate sau consumă prea multă energie",
              "Lipsesc automatizarea și monitorizarea",
            ],
          },
          {
            heading: "Ce putem face",
            items: [
              "Evaluarea tehnică a stației existente",
              "Creșterea capacității, de exemplu prin trecerea la tehnologia MBBR în bazinele existente",
              "Înlocuirea echipamentelor uzate",
              "Automatizare și sisteme SCADA",
              "Reabilitarea bazinelor și a instalațiilor",
            ],
          },
        ],
        faq: [
          {
            question: "Se poate crește capacitatea fără bazine noi?",
            answer:
              "În multe cazuri, da. De exemplu, adăugarea de suporturi pentru biofilm (MBBR) în bazinele existente poate crește capacitatea de tratare. Soluția se stabilește după evaluarea stației.",
          },
          {
            question: "Stația trebuie oprită în timpul lucrărilor?",
            answer:
              "Lucrările se planifică astfel încât întreruperile în funcționarea stației să fie cât mai scurte.",
          },
          {
            question: "Cu ce începe o modernizare?",
            answer: "Cu evaluarea tehnică a stației și analiza datelor de funcționare.",
          },
        ],
      },
      en: {
        metaTitle: "Treatment Plant Repair and Upgrade",
        metaDescription:
          "We upgrade old or undersized treatment plants: capacity increases, equipment replacement and automation, with cost-effective solutions.",
        title: "Treatment plant repair and upgrade",
        intro: [
          "We transform old or inefficient installations into reliable systems adapted to current requirements. Plants requiring restoration or those with inadequate capacity can be upgraded using cost-effective solutions tailored to your needs.",
          "Upgrading an existing plant is often a faster and more economical alternative to building a new one.",
        ],
        sections: [
          {
            heading: "When an upgrade is needed",
            items: [
              "The plant no longer meets discharge limits",
              "Capacity has become insufficient",
              "Equipment is worn or uses too much energy",
              "Automation and monitoring are missing",
            ],
          },
          {
            heading: "What we can do",
            items: [
              "Technical assessment of the existing plant",
              "Capacity increase, for example by converting existing tanks to MBBR",
              "Replacement of worn equipment",
              "Automation and SCADA systems",
              "Rehabilitation of tanks and installations",
            ],
          },
        ],
        faq: [
          {
            question: "Can capacity be increased without new tanks?",
            answer:
              "Often, yes. For example, adding biofilm carriers (MBBR) to existing tanks can increase treatment capacity. The solution is defined after assessing the plant.",
          },
          {
            question: "Does the plant have to stop during the works?",
            answer: "Works are planned to keep interruptions to the plant's operation as short as possible.",
          },
          {
            question: "How does an upgrade start?",
            answer: "With a technical assessment of the plant and a review of its operating data.",
          },
        ],
      },
    },
  },
  {
    section: "servicii",
    id: "equipment",
    media: { type: "image", src: "/images/fabricatie-unitati-flotatie-daf.jpeg", alt: "dafWorkshop" },
    content: {
      ro: {
        metaTitle: "Revizie și reparații echipamente de epurare",
        metaDescription:
          "Atelier complet echipat pentru revizia și repararea echipamentelor din stațiile de epurare și de tratare a apei, conform normelor producătorilor.",
        title: "Revizie și reparații pentru echipamente de epurare",
        intro: [
          "Dispunem de un atelier complet echipat, cu personal calificat, pentru reparații preventive și corective ale echipamentelor. Toate lucrările sunt efectuate conform normelor și recomandărilor producătorilor, asigurând funcționarea optimă a instalațiilor.",
          "În același atelier fabricăm echipamente proprii – unități de flotație DAF, sisteme de filtrare și sitare, separatoare și decantoare –, ceea ce ne oferă experiența necesară pentru revizii corecte.",
        ],
        sections: [
          {
            heading: "Echipamente din stațiile de epurare, de exemplu",
            items: [
              "Unități de flotație DAF",
              "Sisteme de filtrare și sitare",
              "Separatoare și decantoare",
              "Unități de dozare chimicale",
              "Stații de pompare",
              "Compactoare",
            ],
          },
          {
            heading: "Revizie preventivă și corectivă",
            paragraphs: [
              "Revizia preventivă reduce riscul defecțiunilor neprevăzute, iar reparațiile corective readuc rapid echipamentele în funcțiune.",
            ],
          },
        ],
        faq: [
          {
            question: "Reparați echipamentele în atelier sau pe amplasament?",
            answer: "Ambele variante sunt posibile, în funcție de echipament și de tipul intervenției.",
          },
          {
            question: "Ce este revizia preventivă?",
            answer:
              "Verificarea și întreținerea planificată a echipamentelor înainte să apară defecțiuni, pentru a evita opririle neprevăzute ale stației.",
          },
          {
            question: "Fabricați și echipamente noi?",
            answer:
              "Da. Fabricăm unități de flotație DAF, sisteme de filtrare, separatoare, decantoare, unități de dozare și alte echipamente pentru tratarea apei și a apelor uzate.",
          },
        ],
      },
      en: {
        metaTitle: "Treatment Equipment Overhaul and Repair",
        metaDescription:
          "Fully equipped workshop for the overhaul and repair of wastewater and water treatment equipment, following manufacturers' standards.",
        title: "Treatment equipment overhaul and repair",
        intro: [
          "We operate a fully equipped workshop with qualified personnel for preventive and corrective equipment repairs. All work is performed according to manufacturer standards and recommendations, ensuring optimal operation of your installations.",
          "In the same workshop we manufacture our own equipment – DAF flotation units, filtration and screening systems, separators and decanters – which gives us the experience needed for proper overhauls.",
        ],
        sections: [
          {
            heading: "Treatment plant equipment, for example",
            items: [
              "DAF flotation units",
              "Filtration and screening systems",
              "Separators and decanters",
              "Chemical dosing units",
              "Pumping stations",
              "Compactors",
            ],
          },
          {
            heading: "Preventive and corrective overhaul",
            paragraphs: [
              "Preventive overhauls reduce the risk of unexpected breakdowns, while corrective repairs get equipment back in service quickly.",
            ],
          },
        ],
        faq: [
          {
            question: "Do you repair equipment in the workshop or on site?",
            answer: "Both are possible, depending on the equipment and the type of intervention.",
          },
          {
            question: "What is a preventive overhaul?",
            answer:
              "Planned inspection and maintenance of equipment before faults occur, to avoid unplanned plant shutdowns.",
          },
          {
            question: "Do you also manufacture new equipment?",
            answer:
              "Yes. We manufacture DAF flotation units, filtration systems, separators, decanters, dosing units and other water and wastewater treatment equipment.",
          },
        ],
      },
    },
  },
  {
    section: "servicii",
    id: "pilot",
    content: {
      ro: {
        metaTitle: "Unități pilot și de laborator pentru tratarea apei",
        metaDescription:
          "Proiectăm și construim unități de laborator și instalații pilot pentru tratarea apei și a apelor uzate, pentru universități și centre de cercetare.",
        title: "Unități pilot și de laborator pentru tratarea apei",
        intro: [
          "De peste un deceniu suntem implicați în proiecte de cercetare ca parteneri sau integratori de tehnologie. Proiectăm și construim unități de laborator și instalații pilot pentru instituții academice și centre de cercetare, conform cerințelor specifice.",
          "Instalațiile pilot permit testarea unui proces la scară redusă înainte de investiția într-o stație la scară completă.",
        ],
        sections: [
          {
            heading: "Ce realizăm",
            items: [
              "Unități de laborator pentru studii de proces",
              "Instalații pilot pentru testarea tehnologiilor de tratare",
              "Echipamente personalizate pentru proiecte de cercetare",
              "Automatizare și achiziție de date pentru experimente",
            ],
          },
          {
            heading: "Pentru cine",
            items: [
              "Universități și instituții academice",
              "Centre și institute de cercetare",
              "Companii care testează un proces înainte de investiție",
            ],
          },
        ],
        faq: [
          {
            question: "Ce este o instalație pilot?",
            answer:
              "O versiune la scară redusă a unei stații, folosită pentru a testa și optimiza un proces în condiții reale, înainte de construirea stației la scară completă.",
          },
          {
            question: "Instalațiile pot fi adaptate proiectului de cercetare?",
            answer: "Da. Fiecare unitate este proiectată conform cerințelor specifice ale beneficiarului.",
          },
          {
            question: "Participați ca partener în proiecte de cercetare?",
            answer:
              "Da. De peste un deceniu suntem implicați în proiecte de cercetare ca parteneri sau integratori de tehnologie.",
          },
        ],
      },
      en: {
        metaTitle: "Pilot and Laboratory Units for Water Treatment",
        metaDescription:
          "We design and build laboratory units and pilot plants for water and wastewater treatment, for universities and research centres.",
        title: "Pilot and laboratory units for water treatment",
        intro: [
          "For over a decade we have been involved in research projects as partners or technology integrators. We design and build laboratory units and pilot installations for academic institutions and research centres according to their specific requirements.",
          "Pilot plants allow a process to be tested at small scale before investing in a full-scale plant.",
        ],
        sections: [
          {
            heading: "What we build",
            items: [
              "Laboratory units for process studies",
              "Pilot plants for testing treatment technologies",
              "Custom equipment for research projects",
              "Automation and data acquisition for experiments",
            ],
          },
          {
            heading: "Who it is for",
            items: [
              "Universities and academic institutions",
              "Research centres and institutes",
              "Companies testing a process before investing",
            ],
          },
        ],
        faq: [
          {
            question: "What is a pilot plant?",
            answer:
              "A small-scale version of a plant, used to test and optimise a process under real conditions before building the full-scale plant.",
          },
          {
            question: "Can the units be adapted to a research project?",
            answer: "Yes. Each unit is designed to the client's specific requirements.",
          },
          {
            question: "Do you take part in research projects as a partner?",
            answer:
              "Yes. For over a decade we have been involved in research projects as partners or technology integrators.",
          },
        ],
      },
    },
  },
  {
    section: "servicii",
    id: "consulting",
    media: { type: "image", src: "/images/sediu-euromarket-iasi.jpg", alt: "headquarters" },
    content: {
      ro: {
        metaTitle: "Consultanță și training în tratarea apei",
        metaDescription:
          "Consultanță tehnică și programe de instruire pentru tratarea apei și a apelor uzate: alegerea tehnologiei, optimizarea stațiilor și instruirea operatorilor.",
        title: "Consultanță și training în tratarea apei și a apelor uzate",
        intro: [
          "Oferim expertiză în domeniul complex al ingineriei apei, unde fiecare proiect are condiții și cerințe unice. Echipa noastră combină cunoștințe științifice avansate cu experiența practică pentru a oferi soluții optime și programe de instruire dedicate.",
          "Laboratorul nostru chimic propriu ne permite să fundamentăm recomandările pe analize precise.",
        ],
        sections: [
          {
            heading: "Consultanță tehnică",
            items: [
              "Analiza apei brute și a apelor uzate",
              "Alegerea tehnologiei de tratare potrivite",
              "Evaluarea și optimizarea stațiilor existente",
              "Studii de soluție pentru investiții noi",
            ],
          },
          {
            heading: "Training pentru operatori",
            paragraphs: [
              "Instruim personalul care operează stațiile de epurare și de tratare a apei, pentru o exploatare corectă, sigură și eficientă. Programele sunt adaptate tipului de stație și nivelului de experiență al operatorilor.",
            ],
          },
        ],
        faq: [
          {
            question: "Pentru cine este instruirea?",
            answer: "Pentru operatorii și personalul tehnic care exploatează stații de epurare sau de tratare a apei.",
          },
          {
            question: "Faceți analize de laborator?",
            answer:
              "Da. Laboratorul nostru chimic propriu realizează analize pentru controlul calității apei și al proceselor de tratare.",
          },
          {
            question: "Ne puteți ajuta să alegem tehnologia potrivită?",
            answer:
              "Da. Analizăm datele proiectului și vă recomandăm tehnologia potrivită din punct de vedere tehnic și al costurilor.",
          },
        ],
      },
      en: {
        metaTitle: "Water Treatment Consulting and Training",
        metaDescription:
          "Technical consulting and training for water and wastewater treatment: technology selection, plant optimisation and operator training.",
        title: "Water and wastewater treatment consulting and training",
        intro: [
          "We offer expertise in the complex field of water engineering, where each project has unique conditions and requirements. Our team combines advanced scientific knowledge with practical experience to deliver optimal solutions and dedicated training programmes.",
          "Our own chemical laboratory allows us to base our recommendations on accurate analyses.",
        ],
        sections: [
          {
            heading: "Technical consulting",
            items: [
              "Raw water and wastewater analysis",
              "Selection of the right treatment technology",
              "Assessment and optimisation of existing plants",
              "Feasibility studies for new investments",
            ],
          },
          {
            heading: "Operator training",
            paragraphs: [
              "We train the staff who operate wastewater and water treatment plants, for correct, safe and efficient operation. Programmes are adapted to the type of plant and the operators' experience.",
            ],
          },
        ],
        faq: [
          {
            question: "Who is the training for?",
            answer: "For operators and technical staff running wastewater or water treatment plants.",
          },
          {
            question: "Do you carry out laboratory analyses?",
            answer:
              "Yes. Our own chemical laboratory carries out analyses for water quality and treatment process control.",
          },
          {
            question: "Can you help us choose the right technology?",
            answer:
              "Yes. We review the project data and recommend the technology that fits best, both technically and in terms of cost.",
          },
        ],
      },
    },
  },
];
