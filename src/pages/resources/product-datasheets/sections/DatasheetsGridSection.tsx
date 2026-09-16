import { useReveal } from '../../../../hooks/useReveal';

const datasheets = [
  { name: 'Jinko Tiger Neo 440W Panel', category: 'Solar Panels', description: 'High-efficiency N-type monocrystalline panel with 22.27% module efficiency.' },
  { name: 'LONGi Hi-MO 6 Explorer', category: 'Solar Panels', description: 'HPBC cell technology delivering superior performance in low-light conditions.' },
  { name: 'Canadian Solar HiKu7', category: 'Solar Panels', description: 'Reliable tier-1 panel with excellent temperature coefficient and durability.' },
  { name: 'Fronius Primo GEN24 Plus', category: 'Inverters', description: 'Hybrid inverter with integrated backup power and smart grid functionality.' },
  { name: 'SMA Sunny Boy', category: 'Inverters', description: 'Industry-leading string inverter with advanced shade management.' },
  { name: 'Enphase IQ8 Microinverters', category: 'Inverters', description: 'Module-level power electronics for maximum energy harvest and monitoring.' },
  { name: 'Tesla Powerwall 2', category: 'Batteries', description: '13.5kWh lithium-ion battery with integrated inverter and Storm Watch.' },
  { name: 'BYD Battery-Box Premium HVS', category: 'Batteries', description: 'Modular high-voltage battery with cobalt-free LFP chemistry.' },
  { name: 'Sungrow SBR256', category: 'Batteries', description: 'Stackable lithium iron phosphate battery with 15-year warranty.' },
  { name: 'ABB Terra AC Wallbox', category: 'EV Chargers', description: '22kW smart EV charger with RFID access and OCPP connectivity.' },
  { name: 'Fronius Wattpilot', category: 'EV Chargers', description: 'Solar-optimised EV charger with automatic excess solar charging mode.' },
  { name: 'Clenergy Mounting Systems', category: 'Mounting', description: 'Australian-designed roof mounting rails and brackets for all roof types.' },
];

export default function DatasheetsGridSection() {
  const gridReveal = useReveal();

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white" ref={gridReveal.ref}>
      <div className="max-w-7xl mx-auto w-full">
        <div className={`text-center mb-14 transition-all duration-700 ${gridReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-primary-500 font-heading font-semibold text-sm tracking-widest uppercase">Downloads</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mt-3">Product Datasheets</h2>
          <div className="w-16 h-1 bg-primary-500 rounded-full mx-auto mt-4" />
          <p className="mt-4 text-navy-500 max-w-2xl mx-auto">
            Download detailed technical specifications for all the products we install and recommend.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {datasheets.map((ds, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl border border-navy-100 p-6 hover:-translate-y-1.5 hover:shadow-xl group transition-all duration-700 ${gridReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <span className="text-xs font-semibold text-primary-500 uppercase tracking-wide">{ds.category}</span>
                  <h3 className="text-base font-heading font-semibold text-navy-900 mt-1">{ds.name}</h3>
                  <p className="text-navy-500 text-sm mt-2 leading-relaxed">{ds.description}</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zm-3 11.5v-3h2v3h2l-3 3-3-3h2z" /></svg>
                </div>
              </div>
              <button
                type="button"
                className="mt-5 w-full py-2.5 rounded-lg border-2 border-navy-100 text-navy-600 text-sm font-semibold hover:bg-primary-500 hover:border-primary-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Download PDF
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
