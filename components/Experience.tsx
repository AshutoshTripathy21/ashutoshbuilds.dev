"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    company: "Cognizant",
    role: "Junior RPA Developer",
    period: "Nov 2024 – Present",
    points: [
      "Developing automation workflows using Microsoft Power Automate Desktop",
      "Automating enterprise SAP processes",
      "Writing automation scripts using C# and VB",
      "Improving operational efficiency through RPA"
    ]
  },
  {
    company: "F13 Technologies",
    role: "AWS Cloud Intern",
    period: "May 2024 – Aug 2024",
    points: [
      "Researched enterprise cloud migration strategies",
      "Built an AWS service recommendation system",
      "Developed HR management platform",
      "Explored AWS infrastructure architecture"
    ]
  }
]

export default function Experience() {

  return (

    <section id="experience" className="py-40 relative z-10">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-20">
          Experience
        </h2>

        <div className="relative border-l border-blue-500/40">

          {experiences.map((exp, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-16 ml-10"
            >

              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5 mt-2" />

              <h3 className="text-xl font-semibold">
                {exp.role}
              </h3>

              <p className="text-blue-400 mt-1">
                {exp.company}
              </p>

              <p className="text-gray-400 text-sm mb-4">
                {exp.period}
              </p>

              <ul className="space-y-2 text-gray-300">

                {exp.points.map((p, i) => (
                  <li key={i}>
                    • {p}
                  </li>
                ))}

              </ul>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )
}