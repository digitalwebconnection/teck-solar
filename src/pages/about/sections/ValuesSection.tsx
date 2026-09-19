import React, { useState, useRef } from "react";
import { useReveal } from "../../../hooks/useReveal";

interface ValueItem {
  step: string;
  tag: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const values: ValueItem[] = [
  {
    step: "01",
    tag: "Net-Zero Impact",
    title: "Sustainability",
    description:
      "We are committed to reducing carbon emissions and accelerating Australia's transition to clean, dependable renewable energy.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    step: "02",
    tag: "Direct Accountability",
    title: "Customer First",
    description:
      "Every solar system is tailored to your energy profile. We provide transparent advice from initial assessment through lifetime support.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    step: "03",
    tag: "Tier-1 CEC Hardware",
    title: "Quality Assurance",
    description:
      "We partner exclusively with tier-1 Bloomberg-rated manufacturers and execute installations that exceed Australian Standards AS/NZS 5033.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    step: "04",
    tag: "Smart Energy Tech",
    title: "Innovation",
    description:
      "We integrate smart WiFi-connected inverters, modular battery storage, and dynamic EV charging for total household energy management.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

// Interactive 3D Tilt Card Component for Core Values
function ValueTiltCard({
  item,
  index,
  visible,
}: {
  item: ValueItem;
  index: number;
  visible: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normX = x / rect.width - 0.5;
    const normY = y / rect.height - 0.5;

    const rotX = -normY * 16;
    const rotY = normX * 16;

    setCoords({ x: rotX, y: rotY });

    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${coords.x}deg) rotateY(${coords.y}deg) scale3d(1.025, 1.025, 1.025)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        transition: isHovered
          ? "transform 0.1s ease-out, box-shadow 0.3s ease-out, border-color 0.3s"
          : "transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out, border-color 0.3s",
        transformStyle: "preserve-3d",
        transitionDelay: `${index * 80}ms`,
      }}
      className={`group relative overflow-hidden rounded-2xl bg-white p-6 border transition-all duration-300 flex flex-col justify-between select-none cursor-pointer ${
        isHovered
          ? "border-brand-blue-500 shadow-2xl shadow-brand-blue-900/15"
          : "border-slate-200/80 shadow-xs hover:border-slate-300"
      } ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {/* 1. Dynamic Rotating Conic Laser Border Beam on Active Hover */}
      {isHovered && (
        <div className="absolute inset-0 rounded-2xl pointer-events-none p-[1.5px] overflow-hidden">
          <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_340deg,#14488C_350deg,#F38335_360deg)] animate-[laser-spin_3s_linear_infinite]" />
          <div className="absolute inset-[1.5px] rounded-2xl bg-white" />
        </div>
      )}

      {/* 2. Real-Time Mouse Spotlight Illumination Glare */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(350px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(20, 72, 140, 0.12), transparent 60%)`,
        }}
      />

      {/* 3. Top Gradient Energy Accent */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-blue-500 via-primary-500 to-brand-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* 4. 3D Parallax Depth Content */}
      <div className="relative z-10" style={{ transform: "translateZ(28px)" }}>
        {/* Top Row: Icon & Step Index */}
        <div className="flex items-center justify-between mb-5">
          <div className="relative">
            {/* Animated Halo Glow on Hover */}
            <div className="absolute -inset-1.5 rounded-xl bg-brand-blue-500/25 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative w-12 h-12 rounded-xl bg-brand-blue-50 text-brand-blue-500 flex items-center justify-center border border-brand-blue-200/80 group-hover:bg-brand-blue-500 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xs">
              {item.icon}
            </div>
          </div>

          <span className="text-xs font-mono font-bold text-slate-300 group-hover:text-brand-blue-500 transition-colors">
            {item.step}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-heading font-bold text-slate-900 group-hover:text-brand-blue-500 transition-colors">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* 5. Bottom Benchmark Pill */}
      <div
        className="mt-6 pt-4 border-t border-slate-100 relative z-10 flex items-center justify-between"
        style={{ transform: "translateZ(18px)" }}
      >
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
          <span className="text-xs font-medium text-slate-500 group-hover:text-slate-700 transition-colors">
            {item.tag}
          </span>
        </div>

        <span className="text-xs font-heading font-bold text-brand-blue-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
          →
        </span>
      </div>
    </div>
  );
}

export default function ValuesSection() {
  const { ref, visible } = useReveal();

  return (
    <section
      className="py-14 sm:py-18 lg:py-22 px-4 sm:px-6 lg:px-8 bg-slate-50/50 relative overflow-hidden border-b border-slate-100"
      ref={ref}
    >
      {/* Background Animated Subtle Glows */}
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
            Our Core Values
          </h2>

          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            The engineering principles and customer commitments that guide every residential and commercial installation we deliver across Australia.
          </p>
        </div>

        {/* 4 Interactive 3D Tilt Value Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {values.map((val, i) => (
            <ValueTiltCard
              key={val.step}
              item={val}
              index={i}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
