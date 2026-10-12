import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ServiceHeroBannerProps {
  title: string;
  bannerImage: string;
}

export default function ServiceHeroBanner({
  title,
  bannerImage,
}: ServiceHeroBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through the full-height hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Direct GPU-accelerated scroll transforms without heavy spring physics solver
  const marqueeY = useTransform(scrollYProgress, [0, 1], ['0vh', '-24vh']);
  const marqueeOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.9, 0.05]);
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.08]);

  // Items to repeat in the infinite marquee track
  const loopUnits = [
    { filled: true },
    { filled: false },
    { filled: true },
    { filled: false },
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[52vh] min-h-[520px] max-h-[840px] overflow-hidden flex flex-col justify-center bg-slate-950 select-none"
    >
      {/* 1. Full-Height Background Image with Parallax & Cinematic Overlays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.img
          src={bannerImage}
          alt={title}
          style={{ y: imageY, scale: imageScale }}
          className="w-full h-full object-cover object-center transform-gpu will-change-transform"
        />
        {/* Darkening Scrims & Color Grading */}
        <div className="absolute inset-0 bg-slate-950/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/80" />
      </div>

      {/* Smooth Side Vignette Edge Fades */}
      <div className="absolute inset-y-0 left-0 w-20 sm:w-36 lg:w-48 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent pointer-events-none z-20" />
      <div className="absolute inset-y-0 right-0 w-20 sm:w-36 lg:w-48 bg-gradient-to-l from-slate-950/90 via-slate-950/40 to-transparent pointer-events-none z-20" />

      {/* 2. Center Infinite Marquee Line with Smooth Scroll-Up Parallax Effect */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{ y: marqueeY, opacity: marqueeOpacity }}
        className="relative z-20 w-full overflow-hidden my-auto py-3 sm:py-5 pointer-events-none transform-gpu will-change-transform [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]"
      >
        {/* Infinite Continuous Marquee Track */}
        <div className="animate-marquee-infinite flex items-center">
          {/* Loop Set 1 */}
          <div className="flex items-center shrink-0">
            {loopUnits.map((item, idx) => (
              <div key={`set1-${idx}`} className="flex items-center shrink-0">
                <span className="font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] tracking-tight uppercase leading-none select-none drop-shadow-md px-3 sm:px-4">
                  {item.filled ? (
                    <span className="text-white">{title}</span>
                  ) : (
                    <span className="text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.7)]">
                      {title}
                    </span>
                  )}
                </span>
                <span className="text-amber-500 text-2xl sm:text-4xl lg:text-5xl font-light mx-4 sm:mx-8 inline-block drop-shadow-[0_0_12px_rgba(245,158,11,0.5)] select-none">
                  ✦
                </span>
              </div>
            ))}
          </div>

          {/* Loop Set 2 (Exact duplicate for seamless infinite looping) */}
          <div className="flex items-center shrink-0">
            {loopUnits.map((item, idx) => (
              <div key={`set2-${idx}`} className="flex items-center shrink-0">
                <span className="font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] tracking-tight uppercase leading-none select-none drop-shadow-md px-3 sm:px-4">
                  {item.filled ? (
                    <span className="text-white">{title}</span>
                  ) : (
                    <span className="text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.7)]">
                      {title}
                    </span>
                  )}
                </span>
                <span className="text-amber-500 text-2xl sm:text-4xl lg:text-5xl font-light mx-4 sm:mx-8 inline-block drop-shadow-[0_0_12px_rgba(245,158,11,0.5)] select-none">
                  ✦
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* 3. Soft Bottom Gradient Transition into Content Below */}
      <div className="absolute inset-x-0 bottom-0 h-20 sm:h-28 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none z-10" />
    </section>
  );
}
