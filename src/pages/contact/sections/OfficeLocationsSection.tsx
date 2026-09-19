import { useReveal } from "../../../hooks/useReveal";

const offices = [
  {
    city: "Sydney (Head Office)",
    address: "123 George Street, Sydney NSW 2000",
    phone: "(02) 9000 1234",
    email: "sydney@tecksolar.com.au",
  },
  {
    city: "Melbourne",
    address: "456 Collins Street, Melbourne VIC 3000",
    phone: "(03) 9000 5678",
    email: "melbourne@tecksolar.com.au",
  },
  {
    city: "Brisbane",
    address: "789 Queen Street, Brisbane QLD 4000",
    phone: "(07) 3000 9012",
    email: "brisbane@tecksolar.com.au",
  },
];

export default function OfficeLocationsSection() {
  const officesReveal = useReveal();

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-navy-50"
      ref={officesReveal.ref}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div
          className={`text-center mb-14 transition-all duration-700 ${officesReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="text-primary-500 font-heading font-semibold text-sm tracking-widest uppercase">
            Our Locations
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mt-3">
            Office Locations
          </h2>
          <div className="w-16 h-1 bg-primary-500 rounded-full mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offices.map((office, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl p-8 hover:-translate-y-1.5 hover:shadow-xl border border-navy-100 transition-all duration-700 ${officesReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center mb-5">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-heading font-semibold text-navy-900">
                {office.city}
              </h3>
              <p className="text-navy-500 text-sm mt-2">{office.address}</p>
              <div className="mt-4 space-y-2">
                <a
                  href={`tel:${office.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-sm text-navy-600 hover:text-primary-500 transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-primary-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {office.phone}
                </a>
                <a
                  href={`mailto:${office.email}`}
                  className="flex items-center gap-2 text-sm text-navy-600 hover:text-primary-500 transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-primary-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {office.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
