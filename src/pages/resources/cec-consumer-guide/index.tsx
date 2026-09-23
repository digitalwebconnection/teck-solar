import GuideOverviewSection from "./sections/GuideOverviewSection";
import GuideTopicsSection from "./sections/GuideTopicsSection";
import SharedCTA from "../../../components/SharedCTA";

export default function CECConsumerGuide() {
  return (
    <div className="bg-slate-50 min-h-screen selection:bg-amber-500 selection:text-white">
      {/* Dynamic Floating Documents Hero */}
      <div className="py-8 lg:py-12 border-b border-slate-200/50 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
            
            {/* Left Content (Typography) */}
            <div className="w-full lg:w-5/12 relative z-10">
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-black text-slate-900 tracking-tighter leading-[1.05] mb-8">
                Consumer <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 text-white px-5 py-2 bg-[#144E9A] rounded-2xl rotate-[-2deg] inline-block shadow-xl shadow-[#144E9A]/20">
                    Guide.
                  </span>
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
                The official Clean Energy Council guide to confidently buying
                and installing solar and battery systems for your home or
                business.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-200 shadow-sm text-sm font-bold text-slate-700">
                  <svg
                    className="w-5 h-5 text-amber-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" />
                  </svg>
                  Official Resource
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-200 shadow-sm text-sm font-bold text-slate-700">
                  <svg
                    className="w-5 h-5 text-slate-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  Read Online
                </div>
              </div>
            </div>

            {/* Right Abstract Visual */}
            <div className="w-full lg:w-6/12 h-[450px] lg:h-[550px] relative perspective-[1000px] flex items-center justify-center mt-12 lg:mt-0">
              
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-transparent to-slate-900/10 rounded-full blur-3xl opacity-60" />
              
              {/* Radiating Signal Rings Behind */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-slate-900/5 rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-slate-900/5 rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite] animation-delay-1000" />
              
              {/* Main Guide Card */}
              <div className="relative w-[280px] sm:w-[320px] bg-white border-4 border-white rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] transform rotate-[-4deg] p-6 flex flex-col z-20 transition-transform duration-700 hover:rotate-0 hover:-translate-y-4 group">
                
                {/* Image Cover */}
                <div className="w-full h-40 sm:h-48 rounded-2xl overflow-hidden mb-6 relative">
                  <img
                    src="/images/hero-residential.jpg"
                    alt="Solar Home"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-slate-900/10"></div>
                  
                </div>

                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
                    CEC Edition
                  </span>
                  <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded-full uppercase tracking-wider">
                    v2024
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-heading font-black text-slate-900 mb-6 leading-tight">
                  Solar & Battery Guide
                </h3>

                <div className="space-y-3 mt-auto">
                  <div className="h-1.5 w-full bg-slate-100 rounded-full"></div>
                  <div className="h-1.5 w-5/6 bg-slate-100 rounded-full"></div>
                  <div className="h-1.5 w-3/4 bg-slate-100 rounded-full"></div>
                </div>
              </div>

              {/* Floating Element: Bottom Badge */}
              <div className="absolute bottom-12 left-4 lg:left-0 bg-slate-900 p-4 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.4)] z-30 transform rotate-[6deg] hover:rotate-[2deg] transition-transform duration-500 flex items-center gap-4 w-60">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-bold text-sm">
                    Approved Retailer
                  </div>
                  <div className="text-slate-400 text-xs mt-0.5">
                    Standards Compliant
                  </div>
                </div>
              </div>

              {/* Floating Element: Top Badge */}
              <div className="absolute top-16 right-0 lg:right-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-30 transform -rotate-[4deg] hover:rotate-[2deg] transition-transform duration-500 flex items-center gap-4 hidden sm:flex">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-slate-900 font-bold text-sm">
                    Download Ready
                  </div>
                  <div className="text-slate-500 font-semibold text-xs">
                    PDF Format
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 bg-white">
        <GuideOverviewSection />
        <div className="bg-slate-50 py-24 lg:py-12">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            <GuideTopicsSection />
          </div>
        </div>
      </div>

      {/* Standalone CTA Section */}
      <SharedCTA />
    </div>
  );
}
