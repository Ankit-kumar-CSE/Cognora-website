import { useState, useCallback } from 'react'

let toastId = 0

/**
 * useToast — manages toast notification state.
 * Returns { toasts, addToast, removeToast }
 *
 * Toast types: 'success' | 'error' | 'info' | 'warning'
 */
export function useToast() {
  const [toasts, setToasts] = useState([])

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const addToast = useCallback(
    ({ message, type = 'info', duration = 4000 }) => {
      const id = ++toastId
      setToasts((prev) => [...prev, { id, message, type }])

      if (duration > 0) {
        setTimeout(() => removeToast(id), duration)
      }

      return id
    },
    [removeToast]
  )

  // Convenience helpers
  const toast = {
    success: (message, opts) => addToast({ message, type: 'success', ...opts }),
    error: (message, opts) => addToast({ message, type: 'error', ...opts }),
    info: (message, opts) => addToast({ message, type: 'info', ...opts }),
    warning: (message, opts) => addToast({ message, type: 'warning', ...opts }),
  }

  return { toasts, addToast, removeToast, toast }
}
