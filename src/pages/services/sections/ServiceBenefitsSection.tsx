import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, type MotionValue, useScroll, useTransform } from "motion/react";

import { useReveal } from "@/hooks/useReveal";
import { Sparkles, ArrowDown } from "lucide-react";

interface Benefit {
  icon: ReactNode;
  title: string;
  description: string;
}

interface ServiceBenefitsSectionProps {
  title: string;
  benefits: Benefit[];
}

interface ColumnProps {
  items: Array<{ item: Benefit; itemNumber: number }>;
  y: MotionValue<number>;
  className?: string;
}

const cardThemes = [
  // 1: Soft Sky Blue
  {
    bg: "bg-[#EBF3FE]",
    iconColor: "text-brand-blue-600",
    cornerGlow: "bg-blue-400/20",
  },
  // 2: Soft Solar Orange / Apricot
  {
    bg: "bg-[#FFF1E6]",
    iconColor: "text-brand-orange",
    cornerGlow: "bg-orange-400/20",
  },
  // 3: Soft Mint Green
  {
    bg: "bg-[#EAF7EE]",
    iconColor: "text-emerald-600",
    cornerGlow: "bg-emerald-400/20",
  },
  // 4: Soft Lavender Purple
  {
    bg: "bg-[#F2EEFD]",
    iconColor: "text-purple-600",
    cornerGlow: "bg-purple-400/20",
  },
  // 5: Soft Aqua / Teal
  {
    bg: "bg-[#E5F7F8]",
    iconColor: "text-teal-600",
    cornerGlow: "bg-teal-400/20",
  },
  // 6: Soft Rose / Blush
  {
    bg: "bg-[#FFEBEF]",
    iconColor: "text-rose-600",
    cornerGlow: "bg-rose-400/20",
  },
  // 7: Soft Solar Butter Yellow
  {
    bg: "bg-[#FFF9DE]",
    iconColor: "text-amber-600",
    cornerGlow: "bg-amber-400/20",
  },
  // 8: Soft Periwinkle Blue
  {
    bg: "bg-[#EEF1FA]",
    iconColor: "text-indigo-600",
    cornerGlow: "bg-indigo-400/20",
  },
];

const Column = ({ items, y, className = "" }: ColumnProps) => {
  return (
    <motion.div
      className={`relative flex h-full flex-col gap-5 sm:gap-6 ${className}`}
      style={{ y }}
    >
      {items.map(({ item, itemNumber }, i) => {
        const theme = cardThemes[(itemNumber - 1) % cardThemes.length];
        return (
          <div
            key={i}
            className={`group relative flex flex-col justify-between p-4 sm:p-7 rounded-md ${theme.bg} border border-black/5 shadow-[0_8px_24px_-4px_rgba(20,72,140,0.06)] transition-all duration-300 hover:shadow-[0_16px_36px_-6px_rgba(20,72,140,0.14)] hover:-translate-y-1.5 select-none shrink-0 overflow-hidden`}
          >
            {/* Ambient corner glow that expands on hover */}
            <div
              className={`absolute -top-12 -right-12 w-36 h-36 rounded-full ${theme.cornerGlow} blur-2xl pointer-events-none transition-transform duration-500 group-hover:scale-150`}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white ${theme.iconColor} shadow-xs flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                >
                  {item.icon}
                </div>
                <span className="px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-mono font-bold bg-white/90 text-slate-700 shadow-2xs">
                  0{itemNumber}
                </span>
              </div>
              <h3 className="text-base sm:text-xl font-heading font-extrabold text-slate-900 group-hover:text-brand-blue-800 transition-colors mb-2 sm:mb-2.5">
                {item.title}
              </h3>
              <p className="text-xs sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>

            <div className="relative z-10 mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-black/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 sm:gap-0 text-[10px] sm:text-xs font-semibold text-slate-500">
              <span className="font-bold text-slate-700">Teck Solar Quality</span>
              <span className="text-emerald-700 flex items-center gap-1 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Guaranteed
              </span>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default function ServiceBenefitsSection({
  title,
  benefits,
}: ServiceBenefitsSectionProps) {
  const benefitsReveal = useReveal();
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const h = dimension.height || (typeof window !== "undefined" ? window.innerHeight : 800);
  const y = useTransform(scrollYProgress, [0, 1], [0, h * 1.4]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, h * 2.1]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, h * 0.9]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, h * 1.8]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const getColItems = (offset: number, count = 4) => {
    if (!benefits || benefits.length === 0) return [];
    return Array.from({ length: count }, (_, i) => ({
      item: benefits[(i + offset) % benefits.length],
      itemNumber: ((i + offset) % cardThemes.length) + 1,
    }));
  };

  const col1 = getColItems(0, 4);
  const col2 = getColItems(4, 4);
  const col3 = getColItems(2, 4);
  const col4 = getColItems(6, 4);

  return (
    <section
      className="py-12 sm:py-16 bg-slate-50/70 relative overflow-hidden flex flex-col items-center"
      ref={benefitsReveal.ref}
    >
      {/* Decorative ambient blurred backdrops */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center mb-10 sm:mb-12">
        <div
          className={`transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            benefitsReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue-50 border border-brand-blue-200/60 text-brand-blue-800 font-bold text-xs tracking-wider uppercase mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
            <span>Key Advantages</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-brand-blue-900 mt-1 tracking-tight">
            Why Choose Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-600 to-primary-500">
              {title}
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            Discover the powerful advantages and long-term value our premium {title.toLowerCase()} solutions deliver.
          </p>

          <div className="mt-6 flex items-center justify-center gap-1.5 text-xs text-slate-400 font-medium">
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-brand-orange" />
            <span>Scroll to explore benefits</span>
          </div>
        </div>
      </div>

      {/* Parallax Multi-Column Gallery Container */}
      <div
        ref={gallery}
        className="relative box-border flex h-[145vh] sm:h-[165vh] w-full max-w-[1400px] gap-4 sm:gap-6 overflow-hidden px-4 sm:px-6 lg:px-8 py-4"
      >
        {/* Column 1 */}
        <Column
          items={col1}
          y={y}
          className="-top-[30%] w-1/2 lg:w-1/4"
        />

        {/* Column 2 */}
        <Column
          items={col2}
          y={y2}
          className="-top-[55%] w-1/2 lg:w-1/4"
        />

        {/* Column 3 (desktop) */}
        <Column
          items={col3}
          y={y3}
          className="-top-[25%] hidden lg:flex lg:w-1/4"
        />

        {/* Column 4 (desktop) */}
        <Column
          items={col4}
          y={y4}
          className="-top-[45%] hidden lg:flex lg:w-1/4"
        />

        {/* Top Gradient Fade Mask */}
        <div className="absolute top-0 left-0 right-0 h-28 sm:h-36 bg-gradient-to-b from-slate-50 via-slate-50/80 to-transparent z-20 pointer-events-none" />

        {/* Bottom Gradient Fade Mask */}
        <div className="absolute bottom-0 left-0 right-0 h-28 sm:h-36 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent z-20 pointer-events-none" />
      </div>
    </section>
  );
}
