import { useReveal } from '../../../../hooks/useReveal';

export default function WiFiHelpSection() {
  const helpReveal = useReveal();

  return (
    <section className="bg-white pb-16">
      <div className="max-w-4xl mx-auto px-4 w-full">
        <div className={`bg-navy-50 rounded-2xl p-8 text-center border border-navy-100 transition-all duration-700 delay-500 ${helpReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} ref={helpReveal.ref}>
          <h3 className="text-xl font-heading font-semibold text-navy-900">Need Help?</h3>
          <p className="text-navy-500 mt-2">
            If you're having trouble connecting your system, our support team is here to help.
          </p>
          <a
            href="tel:1300000000"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-heading font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 hover:-translate-y-0.5 shadow-md shadow-primary-500/25 transition-all mt-4 mx-auto"
          >
            Call 1300 000 000
          </a>
        </div>
      </div>
    </section>
  );
}
