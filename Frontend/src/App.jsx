import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/layout/ScrollToTop'
import LoadingScreen from './components/ui/LoadingScreen'

// ─────────────────────────────────────────────
// Lazy-loaded pages for code splitting
// ─────────────────────────────────────────────
const Home = lazy(() => import('./pages/Home'))
const Features = lazy(() => import('./pages/Features'))
const Download = lazy(() => import('./pages/Download'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Legal pages
const Privacy = lazy(() => import('./pages/legal/Privacy'))
const Terms = lazy(() => import('./pages/legal/Terms'))
const Licenses = lazy(() => import('./pages/legal/Licenses'))

// Page loading fallback (minimal — LoadingScreen handles initial load)
const PageLoader = () => (
  <div
    className="min-h-[60vh] flex items-center justify-center"
    role="status"
    aria-label="Loading page"
  >
    <div
      className="w-8 h-8 border-2 border-[var(--color-border)] border-t-[var(--color-brand)] rounded-full animate-spin"
      aria-hidden="true"
    />
  </div>
)

const App = () => {
  return (
    <>
      {/* Splash loading screen (hides after 1.2s) */}
      <LoadingScreen duration={1200} />

      {/* Scroll reset on route change */}
      <ScrollToTop />

      <Routes>
        <Route element={<Layout />}>
          {/* Main pages */}
          <Route
            path="/"
            element={
              <Suspense fallback={<PageLoader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/features"
            element={
              <Suspense fallback={<PageLoader />}>
                <Features />
              </Suspense>
            }
          />
          <Route
            path="/download"
            element={
              <Suspense fallback={<PageLoader />}>
                <Download />
              </Suspense>
            }
          />
          <Route
            path="/faq"
            element={
              <Suspense fallback={<PageLoader />}>
                <FAQ />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<PageLoader />}>
                <Contact />
              </Suspense>
            }
          />

          {/* Legal pages */}
          <Route
            path="/privacy"
            element={
              <Suspense fallback={<PageLoader />}>
                <Privacy />
              </Suspense>
            }
          />
          <Route
            path="/terms"
            element={
              <Suspense fallback={<PageLoader />}>
                <Terms />
              </Suspense>
            }
          />
          <Route
            path="/licenses"
            element={
              <Suspense fallback={<PageLoader />}>
                <Licenses />
              </Suspense>
            }
          />

          {/* 404 — catch-all */}
          <Route
            path="*"
            element={
              <Suspense fallback={<PageLoader />}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  )
}

export default App
