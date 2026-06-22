import React, { useState, useEffect } from 'react'
import LegalModal from './LegalModal'
import { Mail } from 'lucide-react'
import logo from '../assets/logo.png'

const SUPPORT_EMAIL = 'ankitjaat00010@gmail.com'

const Footer = () => {
  const [legalModal, setLegalModal] = useState(null) // 'terms' | 'privacy' | 'licenses' | null

  // Allow the modal's tab buttons to switch tab type
  useEffect(() => {
    const handler = (e) => setLegalModal(e.detail)
    window.addEventListener('legal-tab', handler)
    return () => window.removeEventListener('legal-tab', handler)
  }, [])

  return (
    <>
      <footer className='border-t border-[#1a2d4a] mt-8'>
        <div className='max-w-7xl mx-auto px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4'>

          {/* Logo */}
          <div className='flex items-center gap-3'>
            <div className='w-8 h-8 rounded-lg bg-[#00f5d4] flex items-center justify-center shadow-[0_0_12px_rgba(0,245,212,0.4)]'>
              <img src={logo} alt='FocusGuard Icon' className='w-full h-full rounded-lg object-cover' />
            </div>
            <div>
              <span className='font-bold text-white'>Focus<span className='text-[#00f5d4]'>Guard</span></span>
              <p className='text-[#4a5568] text-xs'>© 2026 FocusGuard. All rights reserved.</p>
            </div>
          </div>

          {/* Support email — clicking opens the user's mail app addressed to me */}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className='flex items-center gap-2 text-[#A0ACC2] hover:text-[#00f5d4] text-sm transition-colors group'
          >
            <Mail className='w-4 h-4 group-hover:text-[#00f5d4] transition-colors' />
            {SUPPORT_EMAIL}
          </a>

          {/* Legal links */}
          <div className='flex items-center gap-6'>
            <button
              onClick={() => setLegalModal('privacy')}
              className='text-[#A0ACC2] hover:text-white text-sm transition-colors cursor-pointer bg-transparent border-none p-0'
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setLegalModal('terms')}
              className='text-[#A0ACC2] hover:text-white text-sm transition-colors cursor-pointer bg-transparent border-none p-0'
            >
              Terms &amp; Conditions
            </button>
            <button
              onClick={() => setLegalModal('licenses')}
              className='text-[#A0ACC2] hover:text-white text-sm transition-colors cursor-pointer bg-transparent border-none p-0'
            >
              Third-Party Licenses
            </button>
          </div>
        </div>
      </footer>

      {/* Legal modal */}
      {legalModal && (
        <LegalModal type={legalModal} onClose={() => setLegalModal(null)} />
      )}
    </>
  )
}

export default Footer
