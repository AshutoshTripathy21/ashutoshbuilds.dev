"use client"

import { motion } from "framer-motion"
import { FaGithub, FaCodeBranch, FaStar, FaUserFriends } from "react-icons/fa"
import { SiGithub } from "react-icons/si"

import { useState, useEffect } from "react"
import { GitHubCalendar } from "react-github-calendar"

const githubStats = [
  { label: "Public Repos", value: "20+", icon: FaCodeBranch, color: "#388bfd" },
  { label: "Stars & Contributions", value: "Active", icon: FaStar, color: "#f59e0b" },
  { label: "Role & Focus", value: "Backend / Cloud", icon: SiGithub, color: "#63c5ff" },
  { label: "Primary Org", value: "Cognizant", icon: FaUserFriends, color: "#34d399" },
]

// Portfolio matching theme for contribution calendar
const calendarTheme = {
  light: ["#0e1726", "#0c4a6e", "#0284c7", "#388bfd", "#63c5ff"],
  dark: ["#0e1726", "#0c4a6e", "#0284c7", "#388bfd", "#63c5ff"],
}

export default function GithubActivity() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="activity" className="py-24 md:py-32 relative z-10">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 50%, var(--color-border-subtle) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full text-xs bg-accent-primary/5 border border-accent-primary/15 text-accent-cyan font-mono">
            <span className="text-text-muted">05.</span> open source
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-text-primary tracking-tight">
            GitHub Activity & Metrics
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-sm md:text-base text-text-secondary leading-relaxed font-sans">
            Consistent code contributions, open-source repositories, and continuous learning.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {githubStats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-5 rounded-2xl bg-bg-glass border border-border-subtle backdrop-blur-md flex flex-col items-center text-center group hover:border-accent-primary/30 transition-all duration-300"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                  style={{
                    background: `color-mix(in srgb, ${stat.color} 12%, transparent)`,
                    border: `1px solid color-mix(in srgb, ${stat.color} 25%, transparent)`,
                    color: stat.color,
                  }}
                >
                  <Icon size={18} />
                </div>
                <div className="text-xl font-bold font-display text-text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-text-muted font-sans tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Contribution Graph Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-6 md:p-8 rounded-3xl bg-bg-glass border border-border-subtle backdrop-blur-xl flex flex-col items-center text-center overflow-hidden min-h-[220px]"
        >
          <div className="flex items-center justify-between w-full mb-6 pb-4 border-b border-border-subtle">
            <div className="flex items-center gap-3">
              <FaGithub className="text-accent-cyan text-2xl" />
              <span className="font-mono text-sm font-semibold text-text-primary">
                @AshutoshTripathy21
              </span>
            </div>
            <a
              href="https://github.com/AshutoshTripathy21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-accent-cyan hover:underline flex items-center gap-1"
            >
              Visit Profile ↗
            </a>
          </div>

          <div className="w-full overflow-x-auto py-4 flex justify-center items-center text-text-secondary font-mono text-xs min-h-[140px]">
            {mounted ? (
              <GitHubCalendar
                username="AshutoshTripathy21"
                colorScheme="dark"
                theme={calendarTheme}
                blockSize={13}
                blockMargin={4}
                fontSize={13}
              />
            ) : (
              <div className="text-text-muted text-xs font-mono animate-pulse">
                Loading activity graph...
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}