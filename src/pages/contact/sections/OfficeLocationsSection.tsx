import { useReveal } from "../../../hooks/useReveal";

const offices = [
  {
    city: "Sydney",
    title: "Head Office",
    address: "123 George Street, Sydney NSW 2000",
    phone: "1300 TECK SOLAR",
    email: "sydney@tecksolar.com.au",
    code: "SYD",
    color: "group-hover:text-[#E56D00]/10",
  },
  {
    city: "Melbourne",
    title: "Victoria Branch",
    address: "456 Collins Street, Melbourne VIC 3000",
    phone: "1300 TECK SOLAR",
    email: "melbourne@tecksolar.com.au",
    code: "MEL",
    color: "group-hover:text-[#144E9A]/10",
  },
  {
    city: "Brisbane",
    title: "Queensland Branch",
    address: "789 Queen Street, Brisbane QLD 4000",
    phone: "1300 TECK SOLAR",
    email: "brisbane@tecksolar.com.au",
    code: "BNE",
    color: "group-hover:text-emerald-500/10",
  },
];

export default function OfficeLocationsSection() {
  const officesReveal = useReveal();

  return (
    <section
      className="py-8 lg:py-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200"
      ref={officesReveal.ref}
    >
      <div className="max-w-[1600px] mx-auto w-full">
        <div
          className={`mb-24 max-w-4xl mx-auto text-center transition-all duration-1000 ${officesReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-slate-900 tracking-tighter leading-[1.05] mb-6">
            Visit Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#144E9A] to-[#E56D00]">Offices.</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
            Drop by for a coffee and discuss your solar potential with our local engineering teams across Australia.
          </p>
        </div>

        {/* Minimalist Editorial Columns (NO CARDS) */}
        <div 
          className={`flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-slate-200 border-y border-slate-200 transition-all duration-1000 delay-300 ${officesReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          {offices.map((office, i) => (
            <div
              key={i}
              className="flex-1 py-16 lg:px-16 relative group overflow-hidden first:pl-0 last:pr-0 lg:first:pl-8 lg:last:pr-8"
            >
              {/* Massive Watermark */}
              <div className={`text-[150px] font-heading font-black text-slate-50 absolute top-4 right-8 select-none transition-colors duration-500 -z-10 ${office.color}`}>
                {office.code}
              </div>
              
              <div className="relative z-10">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{office.title}</div>
                <h3 className="text-4xl font-heading font-black text-slate-900 mb-10 group-hover:-translate-y-1 transition-transform duration-300">
                  {office.city}
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-5">
                    <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover:border-[#E56D00] transition-colors duration-300">
                      <svg className="w-5 h-5 text-[#E56D00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <p className="text-slate-600 text-lg leading-relaxed max-w-[200px]">{office.address}</p>
                  </div>
                  
                  <div className="flex items-center gap-5">
                    <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 shadow-sm group-hover:border-[#144E9A] transition-colors duration-300">
                      <svg className="w-5 h-5 text-[#144E9A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="text-slate-900 font-bold hover:text-[#E56D00] transition-colors">{office.phone}</a>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 shadow-sm group-hover:border-emerald-500 transition-colors duration-300">
                      <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <a href={`mailto:${office.email}`} className="text-slate-600 hover:text-emerald-500 transition-colors">{office.email}</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
