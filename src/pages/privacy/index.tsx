export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple Document Header */}
        <div className="mb-12 pb-8 border-b border-slate-200">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-slate-500 text-sm">
            Last Updated: {new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}
          </p>
        </div>

        {/* Document Content */}
        <div className="prose prose-slate prose-lg max-w-none prose-headings:font-semibold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-primary-600 hover:prose-a:text-primary-700">
          
          <p className="lead text-xl text-slate-700 mb-10">
            At Teck Solar, we respect your privacy and are committed to protecting personal information that you provide to us. This Privacy Policy outlines how we collect, use, and safeguard your data in accordance with the Australian Privacy Principles (APPs) and the Privacy Act 1988 (Cth).
          </p>

          <section className="mb-10">
            <h2 className="text-2xl mt-0 mb-4">1. Information We Collect</h2>
            <p>
              We may collect personal details including:
            </p>
            <ul>
              <li>Contact details such as name, email address, phone number, and physical property address.</li>
              <li>Energy consumption information, electricity bills, and roof details to design solar systems.</li>
              <li>Financial or rebate eligibility information required for STC (Small-scale Technology Certificate) processing.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl mt-0 mb-4">2. How We Use Your Information</h2>
            <p>
              Your information is used strictly to provide solar engineering consultations, deliver quotes, complete system installations, apply for network connection approvals, and offer ongoing customer support.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl mt-0 mb-4">3. Contact Us</h2>
            <p>
              For privacy queries, please reach out to us at <a href="mailto:privacy@tecksolar.com.au">privacy@tecksolar.com.au</a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
