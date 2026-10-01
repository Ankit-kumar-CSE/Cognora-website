import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { LEGAL_CONTENT } from '../../data/legalData'
import { TermsContent, PrivacyContent, LicensesContent } from '../../data/legalContent'
import PageSEO from '../../seo/PageSEO'
import { breadcrumbSchema, webPageSchema } from '../../utils/seo'

const SUPPORT_EMAIL = 'ankitjaat00010@gmail.com'

const TABS = [
  { path: '/privacy', label: 'Privacy Policy' },
  { path: '/terms', label: 'Terms & Conditions' },
  { path: '/licenses', label: 'Third-Party Licenses' },
]

const RENDERERS = {
  terms: TermsContent,
  privacy: PrivacyContent,
  licenses: LicensesContent,
}

const SEO_META = {
  terms: {
    title: 'Terms & Conditions | Coggnora',
    description: 'Read the Coggnora Terms & Conditions governing use of the app, subscription plans, acceptable use, and limitation of liability.',
  },
  privacy: {
    title: 'Privacy Policy | Coggnora',
    description: 'Coggnora Privacy Policy — learn how we collect, use, and protect your data. All productivity data stays local on your device.',
  },
  licenses: {
    title: 'Third-Party Licenses | Coggnora',
    description: 'Open-source licenses for third-party libraries used in Coggnora.',
  },
}

const LegalPage = ({ type }) => {
  const location = useLocation()
  const data = LEGAL_CONTENT[type]
  const Content = RENDERERS[type]
  const seo = SEO_META[type]

  const schemas = [
    webPageSchema({
      title: seo.title,
      description: seo.description,
      path: location.pathname,
    }),
    breadcrumbSchema([{ name: seo.title.split('|')[0].trim(), path: location.pathname }]),
  ]

  return (
    <>
      <PageSEO
        title={seo.title}
        description={seo.description}
        canonical={`https://coggnora.app${location.pathname}`}
        schemas={schemas}
      />

      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Back to home */}
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-[var(--color-text-muted)] hover:text-[var(--color-brand)] text-xs font-medium transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
          Back to home
        </Link>

        {/* Title card */}
        <div
          className="relative rounded-2xl border border-[var(--color-border)] shadow-[var(--shadow-card)] overflow-hidden mb-6"
          style={{ background: 'linear-gradient(135deg, var(--color-bg-elevated) 0%, var(--color-bg) 100%)' }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px" style={{ background: 'linear-gradient(to right, transparent, var(--color-brand), transparent)', opacity: 0.6 }} aria-hidden="true" />
          <div className="px-6 py-6">
            <h1 className="text-[var(--color-text-primary)] font-bold text-2xl">{data.title}</h1>
            <p className="text-[var(--color-text-muted)] text-xs mt-1">Effective Date: {data.effectiveDate}</p>
          </div>

          {/* Sub-nav: switch between legal documents */}
          <div className="flex gap-1 px-6 pb-4 flex-wrap" role="tablist" aria-label="Legal documents">
            {TABS.map((tab) => {
              const isActive = location.pathname === tab.path
              return (
                <Link
                  key={tab.path}
                  to={tab.path}
                  role="tab"
                  aria-selected={isActive}
                  className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
                    isActive
                      ? 'bg-[var(--color-brand-subtle)] text-[var(--color-brand)] border border-[var(--color-border-brand)]'
                      : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-elevated)] border border-transparent'
                  }`}
                >
                  {tab.label}
                </Link>
              )
            })}
          </div>
        </div>

        {/* Document body */}
        <div className="px-1">
          <Content data={data} />
        </div>

        {/* Footer bar */}
        <div className="flex items-center justify-between gap-4 mt-10 pt-5 border-t border-[var(--color-border)] flex-wrap">
          <p className="text-[var(--color-text-muted)] text-xs">
            Questions?{' '}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-[var(--color-brand)] hover:underline">
              {SUPPORT_EMAIL}
            </a>
          </p>
          <Link
            to="/"
            className="px-4 py-2 rounded-lg bg-[var(--color-brand-subtle)] border border-[var(--color-border-brand)] text-[var(--color-brand)] text-xs font-medium hover:bg-[var(--color-brand)] hover:text-[#071428] transition-all"
          >
            Back to home
          </Link>
        </div>
      </div>
    </>
  )
}

export default LegalPage
