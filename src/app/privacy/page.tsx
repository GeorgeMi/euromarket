"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const content = {
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: January 2025",
    sections: [
      {
        title: "1. Data Controller",
        content: `Euromarket WWE SRL, with headquarters at 50B Poitiers Blvd., Iași - 700669, Romania, is the data controller for your personal data collected through this website.`,
      },
      {
        title: "2. Data We Collect",
        content: `We collect the following personal data:
• Contact information (name, email, phone number) when you fill out our contact form
• Technical data (IP address, browser type, device information) for website analytics
• Cookies and similar technologies for website functionality`,
      },
      {
        title: "3. Purpose of Data Processing",
        content: `We process your personal data for:
• Responding to your inquiries and requests
• Providing our water engineering services
• Improving our website and services
• Complying with legal obligations`,
      },
      {
        title: "4. Legal Basis",
        content: `We process your data based on:
• Your consent (for marketing communications)
• Legitimate interests (for business operations)
• Contractual necessity (for service provision)
• Legal obligations (for regulatory compliance)`,
      },
      {
        title: "5. Data Retention",
        content: `We retain your personal data for as long as necessary to fulfill the purposes for which it was collected, typically:
• Contact form data: 3 years
• Contract-related data: 10 years (as required by Romanian law)
• Cookie data: as specified in our cookie policy`,
      },
      {
        title: "6. Your Rights (GDPR)",
        content: `Under the General Data Protection Regulation, you have the right to:
• Access your personal data
• Rectify inaccurate data
• Erase your data ("right to be forgotten")
• Restrict processing
• Data portability
• Object to processing
• Withdraw consent at any time

To exercise these rights, contact us at: info@euromarket-ro.com`,
      },
      {
        title: "7. Cookies",
        content: `This website uses cookies for:
• Essential functionality (session management)
• Analytics (understanding how visitors use our site)
• You can manage cookie preferences through your browser settings.`,
      },
      {
        title: "8. Contact",
        content: `For any questions regarding this privacy policy or your personal data, please contact:
Euromarket WWE SRL
50B Poitiers Blvd., Iași - 700669, Romania
Email: info@euromarket-ro.com
Phone: +4 (0232) 233 693`,
      },
    ],
  },
  ro: {
    title: "Politica de Confidențialitate",
    lastUpdated: "Ultima actualizare: Ianuarie 2025",
    sections: [
      {
        title: "1. Operatorul de Date",
        content: `Euromarket WWE SRL, cu sediul în B-dul Poitiers 50B, Iași - 700669, România, este operatorul datelor dumneavoastră personale colectate prin intermediul acestui website.`,
      },
      {
        title: "2. Datele pe Care le Colectăm",
        content: `Colectăm următoarele date personale:
• Informații de contact (nume, email, număr de telefon) când completați formularul de contact
• Date tehnice (adresă IP, tip browser, informații despre dispozitiv) pentru analiza website-ului
• Cookie-uri și tehnologii similare pentru funcționalitatea website-ului`,
      },
      {
        title: "3. Scopul Prelucrării Datelor",
        content: `Prelucrăm datele dumneavoastră personale pentru:
• Răspunsul la întrebările și solicitările dumneavoastră
• Furnizarea serviciilor noastre de inginerie a apei
• Îmbunătățirea website-ului și serviciilor noastre
• Conformitatea cu obligațiile legale`,
      },
      {
        title: "4. Temeiul Legal",
        content: `Prelucrăm datele dumneavoastră pe baza:
• Consimțământului dumneavoastră (pentru comunicări de marketing)
• Intereselor legitime (pentru operațiuni de afaceri)
• Necesității contractuale (pentru furnizarea serviciilor)
• Obligațiilor legale (pentru conformitatea cu reglementările)`,
      },
      {
        title: "5. Perioada de Păstrare",
        content: `Păstrăm datele dumneavoastră personale atât timp cât este necesar pentru îndeplinirea scopurilor pentru care au fost colectate, de obicei:
• Date din formularul de contact: 3 ani
• Date legate de contracte: 10 ani (conform legislației române)
• Date cookie: conform politicii noastre de cookie-uri`,
      },
      {
        title: "6. Drepturile Dumneavoastră (GDPR)",
        content: `Conform Regulamentului General privind Protecția Datelor, aveți dreptul de a:
• Accesa datele dumneavoastră personale
• Rectifica datele inexacte
• Șterge datele ("dreptul de a fi uitat")
• Restricționa prelucrarea
• Portabilitatea datelor
• Vă opune prelucrării
• Retrage consimțământul în orice moment

Pentru a exercita aceste drepturi, contactați-ne la: info@euromarket-ro.com`,
      },
      {
        title: "7. Cookie-uri",
        content: `Acest website folosește cookie-uri pentru:
• Funcționalitate esențială (gestionarea sesiunii)
• Analiză (înțelegerea modului în care vizitatorii folosesc site-ul nostru)
• Puteți gestiona preferințele cookie-urilor prin setările browser-ului dumneavoastră.`,
      },
      {
        title: "8. Contact",
        content: `Pentru orice întrebări privind această politică de confidențialitate sau datele dumneavoastră personale, vă rugăm să contactați:
Euromarket WWE SRL
B-dul Poitiers 50B, Iași - 700669, România
Email: info@euromarket-ro.com
Telefon: +4 (0232) 233 693`,
      },
    ],
  },
};

export default function PrivacyPage() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <div className="min-h-screen bg-surface pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">{t.title}</h1>
          <p className="text-muted mb-12">{t.lastUpdated}</p>

          <div className="space-y-8">
            {t.sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  {section.title}
                </h2>
                <p className="text-muted whitespace-pre-line leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
