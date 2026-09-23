import { useReveal } from '../../../../hooks/useReveal';

const steps = [
  {
    step: 1,
    title: 'Download the Monitoring App',
    description: 'Download the solar monitoring app from the App Store (iOS) or Google Play (Android). The app name depends on your inverter brand.',
    tips: ['Fronius: "Fronius Solar.web"', 'Enphase: "Enphase Enlighten"', 'SMA: "SMA Energy"', 'Sungrow: "iSolarCloud"'],
  },
  {
    step: 2,
    title: 'Connect Your Inverter to WiFi',
    description: 'Locate the WiFi setup button on your inverter. This is usually a small button on the front or side panel. Press and hold for 5 seconds until the WiFi indicator light begins blinking.',
    tips: ['Make sure your home WiFi router is within range', 'Use 2.4GHz network (not 5GHz)', 'Have your WiFi password ready'],
  },
  {
    step: 3,
    title: 'Connect to Inverter Hotspot',
    description: 'On your phone or tablet, go to WiFi settings and look for a new network that matches your inverter brand (e.g., "Fronius_xxxx"). Connect to this temporary hotspot.',
    tips: ['The hotspot may appear as an unsecured network', 'You may temporarily lose internet — this is normal', 'Default password is often on a label on the inverter'],
  },
  {
    step: 4,
    title: 'Access the Setup Portal',
    description: 'Once connected to the inverter hotspot, open a web browser and navigate to the setup page. The address varies by brand. Alternatively, the monitoring app may guide you automatically.',
    tips: ['Fronius: http://192.168.250.1', 'Enphase: Use the Enlighten app', 'SMA: http://192.168.12.3', 'Sungrow: Use the iSolarCloud app'],
  },
  {
    step: 5,
    title: 'Enter Your Home WiFi Details',
    description: 'In the setup portal, find the WiFi/Network settings section. Select your home WiFi network from the list and enter your WiFi password. Save the settings.',
    tips: ['Double-check your WiFi password for accuracy', 'Ensure your network is 2.4GHz compatible', 'Wait 1-2 minutes for the connection to establish'],
  },
  {
    step: 6,
    title: 'Create Your Monitoring Account',
    description: 'Open the monitoring app and create your account. You\'ll need your inverter serial number (found on the inverter label) and the registration code provided in your installation paperwork.',
    tips: ['Check your Teck Solar installation folder for credentials', 'Serial number is on the inverter nameplate', 'Contact us if you need your registration code'],
  },
  {
    step: 7,
    title: 'Verify & Enjoy Real-Time Monitoring',
    description: 'Once registered, your app should show real-time data within 5-15 minutes. You can now monitor energy production, consumption, export, and battery status from anywhere.',
    tips: ['Check that production data matches your inverter display', 'Set up alerts for system faults', 'Review your daily/weekly/monthly performance trends'],
  },
];

export default function WiFiStepsSection() {
  const sectionReveal = useReveal();

  return (
    <section className="py-24 lg:py-32 bg-slate-50 relative z-20" ref={sectionReveal.ref}>
      <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Sticky Header */}
          <div className="lg:w-1/3">
            <div className={`sticky top-32 transition-all duration-700 ${sectionReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#144E9A]/10 text-[#144E9A] font-bold text-xs uppercase tracking-widest mb-6">Setup Process</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
                Connect to <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#144E9A] to-[#E56D00]">The Cloud.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                Follow these step-by-step instructions to securely connect your solar system to your home network and enable 24/7 remote monitoring.
              </p>

              {/* Quick Info Box */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-5">
                 <div className="w-12 h-12 rounded-full bg-[#E56D00]/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-[#E56D00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                 </div>
                 <div>
                   <h4 className="font-bold text-slate-900 mb-2">Before you begin</h4>
                   <p className="text-sm text-slate-600 leading-relaxed">Ensure you have your 2.4GHz WiFi password and your inverter serial number handy.</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Right Column: Step Cards */}
          <div className="lg:w-2/3 relative">
             {/* Continuous Timeline Line */}
             <div className="absolute left-[23px] top-8 bottom-32 w-1 bg-gradient-to-b from-[#144E9A]/20 via-[#E56D00]/20 to-transparent rounded-full hidden md:block" />

             <div className="space-y-8 lg:space-y-12">
               {steps.map((s, i) => (
                 <div key={i} className={`relative md:pl-16 lg:pl-20 transition-all duration-700 ${sectionReveal.visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: `${i * 100}ms` }}>
                    
                    {/* Node */}
                    <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-white border-4 border-[#144E9A] items-center justify-center text-lg font-heading font-black text-[#144E9A] shadow-lg shadow-[#144E9A]/20 z-10 hidden md:flex">
                      {s.step}
                    </div>

                    {/* Card */}
                    <div className="bg-white rounded-2xl p-8 lg:p-10 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-[#144E9A]/5 transition-all duration-300 relative overflow-hidden group">
                      
                      <div className="md:hidden w-12 h-12 rounded-full bg-[#144E9A]/10 text-[#144E9A] flex items-center justify-center font-heading font-black text-lg mb-6">
                        {s.step}
                      </div>

                      <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">{s.title}</h3>
                      <p className="text-slate-600 leading-relaxed mb-8">{s.description}</p>
                      
                      {s.tips.length > 0 && (
                        <div className="bg-slate-50 rounded-[1.5rem] p-6 border border-slate-100">
                          <span className="text-xs font-bold text-[#E56D00] uppercase tracking-widest block mb-4">Pro Tips</span>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {s.tips.map((tip, ti) => (
                              <li key={ti} className="flex items-start gap-3 text-sm text-slate-600">
                                <svg className="w-5 h-5 text-[#144E9A] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                 </div>
               ))}

             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
