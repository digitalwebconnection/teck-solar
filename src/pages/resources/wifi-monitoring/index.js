import WiFiStepsSection from './sections/WiFiStepsSection';
import SharedCTA from '../../../components/SharedCTA';
export default function WiFiMonitoring() {
    return (<div className="bg-[#FAFAFA] min-h-screen selection:bg-[#E56D00] selection:text-white">
      
      {/* Network Connectivity Hero */}
      <div className="border-b border-slate-200/50 relative">
        {/* Background Network Graphic & Dark Wavy Lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
          
          {/* Ambient Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#E56D00]/5 via-transparent to-[#144E9A]/5 rounded-full blur-3xl opacity-50"/>
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12 py-8 lg:py-12">
            
            {/* Left Content (Typography) */}
            <div className="w-full lg:w-5/12 relative z-10">
              
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-black text-slate-900 tracking-tighter leading-[1.05] mb-8">
                Connect Your <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 text-white px-5 py-2 bg-[#144E9A] rounded-2xl rotate-[2deg] inline-block shadow-xl shadow-[#144E9A]/20">System.</span>
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
                Step-by-step instructions to connect your solar inverter to your home WiFi network and enable real-time energy monitoring.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-200 shadow-sm text-sm font-bold text-slate-700">
                  <svg className="w-5 h-5 text-[#144E9A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                  App Setup
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-200 shadow-sm text-sm font-bold text-slate-700">
                  <svg className="w-5 h-5 text-[#E56D00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/></svg>
                  Router Pairing
                </div>
              </div>
            </div>

            {/* Right Abstract Visual (CSS Art Router/Phone) */}
            <div className="w-full lg:w-6/12 h-[450px] lg:h-[550px] relative flex justify-center items-center mt-12 lg:mt-0">
              
              {/* Soft Ambient Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#144E9A]/20 rounded-full blur-[80px]"/>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-3/4 w-[200px] h-[200px] bg-[#E56D00]/20 rounded-full blur-[60px]"/>
              
              {/* Radiating Signal Rings Behind Phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-slate-900/30 rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]"/>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-slate-900/15 rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite] animation-delay-1000"/>
              
              {/* Central Floating Phone Mockup */}
              <div className="relative w-[260px] h-[520px] bg-white border-[6px] border-slate-900 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(20,78,154,0.3)] transform rotate-[8deg] hover:rotate-[4deg] transition-transform duration-700 overflow-hidden flex flex-col z-20">
                {/* Phone Notch */}
                <div className="w-32 h-6 bg-slate-900 rounded-b-2xl mx-auto absolute top-0 left-1/2 -translate-x-1/2 z-30"/>
                
                {/* App Screen */}
                <div className="flex-1 bg-slate-50 w-full h-full flex flex-col pt-12">
                  {/* App Header */}
                  <div className="px-6 mb-6">
                    <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">My System</div>
                    <div className="text-slate-900 font-heading font-black text-2xl">Teck Solar</div>
                  </div>

                  {/* Main Output Card inside App */}
                  <div className="mx-4 h-36 rounded-xl bg-slate-900 p-5 text-white flex flex-col justify-between shadow-lg relative overflow-hidden mb-6 group">
                     {/* Background Image & Overlay */}
                     <div className="absolute inset-0">
                       <img src="/images/hero-residential.jpg" alt="Solar Panels" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
                       <div className="absolute inset-0 bg-gradient-to-tr from-[#144E9A]/95 to-[#1e5cad]/70 mix-blend-multiply"/>
                       <div className="absolute inset-0"/>
                     </div>
                     
                     {/* Gloss effect */}
                     <div className="absolute -right-4 -top-4 w-32 h-32 bg-white/20 rounded-full blur-2xl"/>
                     
                     <div className="flex justify-between items-center relative z-10">
                        <div className="text-white font-semibold text-xs uppercase tracking-widest drop-shadow-md">Live Output</div>
                        <div className="flex items-center gap-2 bg-black/20 px-2 py-1 rounded-full backdrop-blur-md border border-white/10">
                          <div className="w-2 h-2 rounded-full bg-[#E56D00] animate-pulse shadow-[0_0_8px_rgba(229,109,0,0.8)]"/>
                          <span className="text-[9px] font-bold tracking-widest uppercase text-white/90">Online</span>
                        </div>
                     </div>
                     <div className="relative z-10">
                        <div className="text-4xl font-heading font-black drop-shadow-lg">6.8 <span className="text-lg text-white/90 font-medium">kW</span></div>
                     </div>
                  </div>

                  {/* Smaller Data Rows inside App */}
                  <div className="flex-1 bg-white rounded-t-3xl shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)] p-6 space-y-4">
                     <div className="w-full h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center px-4 gap-4">
                        <div className="w-8 h-8 rounded-lg bg-[#E56D00]/10 flex items-center justify-center">
                           <svg className="w-4 h-4 text-[#E56D00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                        </div>
                        <div className="flex-1 h-3 bg-slate-200 rounded-full"/>
                     </div>
                     <div className="w-full h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center px-4 gap-4">
                        <div className="w-8 h-8 rounded-lg bg-[#144E9A]/10 flex items-center justify-center">
                           <svg className="w-4 h-4 text-[#144E9A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg>
                        </div>
                        <div className="flex-1 h-3 bg-slate-200 rounded-full"/>
                     </div>
                  </div>
                </div>
              </div>

              {/* Floating Element: WiFi Connected Badge */}
              

              {/* Floating Element: Inverter Device Card */}
              <div className="absolute bottom-12 left-4 lg:left-0 bg-slate-900 p-4 rounded-2xl shadow-2xl z-30 transform rotate-[6deg] hover:rotate-0 transition-transform duration-500 flex items-center gap-4 w-56">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/></svg>
                </div>
                <div>
                  <div className="text-white font-bold text-sm leading-tight">Inverter Online</div>
                  <div className="text-slate-400 text-xs mt-1">Transmitting data...</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Steps Content Area */}
      <div className="relative z-10">
        <WiFiStepsSection />
      </div>

      {/* Standalone Support CTA Section */}
      <SharedCTA />
    </div>);
}
