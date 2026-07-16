import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Shield, Timer, BarChart2, Globe, Coffee, Monitor,
  Check, ArrowRight, Download
} from 'lucide-react'
import PageSEO from '../seo/PageSEO'
import Badge from '../components/ui/Badge'
import { FEATURES } from '../data/appData'
import { softwareAppSchema, breadcrumbSchema } from '../utils/seo'

const ICON_MAP = { Shield, Timer, BarChart2, Globe, Coffee, Monitor }

const COLOR_MAP = {
  teal: { icon: 'text-[var(--color-brand)]', iconBg: 'bg-[var(--color-brand-subtle)] border-[var(--color-border-brand)]', badge: 'brand' },
  purple: { icon: 'text-[var(--color-accent-purple)]', iconBg: 'bg-[rgba(167,139,250,0.08)] border-[rgba(167,139,250,0.2)]', badge: 'purple' },
  amber: { icon: 'text-[var(--color-accent-amber)]', iconBg: 'bg-[rgba(251,191,36,0.08)] border-[rgba(251,191,36,0.2)]', badge: 'amber' },
  blue: { icon: 'text-[var(--color-accent-blue)]', iconBg: 'bg-[rgba(96,165,250,0.08)] border-[rgba(96,165,250,0.2)]', badge: 'blue' },
  green: { icon: 'text-emerald-400', iconBg: 'bg-emerald-400/10 border-emerald-400/20', badge: 'green' },
  rose: { icon: 'text-rose-400', iconBg: 'bg-rose-400/10 border-rose-400/20', badge: 'rose' },
}

const Features = () => {
  const schemas = [
    softwareAppSchema(),
    breadcrumbSchema([{ name: 'Features', path: '/features' }]),
  ]

  return (
    <>
      <PageSEO
        title="Features | Coggnora — Deep Work Productivity App"
        description="Explore all Coggnora features: distraction blocking, Pomodoro timer, productivity analytics, browser extension, smart break mode, and cross-platform support."
        canonical="https://coggnora.app/features"
        schemas={schemas}
      />

      {/* Hero */}
      <section className="section-padding text-center" aria-labelledby="features-page-heading">
        <div className="container-custom">
          <motion.p
            className="text-[var(--color-brand)] text-xs font-bold tracking-widest uppercase mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Everything You Need
          </motion.p>
          <motion.h1
            id="features-page-heading"
            className="text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Powerful features for
            <br />
            <span className="text-[var(--color-brand)]">serious focus</span>
          </motion.h1>
          <motion.p
            className="text-[var(--color-text-secondary)] text-base max-w-xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Every Coggnora feature is designed to eliminate friction and maximize the time you spend in a genuine flow state.
          </motion.p>
        </div>
      </section>

      {/* Feature details */}
      <section className="pb-20" aria-label="Feature details">
        <div className="container-custom space-y-10">
          {FEATURES.map((feature, i) => {
            const Icon = ICON_MAP[feature.icon]
            const colors = COLOR_MAP[feature.color] || COLOR_MAP.teal
            const isEven = i % 2 === 0

            return (
              <motion.article
                key={feature.id}
                id={feature.id}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 md:p-10
                  hover:border-[var(--color-border-brand)] transition-all duration-300"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5 }}
              >
                <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 items-start`}>
                  {/* Text */}
                  <div className="flex-1 space-y-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${colors.iconBg}`}>
                        {Icon && <Icon className={`w-6 h-6 ${colors.icon}`} aria-hidden="true" />}
                      </div>
                      <Badge variant={colors.badge}>{feature.badge}</Badge>
                    </div>
                    <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">{feature.title}</h2>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed">{feature.longDesc}</p>

                    {/* Benefits list */}
                    <ul className="space-y-2.5" aria-label={`${feature.title} benefits`}>
                      {feature.benefits.map((benefit, bi) => (
                        <li key={bi} className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${colors.iconBg}`}>
                            <Check className={`w-3 h-3 ${colors.icon}`} aria-hidden="true" />
                          </div>
                          <span className="text-sm text-[var(--color-text-secondary)]">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual placeholder */}
                  <div
                    className="w-full md:w-72 lg:w-80 h-48 md:h-56 rounded-xl border border-[var(--color-border)] flex items-center justify-center shrink-0"
                    style={{ background: 'linear-gradient(135deg, var(--color-bg-elevated) 0%, var(--color-bg-card) 100%)' }}
                    aria-hidden="true"
                  >
                    {Icon && <Icon className={`w-16 h-16 opacity-10 ${colors.icon}`} />}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </section>

      {/* Pricing callout */}
      <section className="py-16 bg-[var(--color-bg-elevated)]" aria-labelledby="pricing-heading">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 id="pricing-heading" className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-3">
              Simple, honest pricing
            </h2>
            <p className="text-[var(--color-text-secondary)] text-sm">7-day trial included for all plans</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {[
              {
                name: 'Free Trial',
                price: '₹0',
                desc: '7 days',
                features: ['All Premium features', 'No credit card', 'Instant start'],
                cta: 'Start Free',
                highlight: false,
              },
              {
                name: 'Basic',
                price: '₹9',
                desc: 'per month',
                features: ['Distraction blocking', 'Focus timer', 'Basic analytics'],
                cta: 'Download',
                highlight: false,
              },
              {
                name: 'Premium',
                price: '₹19',
                desc: 'per month',
                features: ['All Basic features', 'Advanced analytics', 'Browser extension', 'Break Mode', 'Priority support'],
                cta: 'Download',
                highlight: true,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border p-6 flex flex-col gap-4 ${
                  plan.highlight
                    ? 'border-[var(--color-border-brand)] bg-[var(--color-brand-subtle)]'
                    : 'border-[var(--color-border)] bg-[var(--color-bg-card)]'
                }`}
              >
                {plan.highlight && (
                  <Badge variant="brand" dot>Most Popular</Badge>
                )}
                <div>
                  <p className="font-bold text-[var(--color-text-primary)]">{plan.name}</p>
                  <p className="text-2xl font-extrabold text-[var(--color-brand)] mt-1">
                    {plan.price}
                    <span className="text-xs text-[var(--color-text-muted)] font-normal ml-1">{plan.desc}</span>
                  </p>
                </div>
                <ul className="space-y-2 flex-1">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                      <Check className="w-3.5 h-3.5 text-[var(--color-brand)] shrink-0" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/download"
                  className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all ${
                    plan.highlight
                      ? 'bg-[var(--color-brand)] text-[#071428] shadow-[var(--shadow-brand)] hover:bg-[var(--color-brand-dim)]'
                      : 'border border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-border-brand)] hover:text-[var(--color-brand)]'
                  }`}
                >
                  <Download className="w-3.5 h-3.5" aria-hidden="true" />
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center" aria-label="Download call to action">
        <div className="container-custom">
          <Link
            to="/download"
            className="inline-flex items-center gap-2 bg-[var(--color-brand)] text-[#071428] font-bold px-8 py-3.5 rounded-xl hover:bg-[var(--color-brand-dim)] shadow-[var(--shadow-brand)] transition-all hover:shadow-[0_0_32px_var(--color-brand-glow)] active:scale-[0.98] text-sm"
          >
            <Download className="w-4 h-4" aria-hidden="true" />
            Download Coggnora Free
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}

export default Features
