"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { FaCode, FaGithub, FaDocker, FaAws, FaPlay, FaTerminal, FaCheckCircle } from "react-icons/fa"
import { SiKubernetes } from "react-icons/si"

const pipelineSteps = [
  {
    step: "01",
    title: "Plan & Code",
    desc: "Writing clean, modular, and optimized backend scripts in C# and Python.",
    icon: FaCode,
    color: "var(--color-accent-violet)",
    tools: ["Python", "C#", "VBScript", "VS Code"],
    details: {
      overview: "Structuring production-ready code with strict typing, clean architecture, and decoupled service layers.",
      highlights: [
        "Modular OOP structure for automated workflows",
        "Automated unit testing with PyTest & NUnit",
        "Strict static analysis with Flake8 and ESLint",
      ],
      snippet: `# Python Backend Service Endpoint
from flask import Flask, jsonify
app = Flask(__name__)

@app.route('/health')
def health_check():
    return jsonify(status="healthy", service="backend-v1"), 200`,
    },
  },
  {
    step: "02",
    title: "Version Control",
    desc: "Tracking changes, managing branches, and pushing code securely to GitHub.",
    icon: FaGithub,
    color: "var(--color-accent-cyan)",
    tools: ["Git", "GitHub", "Branching", "OAuth"],
    details: {
      overview: "Enforcing Git-Flow workflow with mandatory pull request reviews, feature branches, and semantic versioning.",
      highlights: [
        "Feature branch isolation and protected main branch",
        "Git commit hooks for pre-commit linting",
        "OAuth-authenticated repository synchronization",
      ],
      snippet: `# Git Flow & Release Strategy
git checkout -b feature/automation-core
git commit -m "feat(core): implement SAP automation runner"
git push origin feature/automation-core`,
    },
  },
  {
    step: "03",
    title: "CI/CD Pipeline",
    desc: "Automating testing, code validation, and building Docker artifacts.",
    icon: FaPlay,
    color: "var(--color-accent-primary)",
    tools: ["GitHub Actions", "Jenkins", "Ansible"],
    details: {
      overview: "Automated integration pipelines triggered on push to validate test coverage, run linters, and trigger automated builds.",
      highlights: [
        "GitHub Actions workflows for automated build verification",
        "Secret management with AWS Secrets Manager",
        "Zero-downtime deployment triggers",
      ],
      snippet: `# .github/workflows/deploy.yml
name: Build & Deploy
on:
  push:
    branches: [ main ]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Build Docker Image
        run: docker build -t app:latest .`,
    },
  },
  {
    step: "04",
    title: "Containerize",
    desc: "Packaging applications into lightweight, secure, and isolated containers.",
    icon: FaDocker,
    color: "#2496ED",
    tools: ["Docker", "Docker Compose", "Registry"],
    details: {
      overview: "Crafting multi-stage Dockerfiles to keep production images minimal, secure, and reproducible.",
      highlights: [
        "Multi-stage Docker builds to reduce image footprint",
        "Non-root container execution for enhanced security",
        "Environment variables management via Docker Compose",
      ],
      snippet: `# Multi-stage Dockerfile
FROM python:3.11-slim AS builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

FROM python:3.11-slim
WORKDIR /app
COPY --from=builder /usr/local /usr/local
COPY . .
CMD ["python", "main.py"]`,
    },
  },
  {
    step: "05",
    title: "Orchestrate",
    desc: "Deploying and managing highly scalable container clusters.",
    icon: SiKubernetes,
    color: "#326CE5",
    tools: ["Kubernetes", "Pods", "Services", "Helm"],
    details: {
      overview: "Managing containerized applications with Kubernetes for auto-healing, load balancing, and zero-downtime rollouts.",
      highlights: [
        "Horizontal Pod Autoscaling (HPA) based on CPU/RAM load",
        "Ingress controller routing and SSL termination",
        "ConfigMaps and Secrets separation",
      ],
      snippet: `# Kubernetes Deployment Definition
apiVersion: apps/v1
kind: Deployment
metadata:
  name: backend-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: backend`,
    },
  },
  {
    step: "06",
    title: "Cloud & Monitor",
    desc: "Hosting on robust cloud architecture and monitoring active logs.",
    icon: FaAws,
    color: "var(--color-accent-emerald)",
    tools: ["AWS (EC2/S3)", "GCP", "CloudWatch", "Prometheus"],
    details: {
      overview: "Deploying across cloud infrastructure with real-time log analysis, metric tracking, and alert rules.",
      highlights: [
        "AWS S3 & CloudFront distribution for static assets",
        "CloudWatch logs & custom alarm thresholds",
        "High availability multi-AZ setup",
      ],
      snippet: `# CloudWatch Log Stream & Alert Rule
resource "aws_cloudwatch_metric_alarm" "cpu_high" {
  alarm_name          = "high-cpu-utilization"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = "2"
  threshold           = "80"
}`,
    },
  },
]

export default function DevOpsPipeline() {
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const [selectedStep, setSelectedStep] = useState<number>(0)

  const activeData = pipelineSteps[selectedStep]
  const ActiveIcon = activeData.icon

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
            A visual overview of how I design, package, test, orchestrate, and deploy robust, automated cloud services. Click any stage to inspect details.
          </p>
        </motion.div>

        {/* Pipeline Grid Layout */}
        <div className="relative mt-12">
          {/* Connecting Track Line */}
          <div className="absolute top-1/2 left-4 right-4 h-0.5 -translate-y-1/2 bg-gradient-to-r from-border-subtle via-border-glow to-border-subtle hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {pipelineSteps.map((step, idx) => {
              const Icon = step.icon
              const isHovered = activeStep === idx
              const isSelected = selectedStep === idx

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setActiveStep(idx)}
                  onMouseLeave={() => setActiveStep(null)}
                  onClick={() => setSelectedStep(idx)}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  {/* Glowing Connector Pin */}
                  <div className="mb-6 relative hidden lg:block">
                    <motion.div
                      animate={{
                        scale: isSelected ? 1.4 : isHovered ? 1.2 : 1,
                        backgroundColor: isSelected || isHovered ? step.color : "rgba(8, 15, 26, 0.9)",
                        borderColor: isSelected || isHovered ? step.color : "var(--color-border-subtle)",
                      }}
                      className="w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center z-20 relative"
                      style={{
                        boxShadow: isSelected || isHovered ? `0 0 15px ${step.color}` : "none",
                      }}
                    >
                      {(isSelected || isHovered) && <span className="w-1.5 h-1.5 rounded-full bg-bg-void" />}
                    </motion.div>
                  </div>

                  {/* Glassmorphism Card */}
                  <div
                    className={`w-full flex-1 rounded-2xl p-5 bg-bg-glass border backdrop-blur-md transition-all duration-300 flex flex-col items-center text-center ${
                      isSelected
                        ? "border-[color:var(--hover-border)] shadow-[0_8px_30px_color-mix(in_srgb,var(--hover-color)_20%,transparent)] bg-bg-deep ring-1 ring-[color:var(--hover-border)]"
                        : isHovered
                        ? "border-[color:var(--hover-border)] shadow-[0_8px_20px_color-mix(in_srgb,var(--hover-color)_10%,transparent)] bg-bg-deep"
                        : "border-border-subtle"
                    }`}
                    style={{
                      "--hover-border": step.color,
                      "--hover-color": step.color,
                    } as React.CSSProperties}
                  >
                    <span
                      className="text-xs font-mono font-bold mb-3 transition-colors duration-300"
                      style={{ color: isSelected || isHovered ? step.color : "var(--color-text-muted)" }}
                    >
                      {step.step}
                    </span>

                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                      style={{
                        background: isSelected || isHovered
                          ? `color-mix(in srgb, ${step.color} 15%, transparent)`
                          : "rgba(56, 139, 253, 0.04)",
                        border: isSelected || isHovered
                          ? `1px solid ${step.color}`
                          : "1px solid var(--color-border-subtle)",
                      }}
                    >
                      <Icon
                        size={20}
                        style={{
                          color: isSelected || isHovered ? step.color : "var(--color-text-secondary)",
                          filter: isSelected || isHovered ? `drop-shadow(0 0 8px ${step.color})` : "none",
                        }}
                      />
                    </div>

                    <h3 className="text-sm font-bold font-display text-text-primary tracking-wide mb-2">
                      {step.title}
                    </h3>

                    <p className="text-xs text-text-secondary leading-relaxed font-sans mb-4 flex-1">
                      {step.desc}
                    </p>

                    <div className="flex flex-wrap justify-center gap-1 mt-auto">
                      {step.tools.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-1.5 py-0.5 rounded text-[0.65rem] font-mono transition-colors duration-300"
                          style={{
                            background: isSelected
                              ? `color-mix(in srgb, ${step.color} 15%, transparent)`
                              : "rgba(56, 139, 253, 0.04)",
                            color: isSelected ? step.color : "var(--color-text-muted)",
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

        {/* Selected Stage Detail Drawer */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl p-6 md:p-8 bg-bg-glass border backdrop-blur-xl"
              style={{
                borderColor: `color-mix(in srgb, ${activeData.color} 30%, transparent)`,
                boxShadow: `0 12px 40px color-mix(in srgb, ${activeData.color} 10%, transparent)`,
              }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Overview */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                      style={{
                        background: `color-mix(in srgb, ${activeData.color} 15%, transparent)`,
                        border: `1px solid ${activeData.color}`,
                        color: activeData.color,
                      }}
                    >
                      <ActiveIcon size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-mono" style={{ color: activeData.color }}>
                        STAGE {activeData.step} ARCHITECTURE
                      </div>
                      <h3 className="text-xl font-bold font-display text-text-primary">
                        {activeData.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-text-secondary leading-relaxed font-sans mb-6">
                    {activeData.details.overview}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    {activeData.details.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-text-primary font-sans">
                        <FaCheckCircle className="mt-0.5 flex-shrink-0 text-accent-emerald" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {activeData.tools.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg text-xs font-mono"
                        style={{
                          background: `color-mix(in srgb, ${activeData.color} 12%, transparent)`,
                          border: `1px solid color-mix(in srgb, ${activeData.color} 25%, transparent)`,
                          color: activeData.color,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Code Snippet Box */}
                <div className="rounded-2xl bg-[#040810] border border-border-subtle overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2.5 bg-[#080f1a] border-b border-border-subtle">
                    <div className="flex items-center gap-2">
                      <FaTerminal className="text-text-muted text-xs" />
                      <span className="text-xs font-mono text-text-secondary">
                        {activeData.title.toLowerCase().replace(/\s+/g, "_")}_config
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                    </div>
                  </div>
                  <pre className="p-4 text-xs font-mono overflow-x-auto text-accent-cyan leading-relaxed">
                    <code>{activeData.details.snippet}</code>
                  </pre>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}