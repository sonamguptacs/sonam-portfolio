'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa'

const fullText =
  'Frontend Developer | React, Next.js, TypeScript | Micro Frontends Enthusiast'

const HomePage = () => {
  const [typedText, setTypedText] = useState('')
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    let currentIndex = 0

    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText((prev) => prev + (fullText?.[currentIndex] ?? ''))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 30)

    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex items-center justify-center px-6">
      <div className="text-center max-w-3xl w-full">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
        >
          Hi, I&apos;m Sonam Gupta
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-blue-300 mb-10 h-12"
        >
          {typedText}
          <span className="ml-1">{cursorVisible ? '▌' : ' '}</span>
        </motion.p>

        <div className="flex justify-center gap-6 mb-6 flex-wrap mt-8">
          <a
            href="https://www.linkedin.com/in/sonamguptacs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-2xl sm:text-3xl hover:scale-110 transition-transform"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/sonamguptacs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl sm:text-3xl hover:scale-110 transition-transform"
          >
            <FaGithub />
          </a>
          <a
            href="https://stackoverflow.com/users/16393002/sonam-gupta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 text-2xl sm:text-3xl hover:scale-110 transition-transform"
          >
            <FaStackOverflow />
          </a>
        </div>

        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="mailto:mail.sonamgupta@gmail.com"
            className="bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition"
          >
            Contact Me
          </a>
          <a
            href="https://drive.google.com/file/d/1ao_qsJqgYUpD0IKgPu0TG3LiyVwd9SyT/view?usp=sharing"
            target="_blank"
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full shadow hover:bg-gray-300 transition"
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomePage
