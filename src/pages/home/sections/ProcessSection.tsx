import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReveal } from "../../../hooks/useReveal";

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description:
      "We assess your energy needs, roof suitability, and discuss your goals in a free consultation.",
    image: "/images/service-residential.jpg",
  },
  {
    step: "02",
    title: "Custom Design",
    description:
      "Our engineers design a tailored solar system optimised for maximum energy generation.",
    image: "/images/hero-commercial.jpg",
  },
  {
    step: "03",
    title: "Detailed Quote",
    description:
      "Receive a transparent, no-obligation quote with clear pricing and projected savings.",
    image: "/images/service-commercial.jpg",
  },
  {
    step: "04",
    title: "Permits & Approvals",
    description:
      "We handle all paperwork, council permits, and grid connection applications on your behalf.",
    image: "/images/hero-installation.jpg",
  },
  {
    step: "05",
    title: "Professional Installation",
    description:
      "Our SAA-accredited team installs your system with meticulous attention to quality and safety.",
    image: "/images/about-team.jpg",
  },
  {
    step: "06",
    title: "Monitoring & Support",
    description:
      "Enjoy real-time monitoring and ongoing support to ensure peak performance for decades.",
    image: "/images/service-battery.jpg",
  },
];

// ─── Desktop Card with Auto-Hover on Scroll Reach ────────────────────────────
function ProcessCardItem({
  step,
  position,
}: {
  step: (typeof processSteps)[0];
  position: { top: string; left: string };
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isAutoHover, setIsAutoHover] = useState(false);
  const [isMouseHover, setIsMouseHover] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAutoHover(entry.isIntersecting);
      },
      {
        root: null,
        // Card auto-hovers when it reaches the comfortable viewing zone
        rootMargin: "-15% 0px -20% 0px",
        threshold: 0.25,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isActive = isMouseHover || isAutoHover;

  return (
    <motion.div
      ref={cardRef}
      className={`absolute w-[360px] p-8 bg-white/90 backdrop-blur-xl border rounded-3xl shadow-2xl z-10 group overflow-hidden transition-all duration-500 ${
        isActive
          ? "border-[#E56D00]/50 shadow-[0_20px_50px_rgba(229,109,0,0.18)]"
          : "border-slate-200/60"
      }`}
      style={{
        top: position.top,
        left: position.left,
      }}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
      transition={{ duration: 0.8, delay: 0.1 }}
      onMouseEnter={() => setIsMouseHover(true)}
      onMouseLeave={() => setIsMouseHover(false)}
    >
      {/* Image Reveal on Hover & Auto-Hover */}
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-700 ${
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <img
          src={step.image}
          alt={step.title}
          className={`w-full h-full object-cover transition-transform duration-1000 ${
            isActive ? "scale-100" : "scale-105 group-hover:scale-100"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
      </div>

      {/* Card Content */}
      <div
        className={`relative z-10 flex flex-col h-full transition-colors duration-500 ${
          isActive ? "text-white" : "group-hover:text-white"
        }`}
      >
        <div
          className={`text-6xl font-heading font-black tracking-tighter mb-6 transition-colors ${
            isActive
              ? "text-white/80"
              : "text-brand-blue-100 group-hover:text-white/80"
          }`}
        >
          {step.step}
        </div>
        <h3
          className={`text-2xl font-heading font-extrabold mb-3 transition-colors ${
            isActive ? "text-white" : "text-slate-900 group-hover:text-white"
          }`}
        >
          {step.title}
        </h3>
        <p
          className={`text-base leading-relaxed transition-colors ${
            isActive ? "text-slate-200" : "text-slate-600 group-hover:text-slate-200"
          }`}
        >
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

// ─── Mobile Card with Auto-Hover on Scroll Reach ─────────────────────────────
function MobileProcessCardItem({
  step,
}: {
  step: (typeof processSteps)[0];
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isAutoHover, setIsAutoHover] = useState(false);
  const [isMouseHover, setIsMouseHover] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAutoHover(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "-15% 0px -20% 0px",
        threshold: 0.25,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isActive = isMouseHover || isAutoHover;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6 }}
      className={`relative flex flex-col p-8 bg-white border rounded-3xl shadow-xl overflow-hidden group transition-all duration-500 ${
        isActive
          ? "border-[#E56D00]/50 shadow-[0_15px_40px_rgba(229,109,0,0.15)]"
          : "border-slate-200"
      }`}
      onMouseEnter={() => setIsMouseHover(true)}
      onMouseLeave={() => setIsMouseHover(false)}
    >
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-700 ${
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <img
          src={step.image}
          alt={step.title}
          className={`w-full h-full object-cover transition-transform duration-1000 ${
            isActive ? "scale-100" : "scale-105 group-hover:scale-100"
          }`}
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      </div>
      <div className="relative z-10">
        <div
          className={`text-5xl font-heading font-black tracking-tighter mb-4 transition-colors ${
            isActive
              ? "text-white/80"
              : "text-brand-blue-100 group-hover:text-white/20"
          }`}
        >
          {step.step}
        </div>
        <h3
          className={`text-2xl font-heading font-extrabold mb-2 transition-colors ${
            isActive ? "text-white" : "text-slate-900 group-hover:text-white"
          }`}
        >
          {step.title}
        </h3>
        <p
          className={`transition-colors ${
            isActive ? "text-slate-200" : "text-slate-600 group-hover:text-slate-200"
          }`}
        >
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const { ref: headerRef, visible } = useReveal(0.15);

  // Card positions aligned with the clean S-curve path below (unchanged)
  const cardPositions = [
    { top: "2%", left: "45%" }, // 01 - right
    { top: "18%", left: "4%" }, // 02 - left
    { top: "44%", left: "14%" }, // 03 - right
    { top: "52%", left: "75%" }, // 04 - left
    { top: "72%", left: "40%" }, // 05 - right
    { top: "88%", left: "4%" }, // 06 - left
  ];

  return (
    <section className="bg-slate-50 relative overflow-hidden py-12 lg:py-24">
      {/* Header Section */}
      <div
        ref={headerRef}
        className={`max-w-7xl mx-auto px-6 relative z-10 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-0.5 bg-gradient-to-r from-transparent to-[#E56D00] rounded-full" />
            <span className="text-sm font-heading font-bold uppercase tracking-[0.2em] text-[#E56D00]">
              Our Process
            </span>
            <span className="w-10 h-0.5 bg-gradient-to-l from-transparent to-[#E56D00] rounded-full" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            The Journey To
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#144E9A] to-[#E56D00]">
              {" "}
              Solar Power
            </span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl font-light">
            Scroll down to follow the path of your solar installation from
            consultation to grid connection.
          </p>
        </div>
      </div>

      {/* Interactive Path Section */}
      <div
        ref={ref}
        className="relative w-full mx-auto max-w-[1100px] h-[1400px] my-8 hidden lg:block"
      >
        {/* The Animated SVG Stroke */}
        <LinePath
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          scrollYProgress={scrollYProgress}
        />

        {/* The Cards absolutely positioned along the stroke */}
        {processSteps.map((step, i) => (
          <ProcessCardItem
            key={i}
            step={step}
            position={cardPositions[i]}
          />
        ))}
      </div>

      {/* Mobile / Tablet View (Fallback standard stack) */}
      <div className="lg:hidden flex flex-col gap-8 px-4 mt-16 max-w-2xl mx-auto">
        {processSteps.map((step, i) => (
          <MobileProcessCardItem key={i} step={step} />
        ))}
      </div>
    </section>
  );
}

const LinePath = ({
  className,
  scrollYProgress,
}: {
  className: string;
  scrollYProgress: any;
}) => {
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Clean S-curve zigzag: starts top-center, curves right, down, left, down, right, etc.
  // viewBox: 0 0 1100 1400 — 6 stop-points evenly spaced every ~230px
  const d = [
    "M 550 40",
    "C 900 40, 1050 130, 1050 230", // curve to right
    "C 1050 330, 900 380, 700 380", // ease across right
    "C 500 380, 150 430, 50 560", // sweep to left
    "C -50 690, 100 740, 300 740", // ease across left
    "C 500 740, 950 790, 1050 920", // sweep to right
    "C 1150 1050, 950 1100, 750 1100",
    "C 550 1100, 100 1130, 50 1260",
    "C 0 1380, 200 1400, 400 1400",
  ].join(" ");

  return (
    <svg
      viewBox="0 0 1100 1400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
    >
      {/* Ghost trail */}
      <path d={d} stroke="#E2E8F0" strokeWidth="4" strokeLinecap="round" />
      {/* Animated orange stroke */}
      <motion.path
        d={d}
        stroke="#E56D00"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
        style={{ pathLength }}
      />
    </svg>
  );
};
