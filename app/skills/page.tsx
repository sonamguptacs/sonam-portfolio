'use client'

import { motion } from 'framer-motion'
import { skillsData } from './data'

export default function SkillsPage() {
  return (
    <div className="min-h-screen px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Object.entries(skillsData).map(([category, data]) => (
            <div
              key={category}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400 flex items-center">
                {data.icon}
                {category}
              </h3>
              <ul className="space-y-2 text-sm">
                {data.items.map((skill) => (
                  <li
                    key={skill}
                    className="border-b border-gray-300 dark:border-gray-700 pb-1"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
