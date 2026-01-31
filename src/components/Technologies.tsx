"use client";

import { motion } from "framer-motion";
import {
  Cog,
  Filter,
  Droplets,
  Gauge,
  CircleDot,
  Waves,
  FlaskConical,
  Settings2,
  Cylinder,
  ArrowDownUp,
  Monitor,
  Cloud,
  Activity,
  Cpu,
  MonitorSmartphone,
  FileBarChart,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Technologies() {
  const { t } = useLanguage();

  const equipment = [
    { id: "daf", icon: Waves, name: t.technologies.items.daf },
    { id: "filters", icon: Filter, name: t.technologies.items.filters },
    { id: "separators", icon: Cylinder, name: t.technologies.items.separators },
    { id: "dosing", icon: FlaskConical, name: t.technologies.items.dosing },
    { id: "cip", icon: Cog, name: t.technologies.items.cip },
    { id: "pressure", icon: Gauge, name: t.technologies.items.pressure },
    { id: "softening", icon: Droplets, name: t.technologies.items.softening },
    { id: "compactors", icon: CircleDot, name: t.technologies.items.compactors },
    { id: "pumping", icon: ArrowDownUp, name: t.technologies.items.pumping },
    { id: "upgrade", icon: Settings2, name: t.technologies.items.upgrade },
  ];

  const processes = [
    { name: "MBBR", full: t.technologies.processes.mbbr },
    { name: "SBR", full: t.technologies.processes.sbr },
    { name: "MBR", full: t.technologies.processes.mbr },
    { name: "DAF", full: t.technologies.processes.daf },
    { name: "RO", full: t.technologies.processes.ro },
    { name: "UF", full: t.technologies.processes.uf },
  ];

  const automation = [
    { id: "scada", icon: Monitor, ...t.technologies.automation.scada },
    { id: "cloud", icon: Cloud, ...t.technologies.automation.cloud },
    { id: "monitoring", icon: Activity, ...t.technologies.automation.monitoring },
    { id: "plc", icon: Cpu, ...t.technologies.automation.plc },
    { id: "hmi", icon: MonitorSmartphone, ...t.technologies.automation.hmi },
    { id: "reporting", icon: FileBarChart, ...t.technologies.automation.reporting },
  ];

  return (
    <section id="technologies" className="section-padding bg-gradient-to-b from-white to-surface">
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
            {t.technologies.subtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            {t.technologies.title}
          </h2>
          <p className="text-muted max-w-3xl mx-auto text-lg">
            {t.technologies.description}
          </p>
        </motion.div>

        {/* Process Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-xl font-bold text-foreground mb-8 text-center">
            {t.technologies.processTitle}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {processes.map((process, index) => (
              <motion.div
                key={process.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-3xl font-bold text-white">{process.name}</span>
                <p className="text-white/80 text-xs mt-2 leading-tight">{process.full}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Equipment Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-foreground mb-8 text-center">
            {t.technologies.equipmentTitle}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {equipment.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group bg-white rounded-xl p-5 card-shadow hover:card-shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground leading-tight">
                  {item.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Automation & Control */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold text-foreground mb-8 text-center">
            {t.technologies.automationTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automation.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-6 card-shadow hover:card-shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-muted mb-4">{t.technologies.cta}</p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all duration-300"
          >
            {t.technologies.ctaButton}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
