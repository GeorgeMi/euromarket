"use client";

import { motion } from "framer-motion";
import { Droplets, Factory, Waves } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Applications() {
  const { t } = useLanguage();

  const applications = [
    {
      id: "sewage",
      icon: Waves,
      title: t.applications.sewage.title,
      description: t.applications.sewage.description,
      features: t.applications.sewage.features,
    },
    {
      id: "water",
      icon: Droplets,
      title: t.applications.water.title,
      description: t.applications.water.description,
      features: t.applications.water.features,
    },
    {
      id: "industrial",
      icon: Factory,
      title: t.applications.industrial.title,
      description: t.applications.industrial.description,
      features: t.applications.industrial.features,
    },
  ];

  return (
    <section id="applications" className="section-padding bg-surface">
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
            {t.applications.subtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            {t.applications.title}
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg text-center-force">
            {t.applications.description}
          </p>
        </motion.div>

        {/* Application Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {applications.map((app) => (
            <motion.div
              key={app.id}
              variants={cardVariants}
              className="group bg-white rounded-2xl p-8 card-shadow hover:card-shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <app.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {app.title}
              </h3>
              <p className="text-muted leading-relaxed mb-6 text-justify">
                {app.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {app.features.map((feature, idx) => (
                  <li
                    key={`${app.id}-feature-${idx}`}
                    className="flex items-center gap-2 text-sm text-muted"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
