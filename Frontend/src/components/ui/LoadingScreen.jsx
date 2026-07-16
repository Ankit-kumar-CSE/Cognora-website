import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../../assets/logo.png'

/**
 * LoadingScreen — Animated splash screen shown on first page load.
 * Automatically hides after `duration` ms.
 */
const LoadingScreen = ({ duration = 1200 }) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration)
    return () => clearTimeout(timer)
  }, [duration])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[var(--color-bg)]"
          aria-hidden="true"
          aria-label="Loading Coggnora"
        >
          {/* Background glow */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-20 blur-3xl animate-pulse"
              style={{ background: 'radial-gradient(circle, var(--color-brand) 0%, transparent 70%)' }}
            />
          </div>

          {/* Logo + Name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4, ease: 'easeOut' }}
            className="relative flex flex-col items-center gap-4"
          >
            <div
              className="w-16 h-16 rounded-2xl overflow-hidden shadow-[var(--shadow-brand)] animate-pulse-glow"
            >
              <img src={logo} alt="Coggnora" className="w-full h-full object-cover" />
            </div>

            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold text-[var(--color-text-primary)] tracking-tight">
                Cogg
              </span>
              <span className="text-2xl font-bold text-[var(--color-brand)] tracking-tight">
                nora
              </span>
            </div>

            {/* Loading dots */}
            <motion.div
              className="flex gap-1.5"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
              }}
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)]"
                  variants={{
                    hidden: { opacity: 0.2, y: 0 },
                    visible: {
                      opacity: [0.2, 1, 0.2],
                      y: [0, -6, 0],
                      transition: { repeat: Infinity, duration: 0.9, delay: i * 0.15 },
                    },
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen
