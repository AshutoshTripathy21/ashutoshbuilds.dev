"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const projects = [
  {
    title: "Diamint",
    description: "A diamond trading platform reimagining investment opportunities with a modern web interface and real-time data.",
    tech: ["Django", "REST API", "Neon DB", "Render"],
    link: "https://diamint.onrender.com/",
    category: "Web App",
    status: "live",
    color: "var(--color-accent-primary)",
    featured: true,
  },
  {
    title: "Sync-Smith",
    description: "Developer tool to securely store and push projects to GitHub repositories in a single click with OAuth integration.",
    tech: ["Django", "OAuth", "GitHub API"],
    link: "https://sync-smith.onrender.com",
    category: "Dev Tool",
    status: "live",
    color: "var(--color-accent-cyan)",
    featured: true,
  },
  {
    title: "ReJouice Clone",
    description: "Visually rich animated website with smooth scroll interactions and premium UI animations inspired by Rejouice.",
    tech: ["HTML", "CSS", "GSAP", "Locomotive JS"],
    link: "https://github.com/AshutoshTripathy21",
    category: "Frontend",
    status: "github",
    color: "var(--color-accent-violet)",
  },
  {
    title: "Realtime Whiteboard",
    description: "Collaborative real-time whiteboard app allowing multiple users to draw and interact simultaneously over WebSockets.",
    tech: ["WebSockets", "Flask", "SQL"],
    link: "https://github.com/AshutoshTripathy21/Collab-Whiteboard",
    category: "Full Stack",
    status: "github",
    color: "var(--color-accent-emerald)",
  },
  {
    title: "Library Management",
    description: "Full-stack application to manage books, users, and borrowing workflows with Pandas-powered data insights.",
    tech: ["Python", "Flask", "Pandas"],
    link: "#",
    category: "Full Stack",
    status: "private",
    color: "#f59e0b",
  },
  {
    title: "AWS Service Recommender",
    description: "ML-powered AWS service recommendation system built during F13 Technologies internship to optimize cloud costs.",
    tech: ["Python", "ML", "Django"],
    link: "https://github.com/AshutoshTripathy21/service_recommender",
    category: "ML / Cloud",
    status: "github",
    color: "#FF9900",
  },
  {
    title: "Sundown Studio",
    description: "Immersive animated website focused on high-end scroll-based animations and fluid visual storytelling.",
    tech: ["HTML", "CSS", "GSAP", "Locomotive JS"],
    link: "https://ashutoshtripathy21.github.io/Sundown/",
    category: "Frontend",
    status: "live",
    color: "#f87171",
  },
  {
    title: "Duo Studio",
    description: "Modern animated frontend showcasing advanced scroll-triggered animations and interactive cursor design.",
    tech: ["HTML", "CSS", "GSAP", "Locomotive JS"],
    link: "https://duo-studio-tau.vercel.app/",
    category: "Frontend",
    status: "live",
    color: "#60a5fa",
  },
  {
    title: "HR Management System",
    description: "Employee management platform developed at F13 Technologies to streamline HR operations on AWS infrastructure.",
    tech: ["Python", "Django", "AWS"],
    link: "https://github.com/AshutoshTripathy21/HR-Management-System",
    category: "Full Stack",
    status: "github",
    color: "var(--color-accent-emerald)",
  },
]

const categories = ["All", "Web App", "Dev Tool", "Frontend", "Full Stack", "ML / Cloud"]

const statusConfig = {
  live: { label: "Live", color: "var(--color-accent-emerald)" },
  github: { label: "GitHub", color: "var(--color-accent-cyan)" },
  private: { label: "Private", color: "var(--color-text-secondary)" },
}

export default function Projects() {
  const [filter, setFilter] = useState("All")

  const filtered = filter === "All"
    ? projects
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-24 md:py-32 relative z-10">

      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 100%, var(--color-border-subtle) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full text-xs bg-accent-primary/5 border border-accent-primary/15 text-accent-cyan font-mono">
            <span className="text-text-muted">04.</span> selected work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-text-primary tracking-tight">
            Projects
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm transition-all duration-300 font-sans ${
                filter === cat
                  ? "bg-gradient-to-br from-accent-primary to-accent-cyan text-bg-void font-semibold border-transparent"
                  : "bg-bg-glass text-text-secondary border border-border-subtle hover:border-accent-primary/30 hover:text-text-primary font-normal"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, index) => {
            const status = statusConfig[project.status as keyof typeof statusConfig]
            const isPrivate = project.status === "private"
            
            return (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                viewport={{ once: true }}
                className={`group block rounded-2xl p-6 relative overflow-hidden bg-bg-glass border border-border-subtle backdrop-blur-md no-underline ${
                  isPrivate ? "cursor-default pointer-events-none" : "cursor-pointer"
                }`}
                style={{ '--project-color': project.color } as React.CSSProperties}
                onClick={isPrivate ? (e) => e.preventDefault() : undefined}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to right, transparent, var(--project-color), transparent)` }}
                />

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at top left, var(--project-color), transparent 60%)` }}
                />

                {/* Header */}
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="px-2.5 py-1 rounded-lg text-xs font-mono"
                      style={{
                        background: `color-mix(in srgb, var(--project-color) 12%, transparent)`,
                        border: `1px solid color-mix(in srgb, var(--project-color) 25%, transparent)`,
                        color: "var(--project-color)",
                      }}
                    >
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-2.5 py-1 rounded-lg text-[0.7rem] font-mono bg-accent-primary/5 border border-accent-primary/15 text-accent-cyan">
                        featured
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 whitespace-nowrap">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: status.color }}
                    />
                    <span
                      className="text-[0.7rem] font-mono"
                      style={{ color: status.color }}
                    >
                      {status.label}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 relative z-10 font-display text-text-primary group-hover:text-white tracking-tight transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm mb-6 relative z-10 text-text-secondary leading-relaxed font-sans">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md text-[0.7rem] font-mono bg-accent-primary/5 border border-accent-primary/10 text-text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link arrow */}
                {!isPrivate && (
                  <div
                    className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0"
                    style={{ color: "var(--project-color)" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7v10"/>
                    </svg>
                  </div>
                )}
              </motion.a>
            )
          })}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/AshutoshTripathy21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm transition-all duration-300 hover:scale-105 bg-bg-glass border border-border-subtle text-text-secondary font-sans hover:text-text-primary hover:border-accent-cyan/30"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"/>
            </svg>
            View all projects on GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
