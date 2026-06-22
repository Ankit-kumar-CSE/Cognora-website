import React from "react";
import { Download, Settings, Zap } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Download,
    title: "Download Installer",
    desc: "Grab the lightweight client for your operating system — Windows or macOS.",
  },
  {
    num: "02",
    icon: Settings,
    title: "Install with One Click",
    desc: "Zero-config setup gets you ready to block distractions immediately.",
  },
  {
    num: "03",
    icon: Zap,
    title: "Unlock Your Productivity",
    desc: "Launch your first session and experience true deep-work flow state.",
    highlight: true,
  },
];

const Working = () => {
  return (
    <section id="how-it-works" className="py-24 px-8">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#00F5D4] text-xs font-bold tracking-widest uppercase text-center mb-3">How It Works</p>
        <h2 className="text-4xl font-extrabold text-white text-center tracking-tight mb-16">
          Start focusing in minutes
        </h2>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-8 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-linear-to-r from-[#263143] via-[#00f5d4]/40 to-[#263143]"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={i} className="flex flex-col items-center text-center">
                  {/* Step icon */}
                  <div className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${
                    step.highlight
                      ? 'bg-[#00F5D4] shadow-[0_0_30px_rgba(0,245,212,0.5)]'
                      : 'bg-[#0d1f38] border-2 border-[#263143]'
                  }`}>
                    <Icon className={`w-7 h-7 ${step.highlight ? 'text-[#071428]' : 'text-[#00F5D4]'}`} />
                  </div>

                  <span className={`text-xs font-bold tracking-widest mb-2 ${step.highlight ? 'text-[#00F5D4]' : 'text-[#4a5568]'}`}>
                    STEP {step.num}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-[#A0ACC2] text-sm leading-relaxed max-w-xs">{step.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#download"
            className="inline-flex items-center gap-2 bg-[#00f5d4] text-[#071428] font-bold px-8 py-3.5 rounded-xl hover:bg-[#00d4b8] transition-all shadow-[0_0_24px_rgba(0,245,212,0.4)] text-sm"
          >
            Get Started Free
          </a>
        </div>
      </div>
    </section>
  );
};

export default Working;

