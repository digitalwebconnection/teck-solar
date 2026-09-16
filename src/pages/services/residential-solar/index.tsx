import ServicePageTemplate from '../template';

const benefits = [
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: 'Save Up to 80% on Bills',
    description: 'Dramatically reduce your electricity costs with a custom-designed residential solar system that maximises energy generation.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: 'Reduce Carbon Footprint',
    description: 'A typical 6.6kW system offsets approximately 9 tonnes of CO₂ per year — equivalent to planting 200 trees annually.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
    title: 'Increase Property Value',
    description: 'Homes with solar panels sell for up to 4.1% more. Solar is a smart investment that pays dividends for decades.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    title: '25-Year Warranty',
    description: 'Our premium panels come with up to 25-year performance warranties, giving you complete peace of mind.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>,
    title: 'Smart Monitoring',
    description: 'Track your energy production and consumption in real-time with our integrated monitoring solutions.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    title: 'Government Rebates',
    description: 'We help you claim all available STCs and state rebates, reducing your upfront costs significantly.',
  },
];

const faqs = [
  { question: 'How much does a residential solar system cost?', answer: 'A typical 6.6kW residential solar system costs between $4,000–$8,000 after rebates. The exact price depends on panel quality, inverter choice, and installation complexity. We provide detailed, transparent quotes with no hidden fees.' },
  { question: 'How long does installation take?', answer: 'Most residential installations are completed in just one day. Larger or more complex systems may take 2 days. We handle all permits and grid connection paperwork, which typically takes 2-4 weeks to finalise.' },
  { question: 'What size system do I need?', answer: 'System size depends on your energy consumption, roof space, and budget. A typical Australian household uses 15-25kWh per day, which a 6.6kW system can comfortably cover. We\'ll analyse your bills and recommend the optimal size.' },
  { question: 'Do solar panels work on cloudy days?', answer: 'Yes! Solar panels still generate electricity on cloudy days, though at reduced output (typically 10-25% of full capacity). With battery storage, you can store excess energy from sunny days to use when it\'s overcast.' },
  { question: 'What is the payback period?', answer: 'Most residential systems pay for themselves in 3-5 years through electricity savings. After that, you enjoy decades of virtually free energy. The exact payback depends on your system size, energy usage, and local electricity rates.' },
];

export default function ResidentialSolar() {
  return (
    <ServicePageTemplate
      title="Residential Solar"
      bannerImage="/images/service-residential.jpg"
      intro="Transform your home into a clean energy powerhouse with a custom-designed residential solar system from Teck Solar. Our expert team will design and install a system perfectly suited to your home, energy needs, and budget."
      introDetail="Whether you're looking to reduce your electricity bills, increase your energy independence, or simply do your part for the environment, our residential solar solutions deliver outstanding performance backed by industry-leading warranties."
      benefits={benefits}
      featureImage="/images/hero-residential.jpg"
      faqs={faqs}
    />
  );
}
