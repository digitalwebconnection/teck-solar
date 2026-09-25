import { useReveal } from "../../../hooks/useReveal";

const office = {
  address: "Lvl 1/5 George St, North Strathfield NSW 2137, Australia",
  email: "sales@tecksolar.com.au",
  phone: "+61 1300 134 077",
};

export default function OfficeLocationsSection() {
  const officeReveal = useReveal();

  return (
    <section
      className="border-t border-slate-200 bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
      ref={officeReveal.ref}
    >
      <div className="mx-auto w-full max-w-5xl">
        <div
          className={`mb-10 text-center transition-all duration-700 ${officeReveal.visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-600">Visit Us</p>
          <h2 className="mt-3 font-heading text-3xl font-black text-slate-900 sm:text-4xl">Our Head Office</h2>
        </div>

        <article
          className={`mx-auto grid max-w-4xl overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_18px_45px_-28px_rgba(15,23,42,0.35)] transition-all duration-700 delay-150 md:grid-cols-[1.35fr_0.65fr] ${officeReveal.visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <div className="p-7 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Head Office</p>
            <h3 className="mt-3 font-heading text-3xl font-black text-slate-900 sm:text-4xl">North Strathfield</h3>

            <div className="mt-8 space-y-5 border-t border-slate-100 pt-7">
              <div className="grid grid-cols-[2.5rem_1fr] items-start gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657 13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </span>
                <p className="pt-2 text-sm leading-6 text-slate-600 sm:text-base">{office.address}</p>
              </div>

              <div className="grid grid-cols-[2.5rem_1fr] items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5Z" />
                  </svg>
                </span>
                <a className="font-semibold text-slate-900 transition-colors hover:text-primary-600" href="tel:+611300134077">{office.phone}</a>
              </div>

              <div className="grid grid-cols-[2.5rem_1fr] items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z" />
                  </svg>
                </span>
                <a className="break-all text-sm font-medium text-slate-700 transition-colors hover:text-primary-600 sm:text-base" href={`mailto:${office.email}`}>{office.email}</a>
              </div>
            </div>
          </div>

          <div className="relative flex min-h-52 flex-col justify-end overflow-hidden bg-slate-900 p-7 text-white sm:p-10">
            <p className="relative z-10 text-xs font-bold uppercase tracking-[0.18em] text-primary-300">New South Wales</p>
            <p className="relative z-10 mt-2 font-heading text-2xl font-black">North Strathfield</p>
            <span className="pointer-events-none absolute -right-5 -top-10 font-heading text-[10rem] font-black leading-none text-white/[0.07]">NSW</span>
            <span className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-primary-500" />
          </div>
        </article>
      </div>
    </section>
  );
}
