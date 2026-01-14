"use client";

import { Mail, Phone, MapPin, Printer } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t, language } = useLanguage();

  const quickLinks = [
    { href: "/#applications", label: t.nav.applications },
    { href: "/#about", label: t.nav.about },
    { href: "/#services", label: t.nav.services },
    { href: "/#portfolio", label: t.nav.portfolio },
    { href: "/#contact", label: t.nav.contact },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary-dark to-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6 flex flex-col items-center text-center">
            <Image
              src="/images/logo_white.png"
              alt="Euromarket"
              width={280}
              height={70}
              className="h-16 w-auto"
            />
            <p className="text-white/80 leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="mailto:info@euromarket-ro.com"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="tel:+40232233693"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t.footer.ourServices}</h3>
            <ul className="space-y-3">
              {t.footer.services.map((service, index) => (
                <li key={`service-${index}`} className="text-white/70">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t.footer.contactUs}</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/yx8QQRLUn6FrQgKn9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {t.contact.info.addressLine1}, {t.contact.info.addressLine2}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+40232233693"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  +4 (0232) 233 693
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Printer className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-white/80">+4 (0232) 220 273</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@euromarket-ro.com"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  info@euromarket-ro.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-white/60 text-sm">
                &copy; {new Date().getFullYear()} {t.footer.copyright}
              </p>
              <p className="text-white/40 text-xs mt-1">
                CUI: 14692734 | Reg. Com.: J22/621/2002
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="text-white/40 text-sm hover:text-white/70 transition-colors"
              >
                {language === "ro" ? "Confidențialitate" : "Privacy"}
              </Link>
              <span className="text-white/20">|</span>
              <p className="text-white/40 text-sm">
                {t.footer.tagline}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
