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
    <section className="w-full bg-white dark:bg-zinc-950 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        {/* Upper Tag */}
        <span className="block text-center text-xs md:text-sm font-semibold tracking-widest text-gray-500 dark:text-zinc-400 uppercase mb-3">
          FAQ
        </span>
        
        {/* Main Heading */}
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-gray-900 dark:text-zinc-50 mb-12 font-sans leading-tight md:leading-[1.1]">
          Frequently asked<br className="sm:hidden" /> questions
        </h2>

        {/* Accordion Questions Container */}
        <div className="space-y-4 mt-10">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`group border border-transparent rounded-2xl transition-all duration-300 ${
                  isOpen 
                    ? 'bg-gray-50/90 dark:bg-zinc-900/60 shadow-sm' 
                    : 'bg-gray-50/50 dark:bg-zinc-900/30 hover:bg-gray-50/90 dark:hover:bg-zinc-900/50'
                }`}
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between text-left py-5 px-6 sm:px-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 rounded-2xl"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <div className="flex items-center gap-4 sm:gap-5">
                    {/* Plus/Minus Morphing Icon */}
                    <div className="relative w-5 h-5 flex items-center justify-center flex-shrink-0 text-gray-600 dark:text-zinc-400 mt-0.5 transition-colors duration-200">
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
                    <span className="font-medium text-gray-900 dark:text-zinc-100 text-base sm:text-lg leading-snug transition-colors duration-200 group-hover:text-black dark:group-hover:text-white">
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
                    <p className="pb-6 pr-6 sm:pr-8 pl-[60px] sm:pl-[72px] text-gray-600 dark:text-zinc-400 leading-relaxed text-sm sm:text-base">
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