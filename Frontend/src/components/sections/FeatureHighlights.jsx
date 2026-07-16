import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Timer, BarChart2, Globe, Coffee, Monitor } from 'lucide-react'
import { FEATURES } from '../../data/appData'
import Badge from '../ui/Badge'

const ICON_MAP = { Shield, Timer, BarChart2, Globe, Coffee, Monitor }

const COLOR_MAP = {
  teal: {
    badge: 'brand',
    icon: 'text-[var(--color-brand)]',
    iconBg: 'bg-[var(--color-brand-subtle)] border-[var(--color-border-brand)]',
    glow: 'rgba(0,245,212,0.12)',
  },
  purple: {
    badge: 'purple',
    icon: 'text-[var(--color-accent-purple)]',
    iconBg: 'bg-[rgba(167,139,250,0.08)] border-[rgba(167,139,250,0.2)]',
    glow: 'rgba(167,139,250,0.12)',
  },
  amber: {
    badge: 'amber',
    icon: 'text-[var(--color-accent-amber)]',
    iconBg: 'bg-[rgba(251,191,36,0.08)] border-[rgba(251,191,36,0.2)]',
    glow: 'rgba(251,191,36,0.12)',
  },
  blue: {
    badge: 'blue',
    icon: 'text-[var(--color-accent-blue)]',
    iconBg: 'bg-[rgba(96,165,250,0.08)] border-[rgba(96,165,250,0.2)]',
    glow: 'rgba(96,165,250,0.12)',
  },
  green: {
    badge: 'green',
    icon: 'text-emerald-400',
    iconBg: 'bg-emerald-400/10 border-emerald-400/20',
    glow: 'rgba(52,211,153,0.12)',
  },
  rose: {
    badge: 'rose',
    icon: 'text-rose-400',
    iconBg: 'bg-rose-400/10 border-rose-400/20',
    glow: 'rgba(251,113,133,0.12)',
  },
}

const FeatureCard = ({ feature, index }) => {
  const Icon = ICON_MAP[feature.icon]
  const colors = COLOR_MAP[feature.color] || COLOR_MAP.teal

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6
        hover:border-[var(--color-border-brand)] transition-all duration-300 overflow-hidden"
    >
      {/* Hover glow background */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: `radial-gradient(circle at top left, ${colors.glow}, transparent 70%)` }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        {/* Icon + Badge */}
        <div className="flex items-start justify-between mb-4">
          <div className={`w-11 h-11 rounded-xl border flex items-center justify-center ${colors.iconBg}`}>
            {Icon && <Icon className={`w-5 h-5 ${colors.icon}`} aria-hidden="true" />}
          </div>
          <Badge variant={colors.badge}>{feature.badge}</Badge>
        </div>

        <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2">
          {feature.title}
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
          {feature.shortDesc}
        </p>
      </div>
    </motion.article>
  )
}

const FeatureHighlights = () => {
  return (
    <section id="features" className="section-padding" aria-labelledby="features-heading">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            className="text-[var(--color-brand)] text-xs font-bold tracking-widest uppercase mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Capabilities
          </motion.p>
          <motion.h2
            id="features-heading"
            className="text-3xl md:text-4xl font-extrabold text-[var(--color-text-primary)] tracking-tight mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Built for professional workflow
          </motion.h2>
          <motion.p
            className="text-[var(--color-text-secondary)] max-w-xl mx-auto text-base"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            Everything you need to block distractions, track sessions, and analyze your
            productivity patterns in one lightweight app.
          </motion.p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.id} feature={feature} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            to="/features"
            className="inline-flex items-center gap-2 text-[var(--color-brand)] text-sm font-semibold hover:gap-3 transition-all"
            aria-label="See all Coggnora features"
          >
            See all features <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default FeatureHighlights
