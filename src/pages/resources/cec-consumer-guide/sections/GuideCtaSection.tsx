import { Link } from 'react-router-dom';

export default function GuideCtaSection() {
  return (
    <section className="gradient-dark section-padding">
      <div className="container-custom mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Have Questions?</h2>
        <p className="mt-4 text-navy-300 text-lg max-w-2xl mx-auto">
          Our team is always happy to answer your questions and help you understand your solar options.
        </p>
        <Link to="/contact" className="btn-primary mt-8 mx-auto">
          Contact Our Team
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </Link>
      </div>
    </section>
  );
}
