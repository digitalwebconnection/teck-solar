import ServicePageTemplate from '../template';
import bannerImg from '../../../assets/services/michael-fousert-tgpvjZ-Yw6Q-unsplash.jpg';

const benefits = [
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>,
    title: 'Round-the-Clock Power',
    description: 'Capture excess daytime solar energy and seamlessly deploy it at night. Eliminate peak grid tariffs and run your home on clean energy 24/7.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    title: 'Instant Backup Protection',
    description: 'Never be left in the dark again. In the event of a grid failure, your battery will instantaneously switch over to keep your essential appliances running.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: 'Maximise Your ROI',
    description: 'Stop selling your valuable solar power back to the grid for pennies. Store it and consume it when electricity prices are at their highest.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>,
    title: 'AI-Powered Management',
    description: 'Our batteries feature advanced AI algorithms that learn your energy usage patterns, optimising charge cycles based on local weather forecasts.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
    title: 'Virtual Power Plant (VPP)',
    description: 'Unlock a new revenue stream. Participate in VPP networks to trade your stored energy back to the grid during extreme demand spikes.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    title: '10-Year Guarantee',
    description: 'Invest with confidence. Our elite battery systems are engineered to last, backed by robust 10-year manufacturer warranties and guaranteed cycle life.',
  },
];

const faqs = [
  { question: 'Do I need an existing solar system to install a battery?', answer: 'No, batteries can be installed as standalone units to store cheap off-peak grid electricity, though they offer the highest ROI when paired with a solar system. If you already have solar, our advanced AC-coupled battery solutions can be seamlessly retrofitted to almost any existing setup.' },
  { question: 'What is the lifespan of a premium home battery?', answer: 'Our Tier-1 Lithium Iron Phosphate (LiFePO4) batteries are incredibly durable, engineered for up to 15 years of daily use (typically 6,000 to 10,000 cycles). They include comprehensive 10-year warranties that guarantee performance capacity.' },
  { question: 'Will a battery power my entire home during a blackout?', answer: 'We tailor the backup configuration to your needs. While large systems can back up an entire house, most homeowners opt for an "essential loads" circuit. This ensures your lights, refrigeration, Wi-Fi, and select power points run uninterrupted for extended periods during grid failures.' },
  { question: 'Are government rebates available for battery storage?', answer: 'Yes! Depending on your state, there are significant rebates and interest-free loan schemes available specifically for battery storage. Our team manages all the paperwork to ensure you receive the maximum possible discount off the upfront price.' },
];

export default function BatteryStorage() {
  return (
    <ServicePageTemplate
      title="Battery Storage"
      bannerImage={bannerImg}
      subtitle="Achieve ultimate energy independence. Store your excess solar power to bypass peak grid tariffs and keep your home powered 24/7."
      intro="Achieve ultimate energy independence. By storing your excess solar power, our premium battery systems allow you to bypass peak grid tariffs and keep your home powered 24/7—even during a blackout."
      introDetail="Teck Solar partners exclusively with world-leading battery manufacturers to deliver intelligent, high-density storage solutions. Whether you are installing a brand new solar-plus-storage system or retrofitting a battery to your existing setup, our expert engineers will design a bespoke solution that maximizes your financial returns."
      benefits={benefits}
      featureImage="/images/service-battery.jpg"
      faqs={faqs}
    />
  );
}
