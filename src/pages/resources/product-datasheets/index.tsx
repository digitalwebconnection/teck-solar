import DatasheetsGridSection from './sections/DatasheetsGridSection';
import SharedCTA from '../../../components/SharedCTA';

export default function ProductDatasheets() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen selection:bg-[#E56D00] selection:text-white overflow-hidden">
      
      {/* Dynamic Floating Documents Hero */}
      <div className="py-8 lg:py-12 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 w-full">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-8">
            
            {/* Left Content (Typography) */}
            <div className="w-full lg:w-5/12 relative z-10">
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-black text-slate-900 tracking-tighter leading-[1.05] mb-8">
                Technical <br/>
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 text-white px-5 py-2 bg-[#144E9A] rounded-2xl rotate-[-2deg] inline-block shadow-xl shadow-[#144E9A]/20">Library.</span>
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
                Access official datasheets, installation manuals, and warranty documentation for our entire range of premium solar infrastructure.
              </p>

              <div className="flex items-center gap-6 pt-6 border-t border-slate-200">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-[#E56D00]/10 flex items-center justify-center text-[#E56D00] font-bold text-xs shadow-sm">PDF</div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-[#144E9A]/10 flex items-center justify-center text-[#144E9A] font-bold text-xs shadow-sm">DOC</div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-900 flex items-center justify-center text-white font-bold text-xs shadow-sm">ZIP</div>
                </div>
                <div className="text-sm font-medium text-slate-500">
                  <span className="font-bold text-slate-900">10+</span> documents updated <span className="text-[#144E9A] font-bold">today</span>
                </div>
              </div>
            </div>

            {/* Right Abstract Visual (CSS Art Cards with Images) */}
            <div className="w-full lg:w-6/12 h-[300px] sm:h-[350px] lg:h-[500px] relative flex items-center justify-center mt-4 sm:mt-8 lg:mt-0 perspective-[1000px]">
              
              {/* Background Glow (Blue + Orange/Amber) */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#E56D00]/20 via-transparent to-[#144E9A]/20 rounded-full blur-3xl" />

              {/* Back Card (Image Panel) */}
              <div className="absolute top-4 right-4 w-72 h-80 bg-white border border-slate-200 rounded-3xl shadow-xl transform rotate-[10deg] translate-x-12 translate-y-4 p-4 hidden lg:block opacity-60">
                 <div className="w-full h-full rounded-2xl overflow-hidden relative">
                   <img src="/images/service-commercial.jpg" alt="Commercial Solar" className="w-full h-full object-cover grayscale opacity-50" />
                   <div className="absolute inset-0 border-2 border-dashed border-slate-300 rounded-2xl mix-blend-overlay"></div>
                 </div>
              </div>

              {/* Middle Card (Main PDF with Image Cover) */}
              <div className="relative w-[85%] max-w-[280px] sm:max-w-sm sm:w-80 bg-white border border-slate-100 rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] transform rotate-[-4deg] p-5 sm:p-6 flex flex-col z-10 transition-transform duration-700 hover:rotate-0 hover:-translate-y-4">
                
                {/* Image Cover */}
                <div className="w-full h-32 sm:h-40 rounded-2xl overflow-hidden mb-4 sm:mb-6 relative">
                  <img src="/images/service-battery.jpg" alt="Solar Battery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-slate-900/10"></div>
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#144E9A] shadow-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] sm:text-xs font-bold text-[#E56D00] uppercase tracking-widest">Datasheet</span>
                  <span className="text-[9px] sm:text-[10px] font-bold text-[#144E9A] bg-[#144E9A]/10 px-2 py-1 rounded-full uppercase tracking-wider">v2.4</span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-heading font-black text-slate-900 mb-4 sm:mb-6 leading-tight">Jinko Tiger Neo 440W</h3>
                
                <div className="space-y-2.5 sm:space-y-3 mt-auto">
                  <div className="h-1.5 w-full bg-slate-100 rounded-full"></div>
                  <div className="h-1.5 w-5/6 bg-slate-100 rounded-full"></div>
                  <div className="h-1.5 w-4/6 bg-slate-100 rounded-full"></div>
                </div>
              </div>

              {/* Front Card (Dark Status) */}
              <div className="absolute -bottom-4 right-0 sm:bottom-12 sm:left-12 lg:left-0 sm:right-auto w-56 sm:w-64 p-4 sm:p-5 bg-slate-900 border border-slate-800 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.4)] transform rotate-[6deg] z-20 transition-transform duration-700 hover:-translate-y-4 hover:rotate-[2deg]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#144E9A] flex items-center justify-center text-white shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Download Ready</div>
                    <div className="text-slate-400 text-xs mt-0.5">PDF • 2.4 MB</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 w-full pt-16 relative z-10">
        <DatasheetsGridSection />
      </div>

      {/* Shared CTA Section */}
      <SharedCTA />
    </div>
  );
}
