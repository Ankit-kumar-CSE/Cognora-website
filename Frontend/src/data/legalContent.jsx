//
// Presentational components for rendering each legal document.
//
// Data + constants live in ./legalData.js (pure data, no JSX) so this file
// exports only components — which keeps React Fast Refresh happy.
//

import { LICENSE_COLOR } from './legalData'

export const TermsContent = ({ data }) => (
  <div className="space-y-6">
    {data.sections.map((s, i) => (
      <div key={i} className="space-y-2">
        {s.heading && (
          <h3 className="text-[#00f5d4] font-semibold text-base border-b border-[#1a2d4a] pb-2">{s.heading}</h3>
        )}
        {s.body && <p className="text-[#a0acc2] text-sm leading-relaxed">{s.body}</p>}
        {s.highlights && s.highlights.map((h, j) => (
          <span key={j} className="inline-block text-xs font-semibold text-[#00f5d4] bg-[#00f5d4]/10 border border-[#00f5d4]/20 px-2 py-0.5 rounded-full">{h}</span>
        ))}
        {s.plans && (
          <div className="grid grid-cols-2 gap-3 mt-2">
            {s.plans.map((p, j) => (
              <div key={j} className="bg-[#0d1f3c] border border-[#1a2d4a] rounded-xl p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white font-semibold text-sm">{p.name}</span>
                  <span className="text-[#00f5d4] font-bold text-lg">{p.price}</span>
                </div>
                <p className="text-[#a0acc2] text-xs">{p.desc}</p>
              </div>
            ))}
          </div>
        )}
        {s.note && <p className="text-[#4a5568] text-xs italic mt-1">{s.note}</p>}
        {s.bullets && (
          <ul className="space-y-1 mt-1">
            {s.bullets.map((b, j) => (
              <li key={j} className="flex items-start gap-2 text-[#a0acc2] text-sm">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00f5d4] flex-shrink-0"></span>
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </div>
)

export const PrivacyContent = ({ data }) => (
  <div className="space-y-6">
    {data.sections.map((s, i) => (
      <div key={i} className="space-y-2">
        {s.heading && (
          <h3 className="text-[#00f5d4] font-semibold text-base border-b border-[#1a2d4a] pb-2">{s.heading}</h3>
        )}
        {s.body && s.body.split('\n\n').map((para, j) => (
          <p key={j} className="text-[#a0acc2] text-sm leading-relaxed">{para}</p>
        ))}
        {s.bullets && (
          <ul className="space-y-1">
            {s.bullets.map((b, j) => (
              <li key={j} className="flex items-start gap-2 text-[#a0acc2] text-sm">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00f5d4] flex-shrink-0"></span>
                {b}
              </li>
            ))}
          </ul>
        )}
        {s.subSections && s.subSections.map((ss, j) => (
          <div key={j} className="bg-[#0d1f3c] border border-[#1a2d4a] rounded-xl p-4 space-y-2 mt-2">
            <h4 className="text-white font-semibold text-sm">{ss.subHeading}</h4>
            {ss.body && <p className="text-[#a0acc2] text-sm leading-relaxed">{ss.body}</p>}
            {ss.bullets && (
              <ul className="space-y-1">
                {ss.bullets.map((b, k) => (
                  <li key={k} className="flex items-start gap-2 text-[#a0acc2] text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00f5d4]/70 flex-shrink-0"></span>
                    {b}
                  </li>
                ))}
              </ul>
            )}
            {ss.note && <p className="text-[#4a5568] text-xs italic border-t border-[#1a2d4a] pt-2 mt-2">{ss.note}</p>}
          </div>
        ))}
        {s.twoCol && (
          <div className="grid grid-cols-2 gap-3 mt-2">
            {[s.twoCol.left, s.twoCol.right].map((col, j) => (
              <div key={j} className="bg-[#0d1f3c] border border-[#1a2d4a] rounded-xl p-4">
                <p className="text-white font-semibold text-xs mb-2">{col.label}</p>
                <ul className="space-y-1">
                  {col.items.map((item, k) => (
                    <li key={k} className="flex items-start gap-2 text-[#a0acc2] text-xs">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[#00f5d4]/60 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    ))}
  </div>
)

export const LicensesContent = ({ data }) => (
  <div className="space-y-4">
    <p className="text-[#a0acc2] text-sm leading-relaxed">{data.intro}</p>
    <div className="space-y-3">
      {data.libs.map((lib, i) => (
        <div key={i} className="bg-[#0d1f3c] border border-[#1a2d4a] rounded-xl p-4 hover:border-[#00f5d4]/30 transition-colors">
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="text-white font-semibold text-sm">{lib.name}</span>
              {lib.devOnly && (
                <span className="text-xs text-[#fbbf24] bg-[#fbbf24]/10 border border-[#fbbf24]/20 px-2 py-0.5 rounded-full">dev only</span>
              )}
            </div>
            <div className="flex items-center gap-2">
              {lib.license && (
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${LICENSE_COLOR[lib.license] || 'text-[#a0acc2] bg-[#1a2d4a] border border-[#1a2d4a]'}`}>
                  {lib.license}
                </span>
              )}
              <a href={lib.url} target="_blank" rel="noopener noreferrer" className="text-[#00f5d4] text-xs hover:underline">
                Website ↗
              </a>
            </div>
          </div>
          <p className="text-[#a0acc2] text-xs mt-2 leading-relaxed">{lib.purpose}</p>
          {lib.copyright && <p className="text-[#4a5568] text-xs mt-1">{lib.copyright}</p>}
        </div>
      ))}
    </div>
    <div className="bg-[#0d1f3c] border border-[#1a2d4a] rounded-xl p-4 mt-2">
      <h4 className="text-white font-semibold text-sm mb-2">Additional Dependencies</h4>
      <p className="text-[#a0acc2] text-xs leading-relaxed">
        Coggnora also includes numerous indirect (transitive) dependencies installed by npm, distributed under various open-source licenses including MIT, BSD, BSD-2-Clause, BSD-3-Clause, ISC, Apache 2.0, and others. All third-party libraries remain the property of their respective copyright holders.
      </p>
    </div>
    <p className="text-[#4a5568] text-xs mt-4">© 2026 Coggnora. All rights reserved. Third-party trademarks, logos, software, and copyrights remain the property of their respective owners.</p>
  </div>
)
