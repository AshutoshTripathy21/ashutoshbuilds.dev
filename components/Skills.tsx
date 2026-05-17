"use client"

import { motion } from "framer-motion"
import {
  FaAws, FaDocker, FaPython, FaJava
} from "react-icons/fa"
import { FaDatabase, FaMicrosoft } from "react-icons/fa"
import { MdPrecisionManufacturing } from "react-icons/md"
import { SiRust, SiC } from "react-icons/si"
import {
  SiKubernetes,
  SiJenkins,
  SiAnsible,
  SiFlask,
  SiDjango,
  SiPostgresql,
  SiMongodb,
  SiUipath,
  SiGooglecloud,
} from "react-icons/si"

const skillDomains = [
  {
    title: "Cloud & DevOps",
    color: "var(--color-accent-primary)",
    icon: "☁",
    skills: [
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "Jenkins", icon: SiJenkins, color: "#D33833" },
      { name: "Ansible", icon: SiAnsible, color: "#EE0000" },
    ],
  },
  {
    title: "Backend Development",
    color: "var(--color-accent-cyan)",
    icon: "⚡",
    skills: [
      { name: "Flask", icon: SiFlask, color: "#FFFFFF" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
      { name: "VBScript", icon: FaMicrosoft, color: "#00A4EF" },
    ],
  },
  {
    title: "Databases",
    color: "var(--color-accent-emerald)",
    icon: "🗄",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Oracle", icon: FaDatabase, color: "#F80000" },
    ],
  },
  {
    title: "Automation & RPA",
    color: "var(--color-accent-violet)",
    icon: "🤖",
    skills: [
      { name: "UiPath", icon: SiUipath, color: "#FA4616" },
      { name: "Power Automate", icon: FaMicrosoft, color: "#0078D4" },
      { name: "RPA", icon: MdPrecisionManufacturing, color: "#888" },
    ],
  },
  {
    title: "Languages",
    color: "#f59e0b",
    icon: "{ }",
    skills: [
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "Rust", icon: SiRust, color: "#CE422B" },
      { name: "C", icon: SiC, color: "#A8B9CC" },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative z-10">

      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 100% 50%, var(--color-border-subtle) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full text-xs bg-accent-primary/5 border border-accent-primary/15 text-accent-cyan font-mono">
            <span className="text-text-muted">03.</span> skills & tools
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-text-primary tracking-tight">
            Tech Stack
          </h2>
        </motion.div>

        <div className="space-y-12">
          {skillDomains.map((domain, domainIdx) => (
            <motion.div
              key={domainIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: domainIdx * 0.08 }}
              viewport={{ once: true }}
              style={{ '--domain-color': domain.color } as React.CSSProperties}
            >
              {/* Domain label */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shadow-sm"
                  style={{
                    background: `color-mix(in srgb, var(--domain-color) 12%, transparent)`,
                    border: `1px solid color-mix(in srgb, var(--domain-color) 25%, transparent)`,
                    color: "var(--domain-color)",
                  }}
                >
                  {domain.icon}
                </div>
                <span
                  className="text-sm md:text-base font-semibold tracking-wider font-sans uppercase"
                  style={{ color: "var(--domain-color)" }}
                >
                  {domain.title}
                </span>
                <div
                  className="flex-1 h-px"
                  style={{ background: `linear-gradient(to right, color-mix(in srgb, var(--domain-color) 20%, transparent), transparent)` }}
                />
              </div>

              {/* Skill grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {domain.skills.map((skill, skillIdx) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={skillIdx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ y: -4, scale: 1.05 }}
                      transition={{
                        default: { duration: 0.3 },
                        layout: { duration: 0.2 },
                        delay: domainIdx * 0.05 + skillIdx * 0.04,
                      }}
                      viewport={{ once: true }}
                      className="group flex flex-col items-center gap-3 p-5 rounded-2xl cursor-default bg-bg-glass border border-border-subtle backdrop-blur-md transition-all duration-300 hover:bg-bg-deep hover:border-[var(--hover-border)] hover:shadow-[var(--hover-shadow)]"
                      style={{
                        '--hover-border': `color-mix(in srgb, var(--domain-color) 40%, transparent)`,
                        '--hover-shadow': `0 8px 24px color-mix(in srgb, var(--domain-color) 15%, transparent)`,
                      } as React.CSSProperties}
                    >
                      
                      <Icon
                        size={32}
                        className="transition-all duration-300 group-hover:scale-110"
                        style={{
                          color: skill.color,
                          filter: `drop-shadow(0 0 8px color-mix(in srgb, ${skill.color} 60%, transparent))`,
                        }}
                      />
                      <span className="text-xs font-semibold text-center text-text-secondary font-sans group-hover:text-text-primary transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 p-5 rounded-2xl bg-bg-glass border border-border-subtle font-mono backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent-emerald text-lg">✓</span>
            <span className="text-text-secondary text-sm">
              Currently working with at Cognizant
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Power Automate Desktop", "SAP Automation", "C#", "VBScript"].map((t, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-accent-emerald/10 border border-accent-emerald/20 text-accent-emerald"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
