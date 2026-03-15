"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import emailjs from "@emailjs/browser"
import { FaCode, FaRobot, FaCloud, FaTools } from "react-icons/fa"
import { SiDocker, SiKubernetes, SiPython } from "react-icons/si"

export default function Contact() {

  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: any) => {
    e.preventDefault()

    emailjs.sendForm(
      "service_jm5k057",
      "template_limxos4",
      form.current!,
      "-MibNqwOpQ7mD98mD"
    )
      .then(() => {
        alert("Message sent successfully 🚀")
        form.current?.reset()
      })
      .catch(() => {
        alert("Failed to send message")
      })
  }

  const services = [
    { name: "Full Stack Web Applications", icon: FaCode },
    { name: "AI / Machine Learning Projects", icon: FaRobot },
    { name: "Python Software Development", icon: SiPython },
    { name: "Business Process Automation", icon: FaTools },
    { name: "Cloud Infrastructure Setup", icon: FaCloud },
    { name: "Docker & Kubernetes Deployment", icon: SiDocker },
    { name: "DevOps CI/CD Pipeline Setup", icon: SiKubernetes },
    { name: "Static Websites & Portfolios", icon: FaCode },
  ]

  return (

    <section id="contact" className="py-40 relative z-10">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-6">
          Contact Me
        </h2>

        <p className="text-gray-400 text-center mb-16">
          Interested in working together or have a project idea?
          Feel free to reach out.
        </p>

        {/* Responsive Layout */}

        <div className="flex flex-col md:grid md:grid-cols-2 gap-10">

          {/* CONTACT FORM FIRST (MOBILE) */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="
  order-1 md:order-2
  bg-[#020617]/80
  backdrop-blur-xl
  border border-blue-400/30
  rounded-xl
  p-10
  space-y-6
  shadow-xl shadow-blue-500/10
  "
          >

            <h3 className="text-2xl font-semibold text-blue-300 mb-4">
              Send a Message
            </h3>

            {/* Name */}

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="
    w-full p-3 rounded-lg
    bg-[#020617]/60
    border border-blue-500/20
    text-gray-200
    placeholder-gray-500
    transition-all duration-300
    focus:outline-none
    focus:border-cyan-400
    focus:ring-1 focus:ring-cyan-400/40
    "
            />

            {/* Email */}

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="
    w-full p-3 rounded-lg
    bg-[#020617]/60
    border border-blue-500/20
    text-gray-200
    placeholder-gray-500
    transition-all duration-300
    focus:outline-none
    focus:border-cyan-400
    focus:ring-1 focus:ring-cyan-400/40
    "
            />

            {/* Message */}

            <textarea
              name="message"
              placeholder="Mention your query..."
              rows={4}
              required
              className="
    w-full p-3 rounded-lg
    bg-[#020617]/60
    border border-blue-500/20
    text-gray-200
    placeholder-gray-500
    transition-all duration-300
    focus:outline-none
    focus:border-cyan-400
    focus:ring-1 focus:ring-cyan-400/40
    "
            />

            {/* Send Button */}

            <button
              type="submit"
              className="
    w-full
    py-3
    rounded-lg
    font-medium
    bg-gradient-to-r from-blue-930 to-cyan-600
    text-bold-black
    shadow-lg shadow-blue-500/20
    transition-all duration-300
    hover:scale-[1.03]
    hover:shadow-cyan-400/40
    hover:shadow-xl
    "
            >
              Send Message
            </button>

          </motion.form>

          {/* SERVICES */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="
  order-2 md:order-1
  bg-[#020617]/80
  backdrop-blur-xl
  border border-blue-400/30
  rounded-xl
  p-8
  shadow-xl shadow-blue-500/10
  "
          >

            <h3 className="text-2xl font-semibold mb-8 text-blue-300">
              Services I Provide
            </h3>

            <ul className="space-y-4">

              {services.map((service, index) => {

                const Icon = service.icon

                return (

                  <li
                    key={index}
                    className="
          group
          flex items-center gap-4
          p-4 rounded-lg
          border border-blue-500/20
          bg-[#020617]/60
          transition-all duration-300
          hover:border-cyan-400/60
          hover:shadow-lg
          hover:shadow-cyan-400/10
          hover:-translate-y-1
          "
                  >

                    {/* Icon */}

                    <Icon
                      className="
            text-cyan-400
            text-xl
            transition
            group-hover:scale-110
            group-hover:text-cyan-300
            "
                    />

                    {/* Text */}

                    <span className="text-gray-300 group-hover:text-white transition">
                      {service.name}
                    </span>

                    {/* Hover line */}

                    <span className="
          ml-auto
          w-0 h-[2px]
          bg-gradient-to-r from-cyan-400 to-blue-400
          transition-all duration-300
          group-hover:w-8
          "></span>

                  </li>

                )

              })}

            </ul>

          </motion.div>

        </div>

      </div>

    </section>

  )

}