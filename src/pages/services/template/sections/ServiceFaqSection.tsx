import { useState } from "react";
import { useReveal } from "../../../../hooks/useReveal";

interface Faq {
  question: string;
  answer: string;
}

interface ServiceFaqSectionProps {
  faqs: Faq[];
}

export default function ServiceFaqSection({ faqs }: ServiceFaqSectionProps) {
  const faqReveal = useReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section
      className="py-8 sm:py-14 bg-white relative overflow-hidden"
      ref={faqReveal.ref}
    >
      {/* Decorative Background Accent */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-blue-50/60 via-transparent to-transparent opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column: Heading & Info (Sticky) */}
          <div className="lg:col-span-5 relative">
            <div
              className="lg:sticky lg:top-32 transition-all duration-1000 ease-out"
              style={{
                opacity: faqReveal.visible ? 1 : 0,
                transform: faqReveal.visible
                  ? "translateY(0)"
                  : "translateY(48px)",
              }}
            >
              {/* Massive Watermark */}
             
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-blue-50 to-white text-brand-blue-700 font-bold text-xs tracking-[0.2em] uppercase mb-8 border border-brand-blue-100 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse"></span>
                  Support Center
                </div>
                
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-brand-blue-900 tracking-tight mb-8">
                  Got Questions? <br className="hidden lg:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-600 to-primary-500">
                    We've Got Answers
                  </span>
                </h2>
                
                <div className="w-16 h-1.5 bg-gradient-to-r from-primary-500 to-brand-blue-500 rounded-full mb-8"></div>
                
                <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10">
                  Find answers to the most common questions about our solar
                  installations and services.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Accordions */}
          <div className="lg:col-span-7 space-y-4 pt-4 lg:pt-0 ">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`bg-slate-200 rounded-xl border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-500 hover:shadow-[0_15px_40px_-15px_rgba(20,72,140,0.12)] ${faqReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between p-6 sm:p-8 text-left transition-colors group cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="flex items-center gap-5 sm:gap-6 pr-4">
                    {/* Big Padded Number */}
                    <span
                      className={`hidden sm:flex text-3xl font-heading font-black transition-colors duration-300 ${openFaq === i ? "text-primary-500" : "text-slate-400 group-hover:text-brand-blue-700"}`}
                    >
                      {(i + 1).toString().padStart(2, "0")}
                    </span>
                    <span
                      className={`font-heading font-extrabold text-lg sm:text-xl transition-colors duration-300 ${openFaq === i ? "text-brand-blue-900" : "text-slate-700 group-hover:text-brand-blue-900"}`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  <span
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 shadow-sm ${openFaq === i ? "bg-primary-500 text-white rotate-180 shadow-primary-500/30" : "bg-slate-50 text-brand-blue-600 group-hover:bg-brand-blue-50 group-hover:text-brand-blue-700"}`}
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
                  </span>
                </button>
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${openFaq === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
                    <div className="sm:pl-[4.5rem]">
                      <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-brand-blue-500 rounded-full mb-5"></div>
                      <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
