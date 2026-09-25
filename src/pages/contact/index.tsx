import ContactFormSection from "./sections/ContactFormSection";
import OfficeLocationsSection from "./sections/OfficeLocationsSection";

export default function Contact() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen selection:bg-amber-500 selection:text-white font-sans">
      {/* Dynamic Contact Hero */}
      <div className="py-12 lg:py-20 border-b border-slate-200/50 bg-white relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
            {/* Left Content (Typography) */}
            <div className="w-full lg:w-5/12 relative z-10">
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-black text-slate-900 tracking-tighter leading-[1.05] mb-8">
                Let's <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 text-white px-6 py-2 bg-[#144E9A] rounded-2xl rotate-[-2deg] inline-block shadow-xl shadow-[#144E9A]/20">
                    Talk Solar.
                  </span>
                  <svg
                    className="absolute w-full h-4 -bottom-3 left-0 text-amber-500"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q 50 10 100 5"
                      fill="transparent"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
                Whether you need a custom residential quote, commercial tender
                pricing, or just technical support—our local experts are ready
                to help.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">
                      +61 1300 134 077
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      Fastest response
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Abstract Visual (CSS Art Communication) */}
            <div className="w-full lg:w-6/12 h-[400px] lg:h-[500px] relative perspective-[1000px] flex items-center justify-center mt-12 lg:mt-0">
              {/* Massive concentric circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-slate-200 rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-slate-100 rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite] animation-delay-1000" />

              {/* Floating ID Badge / Live Chat CSS Art */}
              <div className="relative w-[340px] bg-white border border-slate-100 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transform rotate-[6deg] hover:rotate-[2deg] hover:-translate-y-4 transition-all duration-700 p-8 flex flex-col z-20 group">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-md bg-gradient-to-br from-[#144E9A] to-blue-600 flex items-center justify-center shadow-lg relative overflow-hidden">
                    <img
                      src="/images/hero-residential.jpg"
                      alt="Team Member"
                      className="w-full h-full object-cover"
                    />
                    <svg
                      className="w-8 h-8 relative z-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-black text-slate-900">
                      Support Team
                    </h3>
                    <div className="flex items-center gap-1.5 mt-1">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Online Now
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 relative">
                  <div className="absolute -left-12 top-2 w-10 h-10 bg-amber-500 rounded-full rounded-tr-none flex items-center justify-center shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                    <svg
                      className="w-5 h-5 text-white"
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
                  </div>

                  <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl rounded-tl-sm">
                    <p className="text-sm text-slate-600 font-medium">
                      Hello! How can we help you power your home today?
                    </p>
                  </div>

                  <div className="bg-[#144E9A] p-4 rounded-2xl rounded-tr-sm ml-8 shadow-md">
                    <p className="text-sm text-white font-medium">
                      I'm looking for a quote on a 10kW system with battery.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl rounded-tl-sm w-16 flex items-center justify-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce"></div>
                    <div
                      className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Floating Element: Quick Reply Badge */}
              <div className="absolute bottom-16 right-0 lg:-right-8 bg-slate-900 p-5 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] z-30 transform -rotate-[4deg] hover:rotate-[0deg] transition-transform duration-500 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-bold text-sm">
                    Under 15 Mins
                  </div>
                  <div className="text-slate-400 text-xs mt-0.5">
                    Average Response Time
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactFormSection />
      <OfficeLocationsSection />
    </div>
  );
}
