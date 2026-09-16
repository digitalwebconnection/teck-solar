import { Link } from 'react-router-dom';
import { useReveal } from '../../../hooks/useReveal';

const services = [
  { title: 'Residential Solar', description: 'Transform your home with a customised solar power system designed to maximise savings and energy independence.', image: '/images/service-residential.jpg', link: '/services/residential-solar' },
  { title: 'Commercial Solar', description: 'Scalable solar solutions for businesses of all sizes. Reduce operational costs and boost your green credentials.', image: '/images/service-commercial.jpg', link: '/services/commercial-solar' },
  { title: 'Battery Storage', description: 'Store excess solar energy and power your home day and night with premium battery storage systems.', image: '/images/service-battery.jpg', link: '/services/battery-storage' },
  { title: 'EV Charger', description: 'Future-proof your property with smart EV charging solutions integrated with your solar system.', image: '/images/service-ev-charger.jpg', link: '/services/ev-charger' },
  { title: 'Battery Materials', description: 'We source only the highest quality battery cells and materials from trusted global manufacturers.', image: '/images/service-battery.jpg', link: '/services/battery-storage' },
  { title: 'Charge Controllers', description: 'Advanced MPPT and PWM charge controllers to optimise your solar system performance and battery life.', image: '/images/service-commercial.jpg', link: '/services/residential-solar' },
];

export default function ServicesGrid() {
  const { ref, visible } = useReveal();
  return (
    <section className="py-16 sm:py-20 lg:py-14 px-4 sm:px-6 lg:px-8 bg-navy-50" ref={ref}>
      <div className="max-w-7xl mx-auto w-full">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-primary-500 font-heading font-semibold text-sm tracking-widest uppercase">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-serif font-heading font-extrabold text-navy-900 mt-3">Our Services</h2>
          <div className="w-16 h-1 bg-primary-500 rounded-full mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <Link
              key={i}
              to={service.link}
              className={`group bg-white rounded-xl overflow-hidden border border-navy-100 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.56)] hover:shadow-[0_20px_35px_-8px_rgba(15,23,42,0.12)] hover:border-primary-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div>
                <div className="h-52 overflow-hidden relative bg-navy-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {/* Subtle top hover indicator */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-navy-900 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-navy-500 text-sm mt-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <span className="inline-flex items-center gap-2 text-primary-600 font-heading font-semibold text-sm group-hover:text-primary-700 transition-colors">
                  <span>Read More</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
