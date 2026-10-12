import React, { useState } from "react";
import { SunMedium, Users, Award, Cpu } from "lucide-react";
import { useReveal } from "../../../hooks/useReveal";
import { useQuoteModal } from "@/features/quote";

interface ValueItem {
  step: string;
  tag?: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  cardBg: string;
}

const values: ValueItem[] = [
  {
    step: "01",
    title: "Sustainability",
    description:
      "We are committed to reducing carbon emissions and accelerating Australia's transition to clean, dependable renewable energy.",
    image: "/images/banners/mission-solar.webp",
    icon: <SunMedium className="w-12 h-12 text-[#F38335]" strokeWidth={1.8} />,
    cardBg: "bg-gradient-to-br from-[#081C37] via-[#0B2448] to-[#103B74] border border-brand-blue-400/25",
  },
  {
    step: "02",
    title: "Customer First",
    description:
      "Every solar system is tailored to your energy profile. We provide transparent advice from initial assessment through lifetime support.",
    image: "/images/banners/about-team.webp",
    icon: <Users className="w-12 h-12 text-[#F38335]" strokeWidth={1.8} />,
    cardBg: "bg-gradient-to-br from-[#0B2448] via-[#0E356A] to-[#14488C] border border-brand-blue-300/25",
  },
  {
    step: "03",
    title: "Quality Assurance",
    description:
      "We partner exclusively with tier-1 Bloomberg-rated manufacturers and execute installations that exceed Australian Standards AS/NZS 5033.",
    image: "/images/hero/installation.webp",
    icon: <Award className="w-12 h-12 text-[#F38335]" strokeWidth={1.8} />,
    cardBg: "bg-gradient-to-br from-[#081C37] via-[#0B2448] to-[#103B74] border border-brand-blue-400/25",
  },
  {
    step: "04",
    title: "Innovation",
    description:
      "We integrate smart WiFi-connected inverters, modular battery storage, and dynamic EV charging for total household energy management.",
    image: "/images/banners/battery-hero.webp",
    icon: <Cpu className="w-12 h-12 text-[#F38335]" strokeWidth={1.8} />,
    cardBg: "bg-gradient-to-br from-[#0B2448] via-[#0E356A] to-[#14488C] border border-brand-blue-300/25",
  },
];

// Interactive 3D Flip Box Component
function ValueFlipBox({
  item,
  index,
  visible,
  onOpenQuote,
}: {
  item: ValueItem;
  index: number;
  visible: boolean;
  onOpenQuote: () => void;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      data-flip-card="true"
      className={`box-item relative w-full h-[280px] sm:h-[300px] cursor-pointer transition-all duration-700 select-none ${
        isFlipped ? "is-flipped" : ""
      } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 80}ms` }}
      onClick={() => setIsFlipped((prev) => !prev)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className="flip-box group relative w-full h-full [transform-style:preserve-3d] [perspective:1000px]">
        {/* FLIP BOX FRONT - Deep Dark Brand Royal Navy */}
        <div
          className={`flip-box-front relative w-full h-full rounded-2xl text-center shadow-xl ${item.cardBg} [backface-visibility:hidden] [transform-style:preserve-3d] transition-transform duration-700 ease-[cubic-bezier(0.4,0.2,0.2,1)]`}
        >
          {/* 3D Floating Inner Content */}
          <div className="inner absolute top-1/2 left-0 w-full p-6 text-center z-10 [perspective:inherit] [transform:translateY(-50%)_translateZ(60px)_scale(0.94)] pointer-events-none">
            {/* Solar Orange Icon */}
            <div className="flex justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>

            {/* Crisp White Header */}
            <h3 className="flip-box-header text-xl sm:text-[22px] font-heading font-extrabold text-white tracking-tight leading-snug drop-shadow-sm">
              {item.title}
            </h3>
          </div>
        </div>

        {/* FLIP BOX BACK - 3D Related Image Reveal */}
        <div
          className="flip-box-back absolute top-0 left-0 w-full h-full rounded-2xl text-center shadow-2xl text-white [backface-visibility:hidden] [transform-style:preserve-3d] transition-transform duration-700 ease-[cubic-bezier(0.4,0.2,0.2,1)] bg-cover bg-center"
          style={{ backgroundImage: `url('${item.image}')` }}
        >
          {/* Dark Glassmorphic Backdrop Overlay */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-950/95 via-slate-950/85 to-slate-900/60" />

          {/* 3D Floating Inner Content */}
          <div className="inner absolute top-1/2 left-0 w-full px-5 py-4 text-center z-10 [perspective:inherit] [transform:translateY(-50%)_translateZ(60px)_scale(0.94)]">
            {/* Back Header */}
            <h3 className="flip-box-header text-lg sm:text-xl font-heading font-extrabold text-white tracking-tight leading-tight mb-2 drop-shadow-md">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-slate-100/95 text-xs sm:text-[13px] leading-relaxed mb-4 max-w-xs mx-auto drop-shadow-sm font-normal line-clamp-3">
              {item.description}
            </p>

            {/* Flip Box Action Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenQuote();
              }}
              className="flip-box-button inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg border border-white/90 text-white font-bold text-xs uppercase tracking-wider hover:bg-[#E56D00] hover:border-[#E56D00] hover:text-white transition-all duration-300 shadow-md cursor-pointer active:scale-95"
            >
              <span>Learn More</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ValuesSection() {
  const { ref, visible } = useReveal();
  const { openModal } = useQuoteModal();

  return (
    <section
      className="py-14 sm:py-18 lg:py-22 px-4 sm:px-6 lg:px-8 bg-slate-50/70 relative overflow-hidden border-b border-slate-100"
      ref={ref}
    >
      {/* Background Animated Subtle Glows for Light Background */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-brand-blue-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-primary-100/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Authoritative Section Header */}
        <div
          className={`max-w-3xl transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-8 h-0.5 bg-brand-blue-500 rounded-full" />
            <span className="text-xs font-heading font-bold uppercase tracking-[0.2em] text-brand-blue-500">
              What Drives Us
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
            Our Core{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#144E9A] to-[#E56D00]">
              Values
            </span>
          </h2>

          <p className="mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
            The engineering principles and customer commitments that guide every
            residential and commercial installation we deliver across Australia.
          </p>
        </div>

        {/* 4 Interactive 3D Flip Boxes */}
        <div className="box-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 w-full items-stretch">
          {values.map((val, i) => (
            <ValueFlipBox
              key={val.step}
              item={val}
              index={i}
              visible={visible}
              onOpenQuote={openModal}
            />
          ))}
        </div>
      </div>

      {/* Exact CSS converted from user snippet with 3D depth */}
      <style>{`
        .flip-box {
          -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
          -webkit-perspective: 1000px;
          perspective: 1000px;
        }
        .flip-box-front,
        .flip-box-back {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
          transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
          -webkit-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
        }
        .flip-box-front {
          -webkit-transform: rotateY(0deg);
          transform: rotateY(0deg);
        }
        .box-item:hover .flip-box-front,
        .box-item.is-flipped .flip-box-front {
          -webkit-transform: rotateY(-180deg) !important;
          transform: rotateY(-180deg) !important;
        }
        .flip-box-back {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          -webkit-transform: rotateY(180deg);
          transform: rotateY(180deg);
        }
        .box-item:hover .flip-box-back,
        .box-item.is-flipped .flip-box-back {
          -webkit-transform: rotateY(0deg) !important;
          transform: rotateY(0deg) !important;
        }
        .flip-box .inner {
          -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);
          transform: translateY(-50%) translateZ(60px) scale(0.94);
        }
      `}</style>
    </section>
  );
}
