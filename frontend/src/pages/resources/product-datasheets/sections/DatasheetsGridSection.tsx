import { useState, useMemo } from 'react';
import { useReveal } from '../../../../hooks/useReveal';

const datasheets = [
  { name: 'Jinko Tiger Neo 440W', category: 'Solar Panels', code: 'JKM440N-54HL4-V', description: 'High-efficiency N-type monocrystalline panel.' },
  { name: 'LONGi Hi-MO 6', category: 'Solar Panels', code: 'LR5-54HTH-430M', description: 'HPBC cell technology for superior low-light performance.' },
  { name: 'Canadian Solar HiKu7', category: 'Solar Panels', code: 'CS7L-600MS', description: 'Tier-1 panel with excellent temperature coefficient.' },
  { name: 'Fronius Primo GEN24', category: 'Inverters', code: 'PRIMO-6.0-1', description: 'Hybrid inverter with integrated backup power.' },
  { name: 'SMA Sunny Boy', category: 'Inverters', code: 'SB5.0-1AV-41', description: 'Industry-leading string inverter.' },
  { name: 'Enphase IQ8', category: 'Inverters', code: 'IQ8A-72-2-US', description: 'Module-level microinverters for maximum harvest.' },
  { name: 'Tesla Powerwall 2', category: 'Batteries', code: 'PW2-AC', description: '13.5kWh lithium-ion AC-coupled battery.' },
  { name: 'BYD Battery-Box HVS', category: 'Batteries', code: 'HVS-5.1', description: 'Modular high-voltage LFP battery.' },
  { name: 'Sungrow SBR256', category: 'Batteries', code: 'SBR256', description: 'Stackable LFP battery with 15-year warranty.' },
  { name: 'ABB Terra AC', category: 'EV Chargers', code: 'TAC-W22', description: '22kW smart EV charger with RFID access.' },
  { name: 'Fronius Wattpilot', category: 'EV Chargers', code: 'WATTPILOT-22', description: 'Solar-optimised smart EV charger.' },
  { name: 'Clenergy System', category: 'Mounting', code: 'PV-EZRACK', description: 'Australian-designed roof mounting rails.' },
];

const categories = ['All', 'Solar Panels', 'Inverters', 'Batteries', 'EV Chargers', 'Mounting'];

export default function DatasheetsGridSection() {
  const gridReveal = useReveal();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDatasheets = useMemo(() => {
    return datasheets.filter((ds) => {
      const matchesCategory = activeCategory === 'All' || ds.category === activeCategory;
      const matchesSearch = ds.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            ds.code.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section className="w-full pb-16 lg:pb-24 animate-slide-up" ref={gridReveal.ref} style={{ animationDelay: '200ms' }}>
      
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start relative mt-12 lg:mt-0">
        
        {/* Left Column: Sticky Oversized Index & Search */}
        <aside className="w-full lg:w-1/4 shrink-0 lg:sticky lg:top-12 border-b lg:border-b-0 border-slate-200 pb-8 lg:pb-0">
          
          {/* Sleek Editorial Search */}
          <div className="relative mb-12 lg:mb-16">
            <input
              type="text"
              placeholder="Search products or codes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-lg font-medium text-slate-900 placeholder-slate-500 border-b-2 border-slate-300 focus:border-slate-900 focus:outline-none pb-3 transition-colors pr-8"
            />
            {searchQuery ? (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-0 top-1 text-slate-900 hover:text-amber-500 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            ) : (
              <div className="absolute right-0 top-1 text-slate-500 pointer-events-none">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
            )}
          </div>

          <h3 className="text-xs font-bold text-black uppercase tracking-widest mb-8">Filter by Category</h3>
          <nav className="flex flex-row overflow-x-auto lg:overflow-visible lg:flex-col gap-6 lg:gap-4 pb-4 lg:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-left text-xl lg:text-3xl font-heading font-black tracking-tight whitespace-nowrap transition-all duration-300  cursor-pointer ${
                  activeCategory === cat
                    ? 'text-amber-500 translate-x-2'
                    : 'text-slate-300 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>
        </aside>

        {/* Right Column: Interactive Document List */}
        <div className="w-full lg:w-3/4">
          
          <div className="flex items-end justify-between border-b-2 border-slate-900 pb-4 mb-2">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-widest">Document</span>
            <span className="text-xs font-bold text-slate-900 uppercase tracking-widest">Action</span>
          </div>

          {filteredDatasheets.length > 0 ? (
            <div className="flex flex-col">
              {filteredDatasheets.map((ds) => (
                <div
                  key={ds.name}
                  className="group relative border-b border-slate-200 hover:border-slate-900 transition-colors duration-500 overflow-hidden"
                >
                  {/* Hover Fill Background */}
                  <div className="absolute inset-0 bg-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  
                  {/* Row Content */}
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 px-4 py-8 lg:py-12 transition-colors duration-500">
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">{ds.category}</span>
                        <span className="text-xs font-medium text-slate-400 group-hover:text-slate-500 transition-colors">{ds.code}</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-slate-900 group-hover:text-white transition-colors duration-500 tracking-tight">
                        {ds.name}
                      </h3>
                      <p className="text-slate-500 group-hover:text-slate-400 text-sm md:text-base mt-4 max-w-xl transition-colors duration-500">
                        {ds.description}
                      </p>
                    </div>

                    {/* Download Action (Massive Arrow) */}
                    <button
                      type="button"
                      aria-label={`Download PDF for ${ds.name}`}
                      className="shrink-0 flex items-center gap-4 text-slate-300 group-hover:text-amber-500 transition-all duration-500 cursor-pointer"
                    >
                      <span className="text-sm font-bold uppercase tracking-widest opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100 hidden md:block">
                        Download PDF
                      </span>
                      <svg className="w-12 h-12 lg:w-16 lg:h-16 transform group-hover:scale-110 group-hover:rotate-45 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full py-32 flex flex-col items-start border-b border-slate-200">
              <h3 className="text-4xl lg:text-6xl font-heading font-black text-slate-300">NO RESULTS FOUND</h3>
              <p className="text-lg text-slate-500 mt-6 max-w-md">
                We couldn't find any specifications matching "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                className="mt-12 text-sm font-bold text-amber-500 uppercase tracking-widest hover:text-slate-900 transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
