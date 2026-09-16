import { useReveal } from '../../../hooks/useReveal';

const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
    ),
    title: 'Sustainability',
    description: 'We are committed to reducing carbon emissions and building a sustainable future for generations to come.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    ),
    title: 'Customer First',
    description: 'Every decision we make prioritises our customers\' needs, ensuring satisfaction from consultation to aftercare.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ),
    title: 'Quality Assurance',
    description: 'We use only premium-tier products and follow strict installation standards that exceed industry requirements.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
    ),
    title: 'Innovation',
    description: 'We stay at the forefront of solar technology, continuously adopting the latest advancements to benefit our clients.',
  },
];

export default function ValuesSection() {
  const { ref, visible } = useReveal();

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-navy-50" ref={ref}>
      <div className="max-w-7xl mx-auto w-full">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-primary-500 font-heading font-semibold text-sm tracking-widest uppercase">What Drives Us</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mt-3">Our Core Values</h2>
          <div className="w-16 h-1 bg-primary-500 rounded-full mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, i) => (
            <div
              key={i}
              className={`bg-white p-8 rounded-2xl text-center hover:-translate-y-1.5 hover:shadow-xl border border-navy-100 group transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white flex items-center justify-center mb-5 group-hover:animate-pulse-glow">
                {val.icon}
              </div>
              <h3 className="text-lg font-heading font-semibold text-navy-900">{val.title}</h3>
              <p className="text-navy-500 text-sm mt-3 leading-relaxed">{val.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
