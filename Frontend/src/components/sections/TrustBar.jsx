import React from 'react'
import { motion } from 'framer-motion'
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter'
import { STATS } from '../../data/appData'

const StatCard = ({ value, suffix, label, description, index }) => {
  const isDecimal = value % 1 !== 0
  const { ref, count } = useAnimatedCounter(value, 2000)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center text-center"
    >
      <p
        className="text-3xl md:text-4xl font-extrabold text-[var(--color-text-primary)] tabular-nums"
        aria-label={`${value}${suffix} ${label}`}
      >
        {isDecimal ? count.toFixed(1) : count}
        <span className="text-[var(--color-brand)]">{suffix}</span>
      </p>
      <p className="text-[var(--color-text-primary)] font-semibold text-sm mt-1">{label}</p>
      <p className="text-[var(--color-text-muted)] text-xs mt-0.5">{description}</p>
    </motion.div>
  )
}

const TrustBar = () => {
  return (
    <section
      className="py-12 border-y border-[var(--color-border)]"
      aria-label="Statistics and social proof"
    >
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBar
