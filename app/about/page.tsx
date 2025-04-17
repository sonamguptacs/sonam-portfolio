'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="min-h-screen px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
          I&apos;m a Software Developer with{' '}
          <span className="font-semibold">3+ years of experience</span> in
          frontend development, specializing in
          <span className="text-blue-600 dark:text-blue-400">
            {' '}
            ReactJS, Next.js, JavaScript
          </span>
          , and micro frontends. I enjoy crafting scalable, performant web
          applications and thrive in collaborative environments.
        </p>
        <p className="text-lg mt-4 leading-relaxed">
          My expertise lies in building modular applications using best
          practices in state management, testing, and micro-frontend
          architecture. I&apos;m passionate about clean code, performance
          optimization, and contributing to innovative product development.
        </p>
        <p className="text-lg mt-4 leading-relaxed">
          I’m currently open to exciting opportunities where I can design modern
          UI systems, solve complex problems, and grow with a forward-thinking
          team.
        </p>
      </motion.div>
    </div>
  )
}
