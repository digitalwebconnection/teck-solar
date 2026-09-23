import ServicePageTemplate from '../template';
import bannerImg from '../../../assets/services/raphael-cruz-IwY-27ceRCA-unsplash.jpg';
const benefits = [
    {
        icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>,
        title: 'Ultra-Fast Charging',
        description: 'Ditch the slow factory cables. Our premium Level 2 wall chargers deliver up to 22kW of power, charging your EV up to 10x faster than a standard wall socket.',
    },
    {
        icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>,
        title: 'Solar-Powered Driving',
        description: 'Achieve true zero-emissions transport. Our intelligent chargers sync with your solar system, allowing you to charge your car using 100% free, sun-generated electricity.',
    },
    {
        icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>,
        title: 'Smart App Control',
        description: 'Schedule your charging sessions during off-peak grid times or peak solar production hours, all from an intuitive smartphone app.',
    },
    {
        icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>,
        title: 'Universal Compatibility',
        description: 'Whether you drive a Tesla, BYD, Polestar, or Hyundai, our tethered and untethered chargers feature universal Type 2 plugs compatible with all modern EVs.',
    },
    {
        icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>,
        title: 'Advanced Safety Features',
        description: 'Safety is paramount. Every installation is meticulously executed and certified by our master electricians, ensuring strict compliance with all Australian Standards.',
    },
    {
        icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>,
        title: 'Commercial Fleet Ready',
        description: 'Need to charge a fleet? We supply and install multi-point commercial charging stations equipped with RFID access and automated billing software.',
    },
];
const faqs = [
    { question: 'Will an EV charger work with my existing solar system?', answer: 'Absolutely. In fact, pairing an EV charger with a solar system is the ultimate way to drive for free. Our smart chargers can be configured to only draw power when your solar panels are producing excess energy, guaranteeing zero-emissions charging.' },
    { question: 'Do I need a single-phase or three-phase charger?', answer: 'This depends on your home\'s electrical supply. A single-phase charger can deliver up to 7.4kW (adding ~40km of range per hour). If your property has three-phase power, we can install a 22kW charger (adding up to ~120km of range per hour).' },
    { question: 'Can the charger be installed outside?', answer: 'Yes. All the EV chargers we supply feature high IP (Ingress Protection) ratings, making them completely weatherproof and safe for uncovered outdoor installations, such as carports or driveways.' },
    { question: 'Are government grants available for EV chargers?', answer: 'Certain states and local councils offer grants or rebates for both residential and commercial EV charger installations. Our team stays up-to-date with the latest legislation and will guide you on how to claim available incentives.' },
];
export default function EVCharger() {
    return (<ServicePageTemplate title="EV Chargers" bannerImage={bannerImg} subtitle="Charge your electric vehicle up to 10x faster with our premium smart chargers, fully integrated with your home solar system." intro="Accelerate your transition to electric mobility. Teck Solar provides premium, rapid EV charging stations for homes and businesses, fully integrated with your solar ecosystem." introDetail="Say goodbye to public charging queues and range anxiety. Our expert electricians design and install sophisticated charging infrastructure tailored to your exact vehicle and electrical capacity. By bridging the gap between your solar panels and your driveway, we help you slash your transport costs to zero." benefits={benefits} featureImage="/images/service-ev-charger.jpg" faqs={faqs}/>);
}
