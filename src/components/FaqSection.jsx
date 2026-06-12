import React, { useState } from 'react';

// FAQ data structure matching the provided design and layout
const faqData = [
  {
    id: 1,
    question: "What services does KRE provide?",
    answer: "KRE provides a comprehensive suite of academic and professional consulting services, including curriculum development, institutional design, accreditation support, and personalized learning pathways tailored to meet modern educational standards."
  },
  {
    id: 2,
    question: "Can I request more than one service?",
    answer: "Yes, absolutely. We offer flexible packages that allow you to combine multiple services. Our team will work with you to customize a solution that aligns with your specific goals, timelines, and budget constraints."
  },
  {
    id: 3,
    question: "Do you provide course guidance?",
    answer: "Yes, we provide individual course guidance and academic mentoring. We help students and professionals choose the right paths, select modules that complement their career objectives, and navigate complex academic requirements."
  },
  {
    id: 4,
    question: "Do you help with documents and certificates?",
    answer: "We offer assistance with documentation verification, portfolio organization, and certification alignment. We guide you through the process of compiling and formatting your credentials to meet institutional and international standards."
  },
  {
    id: 5,
    question: "Do you support business registration and onboarding?",
    answer: "Yes, we support educational startups and businesses with registration procedures, compliance checks, and initial onboarding. We ensure your educational venture is set up for success from day one."
  }
];

export default function FaqSection() {
  // State to track the index of the currently open FAQ.
  // Set to null if all FAQs are closed.
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-white py-12 px-5 sm:py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <span className="mb-4 block text-center font-heading text-[13px] font-semibold uppercase tracking-[0.18em] text-black sm:mb-5 sm:text-[16px]">
          FAQ
        </span>

        <h2 className="mx-auto mb-8 max-w-[21rem] text-center text-balance !text-black sm:mb-10 sm:max-w-none lg:mb-12">
          Frequently asked questions
        </h2>

        {/* Accordion Questions Container */}
        <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`group rounded-2xl border border-transparent transition-all duration-300 ${
                  isOpen
                    ? 'bg-[#f5f5f5] shadow-sm'
                    : 'bg-[#fafafa] hover:bg-[#f5f5f5]'
                }`}
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="flex w-full items-center justify-center rounded-2xl px-4 py-4 text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 sm:justify-between sm:px-6 sm:py-5 sm:text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <div className="flex flex-col items-center gap-2.5 sm:flex-row sm:items-center sm:gap-5">
                    <div className="relative flex h-5 w-5 shrink-0 items-center justify-center text-black">
                      {/* Horizontal bar */}
                      <span className="absolute w-4 h-[2px] bg-current rounded-full transition-transform duration-300 ease-in-out" />
                      {/* Vertical bar (fades out and rotates to hide when open) */}
                      <span 
                        className={`absolute w-[2px] h-4 bg-current rounded-full transition-all duration-300 ease-in-out ${
                          isOpen ? 'rotate-90 opacity-0 scale-y-0' : 'rotate-0 opacity-100 scale-y-100'
                        }`}
                      />
                    </div>

                    {/* Question Text */}
                    <span className="max-w-[16rem] font-heading text-[14px] font-medium leading-snug text-black sm:max-w-none sm:text-[16px]">
                      {faq.question}
                    </span>
                  </div>
                </button>

                {/* Answer Wrapper with Grid-based Auto-height Transition */}
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
                    <p className="px-4 pb-5 text-center text-[13px] leading-relaxed text-[#4b5563] sm:px-8 sm:pb-6 sm:pl-[72px] sm:text-left sm:text-[14px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}