import React from 'react'
import { motion } from 'framer-motion'
import { Download, Settings, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { HOW_IT_WORKS } from '../../data/appData'

const ICON_MAP = { Download, Settings, Zap }

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="section-padding bg-[var(--color-bg-elevated)]"
      aria-labelledby="how-it-works-heading"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            className="text-[var(--color-brand)] text-xs font-bold tracking-widest uppercase mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How It Works
          </motion.p>
          <motion.h2
            id="how-it-works-heading"
            className="text-3xl md:text-4xl font-extrabold text-[var(--color-text-primary)] tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Start focusing in minutes
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden md:block absolute top-8 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px"
            style={{ background: 'linear-gradient(to right, var(--color-border), var(--color-brand), var(--color-border))' }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {HOW_IT_WORKS.map((step, i) => {
              const Icon = ICON_MAP[step.icon]
              return (
                <motion.div
                  key={step.num}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  {/* Icon circle */}
                  <div
                    className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all ${
                      step.highlight
                        ? 'bg-[var(--color-brand)] shadow-[var(--shadow-brand)]'
                        : 'bg-[var(--color-bg-card)] border border-[var(--color-border)]'
                    }`}
                  >
                    {Icon && (
                      <Icon
                        className={`w-7 h-7 ${step.highlight ? 'text-[#071428]' : 'text-[var(--color-brand)]'}`}
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  <span
                    className={`text-xs font-bold tracking-widest mb-2 ${
                      step.highlight ? 'text-[var(--color-brand)]' : 'text-[var(--color-text-muted)]'
                    }`}
                  >
                    STEP {step.num}
                  </span>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed max-w-xs">
                    {step.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            to="/download"
            className="inline-flex items-center gap-2 bg-[var(--color-brand)] text-[#071428] font-bold px-8 py-3.5 rounded-xl hover:bg-[var(--color-brand-dim)] transition-all shadow-[var(--shadow-brand)] hover:shadow-[0_0_28px_var(--color-brand-glow)] active:scale-[0.98] text-sm"
          >
            Get Started Free
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
