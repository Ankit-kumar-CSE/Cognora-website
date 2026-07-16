import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, XCircle, Info, AlertTriangle } from 'lucide-react'
import { cn } from '../../utils/cn'

const TOAST_CONFIG = {
  success: {
    icon: CheckCircle,
    classes: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
    iconClass: 'text-emerald-400',
  },
  error: {
    icon: XCircle,
    classes: 'border-red-500/30 bg-red-500/10 text-red-400',
    iconClass: 'text-red-400',
  },
  info: {
    icon: Info,
    classes: 'border-[var(--color-border-brand)] bg-[var(--color-brand-subtle)] text-[var(--color-brand)]',
    iconClass: 'text-[var(--color-brand)]',
  },
  warning: {
    icon: AlertTriangle,
    classes: 'border-amber-500/30 bg-amber-500/10 text-amber-400',
    iconClass: 'text-amber-400',
  },
}

/**
 * Individual Toast notification
 */
export const Toast = ({ id, message, type = 'info', onRemove }) => {
  const config = TOAST_CONFIG[type] || TOAST_CONFIG.info
  const Icon = config.icon

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      className={cn(
        'flex items-start gap-3 px-4 py-3 rounded-xl border glass',
        'min-w-[280px] max-w-[380px] shadow-lg',
        config.classes
      )}
      role="alert"
      aria-live="polite"
    >
      <Icon className={cn('w-4 h-4 mt-0.5 shrink-0', config.iconClass)} aria-hidden="true" />
      <p className="text-sm font-medium flex-1 leading-snug">{message}</p>
      <button
        onClick={() => onRemove(id)}
        className="shrink-0 opacity-60 hover:opacity-100 transition-opacity"
        aria-label="Dismiss notification"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </motion.div>
  )
}

/**
 * ToastContainer — fixed position container for all toasts
 */
export const ToastContainer = ({ toasts, onRemove }) => {
  return (
    <div
      className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3"
      aria-label="Notifications"
      aria-live="polite"
      aria-atomic="false"
    >
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} onRemove={onRemove} />
        ))}
      </AnimatePresence>
    </div>
  )
}
