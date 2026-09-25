import { Link } from "react-router-dom";
import { useReveal } from "../../../hooks/useReveal";
import { useQuoteModal } from "../../../context/QuoteModalContext";
import { PixelImage } from "../../../components/ui/pixel-image";
import { DotPattern } from "../../../components/ui/dot-pattern";

export default function MissionSection() {
  const { ref, visible } = useReveal(0.15);
  const { openModal } = useQuoteModal();

  const images = [
    "/images/mission-solar.jpg",
    "/images/hero-commercial.jpg", 
    "/images/hero-residential.jpg"
  ];

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
              <button
                type="button"
                onClick={openModal}
                className="group relative inline-flex items-center h-14 pl-[72px] pr-8 rounded-full font-heading font-bold text-lg text-slate-900 transition-colors duration-500 hover:text-white w-full sm:w-auto cursor-pointer"
              >
                {/* Expanding Orange Background */}
                <div className="absolute left-0 top-0 h-14 w-14 rounded-full bg-[#E56D00] transition-all duration-500 ease-[cubic-bezier(0.5,0,0,1)] group-hover:w-full z-0 shadow-md group-hover:shadow-[0_10px_20px_-10px_rgba(229,109,0,0.5)]"></div>
                
                {/* Arrow Icon */}
                <div className="absolute left-0 top-0 h-14 w-14 flex items-center justify-center z-10 text-white">
                  <svg
                    className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
                
                <span className="relative z-10">Start Your Solar Journey</span>
              </button>
              <Link
                to="/services/residential-solar"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-sm bg-white border border-slate-300 text-slate-700 font-heading font-bold text-lg transition-all duration-300 hover:bg-brand-blue-500 hover:text-white hover:-translate-y-1 w-full sm:w-auto"
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

              {/* Decorative offset dot patterns */}
              <div className="absolute -top-12 -right-12 w-64 h-64 -z-10">
                <DotPattern className="fill-slate-400/50" />
              </div>
              <div className="absolute -bottom-10 -left-12 w-64 h-64 -z-10">
                <DotPattern className="fill-[#144E9A]/30" />
              </div>

              {/* Main Image Container */}
              <div className="relative rounded-t-full overflow-hidden shadow-2xl shadow-slate-900/15 border border-slate-200 bg-slate-900 group">
                <PixelImage
                  srcs={images}
                  className="w-full h-[380px] sm:h-[460px] lg:h-[520px]"
                  customGrid={{ rows: 6, cols: 6 }}
                  grayscaleAnimation={false}
                  alt="Modern solar panels"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none z-20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
