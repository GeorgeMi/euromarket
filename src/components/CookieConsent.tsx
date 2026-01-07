"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

const translations = {
  en: {
    title: "We use cookies",
    description: "This website uses cookies to ensure you get the best experience. By continuing to use this site, you agree to our use of cookies.",
    accept: "Accept All",
    reject: "Reject",
    settings: "Cookie Settings",
    privacy: "Privacy Policy",
  },
  ro: {
    title: "Folosim cookie-uri",
    description: "Acest website folosește cookie-uri pentru a vă oferi cea mai bună experiență. Continuând să utilizați acest site, sunteți de acord cu utilizarea cookie-urilor.",
    accept: "Accept Toate",
    reject: "Refuz",
    settings: "Setări Cookie",
    privacy: "Politica de Confidențialitate",
  },
};

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Delay showing the banner until after splash screen
      const timer = setTimeout(() => setIsVisible(true), 4000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Cookie className="w-6 h-6 text-primary" />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t.title}
                </h3>
                <p className="text-muted text-sm mb-4">
                  {t.description}{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    {t.privacy}
                  </Link>
                </p>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={handleAccept}
                    className="px-6 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    {t.accept}
                  </button>
                  <button
                    onClick={handleReject}
                    className="px-6 py-2.5 bg-gray-100 text-foreground font-medium rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    {t.reject}
                  </button>
                </div>
              </div>

              <button
                onClick={handleReject}
                className="p-2 text-muted hover:text-foreground transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
