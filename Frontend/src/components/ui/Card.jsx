import React from 'react'
import { cn } from '../../utils/cn'

/**
 * Card — Glassmorphism card with optional hover glow effect
 */
const Card = ({
  children,
  className = '',
  hover = true,
  glow = false,
  padding = true,
  as: Tag = 'div',
  ...props
}) => {
  return (
    <Tag
      className={cn(
        'rounded-2xl border bg-[var(--color-bg-card)] border-[var(--color-border)]',
        'transition-all duration-300',
        hover && [
          'hover:border-[var(--color-border-brand)]',
          'hover:shadow-[0_0_30px_var(--color-brand-glow)]',
          'hover:-translate-y-0.5',
        ],
        glow && 'glow-border',
        padding && 'p-6',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default Card
