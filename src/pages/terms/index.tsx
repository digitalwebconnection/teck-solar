import PageBanner from '../../components/layout/PageBanner';

export default function Terms() {
  return (
    <>
      <PageBanner
        title="Terms & Conditions"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Terms & Conditions' }]}
      />
      <div className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl prose prose-slate">
          <h2 className="text-2xl font-heading font-bold text-navy-900 mb-4">1. Agreement to Terms</h2>
          <p className="text-navy-600 mb-6 leading-relaxed">
            By accessing or using the services provided by Teck Solar, you agree to be bound by these Terms and Conditions and our standard installation warranty policies in accordance with Australian Consumer Law.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900 mb-4">2. Solar Quotes &amp; System Estimates</h2>
          <p className="text-navy-600 mb-6 leading-relaxed">
            All estimates, energy yield projections, and financial payback calculations provided in quotations are based on current tariff data and average historical solar irradiation. Final system output may vary depending on local weather conditions and seasonal variations.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900 mb-4">3. Warranties &amp; Guarantees</h2>
          <p className="text-navy-600 mb-6 leading-relaxed">
            All installations by Teck Solar are backed by a comprehensive workmanship warranty, alongside manufacturer warranties on solar panels (up to 25 years performance), inverters (up to 10 years), and battery storage units (up to 10-15 years).
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900 mb-4">4. Governing Law</h2>
          <p className="text-navy-600 leading-relaxed">
            These terms are governed by the laws of New South Wales, Australia.
          </p>
        </div>
      </div>
    </>
  );
}
