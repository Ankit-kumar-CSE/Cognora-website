//
// Pure data only — no JSX, no components.
// Kept separate from the renderer components so that the renderer file
// can fast-refresh cleanly (it exports only components).
//

export const LEGAL_CONTENT = {
  terms: {
    title: 'Terms & Conditions',
    effectiveDate: 'June 14, 2026',
    sections: [
      {
        heading: null,
        body: 'These Terms & Conditions govern your use of Coggnora. By downloading or using Coggnora, you agree to these Terms.',
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
          { name: 'Premium Plan', price: '₹19', desc: 'Includes all available Coggnora features.' },
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
          'Sell copies of Coggnora',
          'Circumvent subscription verification',
          'Disable security mechanisms',
        ],
      },
      {
        heading: '7. Break Feature',
        body: 'Coggnora allows users to activate Break Mode. The maximum break duration is 4 hours. Once a break ends, another break cannot be started for 72 hours.',
      },
      {
        heading: '8. Updates',
        body: 'We may release updates, bug fixes, and new features without prior notice. Some features may require an active subscription.',
      },
      {
        heading: '9. Limitation of Liability',
        body: 'Coggnora is provided "as is." We are not responsible for:',
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
        body: 'Welcome to Coggnora ("Coggnora", "we", "our", or "us"). Your privacy is important to us. This Privacy Policy explains what information we collect, how we use it, where it is stored, and your rights regarding your information.\n\nBy downloading, installing, or using Coggnora, you agree to this Privacy Policy.',
      },
      {
        heading: '1. About Coggnora',
        body: 'Coggnora is a desktop productivity application designed to help users improve focus while studying or working. It monitors active desktop applications and browser activity (through the optional Coggnora browser extension), provides distraction reminders, blocks selected applications and websites, and generates productivity statistics.',
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
            body: 'Coggnora stores productivity information locally on your computer. This includes:',
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
        body: 'Coggnora does not use cookies within the desktop application. Our website may use essential technical cookies if required for login or payment processing.',
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
        body: 'Coggnora is not intended for children under 13 years of age.',
      },
      {
        heading: '10. Changes',
        body: 'We may update this Privacy Policy periodically. Continued use of Coggnora after changes become effective constitutes acceptance of the updated policy.',
      },
      {
        heading: '11. Contact',
        body: 'For questions regarding privacy, please contact us through the official Coggnora website.',
      },
    ],
  },
  licenses: {
    title: 'Third-Party Licenses',
    effectiveDate: 'June 14, 2026',
    intro: 'Coggnora includes third-party open-source software. These components are licensed under their own respective licenses and remain the intellectual property of their respective copyright holders.',
    libs: [
      { name: 'Electron', url: 'https://www.electronjs.org/', license: 'MIT License', purpose: 'Provides the desktop application framework used to build Coggnora.', copyright: 'Copyright © OpenJS Foundation and Electron contributors.' },
      { name: 'Chromium', url: 'https://www.chromium.org/', license: 'BSD-style License', purpose: 'Provides the embedded browser engine used internally by Electron.' },
      { name: 'Node.js', url: 'https://nodejs.org/', license: 'MIT License', purpose: 'Provides the JavaScript runtime environment for the desktop application.', copyright: 'Copyright © OpenJS Foundation and Node.js contributors.' },
      { name: 'Electron Builder', url: 'https://www.electron.build/', license: 'MIT License', purpose: 'Used to package and distribute Coggnora for Windows, macOS, and Linux.' },
      { name: 'Express', url: 'https://expressjs.com/', license: 'MIT License', purpose: 'Provides the local HTTP server used by Coggnora.' },
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

// Tailwind class strings keyed by license name. Pure strings — kept here
// alongside the data they decorate.
export const LICENSE_COLOR = {
  'MIT License': 'text-[#00f5d4] bg-[#00f5d4]/10 border border-[#00f5d4]/20',
  'BSD-style License': 'text-[#a78bfa] bg-[#a78bfa]/10 border border-[#a78bfa]/20',
  'BSD-2-Clause License': 'text-[#a78bfa] bg-[#a78bfa]/10 border border-[#a78bfa]/20',
  'ISC License': 'text-[#fbbf24] bg-[#fbbf24]/10 border border-[#fbbf24]/20',
}
