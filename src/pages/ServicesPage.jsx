import { useState, useRef, useCallback, useEffect } from 'react'
import Navbar from '../components/Navbar'
import FooterSection from '../FooterSection'
import AdvertisingSection from '../components/AdvertisingSection'
import OfferingSection from '../components/OfferingSection'

const services = [
  {
    id: 'advertising',
    category: 'Service / Advertising',
    title: 'Advertising & Marketing\nSupport for Business Growth',
    description:
      'Promote your business with clear strategy, creative content, local visibility, and customer-focused campaigns designed to increase reach and enquiries.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 13V8.5L15 5V19L4 15.5V13ZM15 12H19L21.5 15.5V8.5L19 12H15Z" stroke="#1e4d2b" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'banking',
    category: 'Service / Finance',
    title: 'Bank & Financial\nProcess Coordination',
    description:
      'Manage banking support through account guidance, finance documents, payment setup, loan paperwork, and financial process coordination.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 13L12 8L20 13" stroke="#1e4d2b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 13V19M12 13V19M17 13V19M5 19H19" stroke="#1e4d2b" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'booking',
    category: 'Service / Booking',
    title: 'Booking & Rental\nReservation Support',
    description:
      'Simplify booking needs through rental coordination, reservation support, vendor communication, availability checks, and customer convenience planning.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="16" height="14" rx="2" stroke="#1e4d2b" strokeWidth="1.6" />
        <path d="M4 11H20M9 4V7M15 4V7" stroke="#1e4d2b" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'registration',
    category: 'Service / Registration',
    title: 'Onboarding & Business\nRegistration Support',
    description:
      'Start services smoothly through business registration, vendor onboarding, service enrollment, application support, and platform setup guidance.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="3.5" stroke="#1e4d2b" strokeWidth="1.6" />
        <path d="M5 21C5 17.5 8 15 12 15C16 15 19 17.5 19 21" stroke="#1e4d2b" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'development',
    category: 'Service / Development',
    title: 'Website & Software\nDevelopment Support',
    description:
      'Build digital solutions through website development, software support, automation setup, platform creation, and technical service assistance.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 9L5 12L8 15M16 9L19 12L16 15" stroke="#1e4d2b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.5 7L10.5 18" stroke="#1e4d2b" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'design',
    category: 'Service / Design',
    title: 'Graphic Design &\nCreative Visuals',
    description:
      'Create professional visuals through logo design, posters, banners, social media creatives, product images, and promotional graphics.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="7" stroke="#1e4d2b" strokeWidth="1.6" />
        <circle cx="9.5" cy="10.5" r="1.2" fill="#1e4d2b" />
        <circle cx="14.5" cy="10.5" r="1.2" fill="#1e4d2b" />
        <circle cx="12" cy="14" r="1.2" fill="#1e4d2b" />
      </svg>
    ),
  },
]

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8H13M13 8L9 4M13 8L9 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ServiceHero() {
  return (
    <section className="w-full bg-white px-5 pb-14 pt-16 sm:px-6 sm:pb-16 sm:pt-20 lg:pb-20 lg:pt-24">
      <div className="mx-auto max-w-4xl text-center">

        {/* Breadcrumb */}
        <p style={{ textAlign: 'center' }} className="mb-5 font-heading text-[11px] font-medium uppercase tracking-[0.22em] text-[#6b7280] sm:mb-6 sm:text-[12px]">
          Service / Advertising
        </p>

        {/* Main heading */}
        <h1 style={{ textAlign: 'center' }} className="mx-auto mb-5 w-full font-heading text-[38px] font-semibold leading-[1.08] tracking-[-0.03em] text-black sm:text-[54px] lg:text-[70px] lg:leading-[1.05]">
          Advertising &amp; Marketing Support for Business Growth
        </h1>

        {/* Description */}
        <p style={{ textAlign: 'center' }} className="mx-auto mb-9 max-w-[300px] font-paragraph text-[13px] leading-[1.65] text-[#6b7280] sm:mb-10 sm:max-w-[420px] sm:text-[14px] lg:mb-12 lg:max-w-[500px]">
          Promote your business with clear strategy, creative content, local visibility, and customer-focused campaigns designed to increase reach and enquiries.
        </p>

        {/* CTA row — button + trust badge side by side, centered */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">

          {/* Dark pill button */}
          <a
            href="#contact"
            id="service-hero-cta"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#111827] px-6 py-3.5 font-heading text-[10px] font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#1f2937] sm:px-8 sm:py-4 sm:text-[11px]"
          >
            Start a Free Consultation
            <ArrowIcon />
          </a>

          {/* Trust badge: avatar stack + two-line text */}
          <div className="flex items-center gap-3">
            {/* Overlapping avatar circles */}
            <div className="flex -space-x-3">
              <img
                src="/da8893b05e185584854da187463f9101564e7163.png"
                alt="Customer"
                className="h-10 w-10 rounded-full border-2 border-white object-cover object-top shadow-sm"
              />
              <img
                src="/33043647d50a3e523c727d9c0cde39224dea70eb.jpg"
                alt="Customer"
                className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm"
              />
              <img
                src="/b07a7b78d82ab231c051495734ed471714db807d.png"
                alt="Customer"
                className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm"
              />
            </div>

            {/* Text block: bold line + gray line */}
            <div className="text-left leading-tight">
              <p className="font-heading text-[12px] font-bold uppercase tracking-[0.1em] text-black sm:text-[13px]">
                Trusted by 40+
              </p>
              <p className="font-heading text-[10px] font-medium uppercase tracking-[0.1em] text-[#6b7280] sm:text-[11px]">
                Customers Across Services
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

function ServiceCard({ service }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-[#e8e8e8] bg-white p-5 sm:p-6 lg:p-7 transition-shadow hover:shadow-md">
      <div className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f0f7f2]">
        {service.icon}
      </div>
      <span className="mb-2 font-heading text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6b7280] sm:text-[11px]">
        {service.category}
      </span>
      <h3 className="mb-3 font-heading text-[17px] font-semibold leading-snug tracking-[-0.01em] !text-black sm:text-[19px] lg:text-[21px]">
        {service.title.split('\n').map((line, i) => (
          <span key={i}>
            {line}
            {i === 0 && <br />}
          </span>
        ))}
      </h3>
      <p className="mb-5 flex-1 font-paragraph text-[13px] leading-[1.65] text-[#6b7280] sm:text-[14px]">
        {service.description}
      </p>
      <a
        href={`#service-${service.id}`}
        className="inline-flex w-fit items-center gap-2 rounded-full border border-[#e8e8e8] px-4 py-2 font-heading text-[10px] font-medium uppercase tracking-[0.08em] text-black transition-colors hover:bg-[#f5f5f5] sm:text-[11px]"
      >
        Learn More
        <ArrowIcon />
      </a>
    </article>
  )
}

function ServicesGrid() {
  return (
    <section className="w-full bg-[#f9f9f9] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-12 lg:mb-14">
          <span className="mb-3 block font-heading text-[12px] font-semibold uppercase tracking-[0.2em] text-[#6b7280] sm:text-[13px]">
            What We Offer
          </span>
          <h2 className="mx-auto max-w-[18rem] font-heading font-semibold !text-black sm:max-w-2xl">
            All Services in One Place
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyChooseSection() {
  const points = [
    {
      title: 'One Platform, All Services',
      description: 'Access advertising, finance, courses, registration, design and more — in one place.',
      icon: '🎯',
    },
    {
      title: 'Guided from Start to Finish',
      description: 'Every service comes with step-by-step support so you always know what happens next.',
      icon: '🧭',
    },
    {
      title: 'Trusted by Growing Businesses',
      description: 'Hundreds of customers have successfully completed their work through our platform.',
      icon: '🏆',
    },
  ]

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-12">
          <span className="mb-3 block font-heading text-[12px] font-semibold uppercase tracking-[0.2em] text-[#6b7280] sm:text-[13px]">
            Why Choose Us
          </span>
          <h2 className="mx-auto max-w-[18rem] font-heading font-semibold !text-black sm:max-w-xl">
            Support That Works With You
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
          {points.map((point) => (
            <div key={point.title} className="flex flex-col items-center text-center sm:items-center">
              <span className="mb-4 text-3xl" aria-hidden="true">{point.icon}</span>
              <h3 className="mb-2 font-heading text-[16px] font-semibold !text-black sm:text-[17px]">
                {point.title}
              </h3>
              <p className="font-paragraph text-[13px] leading-relaxed text-[#6b7280] sm:text-[14px]">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesCTA() {
  return (
    <section className="w-full bg-[#0f1a2e] py-14 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8">
        <span className="mb-4 block font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9ca3af] sm:mb-5 sm:text-[12px]">
          Get Started
        </span>
        <h2 className="mb-5 font-heading font-semibold !text-white sm:mb-6">
          Ready to Get the Support You Need?
        </h2>
        <p className="mx-auto mb-8 max-w-[22rem] font-paragraph text-[14px] leading-[1.65] text-[#9ca3af] sm:max-w-lg sm:text-[15px] sm:mb-10">
          Book a free consultation and let our team guide you through the service that best fits your goals.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-3.5 font-heading text-[11px] font-medium uppercase tracking-[0.1em] text-[#0f1a2e] transition-opacity hover:opacity-90 sm:py-4"
        >
          Start a Free Consultation
          <ArrowIcon />
        </a>
      </div>
    </section>
  )
}

const showcaseSlides = [
  {
    id: 1,
    image: '/69b3294a98eb4a65742b1003_Vector.webp.png',
    tag: 'Digital Marketing',
    title: 'Campaign Planning & Analytics',
    description: 'Data-driven marketing dashboards to track reach, campaigns, and business performance in real time.',
  },
  {
    id: 2,
    image: '/Img_margin.png',
    tag: 'Design & Development',
    title: 'Website & Platform Setup',
    description: 'Professional websites and digital platforms built to support your business presence and online growth.',
  },
  {
    id: 3,
    image: '/69b32943ab468b75c402df49_Vector%20(2).webp.png',
    tag: 'Business Intelligence',
    title: 'Data Reporting & Insights',
    description: 'Visual reports and analytics support to help you understand your business numbers and next steps.',
  },
  {
    id: 4,
    image: '/69b32947adb60eb4647edebf_Vector%20(1).webp.png',
    tag: 'Social Media',
    title: 'Social Media & Content Growth',
    description: 'Grow your business across Instagram, Facebook, and more with targeted content and promotion strategies.',
  },
]

function WorkShowcaseSlider() {
  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToIndex = useCallback((index) => {
    const track = trackRef.current
    if (!track) return
    const slides = track.querySelectorAll('.showcase-slide')
    const target = slides[index]
    if (!target) return
    track.scrollTo({ left: target.offsetLeft, behavior: 'smooth' })
    setActiveIndex(index)
  }, [])

  const goNext = useCallback(() => {
    scrollToIndex(activeIndex >= showcaseSlides.length - 1 ? 0 : activeIndex + 1)
  }, [activeIndex, scrollToIndex])

  const goPrev = useCallback(() => {
    scrollToIndex(activeIndex <= 0 ? showcaseSlides.length - 1 : activeIndex - 1)
  }, [activeIndex, scrollToIndex])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return undefined
    const onScroll = () => {
      const slides = [...track.querySelectorAll('.showcase-slide')]
      if (!slides.length) return
      const center = track.scrollLeft + track.clientWidth / 2
      let closest = 0
      let closestDist = Infinity
      slides.forEach((slide, i) => {
        const dist = Math.abs((slide.offsetLeft + slide.offsetWidth / 2) - center)
        if (dist < closestDist) { closestDist = dist; closest = i }
      })
      setActiveIndex(closest)
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="w-full bg-[#f9f9f9] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-10 flex flex-col items-center text-center sm:mb-12">
          <span className="mb-3 block font-heading text-[12px] font-semibold uppercase tracking-[0.2em] text-[#6b7280] sm:text-[13px]">
            Our Work
          </span>
          <h2 className="mx-auto max-w-[18rem] font-heading font-semibold !text-black sm:max-w-lg">
            Services in Action
          </h2>
        </div>

        {/* Slider wrapper */}
        <div className="relative">

          {/* Left arrow */}
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous slide"
            className="absolute left-0 top-[40%] z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-[#e5e5e5] bg-white/90 text-black shadow-md backdrop-blur-sm transition-all hover:bg-white active:scale-95 sm:h-10 sm:w-10"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            type="button"
            onClick={goNext}
            aria-label="Next slide"
            className="absolute right-0 top-[40%] z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-[#e5e5e5] bg-white/90 text-black shadow-md backdrop-blur-sm transition-all hover:bg-white active:scale-95 sm:h-10 sm:w-10"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Scrollable track */}
          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2 px-8 sm:gap-5 sm:px-10"
          >
            {showcaseSlides.map((slide) => (
              <article
                key={slide.id}
                className="showcase-slide group flex w-full shrink-0 snap-center flex-col sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
              >
                {/* Image */}
                <div className="mb-4 overflow-hidden rounded-2xl bg-[#efefef] sm:rounded-[24px]">
                  <div className="aspect-[4/3] w-full">
                    <img
                      src={encodeURI(slide.image)}
                      alt={slide.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Card text */}
                <div className="px-1">
                  <span className="mb-1.5 block font-heading text-[10px] font-semibold uppercase tracking-[0.15em] text-[#1e4d2b] sm:text-[11px]">
                    {slide.tag}
                  </span>
                  <h3 className="mb-2 font-heading text-[16px] font-semibold leading-snug !text-black sm:text-[17px] lg:text-[18px]">
                    {slide.title}
                  </h3>
                  <p className="font-paragraph text-[12px] leading-[1.6] text-[#6b7280] sm:text-[13px]">
                    {slide.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-1.5">
            {showcaseSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === i ? 'w-5 bg-[#1e4d2b]' : 'w-1.5 bg-[#d1d5db]'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />
      <ServiceHero />

      <OfferingSection />
      <AdvertisingSection />

      <ServicesCTA />
      <FooterSection />
    </div>
  )
}
