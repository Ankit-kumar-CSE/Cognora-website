import React from 'react'
import PageSEO from '../seo/PageSEO'
import Hero from '../components/sections/Hero'
import TrustBar from '../components/sections/TrustBar'
import FeatureHighlights from '../components/sections/FeatureHighlights'
import HowItWorks from '../components/sections/HowItWorks'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import FAQSection from '../components/sections/FAQSection'
import Testimonials from '../components/sections/Testimonials'
import CTABanner from '../components/sections/CTABanner'
import { faqPageSchema, softwareAppSchema, organizationSchema, breadcrumbSchema, webPageSchema } from '../utils/seo'
import { FAQ_DATA } from '../data/appData'

const Home = () => {
  const schemas = [
    softwareAppSchema(),
    organizationSchema(),
    faqPageSchema(FAQ_DATA.slice(0, 8)),
    webPageSchema({
      title: 'Coggnora — Your Sanctuary for Deep Work',
      description: 'Block distractions, shield your focus, and unlock true deep work. Coggnora is a lightweight productivity app for Windows and macOS. Free to start, no account required.',
      path: '/',
    }),
    breadcrumbSchema([]),
  ]

  return (
    <>
      <PageSEO
        title="Coggnora — Your Sanctuary for Deep Work"
        description="Block distractions, shield your focus, and unlock true deep work. Coggnora is a lightweight productivity app for Windows and macOS. Free to start, no account required."
        canonical="https://coggnora.app/"
        ogImage="https://coggnora.app/assets/og-image.png"
        schemas={schemas}
      />
      <Hero />
      <TrustBar />
      <FeatureHighlights />
      <HowItWorks />
      <WhyChooseUs />
      <FAQSection limit={8} />
      <Testimonials />
      <CTABanner />
    </>
  )
}

export default Home
