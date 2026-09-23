import { useEffect, useState } from "react";
import { useQuoteModal } from "../context/QuoteModalContext";

export default function QuoteModal() {
  const { isOpen, closeModal } = useQuoteModal();
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setIsAnimatingOut(false);
      setIsSuccess(false);
      setIsSubmitting(false);
      closeModal();
    }, 300); // match transition duration
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  if (!isOpen && !isAnimatingOut) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 ${
          isAnimatingOut ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Modal Container */}
      <div
        className={`relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row transition-all duration-300 ${
          isAnimatingOut
            ? "opacity-0 translate-y-8 scale-95"
            : "opacity-100 translate-y-0 scale-100"
        }`}
      >
        {/* Left Side: Image & Branding (Hidden on small mobile) */}
        <div className="hidden md:flex md:w-5/12 bg-slate-900 relative p-10 flex-col justify-between overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
            style={{ backgroundImage: "url('/images/hero-residential.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

          {/* Glowing Accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E56D00]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h3 className="text-3xl font-heading font-extrabold text-white mb-4 leading-tight">
              Start Your Solar <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-400 to-[#FBAF75]">
                Savings Journey
              </span>
            </h3>
            <p className="text-slate-300 font-light leading-relaxed mb-8">
              Join thousands of Australians saving up to 80% on their energy bills. Get a customized, no-obligation quote from our CEC-accredited experts.
            </p>

            <ul className="space-y-4">
              {[
                "Tier-1 Premium Components",
                "Up to 25-Year Warranties",
                "Zero-Deposit Finance Available",
                "Expert Local Installation",
              ].map((benefit, i) => (
                <li key={i} className="flex items-center gap-3 text-white/90 font-medium">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Testimonial Snippet */}
          <div className="relative z-10 mt-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5">
            <div className="flex text-amber-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-white/80 text-sm italic mb-2">"Teck Solar cut our power bills by 85%. Flawless process from start to finish."</p>
            <p className="text-white font-semibold text-xs">— David M., Sydney</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-7/12 p-6 sm:p-8 relative">
          {/* Close Button */}
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-600 flex items-center justify-center transition-colors focus:outline-none z-50 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {isSuccess ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12 px-6 animate-fade-in">
              <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6 shadow-inner border border-emerald-100">
                <div className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center shadow-md shadow-emerald-500/20">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 mb-4">Quote Requested!</h2>
              <p className="text-slate-600 mb-8 max-w-sm mx-auto leading-relaxed">
                Thank you for your interest. One of our solar experts will review your details and contact you within 24 hours.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="px-10 py-3.5 rounded-xl font-heading font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors duration-300 cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className="mb-6 pr-12">
                <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-900 mb-1.5">Get Your Free Quote</h2>
                <p className="text-sm text-slate-500 font-light">Fill out the details below and our team will get back to you within 24 hours.</p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-[13px] font-semibold text-slate-700">First Name *</label>
                    <input type="text" required className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-blue-500/20 focus:border-brand-blue-500 outline-none transition-all placeholder:text-slate-400 text-sm" placeholder="John" />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[13px] font-semibold text-slate-700">Last Name *</label>
                    <input type="text" required className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-blue-500/20 focus:border-brand-blue-500 outline-none transition-all placeholder:text-slate-400 text-sm" placeholder="Doe" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-[13px] font-semibold text-slate-700">Phone Number *</label>
                    <input type="tel" required className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-blue-500/20 focus:border-brand-blue-500 outline-none transition-all placeholder:text-slate-400 text-sm" placeholder="0400 000 000" />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[13px] font-semibold text-slate-700">Email Address *</label>
                    <input type="email" required className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-blue-500/20 focus:border-brand-blue-500 outline-none transition-all placeholder:text-slate-400 text-sm" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-[13px] font-semibold text-slate-700">Postcode *</label>
                    <input type="text" required className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-blue-500/20 focus:border-brand-blue-500 outline-none transition-all placeholder:text-slate-400 text-sm" placeholder="e.g. 2000" />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[13px] font-semibold text-slate-700">Property Type *</label>
                    <select required className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-blue-500/20 focus:border-brand-blue-500 outline-none transition-all text-slate-700 text-sm">
                      <option value="">Select type...</option>
                      <option value="residential">Residential Home</option>
                      <option value="commercial">Commercial Business</option>
                      <option value="rural">Rural Property</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-[13px] font-semibold text-slate-700">Average Quarterly Bill (Optional)</label>
                  <select className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-blue-500/20 focus:border-brand-blue-500 outline-none transition-all text-slate-700 text-sm">
                    <option value="">I'm not sure</option>
                    <option value="under-500">Under $500</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-2000">$1,000 - $2,000</option>
                    <option value="over-2000">Over $2,000</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-3.5 rounded-xl font-heading font-bold text-white text-base bg-gradient-to-r from-[#144E9A] to-[#E56D00] hover:shadow-lg hover:shadow-[#E56D00]/25 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex justify-center items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Request My Free Quote"
                  )}
                </button>
                <p className="text-center text-[11px] text-slate-400 mt-3">
                  Your information is secure. We'll only use it to provide your quote.
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
