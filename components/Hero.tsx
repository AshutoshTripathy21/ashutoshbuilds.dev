"use client"

import { motion } from "framer-motion"

export default function Hero() {

  const whatsappNumber = "919078998913"

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank")
  }

  return (

    <section className="min-h-screen flex items-center justify-center text-center px-6 relative z-10">

      <div className="max-w-4xl">

        {/* Name */}

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
          text-5xl md:text-7xl font-extrabold tracking-tight
          bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500
          bg-clip-text text-transparent
          "
        >
          Ashutosh Tripathy
        </motion.h1>


        {/* Role */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-xl md:text-2xl text-gray-300 font-medium"
        >
          Backend Engineer • Cloud & DevOps • Automation Specialist
        </motion.p>


        {/* About */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 max-w-2xl mx-auto text-gray-400 leading-relaxed"
        >
          I build scalable backend systems, design cloud infrastructure, and
          automate enterprise workflows using modern DevOps practices. Passionate
          about building efficient systems that reduce manual work and improve
          engineering productivity.
        </motion.p>


        {/* Extra Highlight */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-4 text-gray-500 text-sm"
        >
          Experienced with AWS, Docker, Kubernetes, CI/CD pipelines,
          automation tools, and backend frameworks.
        </motion.p>


        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center gap-6 mt-12 flex-wrap"
        >

          {/* Contact Button */}

          <button
            className="
            px-8 py-3 rounded-lg font-medium
            bg-gradient-to-r from-blue-500 to-cyan-400
            text-white
            shadow-lg shadow-blue-500/20
            transition-all duration-300
            hover:scale-105
            hover:shadow-blue-400/40
            hover:shadow-xl
            "
          >
            Contact Me
          </button>


          {/* Resume Download */}

          <a
            href="/ashutosh_tripathy.pdf"
            download
            className="
            px-8 py-3 rounded-lg font-medium
            border border-blue-400/40
            text-blue-300
            backdrop-blur
            transition-all duration-300
            hover:bg-blue-500/10
            hover:border-blue-300
            hover:shadow-lg
            hover:shadow-blue-500/20
            hover:scale-105
            "
          >
            Download Resume
          </a>

        </motion.div>

      </div>

    </section>

  )

}