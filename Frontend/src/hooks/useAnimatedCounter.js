import { useState, useEffect, useRef } from 'react'

/**
 * useAnimatedCounter — animates a numeric value from 0 to `target`
 * when the element enters the viewport.
 *
 * @param {number} target - Final number to count to
 * @param {number} duration - Animation duration in ms (default 2000)
 * @returns {{ ref: React.Ref, count: number, hasStarted: boolean }}
 */
export function useAnimatedCounter(target, duration = 2000) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    // Detect if target is a decimal (like 4.9)
    const isDecimal = target % 1 !== 0
    const steps = isDecimal ? 49 : Math.min(target, 100)
    const stepDuration = duration / steps
    let current = 0

    const timer = setInterval(() => {
      current += 1
      const progress = current / steps
      const easedValue = target * easeOut(progress)

      if (isDecimal) {
        setCount(parseFloat(easedValue.toFixed(1)))
      } else {
        setCount(Math.round(easedValue))
      }

      if (current >= steps) {
        clearInterval(timer)
        setCount(target)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [hasStarted, target, duration])

  return { ref, count, hasStarted }
}

// Easing function: ease-out cubic
function easeOut(t) {
  return 1 - Math.pow(1 - t, 3)
}
