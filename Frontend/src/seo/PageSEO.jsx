import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { BASE_URL } from '../utils/seo'

const DEFAULT_DESCRIPTION =
  'Block distractions, shield your focus, and unlock true deep work. Coggnora is a lightweight productivity app for Windows and macOS.'

/**
 * PageSEO — Dynamically updates page <head> with title, meta, OG, Twitter, canonical, and JSON-LD.
 *
 * Usage: <PageSEO title="Features | Coggnora" description="..." schemas={[...]} breadcrumbs={[...]} />
 */
const PageSEO = ({
  title = 'Coggnora — Your Sanctuary for Deep Work',
  description = DEFAULT_DESCRIPTION,
  canonical,
  ogImage = '/assets/logo.png',
  schemas = [],
  noindex = false,
}) => {
  const { pathname } = useLocation()
  const canonicalUrl = canonical || BASE_URL + pathname
  const ogImageUrl = ogImage.startsWith('http') ? ogImage : BASE_URL + ogImage

  useEffect(() => {
    // ── Title ──
    document.title = title

    // Helper to set or create a meta tag
    const setMeta = (selector, content) => {
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        // Extract the attribute name and value from the selector
        const match = selector.match(/\[([^\]=]+)=['"]([^'"]+)['"]\]/)
        if (match) el.setAttribute(match[1], match[2])
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    // Helper to set or create a link tag
    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel='${rel}']`)
      if (!el) {
        el = document.createElement('link')
        el.setAttribute('rel', rel)
        document.head.appendChild(el)
      }
      el.setAttribute('href', href)
    }

    // ── Primary Meta ──
    setMeta("meta[name='description']", description)
    setMeta("meta[name='robots']", noindex ? 'noindex,nofollow' : 'index,follow')

    // ── Canonical ──
    setLink('canonical', canonicalUrl)

    // ── Open Graph ──
    setMeta("meta[property='og:title']", title)
    setMeta("meta[property='og:description']", description)
    setMeta("meta[property='og:url']", canonicalUrl)
    setMeta("meta[property='og:image']", ogImageUrl)

    // ── Twitter ──
    setMeta("meta[name='twitter:title']", title)
    setMeta("meta[name='twitter:description']", description)
    setMeta("meta[name='twitter:image']", ogImageUrl)

    // ── Inject JSON-LD schemas ──
    // Remove previously injected dynamic schemas
    document.querySelectorAll('script[data-page-seo]').forEach((el) => el.remove())

    schemas.forEach((schema, i) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.setAttribute('data-page-seo', String(i))
      script.textContent = JSON.stringify(schema)
      document.head.appendChild(script)
    })

    return () => {
      // Cleanup dynamic schemas on unmount
      document.querySelectorAll('script[data-page-seo]').forEach((el) => el.remove())
    }
  }, [title, description, canonicalUrl, ogImageUrl, noindex, schemas])

  return null
}

export default PageSEO
