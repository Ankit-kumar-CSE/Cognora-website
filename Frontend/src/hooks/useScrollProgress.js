import { useState, useEffect } from 'react'

/**
 * useScrollProgress — returns scroll progress as 0–100 percentage.
 * Used for the scroll progress bar at the top of the page.
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const percentage = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(Math.min(Math.round(percentage), 100))
    }

    window.addEventListener('scroll', updateProgress, { passive: true })
    updateProgress()

    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return progress
}

/**
 * useScrollY — returns current scroll Y position.
 * Used for navbar backdrop blur trigger.
 */
export function useScrollY() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return scrollY
}
