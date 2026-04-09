"use client"

import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo / Home Redirect */}

        <Link
          href="/"
          className="text-xl font-bold text-white hover:text-cyan-400 transition"
        >
          Ashutosh.dev
        </Link>

        {/* Navigation Links */}

        <div className="flex gap-8 text-sm text-gray-300">
          <Link href="#experience" className="hover:text-white transition">Experience</Link>
          <Link href="#skills" className="hover:text-white transition">Skills</Link>
          <Link href="#projects" className="hover:text-white transition">Projects</Link>
          <Link href="#blog" className="hover:text-white transition">Blog</Link>
          <Link href="#contact" className="hover:text-white transition">Contact</Link>
        </div>

      </div>
    </nav>
  )
}