import React, { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollProgress from './ScrollProgress'
import { ToastContainer } from '../ui/Toast'
import { useToast } from '../../hooks/useToast'
import { ArrowUp } from 'lucide-react'

// Page transition variants
const pageVariants = {
  initial: { opacity: 0, y: 12 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
}

/**
 * Layout — App shell wrapping all routes.
 * Provides: ScrollProgress, Navbar, AnimatePresence page transitions,
 * Footer, Back-to-top button, Toast container.
 *
 * Exports `useAppToast` context for child pages to trigger toasts.
 */
export const ToastContext = React.createContext(null)

const Layout = () => {
  const location = useLocation()
  const { toasts, removeToast, toast } = useToast()
  const [showBackToTop, setShowBackToTop] = useState(false)

  // Show back-to-top after scrolling 400px
  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <ToastContext.Provider value={toast}>
      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* App shell */}
      <div className="min-h-screen flex flex-col bg-[var(--color-bg)]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        <Navbar />

        {/* Page content with animation */}
        <main id="main-content" className="flex-1" tabIndex={-1}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={location.pathname}
              variants={pageVariants}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />
      </div>

      {/* Back to top button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            key="back-to-top"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 z-50 w-10 h-10 rounded-xl flex items-center justify-center
              bg-[var(--color-bg-elevated)] border border-[var(--color-border)]
              text-[var(--color-text-secondary)] hover:text-[var(--color-brand)]
              hover:border-[var(--color-border-brand)] shadow-[var(--shadow-card)]
              transition-all duration-200 hover:-translate-y-0.5"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Toast notifications */}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </ToastContext.Provider>
  )
}

export default Layout
