import { useReveal } from "../../../hooks/useReveal";
const processSteps = [
    {
        step: "01",
        title: "Initial Consultation",
        description: "We assess your energy needs, roof suitability, and discuss your goals in a free consultation.",
        icon: (className = "w-5 h-5") => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
      </svg>),
    },
    {
        step: "02",
        title: "Custom Design",
        description: "Our engineers design a tailored solar system optimised for maximum energy generation.",
        icon: (className = "w-5 h-5") => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/>
      </svg>),
    },
    {
        step: "03",
        title: "Detailed Quote",
        description: "Receive a transparent, no-obligation quote with clear pricing and projected savings.",
        icon: (className = "w-5 h-5") => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
      </svg>),
    },
    {
        step: "04",
        title: "Permits & Approvals",
        description: "We handle all paperwork, council permits, and grid connection applications on your behalf.",
        icon: (className = "w-5 h-5") => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>),
    },
    {
        step: "05",
        title: "Professional Installation",
        description: "Our CEC-accredited team installs your system with meticulous attention to quality and safety.",
        icon: (className = "w-5 h-5") => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
      </svg>),
    },
    {
        step: "06",
        title: "Monitoring & Support",
        description: "Enjoy real-time monitoring and ongoing support to ensure peak performance for decades.",
        icon: (className = "w-5 h-5") => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>),
    },
];
export default function ProcessSection() {
    const { ref, visible } = useReveal(0.15);
    return (<section className="py-12 sm:py-18 px-4 sm:px-6 lg:px-8 bg-slate-50/50 relative overflow-hidden" ref={ref}>
      {/* Subtle ambient light glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue-50/50 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl pointer-events-none"/>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#E56D00]/5 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none"/>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Premium Section Header */}
        <div className={`flex flex-col items-center justify-center text-center mb-16 sm:mb-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-0.5 bg-gradient-to-r from-transparent to-brand-blue-500 rounded-full"/>
            <span className="text-sm font-heading font-bold uppercase tracking-[0.2em] text-brand-blue-600">
              Our Process
            </span>
            <span className="w-10 h-0.5 bg-gradient-to-l from-transparent to-brand-blue-500 rounded-full"/>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-heading font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            A Simple{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#144E9A] to-[#E56D00]">
              Six-Step
            </span>{" "}
            Process
            <br className="hidden sm:inline"/> For Solar Installation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-8 lg:gap-y-12">
          {processSteps.map((step, i) => {
            const isEven = i % 2 === 0;
            const hoverBgClass = isEven ? "group-hover:bg-[#144E9A] group-hover:shadow-[#144E9A]/20" : "group-hover:bg-[#E56D00] group-hover:shadow-[#E56D00]/20";
            const hoverTextClass = isEven ? "group-hover:text-[#144E9A]" : "group-hover:text-[#E56D00]";
            return (<div key={i} className={`transition-all duration-700 ${visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"}`} style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="group relative flex flex-col h-full p-8 rounded-3xl transition-all duration-500 border border-transparent hover:bg-white hover:shadow-[0_20px_40px_-10px_rgba(20,78,154,0.08)] hover:-translate-y-2 hover:border-slate-100 cursor-default">
                  {/* Step indicator with number, icon, and dynamic accent line */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-slate-50 text-slate-400 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center justify-center group-hover:-translate-y-1 ${hoverBgClass} group-hover:text-white group-hover:border-transparent group-hover:shadow-lg transition-all duration-500 flex-shrink-0`}>
                      {step.icon("w-6 h-6")}
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className={`text-3xl font-heading font-extrabold text-slate-300 ${hoverTextClass} transition-all duration-500`}>
                        {step.step}
                      </span>
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent group-hover:from-brand-blue-200 group-hover:to-transparent transition-all duration-500"/>
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-heading font-extrabold text-slate-900 ${hoverTextClass} transition-all duration-300 mb-3`}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-base leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>);
        })}
        </div>
      </div>
    </section>);
}
