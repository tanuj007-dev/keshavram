import React from 'react';

/**
 * HeroSection Component
 * A premium, modern, and fully mobile-responsive SaaS hero section.
 * Designed with a luxury corporate feel, a dark black background, and smooth hover effects.
 * 
 * Drop-in ready for any project using React & Tailwind CSS.
 */
export default function HeroSection1() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#0A0A0A] px-4 py-10 sm:px-6 sm:py-12 md:px-12 lg:px-24 lg:py-14">
      {/* Premium subtle background glow for visual depth */}
      <div 
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_65%)]" 
        aria-hidden="true" 
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Uppercase Tagline */}
        <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em] text-[#A3A3A3] select-none sm:mb-5 sm:text-xs">
          TRUSTED PARTNER FOR SERVICES, COURSES, DOCUMENTS, AND BUSINESS SUPPORT
        </p>

        {/* Heading - Scales smoothly across mobile, tablet, and desktop */}
        <h1 className="mb-6 font-heading text-3xl font-bold leading-[1.15] tracking-tight text-white sm:mb-8 sm:text-5xl md:text-6xl lg:text-7xl">
          Ready to start your <br className="hidden sm:inline" />
          service journey with us?
        </h1>

        {/* CTA Button with slide-right arrow animation on hover */}
        <button
          type="button"
          onClick={() => {
            console.log('CTA Clicked: Start a free consultation');
          }}
          className="group flex items-center justify-center gap-3 bg-white text-black font-semibold text-xs sm:text-sm tracking-[0.1em] px-8 py-4 sm:px-10 sm:py-5 rounded-full hover:bg-[#F3F3F3] active:scale-[0.98] transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.08)] hover:shadow-[0_0_30px_rgba(255,255,255,0.18)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0A0A0A]"
          aria-label="Start a free consultation"
        >
          <span>START A FREE CONSULTATION</span>
          {/* Custom inline SVG arrow matches the original design */}
          <svg 
            className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth="2.5"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </section>
  );
}