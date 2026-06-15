const offerings = [
  {
    number: '01',
    title: 'Campaign Planning',
    description:
      'Plan marketing activities with clear goals, audience direction, and promotional structure.',
  },
  {
    number: '02',
    title: 'Social Media Promotion',
    description:
      'Create and manage promotion ideas for platforms like Facebook, Instagram, LinkedIn, and WhatsApp.',
  },
  {
    number: '03',
    title: 'Local Advertising',
    description:
      'Support local business promotion through targeted visibility, offline-online campaigns, and customer reach.',
  },
  {
    number: '04',
    title: 'Brand Visibility',
    description:
      'Improve how your business looks, communicates, and appears across customer touchpoints.',
  },
  {
    number: '05',
    title: 'Content Direction',
    description:
      'Plan captions, service messages, offers, posters, and promotional content for better engagement.',
  },
  {
    number: '06',
    title: 'Lead Support',
    description:
      'Help your business attract enquiries and guide customers toward taking action.',
  },
]

export default function ServiceOfferingSection() {
  return (
    <section
      id="service-offering"
      className="w-full bg-white px-5 py-14 sm:px-6 sm:py-16 lg:px-20 lg:py-20"
      aria-labelledby="service-offering-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center sm:mb-14 lg:mb-16">
          <p className="mb-4 font-heading text-[11px] font-medium uppercase tracking-[0.2em] text-[#374151] sm:mb-5 sm:text-[12px]">
            Offering
          </p>
          <h2
            id="service-offering-heading"
            className="font-heading text-[32px] font-semibold leading-[1.1] tracking-[-0.03em] !text-black sm:text-[40px] lg:text-[48px] xl:text-[52px]"
          >
            What we help you with
          </h2>
        </div>

        <ul className="flex w-full flex-col gap-10 sm:gap-12 lg:gap-14">
          {offerings.map((item) => (
            <li key={item.number}>
              <p className="mb-2 font-heading text-[13px] font-semibold uppercase tracking-[0.06em] !text-black sm:mb-2.5 sm:text-[14px] lg:text-[15px]">
                {item.number} / {item.title}
              </p>
              <p className="font-paragraph text-[14px] leading-[1.65] text-[#374151] sm:text-[15px] lg:text-[16px]">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
