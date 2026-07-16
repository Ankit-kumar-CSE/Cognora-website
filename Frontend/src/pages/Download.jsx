import React, { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import { Grid2x2, Laptop, Copy, Check, ChevronDown, ChevronUp } from 'lucide-react'
import PageSEO from '../seo/PageSEO'
import Badge from '../components/ui/Badge'
import { ToastContext } from '../components/layout/Layout'
import {
  APP_INFO, SYSTEM_REQUIREMENTS, INSTALL_STEPS, CHANGELOG
} from '../data/appData'
import { softwareAppSchema, breadcrumbSchema } from '../utils/seo'

const CopyButton = ({ text, label }) => {
  const [copied, setCopied] = useState(false)
  const toast = useContext(ToastContext)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      toast?.success(`${label} copied to clipboard!`)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      toast?.error('Failed to copy. Please copy manually.')
    }
  }

  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-brand)] transition-colors px-2 py-1 rounded border border-[var(--color-border)] hover:border-[var(--color-border-brand)]"
      aria-label={`Copy ${label}`}
    >
      {copied ? (
        <Check className="w-3 h-3 text-emerald-400" aria-hidden="true" />
      ) : (
        <Copy className="w-3 h-3" aria-hidden="true" />
      )}
      {copied ? 'Copied!' : 'Copy'}
    </button>
  )
}

const Download = () => {
  const [activeOS, setActiveOS] = useState('windows')
  const [changelogOpen, setChangelogOpen] = useState(false)

  const schemas = [
    softwareAppSchema(),
    breadcrumbSchema([{ name: 'Download', path: '/download' }]),
  ]

  const downloadUrl =
    activeOS === 'windows' ? APP_INFO.windowsDownloadUrl : APP_INFO.macDownloadUrl
  const sha256 = activeOS === 'windows' ? APP_INFO.sha256Windows : APP_INFO.sha256Mac
  const requirements = SYSTEM_REQUIREMENTS[activeOS]
  const steps = INSTALL_STEPS[activeOS]

  return (
    <>
      <PageSEO
        title="Download Coggnora | Free Productivity App for Windows & macOS"
        description={`Download Coggnora v${APP_INFO.version} for Windows and macOS. Free 7-day trial, no account required. System requirements and installation guide included.`}
        canonical="https://coggnora.app/download"
        schemas={schemas}
      />

      {/* Hero */}
      <section className="section-padding text-center" aria-labelledby="download-heading">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="brand" dot className="mb-5">
              Latest Release — v{APP_INFO.version}
            </Badge>
            <h1
              id="download-heading"
              className="text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mb-3"
            >
              Download <span className="text-[var(--color-brand)]">Coggnora</span>
            </h1>
            <p className="text-[var(--color-text-secondary)] text-base mb-2">
              Version {APP_INFO.version} · Released {APP_INFO.releaseDate}
            </p>
            <p className="text-[var(--color-text-muted)] text-sm mb-10">
              Free 7-day trial · No account required · No credit card
            </p>
          </motion.div>

          {/* OS Selector */}
          <motion.div
            className="flex justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            {['windows', 'mac'].map((os) => (
              <button
                key={os}
                onClick={() => setActiveOS(os)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all ${
                  activeOS === os
                    ? 'bg-[var(--color-brand-subtle)] border-[var(--color-border-brand)] text-[var(--color-brand)]'
                    : 'border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-brand)] hover:text-[var(--color-brand)]'
                }`}
                aria-pressed={activeOS === os}
              >
                {os === 'windows' ? (
                  <Grid2x2 className="w-4 h-4" aria-hidden="true" />
                ) : (
                  <Laptop className="w-4 h-4" aria-hidden="true" />
                )}
                {os === 'windows' ? 'Windows' : 'macOS'}
              </button>
            ))}
          </motion.div>

          {/* Download button */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <a
              href={downloadUrl}
              className="inline-flex items-center gap-2.5 bg-[var(--color-brand)] text-[#071428] font-bold px-8 py-4 rounded-xl hover:bg-[var(--color-brand-dim)] transition-all shadow-[var(--shadow-brand)] hover:shadow-[0_0_32px_var(--color-brand-glow)] active:scale-[0.98] text-base"
              aria-label={`Download Coggnora for ${activeOS === 'windows' ? 'Windows' : 'macOS'}`}
            >
              {activeOS === 'windows' ? (
                <Grid2x2 className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Laptop className="w-5 h-5" aria-hidden="true" />
              )}
              Download for {activeOS === 'windows' ? 'Windows' : 'macOS'}
            </a>
            <CopyButton text={downloadUrl} label="download link" />
          </motion.div>
        </div>
      </section>

      {/* System Requirements + Install Guide */}
      <section className="pb-16" aria-label="System requirements and installation">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* System Requirements */}
          <motion.div
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-6">
              System Requirements
              <span className="ml-2 text-xs font-normal text-[var(--color-text-muted)]">
                ({activeOS === 'windows' ? 'Windows' : 'macOS'})
              </span>
            </h2>
            <dl className="space-y-3">
              {requirements.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex items-start justify-between gap-4 py-3 border-b border-[var(--color-border)] last:border-0"
                >
                  <dt className="text-sm text-[var(--color-text-muted)] shrink-0">{label}</dt>
                  <dd className="text-sm text-[var(--color-text-primary)] text-right">{value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          {/* Installation Guide */}
          <motion.div
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-6">
              Installation Guide
            </h2>
            <ol className="space-y-5" aria-label="Installation steps">
              {steps.map(({ step, title, desc }) => (
                <li key={step} className="flex gap-4">
                  <div className="w-7 h-7 rounded-full bg-[var(--color-brand-subtle)] border border-[var(--color-border-brand)] flex items-center justify-center shrink-0 text-xs font-bold text-[var(--color-brand)]">
                    {step}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-1">{title}</p>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </section>

      {/* SHA256 Checksum */}
      <section className="pb-12" aria-labelledby="checksum-heading">
        <div className="container-custom">
          <motion.div
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-3">
              <h2 id="checksum-heading" className="text-sm font-bold text-[var(--color-text-primary)]">
                SHA256 Checksum
                <span className="ml-2 text-xs font-normal text-[var(--color-text-muted)]">
                  ({activeOS === 'windows' ? 'Windows' : 'macOS'} installer)
                </span>
              </h2>
              <CopyButton text={sha256} label="checksum" />
            </div>
            <code className="block text-xs text-[var(--color-text-muted)] font-mono bg-[var(--color-bg)] rounded-lg px-4 py-3 break-all leading-relaxed">
              {sha256}
            </code>
            <p className="text-xs text-[var(--color-text-muted)] mt-3">
              Verify the downloaded installer matches this hash to ensure file integrity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Changelog */}
      <section className="pb-20" id="changelog" aria-labelledby="changelog-heading">
        <div className="container-custom">
          <motion.div
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setChangelogOpen((o) => !o)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-[var(--color-bg-elevated)] transition-colors"
              aria-expanded={changelogOpen}
              aria-controls="changelog-content"
            >
              <h2 id="changelog-heading" className="text-lg font-bold text-[var(--color-text-primary)]">
                Changelog
              </h2>
              {changelogOpen ? (
                <ChevronUp className="w-5 h-5 text-[var(--color-text-muted)]" aria-hidden="true" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[var(--color-text-muted)]" aria-hidden="true" />
              )}
            </button>

            {changelogOpen && (
              <div id="changelog-content" className="px-6 pb-6">
                {CHANGELOG.map((entry) => (
                  <div key={entry.version}>
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant={entry.type === 'major' ? 'brand' : 'default'}>
                        v{entry.version}
                      </Badge>
                      <span className="text-xs text-[var(--color-text-muted)]">{entry.date}</span>
                    </div>
                    <ul className="space-y-2">
                      {entry.changes.map((change, ci) => (
                        <li key={ci} className="flex items-start gap-2.5 text-sm text-[var(--color-text-secondary)]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] mt-2 shrink-0" aria-hidden="true" />
                          {change}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Download
