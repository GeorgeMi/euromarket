"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Users, Factory, X, ChevronLeft, ChevronRight, Wrench, Monitor } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
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

type MediaItem = {
  type: "video" | "image";
  src: string;
};

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: typeof Users | typeof Factory;
  stats: { value: string; label: string }[];
  media: MediaItem[];
};

export default function Portfolio() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const projects: Project[] = [
    {
      id: "municipal",
      ...t.portfolio.projects.municipal,
      icon: Users,
      stats: [
        { value: "3,000", label: t.portfolio.stats.residents },
        { value: "MBBR", label: t.portfolio.stats.technology },
      ],
      media: [
        { type: "video", src: "/videos/mbbr.mp4" },
      ],
    },
    {
      id: "municipal2",
      ...t.portfolio.projects.municipal2,
      icon: Users,
      stats: [
        { value: "5,000", label: t.portfolio.stats.residents },
        { value: "600 m³/zi", label: t.portfolio.stats.capacity },
      ],
      media: [
        { type: "image", src: "/images/municipal_600_mc.png" },
      ],
    },
    {
      id: "industrial",
      ...t.portfolio.projects.industrial,
      icon: Factory,
      stats: [
        { value: "SBR", label: t.portfolio.stats.technology },
        { value: "24/7", label: t.portfolio.stats.operation },
      ],
      media: [
        { type: "video", src: "/videos/sbr.mp4" },
        { type: "image", src: "/images/sbr.jpeg" },
      ],
    },
    {
      id: "industrialDaf",
      ...t.portfolio.projects.industrialDaf,
      icon: Factory,
      stats: [
        { value: "DAF", label: t.portfolio.stats.technology },
        { value: "24/7", label: t.portfolio.stats.operation },
      ],
      media: [
        { type: "video", src: "/videos/daf.mp4" },
        { type: "image", src: "/images/industrial_1.jpeg" },
        { type: "image", src: "/images/industrial_2.jpeg" },
      ],
    },
    {
      id: "production",
      ...t.portfolio.projects.production,
      icon: Wrench,
      stats: [
        { value: "100%", label: "Calitate" },
        { value: "24/7", label: t.portfolio.stats.operation },
      ],
      media: [
        { type: "image", src: "/images/productie.jpeg" },
        { type: "image", src: "/images/productie_1.jpeg" },
        { type: "image", src: "/images/productie_2.jpeg" },
        { type: "image", src: "/images/productie_3.jpeg" },
        { type: "image", src: "/images/productie_4.jpeg" },
        { type: "image", src: "/images/productie_5.jpeg" },
      ],
    },
    {
      id: "scada",
      ...t.portfolio.projects.scada,
      icon: Monitor,
      stats: [
        { value: "SCADA", label: t.portfolio.stats.technology },
        { value: "24/7", label: t.portfolio.stats.operation },
      ],
      media: [
        { type: "image", src: "/images/scada_2.jpeg" },
        { type: "image", src: "/images/scada_1.png" },
      ],
    },
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentMediaIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentMediaIndex(0);
  };

  const nextMedia = () => {
    if (selectedProject) {
      setCurrentMediaIndex((prev) =>
        prev === selectedProject.media.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevMedia = () => {
    if (selectedProject) {
      setCurrentMediaIndex((prev) =>
        prev === 0 ? selectedProject.media.length - 1 : prev - 1
      );
    }
  };

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
              onClick={() => openModal(project)}
              className="group relative rounded-2xl overflow-hidden card-shadow hover:card-shadow-lg transition-all duration-300 bg-white cursor-pointer"
            >
              {/* Video or Image */}
              <div className="relative h-56 overflow-hidden">
                {project.media[0].type === "video" ? (
                  <video
                    src={project.media[0].src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <Image
                    src={project.media[0].src}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold bg-white/95 text-primary rounded-full shadow-lg">
                    <project.icon size={14} />
                    {project.category}
                  </span>
                </div>

                {/* Media Count Badge */}
                {project.media.length > 1 && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 text-xs font-semibold bg-black/50 text-white rounded-full">
                      +{project.media.length - 1}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                {project.description && (
                  <p className="text-muted text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                )}

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
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>{t.portfolio.cta}</span>
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-white rounded-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
              >
                <X size={24} />
              </button>

              {/* Media Display */}
              <div className="relative aspect-video bg-black">
                {selectedProject.media[currentMediaIndex].type === "video" ? (
                  <video
                    src={selectedProject.media[currentMediaIndex].src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={selectedProject.media[currentMediaIndex].src}
                    alt={selectedProject.title}
                    fill
                    className="object-contain"
                  />
                )}

                {/* Navigation Arrows */}
                {selectedProject.media.length > 1 && (
                  <>
                    <button
                      onClick={prevMedia}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
                    >
                      <ChevronLeft size={28} />
                    </button>
                    <button
                      onClick={nextMedia}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
                    >
                      <ChevronRight size={28} />
                    </button>
                  </>
                )}

                {/* Media Indicators */}
                {selectedProject.media.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedProject.media.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentMediaIndex(idx)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          idx === currentMediaIndex ? "bg-white" : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                    <selectedProject.icon size={14} />
                    {selectedProject.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {selectedProject.title}
                </h3>
                <div className="flex gap-8">
                  {selectedProject.stats.map((stat, idx) => (
                    <div key={idx}>
                      <div className="text-2xl font-bold text-primary">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted uppercase tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
