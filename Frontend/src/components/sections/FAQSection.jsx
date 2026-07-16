import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { FAQ_DATA } from '../../data/appData'

const FAQItem = ({ item, isOpen, onToggle }) => {
  return (
    <div className="border-b border-[var(--color-border)] last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-2 rounded"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
        id={`faq-btn-${item.id}`}
      >
        <span className="font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-brand)] transition-colors text-sm md:text-base">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 w-6 h-6 rounded-lg bg-[var(--color-bg-elevated)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] group-hover:border-[var(--color-border-brand)] group-hover:text-[var(--color-brand)] transition-all"
        >
          <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${item.id}`}
            role="region"
            aria-labelledby={`faq-btn-${item.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div className="pb-5 text-sm text-[var(--color-text-secondary)] leading-relaxed pr-10">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const FAQSection = ({ limit = 8 }) => {
  const [openId, setOpenId] = useState(null)
  const visibleFAQs = FAQ_DATA.slice(0, limit)

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <section
      id="faq"
      className="section-padding bg-[var(--color-bg-elevated)]"
      aria-labelledby="faq-heading"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.p
            className="text-[var(--color-brand)] text-xs font-bold tracking-widest uppercase mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            FAQ
          </motion.p>
          <motion.h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-extrabold text-[var(--color-text-primary)] tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Frequently asked questions
          </motion.h2>
        </div>

        <motion.div
          className="max-w-2xl mx-auto rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] px-6 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          {visibleFAQs.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FAQSection
