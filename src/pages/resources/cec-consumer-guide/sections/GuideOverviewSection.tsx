import { useReveal } from "../../../../hooks/useReveal";

export default function GuideOverviewSection() {
  const contentReveal = useReveal();

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white"
      ref={contentReveal.ref}
    >
      <div className="max-w-4xl mx-auto w-full">
        <div
          className={`transition-all duration-700 ${contentReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="bg-navy-50 rounded-2xl p-8 md:p-10 border border-navy-100 mb-12">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white flex items-center justify-center shrink-0">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold text-navy-900">
                  About This Guide
                </h2>
                <p className="mt-3 text-navy-500 leading-relaxed">
                  The Clean Energy Council (CEC) is Australia's peak body for
                  the clean energy industry. This consumer guide is designed to
                  help you make informed decisions when considering a solar
                  energy system for your home or business.
                </p>
                <p className="mt-3 text-navy-500 leading-relaxed">
                  Whether you're new to solar or looking to expand an existing
                  system, this guide covers everything you need to know — from
                  understanding how solar works to navigating government rebates
                  and choosing a reputable installer.
                </p>
              </div>
            </div>
          </div>

          {/* Download CTA */}
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-xl font-heading font-semibold">
              Download the Full CEC Consumer Guide
            </h3>
            <p className="mt-2 text-white/80 text-sm">
              Get the complete PDF guide with detailed information on all topics
              covered below.
            </p>
            <button
              type="button"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-heading font-semibold bg-white text-primary-600 hover:bg-primary-50 hover:-translate-y-0.5 shadow-sm transition-all mt-5 mx-auto cursor-pointer"
            >
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
              Download PDF Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
