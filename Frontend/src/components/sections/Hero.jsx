import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Grid2x2, Laptop, ArrowRight, Star } from 'lucide-react'
import { APP_INFO } from '../../data/appData'
import appPreview from '../../assets/pic.png'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

const Hero = () => {
  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.07] blur-3xl animate-blob"
          style={{ background: 'radial-gradient(circle, var(--color-brand) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-[0.06] blur-3xl animate-blob animation-delay-4000"
          style={{ background: 'radial-gradient(circle, var(--color-accent-purple) 0%, transparent 70%)' }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(to right, var(--color-border) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">

          {/* ── Left: Text ── */}
          <motion.div
            className="flex-1 min-w-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 text-[var(--color-brand)] text-xs font-semibold px-3 py-1.5 rounded-full bg-[var(--color-brand-subtle)] border border-[var(--color-border-brand)] tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] animate-pulse" aria-hidden="true" />
                Now available for Windows &amp; macOS
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[var(--color-text-primary)] leading-[1.05] tracking-tight"
            >
              Your Sanctuary
              <br />
              for{' '}
              <span className="text-[var(--color-brand)]">
                Deep Work
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-6 text-[var(--color-text-secondary)] text-lg leading-relaxed max-w-md"
            >
              Block distractions. Shield your focus. Create an environment where
              productivity thrives — effortlessly.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href={APP_INFO.windowsDownloadUrl}
                className="inline-flex items-center justify-center gap-2.5 bg-[var(--color-brand)] text-[#071428] font-bold px-7 py-3.5 rounded-xl hover:bg-[var(--color-brand-dim)] transition-all shadow-[var(--shadow-brand)] hover:shadow-[0_0_32px_var(--color-brand-glow)] active:scale-[0.98] text-sm"
                aria-label="Download Coggnora for Windows"
              >
                <Grid2x2 className="w-4 h-4" aria-hidden="true" />
                Download for Windows
              </a>
              <a
                href={APP_INFO.macDownloadUrl}
                className="inline-flex items-center justify-center gap-2.5 text-[var(--color-text-primary)] font-bold px-7 py-3.5 border border-[var(--color-border)] rounded-xl hover:border-[var(--color-border-brand)] hover:text-[var(--color-brand)] transition-all text-sm"
                aria-label="Download Coggnora for macOS"
              >
                <Laptop className="w-4 h-4" aria-hidden="true" />
                Download for macOS
              </a>
            </motion.div>

            {/* Sub-text */}
            <motion.div variants={fadeUp} className="mt-5 flex items-center gap-4">
              <p className="text-[var(--color-text-muted)] text-xs">
                Free to start · No account required · 7-day trial
              </p>
            </motion.div>

            {/* Social proof */}
            <motion.div variants={fadeUp} className="mt-6 flex items-center gap-2">
              <div className="flex -space-x-2" aria-hidden="true">
                {['PS', 'RV', 'AP', 'KN'].map((initials, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 border-2 border-[var(--color-bg)] flex items-center justify-center text-[8px] font-bold text-white"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1 text-[var(--color-text-muted)] text-xs">
                <div className="flex" aria-label="5 star rating">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <span className="text-[var(--color-text-secondary)]">500+ happy users</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: App Preview ── */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative animate-float">
              {/* Glow behind image */}
              <div
                className="absolute -inset-6 rounded-3xl blur-3xl opacity-30"
                style={{ background: 'radial-gradient(ellipse, var(--color-brand) 0%, transparent 70%)' }}
                aria-hidden="true"
              />
              {/* Image frame */}
              <div className="relative rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-[var(--shadow-lg)]">
                <img
                  src={appPreview}
                  alt="Coggnora app interface showing focus session and distraction blocking"
                  className="w-full max-w-[500px] object-cover"
                  loading="eager"
                  width={500}
                  height={340}
                />
                {/* Glass overlay on top */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to bottom, transparent 70%, var(--color-bg) 100%)',
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-2 border border-[var(--color-border-brand)] shadow-[var(--shadow-brand)]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                  <span className="text-xs font-semibold text-[var(--color-text-primary)]">Focus Mode Active</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
