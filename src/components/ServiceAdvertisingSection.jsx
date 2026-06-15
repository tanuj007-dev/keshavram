function CircleArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 22 22" fill="none" aria-hidden="true" className="mt-0.5 shrink-0 sm:h-[22px] sm:w-[22px]">
      <circle cx="11" cy="11" r="10" stroke="#1a1a1a" strokeWidth="1.4" />
      <path
        d="M8 11H14M14 11L11 8M14 11L11 14"
        stroke="#1a1a1a"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

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

const bullets = [
  'Every campaign starts with your business, audience, and goals.',
  'Each plan uses clear messaging, content, and the right channels.',
  'We focus on visibility, customer reach, and enquiry growth.',
]

export default function ServiceAdvertisingSection() {
  return (
    <section
      id="service-advertising-campaigns"
      className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
      aria-labelledby="service-advertising-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-stretch lg:gap-12 xl:gap-14">
          <div className="flex w-full flex-col lg:w-[40%]">
            <div className="relative aspect-square w-full overflow-hidden rounded-[18px] sm:rounded-[22px] lg:aspect-auto lg:min-h-0 lg:flex-1 lg:rounded-[28px]">
              <img
                src="/aa9efa28bfee21a57c14ab1b7e63c6fc3eaa8f88.png"
                alt="Orange megaphone representing purposeful advertising and marketing campaigns"
                className="h-full w-full object-cover lg:absolute lg:inset-0"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex w-full flex-col justify-center lg:flex-1">
            <p className="mb-3 font-heading text-[9px] font-medium uppercase tracking-[0.18em] text-[#4b5563] sm:mb-4 sm:text-[10px] sm:tracking-[0.2em] lg:text-[11px]">
              Purposeful Advertising &amp; Marketing
            </p>

            <h2
              id="service-advertising-heading"
              className="mb-5 max-w-[16rem] text-balance font-heading text-[24px] font-semibold leading-[1.12] tracking-[-0.03em] !text-black sm:mb-6 sm:max-w-md sm:text-[30px] md:max-w-lg md:text-[36px] lg:mb-8 lg:max-w-none lg:text-[44px] xl:text-[48px]"
            >
              Creating Impact
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Through Smarter
              <br />
              Campaigns
            </h2>

            <ul className="mb-6 flex flex-col gap-2.5 sm:mb-8 sm:gap-3.5 lg:mb-9 lg:gap-4">
              {bullets.map((text) => (
                <li key={text} className="flex items-start gap-2.5 sm:gap-3">
                  <CircleArrowIcon />
                  <span className="font-paragraph text-[12px] leading-[1.6] text-[#4b5563] sm:text-[13px] sm:leading-[1.65] lg:text-[15px]">
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="group inline-flex w-full max-w-[300px] items-center justify-center gap-2 rounded-full bg-[#0f1a2e] px-5 py-3 font-heading text-[9px] font-medium uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#1a2740] sm:w-fit sm:max-w-none sm:px-7 sm:py-3.5 sm:text-[10px] lg:text-[11px]"
            >
              Start a Free Consultation
              <span className="inline-flex transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowIcon />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
