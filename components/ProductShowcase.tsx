"use client"

import { motion } from "framer-motion"
import { FaExternalLinkAlt } from "react-icons/fa"
import {
  FaClipboardList,
  FaChartBar,
  FaSliders,
  FaHeadset,
  FaShieldHalved,
  FaFileInvoiceDollar,
} from "react-icons/fa6"

const capabilities = [
  {
    icon: FaClipboardList,
    title: "Order & Table Operations",
    desc: "Streamline the complete order lifecycle — from real-time table allocation and kitchen dispatch to fulfillment tracking.",
  },
  {
    icon: FaChartBar,
    title: "Business Intelligence",
    desc: "Actionable dashboards with revenue trends, peak-hour heatmaps, and inventory forecasting to drive data-backed decisions.",
  },
  {
    icon: FaSliders,
    title: "Dynamic Menu Control",
    desc: "Centralized menu management with instant availability updates, pricing tiers, and multi-outlet synchronization.",
  },
  {
    icon: FaHeadset,
    title: "Guest Experience",
    desc: "Loyalty programs, feedback workflows, and personalized service to turn first-time diners into regulars.",
  },
  {
    icon: FaShieldHalved,
    title: "Enterprise-Grade Security",
    desc: "Cloud-hosted infrastructure with end-to-end encryption, role-based access, and 99.9% uptime SLA.",
  },
  {
    icon: FaFileInvoiceDollar,
    title: "Billing & Compliance",
    desc: "Automated invoicing with GST compliance, split-bill support, and multi-payment gateway integration.",
  },
]

export default function ProductShowcase() {
  return (
    <section id="product" className="py-28 md:py-36 relative z-10 overflow-hidden">
      {/* Ambient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 0%, rgba(99, 197, 255, 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* ── Product Hero Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-[2rem] relative overflow-hidden"
          style={{
            background: "linear-gradient(160deg, rgba(12, 18, 30, 0.97), rgba(8, 12, 22, 0.98))",
            border: "1px solid rgba(99, 197, 255, 0.14)",
            boxShadow: "0 24px 80px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.03)",
          }}
        >
          {/* Top accent bar */}
          <div
            className="h-[2px] w-full"
            style={{
              background: "linear-gradient(90deg, transparent 5%, #388bfd 30%, #63c5ff 50%, #388bfd 70%, transparent 95%)",
            }}
          />

          <div className="px-8 md:px-12 pt-10 pb-12">

            {/* Identity row */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10">
              <div className="max-w-xl">
                {/* Logo + Name */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-extrabold font-display tracking-wider select-none"
                    style={{
                      background: "linear-gradient(135deg, #388bfd, #63c5ff)",
                      color: "#050b14",
                      boxShadow: "0 8px 28px rgba(56, 139, 253, 0.35)",
                    }}
                  >
                    DE
                  </div>
                  <div>
                    <h3
                      className="text-3xl md:text-4xl font-extrabold tracking-tight leading-none"
                      style={{ fontFamily: "var(--font-display)", color: "#f1f5f9" }}
                    >
                      Dine<span style={{ color: "#63c5ff" }}>Ease</span>
                    </h3>
                    <p
                      className="text-[0.65rem] tracking-[0.25em] uppercase mt-1.5"
                      style={{ fontFamily: "var(--font-mono)", color: "rgba(99, 197, 255, 0.8)" }}
                    >
                      Restaurant Operations Platform
                    </p>
                  </div>
                </div>

                {/* Professional description */}
                <p
                  className="text-[0.925rem] leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "rgba(203, 213, 225, 0.85)" }}
                >
                  <strong style={{ color: "#f1f5f9" }}>DineEase</strong> is a cloud-based restaurant operations platform designed to digitize SOPs, streamline table & order workflows, and optimize kitchen efficiency for modern food businesses.
                </p>
              </div>

              {/* CTA block */}
              <div className="flex flex-col items-center md:items-end gap-2.5 flex-shrink-0 md:pt-2">
                <a
                  href="https://dineease.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-3.5 rounded-xl text-sm font-bold tracking-wide flex items-center gap-2.5 transition-all duration-300 hover:scale-105"
                  style={{
                    fontFamily: "var(--font-body)",
                    background: "linear-gradient(135deg, #388bfd, #63c5ff)",
                    color: "#050b14",
                    boxShadow: "0 8px 28px rgba(56, 139, 253, 0.35)",
                  }}
                >
                  Visit DineEase
                  <FaExternalLinkAlt size={11} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <span
                  className="text-[0.7rem] tracking-wide"
                  style={{ fontFamily: "var(--font-mono)", color: "rgba(148, 163, 184, 0.5)" }}
                >
                  dineease.co.in
                </span>
              </div>
            </div>

            {/* Divider */}
            <div
              className="h-px w-full mb-8"
              style={{ background: "linear-gradient(90deg, transparent, rgba(99, 197, 255, 0.15), transparent)" }}
            />

            {/* Section label */}
            <div className="mb-6">
              <span
                className="text-[0.65rem] tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-mono)", color: "rgba(99, 197, 255, 0.7)" }}
              >
                Core Capabilities
              </span>
            </div>

            {/* Capabilities grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {capabilities.map((cap, idx) => {
                const Icon = cap.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: idx * 0.06 }}
                    viewport={{ once: true }}
                    className="group p-5 rounded-xl transition-all duration-300"
                    style={{
                      background: "rgba(15, 23, 42, 0.5)",
                      border: "1px solid rgba(99, 197, 255, 0.08)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(99, 197, 255, 0.25)"
                      e.currentTarget.style.background = "rgba(99, 197, 255, 0.03)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(99, 197, 255, 0.08)"
                      e.currentTarget.style.background = "rgba(15, 23, 42, 0.5)"
                    }}
                  >
                    <div className="flex items-start gap-3.5">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110"
                        style={{
                          background: "rgba(99, 197, 255, 0.08)",
                          border: "1px solid rgba(99, 197, 255, 0.18)",
                          color: "#63c5ff",
                        }}
                      >
                        <Icon size={15} />
                      </div>
                      <div>
                        <h4
                          className="text-[0.85rem] font-semibold mb-1.5 tracking-tight"
                          style={{ fontFamily: "var(--font-body)", color: "#e2e8f0" }}
                        >
                          {cap.title}
                        </h4>
                        <p
                          className="text-xs leading-relaxed"
                          style={{ fontFamily: "var(--font-body)", color: "rgba(148, 163, 184, 0.75)" }}
                        >
                          {cap.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
