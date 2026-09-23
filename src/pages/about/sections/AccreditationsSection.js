import { useReveal } from "../../../hooks/useReveal";
const accreditations = [
    {
        id: "cec-retailer",
        step: "01",
        category: "cec",
        categoryName: "Clean Energy Council",
        title: "Clean Energy Council (CEC)",
        role: "Approved Solar Retailer",
        summary: "Guarantees consumer protection, honest quotes, and a 5-year whole-of-system on-site warranty.",
        accent: "blue",
    },
    {
        id: "cec-installer",
        step: "02",
        category: "cec",
        categoryName: "Clean Energy Council",
        title: "CEC Accredited Installers",
        role: "Grid-Connect & Battery Storage Certified",
        summary: "In-house certified electricians and engineers for rooftop PV and high-voltage battery systems.",
        accent: "orange",
    },
    {
        id: "master-elec",
        step: "03",
        category: "safety",
        categoryName: "Safety & Quality",
        title: "Master Electricians Australia",
        role: "SafetyConnect Accredited Member",
        summary: "Annual third-party safety audits and full compliance with AS/NZS 3000 Australian wiring rules.",
        accent: "blue",
    },
    {
        id: "iso-9001",
        step: "04",
        category: "safety",
        categoryName: "Safety & Quality",
        title: "ISO 9001:2015 Standards",
        role: "Quality Management Certified",
        summary: "Certified quality assurance for tier-1 solar panel vetting, inverter testing, and commissioning.",
        accent: "orange",
    },
    {
        id: "fair-trading",
        step: "05",
        category: "license",
        categoryName: "Licensing & Insurance",
        title: "Fair Trading Licensed",
        role: "Electrical Contractor (NSW, VIC & QLD)",
        summary: "Government-vetted for residential and commercial solar installations across three states.",
        accent: "blue",
    },
    {
        id: "public-liability",
        step: "06",
        category: "license",
        categoryName: "Licensing & Insurance",
        title: "$20M Public Liability Insured",
        role: "Comprehensive Workmanship Cover",
        summary: "Underwritten by QBE Insurance Australia, protecting customer property against any eventuality.",
        accent: "orange",
    },
];
function AccreditationIcon({ id }) {
    switch (id) {
        case "cec-retailer":
            return (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>);
        case "cec-installer":
            return (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>);
        case "master-elec":
            return (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>);
        case "iso-9001":
            return (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>);
        case "fair-trading":
            return (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>);
        case "public-liability":
        default:
            return (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"/>
        </svg>);
    }
}
export default function AccreditationsSection() {
    const { ref, visible } = useReveal();
    return (<section className="py-14 sm:py-18 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100" ref={ref}>
      <div className="max-w-7xl mx-auto w-full">
        {/* Modern Split Layout: Sticky Left Panel + Clean Scrolling Stream */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* ================= LEFT COLUMN (STICKY & LIGHT) ================= */}
          <div className={`lg:col-span-5 lg:sticky lg:top-28 self-start transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
              Accreditations & Certifications
            </h2>

            {/* Reduced, Punchy Subtitle */}
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-md">
              Governed by peak Australian electrical bodies and the Clean Energy Council, guaranteeing safe, high-yield installations.
            </p>
            <div className="mt-6">
              <a href="https://www.cleanenergycouncil.org.au" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-brand-blue-600 hover:text-brand-blue-700 transition-colors group cursor-pointer">
                <span>Verify on Clean Energy Council Register</span>
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </a>
            </div>
            {/* Direct Verification Link */}

          </div>

          {/* ================= RIGHT COLUMN (ELEGANT SCROLLING STREAM) ================= */}
          <div className={`lg:col-span-7 space-y-3.5 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {accreditations.map((item) => (<div key={item.id} className="group relative bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-brand-blue-400 hover:shadow-lg hover:shadow-brand-blue-900/5 hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4 sm:gap-5">
                {/* Thin Accent Indicator Bar on Hover */}
                <div className={`absolute left-0 top-4 bottom-4 w-1 rounded-r-full transition-all duration-300 opacity-0 group-hover:opacity-100 ${item.accent === "orange" ? "bg-primary-500" : "bg-brand-blue-500"}`}/>

                {/* Icon Container with Smooth Scale */}
                <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 shadow-xs mt-0.5 ${item.accent === "orange"
                ? "bg-primary-50 text-primary-500 group-hover:bg-primary-500 group-hover:text-white group-hover:scale-105"
                : "bg-brand-blue-50 text-brand-blue-500 group-hover:bg-brand-blue-500 group-hover:text-white group-hover:scale-105"}`}>
                  <AccreditationIcon id={item.id}/>
                </div>

                {/* Main Content */}
                <div className="min-w-0 flex-1">
                  {/* Category Eyebrow & Step */}
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-slate-300 group-hover:text-brand-blue-500 transition-colors">
                      {item.step}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-heading font-semibold uppercase tracking-wider text-slate-400">
                      {item.categoryName}
                    </span>
                  </div>

                  {/* Title & Role */}
                  <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900 group-hover:text-brand-blue-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  
                  <span className="text-xs sm:text-sm font-semibold text-brand-blue-500 block mt-0.5">
                    {item.role}
                  </span>

                  {/* Summary Description */}
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                {/* Subtle Hover Action Arrow */}
                <div className="hidden sm:flex w-8 h-8 rounded-full bg-slate-50 border border-slate-200/80 text-slate-400 group-hover:border-brand-blue-200 group-hover:bg-brand-blue-50 group-hover:text-brand-blue-600 group-hover:translate-x-1 transition-all items-center justify-center shrink-0 mt-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>))}
          </div>

        </div>
      </div>
    </section>);
}
