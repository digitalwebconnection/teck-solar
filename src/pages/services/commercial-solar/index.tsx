import ServicePageTemplate from '../template';
import bannerImg from '../../../assets/services/chuttersnap-xJLsHl0hIik-unsplash.jpg';

const benefits = [
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
    title: 'Slash Operating Costs',
    description: 'Transform one of your largest overheads into a predictable, low-cost asset. A tailored commercial solar system dramatically reduces your reliance on grid electricity.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
    title: 'Rapid ROI (3-5 Years)',
    description: 'Commercial systems offer incredible financial returns. Most installations pay for themselves within just 3 to 5 years, providing decades of free energy thereafter.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: 'Boost Brand Credentials',
    description: 'Demonstrate genuine corporate social responsibility. Visible clean energy generation enhances your brand reputation among increasingly eco-conscious consumers.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>,
    title: 'Fully Scalable Design',
    description: 'From 10kW warehouse rooftops to 500kW+ industrial ground arrays, we design modular systems that can seamlessly expand as your enterprise grows.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: 'Maximise Tax Benefits',
    description: 'Capitalise on government incentives. Take full advantage of instant asset write-offs and accelerated depreciation strategies to improve your bottom line.',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>,
    title: 'Enterprise Analytics',
    description: 'Gain total control with enterprise-grade monitoring. Receive detailed yield analytics, automated alerts, and performance reports to ensure maximum efficiency.',
  },
];

const faqs = [
  { question: 'What size commercial solar system does my business need?', answer: 'System sizing is critical for commercial ROI. It depends on your daily load profile, roof footprint, and budget. Our engineers perform a comprehensive audit of your interval meter data to recommend the optimal size, typically ranging from 30kW up to multi-megawatt systems.' },
  { question: 'Is my commercial building suitable for a solar installation?', answer: 'Most commercial structures are excellent candidates. Large flat roofs are particularly ideal as panels can be precisely tilted for optimal yield. We conduct a rigorous site assessment, including structural engineering analysis, shading review, and roof condition checks before quoting.' },
  { question: 'What commercial financing options are available?', answer: 'We facilitate flexible financing tailored to businesses, including Power Purchase Agreements (PPAs), operating leases, and chattel mortgages. In many cases, the monthly energy savings exceed the finance repayments, making your system cash-flow positive from day one.' },
  { question: 'How long will the installation disrupt my business operations?', answer: 'We prioritize operational continuity. Typical installations take 1 to 4 weeks depending on scale. However, we coordinate our work schedules around your operating hours—including weekend and night shifts—to ensure zero disruption to your daily business activities.' },
];

export default function CommercialSolar() {
  return (
    <ServicePageTemplate
      title="Commercial Solar"
      bannerImage={bannerImg}
      subtitle="Supercharge your business with sustainable energy. Reduce overheads, demonstrate corporate responsibility, and generate long-term ROI."
      intro="Power your enterprise with clean energy and drastically reduce your operating overheads. Teck Solar engineers high-performance, scalable commercial solar solutions designed specifically for offices, logistics centres, and industrial facilities."
      introDetail="Our dedicated commercial division has a proven track record of delivering complex projects ranging from 10kW precision rooftop systems to massive 500kW+ arrays. We provide a complete end-to-end service: from initial feasibility modelling and structural engineering to seamless installation, grid-connection, and lifetime maintenance."
      benefits={benefits}
      featureImage="/images/hero-commercial.jpg"
      faqs={faqs}
    />
  );
}
