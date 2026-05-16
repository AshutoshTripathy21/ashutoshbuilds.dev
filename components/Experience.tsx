"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const experiences = [
  {
    company: "Cognizant",
    role: "Junior RPA Developer",
    period: "Nov 2024 – Present",
    type: "Full-time",
    location: "Remote",
    color: "var(--color-accent-primary)",
    icon: "⚙",
    points: [
      "Developing enterprise automation workflows using Microsoft Power Automate Desktop",
      "Automating complex SAP processes reducing manual effort by 60%",
      "Writing automation scripts in C# and VBScript for custom business logic",
      "Improving operational efficiency and accuracy through intelligent RPA solutions",
    ],
    tech: ["Power Automate", "C#", "VBScript", "SAP", "RPA"],
  },
  {
    company: "F13 Technologies",
    role: "AWS Cloud Intern",
    period: "May 2024 – Aug 2024",
    type: "Internship",
    location: "Remote",
    color: "var(--color-accent-cyan)",
    icon: "☁",
    points: [
      "Researched and documented enterprise cloud migration strategies for clients",
      "Built an intelligent AWS service recommendation system using Python",
      "Developed a full-stack HR management platform deployed on AWS",
      "Explored AWS infrastructure architecture patterns and best practices",
    ],
    tech: ["AWS", "Python", "Django", "EC2", "S3"],
  },
]

export default function Experience() {
  const [activeExp, setActiveExp] = useState<number | null>(null)

  return (
    <section id="experience" className="py-24 md:py-32 relative z-10">

      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 0% 50%, var(--color-border-subtle) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full text-xs bg-accent-primary/5 border border-accent-primary/15 text-accent-cyan font-mono">
            <span className="text-text-muted">02.</span> work history
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-text-primary tracking-tight">
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px md:left-1/2 bg-gradient-to-b from-transparent via-border-glow to-transparent" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => {
              const isActive = activeExp === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className={`relative flex md:items-center gap-6 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ '--exp-color': exp.color } as React.CSSProperties}
                >
                  {/* Timeline node */}
                  <div
                    className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-xl md:absolute md:left-1/2 md:-translate-x-1/2"
                    style={{
                      background: `radial-gradient(circle, color-mix(in srgb, var(--exp-color) 15%, transparent), color-mix(in srgb, var(--exp-color) 5%, transparent))`,
                      border: `1px solid color-mix(in srgb, var(--exp-color) 25%, transparent)`,
                      boxShadow: `0 0 20px color-mix(in srgb, var(--exp-color) 12%, transparent)`,
                    }}
                  >
                    {exp.icon}
                    <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-[var(--exp-color)]" />
                  </div>

                  {/* Content card */}
                  <div
                    className={`flex-1 rounded-2xl p-6 transition-all duration-300 cursor-pointer md:max-w-[44%] backdrop-blur-xl ${
                      index % 2 === 0 ? "md:mr-auto md:ml-0" : "md:ml-auto md:mr-0"
                    } ${
                      isActive 
                        ? "bg-bg-deep border-[color:var(--exp-color)] shadow-[0_8px_40px_color-mix(in_srgb,var(--exp-color)_15%,transparent)]"
                        : "bg-bg-glass border-border-subtle"
                    }`}
                    onClick={() => setActiveExp(activeExp === index ? null : index)}
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-2">
                      <div>
                        <h3 className="text-lg font-semibold mb-1 font-display text-text-primary tracking-tight">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-sans font-semibold text-[0.9rem] text-[var(--exp-color)]">
                            {exp.company}
                          </span>
                          <span
                            className="px-2 py-0.5 rounded-full text-[0.7rem] font-mono"
                            style={{
                              background: `color-mix(in srgb, var(--exp-color) 10%, transparent)`,
                              color: "var(--exp-color)",
                              border: `1px solid color-mix(in srgb, var(--exp-color) 15%, transparent)`,
                            }}
                          >
                            {exp.type}
                          </span>
                        </div>
                      </div>
                      <div className="text-left sm:text-right text-text-muted font-mono text-[0.75rem]">
                        <div>{exp.period}</div>
                        <div>{exp.location}</div>
                      </div>
                    </div>

                    {/* Points */}
                    <div
                      className="overflow-hidden transition-all duration-500 ease-in-out"
                      style={{ maxHeight: isActive ? "400px" : "0px", opacity: isActive ? 1 : 0 }}
                    >
                      <ul className="mb-5 space-y-2.5">
                        {exp.points.map((p, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed font-sans"
                          >
                            <span className="mt-1 flex-shrink-0 text-[var(--exp-color)]">▸</span>
                            {p}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-lg text-xs font-mono bg-accent-primary/5 border border-accent-primary/15 text-text-secondary"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expand hint */}
                    <div className="mt-4 text-xs flex items-center gap-1 text-text-muted font-mono">
                      <span>{isActive ? "↑ collapse" : "↓ expand details"}</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
