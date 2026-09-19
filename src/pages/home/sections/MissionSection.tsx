import { Link } from "react-router-dom";
import { useReveal } from "../../../hooks/useReveal";

export default function MissionSection() {
  const { ref, visible } = useReveal(0.15);

  return (
    <section
      className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden"
      ref={ref}
    >
      {/* Background ambient glows */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-primary-50/60 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute -bottom-24 right-0 w-96 h-96 bg-emerald-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Content & Narrative */}
          <div
            className={`lg:col-span-6 xl:col-span-7 transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-heading font-extrabold text-navy-900 tracking-tight leading-tight">
              We Are Ready For Solar Energy, All We Need Is To{" "}
              <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
                Use It Well!
              </span>
            </h2>

            {/* Orange Vertical Accent Line + Core Climate Quote */}
            <div className="flex gap-2 sm:gap-2 my-2 sm:my-4 items-stretch">
              <div className="w-1 bg-gradient-to-b from-primary-500 to-primary-600 rounded-full flex-shrink-0" />
              <p className="text-base sm:text-lg text-navy-700 leading-relaxed font-normal">
                The increase in extreme weather events and rising sea levels are
                unmistakable signs of climate change. Roughly 850 million people
                still live without access to electricity, which is the
                foundation of sustainable development.
              </p>
            </div>

            {/* Second narrative paragraph */}
            <p className="text-navy-500 text-base sm:text-sm leading-relaxed">
              How can we meet the growing demand for electricity while
              protecting our climate and make planet a better place? At Teck
              Solar, we bridge this gap by delivering accessible,
              high-efficiency solar energy systems that empower every Australian
              home and enterprise.
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-wrap gap-4 items-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 hover:-translate-y-0.5 shadow-md shadow-primary-500/25 transition-all text-sm sm:text-base cursor-pointer"
              >
                <span>Start Your Solar Journey</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
              <Link
                to="/services/residential-solar"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-navy-800 bg-white border border-navy-200 hover:border-primary-300 hover:bg-primary-50/40 hover:-translate-y-0.5 shadow-xs transition-all text-sm sm:text-base cursor-pointer"
              >
                <span>Explore Services</span>
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
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary-200/50 via-emerald-100/40 to-sky-100/50 rounded-3xl blur-xl opacity-70 -z-10" />

              {/* Main Image Container */}
              <div className="relative rounded-t-full overflow-hidden shadow-2xl shadow-navy-950/15 border border-navy-100/80 bg-navy-900 group">
                <img
                  src="/images/mission-solar.jpg"
                  alt="Modern solar panels in green field under bright sun"
                  className="w-full h-[380px] sm:h-[460px] lg:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
