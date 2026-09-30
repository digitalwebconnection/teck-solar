import { useQuoteModal } from '@/features/quote';
import { Phone } from 'lucide-react';

export default function AboutCtaSection() {
  const { openModal } = useQuoteModal();

  return (
    <section className="bg-brand-orange bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent py-8 lg:py-10 border-t border-orange-400">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="text-center md:text-left flex-1">
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-white mb-1">
              Ready to make the switch to solar?
            </h2>
            <p className="text-orange-50 font-medium text-sm md:text-base">
              Get a free, no-obligation consultation with our engineers today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button 
              onClick={openModal} 
              className="w-full sm:w-auto px-8 py-3 bg-brand-blue-900 hover:bg-brand-blue-800 text-white font-bold rounded-full transition-transform hover:-translate-y-0.5 text-sm md:text-base shadow-[0_4px_14px_0_rgba(8,28,55,0.4)] flex items-center justify-center whitespace-nowrap"
            >
              Get Free Quote
            </button>
            <a 
              href="tel:1300134077"
              className="w-full sm:w-auto px-8 py-3 bg-white hover:bg-slate-50 text-brand-orange font-bold rounded-full transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm md:text-base shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              1300 134 077
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
