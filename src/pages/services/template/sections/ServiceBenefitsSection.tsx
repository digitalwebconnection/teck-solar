import { type ReactNode } from 'react';
import { useReveal } from '../../../../hooks/useReveal';

interface Benefit {
  icon: ReactNode;
  title: string;
  description: string;
}

interface ServiceBenefitsSectionProps {
  title: string;
  benefits: Benefit[];
}

export default function ServiceBenefitsSection({
  title,
  benefits,
}: ServiceBenefitsSectionProps) {
  const benefitsReveal = useReveal();

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-navy-50" ref={benefitsReveal.ref}>
      <div className="max-w-7xl mx-auto w-full">
        <div className={`text-center mb-14 transition-all duration-700 ${benefitsReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-primary-500 font-heading font-semibold text-sm tracking-widest uppercase">Key Benefits</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mt-3">Why Choose Our {title}</h2>
          <div className="w-16 h-1 bg-primary-500 rounded-full mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div
              key={i}
              className={`bg-white p-8 rounded-2xl hover:-translate-y-1.5 hover:shadow-xl border border-navy-100 group transition-all duration-700 ${benefitsReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white flex items-center justify-center mb-5 group-hover:animate-pulse-glow">
                {b.icon}
              </div>
              <h3 className="text-lg font-heading font-semibold text-navy-900">{b.title}</h3>
              <p className="text-navy-500 text-sm mt-3 leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
