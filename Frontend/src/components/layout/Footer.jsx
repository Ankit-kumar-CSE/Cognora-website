import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Code2, ExternalLink, Heart } from 'lucide-react'
import { FOOTER_LINKS, APP_INFO } from '../../data/appData'
import logo from '../../assets/logo.png'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer
      className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] mt-auto"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-brand)] to-transparent opacity-40" />

      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">

          {/* Brand Column */}
          <div className="md:col-span-1 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5 group" aria-label="Coggnora Home">
              <div className="w-8 h-8 rounded-lg overflow-hidden shadow-[var(--shadow-brand)] group-hover:shadow-[0_0_20px_var(--color-brand-glow)] transition-shadow">
                <img src={logo} alt="Coggnora Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-[var(--color-text-primary)] tracking-tight">
                Cogg<span className="text-[var(--color-brand)]">nora</span>
              </span>
            </Link>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed max-w-xs">
              Your sanctuary for deep work. Block distractions and achieve true focus — free to start.
            </p>
            {/* Social links */}
            <div className="flex gap-3" aria-label="Social media links">
              <a
                href={APP_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-brand)] hover:border-[var(--color-border-brand)] transition-all"
                aria-label="GitHub profile"
              >
                <Code2 className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <a
                href={APP_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-brand)] hover:border-[var(--color-border-brand)] transition-all"
                aria-label="LinkedIn profile"
              >
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${APP_INFO.email}`}
                className="w-8 h-8 rounded-lg flex items-center justify-center border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-brand)] hover:border-[var(--color-border-brand)] transition-all"
                aria-label="Send email"
              >
                <Mail className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-xs font-semibold text-[var(--color-text-primary)] uppercase tracking-widest mb-4">
              Product
            </h3>
            <ul className="space-y-3" role="list">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-brand)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-xs font-semibold text-[var(--color-text-primary)] uppercase tracking-widest mb-4">
              Support
            </h3>
            <ul className="space-y-3" role="list">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-brand)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${APP_INFO.email}`}
                  className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-brand)] transition-colors"
                >
                  Email Support
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xs font-semibold text-[var(--color-text-primary)] uppercase tracking-widest mb-4">
              Legal
            </h3>
            <ul className="space-y-3" role="list">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-brand)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="divider mt-10 mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[var(--color-text-muted)]">
          <p>© {year} Coggnora. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-400 fill-red-400 mx-0.5" aria-label="love" /> by{' '}
            <a
              href={APP_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-brand)] transition-colors ml-0.5"
            >
              Ankit Kumar
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
