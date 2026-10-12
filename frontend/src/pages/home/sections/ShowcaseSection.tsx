import { useState, useEffect } from "react";
import ScrollExpand from "./ScrollExpand";

export default function ShowcaseSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="w-full relative">
      <ScrollExpand
        src="/images/products/commercial.webp"
        alt="Teck Solar Installation"
        title="Teck Solar"
        scrollHint="Scroll to expand"
        useWindowScroll={true}
        mediaZoom={1.35}
        overlayScrim={0.8}
        startRadius={0}
        startWidth={isMobile ? 85 : 42}
        startHeight={isMobile ? 40 : 58}
      >
        <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center px-6 bg-black/50 backdrop-blur-sm">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white mb-6 drop-shadow-2xl tracking-tight">
            Teck Solar
          </h2>
          <p className="text-xl md:text-2xl text-slate-50 font-medium drop-shadow-xl leading-relaxed max-w-5xl">
            Harness the limitless power of the sun. We engineer and install world-class, high-efficiency solar energy systems designed to eliminate your electricity bills and secure a sustainable future.
          </p>
        </div>
      </ScrollExpand>
    </section>
  );
}
