import { useState } from 'react';
import { useReveal } from '../../../../hooks/useReveal';

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
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white" ref={faqReveal.ref}>
      <div className="max-w-3xl mx-auto w-full">
        <div className={`text-center mb-14 transition-all duration-700 ${faqReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-primary-500 font-heading font-semibold text-sm tracking-widest uppercase">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mt-3">Frequently Asked Questions</h2>
          <div className="w-16 h-1 bg-primary-500 rounded-full mx-auto mt-4" />
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border border-navy-100 rounded-xl overflow-hidden transition-all duration-700 ${faqReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <button
                type="button"
                className="w-full flex items-center justify-between p-5 text-left hover:bg-navy-50 transition-colors"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="font-heading font-semibold text-navy-900 pr-4">{faq.question}</span>
                <svg className={`w-5 h-5 text-primary-500 shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="px-5 pb-5 text-navy-500 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
