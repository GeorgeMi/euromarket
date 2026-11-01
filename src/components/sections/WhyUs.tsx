"use client";

import { motion } from "framer-motion";
import {
  Award,
  FlaskConical,
  Lightbulb,
  HeadphonesIcon,
  KeyRound,
  TrendingUp,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function WhyUs() {
  const { t } = useLanguage();

  const reasons = [
    {
      id: "iso",
      icon: Award,
      title: t.whyUs.items.iso.title,
      description: t.whyUs.items.iso.description,
      highlight: true,
    },
    {
      id: "lab",
      icon: FlaskConical,
      title: t.whyUs.items.lab.title,
      description: t.whyUs.items.lab.description,
    },
    {
      id: "rd",
      icon: Lightbulb,
      title: t.whyUs.items.rd.title,
      description: t.whyUs.items.rd.description,
    },
    {
      id: "support",
      icon: HeadphonesIcon,
      title: t.whyUs.items.support.title,
      description: t.whyUs.items.support.description,
    },
    {
      id: "turnkey",
      icon: KeyRound,
      title: t.whyUs.items.turnkey.title,
      description: t.whyUs.items.turnkey.description,
    },
    {
      id: "experience",
      icon: TrendingUp,
      title: t.whyUs.items.experience.title,
      description: t.whyUs.items.experience.description,
      highlight: true,
    },
  ];

  return (
    <section className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            {t.whyUs.subtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            {t.whyUs.title}
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            {t.whyUs.description}
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.id}
              variants={itemVariants}
              className={`group relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                reason.highlight
                  ? "bg-gradient-to-br from-primary to-primary-dark text-white shadow-xl"
                  : "bg-white card-shadow hover:card-shadow-lg"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${
                  reason.highlight ? "bg-white/20" : "bg-primary/10"
                }`}
              >
                <reason.icon
                  className={`w-7 h-7 ${
                    reason.highlight ? "text-white" : "text-primary"
                  }`}
                />
              </div>
              <h3
                className={`text-xl font-bold mb-3 ${
                  reason.highlight ? "text-white" : "text-foreground"
                }`}
              >
                {reason.title}
              </h3>
              <p
                className={`leading-relaxed ${
                  reason.highlight ? "text-white/90" : "text-muted"
                }`}
              >
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
