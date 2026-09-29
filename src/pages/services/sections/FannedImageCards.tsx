import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "motion/react";
import { ShieldCheck } from "lucide-react";

interface FannedImageCardsProps {
  featureImage: string;
  title: string;
}

export function FannedImageCards({ featureImage, title }: FannedImageCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    amount: 0.35,
    margin: "0px 0px -100px 0px",
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const sideCards = [
    // Top-Left (Warm Amber / Gold)
    {
      id: "tl",
      side: "left",
      bg: "bg-[#F59E0B]",
      shadow: "shadow-amber-500/35",
      circleBg: "bg-white/35",
      holeBg: "bg-black/20",
      hidden: { x: 0, y: -10, rotate: 0, scale: 0.85, opacity: 0 },
      shown: { x: -225, y: -130, rotate: -18, scale: 1, opacity: 1 },
      mobileShown: { x: -100, y: -75, rotate: -14, scale: 0.85, opacity: 1 },
      zIndex: 1,
    },
    // Mid-Left (Sky Blue)
    {
      id: "ml",
      side: "left",
      bg: "bg-[#0EA5E9]",
      shadow: "shadow-sky-500/35",
      circleBg: "bg-white/35",
      holeBg: "bg-black/20",
      hidden: { x: 0, y: 0, rotate: 0, scale: 0.85, opacity: 0 },
      shown: { x: -250, y: 20, rotate: -7, scale: 1, opacity: 1 },
      mobileShown: { x: -115, y: 15, rotate: -5, scale: 0.85, opacity: 1 },
      zIndex: 2,
    },
    // Bottom-Left (Emerald Green)
    {
      id: "bl",
      side: "left",
      bg: "bg-[#10B981]",
      shadow: "shadow-emerald-500/35",
      circleBg: "bg-white/35",
      holeBg: "bg-black/20",
      hidden: { x: 0, y: 10, rotate: 0, scale: 0.85, opacity: 0 },
      shown: { x: -215, y: 175, rotate: -24, scale: 1, opacity: 1 },
      mobileShown: { x: -95, y: 95, rotate: -18, scale: 0.85, opacity: 1 },
      zIndex: 1,
    },
    // Top-Right (Electric Cyan)
    {
      id: "tr",
      side: "right",
      bg: "bg-[#06B6D4]",
      shadow: "shadow-cyan-500/35",
      circleBg: "bg-white/35",
      holeBg: "bg-black/20",
      hidden: { x: 0, y: -10, rotate: 0, scale: 0.85, opacity: 0 },
      shown: { x: 225, y: -125, rotate: 20, scale: 1, opacity: 1 },
      mobileShown: { x: 100, y: -70, rotate: 15, scale: 0.85, opacity: 1 },
      zIndex: 1,
    },
    // Mid-Right (Solar Red-Orange / Coral)
    {
      id: "mr",
      side: "right",
      bg: "bg-[#EA580C]",
      shadow: "shadow-orange-600/35",
      circleBg: "bg-white/35",
      holeBg: "bg-black/20",
      hidden: { x: 0, y: 0, rotate: 0, scale: 0.85, opacity: 0 },
      shown: { x: 250, y: 30, rotate: 7, scale: 1, opacity: 1 },
      mobileShown: { x: 115, y: 15, rotate: 6, scale: 0.85, opacity: 1 },
      zIndex: 2,
    },
    // Bottom-Right (Golden Amber / Honey)
    {
      id: "br",
      side: "right",
      bg: "bg-[#FBBF24]",
      shadow: "shadow-amber-400/35",
      circleBg: "bg-white/35",
      holeBg: "bg-black/20",
      hidden: { x: 0, y: 10, rotate: 0, scale: 0.85, opacity: 0 },
      shown: { x: 215, y: 175, rotate: 17, scale: 1, opacity: 1 },
      mobileShown: { x: 95, y: 100, rotate: 14, scale: 0.85, opacity: 1 },
      zIndex: 1,
    },
  ];

  const badgeTitle = title.toLowerCase().includes("ev")
    ? "Level 2 Fast Charging"
    : title.toLowerCase().includes("battery")
    ? "10-Year Warranty"
    : title.toLowerCase().includes("commercial")
    ? "Commercial Tier 1"
    : "Tier 1 Quality";

  return (
    <div
      ref={containerRef}
      className="relative w-full flex items-center justify-center py-6 sm:py-14"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Decorative backdrop grid plate */}
      <div className="absolute -top-4 -right-4 w-40 h-40 bg-[radial-gradient(#14488C_2px,transparent_2px)] bg-[size:16px_16px] opacity-20 pointer-events-none -z-10" />

      {/* Fan-Out Side Cards (Positioned behind the central image) */}
      {sideCards.map((card, idx) => {
        const targetShown = isMobile ? card.mobileShown : card.shown;

        return (
          <motion.div
            key={card.id}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 lg:w-70 h-32 sm:h-40 lg:h-44 rounded-[2rem] ${card.bg} ${card.shadow} shadow-2xl select-none pointer-events-none`}
            style={{ zIndex: card.zIndex }}
            initial={card.hidden}
            animate={isInView ? targetShown : card.hidden}
            transition={{
              type: "spring",
              stiffness: 140,
              damping: 18,
              delay: idx * 0.04,
            }}
          >
            {/* Wallet punch-latch circular notch on outer edge */}
            <div
              className={`absolute top-1/2 -translate-y-1/2 ${
                card.side === "left" ? "left-4 sm:left-5" : "right-4 sm:right-5"
              } flex items-center justify-center`}
            >
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${card.circleBg} backdrop-blur-sm flex items-center justify-center shadow-inner`}
              >
                <div className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full ${card.holeBg} shadow-sm`} />
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Central Hero Image Card - Enriched & Well Proportioned */}
      <div className="relative z-20 w-[280px] sm:w-[370px] md:w-[420px] lg:w-[460px] xl:w-[490px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_28px_70px_-15px_rgba(20,72,140,0.38)] border-8 border-white bg-slate-100">
        <div className="absolute inset-0 bg-brand-blue-900/10 mix-blend-multiply z-10 pointer-events-none" />
        <img
          src={featureImage}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
        />

        {/* Subtle inner top-to-bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent pointer-events-none z-10" />

        {/* Floating Quality Badge at bottom of the main image */}
        <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-white flex items-center gap-3.5 z-20">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue-500 to-brand-blue-700 flex items-center justify-center shrink-0 shadow-inner text-white">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900 leading-tight">{badgeTitle}</p>
            <p className="text-xs text-brand-blue-600 font-semibold uppercase tracking-wider mt-0.5">
              Guaranteed Installation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
