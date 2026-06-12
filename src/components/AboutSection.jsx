function ServiceFocusIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="5" r="2.5" stroke="white" strokeWidth="1.5" />
      <circle cx="5" cy="14" r="2.5" stroke="white" strokeWidth="1.5" />
      <circle cx="15" cy="14" r="2.5" stroke="white" strokeWidth="1.5" />
      <path d="M10 7.5V9M8.2 12.5L6.5 11.5M11.8 12.5L13.5 11.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function CourseSupportIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M5 4.5C5 3.67 5.67 3 6.5 3H10.5L14.5 7V15.5C14.5 16.33 13.83 17 13 17H6.5C5.67 17 5 16.33 5 15.5V4.5Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M10.5 3V7H14.5" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8 10.5H12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12.5 3.5V6.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function GuidedDeliveryIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7" stroke="white" strokeWidth="1.5" />
      <path d="M6.5 10L9 12.5L13.5 7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const features = [
  {
    title: 'Service Focus',
    description: 'All essential services in one place',
    icon: ServiceFocusIcon,
    color: 'bg-[#1e4d2b]',
  },
  {
    title: 'Course Support',
    description: 'Guidance for learning and skill growth',
    icon: CourseSupportIcon,
    color: 'bg-[#38bdf8]',
  },
  {
    title: 'Guided Delivery',
    description: 'Support from enquiry to completion',
    icon: GuidedDeliveryIcon,
    color: 'bg-[#d4a72c]',
  },
]

function AboutSection() {
  return (
    <section id="about" className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <span className="mb-8 block text-center font-heading text-[13px] font-semibold uppercase tracking-[0.18em] text-black sm:mb-10 sm:text-[16px] lg:mb-12">
          About Us
        </span>

        <div className="mx-auto mb-12 max-w-[20rem] sm:mb-16 sm:max-w-2xl md:max-w-3xl lg:mb-24 lg:max-w-5xl">
          <span className="block text-pretty text-justify font-heading text-[20px] font-semibold leading-[1.55] tracking-[-0.02em] text-black sm:text-center sm:text-[20px] sm:leading-[1.5] lg:text-[24px] lg:leading-[1.35]">
            Keshav Ram Enterprises is a multi-service consulting platform built for
            individuals, startups, vendors, and growing businesses that need
            reliable support beyond scattered advice. We help customers complete
            essential work across business setup, documentation, registration,
            finance, legal support, digital growth, courses, marketing, software,
            design, and service coordination.
          </span>
        </div>

        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-7 pt-2 sm:gap-9 sm:pt-4 lg:flex-row lg:items-start lg:justify-between lg:gap-6 lg:pt-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="flex w-full max-w-[320px] items-center gap-4 sm:max-w-[340px] lg:max-w-[320px] lg:flex-1"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${feature.color}`}
                >
                  <Icon />
                </div>
                <div className="min-w-0 text-left">
                  <h3 className="m-0 font-heading text-[15px] font-semibold leading-tight !text-black sm:text-[16px]">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-[#4b5563]">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
