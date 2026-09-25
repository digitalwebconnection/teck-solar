import { useReveal } from "../../../hooks/useReveal";
import { MotionAccordion } from "../../../components/ui/motion-accordion";

const faqs = [
  {
    question: "How much can I save by installing solar panels?",
    answer:
      "Savings vary based on your energy consumption, roof orientation, and the size of your system. Most of our residential customers see their energy bills drop by 50-80% immediately after installation, with the system paying for itself in 3-5 years.",
  },
  {
    question: "Do I need a battery with my solar system?",
    answer:
      "While a battery isn't strictly necessary, it allows you to store excess energy generated during the day for use at night or during power outages. This maximizes your self-consumption and provides energy independence. We can design a system that starts without a battery but is 'battery-ready' for future upgrades.",
  },
  {
    question: "How long does the installation process take?",
    answer:
      "The physical installation typically takes 1-2 days for residential systems and 1-2 weeks for commercial systems. However, the entire process from consultation, system design, grid connection approvals, to final commissioning usually takes 4-6 weeks.",
  },
  {
    question: "What maintenance do solar panels require?",
    answer:
      "Solar systems require very little maintenance. We recommend a professional clean and electrical safety check every 1-2 years to ensure optimal performance. Our systems include advanced monitoring apps so you can track performance and we can remotely diagnose any issues.",
  },
  {
    question: "Are there any government rebates available?",
    answer:
      "Yes! The Australian Federal Government provides STCs (Small-scale Technology Certificates) which act as an upfront discount on your system. Depending on your state, there may also be additional state-specific rebates or interest-free loans available. Our team handles all the rebate paperwork for you.",
  },
];

export default function FaqSection() {
  const { ref, visible } = useReveal(0.15);

  return (
    <section
      className="relative py-20 sm:py-24 lg:py-32 bg-white overflow-hidden border-b border-slate-200"
      ref={ref}
    >
      {/* Background ambient glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue-50/50 rounded-full blur-3xl pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E56D00]/5 rounded-full blur-3xl pointer-events-none transform -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Heading */}
          <div
            className={`lg:col-span-5 flex flex-col items-start text-left transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-0.5 bg-gradient-to-r from-transparent to-brand-blue-500 rounded-full" />
              <span className="text-sm font-heading font-bold uppercase tracking-[0.2em] text-brand-blue-600">
                Got Questions?
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-heading font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#144E9A] to-[#E56D00]">
                Questions
              </span>
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-8 max-w-lg">
              We know making the switch to solar is a big decision. Here are answers to some of the most common questions we get from our customers.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-900 text-white font-heading font-bold transition-all duration-300 hover:bg-[#144E9A] hover:shadow-lg hover:-translate-y-1"
            >
              Ask Another Question
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Right Column: Accordion */}
          <div
            className={`lg:col-span-7 transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <MotionAccordion items={faqs} gap={16} />
          </div>

        </div>
      </div>
    </section>
  );
}
