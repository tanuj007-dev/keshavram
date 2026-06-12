import { useState, useRef, useCallback, useEffect } from 'react'

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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

function NavButton({ direction, onClick, label, className = '' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-[#e5e5e5] bg-white/90 text-black shadow-md transition-all hover:bg-white active:scale-95 backdrop-blur-sm ${className}`}
    >
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        {direction === 'prev' ? (
          <path
            d="M10 3L5 8L10 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M6 3L11 8L6 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  )
}

const blogPosts = [
  {
    id: 1,
    category: '/SERVICES',
    date: 'FEBRUARY 7, 2026',
    title: 'How to Choose the Right Service Support for Your Business',
    description:
      'Finding the right support can save time, reduce confusion, and help you complete important work....',
    image: '/224b6681a78b4cf3637e9caa07b6d6e6d67f29b4.jpg',
  },
  {
    id: 2,
    category: '/COURSES',
    date: 'FEBRUARY 3, 2026',
    title: 'Choosing Courses That Match Your Career Goals',
    description:
      'The right course can improve skills, build confidence, and support better career or business opportunity.',
    image: '/69b462cf0df56779cbf7870c14e5a0a836e6372a (1).jpg',
  },
  {
    id: 3,
    category: '/MARKETING',
    date: 'FEBRUARY 6, 2026',
    title: 'How Local Marketing Helps Small Businesses Grow',
    description:
      'Business visibility improves when campaigns, social media, listings, and customer reach work together.',
    image: '/8a4e89100c3290881246af2dafc61064238aa810.jpg',
  },
]

export default function LatestInsights() {
  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToIndex = useCallback((index) => {
    const track = trackRef.current
    if (!track) return

    const slideElements = track.querySelectorAll('.blog-slide')
    const target = slideElements[index]
    if (!target) return

    const offset = target.offsetLeft
    track.scrollTo({ left: offset, behavior: 'smooth' })
    setActiveIndex(index)
  }, [])

  const goNext = useCallback(() => {
    const next = activeIndex >= blogPosts.length - 1 ? 0 : activeIndex + 1
    scrollToIndex(next)
  }, [activeIndex, scrollToIndex])

  const goPrev = useCallback(() => {
    const prev = activeIndex <= 0 ? blogPosts.length - 1 : activeIndex - 1
    scrollToIndex(prev)
  }, [activeIndex, scrollToIndex])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return undefined

    const onScroll = () => {
      if (window.innerWidth >= 768) return // Only track scroll on mobile/tablet (< md)

      const slideElements = [...track.querySelectorAll('.blog-slide')]
      if (!slideElements.length) return

      const trackScrollLeft = track.scrollLeft
      let closestIndex = 0
      let closestDistance = Infinity

      slideElements.forEach((slide, index) => {
        const slideStart = slide.offsetLeft
        const distance = Math.abs(trackScrollLeft - slideStart)
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

  return (
    <section id="blogs" className="w-full bg-white py-12 px-5 sm:py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <span className="mb-3 block font-heading text-[13px] font-semibold uppercase tracking-[0.18em] text-black sm:mb-4 sm:text-[16px]">
          Our Blogs
        </span>

        <div className="flex items-start justify-between gap-3 border-b border-[#e5e5e5] pb-5 sm:items-end sm:gap-6 sm:pb-6">
          <h2 className="m-0 min-w-0 flex-1 font-heading text-[28px] font-semibold leading-[1.12] tracking-[-0.02em] !text-black sm:text-[40px] lg:text-[56px]">
            Latest Insights
          </h2>

          <a
            href="#all-blogs"
            className="inline-flex shrink-0 items-center gap-2.5 pt-1 font-heading text-[13px] font-medium text-black transition-opacity hover:opacity-80 sm:pt-0 sm:text-[14px]"
          >
            All Blog
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1e4d2b] text-white sm:h-9 sm:w-9">
              <ArrowIcon />
            </span>
          </a>
        </div>

        <div className="relative mt-8">
          {/* Arrow navigation for mobile */}
          <NavButton
            direction="prev"
            onClick={goPrev}
            label="Previous slide"
            className="absolute left-2 top-[32%] z-10 -translate-y-1/2 md:hidden"
          />
          <NavButton
            direction="next"
            onClick={goNext}
            label="Next slide"
            className="absolute right-2 top-[32%] z-10 -translate-y-1/2 md:hidden"
          />

          <div
            ref={trackRef}
            className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory scrollbar-hide pb-4 relative"
          >
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="blog-slide group flex w-full md:w-auto shrink-0 snap-center flex-col md:shrink md:snap-none"
              >
                <a href={`#post-${post.id}`} className="block overflow-hidden rounded-[20px] sm:rounded-[24px]">
                  <div className="aspect-[4/3] overflow-hidden bg-[#f3f3f3]">
                    <img
                      src={encodeURI(post.image)}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                </a>

                <div className="mt-5 border-b border-[#e5e5e5] pb-3">
                  <div className="flex items-center justify-between gap-3 font-heading text-[10px] font-semibold uppercase tracking-[0.12em] text-black sm:text-[11px]">
                    <span>{post.category}</span>
                    <span className="shrink-0 font-normal text-[#9ca3af]">{post.date}</span>
                  </div>
                </div>

                <h3 className="mt-4 font-heading text-[17px] font-semibold leading-snug tracking-[-0.01em] !text-black transition-colors group-hover:!text-[#333] sm:text-[18px] lg:text-[20px]">
                  <a href={`#post-${post.id}`}>{post.title}</a>
                </h3>

                <p className="mt-3 text-[13px] leading-[1.6] text-[#6b7280] sm:text-[14px]">
                  {post.description}
                </p>
              </article>
            ))}
          </div>

          {/* Dots Indicator for Mobile */}
          <div className="mt-4 flex justify-center gap-1.5 md:hidden">
            {blogPosts.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollToIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'w-5 bg-[#1e4d2b]' : 'w-1.5 bg-[#e5e5e5]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
