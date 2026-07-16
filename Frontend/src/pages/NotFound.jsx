import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, Download, AlertCircle } from 'lucide-react'
import PageSEO from '../seo/PageSEO'

const NotFound = () => {
  const navigate = useNavigate()
  const [countdown, setCountdown] = useState(10)

  useEffect(() => {
    if (countdown <= 0) {
      navigate('/', { replace: true })
    }
  }, [countdown, navigate])

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <PageSEO
        title="404 — Page Not Found | Coggnora"
        description="The page you're looking for doesn't exist. Return to Coggnora home."
        noindex
      />

      <section
        className="min-h-[calc(100vh-8rem)] flex items-center justify-center text-center"
        aria-labelledby="not-found-heading"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto"
          >
            {/* Animated 404 */}
            <div className="relative mb-8" aria-hidden="true">
              <p
                className="text-[160px] font-extrabold leading-none select-none"
                style={{
                  background: 'linear-gradient(135deg, var(--color-brand), var(--color-accent-purple))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  opacity: 0.15,
                }}
              >
                404
              </p>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] flex items-center justify-center shadow-[var(--shadow-card)]">
                  <AlertCircle className="w-9 h-9 text-[var(--color-brand)]" />
                </div>
              </div>
            </div>

            <h1
              id="not-found-heading"
              className="text-3xl font-extrabold text-[var(--color-text-primary)] mb-3"
            >
              Page not found
            </h1>
            <p className="text-[var(--color-text-secondary)] text-base mb-8 leading-relaxed">
              The page you're looking for doesn't exist or has been moved.
              <br />
              Redirecting to home in <span className="text-[var(--color-brand)] font-bold">{countdown}</span>s…
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-brand)] text-[#071428] font-bold px-6 py-3 rounded-xl hover:bg-[var(--color-brand-dim)] transition-all shadow-[var(--shadow-brand)] text-sm"
              >
                <Home className="w-4 h-4" aria-hidden="true" />
                Go Home
              </Link>
              <Link
                to="/download"
                className="inline-flex items-center justify-center gap-2 border border-[var(--color-border)] text-[var(--color-text-primary)] font-bold px-6 py-3 rounded-xl hover:border-[var(--color-border-brand)] hover:text-[var(--color-brand)] transition-all text-sm"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                Download Coggnora
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default NotFound
