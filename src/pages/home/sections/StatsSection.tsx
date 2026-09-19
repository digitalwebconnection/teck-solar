import { useEffect, useState } from "react";
import { useReveal } from "../../../hooks/useReveal";

interface StatItem {
  id: string;
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
  badge: string;
  badgeColor: string;
  icon: (className?: string) => React.JSX.Element;
}

const trustStats: StatItem[] = [
  {
    id: "installations",
    target: 2500,
    suffix: "+",
    label: "Installations Completed",
    badge: "Australia Wide",
    badgeColor: "bg-primary-50 text-primary-700 border-primary-200/60",
    icon: (className = "w-6 h-6") => (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    id: "capacity",
    target: 50,
    suffix: " MW+",
    label: "Solar Capacity Installed",
    badge: "Clean Energy",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200/60",
    icon: (className = "w-6 h-6") => (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    id: "satisfaction",
    target: 99,
    suffix: "%",
    label: "Customer Satisfaction",
    badge: "★ 4.9/5 Rating",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
    icon: (className = "w-6 h-6") => (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
  },
  {
    id: "warranty",
    target: 25,
    suffix: " Yrs",
    label: "Performance Warranty",
    badge: "Tier-1 Guaranteed",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200/60",
    icon: (className = "w-6 h-6") => (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
];

function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  start = false,
}: {
  target: number;
  suffix?: string;
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
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const { ref, visible } = useReveal(0.2);

  return (
    <section className="relative py-16 sm:py-20 lg:py-14 bg-linear-to-b from-navy-50/70 via-white to-navy-50/40 border-y border-navy-100/70 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-50/50 rounded-full blur-3xl pointer-events-none translate-y-1/2" />

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        ref={ref}
      >
        {/* Section Header */}
        <div
          className={`text-center max-w-5xl mx-auto mb-12 sm:mb-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-heading font-extrabold text-navy-900 tracking-tight leading-tight">
            Numbers That Speak{" "}
            <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
              Trust
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-navy-600 max-w-6xl mx-auto leading-relaxed">
            Real outcomes delivered across Australia with certified standards,
            Tier-1 engineered components, and decades of guaranteed reliability.
          </p>
        </div>

        {/* Numbers of Trust Cards Grid - Centered items and text */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustStats.map((item, index) => (
            <div
              key={item.id}
              className={`group relative bg-white rounded-2xl p-6 sm:p-8 transition-all duration-500 flex flex-col items-center justify-center text-center ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Subtle top hover glow border */}
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-primary-500 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Centered Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 border border-primary-100/80 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500 group-hover:text-white group-hover:border-primary-500 group-hover:shadow-lg group-hover:shadow-primary-500/25 group-hover:scale-105 transition-all duration-300">
                {item.icon("w-7 h-7")}
              </div>

              {/* Centered Big Bold Stat Value */}
              <div className="font-heading font-black text-3xl sm:text-4xl lg:text-[42px] tracking-tight text-navy-900 group-hover:text-primary-600 transition-colors duration-300 leading-none">
                <AnimatedCounter
                  target={item.target}
                  prefix={item.prefix}
                  suffix={item.suffix}
                  start={visible}
                />
              </div>

              {/* Centered Stat Title */}
              <h3 className="font-serif font-bold text-navy-900 text-lg mt-3 text-center">
                {item.label}
              </h3>

              {/* Centered Accent Line */}
              <div className="w-8 h-1 rounded-full bg-primary-100 group-hover:w-16 group-hover:bg-primary-500 transition-all duration-500 mt-4 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
