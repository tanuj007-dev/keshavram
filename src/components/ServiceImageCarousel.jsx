const slides = [
  {
    src: '/a921e416f7767ab1350984318463ad168b69a361.png',
    alt: 'Laptop dashboard with analytics and data charts',
  },
  {
    src: '/3668be4776ab23e03602f4f3c6fb5755f4fda319.png',
    alt: 'Overhead view of creative work on a laptop',
  },
  {
    src: '/81fcf235e4ea3e65dd7d7374a21c291b93d2e12d.png',
    alt: 'Business analytics dashboard on MacBook',
  },
  {
    src: '/481ae8889c4da20e87b99b757ff18e0b5734e022.png',
    alt: 'Social media and mobile app marketing icons',
  },
]

function CarouselSlide({ slide, className = '' }) {
  return (
    <article
      className={`service-carousel-slide shrink-0 overflow-hidden rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] ${className}`}
    >
      <div className="aspect-[5/6] w-full sm:aspect-[4/5] lg:aspect-[5/6]">
        <img
          src={slide.src}
          alt={slide.alt}
          className="h-full w-full rounded-[20px] object-cover sm:rounded-[24px] lg:rounded-[28px]"
          loading="lazy"
          draggable="false"
        />
      </div>
    </article>
  )
}

export default function ServiceImageCarousel() {
  return (
    <section
      className="w-full overflow-hidden rounded-b-[28px] bg-white py-6 sm:rounded-b-[36px] sm:py-8 lg:rounded-b-[44px]"
      aria-label="Service showcase gallery"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="hidden gap-3 lg:grid lg:grid-cols-4 lg:gap-4">
          {slides.map((slide) => (
            <CarouselSlide key={slide.src} slide={slide} className="w-full" />
          ))}
        </div>

        <div className="-mx-5 flex gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory px-5 scrollbar-hide sm:-mx-6 sm:gap-4 sm:px-6 lg:hidden">
          {slides.map((slide) => (
            <CarouselSlide
              key={slide.src}
              slide={slide}
              className="w-[calc((100%-0.75rem)/2)] snap-start sm:w-[calc((100%-1rem)/2)]"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
