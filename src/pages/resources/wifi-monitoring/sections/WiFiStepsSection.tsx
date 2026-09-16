import { useReveal } from '../../../../hooks/useReveal';

const steps = [
  {
    step: 1,
    title: 'Download the Monitoring App',
    description: 'Download the solar monitoring app from the App Store (iOS) or Google Play (Android). The app name depends on your inverter brand — we\'ll let you know which one to install.',
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
    description: 'On your phone or tablet, go to WiFi settings and look for a new network that matches your inverter brand (e.g., "Fronius_xxxx" or "AP_xxxx"). Connect to this temporary hotspot.',
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
  const stepsReveal = useReveal();

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white" ref={stepsReveal.ref}>
      <div className="max-w-4xl mx-auto w-full">
        <div className={`text-center mb-14 transition-all duration-700 ${stepsReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-primary-500 font-heading font-semibold text-sm tracking-widest uppercase">Setup Guide</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mt-3">Connect Your Solar System to WiFi</h2>
          <div className="w-16 h-1 bg-primary-500 rounded-full mx-auto mt-4" />
          <p className="mt-4 text-navy-500 max-w-2xl mx-auto">
            Follow these step-by-step instructions to connect your solar inverter to WiFi and start monitoring your system remotely.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`flex gap-6 transition-all duration-700 ${stepsReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Step Number */}
              <div className="shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center shadow-lg">
                  <span className="text-white font-heading font-bold text-xl">{s.step}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 h-full bg-primary-100 mx-auto mt-2 min-h-[40px]" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-4">
                <h3 className="text-xl font-heading font-semibold text-navy-900">{s.title}</h3>
                <p className="text-navy-500 mt-2 leading-relaxed">{s.description}</p>
                {s.tips.length > 0 && (
                  <div className="mt-4 bg-navy-50 rounded-xl p-5 border border-navy-100">
                    <p className="text-xs font-semibold text-primary-500 uppercase tracking-wide mb-2">Tips</p>
                    <ul className="space-y-1.5">
                      {s.tips.map((tip, ti) => (
                        <li key={ti} className="flex items-start gap-2 text-sm text-navy-600">
                          <svg className="w-4 h-4 text-eco-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
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
    </section>
  );
}
