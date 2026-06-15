const AVATARS = [
  { src: '/da8893b05e185584854da187463f9101564e7163.png', alt: 'Customer portrait' },
  { src: '/33043647d50a3e523c727d9c0cde39224dea70eb.jpg', alt: 'Customer portrait' },
  { src: '/b07a7b78d82ab231c051495734ed471714db807d.png', alt: 'Customer portrait' },
]

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

export default function ServiceHeroSection() {
  return (
    <section
      id="service-advertising"
      className="w-full bg-white px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      aria-labelledby="service-hero-heading"
    >
      <div className="mx-auto max-w-7xl text-center">
        <p className="mb-6 font-heading text-[10px] font-medium uppercase tracking-[0.24em] text-black sm:mb-7 sm:text-[11px] lg:mb-8 lg:text-[12px]">
          Service / Advertising
        </p>

        <h1
          id="service-hero-heading"
          className="mx-auto mb-6 font-heading text-[30px] font-semibold leading-[1.12] tracking-[-0.03em] !text-black sm:mb-7 sm:text-[42px] sm:leading-[1.1] lg:mb-8 lg:text-[52px] lg:leading-[1.08] xl:text-[58px]"
        >
          Advertising &amp; Marketing
          <br />
          Support for Business Growth
        </h1>

        <span className="mx-auto mb-10 max-w-3xl text-center text-pretty font-paragraph text-[13px] leading-[1.7] text-[#4b5563] sm:mb-12 sm:text-[14px] sm:leading-[1.75] lg:mb-14 lg:text-[26px] lg:leading-[1.65] xl:text-[18px]">
          Promote your business with clear strategy, creative content, local visibility, and
          customer- <br />focused campaigns designed to increase reach and enquiries.
        </span>

        <div className="flex flex-col mt-8 items-center justify-center gap-6 sm:flex-row sm:gap-8 lg:gap-10">
          <a
            href="#contact"
            className="inline-flex w-full max-w-[280px] items-center justify-center gap-2 rounded-full bg-black px-7 py-3.5 font-heading text-[10px] font-medium uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#1a1a1a] sm:w-auto sm:max-w-none sm:px-8 sm:py-4 sm:text-[11px]"
          >
            Start a Free Consultation
            <ArrowIcon />
          </a>

          <div className="flex items-center gap-3 sm:gap-3.5">
            <div className="flex -space-x-2.5 sm:-space-x-3" aria-hidden="true">
              {AVATARS.map((avatar) => (
                <img
                  key={avatar.src}
                  src={avatar.src}
                  alt={avatar.alt}
                  width={40}
                  height={40}
                  decoding="async"
                  className="h-9 w-9 rounded-full border-2 border-white object-cover object-top shadow-sm sm:h-10 sm:w-10"
                />
              ))}
            </div>

            <div className="text-left leading-[1.35]">
              <p className="font-heading text-[11px] font-bold uppercase tracking-[0.08em] text-black sm:text-[12px]">
                Trusted by 40+
              </p>
              <p className="font-heading text-[9px] font-medium uppercase tracking-[0.08em] text-[#6b7280] sm:text-[10px]">
                Customers Across Services
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
