import { Metadata } from 'next'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'

interface NavbarProps {
  darkMode: boolean
  setDarkMode: (val: boolean) => void
}

export const metadata: Metadata = {
  title: 'Sonam Gupta - Portfolio',
  description: 'Frontend Developer | React, Next.js, TypeScript',
}

export const Navbar = ({ darkMode, setDarkMode }: NavbarProps) => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
          Sonam Gupta
        </div>

        {/* Toggle for mobile menu */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-700 dark:text-gray-300"
          >
            {isMenuOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`text-sm md:text-base hover:text-blue-500 dark:hover:text-blue-400 transition-colors ${
                pathname === item.path
                  ? 'text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              {item.name}
            </Link>
          ))}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {darkMode ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4 absolute top-0 left-0 right-0 mt-14">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`block text-sm py-2 ${
                pathname === item.path
                  ? 'text-blue-400 font-semibold'
                  : 'text-gray-300'
              } hover:text-blue-400`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-4 p-2 w-full text-center rounded-full bg-gray-700 dark:bg-gray-600 hover:bg-gray-600"
          >
            {darkMode ? (
              <FaSun className="text-yellow-400 mx-auto" />
            ) : (
              <FaMoon className="text-gray-700 mx-auto" />
            )}
          </button>
        </div>
      )}
    </nav>
  )
}
