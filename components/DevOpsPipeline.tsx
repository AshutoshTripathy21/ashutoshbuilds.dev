"use client"

import { motion } from "framer-motion"

const pipeline = [
  "Code",
  "GitHub",
  "CI/CD",
  "Docker",
  "Kubernetes",
  "Cloud Deploy"
]

export default function DevOpsPipeline() {

  return (

    <section className="py-40 text-center">

      <h2 className="text-4xl font-bold mb-20">
        DevOps Pipeline
      </h2>

      <div className="flex flex-wrap justify-center gap-8">

        {pipeline.map((step, i) => (

          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="px-6 py-4 border border-blue-500/30 rounded-lg bg-[#0f172a]"
          >

            {step}

          </motion.div>

        ))}

      </div>

    </section>

  )

}