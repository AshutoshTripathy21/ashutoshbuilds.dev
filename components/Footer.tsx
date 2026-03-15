"use client"

import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaFacebook,
  FaMedium
} from "react-icons/fa6"

import { SiLeetcode, SiUpwork, SiStackoverflow, SiDevdotto, SiHashnode } from "react-icons/si"

export default function Footer() {

  return (

    <footer className="mt-32 border-t border-blue-500/20 py-12">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h3 className="text-lg text-gray-300 mb-8">
          Connect With Me on
        </h3>

        <div className="flex flex-wrap justify-center gap-8 text-2xl">

          {/* GitHub */}
          <a
            href="https://github.com/AshutoshTripathy21"
            target="_blank"
            className="text-gray-400 hover:text-white transition hover:scale-110"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ashutosh-tripathy9/"
            target="_blank"
            className="text-gray-400 hover:text-blue-400 transition hover:scale-110"
          >
            <FaLinkedin />
          </a>

          {/* X / Twitter */}
          <a
            href="https://x.com/AshutoshT07?t=ZMVtAOELiL0qbLPxo33rAw&s=09"
            target="_blank"
            className="text-gray-400 hover:text-white transition hover:scale-110"
          >
            <FaXTwitter />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/ashutosh_a99/profilecard/?igsh=eDBlNjUxZnJtYmhk"
            target="_blank"
            className="text-gray-400 hover:text-pink-400 transition hover:scale-110"
          >
            <FaInstagram />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/ashutosh.tripathy.5249?mibextid=ZbWKwL"
            target="_blank"
            className="text-gray-400 hover:text-blue-500 transition hover:scale-110"
          >
            <FaFacebook />
          </a>

          {/* Upwork */}
          <a
            href="https://www.upwork.com/freelancers/~011a43837a5e5ad883?viewMode=1"
            target="_blank"
            className="text-gray-400 hover:text-green-400 transition hover:scale-110"
          >
            <SiUpwork />
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/Ashutoshtripathy22/"
            target="_blank"
            className="text-gray-400 hover:text-yellow-400 transition hover:scale-110"
          >
            <SiLeetcode />
          </a>

          {/* StackOverflow */}
          <a
            href="https://stackoverflow.com/users/32499037/ashutosh-tripathy"
            target="_blank"
            className="text-gray-400 hover:text-orange-400 transition hover:scale-110"
          >
            <SiStackoverflow />
          </a>

          {/* Dev.to */}
          <a
            href="https://dev.to/ashutoshtripathy21"
            target="_blank"
            className="text-gray-400 hover:text-white transition hover:scale-110"
          >
            <SiDevdotto />
          </a>

          {/* Hashnode */}
          <a
            href="https://hashnode.com/@ashutosh-99"
            target="_blank"
            className="text-gray-400 hover:text-blue-400 transition hover:scale-110"
          >
            <SiHashnode />
          </a>

          {/* Medium */}
          <a
            href="https://medium.com/@ashutoshtripathy408"
            target="_blank"
            className="text-gray-400 hover:text-white transition hover:scale-110"
          >
            <FaMedium />
          </a>

        </div>

        <p className="text-sm text-gray-500 mt-8">
          © {new Date().getFullYear()} Ashutosh Tripathy. All rights reserved.
        </p>

      </div>

    </footer>

  )

}