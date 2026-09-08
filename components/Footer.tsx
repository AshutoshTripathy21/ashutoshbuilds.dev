"use client"

import {
  FaGithub, FaLinkedin, FaXTwitter, FaInstagram,
  FaFacebook, FaMedium
} from "react-icons/fa6"
import { SiLeetcode, SiUpwork, SiStackoverflow, SiDevdotto, SiHashnode } from "react-icons/si"

const socials = [
  { icon: FaGithub, href: "https://github.com/AshutoshTripathy21", label: "GitHub", color: "#e8edf5" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/ashutosh-tripathy9/", label: "LinkedIn", color: "#0A66C2" },
  { icon: FaXTwitter, href: "https://x.com/AshutoshT07", label: "Twitter", color: "#e8edf5" },
  { icon: SiUpwork, href: "https://www.upwork.com/freelancers/~011a43837a5e5ad883", label: "Upwork", color: "#14A800" },
  { icon: SiLeetcode, href: "https://leetcode.com/u/Ashutoshtripathy22/", label: "LeetCode", color: "#FFA116" },
  { icon: SiStackoverflow, href: "https://stackoverflow.com/users/32499037/ashutosh-tripathy", label: "Stack Overflow", color: "#F58025" },
  { icon: FaInstagram, href: "https://www.instagram.com/ashutosh_a99/", label: "Instagram", color: "#E1306C" },
  { icon: SiDevdotto, href: "https://dev.to/ashutoshtripathy21", label: "Dev.to", color: "#e8edf5" },
  { icon: SiHashnode, href: "https://hashnode.com/@ashutosh-99", label: "Hashnode", color: "#2962FF" },
  { icon: FaMedium, href: "https://medium.com/@ashutoshtripathy408", label: "Medium", color: "#e8edf5" },
  { icon: FaFacebook, href: "https://www.facebook.com/ashutosh.tripathy.5249", label: "Facebook", color: "#1877F2" },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative pt-16 pb-10"
      style={{ borderTop: "1px solid rgba(56, 139, 253, 0.08)" }}
    >
      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent, rgba(56, 139, 253, 0.3), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">

        {/* Brand */}
        <div className="text-center mb-10">
          <h3
            className="text-2xl font-bold mb-2"
            style={{
              fontFamily: "var(--font-display)",
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
            }}
          >
            AshutoshBuilds<span style={{ color: "var(--accent-cyan)" }}>.dev</span>
          </h3>
          <p
            className="text-sm"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
          >
            Building systems that scale. Automating what shouldn't be manual.
          </p>
        </div>

        {/* Social icons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {socials.map(({ icon: Icon, href, label, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              style={{
                background: "rgba(8, 15, 26, 0.8)",
                border: "1px solid rgba(56, 139, 253, 0.08)",
                color: "var(--text-muted)",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.color = color
                el.style.borderColor = `${color}40`
                el.style.boxShadow = `0 4px 20px ${color}20`
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.color = "var(--text-muted)"
                el.style.borderColor = "rgba(56, 139, 253, 0.08)"
                el.style.boxShadow = "none"
              }}
            >
              <Icon size={17} />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-8"
          style={{ background: "rgba(56, 139, 253, 0.06)" }}
        />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-xs"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
          >
            © {year} Ashutosh Tripathy. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: "var(--accent-emerald)",
                boxShadow: "0 0 6px rgba(52, 211, 153, 0.8)",
                animation: "pulse-glow 2s ease infinite",
              }}
            />
            <span
              className="text-xs"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
            >
              Open to opportunities
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
