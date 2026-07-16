import React from 'react'
import { cn } from '../../utils/cn'

/**
 * Badge — Pill-shaped label component
 * Variants: 'brand' | 'purple' | 'amber' | 'blue' | 'green' | 'rose' | 'default'
 */
const Badge = ({ children, variant = 'brand', className = '', dot = false }) => {
  const variants = {
    brand: 'text-[var(--color-brand)] bg-[var(--color-brand-subtle)] border border-[var(--color-border-brand)]',
    purple: 'text-[var(--color-accent-purple)] bg-[rgba(167,139,250,0.08)] border border-[rgba(167,139,250,0.2)]',
    amber: 'text-[var(--color-accent-amber)] bg-[rgba(251,191,36,0.08)] border border-[rgba(251,191,36,0.2)]',
    blue: 'text-[var(--color-accent-blue)] bg-[rgba(96,165,250,0.08)] border border-[rgba(96,165,250,0.2)]',
    green: 'text-emerald-400 bg-emerald-400/10 border border-emerald-400/20',
    rose: 'text-rose-400 bg-rose-400/10 border border-rose-400/20',
    default:
      'text-[var(--color-text-secondary)] bg-[var(--color-bg-elevated)] border border-[var(--color-border)]',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full tracking-wide',
        variants[variant],
        className
      )}
    >
      {dot && (
        <span
          className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  )
}

export default Badge
