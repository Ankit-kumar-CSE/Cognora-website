import React from 'react'
import { motion } from 'framer-motion'
import { Lock, Zap, Clock, Headphones } from 'lucide-react'
import { WHY_CHOOSE } from '../../data/appData'

const ICON_MAP = { Lock, Zap, Clock, Headphones }

const WhyChooseUs = () => {
  return (
    <section
      className="section-padding"
      aria-labelledby="why-choose-heading"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div>
            <motion.p
              className="text-[var(--color-brand)] text-xs font-bold tracking-widest uppercase mb-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Why Coggnora
            </motion.p>
            <motion.h2
              id="why-choose-heading"
              className="text-3xl md:text-4xl font-extrabold text-[var(--color-text-primary)] tracking-tight mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Designed with your
              <br />
              <span className="text-[var(--color-brand)]">privacy in mind</span>
            </motion.h2>
            <motion.p
              className="text-[var(--color-text-secondary)] text-base leading-relaxed mb-10 max-w-md"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              Unlike cloud-first productivity tools, Coggnora keeps your data on your device.
              Lightweight, fast, and respectful of your privacy.
            </motion.p>

            {/* Benefits grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_CHOOSE.map((item, i) => {
                const Icon = ICON_MAP[item.icon]
                return (
                  <motion.div
                    key={item.title}
                    className="flex gap-4 p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]
                      hover:border-[var(--color-border-brand)] transition-all duration-300 group"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-subtle)] border border-[var(--color-border-brand)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-brand)] group-hover:border-[var(--color-brand)] transition-all">
                      {Icon && (
                        <Icon className="w-4.5 h-4.5 text-[var(--color-brand)] group-hover:text-[#071428] transition-colors" aria-hidden="true" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-[var(--color-text-primary)] mb-1">{item.title}</h3>
                      <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Right: Visual card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
            aria-hidden="true"
          >
            {/* Main card */}
            <div className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 overflow-hidden">
              {/* Background blob */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-10"
                style={{ background: 'var(--color-brand)' }}
              />

              <div className="relative space-y-6">
                {/* Mock stat cards */}
                {[
                  { label: 'Focus Time Today', value: '4h 32m', color: 'var(--color-brand)' },
                  { label: 'Distractions Blocked', value: '47', color: 'var(--color-accent-purple)' },
                  { label: 'Focus Score', value: '92%', color: 'var(--color-accent-amber)' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="flex items-center justify-between p-4 rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)]"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-2 h-8 rounded-full"
                        style={{ background: stat.color }}
                      />
                      <span className="text-sm text-[var(--color-text-secondary)]">{stat.label}</span>
                    </div>
                    <span className="text-lg font-bold text-[var(--color-text-primary)]">{stat.value}</span>
                  </motion.div>
                ))}

                {/* Privacy badge */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-brand-subtle)] border border-[var(--color-border-brand)] flex items-center justify-center">
                    <Lock className="w-4 h-4 text-[var(--color-brand)]" aria-hidden="true" />
                  </div>
                  <p className="text-xs text-[var(--color-text-muted)]">
                    All data stored locally · 100% private
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
