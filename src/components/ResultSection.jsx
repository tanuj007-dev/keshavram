function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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

const stats = [
  {
    value: '13+',
    title: 'Service Categories',
    description:
      'KRE brings business, digital, legal, financial, documentation, registration, course, marketing, and support services under one platform.',
    bg: 'bg-[#c9a133]',
  },
  {
    value: '3x',
    title: 'Faster Service Guidance',
    description:
      'Our structured approach helps customers understand the process, required documents, next steps, and service path faster.',
    bg: 'bg-[#1a4d32]',
  },
  {
    value: '24h',
    title: 'Response Support',
    description:
      'Customers can expect timely follow-up for service enquiries, course guidance, documentation help, and business support requests.',
    bg: 'bg-[#4acbe8]',
  },
]

function StatCard({ stat }) {
  return (
    <article className={`flex h-full flex-col px-8 py-9 text-white sm:px-9 sm:py-10 lg:px-10 lg:py-11 ${stat.bg}`}>
      <div className="mb-8 flex items-end gap-3 sm:gap-4">
        <span className="shrink-0 font-heading text-[52px] font-semibold leading-[0.85] tracking-tight sm:text-[58px] lg:text-[64px]">
          {stat.value}
        </span>
        <span className="max-w-[9rem] pb-1 font-heading text-[17px] font-medium leading-[1.2] sm:max-w-[10rem] sm:text-[19px] lg:text-[20px]">
          {stat.title}
        </span>
      </div>

      <div className="mb-6 border-t border-white/50" />

      <p className="text-[13px] leading-[1.65] text-white sm:text-[14px]">
        {stat.description}
      </p>
    </article>
  )
}

function ResultSection() {
  return (
    <section id="results" className="w-full bg-[#f5f5f5] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-8 lg:mb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-3xl lg:max-w-4xl">
            <span className="mb-4 block font-heading text-[16px] font-semibold uppercase tracking-[0.18em] text-black sm:mb-5">
              Consultancy Result
            </span>
            <h2 className="text-left text-[24px] font-semibold leading-[1.5] tracking-[-0.02em] !text-black">
              100% guided support for services, courses, documents, and business setup
             with clear steps from enquiry to completion.
            </h2>
          </div>

          <a
            href="#meeting"
            className="inline-flex w-fit shrink-0 items-center gap-2.5 self-start rounded-full bg-black px-6 py-3.5 font-heading text-[10px] font-medium uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#1a1a1a] sm:self-auto sm:px-7 sm:py-4 sm:text-[11px] lg:mb-25"
          >
            Start a Free Meeting
            <ArrowIcon />
          </a>
        </div>

        <div className="overflow-hidden rounded-[20px] sm:rounded-[24px]">
          <div className="grid grid-cols-1 items-stretch md:grid-cols-3">
            {stats.map((stat) => (
              <StatCard key={stat.title} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResultSection
