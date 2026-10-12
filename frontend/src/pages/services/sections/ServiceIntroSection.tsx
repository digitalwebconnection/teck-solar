import { useNavigate } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import { FannedImageCards } from './FannedImageCards';

interface ServiceIntroSectionProps {
  title: string;
  intro: string;
  introDetail?: string;
  featureImage: string;
}

export default function ServiceIntroSection({
  title,
  intro,
  featureImage,
}: ServiceIntroSectionProps) {
  const introReveal = useReveal();
  const imageReveal = useReveal();
  const navigate = useNavigate();

  return (
    <section className="py-8 lg:py-12 bg-white relative overflow-hidden" ref={introReveal.ref}>
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-24 items-center">
          {/* Left: Fanned Side Cards Image Showcase (Expanded Size) */}
          <div className="lg:col-span-7 relative">
            <div
              ref={imageReveal.ref}
              className={`transition-all duration-800 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                imageReveal.visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <FannedImageCards featureImage={featureImage} title={title} />
            </div>
          </div>

          {/* Right: Concise Streamlined Content with Generous Left Gap */}
          <div
            className={`lg:col-span-5 lg:pl-8 xl:pl-16 2xl:pl-24 transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              introReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-brand-blue-50 text-brand-blue-800 font-bold text-xs tracking-[0.2em] uppercase mb-4 border-l-2 border-brand-blue-500">
              Overview
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-brand-blue-900 leading-tight tracking-tight mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#144E9A] to-[#E56D00]">
                {title}
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal mb-8">
              {intro}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-brand-blue-900 text-white font-heading font-bold text-base transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto overflow-hidden shadow-[0_10px_20px_-10px_rgba(20,72,140,0.5)] cursor-pointer"
              >
                <div className="absolute inset-0 bg-brand-blue-700 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                <span className="relative z-10">Contact us</span>
                <svg
                  className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
