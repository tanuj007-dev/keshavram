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

const FEATURE_IMAGE = '/3668be4776ab23e03602f4f3c6fb5755f4fda319.png'

export default function ServiceMarketingSection() {
  return (
    <section
      id="service-marketing"
      className="w-full bg-white px-5 py-10 sm:px-6 sm:py-12 lg:px-20 lg:py-14"
      aria-labelledby="service-marketing-heading"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-10">
        {/* Left — image with overlay card */}
        <div className="order-2 flex w-full flex-col lg:order-1 lg:w-1/2">
          <div className="relative min-h-[300px] flex-1 overflow-hidden rounded-[22px] sm:min-h-[340px] sm:rounded-[26px] lg:min-h-0 lg:rounded-[32px]">
            <img
              src={FEATURE_IMAGE}
              alt="Creative marketing work on a laptop"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />

            <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">
              <span className="absolute -top-2.5 left-3 z-10 rounded-md bg-[#1a4d32] px-2.5 py-0.5 font-heading text-[8px] font-semibold uppercase tracking-[0.12em] text-white sm:-top-3 sm:left-4 sm:px-3 sm:py-1 sm:text-[9px]">
                Growth
              </span>

              <div className="rounded-[16px] bg-white px-4 pb-4 pt-5 shadow-[0_6px_24px_rgba(0,0,0,0.08)] sm:rounded-[18px] sm:px-4.5 sm:pb-4.5 sm:pt-5.5 lg:rounded-[20px]">
                <h3 className="mb-1.5 font-heading text-[13px] font-semibold leading-[1.3] tracking-[-0.02em] !text-black sm:text-[14px] lg:text-[15px]">
                  Sustainable Advertising &amp; Marketing Growth Strategies
                </h3>
                <p className="font-paragraph text-[11px] leading-[1.55] text-[#4b5563] sm:text-[12px]">
                  We help businesses promote their services with clear planning, practical
                  campaigns, local visibility, and customer-focused communication.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right — content */}
        <div className="order-1 flex w-full flex-col justify-center lg:order-2 lg:w-1/2">
          <p className="mb-3 font-heading text-[10px] font-medium uppercase tracking-[0.18em] text-[#374151] sm:mb-3.5 sm:text-[11px]">
            What We Help With
          </p>

          <h2
            id="service-marketing-heading"
            className="mb-5 max-w-md font-heading text-[22px] font-semibold leading-[1.15] tracking-[-0.03em] !text-black sm:mb-6 sm:max-w-lg sm:text-[26px] lg:mb-7 lg:text-[30px] xl:text-[32px]"
          >
            We Aim to Provide You Reliable Marketing Support
          </h2>

          <div className="mb-4 flex items-end gap-3 sm:mb-5 sm:gap-4">
            <span className="shrink-0 font-heading text-[40px] font-semibold leading-[0.9] tracking-tight !text-black sm:text-[48px] lg:text-[52px]">
              99%
            </span>
            <span className="max-w-[8rem] pb-0.5 font-heading text-[13px] font-semibold leading-[1.2] !text-black sm:max-w-[9rem] sm:text-[14px]">
              Guided Marketing Support
            </span>
          </div>

          <div className="mb-5 max-w-sm border-t border-black/15 pt-4 sm:mb-6 sm:max-w-md">
            <p className="font-paragraph text-[12px] leading-[1.6] text-[#4b5563] sm:text-[13px]">
              Businesses achieve stronger reach when marketing, content, listings, and customer
              communication are planned with a clear strategy.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-black px-5 py-2.5 font-heading text-[9px] font-medium uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#1a1a1a] sm:px-6 sm:py-3 sm:text-[10px]"
          >
            Contact for Service
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  )
}
