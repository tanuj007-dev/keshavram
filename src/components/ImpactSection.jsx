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

function CardIcon({ type }) {
  const icons = {
    megaphone: (
      <path d="M3 8V5.5L10 3V13L3 10.5V8ZM10 8H13L14.5 10V6L13 8H10Z" stroke="white" strokeWidth="1.4" strokeLinejoin="round" />
    ),
    bank: (
      <>
        <path d="M3 8.5L8 5.5L13 8.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 8.5V12.5M8 8.5V12.5M11 8.5V12.5M4 12.5H12" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
      </>
    ),
    calendar: (
      <>
        <rect x="4" y="5" width="10" height="9" rx="1.5" stroke="white" strokeWidth="1.4" />
        <path d="M4 8H14M7 3V6M11 3V6" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
      </>
    ),
    settings: (
      <>
        <circle cx="8" cy="8" r="2.2" stroke="white" strokeWidth="1.4" />
        <path d="M8 3.5V4.8M8 11.2V12.5M12.5 8H11.2M4.8 8H3.5M11.1 4.9L10.2 5.8M5.8 10.2L4.9 11.1M11.1 11.1L10.2 10.2M5.8 5.8L4.9 4.9" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
      </>
    ),
    chain: (
      <>
        <circle cx="5.5" cy="8" r="2" stroke="white" strokeWidth="1.4" />
        <circle cx="10.5" cy="8" r="2" stroke="white" strokeWidth="1.4" />
        <path d="M7.5 8H8.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
      </>
    ),
    document: (
      <>
        <path d="M5 4.5H9.5L12.5 7.5V13.5C12.5 14.05 12.05 14.5 11.5 14.5H5C4.45 14.5 4 14.05 4 13.5V5.5C4 4.95 4.45 4.5 5 4.5Z" stroke="white" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M9.5 4.5V7.5H12.5" stroke="white" strokeWidth="1.4" strokeLinejoin="round" />
      </>
    ),
    pen: (
      <path d="M4 12.5L4.8 9.4L10.2 4L12.5 6.3L7.1 11.7L4 12.5Z" stroke="white" strokeWidth="1.4" strokeLinejoin="round" />
    ),
    book: (
      <>
        <path d="M4 5.5C4 4.95 4.45 4.5 5 4.5H8.5C9.3 4.5 10 5.2 10 6V14.5L5 12.5L4 12.5V5.5Z" stroke="white" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M10 6C10 5.2 10.7 4.5 11.5 4.5H13C13.55 4.5 14 4.95 14 5.5V12.5L10 14.5" stroke="white" strokeWidth="1.4" strokeLinejoin="round" />
      </>
    ),
    code: (
      <>
        <path d="M5.5 6L3 8.5L5.5 11M10.5 6L13 8.5L10.5 11" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 5L7.5 12.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
      </>
    ),
    palette: (
      <>
        <circle cx="8" cy="8" r="4.5" stroke="white" strokeWidth="1.4" />
        <circle cx="6.5" cy="7" r="0.8" fill="white" />
        <circle cx="9.5" cy="7" r="0.8" fill="white" />
        <circle cx="8" cy="9.5" r="0.8" fill="white" />
      </>
    ),
    legal: (
      <>
        <path d="M5 4.5H11V14.5H5V4.5Z" stroke="white" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M7 7H9M7 9.5H9M7 12H9" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
      </>
    ),
    chart: (
      <>
        <path d="M4 13.5V5.5M4 13.5H13" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M7 11V8.5M9.5 11V7M12 11V9" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
      </>
    ),
    user: (
      <>
        <circle cx="8" cy="6" r="2.2" stroke="white" strokeWidth="1.4" />
        <path d="M4.5 14.5C4.5 12.3 6 11 8 11C10 11 11.5 12.3 11.5 14.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
      </>
    ),
  }

  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      {icons[type]}
    </svg>
  )
}

const iconColors = {
  green: 'bg-[#1e4d2b]',
  gold: 'bg-[#d4a72c]',
  blue: 'bg-[#38bdf8]',
}

const cards = [
  {
    title: 'Advertising & Marketing',
    description:
      'Promote your business through campaign planning, social media promotion, local advertising, brand and customer reach strategies.',
    icon: 'megaphone',
    color: 'green',
    placement: 'lg:col-start-1 lg:row-start-1',
    order: 'order-1',
  },
  {
    title: 'Bank & Financial',
    description:
      'Manage banking support through account guidance, finance documents, payment setup, loan paperwork, and financial process coordination.',
    icon: 'bank',
    color: 'gold',
    placement: 'lg:col-start-2 lg:row-start-1',
    order: 'order-2',
  },
  {
    title: 'Booking & Rental',
    description:
      'Simplify booking needs through rental coordination, reservation support, vendor communication, availability checks, and customer convenience planning.',
    icon: 'calendar',
    color: 'blue',
    placement: 'lg:col-start-3 lg:row-start-1',
    order: 'order-3',
  },
  {
    title: 'Business Model & Maintenance',
    description:
      'Strengthen business operations through model planning, process maintenance, workflow improvement, service coordination, and growth-focused guidance.',
    icon: 'settings',
    color: 'gold',
    placement: 'lg:col-start-1 lg:row-start-2',
    order: 'order-4',
  },
  {
    title: 'Consultancy & Supply Chain',
    description:
      'Improve business flow through consultancy guidance, vendor coordination, procurement support, logistics planning, and supply chain assistance.',
    icon: 'chain',
    color: 'green',
    placement: 'lg:col-start-3 lg:row-start-2',
    order: 'order-6',
  },
  {
    title: 'Certificate & Document',
    description:
      'Complete official paperwork through certificate support, form filling, application drafting, document verification, and structured submission assistance.',
    icon: 'document',
    color: 'blue',
    placement: 'lg:col-start-1 lg:row-start-3',
    order: 'order-7',
  },
  {
    title: 'Content Writing & Drafting',
    description:
      'Prepare professional content through application writing, proposal drafting, business letters, website copy, product descriptions, and formal documents.',
    icon: 'pen',
    color: 'gold',
    placement: 'lg:col-start-3 lg:row-start-3',
    order: 'order-8',
  },
  {
    title: 'Courses',
    description:
      'Find better learning options through course guidance, skill-development support, training selection, career planning, and practical learning resources.',
    icon: 'book',
    color: 'gold',
    placement: 'lg:col-start-1 lg:row-start-4',
    order: 'order-9',
  },
  {
    title: 'Development & Software',
    description:
      'Build digital solutions through website development, software support, automation setup, platform creation, and technical service assistance.',
    icon: 'code',
    color: 'blue',
    placement: 'lg:col-start-2 lg:row-start-4',
    order: 'order-10',
  },
  {
    title: 'Graphic Design & Images',
    description:
      'Create professional visuals through logo design, posters, banners, social media creatives, product images, visiting card, and promotional graphics.',
    icon: 'palette',
    color: 'green',
    placement: 'lg:col-start-3 lg:row-start-4',
    order: 'order-11',
  },
  {
    title: 'Legal & Relaunch',
    description:
      'Handle business restart needs through legal paperwork, compliance support, agreement drafting, relaunch planning, and advisory coordination.',
    icon: 'legal',
    color: 'blue',
    placement: 'lg:col-start-1 lg:row-start-5',
    order: 'order-12',
  },
  {
    title: 'Listing & Optimization',
    description:
      'Improve online visibility through Google profile support, local SEO, marketplace listing, business directory setup, and profile optimization.',
    icon: 'chart',
    color: 'green',
    placement: 'lg:col-start-2 lg:row-start-5',
    order: 'order-13',
  },
  {
    title: 'Onboarding & Registration',
    description:
      'Start services smoothly through business registration, vendor onboarding, service enrollment, application support, and platform setup guidance.',
    icon: 'user',
    color: 'gold',
    placement: 'lg:col-start-3 lg:row-start-5',
    order: 'order-14',
  },
]

function ServiceCard({ card }) {
  return (
    <article
      className={`flex h-full flex-col rounded-2xl border border-[#e8e8e8] bg-white p-3 sm:p-5 lg:p-6 ${card.placement} ${card.order}`}
    >
      <div
        className={`mb-3 flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full ${iconColors[card.color]}`}
      >
        <CardIcon type={card.icon} />
      </div>
      <h3 className="m-0 mb-1.5 font-heading text-[13px] sm:text-[15px] lg:text-[16px] font-semibold leading-snug !text-black">
        {card.title}
      </h3>
      <p className="text-[11.5px] sm:text-[13px] lg:text-[14px] leading-relaxed text-[#4b5563]">
        {card.description}
      </p>
    </article>
  )
}

function TeamImageCard() {
  return (
    <div className="relative order-5 h-full min-h-[220px] sm:min-h-[300px] overflow-hidden rounded-2xl col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-2 lg:row-span-2 lg:min-h-0">
      <img
        src="/33043647d50a3e523c727d9c0cde39224dea70eb.jpg"
        alt="Professional team reviewing documents together"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 font-heading text-[10px] font-semibold uppercase tracking-[0.12em] text-black">
        Team
      </span>
      <button
        type="button"
        className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-black shadow-sm"
        aria-label="Pause"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
          <rect x="3" y="2" width="3" height="10" rx="0.5" />
          <rect x="8" y="2" width="3" height="10" rx="0.5" />
        </svg>
      </button>
    </div>
  )
}

function ImpactSection() {
  return (
    <section id="services" className="w-full bg-white py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-center text-center sm:mb-10 lg:mb-12">
          <span className="mb-4 block font-heading text-[13px] font-semibold uppercase tracking-[0.18em] text-black sm:text-[16px]">
            Our Impact
          </span>
          <h2 className="mb-5 max-w-[18rem] text-balance !text-black sm:mb-6 sm:max-w-2xl lg:mb-8 lg:max-w-3xl">
            Smarter Support for Business, Finance &amp; Service Growth
          </h2>
          <a
            href="#meeting"
            className="mt-5 inline-flex items-center gap-2.5 rounded-full bg-[#0f1a2e] px-6 py-3 font-heading text-[10px] font-medium uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#1a2740] sm:mt-4 sm:text-[11px]"
          >
            Start a Free Meeting
            <ArrowIcon />
          </a>
        </div>

        <div className="impact-grid grid grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-3 lg:grid-rows-5 lg:gap-4">
          {cards.slice(0, 4).map((card) => (
            <ServiceCard key={card.title} card={card} />
          ))}
          <TeamImageCard />
          {cards.slice(4).map((card) => (
            <ServiceCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImpactSection
