'use client'

import { motion } from 'framer-motion'
import experiences from '@/data/experience.json'

export default function ExperiencePage() {
  return (
    <div className="min-h-screen px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-10 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.data.map((exp, idx) => (
            <div
              key={idx}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow"
            >
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                {exp.role} – {exp.company}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                {exp.location}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-3">
                {exp.duration}
              </p>
              <ul className="list-disc list-inside text-sm space-y-1">
                {exp.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
