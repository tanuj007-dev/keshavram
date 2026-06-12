function ArrowIcon({ className = '' }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
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

const caseStudies = [
  {
    tag: 'Registration',
    tagColor: 'bg-[#1e4d2b]',
    title: 'Business Registration & Onboarding Support',
    description:
      'We help customers start smoothly with business registration, vendor onboarding, service enrollment, application support, and platform setup guidance.',
    image: '/b07a7b78d82ab231c051495734ed471714db807d.png',
    featured: true,
  },
  {
    tag: 'Marketing',
    tagColor: 'bg-[#4acbe8]',
    title: 'Digital Marketing & Business Visibility Setup',
    description:
      'We support business growth through campaign planning, social media promotion, local advertising, listing optimization, and customer reach strategies.',
    image: '/e365a709b49ee14c40fabe39b3c4bb24e268d630.png',
    featured: false,
  },
  {
    tag: 'Courses',
    tagColor: 'bg-[#c9a133]',
    title: 'Course Guidance & Skill Support',
    description:
      'We guide learners toward the right courses, skills, and career-focused training.',
    image: '/38abd842457b49e8c5de1f6334b26b48263e8686.png',
    featured: false,
  },
]

function ViewButton() {
  return (
    <a
      href="#"
      className="inline-flex shrink-0 items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 font-heading text-[10px] font-medium uppercase tracking-[0.08em] text-black transition-colors hover:bg-[#f5f5f5] sm:px-5 sm:py-2.5 sm:text-[11px]"
    >
      View
      <ArrowIcon />
    </a>
  )
}

function CaseStudyCard({ study }) {
  return (
    <article className="group overflow-hidden rounded-[20px] border border-[#ececec] bg-white sm:rounded-[24px]">
      <div
        className={`relative w-full overflow-hidden ${
          study.featured
            ? 'aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]'
            : 'aspect-[16/10] sm:aspect-[16/9]'
        }`}
      >
        <img
          src={study.image}
          alt={study.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />

        <span
          className={`absolute left-4 top-4 z-10 rounded-full px-3.5 py-1.5 font-heading text-[10px] font-medium uppercase tracking-[0.1em] text-white sm:left-5 sm:top-5 sm:px-4 sm:text-[11px] ${study.tagColor}`}
        >
          {study.tag}
        </span>
      </div>

      <div className="bg-white p-4 sm:p-5 lg:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <div className="min-w-0 flex-1">
            <h3 className="m-0 mb-1.5 font-heading text-[16px] font-semibold leading-snug !text-black sm:mb-2 sm:text-[20px] lg:text-[22px]">
              {study.title}
            </h3>
            <p className="m-0 max-w-2xl text-[12px] leading-[1.55] text-[#4b5563] sm:text-[14px]">
              {study.description}
            </p>
          </div>
          <ViewButton />
        </div>
      </div>
    </article>
  )
}

function CaseStudiesSection() {
  const [featured, ...rest] = caseStudies

  return (
    <section id="case-studies" className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 lg:mb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="max-w-3xl lg:max-w-4xl">
            <span className="mb-3 block font-heading text-[13px] font-semibold uppercase tracking-[0.18em] text-black sm:mb-4 sm:text-[16px]">
              Case Studies
            </span>
            <h2 className="m-0 text-left text-[26px] font-semibold leading-[1.25] tracking-[-0.02em] sm:text-[36px] sm:leading-[1.2] lg:text-[44px]">
              <span className="text-black">We help customers complete </span>
              <span className="text-black">services — not just plans.</span>
            </h2>
          </div>

          <a
            href="#case-studies"
            className="inline-flex mb-10 w-fit shrink-0 items-center gap-3 self-start rounded-full border border-black/10 bg-white py-2 pl-5 pr-2 font-heading text-[10px] font-medium uppercase tracking-[0.08em] text-black transition-colors hover:bg-[#f5f5f5] sm:self-auto sm:pl-6 sm:text-[11px]"
          >
            All Case Studies
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1e4d2b] text-white sm:h-9 sm:w-9">
              <ArrowIcon />
            </span>
          </a>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <CaseStudyCard study={featured} />
          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
            {rest.map((study) => (
              <CaseStudyCard key={study.title} study={study} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesSection
