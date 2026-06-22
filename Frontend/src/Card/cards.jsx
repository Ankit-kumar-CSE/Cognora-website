import React from 'react'
import { Shield, Timer, ChartNoAxesCombined } from 'lucide-react'

const card = [
  {
    icon: Shield,
    heading: 'Distraction Shielding',
    para: 'Precision blocking of websites and desktop apps. Create custom blacklists and whitelists to secure your focus zone.',
    color: 'from-[#00f5d4]/20 to-transparent'
  },
  {
    icon: Timer,
    heading: 'Focus Timer',
    para: 'Highly customizable Pomodoro and flow-based sessions. Integrated desktop notifications and persistent floating timer.',
    color: 'from-[#6366f1]/20 to-transparent'
  },
  {
    icon: ChartNoAxesCombined,
    heading: 'Insights & Analytics',
    para: 'Beautiful charts showing your focus trends over time. Identify your most productive hours and optimize your schedule.',
    color: 'from-[#f59e0b]/20 to-transparent'
  }
]

const Cards = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
      {card.map((c, index) => {
        const Icon = c.icon
        return (
          <div
            key={index}
            className='group relative rounded-2xl border border-[#263143] bg-[#0d1f38] p-6 hover:border-[#00f5d4]/50 transition-all duration-300 overflow-hidden'
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
            <div className='relative z-10'>
              <div className='w-12 h-12 rounded-xl bg-[#00F5D4]/10 border border-[#00F5D4]/20 flex items-center justify-center mb-5 group-hover:bg-[#00F5D4]/20 transition-colors'>
                <Icon className='w-6 h-6 text-[#00F5D4]' />
              </div>
              <h2 className='text-lg font-bold text-white mb-2'>{c.heading}</h2>
              <p className='text-sm text-[#A0ACC2] leading-relaxed'>{c.para}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Cards
