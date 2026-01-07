"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Droplets, Factory, Building2 } from "lucide-react";
import Image from "next/image";
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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export default function Portfolio() {
  const { t } = useLanguage();

  const projects = [
    {
      id: "municipal",
      ...t.portfolio.projects.municipal,
      image: "/images/portofolio-img1.jpg",
      icon: Users,
      stats: [
        { value: "50,000", label: t.portfolio.stats.residents },
        { value: "MBBR", label: t.portfolio.stats.technology },
      ],
    },
    {
      id: "industrial",
      ...t.portfolio.projects.industrial,
      image: "/images/plant.jpg",
      icon: Factory,
      stats: [
        { value: "95%", label: t.portfolio.stats.recovery },
        { value: "24/7", label: t.portfolio.stats.operation },
      ],
    },
    {
      id: "drinking",
      ...t.portfolio.projects.drinking,
      image: "/images/portofolio-img1.jpg",
      icon: Droplets,
      stats: [
        { value: "500", label: t.portfolio.stats.capacity },
        { value: "99.9%", label: t.portfolio.stats.purity },
      ],
    },
    {
      id: "food",
      ...t.portfolio.projects.food,
      image: "/images/plant.jpg",
      icon: Building2,
      stats: [
        { value: "DAF", label: t.portfolio.stats.technology },
        { value: "BOD 98%", label: t.portfolio.stats.removal },
      ],
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-white">
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
            {t.portfolio.subtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            {t.portfolio.title}
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            {t.portfolio.description}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative rounded-2xl overflow-hidden card-shadow hover:card-shadow-lg transition-all duration-300 bg-white"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold bg-white/95 text-primary rounded-full shadow-lg">
                    <project.icon size={14} />
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="flex gap-6 pt-4 border-t border-gray-100">
                  {project.stats.map((stat, idx) => (
                    <div key={idx} className="text-center flex-1">
                      <div className="text-lg font-bold text-primary">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted uppercase tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Arrow */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                  <ArrowRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>{t.portfolio.cta}</span>
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
