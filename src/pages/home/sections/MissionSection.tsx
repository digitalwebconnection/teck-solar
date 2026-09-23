import { Link } from "react-router-dom";
import { useReveal } from "../../../hooks/useReveal";

export default function MissionSection() {
  const { ref, visible } = useReveal(0.15);

  return (
    <section
      className="relative py-6 sm:py-8 lg:py-12 bg-white overflow-hidden border-b border-slate-200"
      ref={ref}
    >
      {/* Background ambient glows */}
      <div className="absolute top-1/2 -left-48 w-[600px] h-[600px] bg-brand-blue-50/60 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute -bottom-24 right-0 w-[500px] h-[500px] bg-[#E56D00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Left Column: Content & Narrative */}
          <div
            className={`lg:col-span-6 xl:col-span-7 transition-all duration-1000 ease-out ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Section Eyebrow */}
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-8 h-0.5 bg-brand-blue-500 rounded-full" />
              <span className="text-xs font-heading font-bold uppercase tracking-[0.2em] text-brand-blue-600">
                Our Global Mission
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-heading font-black text-slate-900 tracking-tighter leading-[1.1] mb-8">
              We Are Ready For Solar Energy, All We Need Is To{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#144E9A] to-[#E56D00]">
                Use It Well!
              </span>
            </h2>

            {/* Core Climate Quote */}
            <div className="relative pl-6 sm:pl-8 py-2 mb-8">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#144E9A] to-[#E56D00] rounded-full" />
              <p className="text-lg sm:text-xl text-slate-800 font-medium leading-relaxed">
                The increase in extreme weather events and rising sea levels are
                unmistakable signs of climate change. Roughly 850 million people
                still live without access to electricity, which is the
                foundation of sustainable development.
              </p>
            </div>

            {/* Second narrative paragraph */}
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-10 font-light max-w-2xl">
              How can we meet the growing demand for electricity while
              protecting our climate and make the planet a better place? At Teck
              Solar, we bridge this gap by delivering accessible,
              high-efficiency solar energy systems that empower every Australian
              home and enterprise.
            </p>

            {/* Premium Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#E56D00] text-white font-heading font-bold text-lg transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto overflow-hidden shadow-[0_10px_20px_-10px_rgba(229,109,0,0.5)]"
              >
                <div className="absolute inset-0 bg-[#cc6100] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                <span className="relative z-10">Start Your Solar Journey</span>
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
              <Link
                to="/services/residential-solar"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white border-2 border-slate-200 text-slate-700 font-heading font-bold text-lg transition-all duration-300 hover:border-brand-blue-500 hover:text-brand-blue-600 hover:-translate-y-1 w-full sm:w-auto"
              >
                <span className="relative z-10">Explore Services</span>
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
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column: Layered Solar Farm Imagery */}
          <div
            className={`lg:col-span-6 xl:col-span-5 relative transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Backing decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#E56D00]/20 via-emerald-100/40 to-sky-100/50 rounded-3xl blur-xl opacity-70 -z-10" />

              {/* Main Image Container */}
              <div className="relative rounded-t-full overflow-hidden shadow-2xl shadow-slate-900/15 border border-slate-200 bg-slate-900 group">
                <img
                  src="/images/mission-solar.jpg"
                  alt="Modern solar panels in green field under bright sun"
                  className="w-full h-[380px] sm:h-[460px] lg:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
