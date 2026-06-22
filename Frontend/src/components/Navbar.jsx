import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <>
      <nav className='px-8 py-4 flex justify-between items-center'>
        {/* Logo */}
        <div className='flex items-center gap-3'>
          <div className='w-9 h-9 rounded-lg flex items-center justify-center shadow-[0_0_16px_rgba(0,245,212,0.5)]'>
            <img src={logo} alt="FocusGuard Logo" className='rounded-lg' />
          </div>
          <span className='font-bold text-xl text-white tracking-tight'>Focus<span className='text-[#00f5d4]'>Guard</span></span>
        </div>

        {/* Nav Links */}
        <div className='hidden md:flex items-center gap-8'>
          <a href="#features" className='text-[#A0ACC2] hover:text-white text-sm font-medium transition-colors'>Features</a>
          <a href="#how-it-works" className='text-[#A0ACC2] hover:text-white text-sm font-medium transition-colors'>How it works</a>
          <a
            href="mailto:ankitjaat00010@gmail.com"
            className='text-[#A0ACC2] hover:text-white text-sm font-medium transition-colors'
          >
            Support
          </a>
          <a
            href="/api/download/windows"
            className='bg-[#00f5d4] text-[#071428] text-sm font-bold px-5 py-2 rounded-lg hover:bg-[#00d4b8] transition-colors shadow-[0_0_16px_rgba(0,245,212,0.35)]'
          >
            Download
          </a>
        </div>
      </nav>
      <div className='h-px bg-linear-to-r from-transparent via-[#263143] to-transparent'></div>
    </>
  )
}

export default Navbar
