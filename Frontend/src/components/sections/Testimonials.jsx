import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { TESTIMONIALS } from '../../data/appData'

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.15 }}
      className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6
        hover:border-[var(--color-border-brand)] transition-all duration-300 flex flex-col gap-4"
    >
      {/* Stars */}
      <div className="flex gap-0.5" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-sm text-[var(--color-text-secondary)] leading-relaxed flex-1">
        "{testimonial.text}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-[var(--color-border)]">
        <div
          className={`w-9 h-9 rounded-full bg-gradient-to-br ${testimonial.avatarColor} flex items-center justify-center text-white text-xs font-bold shrink-0`}
          aria-hidden="true"
        >
          {testimonial.avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--color-text-primary)]">{testimonial.name}</p>
          <p className="text-xs text-[var(--color-text-muted)]">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </div>
    </motion.article>
  )
}

const Testimonials = () => {
  return (
    <section
      className="section-padding"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            className="text-[var(--color-brand)] text-xs font-bold tracking-widest uppercase mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Testimonials
          </motion.p>
          <motion.h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-extrabold text-[var(--color-text-primary)] tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Loved by focused people
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
