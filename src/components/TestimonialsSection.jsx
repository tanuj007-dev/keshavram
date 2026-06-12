import { useCallback, useEffect, useRef, useState } from 'react'

const avatar = '/da8893b05e185584854da187463f9101564e7163.png'

const testimonials = [
  {
    quote:
      'KRE made the entire service process clear and simple. Their guidance helped us complete documentation, registration, and business support tasks without confusion.',
    name: 'Rohit Mehra',
    role: 'Local Business Owner',
  },
  {
    quote:
      'From course selection to certificate support, the team explained every step patiently. We always knew what documents were needed and what would happen next.',
    name: 'Priya Sharma',
    role: 'Course Applicant',
  },
  {
    quote:
      'Their marketing and listing support helped us improve visibility and reach more customers. The process felt structured and easy to follow.',
    name: 'Amit Verma',
    role: 'Startup Founder',
  },
  {
    quote:
      'We received timely follow-up on banking and finance paperwork. KRE coordinated everything smoothly from enquiry to completion.',
    name: 'Neha Kapoor',
    role: 'Small Business Owner',
  },
]

function NavButton({ direction, onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e0e0e0] bg-white text-black shadow-sm transition-colors hover:bg-[#f5f5f5] sm:h-11 sm:w-11"
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

function TestimonialCard({ item }) {
  return (
    <article className="testimonial-slide flex w-[calc(100vw-2.5rem)] max-w-[340px] shrink-0 snap-center flex-col justify-between rounded-[20px] border border-[#ececec] bg-white p-5 sm:w-[360px] sm:rounded-[24px] sm:p-8 lg:w-[400px] lg:rounded-[28px] lg:p-10">
      <p className="mb-6 text-[14px] leading-[1.65] text-black sm:mb-10 sm:text-[16px] lg:text-[17px]">
        &ldquo;{item.quote}&rdquo;
      </p>

      <div className="flex items-end justify-between gap-4">
        <div className="min-w-0">
          <p className="m-0 font-heading text-[15px] font-semibold text-black sm:text-[16px]">
            {item.name}
          </p>
          <p className="mt-0.5 text-[13px] leading-snug text-[#6b7280] sm:text-[14px]">
            {item.role}
          </p>
        </div>
        <img
          src={avatar}
          alt={item.name}
          className="h-11 w-11 shrink-0 rounded-xl object-cover object-top sm:h-14 sm:w-14 sm:rounded-2xl"
          loading="lazy"
        />
      </div>
    </article>
  )
}

function TestimonialsSection() {
  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const scrollToIndex = useCallback((index) => {
    const track = trackRef.current
    if (!track) return

    const slideElements = track.querySelectorAll('.testimonial-slide')
    const target = slideElements[index]
    if (!target) return

    const offset = target.offsetLeft - (track.clientWidth - target.offsetWidth) / 2
    track.scrollTo({ left: offset, behavior: 'smooth' })
    setActiveIndex(index)
  }, [])

  const goNext = useCallback(() => {
    const next = activeIndex >= testimonials.length - 1 ? 0 : activeIndex + 1
    scrollToIndex(next)
  }, [activeIndex, scrollToIndex])

  const goPrev = useCallback(() => {
    const prev = activeIndex <= 0 ? testimonials.length - 1 : activeIndex - 1
    scrollToIndex(prev)
  }, [activeIndex, scrollToIndex])

  useEffect(() => {
    if (isPaused) return undefined

    const timer = setInterval(goNext, 5000)
    return () => clearInterval(timer)
  }, [goNext, isPaused])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return undefined

    const onScroll = () => {
      const slideElements = [...track.querySelectorAll('.testimonial-slide')]
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
    <section id="testimonials" className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-center text-center sm:mb-10 lg:mb-12">
          <span className="mb-4 font-heading text-[13px] font-semibold uppercase tracking-[0.18em] text-black sm:mb-5 sm:text-[16px]">
            Testimonials
          </span>
          <h2 className="m-0 max-w-[20rem] text-balance !text-center !text-black sm:max-w-2xl">
            Success Validated by Clients
          </h2>
        </div>

        <div
          className="mb-8 sm:mb-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <div
            ref={trackRef}
            className="services-track flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 scrollbar-hide sm:gap-5"
          >
            {testimonials.map((item) => (
              <TestimonialCard key={item.name} item={item} />
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2.5">
          <NavButton direction="prev" onClick={goPrev} label="Previous testimonial" />
          <NavButton direction="next" onClick={goNext} label="Next testimonial" />
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
