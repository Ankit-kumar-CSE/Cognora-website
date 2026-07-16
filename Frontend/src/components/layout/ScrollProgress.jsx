import React from 'react'
import { useScrollProgress } from '../../hooks/useScrollProgress'

/**
 * ScrollProgress — Thin fixed progress bar at the top of the page.
 * Shows reading/scroll progress using the brand color.
 */
const ScrollProgress = () => {
  const progress = useScrollProgress()

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] h-[2px] bg-[var(--color-border)]"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    >
      <div
        className="h-full bg-[var(--color-brand)] transition-all duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export default ScrollProgress
