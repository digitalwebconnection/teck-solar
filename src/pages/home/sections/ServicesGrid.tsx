import { useReveal } from "../../../hooks/useReveal";
import InfiniteSpiral from "./InfiniteSpiral";

const services = [
  {
    title: "Residential Solar",
    description:
      "Transform your home with a customised solar power system designed to maximise savings and energy independence.",
    image: "/images/service-residential.jpg",
    link: "/services/residential-solar",
  },
  {
    title: "Commercial Solar",
    description:
      "Scalable solar solutions for businesses of all sizes. Reduce operational costs and boost your green credentials.",
    image: "/images/service-commercial.jpg",
    link: "/services/commercial-solar",
  },
  {
    title: "Battery Storage",
    description:
      "Store excess solar energy and power your home day and night with premium battery storage systems.",
    image: "/images/service-battery.jpg",
    link: "/services/battery-storage",
  },
  {
    title: "EV Charger",
    description:
      "Future-proof your property with smart EV charging solutions integrated with your solar system.",
    image: "/images/service-ev-charger.jpg",
    link: "/services/ev-charger",
  },
  {
    title: "Battery Materials",
    description:
      "We source only the highest quality battery cells and materials from trusted global manufacturers.",
    image: "/images/service-battery.jpg",
    link: "/services/battery-storage",
  },
  {
    title: "Charge Controllers",
    description:
      "Advanced MPPT and PWM charge controllers to optimise your solar system performance and battery life.",
    image: "/images/service-commercial.jpg",
    link: "/services/residential-solar",
  },
];

export default function ServicesGrid() {
  const { ref, visible } = useReveal();

  return (
    <section
      className="relative py-8 lg:py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 overflow-hidden"
      ref={ref}
    >
      {/* Premium Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-slate-50 pointer-events-none" />

      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue-100/40 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#E56D00]/10 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Premium Section Header */}
        <div
          className={`flex flex-col items-center text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-0.5 bg-gradient-to-r from-transparent to-brand-blue-500 rounded-full" />
            <span className="text-sm font-heading font-bold uppercase tracking-[0.2em] text-brand-blue-600">
              What We Offer
            </span>
            <span className="w-10 h-0.5 bg-gradient-to-l from-transparent to-brand-blue-500 rounded-full" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-heading font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Our Premium{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#144E9A] to-[#E56D00]">
              Services
            </span>
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed font-light">
            Comprehensive solar energy and storage solutions tailored for
            maximum efficiency, reliability, and long-term sustainability.
          </p>
        </div>

        {/* Infinite 3D Spiral & Feature Highlights */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 items-center transition-all duration-1000 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Left Features */}
          <div className="lg:col-span-3 space-y-4 lg:space-y-8 px-4 lg:px-0 z-20">
            {/* Feature 1 */}
            <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-lg shadow-brand-blue-900/5 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-10 h-10 rounded-full bg-brand-blue-100 text-brand-blue-600 flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Maximized Yield</h3>
              <p className="text-sm text-slate-600">Advanced MPPT technology extracts every drop of solar energy.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-lg shadow-brand-blue-900/5 hover:-translate-y-1 transition-transform duration-300 lg:translate-x-4">
              <div className="w-10 h-10 rounded-full bg-brand-blue-100 text-brand-blue-600 flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Tier 1 Panels</h3>
              <p className="text-sm text-slate-600">Sourced exclusively from world-leading premium manufacturers.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-lg shadow-brand-blue-900/5 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-10 h-10 rounded-full bg-brand-blue-100 text-brand-blue-600 flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Smart Monitoring</h3>
              <p className="text-sm text-slate-600">Track your real-time performance with our 24/7 mobile app.</p>
            </div>
          </div>

          {/* Center Spiral */}
          <div className="lg:col-span-6 z-10 relative">
            {/* Giant decorative background text behind the spiral */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
               <span className="text-[12rem] font-black text-slate-200/40 select-none tracking-tighter -rotate-90 lg:rotate-0 whitespace-nowrap">TECK</span>
            </div>
            
            <div
              style={{ height: "600px", position: "relative", width: "100%" }}
              className="-mx-4 sm:mx-0 w-[calc(100%+2rem)] sm:w-full"
            >
              <InfiniteSpiral
                items={services.map((s) => ({
                  src: s.image,
                  alt: s.title,
                  title: s.title,
                  link: s.link,
                }))}
                animationMode="auto"
                speed={0.55}
                radius={240}
                cardWidth={140}
                cardHeight={140}
                verticalSpacing={90}
                perspective={1000}
                cardRadius={6}
                centerScale={1.2}
                edgeBlur={6}
                cardsPerTurn={7}
                pauseOnHover={true}
              />
            </div>
          </div>

          {/* Right Features */}
          <div className="lg:col-span-3 space-y-4 lg:space-y-8 px-4 lg:px-0 z-20">
            {/* Feature 4 */}
            <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-lg shadow-[#E56D00]/5 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-10 h-10 rounded-full bg-[#E56D00]/10 text-[#E56D00] flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">10-Year Warranty</h3>
              <p className="text-sm text-slate-600">Comprehensive coverage for total peace of mind.</p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-lg shadow-[#E56D00]/5 hover:-translate-y-1 transition-transform duration-300 lg:-translate-x-4">
              <div className="w-10 h-10 rounded-full bg-[#E56D00]/10 text-[#E56D00] flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Expert Installers</h3>
              <p className="text-sm text-slate-600">Installed by our certified, highly-trained in-house teams.</p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-lg shadow-[#E56D00]/5 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-10 h-10 rounded-full bg-[#E56D00]/10 text-[#E56D00] flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Grid Independence</h3>
              <p className="text-sm text-slate-600">Seamless integration with battery storage solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
