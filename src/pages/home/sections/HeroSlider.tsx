import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuoteModal } from "../../../context/QuoteModalContext";

interface Slide {
  badge: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  primaryLink: string;
  secondaryCta: string;
  secondaryLink: string;
  image: string;
}

const slides: Slide[] = [
  {
    badge: "Clean Solar Energy",
    title: "Power Your Home\nWith Solar Energy",
    subtitle:
      "Save up to 80% on power bills with premium residential solar systems. Join thousands of Australian homeowners securing their energy independence, reducing their carbon footprint, and adding lasting value to their property.",
    primaryCta: "Get a Free Quote",
    primaryLink: "/contact",
    secondaryCta: "About Us",
    secondaryLink: "/about",
    image: "/images/hero-residential.jpg",
  },
  {
    badge: "Commercial Solutions",
    title: "Commercial Solar\nFor Your Business",
    subtitle:
      "Cut operational electricity costs with high-efficiency commercial solar. We design scalable, reliable solar solutions that protect your business against rising energy prices and demonstrate your commitment to sustainability.",
    primaryCta: "Get a Free Quote",
    primaryLink: "/contact",
    secondaryCta: "Our Services",
    secondaryLink: "/services",
    image: "/images/hero-commercial.jpg",
  },
  {
    badge: "CEC Accredited",
    title: "Expert Installation\nYou Can Trust",
    subtitle:
      "Certified Australian installers delivering top-tier quality and support. From initial design to final connection, our CEC-accredited team ensures a flawless, hassle-free installation backed by our industry-leading workmanship guarantee.",
    primaryCta: "Request Call Back",
    primaryLink: "/contact",
    secondaryCta: "Learn More",
    secondaryLink: "/about",
    image: "/images/hero-installation.jpg",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const { openModal } = useQuoteModal();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const activeSlide = slides[current];

  return (
    <section
      id="hero-slider"
      aria-label="Hero Highlights"
      className="relative w-full h-[540px] sm:h-[600px] lg:h-auto min-h-[600px] max-h-[740px] overflow-hidden bg-navy-950 flex items-center"
    >
      {/* Background Images */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100 z-0" : "opacity-0 pointer-events-none"
          }`}
        >
          <img
            src={slide.image}
            alt=""
            className={`w-full h-full object-cover transition-transform duration-7000 ease-out ${
              i === current ? "scale-105" : "scale-100"
            }`}
          />
          {/* High-contrast smooth gradients for optimal readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/50 via-navy-950/70 to-navy-950/50" />       
        </div>
      ))}

      {/* Main Content (Simple, Short, and Focused) */}
      <div className="relative z-10 w-full text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl flex flex-col items-start">
            {/* Heading */}
            <h1
              key={`heading-${current}`}
              className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white leading-tight sm:leading-tight whitespace-pre-line animate-slide-up"
            >
              {activeSlide.title}
            </h1>

            {/* Short Subheading */}
            <p
              key={`sub-${current}`}
              className="mt-4 text-base sm:text-lg text-white/70 max-w-3xl leading-relaxed animate-slide-up"
              style={{ animationDelay: "100ms" }}
            >
              {activeSlide.subtitle}
            </p>

            {/* CTAs */}
            <div
              key={`cta-${current}`}
              className="mt-8 flex flex-wrap items-center justify-start gap-3 sm:gap-4 animate-slide-up"
              style={{ animationDelay: "200ms" }}
            >
              {activeSlide.primaryLink === "/contact" ? (
                <button
                  type="button"
                  onClick={openModal}
                  className="group relative inline-flex items-center h-[52px] sm:h-[56px] pl-[68px] sm:pl-[72px] pr-7 sm:pr-8 rounded-full font-heading font-bold text-base sm:text-lg text-white transition-all duration-500 w-full sm:w-auto cursor-pointer"
                >
                  <div className="absolute left-0 top-0 h-full w-full rounded-full bg-[#E56D00] transition-all duration-500 ease-[cubic-bezier(0.5,0,0,1)] group-hover:bg-[#14488C] z-0 shadow-md group-hover:shadow-[0_10px_20px_-10px_rgba(20,72,140,0.5)]"></div>
                  
                  <div className="absolute left-0 top-0 h-full w-[52px] sm:w-[56px] flex items-center justify-center z-10 text-white">
                    <svg className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                  </div>
                  
                  <span className="relative z-10">{activeSlide.primaryCta}</span>
                </button>
              ) : (
                <Link
                  to={activeSlide.primaryLink}
                  className="group relative inline-flex items-center h-[52px] sm:h-[56px] pl-[68px] sm:pl-[72px] pr-7 sm:pr-8 rounded-full font-heading font-bold text-base sm:text-lg text-white transition-all duration-500 w-full sm:w-auto cursor-pointer"
                >
                  <div className="absolute left-0 top-0 h-full w-full rounded-full bg-[#E56D00] transition-all duration-500 ease-[cubic-bezier(0.5,0,0,1)] group-hover:bg-[#14488C] z-0 shadow-md group-hover:shadow-[0_10px_20px_-10px_rgba(20,72,140,0.5)]"></div>
                  
                  <div className="absolute left-0 top-0 h-full w-[52px] sm:w-[56px] flex items-center justify-center z-10 text-white">
                    <svg className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                  </div>
                  
                  <span className="relative z-10">{activeSlide.primaryCta}</span>
                </Link>
              )}

              <Link
                to={activeSlide.secondaryLink}
                className="inline-flex items-center justify-center h-[52px] sm:h-[56px] px-8 rounded-full font-heading font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-xs hover:-translate-y-0.5 transition-all text-base sm:text-lg cursor-pointer"
              >
                <span>{activeSlide.secondaryCta}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators (Clean Dots / Bars at Bottom) */}
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
