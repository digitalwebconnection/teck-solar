import { Link } from "react-router-dom";
import { useReveal } from "../../../hooks/useReveal";

const checkpoints = [
  "CEC Approved Solar Retailer",
  "25-Year Performance Warranty",
];

const stats = [
  {
    number: "10",
    symbol: "+",
    label: "Years of Experience",
    sub: "Pioneering solar since 2015",
    color: "blue",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
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
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
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
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
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
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
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
  const heroReveal = useReveal();
  const imageReveal = useReveal();
  const statsReveal = useReveal();
  return (
    <>
      <section className="relative overflow-hidden bg-slate-50 py-8 lg:py-12 border-b border-slate-200">
        {/* Background Decorative Blur Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-brand-blue-100/50 to-transparent rounded-full blur-3xl pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#E56D00]/10 to-transparent rounded-full blur-3xl pointer-events-none transform -translate-x-1/3 translate-y-1/3" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top 2-Column Hero Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
            {/* Left Column: Core Narrative */}
            <div
              className={`lg:col-span-7 lg:pr-8 xl:pr-16 flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-1000 ease-out ${heroReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              ref={heroReveal.ref}
            >
              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tighter leading-[1.1] mb-6 w-full">
                Powering Australia with{" "} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#144E9A] to-[#E56D00]">
                  Clean Solar Energy.
                </span>
              </h1>

              {/* Concise Summary */}
              <p className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-2xl font-light mb-8 w-full">
                Teck Solar is a Clean Energy Council approved solar retailer
                delivering high-efficiency rooftop systems, battery storage, and
                EV charging across Australia. We build systems designed to perform
                and built to last.
              </p>

              {/* Premium Checkpoints */}
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 w-full">
                {checkpoints.map((item, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.08)] text-sm font-bold text-slate-700 w-full sm:w-auto"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#E56D00] to-orange-400 flex items-center justify-center shrink-0 shadow-inner">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Premium Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#E56D00] text-white font-heading font-bold text-lg transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto overflow-hidden shadow-[0_10px_20px_-10px_rgba(229,109,0,0.5)]"
                >
                  <div className="absolute inset-0 bg-[#cc6100] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                  <span className="relative z-10">Get a Free Quote</span>
                  <svg
                    className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform"
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
                </Link>

                <a
                  href="#our-story"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white border-2 border-slate-200 text-slate-700 font-heading font-bold text-lg transition-all duration-300 hover:border-brand-blue-500 hover:text-brand-blue-600 hover:-translate-y-1 w-full sm:w-auto"
                >
                  <span className="relative z-10">Our Story</span>
                  <svg
                    className="w-5 h-5 relative z-10 group-hover:translate-y-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column: Visual Showcase */}
            <div
              className={`lg:col-span-5 relative transition-all duration-1000 delay-300 ease-out ${imageReveal.visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
              ref={imageReveal.ref}
            >
              {/* The offset accent frame */}
              <div className="absolute top-6 left-6 right-0 bottom-0 bg-gradient-to-br from-[#144E9A] to-brand-blue-900 rounded-3xl shadow-2xl z-0 transform transition-transform duration-700 hover:translate-x-2 hover:translate-y-2 pointer-events-none"></div>

              {/* Main Image Container */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(20,72,140,0.3)] border-8 border-white mr-6 mb-6 bg-slate-100 group">
                <div className="absolute inset-0 bg-brand-blue-900/10 mix-blend-multiply z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-0"></div>
                <img
                  src="/images/about-team.jpg"
                  alt="Teck Solar certified installation team"
                  className="w-full h-[400px] lg:h-[500px] object-cover transform transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

              {/* Floating Review Badge */}
              <div className="absolute bottom-12 -left-8 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-slate-100 flex items-center gap-4 z-20 animate-[float_4s_ease-in-out_infinite]">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E56D00] to-orange-400 flex items-center justify-center shrink-0 shadow-inner">
                  <span className="text-white font-heading font-black text-2xl">
                    ★
                  </span>
                </div>
                <div>
                  <p className="text-base font-bold text-slate-800 leading-tight">
                    4.9/5 Rating
                  </p>
                  <p className="text-sm text-slate-500 font-medium mt-0.5">
                    2,500+ Happy Clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Stats Section */}
      <section className="py-16 lg:py-24 bg-slate-100 relative overflow-hidden border-b border-slate-200">
        {/* Subtle decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue-500/5 rounded-full blur-3xl pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl pointer-events-none transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 transition-all duration-1000 ease-out ${statsReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            ref={statsReveal.ref}
          >
            {stats.map((item, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-xl p-8 border border-slate-200 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] hover:border-brand-blue-200 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col"
              >
                {/* Subtle hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="relative z-10">
                  {/* Icon Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors duration-500 ${
                        item.color === "orange"
                          ? "bg-gradient-to-br from-[#E56D00]/10 to-orange-400/10 text-[#E56D00] group-hover:bg-[#E56D00] group-hover:text-white"
                          : "bg-gradient-to-br from-[#144E9A]/10 to-brand-blue-500/10 text-[#144E9A] group-hover:bg-[#144E9A] group-hover:text-white"
                      }`}
                    >
                      {item.icon}
                    </div>
                  </div>

                  {/* Number */}
                  <div className="flex items-baseline gap-1 mb-3">
                    <span
                      className={`text-5xl font-heading font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r ${
                        item.color === "orange"
                          ? "from-[#E56D00] to-orange-400"
                          : "from-[#144E9A] to-brand-blue-500"
                      }`}
                    >
                      {item.number}
                    </span>
                    <span
                      className={`text-2xl font-heading font-black ${
                        item.color === "orange"
                          ? "text-[#E56D00]"
                          : "text-[#144E9A]"
                      }`}
                    >
                      {item.symbol}
                    </span>
                  </div>

                  {/* Text */}
                  <h4 className="text-lg font-heading font-bold text-slate-900 mb-1.5">
                    {item.label}
                  </h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
