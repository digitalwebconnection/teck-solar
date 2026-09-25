import { useReveal } from "../../../hooks/useReveal";

export default function StorySection() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="our-story"
      className="py-8 sm:py-10 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-12 border-b border-slate-100"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content Column (Right on Desktop) */}
          <div
            className={`lg:col-span-7 order-2 lg:order-2 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Section Eyebrow */}
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-8 h-0.5 bg-brand-blue-500 rounded-full" />
              <span className="text-xs font-heading font-bold uppercase tracking-[0.2em] text-brand-blue-500">
                Our Story
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-slate-900 tracking-tight leading-[1.15]">
              Powering Australia's Renewable{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#144E9A] to-[#E56D00] font-bold">
                Future Since 2015
              </span>
            </h2>

            {/* Narrative Paragraphs */}
            <div className="mt-6 space-y-4 text-slate-600 leading-relaxed text-base sm:text-lg">
              <p className="text-slate-800 font-normal">
                Founded in 2015, Teck Solar began with a simple vision: to make
                clean, renewable energy accessible to every Australian. Starting
                as a small team of passionate engineers and electricians in
                Sydney, we've grown into one of Australia's most trusted solar
                energy providers.
              </p>

              <p className="text-slate-600 text-base">
                Today, with over 2,500 successful installations across New South
                Wales, Victoria, and Queensland, we continue to deliver
                exceptional solar solutions that combine cutting-edge technology
                with personalised service.
              </p>

              <p className="text-slate-600 text-base">
                Our mission is to empower homeowners and businesses to take
                control of their energy future while contributing to a cleaner
                planet. Every panel we install is a step towards a more
                sustainable Australia.
              </p>
            </div>

            {/* Key Industry Milestones Ribbon */}
            <div className="mt-10 pt-8 border-t border-slate-200/80 grid grid-cols-3 gap-6 sm:gap-8">
              <div>
                <span className="text-2xl sm:text-3xl font-heading font-bold text-brand-blue-500 block">
                  2015
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1 block">
                  Founded in Sydney
                </span>
              </div>

              <div>
                <span className="text-2xl sm:text-3xl font-heading font-bold text-brand-blue-500 block">
                  2,500+
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1 block">
                  Solar Installs
                </span>
              </div>

              <div>
                <span className="text-2xl sm:text-3xl font-heading font-bold text-brand-blue-500 block">
                  3 States
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1 block">
                  NSW • VIC • QLD
                </span>
              </div>
            </div>
          </div>

          {/* Image Column (Left on Desktop) */}
          <div
            className={`lg:col-span-5 order-1 lg:order-1 transition-all duration-700 delay-150 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="relative">
              {/* Main Image Frame */}
              <div className="rounded-xl overflow-hidden border border-slate-200/90 shadow-lg shadow-slate-900/5 bg-slate-50">
                <img
                  src="/images/hero-installation.jpg"
                  alt="Certified solar installation by Teck Solar technicians"
                  className="w-full h-[400px] sm:h-[460px] object-cover"
                />
              </div>

              {/* Discreet Professional Trust Card */}
              <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-blue-50 text-brand-blue-500 flex items-center justify-center font-bold">
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-heading font-bold text-slate-900 block">
                      Clean Energy Council Approved
                    </span>
                    <span className="text-[11px] text-slate-500 block">
                      Accredited Solar Retailer & Installers
                    </span>
                  </div>
                </div>

                <span className="text-xs font-heading font-semibold text-primary-500 px-2.5 py-1 rounded-md bg-primary-50 border border-primary-200/60">
                  100% Certified
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
