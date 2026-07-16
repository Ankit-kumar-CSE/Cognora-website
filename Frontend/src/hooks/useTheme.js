import { useState, useEffect, useCallback } from 'react'

const THEME_KEY = 'coggnora-theme'
const DEFAULT_THEME = 'dark'

/**
 * useTheme — manages dark/light theme
 * Reads from localStorage, syncs with data-theme attribute on <html>.
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return DEFAULT_THEME
    return localStorage.getItem(THEME_KEY) || DEFAULT_THEME
  })

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggleTheme, isDark: theme === 'dark' }
}
