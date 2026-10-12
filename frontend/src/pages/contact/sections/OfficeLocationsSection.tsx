import { useReveal } from "../../../hooks/useReveal";
import { officeLocations } from "@/data/navigation";

const officeTheme = {
  nsw: {
    code: "NSW",
    color: "group-hover:text-[#E56D00]/15",
    iconBorder: "group-hover:border-[#E56D00]",
    iconText: "text-[#E56D00]",
    hoverText: "hover:text-[#E56D00]",
  },
  sa: {
    code: "SA",
    color: "group-hover:text-[#144E9A]/15",
    iconBorder: "group-hover:border-[#144E9A]",
    iconText: "text-[#144E9A]",
    hoverText: "hover:text-[#144E9A]",
  },
  wa: {
    code: "WA",
    color: "group-hover:text-emerald-500/15",
    iconBorder: "group-hover:border-emerald-500",
    iconText: "text-emerald-500",
    hoverText: "hover:text-emerald-500",
  },
  vic: {
    code: "VIC",
    color: "group-hover:text-indigo-500/15",
    iconBorder: "group-hover:border-indigo-500",
    iconText: "text-indigo-500",
    hoverText: "hover:text-indigo-500",
  },
};

export default function OfficeLocationsSection() {
  const officesReveal = useReveal();

  return (
    <section
      className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200"
      ref={officesReveal.ref}
    >
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Section Header */}
        <div
          className={`mb-16 lg:mb-20 max-w-4xl mx-auto text-center transition-all duration-1000 ${
            officesReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-slate-900 tracking-tighter leading-[1.05] mb-6">
            Visit Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#144E9A] to-[#E56D00]">
              Offices.
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
            Drop by for a coffee and discuss your solar potential with our local engineering teams across Australia.
          </p>
        </div>

        {/* Minimalist Editorial Columns (NO CARDS) */}
        <div
          className={`flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-slate-200 border-y border-slate-200 transition-all duration-1000 delay-300 ${
            officesReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {officeLocations.map((office) => {
            const theme =
              officeTheme[office.id as keyof typeof officeTheme] || officeTheme.nsw;

            return (
              <div
                key={office.id}
                className="flex-1 py-12 lg:py-16 px-6 sm:px-8 lg:px-6 xl:px-10 relative group overflow-hidden"
              >
                {/* Massive Watermark */}
                <div
                  className={`text-[110px] xl:text-[140px] font-heading font-black text-slate-100/70 absolute top-2 right-4 select-none pointer-events-none transition-colors duration-500 -z-10 leading-none ${theme.color}`}
                  aria-hidden="true"
                >
                  {theme.code}
                </div>

                <div className="relative z-10">
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                    {office.badge}
                  </div>
                  <h3 className="text-3xl xl:text-4xl font-heading font-black text-slate-900 mb-8 group-hover:-translate-y-1 transition-transform duration-300">
                    {office.suburb}
                  </h3>

                  <div className="space-y-6">
                    {/* Address linking directly to Google Maps location */}
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        office.fullAddress
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 group/addr transition-colors"
                      title={`View ${office.name} on Google Maps`}
                    >
                      <div
                        className={`w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 mt-0.5 shadow-xs transition-colors duration-300 ${theme.iconBorder}`}
                      >
                        <svg
                          className={`w-5 h-5 ${theme.iconText}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <p className={`text-slate-600 text-base leading-relaxed ${theme.hoverText} transition-colors`}>
                        {office.address}
                      </p>
                    </a>

                    {/* Phone */}
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 shadow-xs transition-colors duration-300 ${theme.iconBorder}`}
                      >
                        <svg
                          className={`w-5 h-5 ${theme.iconText}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <a
                        href="tel:+611300134077"
                        className={`text-slate-900 font-bold ${theme.hoverText} transition-colors text-sm sm:text-base`}
                      >
                        +61 1300 134 077
                      </a>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 shadow-xs transition-colors duration-300 ${theme.iconBorder}`}
                      >
                        <svg
                          className={`w-5 h-5 ${theme.iconText}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <a
                        href="mailto:info@teck-solar.com.au"
                        className={`text-slate-600 ${theme.hoverText} transition-colors text-sm sm:text-base`}
                      >
                        info@teck-solar.com.au
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
