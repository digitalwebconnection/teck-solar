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
  icon: React.ReactNode;
}

const trustStats: StatItem[] = [
  {
    id: "installations",
    target: 2500,
    suffix: "+",
    label: "Installations Completed",
    badge: "Australia Wide",
    color: "blue",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    id: "capacity",
    target: 50,
    suffix: " MW+",
    label: "Solar Capacity Installed",
    badge: "Clean Energy",
    color: "orange",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: "satisfaction",
    target: 99,
    suffix: "%",
    label: "Customer Satisfaction",
    badge: "★ 4.9/5 Rating",
    color: "blue",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.514" />
      </svg>
    ),
  },
  {
    id: "warranty",
    target: 25,
    suffix: " Yrs",
    label: "Performance Warranty",
    badge: "Tier-1 Guaranteed",
    color: "orange",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
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

  return (
    <section className="py-8 lg:py-12 bg-slate-100 relative overflow-hidden border-b border-slate-200">
      {/* Subtle decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue-500/5 rounded-full blur-3xl pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl pointer-events-none transform -translate-x-1/2 translate-y-1/2"></div>

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        ref={ref}
      >
        {/* Section Header */}
        <div
          className={`text-center max-w-4xl mx-auto mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center justify-center gap-2.5 mb-4">
            <span className="w-8 h-0.5 bg-brand-blue-500 rounded-full" />
            <span className="text-xs font-heading font-bold uppercase tracking-[0.2em] text-brand-blue-500">
              Proven Track Record
            </span>
            <span className="w-8 h-0.5 bg-brand-blue-500 rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
            Numbers That {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#144E9A] to-[#E56D00]">
              Speak Trust
            </span>
          </h2>

          <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Real outcomes delivered across Australia with certified standards,
            Tier-1 engineered components, and decades of guaranteed reliability.
          </p>
        </div>

        {/* Premium Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustStats.map((item, index) => (
            <div
              key={item.id}
              className={`group relative bg-white rounded-xl p-8 border border-slate-200 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] hover:border-brand-blue-200 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Subtle hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative z-10">
                {/* Icon & Badge Header */}
                <div className="flex flex-col mb-8 gap-4">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-500 ${
                      item.color === "orange"
                        ? "bg-gradient-to-br from-[#E56D00]/10 to-orange-400/10 text-[#E56D00] group-hover:bg-[#E56D00] group-hover:text-white"
                        : "bg-gradient-to-br from-[#144E9A]/10 to-brand-blue-500/10 text-[#144E9A] group-hover:bg-[#144E9A] group-hover:text-white"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>

                {/* Animated Number */}
                <div className="flex items-baseline gap-1 mb-3">
                  <span
                    className={`text-5xl font-heading font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r ${
                      item.color === "orange"
                        ? "from-[#E56D00] to-orange-400"
                        : "from-[#144E9A] to-brand-blue-500"
                    }`}
                  >
                    <AnimatedCounter target={item.target} prefix={item.prefix} start={visible} />
                  </span>
                  <span
                    className={`text-2xl font-heading font-black ${
                      item.color === "orange"
                        ? "text-[#E56D00]"
                        : "text-[#144E9A]"
                    }`}
                  >
                    {item.suffix}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-heading font-bold text-slate-900 leading-tight">
                  {item.label}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
