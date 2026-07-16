import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { useScrollY } from '../../hooks/useScrollProgress'
import { useTheme } from '../../hooks/useTheme'
import ThemeToggle from '../ui/ThemeToggle'
import { NAV_LINKS } from '../../data/appData'
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrollY = useScrollY()
  const { isDark, toggleTheme } = useTheme()
  const isScrolled = scrollY > 20

  return (
    <>
      {/* ── Desktop / Mobile Navbar ── */}
      <header
        className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass border-b border-[var(--color-nav-border)] shadow-[var(--shadow-card)]'
            : 'bg-transparent border-b border-transparent'
        }`}
        style={{
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
          backgroundColor: isScrolled ? 'var(--color-nav-bg)' : 'transparent',
        }}
      >
        <nav
          className="container-custom flex items-center justify-between h-16"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] rounded-lg"
            aria-label="Coggnora Home"
          >
            <div className="w-8 h-8 rounded-lg overflow-hidden shadow-[var(--shadow-brand)] group-hover:shadow-[0_0_20px_var(--color-brand-glow)] transition-shadow">
              <img src={logo} alt="Coggnora Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-lg text-[var(--color-text-primary)] tracking-tight">
              Cogg<span className="text-[var(--color-brand)]">nora</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1" role="menubar">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                role="menuitem"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? 'text-[var(--color-brand)] bg-[var(--color-brand-subtle)]'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-elevated)]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop Right: Theme toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
            <Link
              to="/download"
              className="inline-flex items-center gap-2 bg-[var(--color-brand)] text-[#071428] text-sm font-bold px-5 py-2 rounded-xl hover:bg-[var(--color-brand-dim)] transition-all shadow-[var(--shadow-brand)] hover:shadow-[0_0_28px_var(--color-brand-glow)] active:scale-[0.98]"
            >
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
              Download
            </Link>
          </div>

          {/* Mobile: Theme + Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="w-9 h-9 rounded-xl flex items-center justify-center border border-[var(--color-border)] bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)] hover:text-[var(--color-brand)] transition-all"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? (
                <X className="w-4 h-4" aria-hidden="true" />
              ) : (
                <Menu className="w-4 h-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile Menu Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-[var(--color-bg-elevated)] border-l border-[var(--color-border)] flex flex-col md:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-[var(--color-border)]">
                <span className="font-bold text-[var(--color-text-primary)]">
                  Cogg<span className="text-[var(--color-brand)]">nora</span>
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex-1 px-4 py-6 space-y-1" aria-label="Mobile navigation">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? 'text-[var(--color-brand)] bg-[var(--color-brand-subtle)]'
                          : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-card)]'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>

              {/* Drawer CTA */}
              <div className="px-6 pb-8">
                <Link
                  to="/download"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-[var(--color-brand)] text-[#071428] text-sm font-bold px-5 py-3 rounded-xl hover:bg-[var(--color-brand-dim)] transition-all shadow-[var(--shadow-brand)]"
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  Download Now
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to push content below fixed navbar */}
      <div className="h-16" aria-hidden="true" />
    </>
  )
}

export default Navbar
