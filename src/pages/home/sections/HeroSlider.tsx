import { useState, useEffect } from "react";

const slides = [
  {
    desktop: "/images/hero/hero-desktop1.webp",
    mobile: "/images/hero/hero-mobile1.webp",
  },
  {
    desktop: "/images/hero/hero-desktop2.webp",
    mobile: "/images/hero/hero-mobile2.webp",
  },
  {
    desktop: "/images/hero/hero-desktop3.webp",
    mobile: "/images/hero/hero-mobile3.webp",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero-slider"
      className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[85vh] overflow-hidden"
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <picture>
            <source media="(min-width: 768px)" srcSet={slide.desktop} />
            <img
              src={slide.mobile}
              alt=""
              className="w-full h-full object-fill"
            />
          </picture>
        </div>
      ))}
      
      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              i === current
                ? "w-8 h-2.5 bg-primary-500"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

