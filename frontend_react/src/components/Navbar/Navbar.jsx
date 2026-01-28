import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX, HiSun, HiMoon } from 'react-icons/hi'
import { useScrollPosition } from '../../hooks'
import { cn, smoothScrollTo } from '../../utils'

const navItems = [
  { id: 'home', label: 'home' },
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'experience' },
  { id: 'clubs', label: 'clubs' },
  { id: 'projects', label: 'exploits' },
  { id: 'skills', label: 'skills' },
  { id: 'testimonials', label: 'logs' },
  { id: 'contact', label: 'contact' }
]

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const scrollY = useScrollPosition()

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      const currentSection = sections.find(section => {
        if (!section) return false
        const rect = section.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = useCallback((sectionId) => {
    smoothScrollTo(sectionId, 80)
    setIsOpen(false)
  }, [])

  const isScrolled = scrollY > 20

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-mono',
          isScrolled
            ? 'bg-primary/95 border-b border-secondary/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5.1px]'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-shrink-0"
            >
              <button
                onClick={() => handleNavClick('home')}
                className="text-lg font-bold text-secondary hover:text-white transition-colors duration-300"
              >
                <span className="text-white">root@me:</span>
                <span className="text-secondary">~$</span>
              </button>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={cn(
                      'px-3 py-2 text-sm font-medium transition-all duration-300 relative group',
                      activeSection === item.id
                        ? 'text-secondary'
                        : 'text-gray/80 hover:text-white'
                    )}
                  >
                    <span className="relative z-10">
                      {activeSection === item.id && <span className="mr-1">&gt;</span>}
                      {item.label}
                    </span>
                    {/* Hover effect background */}
                    <span className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm" />
                  </button>
                ))}
              </div>
            </div>

            {/* Dark Mode Toggle (Disabled for security theme as it's dark only usually, but keeping for compatibility if needed or changing to a "light switch" for fun) */}
            {/* Leaving Toggle for now but it might just switch between Green and Red themes later? For now, stick to original functionality or hide it if dark mode is forced. */}
            <div className="flex items-center space-x-2">
              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 text-secondary hover:text-white transition-colors duration-300"
                aria-label="Open menu"
              >
                {isOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm md:hidden"
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300, duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-64 bg-black border-l border-secondary/30 md:hidden font-mono"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-lightGray">
                  <span className="text-secondary font-bold">./menu</span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    <HiX className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 px-4 py-8">
                  <ul className="space-y-2">
                    {navItems.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => handleNavClick(item.id)}
                          className={cn(
                            'block w-full text-left px-4 py-3 text-base transition-all duration-300',
                            activeSection === item.id
                              ? 'text-black bg-secondary font-bold'
                              : 'text-gray-300 hover:text-secondary hover:bg-white/5'
                          )}
                        >
                          {activeSection === item.id && <span className="mr-2">&gt;</span>}
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Footer */}
                <div className="p-6 border-t border-lightGray">
                  <div className="text-center text-xs text-gray-500">
                    UID: 0 (root)
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar