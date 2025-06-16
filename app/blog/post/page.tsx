'use client'

import { motion } from 'framer-motion'

export default function PostBlog() {
  return (
    <div className="min-h-screen px-6 py-12">
      <h2 className="text-4xl font-bold mb-10 text-center">Post Your Blog</h2>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <div className="space-y-8">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow">
            <input
              type="text"
              className="border border-gray-300 dark:border-gray-600 rounded-lg p-2 w-full mb-4"
              placeholder="Enter blog title"
            />
            <input
              type="text"
              className="border border-gray-300 dark:border-gray-600 rounded-lg p-2 w-full mb-4"
              placeholder="Enter author name"
            />
            <input
              type="date"
              className="border border-gray-300 dark:border-gray-600 rounded-lg p-2 w-full mb-4"
            />
            <textarea
              className="border border-gray-300 dark:border-gray-600 rounded-lg p-2 w-full mb-4"
              rows={6}
              placeholder="Write your blog content here..."
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
