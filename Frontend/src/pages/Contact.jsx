import React, { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import { Mail, Code2, ExternalLink, Send, Building2 } from 'lucide-react'
import PageSEO from '../seo/PageSEO'
import { ToastContext } from '../components/layout/Layout'
import { APP_INFO } from '../data/appData'
import { organizationSchema, breadcrumbSchema, contactPageSchema, webPageSchema } from '../utils/seo'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const toast = useContext(ToastContext)

  const schemas = [
    organizationSchema(),
    contactPageSchema(),
    webPageSchema({
      title: 'Contact Us | Coggnora Support & Business Inquiries',
      description: 'Get in touch with the Coggnora team for support, business inquiries, or feedback. We respond within 24-48 hours.',
      path: '/contact',
    }),
    breadcrumbSchema([{ name: 'Contact', path: '/contact' }]),
  ]

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast?.error('Please fill in all required fields.')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        toast?.success("Message sent! We'll get back to you within 24-48 hours.")
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error('Server error')
      }
    } catch {
      // Graceful fallback to mailto
      const mailtoUrl = `mailto:${APP_INFO.email}?subject=${encodeURIComponent(form.subject || 'Contact from Website')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
      window.open(mailtoUrl, '_blank')
      toast?.info('Opening your email client as a fallback.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = `w-full bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl px-4 py-3
    text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)]
    focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)] focus:border-[var(--color-brand)]
    transition-all duration-200`

  return (
    <>
      <PageSEO
        title="Contact Us | Coggnora Support & Business Inquiries"
        description="Get in touch with the Coggnora team for support, business inquiries, or feedback. We respond within 24-48 hours."
        canonical="https://coggnora.app/contact"
        schemas={schemas}
      />

      {/* Header */}
      <section className="section-padding pb-10 text-center" aria-labelledby="contact-heading">
        <div className="container-custom">
          <motion.p
            className="text-[var(--color-brand)] text-xs font-bold tracking-widest uppercase mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Get In Touch
          </motion.p>
          <motion.h1
            id="contact-heading"
            className="text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            We'd love to <span className="text-[var(--color-brand)]">hear from you</span>
          </motion.h1>
          <motion.p
            className="text-[var(--color-text-secondary)] text-base max-w-md mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Have a question, feedback, or business inquiry? Reach out — we typically respond within 24-48 hours.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24" aria-label="Contact information and form">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Info cards */}
          <div className="lg:col-span-2 space-y-5">
            {/* Email */}
            <motion.a
              href={`mailto:${APP_INFO.email}`}
              className="flex gap-4 p-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)]
                hover:border-[var(--color-border-brand)] transition-all duration-300 group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-subtle)] border border-[var(--color-border-brand)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-brand)] transition-all">
                <Mail className="w-4.5 h-4.5 text-[var(--color-brand)] group-hover:text-[#071428] transition-colors" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-1">Email</p>
                <p className="text-sm text-[var(--color-text-secondary)]">{APP_INFO.email}</p>
              </div>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href={APP_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 p-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)]
                hover:border-[var(--color-border-brand)] transition-all duration-300 group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-subtle)] border border-[var(--color-border-brand)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-brand)] transition-all">
                <Code2 className="w-4.5 h-4.5 text-[var(--color-brand)] group-hover:text-[#071428] transition-colors" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-1">GitHub</p>
                <p className="text-sm text-[var(--color-text-secondary)]">@Ankit-kumar-CSE</p>
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href={APP_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 p-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)]
                hover:border-[var(--color-border-brand)] transition-all duration-300 group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-subtle)] border border-[var(--color-border-brand)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-brand)] transition-all">
                <ExternalLink className="w-4.5 h-4.5 text-[var(--color-brand)] group-hover:text-[#071428] transition-colors" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-1">LinkedIn</p>
                <p className="text-sm text-[var(--color-text-secondary)]">ankit-kumar-8833a937b</p>
              </div>
            </motion.a>

            {/* Business Inquiry */}
            <motion.div
              className="p-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
            >
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[rgba(167,139,250,0.08)] border border-[rgba(167,139,250,0.2)] flex items-center justify-center shrink-0">
                  <Building2 className="w-4.5 h-4.5 text-[var(--color-accent-purple)]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-1">Business Inquiry</p>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    For partnerships, licensing, or enterprise inquiries, please use the contact form with subject "Business Inquiry" or email us directly.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 space-y-5"
              aria-label="Contact form"
              noValidate
            >
              <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Send us a message</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-[var(--color-text-secondary)] mb-2">
                    Full Name <span className="text-red-400" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    autoComplete="name"
                    className={inputClass}
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-[var(--color-text-secondary)] mb-2">
                    Email Address <span className="text-red-400" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    autoComplete="email"
                    className={inputClass}
                    aria-required="true"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-semibold text-[var(--color-text-secondary)] mb-2">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold text-[var(--color-text-secondary)] mb-2">
                  Message <span className="text-red-400" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us what's on your mind..."
                  required
                  className={`${inputClass} resize-none`}
                  aria-required="true"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-[var(--color-brand)] text-[#071428] font-bold py-3.5 rounded-xl hover:bg-[var(--color-brand-dim)] transition-all shadow-[var(--shadow-brand)] disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98]"
                aria-label="Send contact message"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-[#071428]/30 border-t-[#071428] rounded-full animate-spin" aria-hidden="true" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" aria-hidden="true" />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-xs text-[var(--color-text-muted)] text-center">
                We'll respond within 24-48 hours · Your data is never shared
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Contact
