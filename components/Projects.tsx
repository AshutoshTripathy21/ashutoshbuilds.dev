"use client"

import { motion } from "framer-motion"

const projects = [
  {
    title: "Diamint",
    description: "A diamond trading platform which will change the perspective of investment world",
    tech: ["Django", "REST API", "Neon DB", "Render"],
    github: "https://diamint.onrender.com/"
  },
  {
    title: "Sync-Smith",
    description: "A software which helps developer to store their projects securely and helps them to push into their github repository in just a click.",
    tech: ["Django", "OAuth", "GitHub"],
    github: "https://sync-smith.onrender.com"
  },
  {
    title: "ReJouice",
    description: "A visually rich animated website inspired by Rejouice, featuring smooth scroll interactions and modern UI animations.",
    tech: ["HTML", "CSS", "GSAP", "Locomotive JS"],
    github: "https://github.com/AshutoshTripathy21/Personal-Assistant-AI"
  },
  {
    title: "Realtime Whiteboard",
    description: "A collaborative real-time whiteboard application allowing multiple users to draw and interact simultaneously.",
    tech: ["WebSockets", "Flask", "SQL"],
    github: "http://github.com/AshutoshTripathy21/Collab-Whiteboard"
  },
  {
    title: "Library Management System",
    description: "A full-stack application to manage books, users, and borrowing workflows with data-driven insights.",
    tech: ["Python", "Flask", "Pandas"],
    github: "#"
  },
  {
    title: "AWS Service Recommender",
    description: "An AWS SERVICE recommendation system developed during internship at F13 Technologie to suggest products based on user behavior.",
    tech: ["Python", "Recommendation Algoriithm", "Django"],
    github: "https://github.com/AshutoshTripathy21/service_recommender"
  },
  {
    title: "Sundown Studio",
    description: "An immersive animated website inspired by Sundown Studio, focusing on smooth scrolling and high-end UI interactions.",
    tech: ["HTML", "CSS", "GSAP", "Locomotive JS"],
    github: "https://ashutoshtripathy21.github.io/Sundown/"
  },
  {
    title: "Duo Studio",
    description: "A modern animated frontend inspired by Duo Studio, showcasing advanced scroll-based animations and interactive design.",
    tech: ["HTML", "CSS", "GSAP", "Locomotive JS"],
    github: "https://duo-studio-tau.vercel.app/"
  },
  {
    title: "HR Management System",
    description: "An employee management platform developed during internship at F13 Technologie, designed to streamline HR operations and workforce management.",
    tech: ["Python", "Django", "AWS"],
    github: "https://github.com/AshutoshTripathy21/HR-Management-System"
  }
];

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