import React from 'react';
import { 
  Compass, 
  Megaphone, 
  MapPin, 
  Eye, 
  FileText, 
  TrendingUp, 
  ArrowUpRight 
} from 'lucide-react';

export default function OfferingSection() {
  const offerings = [
    {
      id: '01',
      title: 'CAMPAIGN PLANNING',
      description: 'Plan marketing activities with clear goals, audience direction, and promotional structure.',
      icon: Compass,
      glowColor: 'rgba(59, 130, 246, 0.15)', // Blue glow
      accentClass: 'text-blue-400',
      borderHoverClass: 'hover:border-blue-500/30'
    },
    {
      id: '02',
      title: 'SOCIAL MEDIA PROMOTION',
      description: 'Create and manage promotion ideas for platforms like Facebook, Instagram, LinkedIn, and WhatsApp.',
      icon: Megaphone,
      glowColor: 'rgba(168, 85, 247, 0.15)', // Purple glow
      accentClass: 'text-purple-400',
      borderHoverClass: 'hover:border-purple-500/30'
    },
    {
      id: '03',
      title: 'LOCAL ADVERTISING',
      description: 'Support local business promotion through targeted visibility, offline-online campaigns, and customer reach.',
      icon: MapPin,
      glowColor: 'rgba(16, 185, 129, 0.15)', // Emerald glow
      accentClass: 'text-emerald-400',
      borderHoverClass: 'hover:border-emerald-500/30'
    },
    {
      id: '04',
      title: 'BRAND VISIBILITY',
      description: 'Improve how your business looks, communicates, and appears across customer touchpoints.',
      icon: Eye,
      glowColor: 'rgba(245, 158, 11, 0.15)', // Amber glow
      accentClass: 'text-amber-400',
      borderHoverClass: 'hover:border-amber-500/30'
    },
    {
      id: '05',
      title: 'CONTENT DIRECTION',
      description: 'Plan captions, service messages, offers, posters, and promotional content for better engagement.',
      icon: FileText,
      glowColor: 'rgba(6, 182, 212, 0.15)', // Cyan glow
      accentClass: 'text-cyan-400',
      borderHoverClass: 'hover:border-cyan-500/30'
    },
    {
      id: '06',
      title: 'LEAD SUPPORT',
      description: 'Help your business attract enquiries and guide customers toward taking action.',
      icon: TrendingUp,
      glowColor: 'rgba(99, 102, 241, 0.15)', // Indigo glow
      accentClass: 'text-indigo-400',
      borderHoverClass: 'hover:border-indigo-500/30'
    }
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#0A0A0A] py-20 px-6 sm:px-12 md:px-24 flex flex-col justify-center overflow-hidden">
      {/* Background ambient light */}
      <div 
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.015)_0%,transparent_70%)]" 
        aria-hidden="true"
      />
      
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Header Section */}
        <header className="mb-16 md:mb-20 text-center flex flex-col items-center">
          <p className="text-[10px] sm:text-xs tracking-[0.3em] font-semibold text-neutral-500 uppercase select-none mb-3">
            OFFERING
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            What we help you with
          </h2>
        </header>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {offerings.map((offering) => {
            const Icon = offering.icon;
            return (
              <article
                key={offering.id}
                className={`group relative overflow-hidden rounded-2xl border border-neutral-800/60 bg-[#0E0E11]/40 p-8 backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-[#13131A] ${offering.borderHoverClass}`}
                style={{
                  '--glow-color': offering.glowColor
                }}
              >
                {/* Interactive Radial Glow Effect */}
                <div 
                  className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${offering.glowColor} 0%, transparent 60%)`
                  }}
                  aria-hidden="true"
                />

                {/* Card Header (Icon and Arrow) */}
                <div className="flex justify-between items-center mb-8">
                  <div className={`p-3 rounded-xl bg-neutral-900 border border-neutral-800/80 group-hover:border-neutral-700 transition-colors duration-300 ${offering.accentClass}`}>
                    <Icon className="w-6 h-6 transform group-hover:rotate-6 transition-transform duration-300" />
                  </div>
                  <span className="text-neutral-700 group-hover:text-neutral-500 transition-colors duration-300">
                    <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </span>
                </div>

                {/* Number & Title */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-mono text-xs font-semibold text-neutral-600 tracking-wider">
                    {offering.id} /
                  </span>
                  <h3 className="text-sm font-bold tracking-[0.1em] text-white uppercase">
                    {offering.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal group-hover:text-neutral-300 transition-colors duration-300">
                  {offering.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
