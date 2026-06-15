export default function ServiceOverviewSection() {
  return (
    <section
      id="service-overview"
      className="w-full bg-[#f5f5f5] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20"
      aria-labelledby="service-overview-heading"
    >
      <div className="mx-auto max-w-7xl">
        <p
          id="service-overview-heading"
          className="mb-4 font-heading text-[10px] font-medium uppercase tracking-[0.2em] text-[#374151] sm:mb-5 sm:text-[11px] lg:mb-6 lg:text-[12px]"
        >
          Service Overview
        </p>

        <p className="text-pretty font-paragraph text-[15px] leading-[1.65] text-[#1f2937] sm:text-[17px] sm:leading-[1.6] md:text-[18px] lg:text-[20px] lg:leading-[1.55] xl:text-[22px]">
          Keshav Ram Enterprises provides advertising and marketing support for businesses
          that want better visibility, stronger customer reach, and a more professional market
          presence. We help with campaign planning, social media promotion, local advertising,
          content direction, brand visibility, and practical marketing execution.
        </p>
      </div>
    </section>
  )
}
