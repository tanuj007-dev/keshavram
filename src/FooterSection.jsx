import React, { useState } from 'react';
export default function FooterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };
  const pagesLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Courses', href: '#' },
    { name: 'Business Support', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Contact', href: '#' }
  ];
  const servicesLinks = [
    { name: 'Advertising & Marketing', href: '#' },
    { name: 'Bank & Financial', href: '#' },
    { name: 'Booking & Rental', href: '#' },
    { name: 'Certificate & Document', href: '#' },
    { name: 'Development & Software', href: '#' },
    { name: 'Graphic Design & Images', href: '#' },
    { name: 'Legal & Relaunch', href: '#' },
    { name: 'Onboarding & Registration', href: '#' }
  ];
  const supportLinks = [
    { name: 'FAQ', href: '#' },
    { name: 'Service Request', href: '#' },
    { name: 'Course Guidance', href: '#' },
    { name: 'Customer Help', href: '#' },
    { name: 'Payment', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' }
  ];
  return (
    <footer className="bg-[#121212] text-[#c4c4c4] font-sans antialiased">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Main Grid: Left Side (Brand & Details) & Right Side (Links & Newsletter) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column (Brand info) - spans 5 columns on large screens */}
          <div className="lg:col-span-5 flex flex-col justify-between pr-0 lg:pr-12">
            <div>
              {/* Brand Typography */}
              <h2 className="text-white text-3xl md:text-[38px] font-normal leading-[1.15] tracking-tight font-sans mb-10">
                Keshav Ram Enterprises
              </h2>
              {/* Headquarter Details */}
              <div className="mb-8">
                <span className="block text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-[#8e8e8e] uppercase mb-3.5">
                  HEADQUARTER
                </span>
                <address className="not-italic text-[13.5px] md:text-[14px] text-[#aeaeae] leading-[1.65] font-light space-y-1">
                  <p>Ground Floor, C-309, Balbir</p>
                  <p>Vihar, Kirari Suleman Nagar,</p>
                  <p>Delhi, 110086</p>
                </address>
              </div>
              {/* Email Details */}
              <div className="mb-10">
                <span className="block text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-[#8e8e8e] uppercase mb-3">
                  EMAIL
                </span>
                <a 
                  href="mailto:info@keshavramenterprises.in" 
                  className="text-[13.5px] md:text-[14px] text-[#aeaeae] hover:text-white transition-colors duration-200 font-light"
                >
                  info@keshavramenterprises.in
                </a>
              </div>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-6 mt-2">
              {/* Facebook */}
              <a 
                href="#" 
                aria-label="Facebook" 
                className="text-[#8e8e8e] hover:text-white transition-colors duration-200"
              >
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.88.1-1 1-1h2V2h-3C9.78 2 9 3.5 9 5.5V8z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a 
                href="#" 
                aria-label="LinkedIn" 
                className="text-[#8e8e8e] hover:text-white transition-colors duration-200"
              >
                <svg className="w-[17px] h-[17px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7h-3.56V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a 
                href="#" 
                aria-label="Instagram" 
                className="text-[#8e8e8e] hover:text-white transition-colors duration-200"
              >
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>
          {/* Right Section (Links columns + Newsletter) - spans 7 columns on large screens with left vertical divider */}
          <div className="lg:col-span-7 lg:border-l lg:border-neutral-800 lg:pl-12 flex flex-col justify-between">
            {/* Links Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              
              {/* Pages Column */}
              <div>
                <h3 className="text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-[#8e8e8e] uppercase mb-4 md:mb-5">
                  PAGES
                </h3>
                <ul className="space-y-2.5">
                  {pagesLinks.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href} 
                        className="text-[13.5px] md:text-[14px] text-[#aeaeae] hover:text-white transition-colors duration-200 font-light"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Services Column */}
              <div>
                <h3 className="text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-[#8e8e8e] uppercase mb-4 md:mb-5">
                  SERVICES
                </h3>
                <ul className="space-y-2.5">
                  {servicesLinks.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href} 
                        className="text-[13.5px] md:text-[14px] text-[#aeaeae] hover:text-white transition-colors duration-200 font-light"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Support Column */}
              <div>
                <h3 className="text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-[#8e8e8e] uppercase mb-4 md:mb-5">
                  SUPPORT
                </h3>
                <ul className="space-y-2.5">
                  {supportLinks.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href} 
                        className="text-[13.5px] md:text-[14px] text-[#aeaeae] hover:text-white transition-colors duration-200 font-light"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Newsletter Subscription Container */}
            <div className="mt-12 lg:mt-16 pt-8 border-t border-neutral-800 lg:border-t-0 lg:pt-0">
              <h3 className="text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-[#8e8e8e] uppercase mb-3.5">
                NEWSLETTER
              </h3>
              <p className="text-[13.5px] md:text-[14px] text-[#aeaeae] font-light leading-relaxed mb-5 max-w-[500px]">
                Get service updates, course guidance, and business support tips directly in your inbox.
              </p>
              {/* Form Input */}
              <form onSubmit={handleSubscribe} className="relative flex items-center max-w-[500px]">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  required
                  className="w-full bg-white text-neutral-900 placeholder-neutral-500 text-[14px] pl-6 pr-16 py-4.5 rounded-full outline-none focus:ring-2 focus:ring-neutral-700 transition-all duration-200"
                  style={{ paddingRight: '56px', paddingTop: '14px', paddingBottom: '14px' }}
                />
                <button 
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="absolute right-2 w-[42px] h-[42px] flex items-center justify-center bg-[#1b6b47] hover:bg-[#145336] text-white rounded-full transition-all duration-300 shadow-sm hover:scale-105 active:scale-95 group cursor-pointer"
                >
                  {isSubmitted ? (
                    <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  )}
                </button>
              </form>
              {isSubmitted && (
                <p className="text-emerald-500 text-xs mt-2.5 font-medium animate-fadeIn">
                  Thank you! You've successfully subscribed to our newsletter.
                </p>
              )}
            </div>
          </div>
        </div>
        {/* Divider Line */}
        <div className="border-t border-neutral-800 mt-16 pt-8 mb-6">
          <p className="text-[13.5px] md:text-[14px] text-white font-medium">
            © 2026 Keshav Ram Enterprises®, All rights reserved.
          </p>
        </div>
        {/* Disclaimer / Lower Description */}
        <div>
          <p className="text-[11px] md:text-[11.5px] text-[#606060] leading-[1.8] font-light max-w-none text-justify">
            Keshav Ram Enterprises is a multi-service support platform helping individuals, students, startups, vendors, and businesses complete essential work across services, courses, documents, registration, marketing, finance, legal support, software, design, listing, and business setup. Our process is built around clear guidance, practical support, and reliable completion from enquiry to delivery.
          </p>
        </div>
      </div>
    </footer>
  );
}