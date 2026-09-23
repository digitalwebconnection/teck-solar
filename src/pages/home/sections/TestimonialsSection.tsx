import { useState, useEffect, useCallback } from "react";
import { useReveal } from "../../../hooks/useReveal";

interface Testimonial {
  name: string;
  location: string;
  role: string;
  system: string;
  saving: string;
  rating: number;
  quote: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    location: "Sydney, NSW",
    role: "Residential Homeowner",
    system: "6.6kW Solar + 10kWh Battery",
    saving: "Saved $2,200/year",
    rating: 5,
    initials: "SM",
    quote:
      "Teck Solar transformed our electricity bills completely. From the initial consultation to final commissioning, the team was punctual and respectful of our home. Our quarterly power bill dropped by over 80%!",
  },
  {
    name: "James Chen",
    location: "Melbourne, VIC",
    role: "Commercial Facility Director",
    system: "100kW Commercial Array",
    saving: "ROI in Under 4 Years",
    rating: 5,
    initials: "JC",
    quote:
      "As a warehouse operator, spiralling grid electricity was hurting our margins. Teck Solar engineered a high-yield system that delivered on every performance projection. Exceptional service and zero downtime.",
  },
  {
    name: "David & Emma Thompson",
    location: "Brisbane, QLD",
    role: "Family Homeowners",
    system: "10.5kW Solar + Smart EV Charger",
    saving: "Virtually Off-Grid",
    rating: 5,
    initials: "DT",
    quote:
      "The quality of Tier-1 equipment and flawless installation on our tile roof was outstanding. We now power both our family home and electric vehicle almost entirely with clean Australian sunshine.",
  },
  {
    name: "Marcus Campbell",
    location: "Adelaide, SA",
    role: "Rural Property Owner",
    system: "13.2kW Solar + Dual Battery",
    saving: "Zero Grid Power Bills",
    rating: 5,
    initials: "MC",
    quote:
      "Living rurally, reliability is everything. Teck Solar set up an off-grid capable battery system that has kept our power running through multiple regional grid blackouts without missing a beat.",
  },
  {
    name: "Olivia Reynolds",
    location: "Perth, WA",
    role: "Hospitality Business Owner",
    system: "50kW Commercial Solar",
    saving: "Cut 70% Operating Costs",
    rating: 5,
    initials: "OR",
    quote:
      "From paperwork and Western Power grid approvals to rooftop panel placement, Teck Solar managed every single step seamlessly. Our daytime commercial electricity bills have literally plummeted.",
  },
  {
    name: "Liam & Chloe Watson",
    location: "Gold Coast, QLD",
    role: "Coastal Homeowners",
    system: "8.8kW All-Black System",
    saving: "Saved $1,950 in Year 1",
    rating: 5,
    initials: "LW",
    quote:
      "The aesthetic of the all-black panels blends seamlessly with our roof design. The mobile monitoring app is brilliant — we can track solar generation and household consumption in real-time every day!",
  },
];

export default function TestimonialsSection() {
  const { ref, visible } = useReveal(0.15);
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Responsive items-per-page calculation
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-sliding interval (5 seconds) with pause on hover
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const totalDots = maxIndex + 1;

  return (
    <section
      className="py-16 sm:py-20 lg:py-14 px-4 sm:px-6 lg:px-8 bg-slate-50/60 border-y border-slate-100/70 relative overflow-hidden"
      ref={ref}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue-50/80 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#E56D00]/5 rounded-full blur-3xl pointer-events-none translate-y-1/2" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header with Navigation Controls */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
              Real Stories, Real{" "}
              <span className="bg-gradient-to-r from-[#144E9A] to-[#E56D00] bg-clip-text text-transparent">
                Solar Savings
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-500 leading-relaxed font-light">
              Discover why over 2,500 Australian families and business owners
              recommend Teck Solar.
            </p>
          </div>

          {/* Prev / Next Slider Arrows */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-[#E56D00] text-slate-700 hover:text-[#E56D00] flex items-center justify-center shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-[#E56D00] text-slate-700 hover:text-[#E56D00] flex items-center justify-center shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Auto-Sliding Carousel Track */}
        <div
          className="overflow-hidden py-4 -my-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-out py-4"
            style={{
              transform: `translateX(-${current * (100 / itemsPerPage)}%)`,
            }}
          >
            {testimonials.map((t, i) => {
              const isEven = i % 2 === 0;
              const avatarBg = isEven ? "bg-[#144E9A] shadow-[#144E9A]/20" : "bg-[#E56D00] shadow-[#E56D00]/20";
              const iconColor = isEven ? "text-[#144E9A]" : "text-[#E56D00]";

              return (
                <div
                  key={i}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3 sm:px-4"
                >
                  <div className="bg-white h-full rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-10px_rgba(20,78,154,0.12)] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between group relative overflow-hidden">
                    
                    {/* Watermark Quote Icon */}
                    <div className="absolute -top-6 -right-4 text-slate-50 text-[10rem] font-serif leading-none group-hover:text-brand-blue-50/50 transition-colors duration-500 select-none pointer-events-none rotate-12 z-0">
                      "
                    </div>

                    <div className="relative z-10 flex-1 flex flex-col">
                      {/* Customer Info Row (Top) */}
                      <div className="flex items-center gap-3 mb-5">
                        <div className={`w-12 h-12 rounded-full text-white font-heading font-bold text-lg flex items-center justify-center flex-shrink-0 shadow-md ${avatarBg}`}>
                          {t.initials}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-heading font-extrabold text-slate-900 text-base sm:text-lg truncate">
                            {t.name}
                          </h4>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <div className="flex text-amber-400 flex-shrink-0">
                              {[...Array(t.rating)].map((_, idx) => (
                                <svg key={idx} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <span className="text-[10px] text-slate-300">·</span>
                            <span className="text-[11px] sm:text-xs text-slate-500 font-medium truncate">
                              {t.role}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Main Quote */}
                      <p className="text-slate-700 text-base leading-relaxed italic font-light mb-6 flex-1">
                        "{t.quote}"
                      </p>

                      {/* Technical Details (Bottom) */}
                      <div className="flex flex-col gap-2 pt-5 border-t border-slate-100">
                        <div className="bg-slate-50 text-slate-700 px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 border border-slate-100">
                          <svg className={`w-4 h-4 flex-shrink-0 ${iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          <span className="truncate">{t.system}</span>
                        </div>
                        <div className="bg-emerald-50 text-emerald-700 px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-center border border-emerald-100/50 uppercase tracking-wide">
                          {t.saving}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {[...Array(totalDots)].map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrent(idx)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                current === idx
                  ? "w-8 h-2.5 bg-gradient-to-r from-[#144E9A] to-brand-blue-400"
                  : "w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
