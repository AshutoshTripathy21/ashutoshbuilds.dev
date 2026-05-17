"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { FaCode, FaGithub, FaDocker, FaAws, FaPlay } from "react-icons/fa"
import { SiKubernetes, SiPrometheus } from "react-icons/si"

const pipelineSteps = [
  {
    step: "01",
    title: "Plan & Code",
    desc: "Writing clean, modular, and optimized backend scripts in C# and Python.",
    icon: FaCode,
    color: "var(--color-accent-violet)",
    tools: ["Python", "C#", "VBScript", "VS Code"],
  },
  {
    step: "02",
    title: "Version Control",
    desc: "Tracking changes, managing branches, and pushing code securely to GitHub.",
    icon: FaGithub,
    color: "var(--color-accent-cyan)",
    tools: ["Git", "GitHub", "Branching", "OAuth"],
  },
  {
    step: "03",
    title: "CI/CD Pipeline",
    desc: "Automating testing, code validation, and building Docker artifacts.",
    icon: FaPlay,
    color: "var(--color-accent-primary)",
    tools: ["GitHub Actions", "Jenkins", "Ansible"],
  },
  {
    step: "04",
    title: "Containerize",
    desc: "Packaging applications into lightweight, secure, and isolated containers.",
    icon: FaDocker,
    color: "#2496ED",
    tools: ["Docker", "Docker Compose", "Registry"],
  },
  {
    step: "05",
    title: "Orchestrate",
    desc: "Deploying and managing highly scalable container clusters.",
    icon: SiKubernetes,
    color: "#326CE5",
    tools: ["Kubernetes", "Pods", "Services", "Helm"],
  },
  {
    step: "06",
    title: "Cloud & Monitor",
    desc: "Hosting on robust cloud architecture and monitoring active logs.",
    icon: FaAws,
    color: "var(--color-accent-emerald)",
    tools: ["AWS (EC2/S3)", "GCP", "CloudWatch", "Prometheus"],
  },
]

export default function DevOpsPipeline() {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  return (
    <section id="pipeline" className="py-24 md:py-32 relative z-10 overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, var(--color-border-subtle) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full text-xs bg-accent-primary/5 border border-accent-primary/15 text-accent-cyan font-mono">
            <span className="text-text-muted">03.</span> automation flow
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-text-primary tracking-tight">
            DevOps & Deployment Pipeline
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-sm md:text-base text-text-secondary leading-relaxed font-sans">
            A visual overview of how I design, package, test, orchestrate, and deploy robust, automated cloud services.
          </p>
        </motion.div>

        {/* Pipeline Container */}
        <div className="relative mt-20">
          {/* Connecting Track Line */}
          <div className="absolute top-1/2 left-4 right-4 h-0.5 -translate-y-1/2 bg-gradient-to-r from-border-subtle via-border-glow to-border-subtle hidden lg:block" />

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
            {pipelineSteps.map((step, idx) => {
              const Icon = step.icon
              const isHovered = activeStep === idx

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setActiveStep(idx)}
                  onMouseLeave={() => setActiveStep(null)}
                  className="flex flex-col items-center group cursor-default"
                >
                  {/* Glowing Connecting Connector Pin */}
                  <div className="mb-6 relative hidden lg:block">
                    <motion.div
                      animate={{
                        scale: isHovered ? 1.4 : 1,
                        backgroundColor: isHovered ? step.color : "rgba(8, 15, 26, 0.9)",
                        borderColor: isHovered ? step.color : "var(--color-border-subtle)",
                      }}
                      className="w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center z-20 relative"
                      style={{
                        boxShadow: isHovered ? `0 0 15px ${step.color}` : "none",
                      }}
                    >
                      {isHovered && <span className="w-1.5 h-1.5 rounded-full bg-bg-void" />}
                    </motion.div>
                  </div>

                  {/* Glassmorphism Card */}
                  <div
                    className={`w-full flex-1 rounded-2xl p-5 bg-bg-glass border backdrop-blur-md transition-all duration-300 flex flex-col items-center text-center ${
                      isHovered
                        ? "border-[color:var(--hover-border)] shadow-[0_8px_30px_color-mix(in_srgb,var(--hover-color)_15%,transparent)] bg-bg-deep"
                        : "border-border-subtle"
                    }`}
                    style={{
                      "--hover-border": step.color,
                      "--hover-color": step.color,
                    } as React.CSSProperties}
                  >
                    {/* Header: Step Number */}
                    <span
                      className="text-xs font-mono font-bold mb-3 transition-colors duration-300"
                      style={{ color: isHovered ? step.color : "var(--color-text-muted)" }}
                    >
                      {step.step}
                    </span>

                    {/* Step Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                      style={{
                        background: isHovered
                          ? `color-mix(in srgb, ${step.color} 15%, transparent)`
                          : "rgba(56, 139, 253, 0.04)",
                        border: isHovered
                          ? `1px solid ${step.color}`
                          : "1px solid var(--color-border-subtle)",
                      }}
                    >
                      <Icon
                        size={20}
                        style={{
                          color: isHovered ? step.color : "var(--color-text-secondary)",
                          filter: isHovered ? `drop-shadow(0 0 8px ${step.color})` : "none",
                        }}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    {/* Step Title */}
                    <h3 className="text-sm font-bold font-display text-text-primary tracking-wide mb-2 group-hover:text-white">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs text-text-secondary leading-relaxed font-sans mb-4 flex-1">
                      {step.desc}
                    </p>

                    {/* Tool Badges */}
                    <div className="flex flex-wrap justify-center gap-1 mt-auto">
                      {step.tools.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-1.5 py-0.5 rounded text-[0.65rem] font-mono transition-colors duration-300"
                          style={{
                            background: isHovered
                              ? `color-mix(in srgb, ${step.color} 10%, transparent)`
                              : "rgba(56, 139, 253, 0.04)",
                            border: isHovered
                              ? `1px solid color-mix(in srgb, ${step.color} 20%, transparent)`
                              : "1px solid var(--color-border-subtle)",
                            color: isHovered ? step.color : "var(--color-text-muted)",
                          }}
                        >
                          {tool}
                        </span>
                      ))}
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