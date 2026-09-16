import { useReveal } from '../../../hooks/useReveal';

const processSteps = [
  {
    step: '01',
    title: 'Initial Consultation',
    description: 'We assess your energy needs, roof suitability, and discuss your goals in a free consultation.',
    icon: (className = 'w-5 h-5') => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Custom Design',
    description: 'Our engineers design a tailored solar system optimised for maximum energy generation.',
    icon: (className = 'w-5 h-5') => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Detailed Quote',
    description: 'Receive a transparent, no-obligation quote with clear pricing and projected savings.',
    icon: (className = 'w-5 h-5') => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Permits & Approvals',
    description: 'We handle all paperwork, council permits, and grid connection applications on your behalf.',
    icon: (className = 'w-5 h-5') => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    step: '05',
    title: 'Professional Installation',
    description: 'Our CEC-accredited team installs your system with meticulous attention to quality and safety.',
    icon: (className = 'w-5 h-5') => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    step: '06',
    title: 'Monitoring & Support',
    description: 'Enjoy real-time monitoring and ongoing support to ensure peak performance for decades.',
    icon: (className = 'w-5 h-5') => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function ProcessSection() {
  const { ref, visible } = useReveal(0.15);

  return (
    <section className="py-16 sm:py-20 lg:py-14 px-4 sm:px-6 lg:px-8 bg-white border-y border-navy-100/60 relative overflow-hidden" ref={ref}>
      {/* Subtle ambient light glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50/50 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100/60 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header matching reference screenshot: 2-column layout */}
        <div
          className={` items-end mb-14 sm:mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="">
       
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-center  font-heading font-extrabold text-navy-900 tracking-tight leading-tight">
              Here's A Six-Step Process<br className="hidden sm:inline" /> For Solar Installation.
            </h2>
          </div>

         
        </div>

        {/* 6 Steps in a clean, boxless timeline grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 lg:gap-x-12 gap-y-10 lg:gap-y-14">
          {processSteps.map((step, i) => (
            <div
              key={i}
              className={`group transition-all duration-500 relative flex flex-col ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Step indicator with number, icon, and dynamic accent line */}
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-xl bg-primary-50 text-primary-600 border border-primary-100/80 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white group-hover:border-primary-500 group-hover:shadow-md group-hover:shadow-primary-500/25 transition-all duration-300 flex-shrink-0">
                  {step.icon('w-5 h-5')}
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[11px] font-heading font-bold text-primary-500 uppercase tracking-wider">
                    STEP
                  </span>
                  <span className="text-2xl font-serif font-heading font-extrabold text-navy-900 group-hover:text-primary-600 transition-colors">
                    {step.step}
                  </span>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-navy-200 via-navy-100 to-transparent group-hover:from-primary-500 group-hover:via-primary-300 transition-all duration-500" />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-heading font-bold text-navy-900 group-hover:text-primary-600 transition-colors">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-navy-500 text-sm mt-2 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


