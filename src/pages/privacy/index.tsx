import PageBanner from '../../components/layout/PageBanner';

export default function PrivacyPolicy() {
  return (
    <>
      <PageBanner
        title="Privacy Policy"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Privacy Policy' }]}
      />
      <div className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl prose prose-slate">
          <h2 className="text-2xl font-heading font-bold text-navy-900 mb-4">1. Introduction</h2>
          <p className="text-navy-600 mb-6 leading-relaxed">
            At Teck Solar, we respect your privacy and are committed to protecting personal information that you provide to us. This Privacy Policy outlines how we collect, use, and safeguard your data in accordance with the Australian Privacy Principles (APPs) and the Privacy Act 1988 (Cth).
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900 mb-4">2. Information We Collect</h2>
          <p className="text-navy-600 mb-4 leading-relaxed">
            We may collect personal details including:
          </p>
          <ul className="list-disc pl-6 text-navy-600 space-y-2 mb-6">
            <li>Contact details such as name, email address, phone number, and physical property address.</li>
            <li>Energy consumption information, electricity bills, and roof details to design solar systems.</li>
            <li>Financial or rebate eligibility information required for STC (Small-scale Technology Certificate) processing.</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-navy-900 mb-4">3. How We Use Your Information</h2>
          <p className="text-navy-600 mb-6 leading-relaxed">
            Your information is used strictly to provide solar engineering consultations, deliver quotes, complete system installations, apply for network connection approvals, and offer ongoing customer support.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900 mb-4">4. Contact Us</h2>
          <p className="text-navy-600 leading-relaxed">
            For privacy queries, please reach out to us at <a href="mailto:privacy@tecksolar.com.au" className="text-primary-600 hover:underline">privacy@tecksolar.com.au</a>.
          </p>
        </div>
      </div>
    </>
  );
}
