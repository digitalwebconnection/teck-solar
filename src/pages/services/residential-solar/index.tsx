import ServicePageTemplate from '../template';
import bannerImg from '../../../assets/services/uitbundig-yxiP843xyrI-unsplash.jpg';

const benefits = [
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: 'Cut Your Bills by up to 80%',
    description: 'Dramatically reduce your reliance on the grid. A custom-designed residential solar system maximises energy generation, locking in low power costs for decades.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: 'Zero Carbon Emissions',
    description: 'Offset approximately 9 tonnes of CO₂ annually with a standard 6.6kW system—the equivalent of planting over 200 trees every single year.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
    title: 'Increase Property Value',
    description: 'Homes equipped with premium solar panels are highly sought after, typically selling for a premium. Solar is an investment that pays immediate and long-term dividends.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    title: '25-Year Performance Warranty',
    description: 'Enjoy complete peace of mind. Our Tier 1 panels and inverters are backed by industry-leading 25-year performance warranties.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>,
    title: 'Intelligent App Monitoring',
    description: 'Track your home\'s energy production and consumption in real-time right from your smartphone. Total visibility means total control over your power.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    title: 'Claim Government Rebates',
    description: 'We handle all the paperwork to help you claim available Small-scale Technology Certificates (STCs) and state-specific rebates, massively reducing upfront costs.',
  },
];

const faqs = [
  { question: 'How much does a premium residential solar system cost?', answer: 'A high-quality 6.6kW residential system typically costs between $4,000–$8,000 fully installed, after government rebates are applied. We only use Tier 1 equipment to ensure longevity, and we provide transparent quotes with absolutely no hidden fees.' },
  { question: 'How long will the installation take?', answer: 'Most residential installations are completed within a single day. Our expert teams work efficiently and cleanly. We also handle all council permits and grid connection paperwork for you, which generally takes 2 to 4 weeks to finalise.' },
  { question: 'What size solar system is right for my home?', answer: 'Your ideal system size depends on your daily energy consumption, roof orientation, and budget. An average Australian home uses about 15-25kWh per day, perfectly matching a 6.6kW system. Our engineers will analyse your bills to recommend the perfect fit.' },
  { question: 'Do the panels still produce power on cloudy days?', answer: 'Yes! Solar panels rely on UV light, not just direct sunlight, so they continue to generate electricity on overcast days. While output is reduced (typically 10-25% of full capacity), your system is designed to factor in local weather patterns.' },
  { question: 'What is the expected payback period?', answer: 'Because of Australia\'s high electricity prices and excellent sunshine, most residential systems pay for themselves within just 3 to 5 years. After that period, you will enjoy decades of virtually free electricity.' },
];

export default function ResidentialSolar() {
  return (
    <ServicePageTemplate
      title="Residential Solar"
      bannerImage={bannerImg}
      subtitle="Empower your home with clean, renewable energy. Lower your bills and increase your property value with our premium solar solutions."
      intro="Transform your home into a clean energy powerhouse. A custom-designed residential solar system from Teck Solar provides ultimate energy independence while protecting your family from constantly rising electricity prices."
      introDetail="We don't believe in one-size-fits-all. Our expert engineers will meticulously design and install a tailored system using only premium, Tier-1 equipment. Whether you want to eliminate your power bill or simply do your part for the environment, our solutions deliver unmatched performance and reliability."
      benefits={benefits}
      featureImage="/images/hero-residential.jpg"
      faqs={faqs}
    />
  );
}
