import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ChevronDown, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageSEO from '../seo/PageSEO'
import { FAQ_DATA } from '../data/appData'
import { faqPageSchema, breadcrumbSchema } from '../utils/seo'

const CATEGORIES = ['All', ...new Set(FAQ_DATA.map((f) => f.category))]

const FAQItem = ({ item, isOpen, onToggle }) => (
  <div className="border-b border-[var(--color-border)] last:border-0">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      aria-expanded={isOpen}
      aria-controls={`faq-${item.id}`}
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
          id={`faq-${item.id}`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25 }}
          style={{ overflow: 'hidden' }}
        >
          <p className="pb-5 text-sm text-[var(--color-text-secondary)] leading-relaxed pr-10">
            {item.answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
)

const FAQPage = () => {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [openId, setOpenId] = useState(null)

  const filtered = useMemo(() => {
    return FAQ_DATA.filter((f) => {
      const matchCategory = activeCategory === 'All' || f.category === activeCategory
      const matchSearch =
        !search ||
        f.question.toLowerCase().includes(search.toLowerCase()) ||
        f.answer.toLowerCase().includes(search.toLowerCase())
      return matchCategory && matchSearch
    })
  }, [search, activeCategory])

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id))

  const schemas = [
    faqPageSchema(FAQ_DATA),
    breadcrumbSchema([{ name: 'FAQ', path: '/faq' }]),
  ]

  return (
    <>
      <PageSEO
        title="FAQ | Coggnora — Frequently Asked Questions"
        description="Find answers to common questions about Coggnora: features, pricing, privacy, platform support, installation, and more."
        canonical="https://coggnora.app/faq"
        schemas={schemas}
      />

      {/* Header */}
      <section className="section-padding pb-10 text-center" aria-labelledby="faq-page-heading">
        <div className="container-custom">
          <motion.p
            className="text-[var(--color-brand)] text-xs font-bold tracking-widest uppercase mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            FAQ
          </motion.p>
          <motion.h1
            id="faq-page-heading"
            className="text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Frequently Asked
            <br />
            <span className="text-[var(--color-brand)]">Questions</span>
          </motion.h1>
          <motion.p
            className="text-[var(--color-text-secondary)] text-base max-w-md mx-auto mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Everything you need to know about Coggnora. Can't find an answer? Contact us.
          </motion.p>

          {/* Search */}
          <motion.div
            className="relative max-w-md mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-muted)]"
              aria-hidden="true"
            />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search questions..."
              className="w-full bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl pl-11 pr-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)] focus:border-[var(--color-brand)] transition-all"
              aria-label="Search frequently asked questions"
            />
          </motion.div>
        </div>
      </section>

      {/* Categories + FAQ */}
      <section className="pb-24" aria-label="FAQ categories and questions">
        <div className="container-custom max-w-3xl mx-auto">
          {/* Category filters */}
          <motion.div
            className="flex flex-wrap gap-2 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            role="group"
            aria-label="Filter by category"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  activeCategory === cat
                    ? 'bg-[var(--color-brand-subtle)] border-[var(--color-border-brand)] text-[var(--color-brand)]'
                    : 'border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-border-brand)] hover:text-[var(--color-brand)]'
                }`}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* FAQ list */}
          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key={`${activeCategory}-${search}`}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] px-6 md:px-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {filtered.map((item) => (
                  <FAQItem
                    key={item.id}
                    item={item}
                    isOpen={openId === item.id}
                    onToggle={() => toggle(item.id)}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="no-results"
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Search className="w-10 h-10 text-[var(--color-text-muted)] mx-auto mb-4" aria-hidden="true" />
                <p className="text-[var(--color-text-secondary)] mb-2">No results found for "{search}"</p>
                <button
                  onClick={() => { setSearch(''); setActiveCategory('All') }}
                  className="text-[var(--color-brand)] text-sm hover:underline"
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Still have questions? */}
          <motion.div
            className="mt-10 text-center p-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <MessageCircle className="w-8 h-8 text-[var(--color-brand)] mx-auto mb-3" aria-hidden="true" />
            <h2 className="font-bold text-[var(--color-text-primary)] mb-2">Still have questions?</h2>
            <p className="text-sm text-[var(--color-text-secondary)] mb-4">
              Can't find what you're looking for? We're happy to help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[var(--color-brand)] text-[#071428] font-bold px-6 py-2.5 rounded-xl hover:bg-[var(--color-brand-dim)] transition-all shadow-[var(--shadow-brand)] text-sm"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default FAQPage
