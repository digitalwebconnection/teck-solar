import { useReveal } from "@/hooks/useReveal";
import { MotionAccordion } from "@/components/effects/motion-accordion";
import { homeFaqs } from "@/data/faqs";

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
              Everything You Need <br className="hidden sm:inline" />
              To Know About Solar
            </h2>
            
            <p className="text-lg text-slate-600 font-light leading-relaxed mb-8 max-w-lg">
              Switching to solar is a significant decision. Here are clear, straightforward answers to the questions Australian homeowners ask us most.
            </p>

            <a
              href="tel:1300000832"
              className="inline-flex items-center gap-3 text-brand-blue-600 font-heading font-semibold hover:text-[#E56D00] transition-colors group"
            >
              <span>Have a specific question? Speak to an expert</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <MotionAccordion items={homeFaqs} gap={16} />
          </div>

        </div>
      </div>
    </section>
  );
}
