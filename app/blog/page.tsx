'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PostBlog() {
  return (
    <>
      <div className="fixed right-60">
        <Link
          href="/blog/post"
          className="button bg-blue-600 text-white px-4 py-2 rounded-lg mb-6 hover:bg-blue-700 transition-colors"
          prefetch={true}
          title="Post a new blog"
        >
          Post a new blog
        </Link>
      </div>
      <div className="min-h-screen px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-10 text-center">My Blogs</h2>
          <div className="space-y-8">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                Blog Post Title
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                Author: Your Name
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-3">
                Date: {new Date().toLocaleDateString()}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Coming soon! This is a placeholder for the blog post content.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}
