import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

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
    badge: 'Clean Solar Energy',
    title: 'Power Your Home\nWith Solar Energy',
    subtitle: 'Save up to 80% on power bills with premium residential solar systems.',
    primaryCta: 'Get a Free Quote',
    primaryLink: '/contact',
    secondaryCta: 'About Us',
    secondaryLink: '/about',
    image: '/images/hero-residential.jpg',
  },
  {
    badge: 'Commercial Solutions',
    title: 'Commercial Solar\nFor Your Business',
    subtitle: 'Cut operational electricity costs with high-efficiency commercial solar.',
    primaryCta: 'Get a Free Quote',
    primaryLink: '/contact',
    secondaryCta: 'Our Services',
    secondaryLink: '/services',
    image: '/images/hero-commercial.jpg',
  },
  {
    badge: 'CEC Accredited',
    title: 'Expert Installation\nYou Can Trust',
    subtitle: 'Certified Australian installers delivering top-tier quality and support.',
    primaryCta: 'Request Call Back',
    primaryLink: '/contact',
    secondaryCta: 'Learn More',
    secondaryLink: '/about',
    image: '/images/hero-installation.jpg',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

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
            i === current ? 'opacity-100 z-0' : 'opacity-0 pointer-events-none'
          }`}
        >
          <img
            src={slide.image}
            alt=""
            className={`w-full h-full object-cover transition-transform duration-7000 ease-out ${
              i === current ? 'scale-105' : 'scale-100'
            }`}
          />
          {/* High-contrast smooth gradients for optimal readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/65 to-navy-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
        </div>
      ))}

      {/* Main Content (Simple, Short, and Focused) */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-left">
            {/* Short Tag Badge */}
            <div
              key={`badge-${current}`}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/20 border border-primary-400/40 text-primary-300 text-xs sm:text-sm font-medium tracking-wide mb-4 animate-fade-in"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
              <span>{activeSlide.badge}</span>
            </div>

            {/* Heading */}
            <h1
              key={`heading-${current}`}
              className="text-3xl sm:text-5xl lg:text-5xl  font-serif font-extrabold text-white leading-tight sm:leading-tight whitespace-pre-line animate-slide-up"
            >
              {activeSlide.title}
            </h1>

            {/* Short Subheading */}
            <p
              key={`sub-${current}`}
              className="mt-4 text-base sm:text-lg text-slate-200 max-w-lg leading-relaxed animate-slide-up"
              style={{ animationDelay: '100ms' }}
            >
              {activeSlide.subtitle}
            </p>

            {/* CTAs */}
            <div
              key={`cta-${current}`}
              className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4 animate-slide-up"
              style={{ animationDelay: '200ms' }}
            >
              <Link
                to={activeSlide.primaryLink}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg font-heading font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-md shadow-primary-500/30 hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm sm:text-base cursor-pointer"
              >
                <span>{activeSlide.primaryCta}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <Link
                to={activeSlide.secondaryLink}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg font-heading font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-xs hover:-translate-y-0.5 transition-all text-sm sm:text-base cursor-pointer"
              >
                <span>{activeSlide.secondaryCta}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Prev / Next Minimal Arrows (Desktop) */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full items-center justify-center bg-white/10 hover:bg-white/25 text-white backdrop-blur-xs border border-white/20 transition-all cursor-pointer"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="hidden md:flex absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full items-center justify-center bg-white/10 hover:bg-white/25 text-white backdrop-blur-xs border border-white/20 transition-all cursor-pointer"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators (Clean Dots / Bars at Bottom) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              i === current
                ? 'w-8 h-2.5 bg-primary-500'
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

