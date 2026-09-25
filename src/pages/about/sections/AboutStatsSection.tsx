import { useReveal } from "../../../hooks/useReveal";

const stats = [
  {
    number: "10",
    symbol: "+",
    label: "Years of Experience",
    sub: "Pioneering solar since 2015",
    color: "blue",
    bgImage: "/images/about-team.jpg",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    number: "2,500",
    symbol: "+",
    label: "Installations",
    sub: "Across NSW, VIC & QLD",
    color: "orange",
    bgImage: "/images/hero-residential.jpg",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    number: "50",
    symbol: "MW+",
    label: "Installed Capacity",
    sub: "Clean renewable power",
    color: "blue",
    bgImage: "/images/hero-commercial.jpg",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    number: "100",
    symbol: "%",
    label: "CEC Accredited",
    sub: "In-house certified team",
    color: "orange",
    bgImage: "/images/hero-installation.jpg",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    number: "98",
    symbol: "%",
    label: "Happy Customers",
    sub: "Customer satisfaction rate",
    color: "blue",
    bgImage: "/images/service-residential.jpg",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    number: "15",
    symbol: "MWh+",
    label: "Battery Storage",
    sub: "Energy storage deployed",
    color: "orange",
    bgImage: "/images/service-battery.jpg",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
];

export default function AboutStatsSection() {
  const statsReveal = useReveal();

  return (
    <section className="py-0" ref={statsReveal.ref}>
      <div className={`flex flex-col lg:flex-row w-full h-auto lg:h-[450px] transition-all duration-1000 ease-out ${statsReveal.visible ? "opacity-100" : "opacity-0"}`}>
        {stats.map((item, i) => (
          <div
            key={i}
            className="group relative h-[280px] hover:h-[350px] lg:h-full lg:hover:h-full flex-1 lg:hover:flex-[3] transition-all duration-700 ease-in-out cursor-pointer overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-800/50 last:border-0"
          >
            {/* Background Image */}
            <img 
              src={item.bgImage} 
              alt={item.label}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
            />
            
            {/* Dark gradient overlay for readability (always visible slightly, partially fades on hover) */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent transition-opacity duration-500 group-hover:opacity-0" />
            
            {/* Solid Color Overlay on Hover */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${item.color === 'orange' ? 'bg-[#E56D00]' : 'bg-[#144E9A]'}`} />
            
            {/* Content Container */}
            <div className="absolute inset-0 p-6 lg:p-6 lg:group-hover:p-10 flex flex-col justify-between text-white z-10 transition-all duration-500">
              {/* Top Number (01, 02) */}
              <div className="text-sm font-bold tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
                0{i + 1}
              </div>
              
              {/* Bottom content */}
              <div className="flex flex-col justify-end h-full">
                {/* Title (Always visible at the bottom initially, then pushed up) */}
                <h3 className="text-2xl lg:text-xl lg:group-hover:text-3xl font-heading font-extrabold uppercase tracking-wide leading-tight transition-all duration-500 drop-shadow-md break-words">
                  {item.label}
                </h3>
                
                {/* Detailed stats that fade in on hover */}
                <div className="h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 group-hover:mt-2 transition-all duration-500 ease-in-out">
                  <p className="text-white/95 font-medium leading-relaxed mb-2 text-base lg:text-lg">
                    {item.sub}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl lg:text-6xl font-black">{item.number}</span>
                    <span className="text-3xl lg:text-4xl font-black">{item.symbol}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
