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

function HeroSection() {
  return (
    <section className="w-full bg-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Left — content */}
          <div className="flex flex-col">
            <p className="mb-5 font-heading text-[10px] font-medium uppercase tracking-[0.18em] text-[#4a4a4a] sm:text-[11px]">
              Multi-Service Consulting Agency
            </p>

            <h1 className="m-0 mb-6 font-heading text-[32px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#c8c8c8] sm:text-[38px] lg:text-[44px] xl:text-[48px]">
              Measurable Support for Business, Documents &amp; Digital Growth
            </h1>

            <p className="mb-8 max-w-[520px] font-sans text-[14px] leading-[1.7] text-[#6b6b6b] sm:text-[15px] lg:mb-10">
              Keshav Ram Enterprises is a multi-service consulting platform built
              for individuals, startups, vendors, and businesses that need
              clear guidance, structured support, and reliable execution — not
              confusion, delays, or scattered service providers.
            </p>

            <div className="flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <a
                href="#consultation"
                className="inline-flex w-fit items-center gap-2.5 rounded-full bg-[#0f1a2e] px-6 py-3.5 font-heading text-[10px] font-medium uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#1a2740] sm:text-[11px]"
              >
                Start a Free Consultation
                <ArrowIcon />
              </a>

              <img
                src="/Container%20(2).png"
                alt="Trusted by customers across services"
                className="h-9 w-auto object-contain sm:h-10"
              />
            </div>
          </div>

          {/* Right — image + testimonial */}
          <div className="relative mx-auto w-full max-w-[560px] lg:mx-0 lg:max-w-none">
            <div className="relative overflow-hidden rounded-tl-[28px] sm:rounded-tl-[36px]">
              <img
                src="/f7b31ce1b242b206122140746c4ebb357be7a019.png"
                alt="Team collaborating on business documents and strategy"
                className="hero-image-clip w-full object-cover"
              />
            </div>

            <div className="absolute bottom-3 right-3 max-w-[240px] rounded-2xl border border-white/10 bg-black/45 px-4 py-4 backdrop-blur-md sm:bottom-5 sm:right-5 sm:max-w-[260px] sm:px-5 sm:py-5">
              <Stars />
              <p className="mb-3 font-sans text-[12px] leading-[1.55] text-white sm:text-[13px]">
                &ldquo;Their step-by-step support made documentation,
                registration, and business setup much easier for us.&rdquo;
              </p>
              <p className="font-heading text-[11px] font-medium text-white/70 sm:text-[12px]">
                Local Business Owners
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
