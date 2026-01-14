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
    default: "Euromarket",
    template: "%s | Euromarket",
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  description:
    "S.C. Euromarket SRL - Experți în ingineria apei și apelor uzate din 1990. Proiectare, construcție și mentenanță stații de tratare a apei în România.",
  keywords: [
    "tratare ape uzate",
    "statie epurare",
    "tratare apa",
    "inginerie apa",
    "wastewater treatment",
    "water engineering",
    "MBBR",
    "SBR",
    "Romania",
    "Iași",
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
    siteName: "Euromarket SRL",
    title: "Euromarket SRL | Experți în Ingineria Apei",
    description:
      "Experți în ingineria apei și apelor uzate din 1990. Proiectare, construcție și mentenanță stații de tratare.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Euromarket SRL - Water & Wastewater Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Euromarket SRL | Experți în Ingineria Apei",
    description: "Experți în ingineria apei și apelor uzate din 1990.",
    images: ["/images/og-image.jpg"],
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
