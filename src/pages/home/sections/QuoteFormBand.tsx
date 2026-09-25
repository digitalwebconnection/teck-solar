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
      "Most residential rooftop installations are completed within a single day by our SAA-accredited electricians with zero hassle. Every installation comes with up to 25-year panel performance warranties, 10-year inverter warranties, and our comprehensive 10-year Teck Solar workmanship guarantee.",
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
      className="py-8 lg:py-12 bg-slate-50/70 relative border-t border-slate-100 overflow-hidden"
      ref={ref}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E56D00]/5 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-14 lg:mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#144E9A] to-[#E56D00] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="mt-5 text-slate-500 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
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
                className={`bg-white rounded-2xl border transition-all duration-500 overflow-hidden ${
                  isOpen
                    ? "border-brand-blue-200 shadow-[0_8px_30px_rgb(20,78,154,0.08)] ring-1 ring-brand-blue-50"
                    : "border-slate-200/80 hover:border-brand-blue-100 shadow-sm hover:shadow-md"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 sm:p-7 text-left cursor-pointer transition-colors group"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-slate-900 text-base sm:text-lg pr-4 flex items-center gap-4">
                    <span
                      className={`w-10 h-10 rounded-xl text-sm font-extrabold flex items-center justify-center shrink-0 transition-all duration-500 shadow-sm ${
                        isOpen
                          ? "bg-gradient-to-br from-[#144E9A] to-[#E56D00] text-white shadow-[#144E9A]/20"
                          : "bg-slate-50 text-slate-400 border border-slate-100 group-hover:bg-slate-100 group-hover:text-brand-blue-600"
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <span className="group-hover:text-brand-blue-700 transition-colors duration-300">
                      {faq.question}
                    </span>
                  </span>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ${
                      isOpen
                        ? "bg-[#E56D00]/10 text-[#E56D00] rotate-180"
                        : "bg-slate-50 text-slate-400 border border-slate-100 group-hover:bg-slate-100 group-hover:text-brand-blue-500"
                    }`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 sm:px-7 pb-7 pt-1">
                    <div className="pl-14">
                      <p className="text-slate-600 text-base leading-relaxed font-light">
                        {faq.answer}
                      </p>
                    </div>
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
