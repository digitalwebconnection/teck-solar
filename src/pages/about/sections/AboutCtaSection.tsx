import { Link } from 'react-router-dom';

export default function AboutCtaSection() {
  return (
    <section className="bg-gradient-to-r from-primary-500 to-primary-600 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center w-full">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Ready to Go Solar?</h2>
        <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
          Join thousands of Australians who have already made the switch. Get a free consultation today.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-heading font-semibold text-navy-900 bg-white hover:bg-primary-50 hover:-translate-y-0.5 shadow-sm transition-all mt-8 mx-auto"
        >
          Get Your Free Quote
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </Link>
      </div>
    </section>
  );
}
