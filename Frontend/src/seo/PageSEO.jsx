import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { BASE_URL } from '../utils/seo'

const DEFAULT_DESCRIPTION =
  'Block distractions, shield your focus, and unlock true deep work. Coggnora is a lightweight productivity app for Windows and macOS.'

/**
 * PageSEO — Dynamically updates page <head> with title, meta, OG, Twitter, canonical, and JSON-LD.
 *
 * Usage: <PageSEO title="Features | Coggnora" description="..." schemas={[...]} />
 */
const PageSEO = ({
  title = 'Coggnora — Your Sanctuary for Deep Work',
  description = DEFAULT_DESCRIPTION,
  canonical,
  ogImage = 'https://coggnora.app/assets/og-image.png',
  schemas = [],
  noindex = false,
}) => {
  const { pathname } = useLocation()
  const canonicalUrl = canonical || BASE_URL + pathname
  const ogImageUrl = ogImage.startsWith('http') ? ogImage : BASE_URL + ogImage

  // Stable serialisation of schemas to avoid infinite re-renders
  // when callers create the array inline (new reference every render)
  const schemasKey = JSON.stringify(schemas)
  const schemasRef = useRef(schemas)
  if (schemasRef.current !== schemas && JSON.stringify(schemasRef.current) !== schemasKey) {
    schemasRef.current = schemas
  }

  useEffect(() => {
    // ── Title ──
    document.title = title

    // Helper: set or create a <meta> tag
    const setMeta = (selector, attrName, attrValue, content) => {
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attrName, attrValue)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    // Helper: set or create a <link> tag identified by a data-seo attribute
    const setCanonical = (href) => {
      let el = document.querySelector("link[data-seo='canonical']")
      if (!el) {
        el = document.createElement('link')
        el.setAttribute('rel', 'canonical')
        el.setAttribute('data-seo', 'canonical')
        document.head.appendChild(el)
      }
      el.setAttribute('href', href)
    }

    // ── Primary Meta ──
    setMeta("meta[name='description']", 'name', 'description', description)
    setMeta("meta[name='robots']", 'name', 'robots', noindex ? 'noindex,nofollow' : 'index,follow')

    // ── Canonical ──
    setCanonical(canonicalUrl)

    // ── Open Graph ──
    setMeta("meta[property='og:title']", 'property', 'og:title', title)
    setMeta("meta[property='og:description']", 'property', 'og:description', description)
    setMeta("meta[property='og:url']", 'property', 'og:url', canonicalUrl)
    setMeta("meta[property='og:image']", 'property', 'og:image', ogImageUrl)

    // ── Twitter ──
    setMeta("meta[name='twitter:title']", 'name', 'twitter:title', title)
    setMeta("meta[name='twitter:description']", 'name', 'twitter:description', description)
    setMeta("meta[name='twitter:image']", 'name', 'twitter:image', ogImageUrl)

    // ── Inject JSON-LD schemas ──
    // Remove previously injected dynamic schemas
    document.querySelectorAll('script[data-page-seo]').forEach((el) => el.remove())

    schemasRef.current.forEach((schema, i) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.setAttribute('data-page-seo', String(i))
      script.textContent = JSON.stringify(schema)
      document.head.appendChild(script)
    })

    return () => {
      document.querySelectorAll('script[data-page-seo]').forEach((el) => el.remove())
    }
  }, [title, description, canonicalUrl, ogImageUrl, noindex, schemasKey]) // eslint-disable-line react-hooks/exhaustive-deps

  return null
}

export default PageSEO

