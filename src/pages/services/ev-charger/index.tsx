import ServicePageTemplate from '../template';

const benefits = [
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    title: 'Fast Charging',
    description: 'Level 2 chargers deliver up to 22kW, fully charging your EV in 4-8 hours. Perfect for overnight home charging.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
    title: 'Solar-Powered Driving',
    description: 'Integrate your EV charger with solar to drive on free sunshine. Reduce fuel costs by up to 90%.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>,
    title: 'Smart Scheduling',
    description: 'Schedule charging during off-peak hours or when your solar system is generating surplus energy.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
    title: 'Add Property Value',
    description: 'EV-ready homes are increasingly sought after. An installed charger adds value and appeal to your property.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
    title: 'Safe & Certified',
    description: 'All installations comply with Australian electrical standards and are certified by licensed electricians.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    title: 'Universal Compatibility',
    description: 'Our chargers work with all EV brands — Tesla, BYD, Hyundai, MG, BMW, Polestar, and more.',
  },
];

const faqs = [
  { question: 'What type of EV charger do I need?', answer: 'For most homes, a Level 2 (7kW–22kW) AC charger is ideal. It charges a typical EV in 4-8 hours, perfect for overnight charging. We assess your electrical capacity and recommend the best option for your setup.' },
  { question: 'Can I charge my EV with solar?', answer: 'Absolutely! We can integrate your EV charger with your solar system so you\'re literally driving on sunshine. Smart chargers can be programmed to charge only when solar is generating, maximising your savings.' },
  { question: 'How much does an EV charger installation cost?', answer: 'A typical home EV charger installation costs between $1,500-$3,500 including the charger unit and installation. Costs vary based on charger capacity, cable run length, and any switchboard upgrades needed.' },
  { question: 'Do I need a dedicated circuit for my EV charger?', answer: 'Yes, EV chargers require a dedicated circuit from your switchboard. Our electricians will assess your switchboard capacity and install the appropriate circuit breaker and cabling for safe, reliable charging.' },
];

export default function EVCharger() {
  return (
    <ServicePageTemplate
      title="EV Charger"
      bannerImage="/images/service-ev-charger.jpg"
      intro="Future-proof your home or business with a professionally installed EV charging station. Teck Solar provides smart EV charger solutions that integrate seamlessly with your solar system for maximum savings."
      introDetail="As Australia transitions to electric vehicles, having a dedicated home charger is becoming essential. Our solutions range from simple plug-in chargers to sophisticated smart units with solar integration and load management."
      benefits={benefits}
      featureImage="/images/service-ev-charger.jpg"
      faqs={faqs}
    />
  );
}
