"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { FaSearch, FaTimes, FaExternalLinkAlt, FaGithub, FaCheckCircle } from "react-icons/fa"

interface Project {
  title: string
  description: string
  longDescription?: string
  tech: string[]
  link: string
  category: string
  status: "live" | "github" | "private"
  color: string
  featured?: boolean
  keyFeatures?: string[]
}

const projects: Project[] = [
  {
    title: "Diamint",
    description: "A diamond trading platform reimagining investment opportunities with a modern web interface and real-time data.",
    longDescription: "Diamint provides real-time market insights and investment analytics for diamond trading. Built with Django REST framework and backed by Neon Serverless PostgreSQL DB for zero-latency queries.",
    keyFeatures: [
      "Real-time price calculations and asset valuation",
      "Neon PostgreSQL serverless integration",
      "RESTful API architecture deployed on Render",
    ],
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
    longDescription: "Sync-Smith simplifies developer workflows by connecting directly to GitHub via OAuth 2.0. Automates initial repository setup, git commits, and remote push routines with one click.",
    keyFeatures: [
      "GitHub OAuth 2.0 integration",
      "One-click repository initialization",
      "Secure credential vault and token handling",
    ],
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
    longDescription: "An award-winning inspired web project built to demonstrate high-performance GSAP animations, canvas visual effects, and customized smooth scrolling.",
    keyFeatures: [
      "GSAP ScrollTrigger timeline animations",
      "Locomotive Scroll smooth acceleration",
      "Responsive interactive typography layout",
    ],
    tech: ["HTML", "CSS", "GSAP", "Locomotive JS"],
    link: "https://github.com/AshutoshTripathy21",
    category: "Frontend",
    status: "github",
    color: "var(--color-accent-violet)",
  },
  {
    title: "Realtime Whiteboard",
    description: "Collaborative real-time whiteboard app allowing multiple users to draw and interact simultaneously over WebSockets.",
    longDescription: "A multi-user drawing workspace enabling instantaneous synchronization of shapes, strokes, and notes over persistent WebSockets connections.",
    keyFeatures: [
      "WebSockets multi-client real-time synchronization",
      "HTML5 Canvas vector drawing engine",
      "Session room management with Flask backend",
    ],
    tech: ["WebSockets", "Flask", "SQL"],
    link: "https://github.com/AshutoshTripathy21/Collab-Whiteboard",
    category: "Full Stack",
    status: "github",
    color: "var(--color-accent-emerald)",
  },
  {
    title: "Library Management",
    description: "Full-stack application to manage books, users, and borrowing workflows with Pandas-powered data insights.",
    longDescription: "Comprehensive database system handling circulation, automated fine calculations, and borrowing analytics generated via Python Pandas.",
    keyFeatures: [
      "Pandas automated data reporting",
      "Role-based access control (Admin & Student)",
      "Automated borrowing expiration alerts",
    ],
    tech: ["Python", "Flask", "Pandas"],
    link: "#",
    category: "Full Stack",
    status: "private",
    color: "#f59e0b",
  },
  {
    title: "AWS Service Recommender",
    description: "ML-powered AWS service recommendation system built during F13 Technologies internship to optimize cloud costs.",
    longDescription: "Built during AWS Cloud Internship at F13 Technologies. Recommends cost-effective AWS infrastructure configurations based on user resource specifications.",
    keyFeatures: [
      "Machine learning decision matrix for cloud sizing",
      "Cost optimization strategy recommendations",
      "Django dashboard with resource visualization",
    ],
    tech: ["Python", "ML", "Django"],
    link: "https://github.com/AshutoshTripathy21/service_recommender",
    category: "ML / Cloud",
    status: "github",
    color: "#FF9900",
  },
  {
    title: "Sundown Studio",
    description: "Immersive animated website focused on high-end scroll-based animations and fluid visual storytelling.",
    longDescription: "A modern visual design portfolio replicating Sundown Studio's signature fluid transitions, dynamic video modal triggers, and scroll velocity effects.",
    keyFeatures: [
      "Custom cursor dynamic physics",
      "Seamless page section transitions",
      "Fluid video mask animations",
    ],
    tech: ["HTML", "CSS", "GSAP", "Locomotive JS"],
    link: "https://ashutoshtripathy21.github.io/Sundown/",
    category: "Frontend",
    status: "live",
    color: "#f87171",
  },
  {
    title: "Duo Studio",
    description: "Modern animated frontend showcasing advanced scroll-triggered animations and interactive cursor design.",
    longDescription: "High-impact interactive site featuring 3D tilt effects, custom hover states, and smooth color-shifting themes triggered on scroll.",
    keyFeatures: [
      "Scroll-triggered color-shifting themes",
      "Custom cursor text follow effect",
      "Optimized 60fps canvas animations",
    ],
    tech: ["HTML", "CSS", "GSAP", "Locomotive JS"],
    link: "https://duo-studio-tau.vercel.app/",
    category: "Frontend",
    status: "live",
    color: "#60a5fa",
  },
  {
    title: "HR Management System",
    description: "Employee management platform developed at F13 Technologies to streamline HR operations on AWS infrastructure.",
    longDescription: "Cloud-native enterprise HR platform built to manage employee lifecycle, payroll records, and attendance tracking on AWS EC2 & RDS.",
    keyFeatures: [
      "AWS EC2 & RDS cloud deployment",
      "Automated PDF report generation",
      "Employee attendance & payroll workflows",
    ],
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
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filtered = projects.filter(p => {
    const matchesCategory = filter === "All" || p.category === filter
    const query = searchQuery.toLowerCase()
    const matchesSearch =
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.tech.some(t => t.toLowerCase().includes(query))
    return matchesCategory && matchesSearch
  })

  return (
    <section id="projects" className="py-24 md:py-32 relative z-10">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 100%, var(--color-border-subtle) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
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
            Projects & Work
          </h2>
        </motion.div>

        {/* Filter and Search Bar Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-10"
        >
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                suppressHydrationWarning
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-sm transition-all duration-300 font-sans ${
                  filter === cat
                    ? "bg-gradient-to-br from-accent-primary to-accent-cyan text-bg-void font-semibold border-transparent shadow-[0_4px_16px_rgba(56,139,253,0.3)]"
                    : "bg-bg-glass text-text-secondary border border-border-subtle hover:border-accent-primary/30 hover:text-text-primary font-normal"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted text-xs" />
            <input
              type="text"
              placeholder="Search by tech or title..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 rounded-xl bg-bg-glass border border-border-subtle text-xs text-text-primary placeholder:text-text-muted outline-none focus:border-accent-cyan/40 transition-colors font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary"
              >
                <FaTimes size={12} />
              </button>
            )}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => {
              const status = statusConfig[project.status]
              return (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  onClick={() => setSelectedProject(project)}
                  className="group block rounded-2xl p-6 relative overflow-hidden bg-bg-glass border border-border-subtle backdrop-blur-md cursor-pointer"
                  style={{ '--project-color': project.color } as React.CSSProperties}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(to right, transparent, var(--project-color), transparent)` }}
                  />

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
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: status.color }} />
                      <span className="text-[0.7rem] font-mono" style={{ color: status.color }}>
                        {status.label}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 relative z-10 font-display text-text-primary group-hover:text-white tracking-tight transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm mb-6 relative z-10 text-text-secondary leading-relaxed font-sans line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 relative z-10 mb-4">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md text-[0.7rem] font-mono bg-accent-primary/5 border border-accent-primary/10 text-text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-accent-cyan pt-2 border-t border-border-subtle/50">
                    <span>Inspect details →</span>
                    <FaExternalLinkAlt size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-text-muted font-mono text-sm">
            No projects found matching "{searchQuery}" in {filter}.
          </div>
        )}
      </div>

      {/* Interactive Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-bg-void/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl rounded-3xl p-6 md:p-8 bg-bg-deep border border-border-glow shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full flex items-center justify-center bg-bg-glass border border-border-subtle text-text-muted hover:text-text-primary transition-colors"
              >
                <FaTimes />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span
                  className="px-3 py-1 rounded-xl text-xs font-mono font-semibold"
                  style={{
                    background: `color-mix(in srgb, ${selectedProject.color} 15%, transparent)`,
                    color: selectedProject.color,
                    border: `1px solid ${selectedProject.color}40`,
                  }}
                >
                  {selectedProject.category}
                </span>
                <span className="text-xs font-mono text-text-muted uppercase">
                  Status: {selectedProject.status}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold font-display text-text-primary mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-sm md:text-base text-text-secondary leading-relaxed font-sans mb-6">
                {selectedProject.longDescription || selectedProject.description}
              </p>

              {selectedProject.keyFeatures && (
                <div className="mb-6">
                  <h4 className="text-xs font-mono text-accent-cyan uppercase mb-3 tracking-wider">
                    Key Architectural Highlights
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.keyFeatures.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-text-primary">
                        <FaCheckCircle className="mt-0.5 text-accent-emerald flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h4 className="text-xs font-mono text-text-muted uppercase mb-3 tracking-wider">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-accent-primary/10 border border-accent-primary/20 text-accent-cyan"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-border-subtle">
                {selectedProject.status !== "private" && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-6 rounded-xl font-semibold text-xs text-center flex items-center justify-center gap-2 bg-gradient-to-br from-accent-primary to-accent-cyan text-bg-void hover:scale-105 transition-transform font-sans"
                  >
                    {selectedProject.status === "github" ? "View on GitHub" : "Open Live Project"}
                    <FaExternalLinkAlt size={12} />
                  </a>
                )}

                {selectedProject.status === "github" && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-6 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 bg-bg-glass border border-border-subtle text-text-primary hover:border-accent-cyan/40 transition-colors font-sans"
                  >
                    <FaGithub size={14} />
                    GitHub Repository
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
