import { Link } from "react-router-dom";
import {
  footerQuickLinks as quickLinks,
  footerServices as serviceLinks,
  officeLocations,
} from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 py-14 md:py-16 lg:py-20 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-12 xl:gap-16">
          {/* Brand & Accreditation Column */}
          <div className="space-y-6 sm:col-span-2 lg:col-span-4 xl:col-span-3">
            <Link
              to="/"
              className="inline-block"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                src="/images/logo/logo.svg"
                alt="Teck Solar"
                className="h-12 md:h-20 w-auto object-contain"
              />
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Australia&apos;s trusted clean energy partner delivering premium residential
              and commercial solar systems, battery storage, and EV charging solutions nationwide.
            </p>

            {/* New Energy Tech Consumer Code Badge */}
            <div className="flex items-center gap-3 pt-1">
              <img
                src="/images/logo/new-energy-tech.webp"
                alt="New Energy Tech Consumer Code Approved"
                className="w-12 h-12 object-contain shrink-0"
              />
              <div className="text-[11px] text-slate-400 leading-tight">
                <span className="font-semibold text-slate-200 block">
                  New Energy Tech Consumer Code
                </span>
                <span>Approved Seller Standards</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-white font-semibold text-base mb-5 flex items-center gap-2">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 hover:text-primary-500 transition-colors duration-150 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-white font-semibold text-base mb-5 flex items-center gap-2">
              Our Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 hover:text-primary-500 transition-colors duration-150 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column: 4 Offices & 2 Emails in ONE Column */}
          <div className="sm:col-span-2 lg:col-span-4 xl:col-span-5">
            <h4 className="text-white font-semibold text-base mb-5 flex items-center gap-2">
              Our Locations &amp; Contact
            </h4>

            {/* All 4 Office Addresses in One Single Column */}
            <div className="space-y-3 mb-5">
              {officeLocations.map((office) => (
                <a
                  key={office.id}
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    office.fullAddress
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-slate-400 hover:text-white group transition-colors"
                  title={`View ${office.name} on Google Maps`}
                >
                  <svg
                    className="w-4 h-4 text-primary-500 shrink-0 mt-0.5"
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
                  <div className="text-xs leading-relaxed">
                    <span className="font-semibold text-slate-200 group-hover:text-primary-400 transition-colors">
                      {office.isHeadOffice ? "Head Office: " : `${office.state} Office: `}
                    </span>
                    <span className="text-slate-300 group-hover:text-white transition-colors">
                      {office.address}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Direct Phone & 2 Emails */}
            <div className="pt-4 border-t border-slate-800 space-y-2 text-sm">
              {/* Direct Phone */}
              <div className="flex items-center gap-2.5">
                <svg
                  className="w-4 h-4 text-primary-500 shrink-0"
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
                <a
                  href="tel:+611300134077"
                  className="text-xs sm:text-sm font-semibold text-slate-300 hover:text-primary-400 transition-colors"
                >
                  +61 1300 134 077
                </a>
              </div>

              {/* Direct Email 1 */}
              <div className="flex items-center gap-2.5">
                <svg
                  className="w-4 h-4 text-primary-500 shrink-0"
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
                <a
                  href="mailto:info@teck-solar.com.au"
                  className="text-xs sm:text-sm font-medium text-slate-300 hover:text-primary-400 transition-colors"
                >
                  info@teck-solar.com.au
                </a>
              </div>

              {/* Direct Email 2 */}
              <div className="flex items-center gap-2.5">
                <svg
                  className="w-4 h-4 text-primary-500 shrink-0"
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
                <a
                  href="mailto:sales@tecksolar.com.au"
                  className="text-xs sm:text-sm font-medium text-slate-300 hover:text-primary-400 transition-colors"
                >
                  sales@tecksolar.com.au
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Bottom Copyright Bar */}
      <div className="border-t border-slate-800 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-white w-full text-center">
          <div className="flex-1 lg:text-left">
            <p>
              &copy; {new Date().getFullYear()} Teck Solar. All rights reserved.
            </p>
          </div>

          <div className="flex-1 text-slate-400">
            <p>
              Developed by{" "}
              <a
                href="https://digitalwebconnection.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-400 transition-colors font-medium"
              >
                Digital Web Connection
              </a>
            </p>
          </div>

          <div className="flex-1 flex items-center justify-center lg:justify-end gap-5">
            <Link
              to="/terms"
              className="hover:text-primary-600 transition-colors"
            >
              Terms &amp; Conditions
            </Link>
            <span className="text-slate-700">•</span>
            <Link
              to="/privacy"
              className="hover:text-primary-600 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
