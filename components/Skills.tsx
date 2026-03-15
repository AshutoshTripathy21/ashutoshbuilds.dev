"use client"

import {
  FaAws, FaDocker, FaPython, FaJava
} from "react-icons/fa"

import { FaDatabase } from "react-icons/fa"

import { FaMicrosoft } from "react-icons/fa"
import { MdPrecisionManufacturing } from "react-icons/md"


import { SiRust, SiC } from "react-icons/si"

import {
  SiKubernetes,
  SiJenkins,
  SiAnsible,
  SiFlask,
  SiDjango,
  SiPostgresql,
  SiMongodb,
  SiUipath,
  SiGooglecloud
} from "react-icons/si"

import { TbBrandGoogle } from "react-icons/tb"

const skillDomains = [
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: FaAws },
      { name: "GCP", icon: SiGooglecloud },
      { name: "Docker", icon: FaDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Jenkins", icon: SiJenkins },
      { name: "Ansible", icon: SiAnsible }
    ]
  },

  {
    title: "Backend Development",
    skills: [
      { name: "Flask", icon: SiFlask },
      { name: "Django", icon: SiDjango },
      { name: "VBScript", icon: FaMicrosoft }
    ]
  },

  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Oracle", icon: FaDatabase }
    ]
  },

  {
    title: "Automation & RPA",
    skills: [
      { name: "UiPath", icon: SiUipath },
      { name: "Power Automate", icon: FaMicrosoft },
      { name: "RPA", icon: MdPrecisionManufacturing }
    ]
  },

  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: FaPython },
      { name: "Java", icon: FaJava },
      { name: "Rust", icon: SiRust },
      { name: "C", icon: SiC }
    ]
  }
]

export default function Skills() {

  return (

    <section id="skills" className="py-32">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="
        text-4xl font-bold text-center mb-20
        bg-gradient-to-r from-blue-400 to-cyan-300
        bg-clip-text text-transparent
        ">
          Skills & Technologies
        </h2>

        <div className="space-y-16">

          {skillDomains.map((domain, i) => {

            return (

              <div key={i}>

                <h3 className="
                text-xl font-semibold
                text-blue-300 mb-8
                ">
                  {domain.title}
                </h3>

                <div className="
                grid
                grid-cols-2
                sm:grid-cols-3
                md:grid-cols-4
                lg:grid-cols-6
                gap-6
                ">

                  {domain.skills.map((skill, j) => {

                    const Icon = skill.icon

                    return (

                      <div
                        key={j}
                        className="
                        group
                        bg-[#020617]
                        border border-blue-500/20
                        rounded-xl
                        p-6
                        flex flex-col items-center justify-center
                        gap-3
                        transition-all duration-300
                        hover:-translate-y-2
                        hover:border-blue-400
                        hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]
                        "
                      >

                        <Icon
                          size={34}
                          className="
                          text-blue-400
                          group-hover:text-cyan-300
                          transition
                          "
                        />

                        <span className="text-sm text-gray-300">
                          {skill.name}
                        </span>

                      </div>

                    )

                  })}

                </div>

              </div>

            )

          })}

        </div>

      </div>

    </section>

  )

}