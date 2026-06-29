import React from 'react'
import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import logo from '../assets/logo.png'

const SUPPORT_EMAIL = 'ankitjaat00010@gmail.com'

const Footer = () => {
  return (
    <footer className='border-t border-[#1a2d4a] mt-8'>
      <div className='max-w-7xl mx-auto px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4'>

        {/* Logo */}
        <div className='flex items-center gap-3'>
          <div className='w-8 h-8 rounded-lg bg-[#00f5d4] flex items-center justify-center shadow-[0_0_12px_rgba(0,245,212,0.4)]'>
            <img src={logo} alt='Coggnora Icon' className='w-full h-full rounded-lg object-cover' />
          </div>
          <div>
            <span className='font-bold text-white'>Cogg<span className='text-[#00f5d4]'>nora</span></span>
            <p className='text-[#4a5568] text-xs'>© 2026 Coggnora. All rights reserved.</p>
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

        {/* Legal links — now real routes */}
        <div className='flex items-center gap-6'>
          <Link
            to='/privacy'
            className='text-[#A0ACC2] hover:text-white text-sm transition-colors'
          >
            Privacy Policy
          </Link>
          <Link
            to='/terms'
            className='text-[#A0ACC2] hover:text-white text-sm transition-colors'
          >
            Terms &amp; Conditions
          </Link>
          <Link
            to='/licenses'
            className='text-[#A0ACC2] hover:text-white text-sm transition-colors'
          >
            Third-Party Licenses
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
