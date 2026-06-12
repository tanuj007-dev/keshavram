import { useState } from 'react'

const faqData = [
  {
    id: 1,
    question: 'What services does KRE provide?',
    answer:
      'KRE provides a comprehensive suite of academic and professional consulting services, including curriculum development, institutional design, accreditation support, and personalized learning pathways tailored to meet modern educational standards.',
  },
  {
    id: 2,
    question: 'Can I request more than one service?',
    answer:
      'Yes, absolutely. We offer flexible packages that allow you to combine multiple services. Our team will work with you to customize a solution that aligns with your specific goals, timelines, and budget constraints.',
  },
  {
    id: 3,
    question: 'Do you provide course guidance?',
    answer:
      'Yes, we provide individual course guidance and academic mentoring. We help students and professionals choose the right paths, select modules that complement their career objectives, and navigate complex academic requirements.',
  },
  {
    id: 4,
    question: 'Do you help with documents and certificates?',
    answer:
      'We offer assistance with documentation verification, portfolio organization, and certification alignment. We guide you through the process of compiling and formatting your credentials to meet institutional and international standards.',
  },
  {
    id: 5,
    question: 'Do you support business registration and onboarding?',
    answer:
      'Yes, we support educational startups and businesses with registration procedures, compliance checks, and initial onboarding. We ensure your educational venture is set up for success from day one.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full bg-white py-14 px-4 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-3xl">

        {/* Tag */}
        <span className="mb-3 block text-center font-heading text-[12px] font-semibold uppercase tracking-[0.2em] text-[#6b7280] sm:text-[13px]">
          FAQ
        </span>

        {/* Heading */}
        <h2
          style={{ textAlign: 'center' }}
          className="mb-10 font-heading text-[36px] font-semibold leading-[1.1] tracking-[-0.03em] !text-black sm:mb-12 sm:text-[48px] lg:text-[56px] lg:leading-[1.05]"
        >
          Frequently asked questions
        </h2>

        {/* Accordion */}
        <div className="space-y-3">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-[#e5e5e5] bg-[#f9f9f9] shadow-sm'
                    : 'border-[#efefef] bg-[#f9f9f9] hover:border-[#e5e5e5]'
                }`}
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="flex w-full items-center justify-between gap-4 rounded-2xl px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e4d2b] focus-visible:ring-offset-2 sm:px-8"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="font-heading text-[15px] font-medium leading-snug text-black sm:text-[16px]">
                    {faq.question}
                  </span>

                  {/* Plus / Minus icon */}
                  <div className="relative mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-[#111827]">
                    <span className="absolute h-[2px] w-4 rounded-full bg-current transition-all duration-300" />
                    <span
                      className={`absolute h-4 w-[2px] rounded-full bg-current transition-all duration-300 ${
                        isOpen ? 'scale-y-0 opacity-0' : 'scale-y-100 opacity-100'
                      }`}
                    />
                  </div>
                </button>

                {/* Answer — CSS grid height animation */}
                <div
                  id={`faq-answer-${faq.id}`}
                  role="region"
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pl-6 pr-6 font-paragraph text-[13px] leading-[1.7] text-[#6b7280] sm:pl-8 sm:pr-8 sm:text-[14px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
