import React from "react";
import { Grid2x2, Laptop, ArrowRight } from "lucide-react";
import Working from "../pages/working";
import Cards from "../Card/cards";
import appPreview from "../assets/pic.jpg";


const Entry = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-8 py-24 flex flex-col md:flex-row items-center gap-16">
        {/* Left: Text */}
        <div className="flex-1 min-w-0">
          <div className="inline-flex items-center gap-2 bg-[#0f2040] border border-[#263143] text-[#00f5d4] text-xs font-semibold px-3 py-1.5 rounded-full mb-6 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f5d4] animate-pulse"></span>
            Now available for Windows &amp; macOS
          </div>
          <h1 className="text-6xl font-extrabold text-white leading-tight tracking-tight">
            Your Sanctuary<br />
            for <span className="text-[#00f5d4]">Deep Work</span>
          </h1>
          <p className="mt-6 text-[#A0ACC2] text-lg leading-relaxed max-w-md">
            Block distractions. Shield your focus. Create an environment where productivity thrives — effortlessly.
          </p>
          <div id="download" className="mt-10 flex flex-col sm:flex-row gap-4">
            {/* ── Windows Download Button ── */}
            <a
              href="/api/download/windows"
              className="inline-flex items-center justify-center gap-2.5 bg-[#00f5d4] text-[#071428] font-bold px-6 py-3.5 rounded-xl hover:bg-[#00d4b8] transition-all shadow-[0_0_24px_rgba(0,245,212,0.4)] text-sm"
            >
              <Grid2x2 className="w-4 h-4" />
              Download for Windows
            </a>

            {/* ── macOS Download Button ── */}
            <a
              href="/api/download/mac"
              className="inline-flex items-center justify-center gap-2.5 text-[#D8E3FB] font-bold px-6 py-3.5 border border-[#263143] rounded-xl hover:border-[#00f5d4] hover:text-[#00f5d4] transition-all text-sm"
            >
              <Laptop className="w-4 h-4" />
              Download for macOS
            </a>
          </div>
          <p className="mt-5 text-[#4a5568] text-xs">Free to start · No account required</p>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-linear-to-br from-[#00f5d4]/20 to-transparent blur-2xl"></div>
            <img
              src={appPreview}
              className="relative rounded-2xl w-full max-w-md object-cover shadow-2xl border border-[#263143]"
              alt="FocusGuard app preview"
            />
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="max-w-4xl mx-auto px-8 py-10">
        <div id="features" className="grid grid-cols-3 gap-6 text-center border-y border-[#1a2d4a] py-10">
          {[
            { value: "500+", label: "Active users" },
            { value: "4.9★", label: "Average rating" },
            { value: "99%",  label: "Focus success rate" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-3xl font-extrabold text-white">{stat.value}</p>
              <p className="text-[#A0ACC2] text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Capabilities */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <p className="text-[#00F5D4] text-xs font-bold tracking-widest uppercase text-center mb-3">Capabilities</p>
        <h2 className="text-4xl font-extrabold text-white text-center tracking-tight">
          Built for professional workflow
        </h2>
        <Cards />
      </div>

      <div className="max-w-7xl mx-auto px-8">
        <div className="h-px bg-linear-to-r from-transparent via-[#263143] to-transparent"></div>
      </div>
      <Working />
    </div>
  );
};

export default Entry;
