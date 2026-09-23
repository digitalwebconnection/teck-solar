import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import newEnergyTechLogo from "../../assets/New-ene.webp";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact Us", path: "/contact" },
];

const serviceLinks = [
  { label: "Residential Solar", path: "/services/residential-solar" },
  { label: "Commercial Solar", path: "/services/commercial-solar" },
  { label: "Battery Storage", path: "/services/battery-storage" },
  { label: "EV Charger", path: "/services/ev-charger" },
];

const officeLocations = [
  "Level 1, 5 George St North Strathfield NSW 2137",
  "SA office - 217-255 Flinders st Adelaide",
  "22 Ormsby Terrace , Mandurah, WA 6210",
  "Suite 250, 139 Cardigan St, Carlton VIC 3053",
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-200">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-14 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4">
          {/* Brand & Accreditation Column */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="Teck Solar"
                className="h-12 md:h-26 w-auto object-contain"
              />
            </Link>

            {/* New Energy Tech Consumer Code Badge */}
            <div className="flex items-center ">
              <img
                src={newEnergyTechLogo}
                alt="New Energy Tech Consumer Code Approved"
                className="w-14 h-14 object-contain shrink-0"
              />
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 flex items-center gap-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 hover:text-primary-600 transition-colors duration-150 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 flex items-center gap-2">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 hover:text-primary-600 transition-colors duration-150 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 flex items-center gap-2">
              Get in Touch
            </h4>
            <div className="space-y-3.5 text-sm">
              {/* Office Locations */}
              <div className="space-y-2.5">
                {officeLocations.map((address, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2.5 text-slate-400"
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
                    <span className="text-xs leading-relaxed">{address}</span>
                  </div>
                ))}
              </div>

              {/* Direct Phone */}
              <div className="flex items-center gap-2.5 pt-2 border-t border-slate-100">
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
                  href="tel:1300134077"
                  className="text-sm font-semibold text-slate-400 hover:text-primary-600 transition-colors"
                >
                  1300 134 077
                </a>
              </div>

              {/* Direct Email */}
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
                  className="text-sm font-medium text-slate-400 hover:text-primary-600 transition-colors"
                >
                  info@teck-solar.com.au
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Bottom Copyright Bar */}
      <div className="border-t border-slate-200 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-white w-full text-center">
          <div className="flex-1 lg:text-left">
            <p>&copy; {new Date().getFullYear()} Teck Solar. All rights reserved.</p>
          </div>
          
          <div className="flex-1 text-slate-400">
            <p>
              Developed by <a href="https://digitalwebconnection.com/" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-400 transition-colors font-medium">Digital Web Connection</a>
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
