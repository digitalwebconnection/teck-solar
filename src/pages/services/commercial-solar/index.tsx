import ServicePageTemplate from '../template';

const benefits = [
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
    title: 'Reduce Operating Costs',
    description: 'Significantly lower your electricity expenses with a commercial solar system sized to match your business energy profile.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
    title: 'Fast ROI (3-5 Years)',
    description: 'Commercial solar systems typically deliver return on investment within 3-5 years, with decades of savings thereafter.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: 'Green Credentials',
    description: 'Demonstrate your commitment to sustainability and boost your brand reputation with visible clean energy generation.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>,
    title: 'Scalable Systems',
    description: 'From 10kW to 500kW+, we design modular systems that can be expanded as your business grows.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: 'Tax Benefits',
    description: 'Take advantage of instant asset write-offs and accelerated depreciation for your commercial solar investment.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>,
    title: 'Smart Monitoring',
    description: 'Enterprise-grade monitoring with detailed analytics, alerts, and performance reports to maximise your investment.',
  },
];

const faqs = [
  { question: 'What size commercial system do I need?', answer: 'System size depends on your electricity consumption, available roof space, and budget. We analyse your power bills and operational patterns to recommend the optimal size. Systems typically range from 10kW to 500kW+.' },
  { question: 'Will solar work on my commercial building?', answer: 'Most commercial buildings are suitable for solar. Flat roofs are ideal as panels can be tilted for optimal angle. We conduct a thorough site assessment including structural analysis, shading review, and roof condition check.' },
  { question: 'What financing options are available?', answer: 'We offer multiple financing options including outright purchase, Power Purchase Agreements (PPAs), solar leases, and chattel mortgages. Our team will help you find the most tax-effective solution for your business.' },
  { question: 'How long does a commercial installation take?', answer: 'Typical commercial installations take 1-4 weeks depending on system size and complexity. We work around your business hours to minimise disruption to your operations.' },
];

export default function CommercialSolar() {
  return (
    <ServicePageTemplate
      title="Commercial Solar"
      bannerImage="/images/service-commercial.jpg"
      intro="Power your business with clean energy and dramatically reduce your operating costs. Teck Solar designs and installs scalable commercial solar solutions for offices, warehouses, retail centres, and industrial facilities."
      introDetail="Our commercial team has extensive experience delivering projects from 10kW rooftop systems to 500kW+ ground-mounted arrays. We handle everything from initial feasibility study to commissioning and ongoing maintenance."
      benefits={benefits}
      featureImage="/images/hero-commercial.jpg"
      faqs={faqs}
    />
  );
}
