import ServicePageTemplate from '../template';

const benefits = [
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>,
    title: 'Power Day & Night',
    description: 'Store excess solar energy during the day and use it at night, reducing your reliance on the grid around the clock.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    title: 'Backup Power',
    description: 'Keep your essential appliances running during blackouts with automatic battery backup switchover.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: 'Maximise Savings',
    description: 'Avoid expensive peak-rate electricity by using stored solar energy during high-tariff periods.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>,
    title: 'Smart Management',
    description: 'Intelligent energy management systems optimise charge and discharge cycles for maximum efficiency.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
    title: 'Virtual Power Plant',
    description: 'Join VPP programs to earn additional income by sharing your stored energy with the grid during peak demand.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    title: '10-Year Warranty',
    description: 'Our premium battery solutions come with up to 10-year manufacturer warranties and guaranteed cycle life.',
  },
];

const faqs = [
  { question: 'Do I need solar panels to install a battery?', answer: 'While batteries work best paired with solar panels, they can also be installed as standalone units. A solar+battery combination maximises your savings and energy independence. We can retrofit batteries to existing solar systems.' },
  { question: 'How long do batteries last?', answer: 'Modern lithium batteries typically last 10-15 years or 6,000-10,000 charge cycles. Our premium battery products come with manufacturer warranties of up to 10 years, guaranteeing a minimum capacity retention.' },
  { question: 'What can a battery power during a blackout?', answer: 'This depends on your battery size and essential load setup. A typical 10kWh battery can power lights, fridge, internet, and some appliances for 8-12 hours. We design your backup circuit to cover your most critical needs.' },
  { question: 'How much does a home battery cost?', answer: 'Home battery systems typically range from $8,000-$16,000 installed, depending on capacity and brand. With available state rebates, costs can be significantly reduced. The investment pays back through avoided peak electricity charges.' },
];

export default function BatteryStorage() {
  return (
    <ServicePageTemplate
      title="Battery Storage"
      bannerImage="/images/service-battery.jpg"
      intro="Take control of your energy with premium battery storage solutions from Teck Solar. Store surplus solar energy to use when the sun isn't shining and enjoy true energy independence."
      introDetail="Our battery storage solutions seamlessly integrate with new or existing solar systems. We partner with world-leading manufacturers to deliver reliable, high-performance battery systems backed by comprehensive warranties."
      benefits={benefits}
      featureImage="/images/service-battery.jpg"
      faqs={faqs}
    />
  );
}
