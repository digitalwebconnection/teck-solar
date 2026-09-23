import { useReveal } from '../../../../hooks/useReveal';

export default function WiFiHelpSection() {
  const reveal = useReveal();

  return (
    <section className="py-12 bg-white" ref={reveal.ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* The "Perfect Box" CTA */}
        <div className={`bg-white border border-brand-blue-100 shadow-[0_8px_30px_rgb(20,72,140,0.08)] rounded-2xl overflow-hidden relative flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12 gap-8 transition-all duration-700 ${reveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          {/* Subtle Blue Accent Line on Top */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-blue-500 to-primary-500"></div>

          {/* Left Content */}
          <div className="lg:max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-blue-900 tracking-tight leading-tight">
              Need <span className="text-primary-500">Live Help?</span>
            </h2>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed font-medium">
              Our technical support team can walk you through the entire setup process over the phone. Don't hesitate to reach out.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
            <a
              href="tel:1300000000"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-blue-500 text-white font-heading font-bold text-lg transition-all duration-300 hover:bg-brand-blue-600 hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Call 1300 000 000
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
