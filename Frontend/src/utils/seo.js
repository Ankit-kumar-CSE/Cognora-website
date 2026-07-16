/**
 * SEO Utilities — JSON-LD schema generators
 * Used by PageSEO component to inject structured data.
 */

export const BASE_URL = 'https://coggnora.app'

/**
 * BreadcrumbList schema
 * @param {Array<{name: string, path: string}>} items
 */
export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BASE_URL + '/',
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        item: BASE_URL + item.path,
      })),
    ],
  }
}

/**
 * FAQPage schema
 * @param {Array<{question: string, answer: string}>} faqs
 */
export function faqPageSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/**
 * SoftwareApplication schema
 */
export function softwareAppSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Coggnora',
    operatingSystem: 'Windows, macOS',
    applicationCategory: 'ProductivityApplication',
    offers: [
      { '@type': 'Offer', price: '0', priceCurrency: 'INR', name: 'Free Trial (7 days)' },
      { '@type': 'Offer', price: '9', priceCurrency: 'INR', name: 'Basic Plan' },
      { '@type': 'Offer', price: '19', priceCurrency: 'INR', name: 'Premium Plan' },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '500',
    },
    description:
      'Coggnora is a desktop productivity app that blocks distractions, tracks focus sessions, and shows analytics to help you achieve deep work.',
    url: BASE_URL,
    image: BASE_URL + '/assets/logo.png',
  }
}

/**
 * Organization schema
 */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Coggnora',
    url: BASE_URL,
    logo: BASE_URL + '/assets/logo.png',
    email: 'ankitjaat00010@gmail.com',
    sameAs: ['https://github.com/Ankit-kumar-CSE'],
  }
}

/**
 * WebPage schema
 */
export function webPageSchema({ title, description, path }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: BASE_URL + path,
    isPartOf: { '@type': 'WebSite', url: BASE_URL, name: 'Coggnora' },
  }
}
