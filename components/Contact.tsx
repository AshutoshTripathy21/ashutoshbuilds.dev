"use client"

import { motion } from "framer-motion"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { FaCode, FaRobot, FaCloud, FaTools } from "react-icons/fa"
import { SiDocker, SiKubernetes, SiPython } from "react-icons/si"

const services = [
  { name: "Full Stack Web Applications", icon: FaCode, color: "#388bfd" },
  { name: "AI / Machine Learning Projects", icon: FaRobot, color: "#a78bfa" },
  { name: "Python Software Development", icon: SiPython, color: "#3776AB" },
  { name: "Business Process Automation", icon: FaTools, color: "#34d399" },
  { name: "Cloud Infrastructure Setup", icon: FaCloud, color: "#63c5ff" },
  { name: "Docker & Kubernetes Deployment", icon: SiDocker, color: "#2496ED" },
  { name: "DevOps CI/CD Pipeline Setup", icon: SiKubernetes, color: "#326CE5" },
  { name: "Static Websites & Portfolios", icon: FaCode, color: "#f59e0b" },
]

type FormState = "idle" | "sending" | "success" | "error"

export default function Contact() {
  const form = useRef<HTMLFormElement>(null)
  const [formState, setFormState] = useState<FormState>("idle")

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("sending")

    try {
      await emailjs.sendForm(
        "service_jm5k057",
        "template_limxos4",
        form.current!,
        "-MibNqwOpQ7mD98mD"
      )
      setFormState("success")
      form.current?.reset()
      setTimeout(() => setFormState("idle"), 4000)
    } catch {
      setFormState("error")
      setTimeout(() => setFormState("idle"), 3000)
    }
  }

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "12px",
    background: "rgba(5, 11, 18, 0.8)",
    border: "1px solid rgba(56, 139, 253, 0.12)",
    color: "var(--text-primary)",
    fontFamily: "var(--font-body)",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
  } as React.CSSProperties

  return (
    <section id="contact" className="py-32 relative z-10">

      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(167, 139, 250, 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div
            className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full text-xs"
            style={{
              background: "rgba(56, 139, 253, 0.06)",
              border: "1px solid rgba(56, 139, 253, 0.15)",
              color: "var(--accent-cyan)",
              fontFamily: "var(--font-mono)",
            }}
          >
            <span style={{ color: "var(--text-muted)" }}>05.</span> get in touch
          </div>
          <h2
            className="text-4xl font-bold mb-4"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
            }}
          >
            Let's Work Together
          </h2>
          <p
            className="max-w-xl mx-auto text-base"
            style={{ color: "var(--text-secondary)" }}
          >
            Have a project in mind? Let's discuss how I can help you build something amazing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Services panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl p-7"
            style={{
              background: "rgba(8, 15, 26, 0.85)",
              border: "1px solid rgba(56, 139, 253, 0.08)",
              backdropFilter: "blur(20px)",
            }}
          >
            <h3
              className="text-lg font-bold mb-6"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text-primary)",
                letterSpacing: "-0.01em",
              }}
            >
              Services I Offer
            </h3>

            <div className="space-y-3">
              {services.map((service, i) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    viewport={{ once: true }}
                    className="group flex items-center gap-3 p-3.5 rounded-xl transition-all duration-300 cursor-default"
                    style={{
                      border: "1px solid rgba(56, 139, 253, 0.06)",
                      background: "rgba(5, 11, 18, 0.5)",
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget
                      el.style.borderColor = `${service.color}30`
                      el.style.background = `${service.color}08`
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget
                      el.style.borderColor = "rgba(56, 139, 253, 0.06)"
                      el.style.background = "rgba(5, 11, 18, 0.5)"
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${service.color}15`,
                        border: `1px solid ${service.color}25`,
                      }}
                    >
                      <Icon size={15} style={{ color: service.color }} />
                    </div>
                    <span
                      className="text-sm"
                      style={{
                        color: "var(--text-secondary)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {service.name}
                    </span>
                    <div
                      className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: service.color }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl p-7 flex flex-col gap-5"
            style={{
              background: "rgba(8, 15, 26, 0.85)",
              border: "1px solid rgba(56, 139, 253, 0.08)",
              backdropFilter: "blur(20px)",
            }}
          >
            <h3
              className="text-lg font-bold"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text-primary)",
                letterSpacing: "-0.01em",
              }}
            >
              Send a Message
            </h3>

            <div className="flex flex-col gap-1.5">
              <label
                className="text-xs"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
              >
                name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                required
                style={inputStyle}
                onFocus={e => {
                  e.target.style.borderColor = "rgba(56, 139, 253, 0.35)"
                  e.target.style.boxShadow = "0 0 0 3px rgba(56, 139, 253, 0.05)"
                }}
                onBlur={e => {
                  e.target.style.borderColor = "rgba(56, 139, 253, 0.12)"
                  e.target.style.boxShadow = "none"
                }}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                className="text-xs"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
              >
                email
              </label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                style={inputStyle}
                onFocus={e => {
                  e.target.style.borderColor = "rgba(56, 139, 253, 0.35)"
                  e.target.style.boxShadow = "0 0 0 3px rgba(56, 139, 253, 0.05)"
                }}
                onBlur={e => {
                  e.target.style.borderColor = "rgba(56, 139, 253, 0.12)"
                  e.target.style.boxShadow = "none"
                }}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                className="text-xs"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
              >
                message
              </label>
              <textarea
                name="message"
                placeholder="Describe your project or idea..."
                rows={5}
                required
                style={{ ...inputStyle, resize: "none" }}
                onFocus={e => {
                  e.target.style.borderColor = "rgba(56, 139, 253, 0.35)"
                  e.target.style.boxShadow = "0 0 0 3px rgba(56, 139, 253, 0.05)"
                }}
                onBlur={e => {
                  e.target.style.borderColor = "rgba(56, 139, 253, 0.12)"
                  e.target.style.boxShadow = "none"
                }}
              />
            </div>

            <button
              type="submit"
              disabled={formState === "sending"}
              className="w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
              style={{
                background: formState === "success"
                  ? "linear-gradient(135deg, #34d399, #10b981)"
                  : formState === "error"
                  ? "linear-gradient(135deg, #f87171, #ef4444)"
                  : "linear-gradient(135deg, #388bfd, #63c5ff)",
                color: "#020408",
                fontFamily: "var(--font-body)",
                boxShadow: "0 8px 32px rgba(56, 139, 253, 0.25)",
                letterSpacing: "0.02em",
              }}
            >
              {formState === "sending" && "Sending..."}
              {formState === "success" && "✓ Message sent!"}
              {formState === "error" && "✗ Failed — try again"}
              {formState === "idle" && "Send Message →"}
            </button>

            <p
              className="text-center text-xs"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
            >
              Usually responds within 24 hours
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
