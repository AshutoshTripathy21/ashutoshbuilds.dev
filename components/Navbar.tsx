"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map(l => l.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveSection(e.target.id)
        })
      },
      { threshold: 0.3 }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg-void/90 backdrop-blur-xl border-b border-border-subtle"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-300 group-hover:scale-110 bg-gradient-to-br from-accent-primary to-accent-cyan text-bg-void font-mono">
            AT
          </div>
          <span className="text-sm font-semibold tracking-wide transition-colors duration-300 font-display text-text-primary">
            Ashutosh<span className="text-accent-cyan">.dev</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => {
            const id = href.slice(1)
            const isActive = activeSection === id
            return (
              <Link
                key={href}
                href={href}
                className={`relative px-4 py-2 text-sm rounded-lg transition-all duration-300 font-sans tracking-wide ${
                  isActive
                    ? "text-accent-cyan bg-accent-primary/10 border border-accent-primary/20"
                    : "text-text-secondary border border-transparent hover:text-text-primary hover:bg-bg-card"
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-cyan" />
                )}
              </Link>
            )
          })}

          <a
            href="/Ashutosh_Tripathy_Resume.pdf"
            download
            className="ml-4 px-4 py-2 text-sm rounded-lg font-medium transition-all duration-300 hover:scale-105 bg-gradient-to-br from-accent-primary to-accent-cyan text-bg-void font-sans tracking-wide"
          >
            Resume ↗
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg transition-all border border-border-subtle hover:bg-bg-card"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-0.5 bg-text-secondary transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[8px]" : ""
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-text-secondary transition-all duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-text-secondary transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[8px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-2 bg-bg-void/95 border-b border-border-subtle backdrop-blur-xl">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 text-sm rounded-lg transition-all text-text-secondary border border-border-subtle font-sans hover:bg-bg-card hover:text-text-primary"
            >
              {label}
            </Link>
          ))}
          <a
            href="/Ashutosh_Tripathy_Resume.pdf"
            download
            className="px-4 py-3 text-sm rounded-lg font-medium text-center bg-gradient-to-br from-accent-primary to-accent-cyan text-bg-void"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  )
}
