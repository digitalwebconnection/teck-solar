
import { useQuoteModal } from '../../../../context/QuoteModalContext';
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
  const imageReveal = useReveal();
  const { openModal } = useQuoteModal();

  return (
    <section className="py-8 lg:py-14 bg-white relative overflow-hidden" ref={introReveal.ref}>
      
      {/* Massive Watermark Text */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 pointer-events-none z-0">
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
            
          {/* Left: Elegant Offset Framed Image Composition */}
          <div className="lg:col-span-5 relative pt-6 pr-6">
            <div 
              ref={imageReveal.ref}
              className={`relative transition-all duration-1000 delay-200 ease-out ${imageReveal.visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}
            >
              
              {/* Decorative Accent Dots */}
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-[radial-gradient(#14488C_2px,transparent_2px)] bg-[size:16px_16px] opacity-20 pointer-events-none z-0"></div>

              {/* Offset Solid Blue Frame */}
              <div className="absolute top-8 left-8 right-0 bottom-0 bg-gradient-to-br from-brand-blue-600 to-brand-blue-900 rounded-[2rem] shadow-2xl z-0 pointer-events-none transform transition-transform duration-700 hover:translate-x-2 hover:translate-y-2"></div>

              {/* Main Image Container */}
              <div className="relative z-10 w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(20,72,140,0.3)] border-8 border-white mr-8 mb-8 bg-slate-100">
                <div className="absolute inset-0 bg-brand-blue-900/10 mix-blend-multiply z-10 pointer-events-none"></div>
                <img 
                  src={featureImage} 
                  alt={title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000" 
                />
              </div>

              {/* Floating Quality Glass Badge */}
              <div className="absolute bottom-2 -left-6 lg:-left-12 bg-white/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-white flex items-center gap-4 z-20 animate-float">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 flex items-center justify-center shrink-0 shadow-inner">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm sm:text-base font-bold text-slate-800 leading-tight">Tier 1 Quality</p>
                  <p className="text-xs sm:text-sm text-brand-blue-600 font-semibold uppercase tracking-wider mt-0.5">Guaranteed</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Content */}
          <div className={`lg:col-start-7 lg:col-span-6 transition-all duration-1000 ease-out ${introReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-blue-50 text-brand-blue-800 font-bold text-xs tracking-[0.2em] uppercase mb-6 border-l-2 border-brand-blue-500">
              Overview
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-brand-blue-900 leading-tight tracking-tight mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#144E9A] to-[#E56D00]">{title}</span>
            </h2>
            
            <div className="w-full h-px bg-gradient-to-r from-brand-blue-100 to-transparent mb-8"></div>
            
            <p className="text-xl text-slate-700 leading-relaxed font-medium mb-6 relative">
              {/* Subtle accent line on left of text */}
              <span className="absolute -left-4 top-2 w-1 h-full bg-brand-blue-200 rounded-full hidden sm:block"></span>
              {intro}
            </p>
            
            <p className="text-slate-500 leading-relaxed text-lg mb-10">
              {introDetail}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button
                type="button"
                onClick={openModal}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-brand-blue-900 text-white font-heading font-bold text-lg transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto overflow-hidden shadow-[0_10px_20px_-10px_rgba(20,72,140,0.5)] cursor-pointer"
              >
                {/* Button Hover Effect Layer */}
                <div className="absolute inset-0 bg-brand-blue-700 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                
                <span className="relative z-10">Get Your Free Quote</span>
                <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
