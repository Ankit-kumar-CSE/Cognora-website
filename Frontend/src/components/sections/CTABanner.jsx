import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Download, ArrowRight } from 'lucide-react'

const CTABanner = () => {
  return (
    <section
      className="section-padding"
      aria-labelledby="cta-heading"
    >
      <div className="container-custom">
        <motion.div
          className="relative rounded-2xl overflow-hidden border border-[var(--color-border-brand)] p-12 md:p-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background gradient */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background: 'radial-gradient(ellipse at center, var(--color-brand) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, var(--color-bg-card) 0%, var(--color-bg-elevated) 100%)',
            }}
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-10">
            <motion.p
              className="text-[var(--color-brand)] text-xs font-bold tracking-widest uppercase mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Get Started Today
            </motion.p>
            <motion.h2
              id="cta-heading"
              className="text-3xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
            >
              Ready to enter{' '}
              <span className="text-[var(--color-brand)]">deep work</span>?
            </motion.h2>
            <motion.p
              className="text-[var(--color-text-secondary)] text-base max-w-lg mx-auto mb-10"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Download Coggnora free today. 7-day trial with all premium features. No credit card.
              No account required.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
            >
              <Link
                to="/download"
                className="inline-flex items-center gap-2.5 bg-[var(--color-brand)] text-[#071428] font-bold px-8 py-3.5 rounded-xl hover:bg-[var(--color-brand-dim)] transition-all shadow-[var(--shadow-brand)] hover:shadow-[0_0_32px_var(--color-brand-glow)] active:scale-[0.98] text-sm"
                aria-label="Download Coggnora now"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                Download Free
              </Link>
              <Link
                to="/features"
                className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-brand)] text-sm font-medium transition-all hover:gap-3"
                aria-label="Learn more about Coggnora features"
              >
                Explore features <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTABanner
