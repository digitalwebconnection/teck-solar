import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactLenis, useLenis } from 'lenis/react';
import { cn } from '@/lib/utils';

interface AccreditationItem {
  id: string;
  step: string;
  category: string;
  title: string;
  role: string;
  summary: string;
  statusType: 'emerald' | 'amber' | 'blue' | 'purple' | 'cyan' | 'gold';
  highlights: string[];
  gradient: string;
  borderStyle: string;
  glowColor: string;
  roleColor: string;
  iconBg: string;
}

const accreditations: AccreditationItem[] = [
  {
    id: 'cec-retailer',
    step: '01',
    category: 'Clean Energy Council',
    title: 'Clean Energy Council (SAA)',
    role: 'Approved Solar Retailer',
    summary:
      'Guarantees consumer protection, honest quotes, and a 5-year whole-of-system on-site warranty.',
    statusType: 'emerald',
    highlights: [
      '5-Year Whole-of-System On-Site Warranty',
      'Strict Consumer Code of Conduct',
      'Transparent Upfront Fixed Quotes',
    ],
    gradient: 'from-[#081C37] via-[#0A264D] to-[#0D3468]',
    borderStyle:
      'border-emerald-400/40 shadow-[0_25px_60px_-15px_rgba(8,28,55,0.4),0_0_25px_rgba(16,185,129,0.12)]',
    glowColor: 'bg-emerald-500/25',
    roleColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400',
  },
  {
    id: 'saa-installer',
    step: '02',
    category: 'Clean Energy Council',
    title: 'SAA Accredited Installers',
    role: 'Grid-Connect & Battery Storage Certified',
    summary:
      'In-house certified electricians and engineers for rooftop PV and high-voltage battery systems.',
    statusType: 'amber',
    highlights: [
      'Rooftop PV System Endorsement',
      'High-Voltage Battery Storage (BESS)',
      'In-House Certified Engineers',
    ],
    gradient: 'from-[#081C37] via-[#0D2A54] to-[#12386E]',
    borderStyle:
      'border-amber-400/45 shadow-[0_25px_60px_-15px_rgba(8,28,55,0.4),0_0_25px_rgba(245,158,11,0.15)]',
    glowColor: 'bg-amber-500/25',
    roleColor: 'text-amber-400',
    iconBg: 'bg-amber-500/15 border-amber-500/30 text-amber-400',
  },
  {
    id: 'master-elec',
    step: '03',
    category: 'Safety & Quality',
    title: 'Master Electricians Australia',
    role: 'SafetyConnect Accredited Member',
    summary:
      'Annual third-party safety audits and full compliance with AS/NZS 3000 Australian wiring rules.',
    statusType: 'blue',
    highlights: [
      'Full AS/NZS 3000 Wiring Rules',
      'Annual 3rd-Party Safety Audits',
      'SafetyConnect 5-Star Management',
    ],
    gradient: 'from-[#081C37] via-[#0C2952] to-[#103D78]',
    borderStyle:
      'border-blue-400/40 shadow-[0_25px_60px_-15px_rgba(8,28,55,0.4),0_0_25px_rgba(59,130,246,0.15)]',
    glowColor: 'bg-blue-500/25',
    roleColor: 'text-blue-300',
    iconBg: 'bg-blue-500/15 border-blue-500/30 text-blue-400',
  },
  {
    id: 'iso-9001',
    step: '04',
    category: 'Safety & Quality',
    title: 'ISO 9001:2015 Standards',
    role: 'Quality Management Certified',
    summary:
      'Certified quality assurance for tier-1 solar panel vetting, inverter testing, and commissioning.',
    statusType: 'purple',
    highlights: [
      'Tier-1 Solar Hardware Vetting',
      'Pre-Commissioning Testing Protocols',
      'End-to-End System Traceability',
    ],
    gradient: 'from-[#081C37] via-[#0E2850] to-[#16356B]',
    borderStyle:
      'border-purple-400/40 shadow-[0_25px_60px_-15px_rgba(8,28,55,0.4),0_0_25px_rgba(168,85,247,0.15)]',
    glowColor: 'bg-purple-500/25',
    roleColor: 'text-purple-300',
    iconBg: 'bg-purple-500/15 border-purple-500/30 text-purple-400',
  },
  {
    id: 'fair-trading',
    step: '05',
    category: 'Licensing & Insurance',
    title: 'Fair Trading Licensed',
    role: 'Electrical Contractor (NSW, VIC & QLD)',
    summary:
      'Government-vetted for residential and commercial solar installations across three states.',
    statusType: 'cyan',
    highlights: [
      'NSW Fair Trading Electrical Lic.',
      'Energy Safe Victoria (ESV) Approved',
      'QLD Electrical Safety Office Registered',
    ],
    gradient: 'from-[#081C37] via-[#0A2A54] to-[#0E3A70]',
    borderStyle:
      'border-cyan-400/40 shadow-[0_25px_60px_-15px_rgba(8,28,55,0.4),0_0_25px_rgba(6,182,212,0.15)]',
    glowColor: 'bg-cyan-500/25',
    roleColor: 'text-cyan-300',
    iconBg: 'bg-cyan-500/15 border-cyan-500/30 text-cyan-400',
  },
  {
    id: 'public-liability',
    step: '06',
    category: 'Licensing & Insurance',
    title: '$20M Public Liability Insured',
    role: 'Comprehensive Workmanship Cover',
    summary:
      'Underwritten by QBE Insurance Australia, protecting customer property against any eventuality.',
    statusType: 'gold',
    highlights: [
      '$20 Million Comprehensive Cover',
      'Underwritten by QBE Australia',
      'Total Customer Property Protection',
    ],
    gradient: 'from-[#081C37] via-[#1A2E50] to-[#204068]',
    borderStyle:
      'border-amber-300/50 shadow-[0_25px_60px_-15px_rgba(8,28,55,0.4),0_0_25px_rgba(252,211,77,0.18)]',
    glowColor: 'bg-amber-400/30',
    roleColor: 'text-amber-300',
    iconBg: 'bg-amber-400/15 border-amber-400/30 text-amber-300',
  },
];

function AccreditationSymbol({ id, className = 'w-7 h-7' }: { id: string; className?: string }) {
  switch (id) {
    case 'cec-retailer':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      );
    case 'saa-installer':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      );
    case 'master-elec':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      );
    case 'iso-9001':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      );
    case 'fair-trading':
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      );
    case 'public-liability':
    default:
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      );
  }
}


interface StickyAccreditationsDeckProps {
  cards: AccreditationItem[];
}

const StickyAccreditationsDeck = ({ cards }: StickyAccreditationsDeckProps) => {
  const container = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Sync GSAP ScrollTrigger with Lenis
  useLenis(() => {
    ScrollTrigger.update();
  });

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const cardElements = cardRefs.current;
      const totalCards = cardElements.length;

      if (!cardElements[0]) return;

      gsap.set(cardElements[0], { y: '0%', scale: 1, rotation: 0, opacity: 1 });

      for (let i = 1; i < totalCards; i++) {
        if (!cardElements[i]) continue;
        gsap.set(cardElements[i], { y: '100%', scale: 1, rotation: 0, opacity: 1 });
      }

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.sticky-cards',
          start: 'top top',
          end: `+=${window.innerHeight * totalCards}`,
          pin: true,
          scrub: 0.5,
          pinSpacing: true,
        },
      });

      for (let i = 0; i < totalCards - 1; i++) {
        const currentCard = cardElements[i];
        const nextCard = cardElements[i + 1];
        const position = i;
        if (!currentCard || !nextCard) continue;

        // Animate previous card: scale down and rotate slightly for physical deck appearance (100% solid, NO opacity reduction)
        scrollTimeline.to(
          currentCard,
          {
            scale: 0.9,
            rotation: i % 2 === 0 ? 2 : -2,
            duration: 1,
            ease: 'none',
          },
          position
        );

        // Slide the next card up from the bottom cleanly (100% opaque, NO blur)
        scrollTimeline.to(
          nextCard,
          {
            y: '0%',
            duration: 1,
            ease: 'none',
          },
          position
        );
      }

      const resizeObserver = new ResizeObserver(() => {
        ScrollTrigger.refresh();
      });

      if (container.current) {
        resizeObserver.observe(container.current);
      }

      return () => {
        resizeObserver.disconnect();
        scrollTimeline.kill();
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    },
    { scope: container }
  );

  return (
    <section id="accreditations" className="relative w-full bg-white border-b border-slate-100" ref={container}>
      <div className="sticky-cards relative flex flex-col justify-between items-center h-screen min-h-[680px] lg:min-h-[760px] max-h-[1050px] w-full overflow-hidden px-4 sm:px-6 lg:px-8 py-18 bg-white">
        
        {/* Subtle Ambient Background Decorative Accents */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-blue-50/70 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-12 right-12 w-[420px] h-[300px] bg-primary-50/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-slate-50 rounded-full blur-2xl pointer-events-none" />

        {/* ================= MAIN SECTION HEADER ================= */}
        <div className="relative z-10 w-full max-w-4xl mx-auto text-center shrink-0">
          {/* Heading with Gradient Color */}
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-heading font-extrabold tracking-tight leading-tight text-slate-900 pb-0.5">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#081C37] via-[#144E9A] to-[#E56D00]">
              Accreditations & Certifications
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Governed by peak Australian electrical bodies and the Clean Energy Council, guaranteeing safe, high-yield installations across Australia.
          </p>
        </div>

        {/* ================= THE STACKED CARDS DECK ================= */}
        <div className="relative z-10 w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl flex items-center justify-center shrink-0">
          {/* Card Container Frame with Balanced Height & Premium Floating Shadow */}
          <div className="relative w-full h-[350px] sm:h-[370px] md:h-[380px]">
            {cards.map((card, i) => (
              <div
                key={card.id}
                ref={el => {
                  cardRefs.current[i] = el;
                }}
                style={{
                  zIndex: i + 1,
                  backgroundColor: '#081C37',
                }}
                className={cn(
                  'absolute inset-0 w-full h-full rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 flex flex-col justify-between overflow-hidden border bg-[#081C37] bg-gradient-to-br transition-shadow',
                  card.gradient,
                  card.borderStyle
                )}
              >
                {/* Subtle Background Pattern Watermark */}
                <div className="absolute right-4 bottom-4 opacity-5 pointer-events-none text-white select-none">
                  <AccreditationSymbol id={card.id} className="w-48 h-48 sm:w-56 sm:h-56" />
                </div>

                {/* Card Top Row: Step, Category, and Live Status Badge */}
                <div className="relative z-10 flex items-center justify-between gap-3 shrink-0">
                  <div className="flex items-center gap-2.5">
                    <span className="px-2.5 py-0.5 rounded-md bg-white/15 border border-white/20 text-white text-xs font-mono font-bold tracking-wider shadow-inner">
                      {card.step}
                    </span>
                    <span className="text-[11px] sm:text-xs font-heading font-bold uppercase tracking-wider text-slate-300">
                      {card.category}
                    </span>
                  </div>
                </div>

                {/* Card Middle Section: Icon Emblem, Title, Role, Description */}
                <div className="relative z-10 flex items-start gap-4 sm:gap-5 my-auto">
                  {/* High-tech Emblem Container */}
                  <div
                    className={cn(
                      'w-13 h-13 sm:w-15 sm:h-15 rounded-xl sm:rounded-2xl border flex items-center justify-center shrink-0 shadow-inner',
                      card.iconBg
                    )}
                  >
                    <AccreditationSymbol id={card.id} className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>

                  {/* Text Details */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white tracking-tight leading-snug">
                      {card.title}
                    </h3>
                    <div
                      className={cn(
                        'text-xs sm:text-sm font-heading font-semibold mt-0.5 sm:mt-1',
                        card.roleColor
                      )}
                    >
                      {card.role}
                    </div>
                    <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-200/90 leading-relaxed max-w-xl">
                      {card.summary}
                    </p>
                  </div>
                </div>

                {/* Card Bottom Row: 3 Highlight Assurance Badges */}
                <div className="relative z-10 pt-3 border-t border-white/15 flex flex-wrap items-center gap-2 sm:gap-2.5 shrink-0">
                  {card.highlights.map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 border border-white/15 text-white/90 text-[10px] sm:text-xs font-medium"
                    >
                      <svg
                        className="w-3.5 h-3.5 text-primary-400 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function AccreditationsSection() {
  return (
    <ReactLenis root>
      <div className="w-full">
        <StickyAccreditationsDeck cards={accreditations} />
      </div>
    </ReactLenis>
  );
}

export { StickyAccreditationsDeck };
