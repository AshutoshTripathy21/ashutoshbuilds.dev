"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { FaAws, FaDocker, FaPython } from "react-icons/fa"
import { SiKubernetes, SiTypescript } from "react-icons/si"

const roles = [
  "Software Engineer",
  "Backend Developer",
  "Cloud Engineer",
  "DevOps Specialist",
  "RPA & Automation Expert",
]

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "20+", label: "Projects Built" },
  { value: "5+", label: "Core Tech Stacks" },
  { value: "10+", label: "Cloud Deployments" },
]

const techBadges = [
  { name: "AWS Cloud", icon: FaAws, color: "#FF9900" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  const whatsappNumber = "919078998913"
  const openWhatsApp = () => {
    const message = "Hi Ashutosh, I saw your portfolio and would like to connect!"
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank")
  }

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2200)
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    } else {
      const speed = isDeleting ? 35 : 70
      timeout = setTimeout(() => {
        setDisplayText(isDeleting
          ? current.slice(0, displayText.length - 1)
          : current.slice(0, displayText.length + 1)
        )
      }, speed)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-16">
      {/* Radial gradient background aura */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(56, 139, 253, 0.12) 0%, transparent 70%)",
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(var(--border-subtle) 1px, transparent 1px),
            linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 0%, transparent 80%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10 w-full">

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-xs md:text-sm font-mono text-accent-emerald bg-accent-emerald/5 border border-accent-emerald/20 shadow-[0_0_20px_rgba(52,211,153,0.1)]"
        >
          <span
            className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse"
            style={{ boxShadow: "0 0 8px var(--accent-emerald)" }}
          />
          Available for freelance & full-time opportunities
        </motion.div>

        {/* Name Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-4 leading-none font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight text-text-primary"
        >
          Ashutosh{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-accent-primary via-accent-cyan to-accent-violet animate-[gradient-shift_4s_ease_infinite] bg-[length:200%_200%]">
            Tripathy
          </span>
        </motion.h1>

        {/* Floating tech badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-8"
        >
          {techBadges.map((badge, idx) => {
            const Icon = badge.icon
            return (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-bg-glass border border-border-subtle backdrop-blur-md text-text-secondary transition-all hover:scale-105 hover:border-accent-cyan/30"
              >
                <Icon style={{ color: badge.color }} />
                {badge.name}
              </span>
            )
          })}
        </motion.div>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-6 flex items-center justify-center gap-2 font-mono text-lg md:text-2xl text-accent-cyan"
        >
          <span className="text-text-muted">$</span>
          <span className="font-semibold">{displayText}</span>
          <span className="w-0.5 h-6 rounded-full inline-block bg-accent-cyan animate-[blink_1s_step-end_infinite]" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="max-w-2xl mx-auto mb-10 text-base md:text-lg leading-relaxed text-text-secondary font-sans"
        >
          I architect scalable backend systems, design robust cloud infrastructure,
          and eliminate manual workflows through intelligent automation. Passionate
          about building systems that scale effortlessly and run reliably.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <button
            onClick={openWhatsApp}
            suppressHydrationWarning
            className="group relative px-8 py-3.5 rounded-xl text-sm font-semibold font-sans overflow-hidden transition-all duration-300 hover:scale-105 bg-gradient-to-br from-accent-primary to-accent-cyan text-bg-void shadow-[0_8px_32px_rgba(56,139,253,0.35)] tracking-wide"
          >
            <span className="relative z-10 flex items-center gap-2">
              Let's Connect
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </span>
          </button>

          <a
            href="/Ashutosh_Tripathy_Resume.pdf"
            download
            className="group px-8 py-3.5 rounded-xl text-sm font-semibold font-sans transition-all duration-300 hover:scale-105 bg-accent-primary/5 border border-accent-primary/20 text-accent-cyan tracking-wide hover:bg-accent-primary/10"
          >
            Download Resume ↗
          </a>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0 + i * 0.1 }}
              className="py-4 px-3 rounded-2xl text-center bg-bg-glass border border-border-subtle backdrop-blur-md hover:border-accent-cyan/30 transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl font-bold mb-1 font-display text-transparent bg-clip-text bg-gradient-to-br from-accent-primary to-accent-cyan">
                {stat.value}
              </div>
              <div className="text-[0.7rem] md:text-xs text-text-muted font-sans tracking-wider uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest uppercase text-text-muted font-mono">
            scroll
          </span>
          <div className="w-px h-12 relative overflow-hidden bg-border-subtle">
            <div className="absolute w-full rounded-full h-10 bg-gradient-to-b from-transparent to-accent-cyan animate-[scan-line_2s_ease-in-out_infinite]" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
