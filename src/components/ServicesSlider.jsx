import { useCallback, useEffect, useRef, useState } from 'react'

const slides = [
  {
    src: '/Group - 1 of 6 (1).png',
    alt: 'Advertising & Marketing — Marketing, campaigns, branding, and customer reach',
  },
  {
    src: '/Group - 2 of 5.png',
    alt: 'Bank & Financial — Banking, payments, documents, and finance support',
  },
  {
    src: '/Group - 3 of 5.png',
    alt: 'Booking & Rental — Bookings, rentals, reservations, and vendor support',
  },
]

function NavButton({ direction, onClick, label, className = '' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`flex h-10 w-10 items-center justify-center rounded-full border border-[#e0e0e0] bg-white text-black shadow-sm transition-colors hover:bg-[#f5f5f5] sm:h-11 sm:w-11 ${className}`}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        {direction === 'prev' ? (
          <path
            d="M10 3L5 8L10 13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M6 3L11 8L6 13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  )
}

function ServiceSlide({ slide }) {
  return (
    <article className="services-slide w-[78vw] shrink-0 snap-center sm:w-[300px] md:w-[320px] lg:w-[360px] xl:w-[380px]">
      <img
        src={encodeURI(slide.src)}
        alt={slide.alt}
        className="block h-auto w-full"
        draggable="false"
        loading="lazy"
      />
    </article>
  )
}

function ServicesSlider() {
  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const scrollToIndex = useCallback((index) => {
    const track = trackRef.current
    if (!track) return

    const slideElements = track.querySelectorAll('.services-slide')
    const target = slideElements[index]
    if (!target) return

    const offset = target.offsetLeft - (track.clientWidth - target.offsetWidth) / 2
    track.scrollTo({ left: offset, behavior: 'smooth' })
    setActiveIndex(index)
  }, [])

  const goNext = useCallback(() => {
    const next = activeIndex >= slides.length - 1 ? 0 : activeIndex + 1
    scrollToIndex(next)
  }, [activeIndex, scrollToIndex])

  const goPrev = useCallback(() => {
    const prev = activeIndex <= 0 ? slides.length - 1 : activeIndex - 1
    scrollToIndex(prev)
  }, [activeIndex, scrollToIndex])

  useEffect(() => {
    if (isPaused) return undefined

    const timer = setInterval(goNext, 4500)
    return () => clearInterval(timer)
  }, [goNext, isPaused])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return undefined

    const onScroll = () => {
      const slideElements = [...track.querySelectorAll('.services-slide')]
      if (!slideElements.length) return

      const trackCenter = track.scrollLeft + track.clientWidth / 2
      let closestIndex = 0
      let closestDistance = Infinity

      slideElements.forEach((slide, index) => {
        const slideCenter = slide.offsetLeft + slide.offsetWidth / 2
        const distance = Math.abs(trackCenter - slideCenter)
        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })

      setActiveIndex(closestIndex)
    }

    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    scrollToIndex(0)
  }, [scrollToIndex])

  return (
    <section id="services" className="w-full bg-[#f5f5f5] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-center text-center sm:mb-10 lg:mb-12">
          <span className="mb-4 font-heading text-[13px] font-semibold uppercase tracking-[0.18em] text-black sm:mb-5 sm:text-[16px]">
            Our Service
          </span>

          <h2 className="mx-auto max-w-[18rem] text-balance !text-center !text-black sm:max-w-2xl lg:max-w-4xl">
            Service Systems That Help Businesses Work Smarter
          </h2>
        </div>

        <div
          className="services-slider relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <NavButton
            direction="prev"
            onClick={goPrev}
            label="Previous slide"
            className="absolute left-1 top-[42%] z-10 -translate-y-1/2 sm:left-0 sm:top-1/2"
          />
          <NavButton
            direction="next"
            onClick={goNext}
            label="Next slide"
            className="absolute right-1 top-[42%] z-10 -translate-y-1/2 sm:right-0 sm:top-1/2"
          />

          <div
            ref={trackRef}
            className="services-track flex snap-x snap-mandatory justify-start gap-4 overflow-x-auto px-10 pb-2 scrollbar-hide sm:justify-center sm:gap-5 sm:px-14 lg:px-16"
          >
            {slides.map((slide) => (
              <ServiceSlide key={slide.src} slide={slide} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSlider
