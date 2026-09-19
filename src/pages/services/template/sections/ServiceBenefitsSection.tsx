import { type ReactNode } from "react";
import { useReveal } from "../../../../hooks/useReveal";

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

  // Split benefits into two rows
  const midIndex = Math.ceil(benefits.length / 2);
  const row1 = benefits.slice(0, midIndex);
  const row2 = benefits.slice(midIndex);

  // Repeat items 4 times to ensure they fill the screen and loop seamlessly
  // For a seamless -50% translation, we need an even number of repeats.
  const marquee1 = [...row1, ...row1, ...row1, ...row1, ...row1, ...row1];
  const marquee2 = [...row2, ...row2, ...row2, ...row2, ...row2, ...row2];

  return (
    <section
      className="py-8 sm:py-14 bg-slate-50 relative overflow-hidden flex flex-col items-center"
      ref={benefitsReveal.ref}
    >
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue-100/50 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-100/30 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ease-out ${benefitsReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-brand-blue-900 mt-2 tracking-tight">
            Why Choose Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-600 to-primary-500">
              {title}
            </span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            Discover the powerful advantages and long-term value our premium {title.toLowerCase()} solutions deliver.
          </p>
        </div>
      </div>

      {/* Marquee Section - Full Bleed */}
      <div className="w-full relative z-10 flex flex-col gap-4 sm:gap-6 overflow-hidden">
        
        {/* Top Marquee (Moves Left) */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] group">
          {marquee1.map((b, i) => (
            <div
              key={`row1-${i}`}
              className="w-[300px] sm:w-[360px] shrink-0 bg-white p-6 sm:p-7 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(20,72,140,0.06)] mx-2 sm:mx-3 flex flex-col gap-4 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(20,72,140,0.15)] hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue-50 to-brand-blue-100 text-brand-blue-600 flex items-center justify-center shrink-0 shadow-inner group-hover/card:scale-110 transition-transform duration-500">
                {b.icon}
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-heading font-extrabold text-brand-blue-900 mb-2">{b.title}</h3>
                <p className="text-[15px] text-slate-600 leading-relaxed font-medium">{b.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Marquee (Moves Right) */}
        <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused] group">
          {marquee2.map((b, i) => (
            <div
              key={`row2-${i}`}
              className="w-[300px] sm:w-[360px] shrink-0 bg-white p-6 sm:p-7 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(20,72,140,0.06)] mx-2 sm:mx-3 flex flex-col gap-4 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(20,72,140,0.15)] hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue-50 to-brand-blue-100 text-brand-blue-600 flex items-center justify-center shrink-0 shadow-inner group-hover/card:scale-110 transition-transform duration-500">
                {b.icon}
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-heading font-extrabold text-brand-blue-900 mb-2">{b.title}</h3>
                <p className="text-[15px] text-slate-600 leading-relaxed font-medium">{b.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fade Overlays for Marquee Edges */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none"></div>
      
    </section>
  );
}
