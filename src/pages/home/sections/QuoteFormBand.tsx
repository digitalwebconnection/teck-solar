import { useState } from "react";

import { useReveal } from "../../../hooks/useReveal";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How much can I realistically save on my power bills with solar?",
    answer:
      "Typically, Australian households save between 60% and 80% on their quarterly electricity bills. A properly sized 6.6kW to 10kW system can save you $1,200 to $2,500+ annually, with most residential systems paying for themselves within 3 to 5 years depending on your daytime energy consumption and local feed-in tariffs.",
  },
  {
    question: "Am I eligible for Australian Government solar rebates (STCs)?",
    answer:
      "Yes! Under Australia’s Small-scale Renewable Energy Scheme (SRES), eligible homeowners and businesses receive Small-scale Technology Certificates (STCs). This acts as a point-of-sale government discount, reducing the upfront purchase price of your solar system by up to $1,400 to $2,800. Teck Solar calculates and deducts this rebate directly on your initial quote.",
  },
  {
    question: "Do I need a battery storage system with my solar panels?",
    answer:
      "While solar panels generate energy during sunlight hours, adding a battery storage system (such as Tesla Powerwall, BYD, or Sungrow) stores excess daytime solar energy to power your property at night, during peak grid tariff hours, and during power outages. It is not mandatory to start, but it provides maximum energy independence.",
  },
  {
    question:
      "How long does installation take and what warranties are included?",
    answer:
      "Most residential rooftop installations are completed within a single day by our CEC-accredited electricians with zero hassle. Every installation comes with up to 25-year panel performance warranties, 10-year inverter warranties, and our comprehensive 10-year Teck Solar workmanship guarantee.",
  },
  {
    question:
      "How does Teck Solar monitor and support my system after installation?",
    answer:
      "Every system includes smart WiFi monitoring accessible from your smartphone, enabling you to inspect real-time generation, consumption, and savings 24/7. In addition, our dedicated Australian support team provides ongoing technical support, system health checks, and priority warranty service whenever you need assistance.",
  },
];

export default function QuoteFormBand() {
  const { ref, visible } = useReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="py-20 lg:py-24 bg-slate-50 border-t border-slate-200/80"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 text-xs font-semibold tracking-wider uppercase">
            Have Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 mt-3 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-4xl mx-auto">
            Everything you need to know about switching to solar, claiming
            government rebates, and maximizing your savings with Teck Solar.
          </p>
        </div>

        {/* 5 FAQs Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-primary-500/50 shadow-md shadow-primary-500/5 ring-1 ring-primary-500/20"
                    : "border-slate-200/80 hover:border-slate-300 shadow-xs"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-semibold text-slate-900 text-base sm:text-lg pr-4 flex items-center gap-3">
                    <span
                      className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? "bg-primary-500 text-white"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      0{index + 1}
                    </span>
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-primary-50 text-primary-600 rotate-180"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
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
