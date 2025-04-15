'use client'

import { motion } from 'framer-motion'

import projects from '@/data/projects.json'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.data.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow"
            >
              <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                {project.title}
              </h3>
              <p className="mb-3 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs rounded bg-blue-200 dark:bg-blue-700 text-blue-800 dark:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="text-blue-500 hover:underline text-sm"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  className="text-blue-500 hover:underline text-sm"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
