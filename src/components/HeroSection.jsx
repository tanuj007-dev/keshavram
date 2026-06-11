function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
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

function Stars() {
  return (
    <div className="mb-3 flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="white"
          aria-hidden="true"
        >
          <path d="M7 0L8.57 5.36H14L9.71 8.68L11.29 14L7 10.68L2.71 14L4.29 8.68L0 5.36H5.43L7 0Z" />
        </svg>
      ))}
    </div>
  )
}

const avatars = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces',
]

function HeroSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Left — content */}
          <div className="flex flex-col">
            <span className="mb-5 block font-heading text-[11px] font-medium uppercase tracking-[0.18em] text-[#6b7280]">
              Multi-Service Consulting Agency
            </span>

            <h1 className="m-0 mb-6 font-heading text-[32px] font-semibold leading-[1.12] tracking-[-0.02em] !text-black sm:text-[38px] lg:text-[44px] xl:text-[48px]">
              Measurable Support for Business, Documents &amp; Digital Growth
            </h1>

            <p className="mb-8 max-w-[520px] text-[#4b5563] lg:mb-10">
              Keshav Ram Enterprises is a multi-service consulting platform built
              for individuals, startups, vendors, and businesses that need
              clear guidance, structured support, and reliable execution — not
              confusion, delays, or scattered service providers.
            </p>

            <div className="flex flex-col gap-6  mt-10 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#consultation"
                className="inline-flex w-fit shrink-0 items-center gap-2.5 rounded-full bg-[#0f1a2e] px-6 py-3.5 font-heading text-[10px] font-medium uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#1a2740] sm:text-[11px]"
              >
                Start a Free Consultation
                <ArrowIcon />
              </a>

              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {avatars.map((src, index) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      className="h-9 w-9 rounded-full border-2 border-white object-cover sm:h-10 sm:w-10"
                      style={{ zIndex: avatars.length - index }}
                    />
                  ))}
                </div>
                <span className="block font-heading text-[10px] font-medium uppercase leading-[1.35] tracking-[0.12em] text-[#4b5563]">
                  Trusted by
                  <br />
                  customers across services
                </span>
              </div>
            </div>
          </div>

          {/* Right — image + testimonial */}
          <div className="relative mx-auto w-full max-w-[360px] sm:max-w-[440px] lg:mx-0 lg:ml-auto lg:max-w-[500px]">
            <div className="relative overflow-hidden rounded-tl-[26px] sm:rounded-tl-[32px]">
              <img
                src="/f7b31ce1b242b206122140746c4ebb357be7a019.png"
                alt="Team collaborating on business documents and strategy"
                className="hero-image-clip w-full object-cover"
              />
            </div>

            <div className="absolute bottom-3 right-3 max-w-[220px] rounded-xl border border-white/10 bg-black/45 px-4 py-4 backdrop-blur-md sm:bottom-5 sm:right-5 sm:max-w-[240px] sm:rounded-2xl sm:px-5 sm:py-5">
              <Stars />
              <p className="mb-2.5 text-white sm:mb-3">
                &ldquo;Their step-by-step support made documentation,
                registration, and business setup much easier for us.&rdquo;
              </p>
              <span className="block font-heading text-[10px] font-medium text-white/70">
                Local Business Owners
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
