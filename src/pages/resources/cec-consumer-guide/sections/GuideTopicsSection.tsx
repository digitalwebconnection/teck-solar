import { useReveal } from "../../../../hooks/useReveal";

const guideTopics = [
  {
    chapter: "01",
    title: "Understanding Solar Energy",
    description: "Learn how solar panels convert sunlight into electricity and the key components of a solar power system.",
    tips: ["Solar cell fundamentals", "Inverter conversion (DC to AC)", "Grid connection basics"],
    color: "group-hover:text-amber-500",
  },
  {
    chapter: "02",
    title: "Choosing the Right System",
    description: "Factors to consider when selecting your solar system including size, panel type, inverter choice, and future expansion.",
    tips: ["Sizing your system correctly", "Single-phase vs Three-phase", "Battery readiness"],
    color: "group-hover:text-[#144E9A]",
  },
  {
    chapter: "03",
    title: "Quotes & Pricing",
    description: "How to compare solar quotes, what to look for, and red flags to avoid when choosing a solar installer.",
    tips: ["Comparing apples with apples", "Understanding product warranties", "Avoiding high-pressure sales"],
    color: "group-hover:text-emerald-500",
  },
  {
    chapter: "04",
    title: "Government Rebates",
    description: "An overview of available government incentives, Small-scale Technology Certificates (STCs), and state-level rebates.",
    tips: ["How STCs are calculated", "State-specific loan programs", "Feed-in Tariffs (FiT) explained"],
    color: "group-hover:text-amber-500",
  },
  {
    chapter: "05",
    title: "Installation Process",
    description: "What to expect during installation day, site preparation, and the typical timeline from quote to connection.",
    tips: ["Pre-installation site inspection", "What happens on the day", "Grid connection approval"],
    color: "group-hover:text-[#144E9A]",
  },
  {
    chapter: "06",
    title: "Consumer Rights",
    description: "Important consumer protections, warranty information, and your rights under Australian Consumer Law.",
    tips: ["Australian Consumer Law guarantees", "Performance warranties", "Who to contact if things go wrong"],
    color: "group-hover:text-emerald-500",
  },
];

export default function GuideTopicsSection() {
  const topicsReveal = useReveal();

  return (
    <div className="bg-white py-8 lg:py-12" ref={topicsReveal.ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-slate-900 tracking-tighter mb-6">
            Explore the Chapters.
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl">
            Dive into the complete guide, chapter by chapter, to become a solar expert before signing any contracts.
          </p>
        </div>

        {/* Minimalist Row-Based Table of Contents (No Cards!) */}
        <div className="border-t-2 border-slate-900">
          {guideTopics.map((topic, i) => (
            <div
              key={i}
              className={`group border-b border-slate-200 py-10 lg:py-14 flex flex-col md:flex-row gap-8 lg:gap-16 transition-all duration-700 ease-out hover:bg-slate-50 ${topicsReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Chapter Number */}
              <div className="w-full md:w-32 shrink-0">
                <span className={`text-5xl font-heading font-black text-slate-300 transition-colors duration-300 ${topic.color}`}>
                  {topic.chapter}
                </span>
              </div>

              {/* Chapter Content */}
              <div className="flex-1">
                <h3 className="text-3xl font-heading font-bold text-slate-900 mb-4 transition-colors duration-300">
                  {topic.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-3xl">
                  {topic.description}
                </p>

                {/* Inline Minimalist Tips */}
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  {topic.tips.map((tip, ti) => (
                    <div key={ti} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-slate-400 transition-colors duration-300"></div>
                      <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                        {tip}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow Indicator */}
              <div className="hidden lg:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">
                <svg className="w-8 h-8 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
