import React, { useEffect } from 'react'

const CONTENT = {
  terms: {
    title: 'Terms & Conditions',
    effectiveDate: 'June 14, 2026',
    sections: [
      {
        heading: null,
        body: 'These Terms & Conditions govern your use of Focus Builder. By downloading or using Focus Builder, you agree to these Terms.',
      },
      {
        heading: '1. Eligibility',
        body: 'You must be at least 13 years old or have permission from a parent or legal guardian.',
      },
      {
        heading: '2. Trial Period',
        body: 'Every new user receives a 7-day free trial. After the trial expires, continued use requires purchasing a subscription.',
        highlights: ['7-day free trial'],
      },
      {
        heading: '3. Subscription Plans',
        body: null,
        plans: [
          { name: 'Basic Plan', price: '₹9', desc: 'Includes selected productivity features.' },
          { name: 'Premium Plan', price: '₹19', desc: 'Includes all available Focus Builder features.' },
        ],
        note: 'Features may change over time as the application evolves.',
      },
      {
        heading: '4. Upgrading',
        body: 'Users may upgrade from the Basic Plan to the Premium Plan at any time by paying the applicable upgrade price.',
      },
      {
        heading: '5. Refund Policy',
        body: 'All purchases are generally non-refundable. Please review your purchase carefully before completing payment. Nothing in this policy limits any rights you may have under applicable consumer protection laws or the policies of the payment platform used to process your purchase.',
      },
      {
        heading: '6. Acceptable Use',
        body: 'You agree not to:',
        bullets: [
          'Reverse engineer the software',
          'Modify the application without permission',
          'Redistribute the software',
          'Sell copies of Focus Builder',
          'Circumvent subscription verification',
          'Disable security mechanisms',
        ],
      },
      {
        heading: '7. Break Feature',
        body: 'Focus Builder allows users to activate Break Mode. The maximum break duration is 4 hours. Once a break ends, another break cannot be started for 72 hours.',
      },
      {
        heading: '8. Updates',
        body: 'We may release updates, bug fixes, and new features without prior notice. Some features may require an active subscription.',
      },
      {
        heading: '9. Limitation of Liability',
        body: 'Focus Builder is provided "as is." We are not responsible for:',
        bullets: [
          'Loss of productivity',
          'Data loss caused by user actions',
          'Hardware failures',
          'Third-party software issues',
          'Internet connectivity problems',
        ],
      },
      {
        heading: '10. Termination',
        body: 'We reserve the right to suspend or terminate accounts that violate these Terms.',
      },
      {
        heading: '11. Governing Law',
        body: 'These Terms are governed by the laws applicable in your operating jurisdiction unless otherwise required by local consumer protection laws.',
      },
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    effectiveDate: 'June 14, 2026',
    sections: [
      {
        heading: null,
        body: 'Welcome to Focus Builder ("Focus Builder", "we", "our", or "us"). Your privacy is important to us. This Privacy Policy explains what information we collect, how we use it, where it is stored, and your rights regarding your information.\n\nBy downloading, installing, or using Focus Builder, you agree to this Privacy Policy.',
      },
      {
        heading: '1. About Focus Builder',
        body: 'Focus Builder is a desktop productivity application designed to help users improve focus while studying or working. It monitors active desktop applications and browser activity (through the optional Focus Builder browser extension), provides distraction reminders, blocks selected applications and websites, and generates productivity statistics.',
      },
      {
        heading: '2. Information We Collect',
        subSections: [
          {
            subHeading: 'Account Information',
            body: 'When you create an account, we may collect:',
            bullets: ['Name (if provided)', 'Email address (Google Sign-In or other supported login methods)', 'User ID', 'Subscription status', 'Purchase history', 'Transaction identifiers', 'Account preferences'],
            note: 'We do not store your debit card, credit card, banking, or payment credentials. Payments are processed securely by authorized payment providers.',
          },
          {
            subHeading: 'Productivity Data',
            body: 'Focus Builder stores productivity information locally on your computer. This includes:',
            bullets: ['Active application names', 'Active website URLs (received from the browser extension)', 'Focus time', 'Study time', 'Work time', 'Distraction time', 'Break sessions', 'Daily productivity statistics', 'Monthly productivity history'],
            note: 'This data is retained on your device for approximately 60 days unless you delete it. We do not upload this productivity data to our servers unless a future feature explicitly requires your consent.',
          },
          {
            subHeading: 'Browser Extension Data',
            body: 'The browser extension sends only the currently active website URL to the desktop application for distraction detection. The extension does not collect:',
            bullets: ['Passwords', 'Search history', 'Messages', 'Emails', 'Cookies', 'Form data', 'Browser history', 'Personal documents'],
          },
        ],
      },
      {
        heading: '3. Cookies',
        body: 'Focus Builder does not use cookies within the desktop application. Our website may use essential technical cookies if required for login or payment processing.',
      },
      {
        heading: '4. How We Use Information',
        body: 'We use collected information to:',
        bullets: ['Authenticate users', 'Manage subscriptions', 'Verify purchases', 'Provide customer support', 'Detect distractions', 'Generate productivity statistics', 'Improve application performance', 'Prevent fraud and abuse'],
      },
      {
        heading: '5. Data Storage',
        body: null,
        twoCol: {
          left: { label: 'Stored on our secure servers:', items: ['Account information', 'Login details', 'Email address', 'Subscription status', 'Transaction identifiers', 'Purchase history'] },
          right: { label: 'Stored on your computer:', items: ['Productivity statistics', 'Study history', 'Work history', 'Distraction history', 'Website activity', 'Application activity', 'Focus reports'] },
        },
      },
      {
        heading: '6. Data Sharing',
        body: 'We never sell your personal information. Information is shared only when:',
        bullets: ['Required by law', 'Necessary to process payments', 'Required for authentication services', 'Required to provide technical support'],
      },
      {
        heading: '7. Data Security',
        body: 'We use reasonable technical and organizational measures to protect your account information. Although we strive to secure your information, no internet transmission or storage system can guarantee complete security.',
      },
      {
        heading: '8. User Rights',
        body: 'You may:',
        bullets: ['View your account information', 'Delete local productivity history', 'Uninstall the application', 'Remove the browser extension', 'Cancel your subscription', 'Contact us regarding your personal information'],
      },
      {
        heading: '9. Children\'s Privacy',
        body: 'Focus Builder is not intended for children under 13 years of age.',
      },
      {
        heading: '10. Changes',
        body: 'We may update this Privacy Policy periodically. Continued use of Focus Builder after changes become effective constitutes acceptance of the updated policy.',
      },
      {
        heading: '11. Contact',
        body: 'For questions regarding privacy, please contact us through the official Focus Builder website.',
      },
    ],
  },
  licenses: {
    title: 'Third-Party Licenses',
    effectiveDate: 'June 14, 2026',
    intro: 'Focus Builder includes third-party open-source software. These components are licensed under their own respective licenses and remain the intellectual property of their respective copyright holders.',
    libs: [
      { name: 'Electron', url: 'https://www.electronjs.org/', license: 'MIT License', purpose: 'Provides the desktop application framework used to build Focus Builder.', copyright: 'Copyright © OpenJS Foundation and Electron contributors.' },
      { name: 'Chromium', url: 'https://www.chromium.org/', license: 'BSD-style License', purpose: 'Provides the embedded browser engine used internally by Electron.' },
      { name: 'Node.js', url: 'https://nodejs.org/', license: 'MIT License', purpose: 'Provides the JavaScript runtime environment for the desktop application.', copyright: 'Copyright © OpenJS Foundation and Node.js contributors.' },
      { name: 'Electron Builder', url: 'https://www.electron.build/', license: 'MIT License', purpose: 'Used to package and distribute Focus Builder for Windows, macOS, and Linux.' },
      { name: 'Express', url: 'https://expressjs.com/', license: 'MIT License', purpose: 'Provides the local HTTP server used by Focus Builder.' },
      { name: 'Axios', url: 'https://axios-http.com/', license: 'MIT License', purpose: 'Handles HTTP requests between the desktop application and backend services.' },
      { name: 'CORS', url: 'https://github.com/expressjs/cors', license: 'MIT License', purpose: 'Enables secure Cross-Origin Resource Sharing (CORS) for local server communication.' },
      { name: 'dotenv', url: 'https://github.com/motdotla/dotenv', license: 'BSD-2-Clause License', purpose: 'Loads environment variables from configuration files.' },
      { name: 'electron-store', url: 'https://github.com/sindresorhus/electron-store', license: 'MIT License', purpose: 'Stores application settings and local configuration data.' },
      { name: 'node-cron', url: 'https://github.com/node-cron/node-cron', license: 'ISC License', purpose: 'Schedules recurring background tasks within the application.' },
      { name: 'screenshot-desktop', url: 'https://github.com/bencevans/screenshot-desktop', license: 'MIT License', purpose: 'Captures desktop screenshots when required by application features.' },
      { name: 'concurrently', url: 'https://github.com/open-cli-tools/concurrently', license: 'MIT License', purpose: 'Runs multiple development processes simultaneously.', devOnly: true },
      { name: 'wait-on', url: 'https://github.com/jeffbski/wait-on', license: 'MIT License', purpose: 'Waits for required services before launching during development.', devOnly: true },
      { name: 'npm', url: 'https://www.npmjs.com/', license: null, purpose: 'Package manager used to install and manage application dependencies.' },
    ],
  },
}

const licenseColor = {
  'MIT License': 'text-[#00f5d4] bg-[#00f5d4]/10 border border-[#00f5d4]/20',
  'BSD-style License': 'text-[#a78bfa] bg-[#a78bfa]/10 border border-[#a78bfa]/20',
  'BSD-2-Clause License': 'text-[#a78bfa] bg-[#a78bfa]/10 border border-[#a78bfa]/20',
  'ISC License': 'text-[#fbbf24] bg-[#fbbf24]/10 border border-[#fbbf24]/20',
}

const TermsContent = ({ data }) => (
  <div className="space-y-6">
    {data.sections.map((s, i) => (
      <div key={i} className="space-y-2">
        {s.heading && (
          <h3 className="text-[#00f5d4] font-semibold text-base border-b border-[#1a2d4a] pb-2">{s.heading}</h3>
        )}
        {s.body && <p className="text-[#a0acc2] text-sm leading-relaxed">{s.body}</p>}
        {s.highlights && s.highlights.map((h, j) => (
          <span key={j} className="inline-block text-xs font-semibold text-[#00f5d4] bg-[#00f5d4]/10 border border-[#00f5d4]/20 px-2 py-0.5 rounded-full">{h}</span>
        ))}
        {s.plans && (
          <div className="grid grid-cols-2 gap-3 mt-2">
            {s.plans.map((p, j) => (
              <div key={j} className="bg-[#0d1f3c] border border-[#1a2d4a] rounded-xl p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white font-semibold text-sm">{p.name}</span>
                  <span className="text-[#00f5d4] font-bold text-lg">{p.price}</span>
                </div>
                <p className="text-[#a0acc2] text-xs">{p.desc}</p>
              </div>
            ))}
          </div>
        )}
        {s.note && <p className="text-[#4a5568] text-xs italic mt-1">{s.note}</p>}
        {s.bullets && (
          <ul className="space-y-1 mt-1">
            {s.bullets.map((b, j) => (
              <li key={j} className="flex items-start gap-2 text-[#a0acc2] text-sm">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00f5d4] flex-shrink-0"></span>
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </div>
)

const PrivacyContent = ({ data }) => (
  <div className="space-y-6">
    {data.sections.map((s, i) => (
      <div key={i} className="space-y-2">
        {s.heading && (
          <h3 className="text-[#00f5d4] font-semibold text-base border-b border-[#1a2d4a] pb-2">{s.heading}</h3>
        )}
        {s.body && s.body.split('\n\n').map((para, j) => (
          <p key={j} className="text-[#a0acc2] text-sm leading-relaxed">{para}</p>
        ))}
        {s.bullets && (
          <ul className="space-y-1">
            {s.bullets.map((b, j) => (
              <li key={j} className="flex items-start gap-2 text-[#a0acc2] text-sm">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00f5d4] flex-shrink-0"></span>
                {b}
              </li>
            ))}
          </ul>
        )}
        {s.subSections && s.subSections.map((ss, j) => (
          <div key={j} className="bg-[#0d1f3c] border border-[#1a2d4a] rounded-xl p-4 space-y-2 mt-2">
            <h4 className="text-white font-semibold text-sm">{ss.subHeading}</h4>
            {ss.body && <p className="text-[#a0acc2] text-sm leading-relaxed">{ss.body}</p>}
            {ss.bullets && (
              <ul className="space-y-1">
                {ss.bullets.map((b, k) => (
                  <li key={k} className="flex items-start gap-2 text-[#a0acc2] text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00f5d4]/70 flex-shrink-0"></span>
                    {b}
                  </li>
                ))}
              </ul>
            )}
            {ss.note && <p className="text-[#4a5568] text-xs italic border-t border-[#1a2d4a] pt-2 mt-2">{ss.note}</p>}
          </div>
        ))}
        {s.twoCol && (
          <div className="grid grid-cols-2 gap-3 mt-2">
            {[s.twoCol.left, s.twoCol.right].map((col, j) => (
              <div key={j} className="bg-[#0d1f3c] border border-[#1a2d4a] rounded-xl p-4">
                <p className="text-white font-semibold text-xs mb-2">{col.label}</p>
                <ul className="space-y-1">
                  {col.items.map((item, k) => (
                    <li key={k} className="flex items-start gap-2 text-[#a0acc2] text-xs">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[#00f5d4]/60 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    ))}
  </div>
)

const LicensesContent = ({ data }) => (
  <div className="space-y-4">
    <p className="text-[#a0acc2] text-sm leading-relaxed">{data.intro}</p>
    <div className="space-y-3">
      {data.libs.map((lib, i) => (
        <div key={i} className="bg-[#0d1f3c] border border-[#1a2d4a] rounded-xl p-4 hover:border-[#00f5d4]/30 transition-colors">
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="text-white font-semibold text-sm">{lib.name}</span>
              {lib.devOnly && (
                <span className="text-xs text-[#fbbf24] bg-[#fbbf24]/10 border border-[#fbbf24]/20 px-2 py-0.5 rounded-full">dev only</span>
              )}
            </div>
            <div className="flex items-center gap-2">
              {lib.license && (
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${licenseColor[lib.license] || 'text-[#a0acc2] bg-[#1a2d4a] border border-[#1a2d4a]'}`}>
                  {lib.license}
                </span>
              )}
              <a href={lib.url} target="_blank" rel="noopener noreferrer" className="text-[#00f5d4] text-xs hover:underline">
                Website ↗
              </a>
            </div>
          </div>
          <p className="text-[#a0acc2] text-xs mt-2 leading-relaxed">{lib.purpose}</p>
          {lib.copyright && <p className="text-[#4a5568] text-xs mt-1">{lib.copyright}</p>}
        </div>
      ))}
    </div>
    <div className="bg-[#0d1f3c] border border-[#1a2d4a] rounded-xl p-4 mt-2">
      <h4 className="text-white font-semibold text-sm mb-2">Additional Dependencies</h4>
      <p className="text-[#a0acc2] text-xs leading-relaxed">
        Focus Builder also includes numerous indirect (transitive) dependencies installed by npm, distributed under various open-source licenses including MIT, BSD, BSD-2-Clause, BSD-3-Clause, ISC, Apache 2.0, and others. All third-party libraries remain the property of their respective copyright holders.
      </p>
    </div>
    <p className="text-[#4a5568] text-xs mt-4">© 2026 Focus Builder. All rights reserved. Third-party trademarks, logos, software, and copyrights remain the property of their respective owners.</p>
  </div>
)

const LegalModal = ({ type, onClose }) => {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!type) return null

  const data = CONTENT[type]
  const tabs = [
    { key: 'terms', label: 'Terms & Conditions' },
    { key: 'privacy', label: 'Privacy Policy' },
    { key: 'licenses', label: 'Third-Party Licenses' },
  ]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(7,20,40,0.85)', backdropFilter: 'blur(8px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded-2xl border border-[#1a2d4a] shadow-2xl"
        style={{ background: 'linear-gradient(135deg, #0a1628 0%, #071428 100%)' }}
      >
        {/* Glow accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-[#00f5d4]/60 to-transparent" />

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 flex-shrink-0">
          <div>
            <h2 className="text-white font-bold text-xl">{data.title}</h2>
            <p className="text-[#4a5568] text-xs mt-0.5">Effective Date: {data.effectiveDate}</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-[#1a2d4a] hover:bg-[#243d5c] flex items-center justify-center transition-colors text-[#a0acc2] hover:text-white"
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Tab bar */}
        <div className="flex gap-1 px-6 pb-3 border-b border-[#1a2d4a] flex-shrink-0">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                // update the modal type via parent — we use a custom event
                window.dispatchEvent(new CustomEvent('legal-tab', { detail: tab.key }))
              }}
              className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
                type === tab.key
                  ? 'bg-[#00f5d4]/10 text-[#00f5d4] border border-[#00f5d4]/30'
                  : 'text-[#4a5568] hover:text-[#a0acc2] hover:bg-[#1a2d4a]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 px-6 py-5 custom-scrollbar">
          {type === 'terms' && <TermsContent data={data} />}
          {type === 'privacy' && <PrivacyContent data={data} />}
          {type === 'licenses' && <LicensesContent data={data} />}
        </div>

        {/* Footer bar */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-[#1a2d4a] flex-shrink-0">
          <p className="text-[#4a5568] text-xs">
            Questions?{' '}
            <a href="mailto:ankitjaat00010@gmail.com" className="text-[#00f5d4] hover:underline">
              ankitjaat00010@gmail.com
            </a>
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#00f5d4]/10 border border-[#00f5d4]/30 text-[#00f5d4] text-xs font-medium hover:bg-[#00f5d4]/20 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default LegalModal
