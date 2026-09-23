import { Link } from "react-router-dom";
import { useQuoteModal } from "../../../../context/QuoteModalContext";

export default function GuideCtaSection() {
  const { openModal } = useQuoteModal();
  return (
    <section className="py-20 lg:py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Dark CTA Card */}
        <div className="relative group rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50">
          {/* Animated Glow Background behind the card content */}
          <div className="absolute inset-0 bg-slate-900 overflow-hidden">
            <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-blue-500/30 rounded-full blur-[80px] group-hover:scale-110 transition-transform duration-700"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-80 h-80 bg-amber-500/30 rounded-full blur-[80px] group-hover:scale-110 transition-transform duration-700"></div>
            <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay"></div>
          </div>

          <div className="relative z-10 p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left Content */}
            <div className="lg:max-w-xl text-center lg:text-left">
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 mb-6">
                <svg
                  className="w-4 h-4 text-amber-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-xs font-semibold tracking-wider uppercase text-white/90">
                  Expert Support
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-[1.1]">
                Still have{" "}
                <span className="text-amber-500 relative inline-block">
                  questions?
                  <svg
                    className="absolute w-full h-3 -bottom-2 left-0 text-amber-500/50"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q 50 10 100 5"
                      fill="transparent"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>

              <p className="mt-6 text-white/70 text-lg leading-relaxed font-medium max-w-lg mx-auto lg:mx-0">
                Our local team of certified solar experts is always happy to
                answer your questions and help you navigate your options.
              </p>
            </div>

            {/* Right Action */}
            <div className="shrink-0 relative">
              {/* Button Glow */}
              <div className="absolute inset-0 bg-amber-500 blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-300 rounded-full"></div>

              <button
                type="button"
                onClick={openModal}
                className="relative inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-white text-slate-900 font-heading font-bold text-lg transition-all duration-300 hover:scale-105 hover:bg-slate-50 active:scale-95 shadow-xl group/btn cursor-pointer"
              >
                Contact Our Team
                <span className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover/btn:bg-amber-500 group-hover/btn:text-white transition-colors duration-300">
                  <svg
                    className="w-5 h-5"
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
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
