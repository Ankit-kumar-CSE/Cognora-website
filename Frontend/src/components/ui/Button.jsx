import React from 'react'
import { cn } from '../../utils/cn'
import { Loader2 } from 'lucide-react'

/**
 * Button — Primary reusable button component
 *
 * Variants: 'primary' | 'secondary' | 'ghost' | 'danger'
 * Sizes: 'sm' | 'md' | 'lg'
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  icon: Icon,
  iconPosition = 'left',
  className = '',
  as: Tag = 'button',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none'

  const variants = {
    primary: [
      'bg-[var(--color-brand)] text-[#071428]',
      'hover:bg-[var(--color-brand-dim)]',
      'shadow-[var(--shadow-brand)] hover:shadow-[0_0_32px_var(--color-brand-glow)]',
      'focus-visible:ring-[var(--color-brand)]',
      'active:scale-[0.98]',
    ].join(' '),
    secondary: [
      'bg-transparent text-[var(--color-text-primary)]',
      'border border-[var(--color-border)]',
      'hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]',
      'focus-visible:ring-[var(--color-brand)]',
      'active:scale-[0.98]',
    ].join(' '),
    ghost: [
      'bg-transparent text-[var(--color-text-secondary)]',
      'hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-elevated)]',
      'focus-visible:ring-[var(--color-brand)]',
    ].join(' '),
    danger: [
      'bg-red-500/10 text-red-400 border border-red-500/30',
      'hover:bg-red-500/20 hover:border-red-400',
      'focus-visible:ring-red-500',
      'active:scale-[0.98]',
    ].join(' '),
  }

  const sizes = {
    sm: 'text-xs px-4 py-2',
    md: 'text-sm px-5 py-2.5',
    lg: 'text-sm px-7 py-3.5',
  }

  return (
    <Tag
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
      ) : (
        Icon && iconPosition === 'left' && <Icon className="w-4 h-4" aria-hidden="true" />
      )}
      {children}
      {!loading && Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4" aria-hidden="true" />
      )}
    </Tag>
  )
}

export default Button
