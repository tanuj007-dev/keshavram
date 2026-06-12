/* ── CircleArrow icon — matches the ⊕ style in the screenshot ─────────── */
function CircleArrowIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="mt-[2px] shrink-0"
    >
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

/* ── Inline right-arrow for the button ────────────────────────────────── */
function ArrowRight() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2.5 7.5H12.5M12.5 7.5L8.5 3.5M12.5 7.5L8.5 11.5"
        stroke="currentColor"
        strokeWidth="1.6"
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

export default function AdvertisingSection() {
  return (
    <section
      id="advertising"
      className="w-full bg-white py-10 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-14 xl:gap-20">

          {/* ── LEFT: Orange Megaphone Image ─────────────────────────── */}
          <div className="w-full lg:w-[48%] xl:w-[46%] shrink-0">
            <div
              className="overflow-hidden rounded-2xl"
              style={{ aspectRatio: '1 / 1' }}
            >
              <img
                src="/Background%20(1).png"
                alt="Orange megaphone representing purposeful advertising and marketing campaigns"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* ── RIGHT: Text Content ──────────────────────────────────── */}
          <div className="flex flex-col justify-center w-full">

            {/* Eyebrow */}
            <p
              className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#555]"
              style={{ fontFamily: 'inherit', letterSpacing: '0.18em' }}
            >
              Purposeful Advertising &amp; Marketing
            </p>

            {/* Heading — large display, matches screenshot */}
            <h2
              className="mb-7 text-[#0a0a0a] font-bold leading-[1.08] tracking-[-0.03em]"
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                fontFamily: 'Georgia, "Times New Roman", serif',
              }}
            >
              Creating Impact<br />
              Through Smarter<br />
              Campaigns
            </h2>

            {/* Bullet list */}
            <ul className="mb-9 flex flex-col gap-3 sm:gap-4">
              {bullets.map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <CircleArrowIcon />
                  <span className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.65]">
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div>
              <a
                href="#consultation"
                id="advertising-cta"
                className="group inline-flex items-center gap-3 rounded-full bg-[#0f1a2e] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-[#1c2e4a] hover:shadow-lg sm:px-9 sm:py-4 sm:text-[11px]"
              >
                Start a Free Consultation
                <span className="transition-transform duration-300 group-hover:translate-x-1 inline-flex">
                  <ArrowRight />
                </span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
