"use client"

import { motion } from "framer-motion"

const projects = [
  {
    title: "Sync-Smith",
    description: "AI-powered file synchronization platform with secure distributed storage.",
    tech: ["Rust", "Distributed Systems", "AI"],
    github: "#"
  },
  {
    title: "CommandPro AI",
    description: "Command-line AI assistant that executes and automates development workflows.",
    tech: ["Python", "LLM", "Automation"],
    github: "#"
  },
  {
    title: "Realtime Whiteboard",
    description: "Collaborative drawing board supporting multiple users in real time.",
    tech: ["WebSockets", "React", "Node"],
    github: "#"
  },
  {
    title: "Library Management System",
    description: "Full-stack system to manage books, users, and borrowing workflows.",
    tech: ["Python", "Flask", "PostgreSQL"],
    github: "#"
  },
  {
    title: "Product Recommender",
    description: "Machine learning model recommending products based on user behavior.",
    tech: ["Python", "ML", "Pandas"],
    github: "#"
  },
  {
    title: "GitHub Profile Finder",
    description: "Web application that fetches and displays GitHub user data dynamically.",
    tech: ["React", "API", "JavaScript"],
    github: "#"
  }
]

export default function Projects() {

  return (

    <section id="projects" className="py-40 relative z-10">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-20">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#0f172a]/70 border border-blue-500/20 rounded-xl p-6 backdrop-blur hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition"
            >

              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">

                {project.tech.map((tech, i) => (

                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-blue-500/10 border border-blue-400/20 rounded"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              <a
                href={project.github}
                className="text-blue-400 text-sm hover:text-blue-300"
              >
                View Project →
              </a>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )

}