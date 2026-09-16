import { useReveal } from '../../../../hooks/useReveal';

const guideTopics = [
  {
    title: 'Understanding Solar Energy',
    description: 'Learn how solar panels convert sunlight into electricity and the key components of a solar power system.',
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
  },
  {
    title: 'Choosing the Right System',
    description: 'Factors to consider when selecting your solar system including size, panel type, inverter choice, and future expansion.',
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>,
  },
  {
    title: 'Understanding Quotes & Pricing',
    description: 'How to compare solar quotes, what to look for, and red flags to avoid when choosing a solar installer.',
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    title: 'Government Rebates & STCs',
    description: 'An overview of available government incentives, Small-scale Technology Certificates (STCs), and state-level rebates.',
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  },
  {
    title: 'Installation Process',
    description: 'What to expect during installation day, site preparation, and the typical timeline from quote to connection.',
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  },
  {
    title: 'Your Rights as a Consumer',
    description: 'Important consumer protections, warranty information, and your rights under Australian Consumer Law.',
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  },
];

export default function GuideTopicsSection() {
  const topicsReveal = useReveal();

  return (
    <section className="section-padding bg-navy-50" ref={topicsReveal.ref}>
      <div className="container-custom mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${topicsReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-primary-500 font-heading font-semibold text-sm tracking-widest uppercase">Guide Contents</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mt-3">What's Covered</h2>
          <div className="w-16 h-1 bg-primary-500 rounded-full mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {guideTopics.map((topic, i) => (
            <div
              key={i}
              className={`bg-white p-8 rounded-2xl hover-lift border border-navy-100 group transition-all duration-700 ${topicsReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-primary text-white flex items-center justify-center mb-5 group-hover:animate-pulse-glow">
                {topic.icon}
              </div>
              <h3 className="text-lg font-heading font-semibold text-navy-900">{topic.title}</h3>
              <p className="text-navy-500 text-sm mt-3 leading-relaxed">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
