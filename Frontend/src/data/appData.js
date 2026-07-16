// ─────────────────────────────────────────────
// APP DATA — Central data store for all pages
// ─────────────────────────────────────────────

export const APP_INFO = {
  name: 'Coggnora',
  tagline: 'Your Sanctuary for Deep Work',
  description:
    'Block distractions, shield your focus, and unlock true deep work. A lightweight productivity app for Windows and macOS.',
  version: '1.0.0',
  releaseDate: 'July 1, 2026',
  windowsDownloadUrl: `${import.meta.env.VITE_API_URL}/api/download/windows`,
  macDownloadUrl: `${import.meta.env.VITE_API_URL}/api/download/mac`,
  sha256Windows: 'a3f1c2e4b5d6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2',
  sha256Mac: 'b2e3f4a5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3',
  email: 'ankitjaat00010@gmail.com',
  github: 'https://github.com/Ankit-kumar-CSE',
  linkedin: 'https://linkedin.com/in/ankit-kumar-cse',
  website: 'https://coggnora.app',
}

// ─────────────────────────────────────────────
// FEATURES
// ─────────────────────────────────────────────
export const FEATURES = [
  {
    id: 'distraction-shielding',
    icon: 'Shield',
    title: 'Distraction Shielding',
    shortDesc:
      'Precision blocking of websites and desktop apps. Create custom blacklists and whitelists to secure your focus zone.',
    longDesc:
      'Coggnora monitors your active applications and browser tabs in real time. When a distraction is detected, it sends an immediate notification and can automatically block access. Customize blocklists by session type — study mode, work mode, or personal flow.',
    color: 'teal',
    highlight: false,
    badge: 'Core Feature',
    benefits: [
      'Block any website or app with one click',
      'Schedule blocking sessions in advance',
      'Whitelist exceptions for essential tools',
      'Persistent blocking that survives tab switches',
    ],
  },
  {
    id: 'focus-timer',
    icon: 'Timer',
    title: 'Focus Timer',
    shortDesc:
      'Highly customizable Pomodoro and flow-based sessions. Integrated desktop notifications and persistent floating timer.',
    longDesc:
      'Flexible timer modes adapt to how you work best. Use classic 25/5 Pomodoro cycles, long-form flow sessions, or custom intervals. The floating timer widget stays visible above all windows so you never lose track.',
    color: 'purple',
    highlight: true,
    badge: 'Most Used',
    benefits: [
      'Classic Pomodoro + custom timer modes',
      'Floating timer widget stays always-on-top',
      'Audio and desktop notification alerts',
      'Session history and streak tracking',
    ],
  },
  {
    id: 'insights-analytics',
    icon: 'BarChart2',
    title: 'Insights & Analytics',
    shortDesc:
      'Beautiful charts showing your focus trends over time. Identify your most productive hours and optimize your schedule.',
    longDesc:
      'Track your focus time, distraction rate, and break usage across days, weeks, and months. Visualize your productivity patterns with clean charts and get actionable insights on when and how you work best.',
    color: 'amber',
    highlight: false,
    badge: 'Analytics',
    benefits: [
      '60-day local history of all sessions',
      'Daily and monthly productivity charts',
      'App & website time breakdown',
      'Focus score and streak metrics',
    ],
  },
  {
    id: 'browser-extension',
    icon: 'Globe',
    title: 'Browser Extension',
    shortDesc:
      'Optional Chrome/Edge extension bridges your browser with Coggnora for seamless website tracking without privacy compromise.',
    longDesc:
      'The lightweight browser extension sends only the active tab URL to the desktop app — nothing else. No passwords, no history, no cookies. Full browser integration for accurate distraction detection.',
    color: 'blue',
    highlight: false,
    badge: 'Extension',
    benefits: [
      'Works with Chrome, Edge, and Brave',
      'Zero-access to private browser data',
      'Sends only active URL to desktop app',
      'Enable/disable with one click',
    ],
  },
  {
    id: 'break-mode',
    icon: 'Coffee',
    title: 'Smart Break Mode',
    shortDesc:
      'Structured breaks that recharge without derailing your flow. Automatic cooldown prevents break abuse.',
    longDesc:
      'Break Mode lifts all restrictions for up to 4 hours, giving you genuine rest time. A 72-hour cooldown between breaks keeps you accountable. Schedule breaks in advance or trigger on demand.',
    color: 'green',
    highlight: false,
    badge: 'Wellness',
    benefits: [
      'Up to 4-hour break duration',
      '72-hour cooldown prevents overuse',
      'Schedule breaks in advance',
      'Break history logged for accountability',
    ],
  },
  {
    id: 'cross-platform',
    icon: 'Monitor',
    title: 'Cross-Platform',
    shortDesc:
      'Native performance on Windows 10+ and macOS 11+. Lightweight, fast, and built with Electron for a seamless experience.',
    longDesc:
      'Coggnora is engineered for speed and low resource usage. Under 150MB disk footprint and minimal CPU overhead. Start blocking in seconds — no configuration wizards or admin rights required.',
    color: 'rose',
    highlight: false,
    badge: 'Platform',
    benefits: [
      'Windows 10/11 and macOS 11+ support',
      'Under 150MB disk footprint',
      'Minimal CPU and RAM usage',
      'Auto-starts with your system optionally',
    ],
  },
]

// ─────────────────────────────────────────────
// HOW IT WORKS STEPS
// ─────────────────────────────────────────────
export const HOW_IT_WORKS = [
  {
    num: '01',
    icon: 'Download',
    title: 'Download Installer',
    desc: 'Grab the lightweight installer for Windows or macOS. No account needed to start.',
    highlight: false,
  },
  {
    num: '02',
    icon: 'Settings',
    title: 'Install with One Click',
    desc: 'Zero-config setup gets you ready to block distractions in under 60 seconds.',
    highlight: false,
  },
  {
    num: '03',
    icon: 'Zap',
    title: 'Unlock Your Productivity',
    desc: 'Launch your first session and experience true deep-work flow state from day one.',
    highlight: true,
  },
]

// ─────────────────────────────────────────────
// WHY CHOOSE COGGNORA
// ─────────────────────────────────────────────
export const WHY_CHOOSE = [
  {
    icon: 'Lock',
    title: 'Privacy First',
    desc: 'All productivity data stays on your device. We never sell or upload your personal data.',
  },
  {
    icon: 'Zap',
    title: 'Lightweight',
    desc: 'Under 150MB disk footprint and negligible CPU usage. Works silently in the background.',
  },
  {
    icon: 'Clock',
    title: '7-Day Free Trial',
    desc: 'Try all Premium features for a full week — no credit card, no account required.',
  },
  {
    icon: 'Headphones',
    title: 'Responsive Support',
    desc: 'Direct email support with fast response times. We actually read every message.',
  },
]

// ─────────────────────────────────────────────
// FAQ DATA
// ─────────────────────────────────────────────
export const FAQ_DATA = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What is Coggnora?',
    answer:
      'Coggnora is a desktop productivity application designed to help you achieve deep focus by blocking digital distractions, tracking your work sessions with a Pomodoro timer, and showing you analytics about your productivity patterns.',
  },
  {
    id: 'faq-2',
    category: 'General',
    question: 'Is Coggnora free to use?',
    answer:
      'Yes! Every new user gets a full 7-day free trial with access to all Premium features — no credit card or account required. After the trial, you can continue with the Basic Plan (₹9) or Premium Plan (₹19).',
  },
  {
    id: 'faq-3',
    category: 'Platform',
    question: 'Which operating systems does Coggnora support?',
    answer:
      'Coggnora supports Windows 10 and later (64-bit), and macOS 11 (Big Sur) and later. A Linux version is planned for a future release.',
  },
  {
    id: 'faq-4',
    category: 'Privacy',
    question: 'What data does Coggnora collect?',
    answer:
      'Your productivity data (focus sessions, app usage, website activity) is stored only on your local device for up to 60 days. We store only your account information (email, subscription status) on our secure servers. We never sell your data.',
  },
  {
    id: 'faq-5',
    category: 'Privacy',
    question: 'Is the browser extension required?',
    answer:
      'No, the browser extension is optional. It allows Coggnora to detect which website you have open in your browser for more accurate distraction tracking. Without it, Coggnora still tracks and blocks at the application level.',
  },
  {
    id: 'faq-6',
    category: 'Features',
    question: 'Can I whitelist specific apps or websites?',
    answer:
      'Absolutely. You can create custom whitelists for tools you need during focus sessions — like your code editor, Notion, or Figma. Only blocked items outside the whitelist will trigger alerts.',
  },
  {
    id: 'faq-7',
    category: 'Features',
    question: 'How does Break Mode work?',
    answer:
      'Break Mode temporarily lifts all restrictions for up to 4 hours. After a break ends, there is a 72-hour cooldown before another break can be started, keeping you accountable to your focus goals.',
  },
  {
    id: 'faq-8',
    category: 'Billing',
    question: 'What is included in the Basic vs Premium plan?',
    answer:
      'The Basic Plan (₹9) includes core distraction blocking and the focus timer. The Premium Plan (₹19) includes all features: advanced analytics, browser extension integration, Break Mode scheduling, and priority support.',
  },
  {
    id: 'faq-9',
    category: 'Billing',
    question: 'Can I get a refund?',
    answer:
      'All purchases are generally non-refundable. We encourage you to use the full 7-day free trial to evaluate the app before purchasing. If you have an exceptional circumstance, please contact us and we will review it.',
  },
  {
    id: 'faq-10',
    category: 'Technical',
    question: 'Does Coggnora require administrator privileges?',
    answer:
      'No administrator rights are required for installation. Some deep-level app blocking features may request system permissions for full functionality, but Coggnora works without them in a lighter monitoring mode.',
  },
  {
    id: 'faq-11',
    category: 'Technical',
    question: 'Does Coggnora work offline?',
    answer:
      'Yes! All core features — distraction blocking, focus timer, and local analytics — work fully offline. An internet connection is only required for account authentication and subscription verification.',
  },
  {
    id: 'faq-12',
    category: 'General',
    question: 'How do I contact support?',
    answer:
      'You can reach us at ankitjaat00010@gmail.com or use the Contact page on our website. We typically respond within 24-48 hours.',
  },
]

// ─────────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Software Engineer',
    company: 'Bangalore, India',
    avatar: 'PS',
    avatarColor: 'from-teal-500 to-cyan-600',
    rating: 5,
    text: 'Coggnora changed how I work entirely. I went from 2-hour distracted study sessions to 4+ hours of uninterrupted deep work. The analytics helped me realize I was my own worst enemy.',
  },
  {
    id: 2,
    name: 'Rahul Verma',
    role: 'CS Student',
    company: 'IIT Delhi',
    avatar: 'RV',
    avatarColor: 'from-purple-500 to-indigo-600',
    rating: 5,
    text: 'Best productivity app I have ever used. The Pomodoro timer combined with site blocking is unbeatable. Got through all my semester exams with Coggnora running — highly recommend!',
  },
  {
    id: 3,
    name: 'Ananya Patel',
    role: 'Freelance Designer',
    company: 'Mumbai, India',
    avatar: 'AP',
    avatarColor: 'from-amber-500 to-orange-600',
    rating: 5,
    text: 'As a freelancer, staying focused is my biggest challenge. Coggnora is lightweight, doesn\'t drain my battery, and the insights dashboard shows me exactly when I\'m most productive.',
  },
  {
    id: 4,
    name: 'Karthik Nair',
    role: 'Product Manager',
    company: 'Hyderabad, India',
    avatar: 'KN',
    avatarColor: 'from-blue-500 to-sky-600',
    rating: 5,
    text: 'The privacy-first approach sold me immediately. All data stays on my machine. The trial convinced me to subscribe the same week — the value is exceptional for the price.',
  },
]

// ─────────────────────────────────────────────
// STATS (for animated counters)
// ─────────────────────────────────────────────
export const STATS = [
  { value: 500, suffix: '+', label: 'Active Users', description: 'and growing daily' },
  { value: 4.9, suffix: '★', label: 'Average Rating', description: 'from verified users' },
  { value: 99, suffix: '%', label: 'Focus Success', description: 'reported improvement' },
  { value: 7, suffix: '-day', label: 'Free Trial', description: 'no card required' },
]

// ─────────────────────────────────────────────
// CHANGELOG
// ─────────────────────────────────────────────
export const CHANGELOG = [
  {
    version: '1.0.0',
    date: 'July 1, 2026',
    type: 'major',
    changes: [
      'Initial public release',
      'Distraction blocking for apps and websites',
      'Pomodoro and custom focus timer',
      'Local productivity analytics with 60-day history',
      'Break Mode with 72-hour cooldown',
      'Optional Chrome/Edge browser extension',
      'Windows 10+ and macOS 11+ support',
      '7-day free trial for all new users',
    ],
  },
]

// ─────────────────────────────────────────────
// SYSTEM REQUIREMENTS
// ─────────────────────────────────────────────
export const SYSTEM_REQUIREMENTS = {
  windows: [
    { label: 'OS', value: 'Windows 10 (64-bit) or later' },
    { label: 'RAM', value: '4 GB minimum, 8 GB recommended' },
    { label: 'Storage', value: '150 MB free disk space' },
    { label: 'Processor', value: 'Intel Core i3 / AMD Ryzen 3 or better' },
    { label: 'Internet', value: 'Required for activation only' },
  ],
  mac: [
    { label: 'OS', value: 'macOS 11 (Big Sur) or later' },
    { label: 'RAM', value: '4 GB minimum, 8 GB recommended' },
    { label: 'Storage', value: '180 MB free disk space' },
    { label: 'Processor', value: 'Apple Silicon (M1+) or Intel Core i5+' },
    { label: 'Internet', value: 'Required for activation only' },
  ],
}

// ─────────────────────────────────────────────
// INSTALLATION GUIDE
// ─────────────────────────────────────────────
export const INSTALL_STEPS = {
  windows: [
    {
      step: 1,
      title: 'Download the Installer',
      desc: 'Click the "Download for Windows" button above to download the .exe installer.',
    },
    {
      step: 2,
      title: 'Run the Installer',
      desc: 'Double-click the downloaded file. If Windows SmartScreen appears, click "More info" → "Run anyway".',
    },
    {
      step: 3,
      title: 'Follow Setup Wizard',
      desc: 'Choose your installation directory and click Install. The process takes under a minute.',
    },
    {
      step: 4,
      title: 'Launch Coggnora',
      desc: 'Find Coggnora in your Start Menu or desktop shortcut. Your 7-day trial starts automatically.',
    },
  ],
  mac: [
    {
      step: 1,
      title: 'Download the DMG',
      desc: 'Click "Download for macOS" to get the .dmg disk image.',
    },
    {
      step: 2,
      title: 'Open the DMG',
      desc: 'Double-click the .dmg file to mount it, then drag Coggnora to your Applications folder.',
    },
    {
      step: 3,
      title: 'Allow First Launch',
      desc: 'On first launch, right-click Coggnora → Open. Approve the security prompt from macOS Gatekeeper.',
    },
    {
      step: 4,
      title: 'Start Your Trial',
      desc: 'Coggnora opens with your 7-day trial active. No account or credit card needed.',
    },
  ],
}

// ─────────────────────────────────────────────
// NAV LINKS
// ─────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Features', to: '/features' },
  { label: 'Download', to: '/download' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]

// ─────────────────────────────────────────────
// FOOTER LINKS
// ─────────────────────────────────────────────
export const FOOTER_LINKS = {
  product: [
    { label: 'Features', to: '/features' },
    { label: 'Download', to: '/download' },
    { label: 'Changelog', to: '/download#changelog' },
  ],
  support: [
    { label: 'FAQ', to: '/faq' },
    { label: 'Contact Us', to: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms & Conditions', to: '/terms' },
    { label: 'Third-Party Licenses', to: '/licenses' },
  ],
}
