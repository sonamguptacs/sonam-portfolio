'use client'

import { motion } from 'framer-motion'
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaStackOverflow,
} from 'react-icons/fa'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
          I&apos;m always open to discussing new opportunities or
          collaborations. Feel free to reach out!
        </p>

        <div className="flex flex-col items-center gap-4 mb-8">
          <a
            href="mailto:mail.sonamgupta@gmail.com"
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
          >
            <FaEnvelope /> mail.sonamgupta@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/sonamguptacs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/sonamguptacs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://stackoverflow.com/users/16393002/sonam-gupta"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
          >
            <FaStackOverflow /> Stack Overflow
          </a>
        </div>

        <a
          href="/Sonam_Gupta_Resume.pdf"
          download
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </motion.div>
    </div>
  )
}
