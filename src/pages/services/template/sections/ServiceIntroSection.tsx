import { Link } from 'react-router-dom';
import { useReveal } from '../../../../hooks/useReveal';

interface ServiceIntroSectionProps {
  title: string;
  intro: string;
  introDetail: string;
  featureImage: string;
}

export default function ServiceIntroSection({
  title,
  intro,
  introDetail,
  featureImage,
}: ServiceIntroSectionProps) {
  const introReveal = useReveal();

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white" ref={introReveal.ref}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${introReveal.visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="text-primary-500 font-heading font-semibold text-sm tracking-widest uppercase">Overview</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mt-3 leading-tight">{title}</h2>
            <p className="mt-5 text-navy-500 leading-relaxed">{intro}</p>
            <p className="mt-4 text-navy-500 leading-relaxed">{introDetail}</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-heading font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 hover:-translate-y-0.5 shadow-md shadow-primary-500/25 transition-all mt-8"
            >
              Get a Free Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
          <div className={`transition-all duration-700 delay-200 ${introReveal.visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={featureImage} alt={title} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
