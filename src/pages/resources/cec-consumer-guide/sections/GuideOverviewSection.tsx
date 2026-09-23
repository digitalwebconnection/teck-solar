import { useReveal } from "../../../../hooks/useReveal";

export default function GuideOverviewSection() {
  const contentReveal = useReveal();

  return (
    <section className="bg-[#FAFAFA] border-b border-slate-200 overflow-hidden relative">
      {/* Background Graphic */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[150%] bg-[#144E9A]/10 blur-[120px] rounded-full rotate-45"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[120%] bg-[#E56D00]/10 blur-[100px] rounded-full rotate-45"></div>
      </div>

      <div 
        className={`max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-12 transition-all duration-1000 ease-out relative z-10 ${contentReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        ref={contentReveal.ref}
      >
        <div className="mb-20 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-slate-900 tracking-tighter leading-[1.05] mb-8 text-center justify-center">
            Stop guessing. <br className="hidden md:block" />
            Start with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#144E9A] to-[#E56D00]">the facts.</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed text-center max-w-4xl mx-auto">
            The Clean Energy Council (CEC) consumer guide strips away the marketing fluff to give you the raw, unbiased truth about switching to renewables.
          </p>
        </div>

        {/* Minimalist Column Layout (NO CARDS/BOXES) - Just text separated by thin lines */}
        <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-slate-200 border-y border-slate-200 bg-white shadow-sm rounded-md p-4 lg:p-8 relative">
          
          <div className="flex-1 py-12 lg:py-8 lg:pr-12 relative group">
            <div className="text-[120px] font-heading font-black text-slate-100 absolute top-0 right-4 select-none group-hover:text-[#E56D00]/40 transition-colors duration-500 z-0">01</div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Consumer Rights</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Understand Australian Consumer Law guarantees, what your warranties actually cover, and exactly who is responsible if something goes wrong.
              </p>
            </div>
          </div>

          <div className="flex-1 py-12 lg:py-8 lg:px-12 relative group">
            <div className="text-[120px] font-heading font-black text-slate-100 absolute top-0 right-4 select-none group-hover:text-[#144E9A]/40 transition-colors duration-500 z-0">02</div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">System Sizing</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Stop overpaying for massive systems. Learn how to calculate your exact household load and match it to the perfect inverter/panel ratio.
              </p>
            </div>
          </div>

          <div className="flex-1 py-12 lg:py-8 lg:pl-12 relative group">
            <div className="text-[120px] font-heading font-black text-slate-100 absolute top-0 right-4 select-none group-hover:text-emerald-500/40 transition-colors duration-500 z-0">03</div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Rebates & STCs</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Navigate the complex world of Small-scale Technology Certificates (STCs) and state-level loan schemes to maximize your government subsidies.
              </p>
            </div>
          </div>

        </div>

        <div className="mt-20 flex justify-start">
          <a 
            href="#download"
            className="group flex items-center gap-6 pb-2 border-b-2 border-slate-900 hover:border-[#E56D00] transition-colors duration-300"
          >
            <span className="text-2xl font-heading font-bold text-slate-900 group-hover:text-[#E56D00] transition-colors duration-300">Download the 4.2MB PDF</span>
            <svg className="w-8 h-8 text-slate-900 group-hover:text-[#E56D00] group-hover:translate-x-2 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>

      </div>
    </section>
  );
}
