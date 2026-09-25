import { useEffect, useState } from "react";
import { useReveal } from "../../../hooks/useReveal";

interface StatItem {
  id: string;
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
  badge: string;
  color: "blue" | "orange";
  image: string;
  description: string;
}

const trustStats: StatItem[] = [
  {
    id: "installations",
    target: 2500,
    suffix: "+",
    label: "Installations Completed",
    badge: "Australia Wide",
    color: "blue",
    image: "/images/hero-installation.jpg",
    description: "Over 2,500 successful solar installations across Australia, providing sustainable and reliable energy solutions to homes and businesses.",
  },
  {
    id: "capacity",
    target: 50,
    suffix: " MW+",
    label: "Solar Capacity Installed",
    badge: "Clean Energy",
    color: "orange",
    image: "/images/hero-commercial.jpg",
    description: "Delivering over 50 Megawatts of clean, renewable energy to the grid, significantly reducing carbon footprints and power bills.",
  },
  {
    id: "satisfaction",
    target: 99,
    suffix: "%",
    label: "Customer Satisfaction",
    badge: "★ 4.9/5 Rating",
    color: "blue",
    image: "/images/service-residential.jpg",
    description: "A consistent 4.9/5 star rating from our customers, reflecting our commitment to quality, transparency, and ongoing support.",
  },
  {
    id: "warranty",
    target: 25,
    suffix: " Yrs",
    label: "Performance Warranty",
    badge: "Tier-1 Guaranteed",
    color: "orange",
    image: "/images/mission-solar.jpg",
    description: "Backed by an industry-leading 25-year performance warranty on Tier-1 engineered components for absolute peace of mind.",
  },
  {
    id: "carbon",
    target: 100,
    suffix: "k+",
    label: "Tons Carbon Offset",
    badge: "Eco Impact",
    color: "blue",
    image: "/images/service-battery.jpg",
    description: "Our installations have successfully offset over 100,000 tons of CO2 emissions, actively fighting climate change across the country.",
  },
];

function AnimatedCounter({
  target,
  prefix = "",
  start = false,
}: {
  target: number;
  prefix?: string;
  start: boolean;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let animId: number;
    const duration = 1800; // ms

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out exponential curve
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.floor(easeOut * target));

      if (progress < 1) {
        animId = requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [target, start]);

  return (
    <span>
      {prefix}
      {value.toLocaleString()}
    </span>
  );
}

export default function StatsSection() {
  const { ref, visible } = useReveal(0.2);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % trustStats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovering]);

  const displayData = trustStats[activeIndex];

  return (
    <section className="py-8 lg:py-14 bg-slate-50 relative overflow-hidden border-y border-slate-200">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        ref={ref}
      >
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          {/* Section Header */}
          <div
            className={`lg:col-span-5 text-left mb-16 lg:mb-0 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <div className="flex flex-col gap-6 lg:gap-8">
              <div className="flex items-center justify-start gap-3">
                <span className={`transition-colors duration-500 w-12 h-[2px] rounded-full ${displayData.color === 'orange' ? 'bg-[#E56D00]' : 'bg-[#14488C]'}`} />
                <span className={`text-sm font-heading font-bold uppercase tracking-[0.3em] transition-colors duration-500 ${displayData.color === 'orange' ? 'text-[#E56D00]' : 'text-[#14488C]'}`}>
                  {displayData.badge}
                </span>
              </div>
              
              <div className="overflow-hidden font-serif transition-all duration-500">
                 <span className={`text-7xl lg:text-8xl font-black tracking-tighter transition-colors duration-500 ${displayData.color === 'orange' ? 'text-[#E56D00]' : 'text-[#14488C]'}`}>
                   {displayData.prefix}<AnimatedCounter target={displayData.target} start={true} />{displayData.suffix}
                 </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-5xl font-serif font-heading font-extrabold text-slate-900 tracking-tight leading-tight transition-colors duration-500">
                {displayData.label.split(' ')[0]}{" "}
                <span className={`block mt-1 transition-colors duration-500 ${displayData.color === 'orange' ? 'text-[#E56D00]' : 'text-[#14488C]'}`}>
                  {displayData.label.split(' ').slice(1).join(' ')}
                </span>
              </h2>
            </div>
          </div>

          {/* Fanned Cards Display */}
          <div className="lg:col-span-7 flex justify-center items-center h-[450px] sm:h-[500px] w-full mt-10 lg:mt-0">
            <div className="relative w-full h-full max-w-[500px] mx-auto">
              {trustStats.map((item, index) => {
                const isActive = index === activeIndex;

                let transformClass = "";
                if (index === 0) {
                  transformClass = isActive 
                    ? "-translate-x-[90px] sm:-translate-x-[140px] -translate-y-8 rotate-0 z-50 scale-105" 
                    : "-translate-x-[120px] sm:-translate-x-[180px] translate-y-12 -rotate-12 z-10";
                }
                if (index === 1) {
                  transformClass = isActive 
                    ? "-translate-x-[40px] sm:-translate-x-[60px] -translate-y-12 rotate-0 z-50 scale-105" 
                    : "-translate-x-[60px] sm:-translate-x-[90px] translate-y-4 -rotate-6 z-20";
                }
                if (index === 2) {
                  transformClass = isActive 
                    ? "translate-x-0 -translate-y-16 rotate-0 z-50 scale-105" 
                    : "translate-x-0 translate-y-0 rotate-0 z-30";
                }
                if (index === 3) {
                  transformClass = isActive 
                    ? "translate-x-[40px] sm:translate-x-[60px] -translate-y-12 rotate-0 z-50 scale-105" 
                    : "translate-x-[60px] sm:translate-x-[90px] translate-y-4 rotate-6 z-20";
                }
                if (index === 4) {
                  transformClass = isActive 
                    ? "translate-x-[90px] sm:translate-x-[140px] -translate-y-8 rotate-0 z-50 scale-105" 
                    : "translate-x-[120px] sm:translate-x-[180px] translate-y-12 rotate-12 z-10";
                }

                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => { setActiveIndex(index); setIsHovering(true); }}
                    onMouseLeave={() => setIsHovering(false)}
                    className={`group absolute top-1/2 left-1/2 -mt-[170px] -ml-[110px] w-[220px] h-[340px] sm:w-[260px] sm:h-[380px] sm:-mt-[190px] sm:-ml-[130px] rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ease-out origin-bottom shadow-[0_10px_30px_rgba(0,0,0,0.5)] ${transformClass} ${
                      !visible && "opacity-0 scale-75"
                    }`}
                    style={{ transitionDelay: visible ? `${index * 150}ms` : "0ms" }}
                  >
                    {/* Full Card Background Image */}
                    <img 
                      src={item.image} 
                      alt={item.label} 
                      className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ${isActive ? 'scale-110' : 'scale-100'}`} 
                    />
                    
                    {/* Dim overlay for inactive cards to separate them without making them see-through */}
                    <div className={`absolute inset-0 bg-black transition-opacity duration-700 pointer-events-none ${isActive ? 'opacity-0' : 'opacity-40 group-hover:opacity-20'}`} />
                    
                    {/* Dark gradient overlay ONLY at the bottom for text readability */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 to-transparent pointer-events-none transition-opacity duration-700" />
                    
                    {/* Subtle border to frame the card */}
                    <div className="absolute inset-0 border border-white/20 rounded-xl pointer-events-none" />

                    {/* Bottom Info: Title Only */}
                    <div className="absolute bottom-6 left-6 right-6 z-10">
                      <h3 className="text-xl sm:text-2xl font-heading font-bold leading-tight text-white drop-shadow-md">
                        {item.label}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
