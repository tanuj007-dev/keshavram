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

const blogPosts = [
  {
    id: 1,
    category: '/SERVICES',
    date: 'FEBRUARY 7, 2026',
    title: 'How to Choose the Right Service Support for Your Business',
    description:
      'Finding the right support can save time, reduce confusion, and help you complete important work....',
    image: '/224b6681a78b4cf3637e9caa07b6d6e6d67f29b4.jpg',
  },
  {
    id: 2,
    category: '/COURSES',
    date: 'FEBRUARY 3, 2026',
    title: 'Choosing Courses That Match Your Career Goals',
    description:
      'The right course can improve skills, build confidence, and support better career or business opportunity.',
    image: '/69b462cf0df56779cbf7870c14e5a0a836e6372a (1).jpg',
  },
  {
    id: 3,
    category: '/MARKETING',
    date: 'FEBRUARY 6, 2026',
    title: 'How Local Marketing Helps Small Businesses Grow',
    description:
      'Business visibility improves when campaigns, social media, listings, and customer reach work together.',
    image: '/8a4e89100c3290881246af2dafc61064238aa810.jpg',
  },
]

export default function LatestInsights() {
  return (
    <section id="blogs" className="w-full bg-white py-12 px-5 sm:py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <span className="mb-3 block font-heading text-[13px] font-semibold uppercase tracking-[0.18em] text-black sm:mb-4 sm:text-[16px]">
          Our Blogs
        </span>

        <div className="flex items-start justify-between gap-3 border-b border-[#e5e5e5] pb-5 sm:items-end sm:gap-6 sm:pb-6">
          <h2 className="m-0 min-w-0 flex-1 font-heading text-[28px] font-semibold leading-[1.12] tracking-[-0.02em] !text-black sm:text-[40px] lg:text-[56px]">
            Latest Insights
          </h2>

          <a
            href="#all-blogs"
            className="inline-flex shrink-0 items-center gap-2.5 pt-1 font-heading text-[13px] font-medium text-black transition-opacity hover:opacity-80 sm:pt-0 sm:text-[14px]"
          >
            All Blog
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1e4d2b] text-white sm:h-9 sm:w-9">
              <ArrowIcon />
            </span>
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-10 sm:mt-10 md:grid-cols-3 md:gap-6 lg:gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="group flex flex-col">
              <a href={`#post-${post.id}`} className="block overflow-hidden rounded-[20px] sm:rounded-[24px]">
                <div className="aspect-[4/3] overflow-hidden bg-[#f3f3f3]">
                  <img
                    src={encodeURI(post.image)}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
              </a>

              <div className="mt-5 border-b border-[#e5e5e5] pb-3">
                <div className="flex items-center justify-between gap-3 font-heading text-[10px] font-semibold uppercase tracking-[0.12em] text-black sm:text-[11px]">
                  <span>{post.category}</span>
                  <span className="shrink-0 font-normal text-[#9ca3af]">{post.date}</span>
                </div>
              </div>

              <h3 className="mt-4 font-heading text-[17px] font-semibold leading-snug tracking-[-0.01em] !text-black transition-colors group-hover:!text-[#333] sm:text-[18px] lg:text-[20px]">
                <a href={`#post-${post.id}`}>{post.title}</a>
              </h3>

              <p className="mt-3 text-[13px] leading-[1.6] text-[#6b7280] sm:text-[14px]">
                {post.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
