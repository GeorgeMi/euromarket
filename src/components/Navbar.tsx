"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { href: "/#applications", label: t.nav.applications },
    { href: "/#technologies", label: t.nav.technologies },
    { href: "/#services", label: t.nav.services },
    { href: "/#portfolio", label: t.nav.portfolio },
    { href: "/#contact", label: t.nav.contact },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ro" : "en");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Euromarket SRL"
              width={200}
              height={56}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg font-medium text-primary hover:bg-primary/10 hover:text-primary-dark transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="ml-4 flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-primary hover:bg-primary/10 transition-all duration-200"
              aria-label="Switch language"
            >
              <Globe size={18} />
              <span className="uppercase font-semibold">{language === "ro" ? "EN" : "RO"}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg text-primary hover:bg-primary/10 transition-colors"
              aria-label="Switch language"
            >
              <span className="uppercase font-semibold text-sm">{language === "ro" ? "EN" : "RO"}</span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t shadow-xl"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-primary font-medium rounded-lg hover:bg-primary/5 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
