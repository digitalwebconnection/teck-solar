import { useReveal } from '../../../hooks/useReveal';

const accreditations = [
  'Clean Energy Council (CEC) Approved Retailer',
  'CEC Accredited Installer',
  'Master Electricians Australia',
  'ISO 9001 Quality Management',
  'Fair Trading Licensed',
  'Fully Insured & Licensed',
];

export default function AccreditationsSection() {
  const { ref, visible } = useReveal();

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto w-full">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-primary-500 font-heading font-semibold text-sm tracking-widest uppercase">Trust & Compliance</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mt-3">Accreditations & Certifications</h2>
          <div className="w-16 h-1 bg-primary-500 rounded-full mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {accreditations.map((acc, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 bg-navy-50 rounded-xl p-5 border border-navy-100 hover:border-primary-200 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-10 h-10 rounded-full bg-eco-500/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-eco-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="text-sm font-medium text-navy-700">{acc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
