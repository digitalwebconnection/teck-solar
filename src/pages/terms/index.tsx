export default function Terms() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple Document Header */}
        <div className="mb-12 pb-8 border-b border-slate-200">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Terms and Conditions</h1>
          <p className="text-slate-500 text-sm">
            Last Updated: {new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}
          </p>
        </div>

        {/* Document Content */}
        <div className="prose prose-slate prose-lg max-w-none prose-headings:font-semibold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-primary-600 hover:prose-a:text-primary-700">
          
          <p className="lead text-xl text-slate-700 mb-10">
            Please read these terms and conditions carefully before using our services. They contain important information about your rights and obligations, as well as limitations and exclusions that may apply to you.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl mt-0 mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using the services provided by Teck Solar, you agree to be bound by these Terms and Conditions and our standard installation warranty policies in accordance with Australian Consumer Law.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl mt-0 mb-4">2. Solar Quotes & System Estimates</h2>
            <p>
              All estimates, energy yield projections, and financial payback calculations provided in quotations are based on current tariff data and average historical solar irradiation. Final system output may vary depending on local weather conditions and seasonal variations.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl mt-0 mb-4">3. Warranties & Guarantees</h2>
            <p>
              All installations by Teck Solar are backed by a comprehensive workmanship warranty, alongside manufacturer warranties on solar panels (up to 25 years performance), inverters (up to 10 years), and battery storage units (up to 10-15 years).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl mt-0 mb-4">4. Governing Law</h2>
            <p>
              These terms are governed by the laws of New South Wales, Australia. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts of New South Wales.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
