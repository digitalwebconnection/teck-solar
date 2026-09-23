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
    title: "CEC Accredited",
    description:
      "Our team holds full CEC (Clean Energy Council) accreditation, ensuring compliance and eligibility for rebates.",
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
      className="relative py-20 sm:py-24 lg:py-14 bg-fixed bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/images/hero-installation.jpg')" }}
      ref={ref}
    >
      {/* High-contrast smooth overlay */}
      <div className="absolute inset-0 bg-slate-950/40 " />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />

      {/* Ambient solar glows */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-brand-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-[#E56D00]/15 rounded-full blur-3xl pointer-events-none" />

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

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-heading font-extrabold text-white tracking-tight leading-tight">
            Premium Solar{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#144E9A] to-[#E56D00]">
              Excellence
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
            Australian certified craftsmanship, premium Tier-1 engineering, and
            dedicated support every step of your solar journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-7">
          {features.map((feat, i) => {
            const isEven = i % 2 === 0;
            const iconBgClass = isEven ? "bg-[#144E9A] shadow-[#144E9A]/30" : "bg-[#E56D00] shadow-[#E56D00]/30";
            const hoverTextClass = isEven ? "group-hover:text-brand-blue-400" : "group-hover:text-[#FBAF75]";
            const hoverLineClass = isEven ? "group-hover:bg-[#144E9A]" : "group-hover:bg-[#E56D00]";
            const hoverGlowClass = isEven ? "group-hover:bg-[#144E9A]/30" : "group-hover:bg-[#E56D00]/30";

            return (
              <div
                key={i}
                className={`text-center group transition-all duration-500 flex flex-col items-center ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Floating Glowing Icon */}
                <div className="relative w-16 h-16 mb-5 flex items-center justify-center">
                  <div className={`absolute inset-0 rounded-2xl bg-brand-blue-500/20 blur-md ${hoverGlowClass} group-hover:blur-lg transition-all duration-300`} />
                  <div className={`relative w-16 h-16 rounded-2xl ${iconBgClass} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {feat.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className={`text-xl font-heading font-extrabold text-white ${hoverTextClass} transition-colors drop-shadow-sm`}>
                  {feat.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm mt-3 leading-relaxed drop-shadow-xs max-w-xs font-light">
                  {feat.description}
                </p>

                {/* Minimal Accent line */}
                <div className={`w-8 h-1 rounded-full bg-slate-700 group-hover:w-14 ${hoverLineClass} transition-all duration-500 mt-5`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
