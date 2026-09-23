import { Link } from "react-router-dom";
import { useReveal } from "../../../hooks/useReveal";

const services = [
  {
    title: "Residential Solar",
    description:
      "Transform your home with a customised solar power system designed to maximise savings and energy independence.",
    image: "/images/service-residential.jpg",
    link: "/services/residential-solar",
  },
  {
    title: "Commercial Solar",
    description:
      "Scalable solar solutions for businesses of all sizes. Reduce operational costs and boost your green credentials.",
    image: "/images/service-commercial.jpg",
    link: "/services/commercial-solar",
  },
  {
    title: "Battery Storage",
    description:
      "Store excess solar energy and power your home day and night with premium battery storage systems.",
    image: "/images/service-battery.jpg",
    link: "/services/battery-storage",
  },
  {
    title: "EV Charger",
    description:
      "Future-proof your property with smart EV charging solutions integrated with your solar system.",
    image: "/images/service-ev-charger.jpg",
    link: "/services/ev-charger",
  },
  {
    title: "Battery Materials",
    description:
      "We source only the highest quality battery cells and materials from trusted global manufacturers.",
    image: "/images/service-battery.jpg",
    link: "/services/battery-storage",
  },
  {
    title: "Charge Controllers",
    description:
      "Advanced MPPT and PWM charge controllers to optimise your solar system performance and battery life.",
    image: "/images/service-commercial.jpg",
    link: "/services/residential-solar",
  },
];

export default function ServicesGrid() {
  const { ref, visible } = useReveal();
  
  return (
    <section
      className="relative py-8 lg:py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 overflow-hidden"
      ref={ref}
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue-50/50 rounded-full blur-3xl pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#E56D00]/5 rounded-full blur-3xl pointer-events-none transform -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Premium Section Header */}
        <div
          className={`flex flex-col items-center text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-0.5 bg-gradient-to-r from-transparent to-brand-blue-500 rounded-full" />
            <span className="text-sm font-heading font-bold uppercase tracking-[0.2em] text-brand-blue-600">
              What We Offer
            </span>
            <span className="w-10 h-0.5 bg-gradient-to-l from-transparent to-brand-blue-500 rounded-full" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-heading font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Our Premium{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#144E9A] to-[#E56D00]">
              Services
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed font-light">
            Comprehensive solar energy and storage solutions tailored for maximum efficiency, reliability, and long-term sustainability.
          </p>
        </div>

        {/* Infinite Scrolling Marquee */}
        <div 
          className={`relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] pb-12 pt-4 transition-all duration-1000 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="flex w-max animate-marquee gap-6 sm:gap-8 xl:gap-10 hover:[animation-play-state:paused]">
            {[...services, ...services].map((service, i) => (
              <Link
                key={i}
                to={service.link}
                className="group flex flex-col justify-between w-[280px] sm:w-[340px] lg:w-[380px] shrink-0 bg-white rounded-3xl overflow-hidden border border-slate-200/60 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(20,78,154,0.15)] hover:border-brand-blue-200 hover:-translate-y-2 transition-all duration-500 relative"
              >
                <div>
                  {/* Image Container with Inner Shadow & Scale */}
                  <div className="h-64 overflow-hidden relative">
                    <div className="absolute inset-0 bg-brand-blue-900/10 mix-blend-multiply z-10 transition-opacity duration-500 group-hover:opacity-0" />
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Bottom fade into card body */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
                  </div>

                  {/* Card Content */}
                  <div className="px-6 sm:px-8 pt-3 pb-6 relative z-20 bg-white -mt-2">
                    <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#144E9A] group-hover:to-[#E56D00] transition-all duration-300 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2 relative z-20">
                  <div className="flex items-center gap-3 text-brand-blue-600 font-heading font-bold text-sm sm:text-base group-hover:text-[#E56D00] transition-colors duration-300">
                    <div className="w-10 h-10 rounded-full bg-brand-blue-50 group-hover:bg-[#E56D00]/10 flex items-center justify-center transition-colors duration-300 shrink-0">
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                    <span>Discover More</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
