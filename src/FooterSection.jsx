import { useState } from 'react'



function ChevronIcon({ open }) {

  return (

    <svg

      className={`h-4 w-4 shrink-0 text-[#8e8e8e] transition-transform duration-200 lg:hidden ${open ? 'rotate-180' : ''}`}

      fill="none"

      stroke="currentColor"

      strokeWidth="2"

      viewBox="0 0 24 24"

      aria-hidden="true"

    >

      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />

    </svg>

  )

}



function LinkColumn({ title, links }) {

  const [open, setOpen] = useState(false)



  return (

    <div className="border-b border-neutral-800 lg:border-0">

      <button

        type="button"

        onClick={() => setOpen((v) => !v)}

        className="flex w-full items-center justify-between py-3.5 text-left lg:pointer-events-none lg:cursor-default lg:py-0"

        aria-expanded={open}

      >

        <h3 className="font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8e8e8e] lg:mb-5 lg:text-[13px]">

          {title}

        </h3>

        <ChevronIcon open={open} />

      </button>

      <ul className={`space-y-2 pb-3 ${open ? 'block' : 'hidden'} lg:block lg:pb-0 lg:space-y-2.5`}>

        {links.map((link) => (

          <li key={link.name}>

            <a

              href={link.href}

              className="text-[13px] font-light text-[#d4d4d4] transition-colors duration-200 hover:text-white lg:text-[14px] lg:text-white"

            >

              {link.name}

            </a>

          </li>

        ))}

      </ul>

    </div>

  )

}



export default function FooterSection() {

  const [email, setEmail] = useState('')

  const [isSubmitted, setIsSubmitted] = useState(false)



  const handleSubscribe = (e) => {

    e.preventDefault()

    if (email.trim()) {

      setIsSubmitted(true)

      setTimeout(() => {

        setIsSubmitted(false)

        setEmail('')

      }, 3000)

    }

  }



  const pagesLinks = [

    { name: 'Home', href: '#' },

    { name: 'About', href: '#about' },

    { name: 'Services', href: '#services' },

    { name: 'Courses', href: '#courses' },

    { name: 'Business Support', href: '#' },

    { name: 'Documentation', href: '#' },

    { name: 'Contact', href: '#' },

  ]



  const servicesLinks = [

    { name: 'Advertising & Marketing', href: '#' },

    { name: 'Bank & Financial', href: '#' },

    { name: 'Booking & Rental', href: '#' },

    { name: 'Certificate & Document', href: '#' },

    { name: 'Development & Software', href: '#' },

    { name: 'Graphic Design & Images', href: '#' },

    { name: 'Legal & Relaunch', href: '#' },

    { name: 'Onboarding & Registration', href: '#' },

  ]



  const supportLinks = [

    { name: 'FAQ', href: '#faq' },

    { name: 'Service Request', href: '#' },

    { name: 'Course Guidance', href: '#' },

    { name: 'Customer Help', href: '#' },

    { name: 'Payment', href: '#' },

    { name: 'Privacy Policy', href: '#' },

    { name: 'Terms & Conditions', href: '#' },

  ]



  const linkColumns = [

    { title: 'Pages', links: pagesLinks },

    { title: 'Services', links: servicesLinks },

    { title: 'Support', links: supportLinks },

  ]



  return (

    <footer className="bg-black font-sans text-[#a3a3a3] antialiased">

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-24">

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-0">

          {/* Left — brand & contact */}

          <div className="border-b border-neutral-800 pb-5 text-center lg:col-span-5 lg:border-b-0 lg:pr-12 lg:pb-0 lg:text-left">

            <span className="mb-5 block font-heading text-[22px] font-semibold leading-[1.15] tracking-tight text-white sm:text-[26px] lg:mb-10 lg:text-[48px]">

              Keshav Ram Enterprises

            </span>



            <div className="mb-5 lg:mb-8">

              <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8e8e8e] lg:mb-3 lg:text-[12px]">

                Headquarter

              </span>

              <address className="text-[13px] not-italic leading-[1.6] font-light text-[#d4d4d4] lg:hidden">

                Ground Floor, C-309, Balbir Vihar, Kirari Suleman Nagar, Delhi, 110086

              </address>

              <address className="hidden space-y-0.5 text-[13.5px] not-italic leading-[1.7] font-light text-white lg:block lg:text-[14px]">

                <p>Ground Floor, C-309, Balbir</p>

                <p>Vihar, Kirari Suleman Nagar,</p>

                <p>Delhi, 110086</p>

              </address>

            </div>



            <div>

              <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8e8e8e] lg:mb-3 lg:text-[11px]">

                Email

              </span>

              <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:items-center lg:justify-start lg:gap-6">

                <a

                  href="mailto:info@keshavramenterprises.in"

                  className="inline-block break-all text-[13px] font-light text-[#d4d4d4] transition-colors duration-200 hover:text-white lg:break-normal lg:text-[14px] lg:text-white"

                >

                  info@keshavramenterprises.in

                </a>

                <div className="flex items-center gap-5 lg:gap-7">

                  <a

                    href="#"

                    aria-label="Facebook"

                    className="text-[#8e8e8e] transition-colors duration-200 hover:text-white lg:text-white"

                  >

                    <svg className="h-[16px] w-[16px] lg:h-[18px] lg:w-[18px]" fill="currentColor" viewBox="0 0 24 24">

                      <path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.88.1-1 1-1h2V2h-3C9.78 2 9 3.5 9 5.5V8z" />

                    </svg>

                  </a>

                  <a

                    href="#"

                    aria-label="LinkedIn"

                    className="text-[#8e8e8e] transition-colors duration-200 hover:text-white lg:text-white"

                  >

                    <svg className="h-[15px] w-[15px] lg:h-[17px] lg:w-[17px]" fill="currentColor" viewBox="0 0 24 24">

                      <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7h-3.56V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z" />

                    </svg>

                  </a>

                  <a

                    href="#"

                    aria-label="Instagram"

                    className="text-[#8e8e8e] transition-colors duration-200 hover:text-white lg:text-white"

                  >

                    <svg

                      className="h-[16px] w-[16px] lg:h-[18px] lg:w-[18px]"

                      fill="none"

                      stroke="currentColor"

                      strokeWidth="2.25"

                      strokeLinecap="round"

                      strokeLinejoin="round"

                      viewBox="0 0 24 24"

                    >

                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />

                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />

                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />

                    </svg>

                  </a>

                </div>

              </div>

            </div>

          </div>



          {/* Right — links & newsletter */}

          <div className="flex flex-col justify-between lg:col-span-7 lg:border-l lg:border-neutral-800 lg:pl-12">

            <div className="lg:grid lg:grid-cols-3 lg:gap-6">

              {linkColumns.map((column) => (

                <LinkColumn key={column.title} title={column.title} links={column.links} />

              ))}

            </div>



            <div className="mt-5 border-t border-neutral-800 pt-5 text-center lg:mt-14 lg:border-t-0 lg:pt-0 lg:text-left">

              <h3 className="mb-2 font-heading text-[16px] font-semibold uppercase tracking-[0.2em] text-[#8e8e8e] lg:mb-3.5 lg:text-[16px]">

                Newsletter

              </h3>

              <p className="mx-auto mb-4 max-w-[500px] text-[12px] font-light leading-relaxed text-[#d4d4d4] sm:text-[13.5px] lg:mx-0 lg:mb-5 lg:text-[14px] lg:text-white">

                Get service updates, course guidance, and business support tips directly in your

                inbox.

              </p>



              <form onSubmit={handleSubscribe} className="relative mx-auto w-full mt-5 max-w-[500px] lg:mx-0">

                <input

                  type="email"

                  value={email}

                  onChange={(e) => setEmail(e.target.value)}

                  placeholder="Enter your email"

                  required

                  className="w-full rounded-full bg-white py-3 pl-5 pr-14 text-[13px] text-neutral-900 outline-none placeholder:text-neutral-500 focus:ring-2 focus:ring-neutral-700 sm:py-3.5 sm:pl-6 sm:pr-16 sm:text-[14px]"

                />

                <button

                  type="submit"

                  aria-label="Subscribe to newsletter"

                  className="absolute right-1.5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#1a6b45] text-white shadow-sm transition-all duration-300 hover:bg-[#145336] active:scale-95 sm:h-[44px] sm:w-[44px]"

                >

                  {isSubmitted ? (

                    <svg

                      className="h-4 w-4 animate-bounce"

                      fill="none"

                      stroke="currentColor"

                      strokeWidth="2.5"

                      viewBox="0 0 24 24"

                    >

                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />

                    </svg>

                  ) : (

                    <svg

                      className="h-4 w-4 sm:h-5 sm:w-5"

                      fill="none"

                      stroke="currentColor"

                      strokeWidth="2.5"

                      viewBox="0 0 24 24"

                    >

                      <path

                        strokeLinecap="round"

                        strokeLinejoin="round"

                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"

                      />

                    </svg>

                  )}

                </button>

              </form>



              {isSubmitted && (

                <p className="mt-2 text-xs font-medium text-emerald-500">

                  Thank you! You&apos;ve successfully subscribed to our newsletter.

                </p>

              )}

            </div>

          </div>

        </div>



        <div className="mb-4 mt-6 border-t border-neutral-800 pt-5 text-center lg:mb-6 lg:mt-16 lg:pt-8 lg:text-left">

          <p className="text-[12px] font-medium text-white sm:text-[13.5px] lg:text-[14px]">

            © 2026 Keshav Ram Enterprises®, All rights reserved.

          </p>

        </div>



        <p className="text-center text-[10px] font-light leading-[1.65] text-[#606060] sm:text-[11px] sm:leading-[1.8] lg:text-left lg:text-[11.5px]">

          Keshav Ram Enterprises is a multi-service support platform helping individuals, students,

          startups, vendors, and businesses complete essential work across services, courses,

          documents, registration, marketing, finance, legal support, software, design, listing,

          and business setup. Our process is built around clear guidance, practical support, and

          reliable completion from enquiry to delivery.

        </p>

      </div>

    </footer>

  )

}

