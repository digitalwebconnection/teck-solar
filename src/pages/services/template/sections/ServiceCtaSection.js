import { useQuoteModal } from '../../../../context/QuoteModalContext';
export default function ServiceCtaSection() {
    const { openModal } = useQuoteModal();
    return (<section className="py-18 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-brand-blue-100 shadow-[0_8px_30px_rgb(20,72,140,0.08)] rounded-3xl overflow-hidden relative flex flex-col items-center justify-center p-12 lg:p-20 gap-10 text-center">
          
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-blue-500 to-primary-500"></div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

          <div className="max-w-3xl relative z-10">
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-brand-blue-900 tracking-tight leading-tight">
              Ready to harness the power of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#144E9A] to-[#E56D00]">clean energy?</span>
            </h2>
            <p className="mt-6 text-slate-600 text-lg sm:text-xl leading-relaxed font-medium">
              Contact our experts today for a free, no-obligation consultation. We'll design the perfect solution tailored specifically to your energy needs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full relative z-10">
            <button type="button" onClick={openModal} className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#E56D00] text-white font-heading font-bold text-lg transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto overflow-hidden shadow-[0_10px_20px_-10px_rgba(229,109,0,0.5)] cursor-pointer">
              <div className="absolute inset-0 bg-[#cc6100] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
              <span className="relative z-10">Get Your Free Quote</span>
              <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
            
            <a href="tel:1300000000" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#144E9A] text-white font-heading font-bold text-lg transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto overflow-hidden shadow-[0_10px_20px_-10px_rgba(20,78,154,0.5)]">
              <div className="absolute inset-0 bg-[#103d7a] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
              <svg className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <span className="relative z-10">Call 1300 000 000</span>
            </a>
          </div>

        </div>
      </div>
    </section>);
}
