import { useReveal } from "../../../hooks/useReveal";

const features = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Quality Installations",
    description:
      "Every installation meets the highest Australian standards. We use premium-tier panels, inverters, and mounting systems.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Simple & Easy",
    description:
      "From initial consultation to final installation, our streamlined process makes going solar effortless.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
    title: "SAA Accredited",
    description:
      "Our team holds full SAA (Clean Energy Council) accreditation, ensuring compliance and eligibility for rebates.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
    title: "Premium Products",
    description:
      "We partner with world-leading manufacturers to deliver products with up to 25-year performance warranties.",
  },
];

export default function WhyChooseUs() {
  const { ref, visible } = useReveal(0.15);

  return (
    <section
      className="relative py-20 sm:py-24 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-brand-blue-50/40 overflow-hidden"
      ref={ref}
    >
      {/* Ambient solar glows */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-brand-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-[#E56D00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-14 lg:mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-10 h-0.5 bg-gradient-to-r from-transparent to-[#E56D00] rounded-full" />
            <span className="text-sm font-heading font-bold uppercase tracking-[0.2em] text-[#E56D00]">
              Why Choose Us
            </span>
            <span className="w-10 h-0.5 bg-gradient-to-l from-transparent to-[#E56D00] rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
            Premium Solar{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#144E9A] to-[#E56D00]">
              Excellence
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Australian certified craftsmanship, premium Tier-1 engineering, and
            dedicated support every step of your solar journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
          {/* Quality Installations */}
          <div
            className={`col-span-1 md:col-span-1 relative overflow-hidden rounded-md bg-gradient-to-br from-[#144E9A]/10 to-[#144E9A]/5 border border-[#144E9A]/20 shadow-sm p-6 flex flex-col justify-end group hover:from-[#144E9A]/20 hover:to-[#144E9A]/10 transition-all duration-500 hover:border-[#144E9A]/30 hover:shadow-xl hover:-translate-y-1.5 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "0ms" }}
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#144E9A]/20 blur-3xl group-hover:bg-[#144E9A]/30 transition-all duration-700 rounded-full group-hover:scale-125" />
            <div className="absolute top-6 left-6 text-[#144E9A] bg-white p-3 rounded-2xl border border-white/50 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-white/80">
              {features[0].icon}
            </div>
            <div className="relative z-10 mt-20 md:mt-24">
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-2 transition-colors">
                {features[0].title}
              </h3>
              <p className="text-slate-700 text-[13px] leading-relaxed">
                {features[0].description}
              </p>
            </div>
          </div>

          {/* Simple & Easy */}
          <div
            className={`col-span-1 md:col-span-2 relative overflow-hidden rounded-md bg-gradient-to-br from-[#E56D00]/10 to-[#E56D00]/5 border border-[#E56D00]/20 shadow-sm p-6 flex flex-col justify-end group hover:from-[#E56D00]/20 hover:to-[#E56D00]/10 transition-all duration-500 hover:border-[#E56D00]/30 hover:shadow-xl hover:-translate-y-1.5 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#E56D00]/20 blur-3xl group-hover:bg-[#E56D00]/30 transition-all duration-700 rounded-full group-hover:scale-125" />
            <div className="absolute top-6 left-6 text-[#E56D00] bg-white p-3 rounded-2xl border border-white/50 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-white/80">
              {features[1].icon}
            </div>
            <div className="relative z-10 mt-20 md:mt-16">
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-2 transition-colors">
                {features[1].title}
              </h3>
              <p className="text-slate-700 text-[13px] leading-relaxed max-w-md">
                {features[1].description}
              </p>
            </div>
          </div>

          {/* SAA Accredited */}
          <div
            className={`col-span-1 md:col-span-2 relative overflow-hidden rounded-md bg-gradient-to-br from-[#E56D00]/10 to-[#E56D00]/5 border border-[#E56D00]/20 shadow-sm p-6 flex flex-col justify-end group hover:from-[#E56D00]/20 hover:to-[#E56D00]/10 transition-all duration-500 hover:border-[#E56D00]/30 hover:shadow-xl hover:-translate-y-1.5 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-[#E56D00]/20 blur-3xl group-hover:bg-[#E56D00]/30 transition-all duration-700 rounded-full group-hover:scale-125" />
            <div className="absolute top-6 left-6 text-[#E56D00] bg-white p-3 rounded-2xl border border-white/50 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-white/80">
              {features[2].icon}
            </div>
            <div className="relative z-10 mt-20 md:mt-16">
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-2 transition-colors">
                {features[2].title}
              </h3>
              <p className="text-slate-700 text-[13px] leading-relaxed max-w-md">
                {features[2].description}
              </p>
            </div>
          </div>

          {/* Premium Products */}
          <div
            className={`col-span-1 md:col-span-1 relative overflow-hidden rounded-md bg-gradient-to-br from-[#144E9A]/10 to-[#144E9A]/5 border border-[#144E9A]/20 shadow-sm p-6 flex flex-col justify-end group hover:from-[#144E9A]/20 hover:to-[#144E9A]/10 transition-all duration-500 hover:border-[#144E9A]/30 hover:shadow-xl hover:-translate-y-1.5 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#144E9A]/20 blur-3xl group-hover:bg-[#144E9A]/30 transition-all duration-700 rounded-full group-hover:scale-125" />
            <div className="absolute top-6 left-6 text-[#144E9A] bg-white p-3 rounded-2xl border border-white/50 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-white/80">
              {features[3].icon}
            </div>
            <div className="relative z-10 mt-20 md:mt-24">
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-2 transition-colors">
                {features[3].title}
              </h3>
              <p className="text-slate-700 text-[13px] leading-relaxed">
                {features[3].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
