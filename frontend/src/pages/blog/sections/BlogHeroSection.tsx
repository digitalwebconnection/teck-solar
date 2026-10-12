import { BookOpen, TrendingUp } from "lucide-react";

export default function BlogHeroSection() {
  return (
    <div className="bg-[#FAFAFA] border-b border-slate-200/60 pt-12 pb-16 lg:pt-16 lg:pb-20 relative overflow-hidden">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#F38335]/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#14488C]/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
          
          {/* Left Column: Heading and Description */}
          <div className="w-full lg:w-7/12 text-left">

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              Empowering Your Clean Energy{" "}
              <span className="relative inline-block mt-1">
                <span className="relative z-10 text-white px-4 py-1.5 bg-[#14488C] rounded-2xl rotate-[-1.5deg] inline-block shadow-lg shadow-[#14488C]/25">
                  Future.
                </span>
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              Stay ahead with expert solar analysis, government rebate updates, battery technology breakdowns, and practical energy-saving strategies from Australia's clean energy specialists.
            </p>

            {/* Quick Metrics */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#14488C]/10 flex items-center justify-center text-[#14488C]">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Expert Insights</p>
                  <p className="text-sm font-black text-slate-800">Clean Energy Certified</p>
                </div>
              </div>

              <div className="h-8 w-px bg-slate-200 hidden sm:block" />

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F38335]/10 flex items-center justify-center text-[#F38335]">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Policy &amp; Rebates</p>
                  <p className="text-sm font-black text-slate-800">Updated for 2026</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Feature Card */}
          <div className="w-full lg:w-5/12 relative flex items-center justify-center">
            <div className="relative w-full max-w-md bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-7 shadow-xl shadow-slate-900/5 rotate-[1deg] hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-44 sm:h-52 rounded-2xl overflow-hidden mb-5 relative group">
                <img
                  src="/images/banners/residential-solar.webp"
                  alt="Teck Solar Knowledge Hub"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 bg-[#F38335] text-white text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                  Featured Topic
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-heading font-black text-slate-900 mb-2 leading-snug">
                Maximising Rooftop Solar Efficiency Across Australian Climates
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                Discover the engineering and battery pairings that yield maximum kilowatt-hour generation in high-temperature conditions.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
