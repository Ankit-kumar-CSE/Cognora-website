import React from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

/**
 * ThemeToggle — Animated sun/moon icon toggle button
 */
const ThemeToggle = ({ isDark, onToggle, className = '' }) => {
  return (
    <button
      onClick={onToggle}
      className={`relative w-9 h-9 rounded-xl flex items-center justify-center 
        border border-[var(--color-border)] bg-[var(--color-bg-elevated)]
        hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]
        text-[var(--color-text-secondary)] transition-all duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)]
        ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        key={isDark ? 'moon' : 'sun'}
        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
        transition={{ duration: 0.2 }}
      >
        {isDark ? (
          <Sun className="w-4 h-4" aria-hidden="true" />
        ) : (
          <Moon className="w-4 h-4" aria-hidden="true" />
        )}
      </motion.div>
    </button>
  )
}

export default ThemeToggle
