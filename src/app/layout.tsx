import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import CookieConsent from "@/components/CookieConsent";
import StructuredData from "@/components/StructuredData";
import { LanguageProvider } from "@/lib/LanguageContext";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.euromarket-ro.com"),
  title: {
    default: "Stații Epurare și Tratare Apă | Euromarket WWE România",
    template: "%s | Euromarket WWE",
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  description:
    "Proiectare și construcție stații de epurare ape uzate în România. Tehnologii MBBR, SBR, MBR. Peste 500 proiecte finalizate din 1996. Solicită ofertă gratuită!",
  keywords: [
    "statie epurare",
    "statii epurare",
    "statie epurare ape uzate",
    "tratare ape uzate",
    "statie tratare apa",
    "epurare ape uzate",
    "MBBR",
    "SBR",
    "MBR",
    "statie epurare pret",
    "constructor statii epurare Romania",
    "Euromarket",
  ],
  authors: [{ name: "Euromarket SRL" }],
  creator: "Euromarket SRL",
  publisher: "Euromarket SRL",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    alternateLocale: "en_US",
    url: "https://www.euromarket-ro.com",
    siteName: "Euromarket WWE SRL",
    title: "Stații Epurare Ape Uzate | Euromarket WWE România",
    description:
      "Proiectăm și construim stații de epurare în România. Tehnologii moderne MBBR, SBR, MBR. Peste 500 proiecte din 1996.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Euromarket - Stații Epurare și Tratare Apă România",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stații Epurare Ape Uzate | Euromarket WWE România",
    description: "Proiectare și construcție stații de epurare în România. Tehnologii MBBR, SBR, MBR.",
    images: ["/images/og-image.png"],
  },
  verification: {
    // google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://www.euromarket-ro.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <head>
        <StructuredData />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <LanguageProvider>
          <PageWrapper>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </PageWrapper>
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}
