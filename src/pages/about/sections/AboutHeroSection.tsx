import { Link } from "react-router-dom";

const checkpoints = [
  "CEC Approved Solar Retailer",
  "25-Year Performance Warranty",
  "Up to $1,400 Govt Rebates Applied",
];

const stats = [
  {
    number: "10",
    symbol: "+",
    label: "Years of Experience",
    sub: "Pioneering solar since 2015",
    color: "blue",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    number: "2,500",
    symbol: "+",
    label: "Installations",
    sub: "Across NSW, VIC & QLD",
    color: "orange",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    number: "50",
    symbol: "MW+",
    label: "Installed Capacity",
    sub: "Clean renewable power",
    color: "blue",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    number: "100",
    symbol: "%",
    label: "CEC Accredited",
    sub: "In-house certified team",
    color: "orange",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
];

export default function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden bg-white text-slate-900 pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-slate-100">
      {/* Delicate ambient color glows - Pure light aesthetic */}
      <div className="absolute top-0 right-1/4 w-[460px] h-[460px] bg-brand-blue-50/60 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-10 w-[380px] h-[380px] bg-primary-50/60 rounded-full blur-3xl pointer-events-none translate-y-1/3" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Hero Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Core Narrative */}
          <div className="lg:col-span-7">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-heading font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Powering Australia with{" "}
              <span className="bg-gradient-to-r from-brand-blue-500 via-brand-blue-600 to-primary-500 bg-clip-text text-transparent">
                Clean Solar Energy
              </span>
            </h1>

            {/* Concise Summary */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Teck Solar is a Clean Energy Council approved solar retailer
              delivering high-efficiency rooftop systems, battery storage, and
              EV charging across Australia.
            </p>

            {/* 3 Styled Value Checkpoint Pills */}
            <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
              {checkpoints.map((item, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200/80 text-xs sm:text-sm font-medium text-slate-800 shadow-2xs"
                >
                  <span className="w-4 h-4 rounded-full bg-brand-blue-500 text-white flex items-center justify-center shrink-0">
                    <svg
                      className="w-2.5 h-2.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-heading font-bold text-white bg-primary-500 hover:bg-primary-600 shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/35 hover:-translate-y-0.5 active:scale-95 transition-all text-sm sm:text-base cursor-pointer"
              >
                <span>Get a Free Quote</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.4}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>

              <a
                href="#our-story"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-heading font-bold text-brand-blue-500 bg-white border-2 border-brand-blue-500 hover:bg-brand-blue-500 hover:text-white shadow-2xs hover:-translate-y-0.5 active:scale-95 transition-all text-sm sm:text-base cursor-pointer"
              >
                <span>Our Story</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.4}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Showcase with Layered Floating Elements */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Subtle Layered Background Frame for Depth */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-brand-blue-100/50 to-primary-100/40 rounded-xl transform rotate-1 scale-[1.02] pointer-events-none" />

              {/* Main Image Container */}
              <div className="relative rounded-xl overflow-hidden shadow-xl shadow-slate-900/10 border border-slate-200/90 bg-white">
                <img
                  src="/images/about-team.jpg"
                  alt="Teck Solar certified installation team"
                  className="w-full h-[340px] sm:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent pointer-events-none" />
              </div>
              {/* Bottom-Left Floating Review Badge */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 items-center gap-3.5 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl shadow-slate-900/10 py-3 px-4 rounded-2xl z-20">
                <span className="text-primary-500 font-heading font-black text-xl flex items-center gap-1">
                  <span>★</span>
                  <span>4.9</span>
                </span>
                <div className="text-left border-l border-slate-200 pl-3.5">
                  <span className="text-xs font-heading font-bold text-slate-900 block leading-tight">
                    2,500+ Installs
                  </span>
                  <span className="text-[11px] text-slate-500 block mt-0.5">
                    Australia Wide
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats: Editorial Minimalist Typography (Compact) */}
        <div className="mt-12 sm:mt-16 border-t border-slate-200/60 pt-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 lg:gap-8">
            {stats.map((item, i) => (
              <div key={i} className="relative group flex flex-col items-center text-center">
                {/* Subtle Icon & Label Header */}
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-slate-50 transition-colors duration-300 ${
                    item.color === 'orange' 
                      ? 'text-primary-500 group-hover:bg-primary-50' 
                      : 'text-brand-blue-500 group-hover:bg-brand-blue-50'
                  }`}>
                    <div className="scale-75">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="text-xs sm:text-sm font-heading font-bold text-slate-900 tracking-wide uppercase">
                    {item.label}
                  </h4>
                </div>
                
                {/* Gradient Number */}
                <div className="flex items-baseline justify-center gap-1 mb-1">
                  <span className={`text-4xl sm:text-5xl font-heading font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-br transition-transform duration-500 group-hover:scale-105 ${
                    item.color === 'orange' ? 'from-primary-500 to-orange-400' : 'from-brand-blue-600 to-blue-400'
                  }`}>
                    {item.number}
                  </span>
                  <span className={`text-xl sm:text-2xl font-heading font-black ${
                    item.color === 'orange' ? 'text-primary-500' : 'text-brand-blue-500'
                  }`}>
                    {item.symbol}
                  </span>
                </div>
                
                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-[200px]">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
