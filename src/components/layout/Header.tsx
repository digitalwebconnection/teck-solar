import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useQuoteModal } from "../../context/QuoteModalContext";
import { Button } from "../ui/button";

interface NavChild {
  label: string;
  path: string;
  desc: string;
  badge?: string;
  icon:
    | "home"
    | "building"
    | "battery"
    | "zap"
    | "document"
    | "wifi"
    | "shield";
}

interface NavItem {
  label: string;
  path: string;
  children?: NavChild[];
}

const navLinks: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  {
    label: "Services",
    path: "/services",
    children: [
      {
        label: "Residential Solar",
        path: "/services/residential-solar",
        desc: "Custom rooftop systems. Save up to 80% on power bills.",
        icon: "home",
      },
      {
        label: "Commercial Solar",
        path: "/services/commercial-solar",
        desc: "High-yield commercial systems with rapid 3-5 yr ROI.",
        icon: "building",
      },
      {
        label: "Battery Storage",
        path: "/services/battery-storage",
        desc: "Tesla, BYD & Sungrow home & commercial battery backups.",
        icon: "battery",
      },
      {
        label: "EV Charger",
        path: "/services/ev-charger",
        desc: "Smart Level-2 fast chargers for homes, fleets & workplaces.",
        icon: "zap",
      },
    ],
  },
  {
    label: "Resources",
    path: "/resources",
    children: [
      {
        label: "Product Datasheets",
        path: "/resources/product-datasheets",
        desc: "Download panel, inverter & battery specifications & warranties.",
        icon: "document",
      },
      {
        label: "WiFi Monitoring Setup",
        path: "/resources/wifi-monitoring",
        desc: "Step-by-step guides to connect your inverter app to WiFi.",
        icon: "wifi",
      },
      {
        label: "CEC Consumer Guide",
        path: "/resources/cec-consumer-guide",
        desc: "Official Clean Energy Council consumer guides & standards.",
        icon: "shield",
      },
    ],
  },
  { label: "Contact Us", path: "/contact" },
];

function RenderDropdownIcon({ icon, className = "w-5 h-5" }: { icon: NavChild["icon"]; className?: string }) {
  switch (icon) {
    case "home":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      );
    case "building":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      );
    case "battery":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      );
    case "zap":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      );
    case "document":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      );
    case "wifi":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
          />
        </svg>
      );
    case "shield":
      return (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { openModal } = useQuoteModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Premium Dark Top Utility Bar */}
      <div className="w-full bg-slate-900 text-slate-300 text-[13px] py-2.5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 w-full gap-y-2">
          
          {/* Left: Contact Info */}
          <div className="flex items-center gap-6">
            {/* Phone */}
            <a
              href="tel:1300000832"
              className="flex items-center gap-2 font-medium text-white hover:text-primary-400 transition-colors group"
            >
              <svg
                className="w-4 h-4 text-primary-500 group-hover:scale-110 transition-transform"
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
              <span>1300 000 TECK</span>
            </a>

            {/* Separator */}
            <span className="hidden sm:inline-block w-px h-4 bg-slate-700"></span>

            {/* Email */}
            <a
              href="mailto:info@tecksolar.com.au"
              className="hidden sm:flex items-center gap-2 font-medium hover:text-white transition-colors"
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
              <span>info@tecksolar.com.au</span>
            </a>
          </div>

          {/* Right: Badges & Social */}
          <div className="flex items-center gap-5 ml-auto">
            {/* Accreditation Badge */}
            <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded text-white text-xs font-semibold">
              <span>⚡</span>
              <span>CEC Accredited</span>
            </div>

            {/* Separator */}
            <span className="hidden sm:inline-block w-px h-4 bg-slate-700"></span>

            {/* WhatsApp */}
            <a
              href="https://wa.me/61400000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-medium hover:text-green-400 transition-colors group"
            >
              <svg
                className="w-4 h-4 text-green-500 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - STICKS cleanly to top: 0 with zero layout shift & stable height */}
      <header
        className={`sticky top-0 z-50 w-full bg-white border-b border-slate-200 transition-shadow duration-200 ${
          scrolled ? "shadow-md shadow-slate-900/8" : "shadow-xs"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo - Crisp on White */}
            <Link 
              to="/" 
              className="flex items-center py-2 shrink-0 group relative z-50"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img
                src={logo}
                alt="Teck Solar"
                className="h-14 md:h-16 max-h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
              {navLinks.map((item) => {
                const isChildActive = item.children?.some(
                  (c) => location.pathname === c.path,
                );
                const isActive =
                  location.pathname === item.path || isChildActive;

                return (
                  <div
                    key={item.label}
                    className="relative nav-item"
                    onMouseEnter={() =>
                      item.children && setOpenDropdown(item.label)
                    }
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      to={item.children ? "#" : item.path}
                      onClick={(e) => item.children && e.preventDefault()}
                      className={`px-4 py-2 rounded-full text-[15px] font-heading font-semibold transition-all duration-200 flex items-center gap-1.5
                        ${
                          isActive || openDropdown === item.label
                            ? "text-primary-600 bg-primary-50"
                            : "text-slate-700 hover:text-primary-600 hover:bg-slate-50"
                        }`}
                    >
                      <span>{item.label}</span>
                      {item.children && (
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 group-hover:text-primary-600 ${
                            openDropdown === item.label
                              ? "rotate-180 text-primary-600"
                              : "text-slate-400"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </Link>

                    {/* Services Mega Dropdown */}
                    {item.label === "Services" && item.children && (
                      <div
                        className={`absolute top-full left-0 pt-4 w-[680px] max-w-[calc(100vw-2rem)] transition-all duration-200 ${
                          openDropdown === item.label
                            ? "opacity-100 visible translate-y-0"
                            : "opacity-0 invisible -translate-y-2 pointer-events-none"
                        }`}
                      >
                        <div className="bg-white rounded-md shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-slate-200 p-6 overflow-hidden">

                          {/* 2-Column Grid */}
                          <div className="grid grid-cols-2 gap-4">
                            {item.children.map((child) => {
                              const isCurrent =
                                location.pathname === child.path ||
                                (child.label === "Residential Solar" &&
                                  location.pathname === "/services"); // For demo matching the active state

                              // Determine color palette based on icon/category
                              let colorTheme = {
                                activeCardBg: "bg-primary-50/50 border-primary-100",
                                activeIconBg: "bg-white border-primary-200 text-primary-600 shadow-md shadow-primary-500/10",
                                activeText: "text-primary-700",
                                cardHoverBg: "hover:bg-primary-50/30 hover:border-primary-100",
                                iconHoverBg: "group-hover/item:bg-white",
                                iconHoverBorder: "group-hover/item:border-primary-200",
                                iconHoverColor: "group-hover/item:text-primary-600",
                                iconHoverShadow: "group-hover/item:shadow-md group-hover/item:shadow-primary-500/10",
                                textHover: "group-hover/item:text-primary-700",
                                badgeBg: "bg-primary-50",
                                badgeText: "text-primary-600",
                                badgeHoverBg: "group-hover/item:bg-primary-100",
                              };

                              if (child.icon === "building") {
                                colorTheme = {
                                  activeCardBg: "bg-blue-50/50 border-blue-100",
                                  activeIconBg: "bg-white border-blue-200 text-blue-600 shadow-md shadow-blue-500/10",
                                  activeText: "text-blue-700",
                                  cardHoverBg: "hover:bg-blue-50/30 hover:border-blue-100",
                                  iconHoverBg: "group-hover/item:bg-white",
                                  iconHoverBorder: "group-hover/item:border-blue-200",
                                  iconHoverColor: "group-hover/item:text-blue-600",
                                  iconHoverShadow: "group-hover/item:shadow-md group-hover/item:shadow-blue-500/10",
                                  textHover: "group-hover/item:text-blue-700",
                                  badgeBg: "bg-blue-50",
                                  badgeText: "text-blue-600",
                                  badgeHoverBg: "group-hover/item:bg-blue-100",
                                };
                              } else if (child.icon === "battery") {
                                colorTheme = {
                                  activeCardBg: "bg-eco-50/50 border-eco-100",
                                  activeIconBg: "bg-white border-eco-200 text-eco-600 shadow-md shadow-eco-500/10",
                                  activeText: "text-eco-700",
                                  cardHoverBg: "hover:bg-eco-50/30 hover:border-eco-100",
                                  iconHoverBg: "group-hover/item:bg-white",
                                  iconHoverBorder: "group-hover/item:border-eco-200",
                                  iconHoverColor: "group-hover/item:text-eco-600",
                                  iconHoverShadow: "group-hover/item:shadow-md group-hover/item:shadow-eco-500/10",
                                  textHover: "group-hover/item:text-eco-700",
                                  badgeBg: "bg-eco-50",
                                  badgeText: "text-eco-600",
                                  badgeHoverBg: "group-hover/item:bg-eco-100",
                                };
                              } else if (child.icon === "zap") {
                                colorTheme = {
                                  activeCardBg: "bg-amber-50/50 border-amber-100",
                                  activeIconBg: "bg-white border-amber-200 text-amber-600 shadow-md shadow-amber-500/10",
                                  activeText: "text-amber-700",
                                  cardHoverBg: "hover:bg-amber-50/30 hover:border-amber-100",
                                  iconHoverBg: "group-hover/item:bg-white",
                                  iconHoverBorder: "group-hover/item:border-amber-200",
                                  iconHoverColor: "group-hover/item:text-amber-600",
                                  iconHoverShadow: "group-hover/item:shadow-md group-hover/item:shadow-amber-500/10",
                                  textHover: "group-hover/item:text-amber-700",
                                  badgeBg: "bg-amber-50",
                                  badgeText: "text-amber-600",
                                  badgeHoverBg: "group-hover/item:bg-amber-100",
                                };
                              }

                              return (
                                <Link
                                  key={child.path}
                                  to={child.path}
                                  className={`group/item flex items-start gap-4 p-4 rounded-md transition-all duration-300 border ${
                                    isCurrent
                                      ? colorTheme.activeCardBg
                                      : `border-transparent ${colorTheme.cardHoverBg}`
                                  }`}
                                >
                                  <div
                                    className={`w-12 h-12 rounded-md flex items-center justify-center shrink-0 border transition-all duration-300 ${
                                      isCurrent
                                        ? colorTheme.activeIconBg
                                        : `bg-slate-50 border-slate-200 text-slate-400 ${colorTheme.iconHoverBg} ${colorTheme.iconHoverBorder} ${colorTheme.iconHoverColor} ${colorTheme.iconHoverShadow}`
                                    }`}
                                  >
                                    <RenderDropdownIcon icon={child.icon} className="w-6 h-6 transition-transform duration-300 group-hover/item:scale-110" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                      <span
                                        className={`text-[15px] font-heading font-bold transition-colors ${
                                          isCurrent
                                            ? colorTheme.activeText
                                            : `text-slate-700 ${colorTheme.textHover}`
                                        }`}
                                      >
                                        {child.label}
                                      </span>
                                    </div>
                                    <p className={`text-[13px] mt-1 line-clamp-2 leading-relaxed transition-colors ${
                                      isCurrent ? "text-slate-600" : "text-slate-500 group-hover/item:text-slate-600"
                                    }`}>
                                      {child.desc}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>  
                        </div>
                      </div>
                    )}

                    {/* Resources Dropdown Panel */}
                    {item.label === "Resources" && item.children && (
                      <div
                        className={`absolute top-full left-0 pt-4 w-[680px] max-w-[calc(100vw-2rem)] transition-all duration-200 ${
                          openDropdown === item.label
                            ? "opacity-100 visible translate-y-0"
                            : "opacity-0 invisible -translate-y-2 pointer-events-none"
                        }`}
                      >
                        <div className="bg-white rounded-md shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-slate-200 p-6 overflow-hidden">
                          <div className="grid grid-cols-2 gap-4">
                            {item.children.map((child) => {
                              const isCurrent =
                                location.pathname === child.path;

                              // Determine color palette based on icon/category
                              let colorTheme = {
                                activeCardBg: "bg-primary-50/50 border-primary-100",
                                activeIconBg: "bg-white border-primary-200 text-primary-600 shadow-md shadow-primary-500/10",
                                activeText: "text-primary-700",
                                cardHoverBg: "hover:bg-primary-50/30 hover:border-primary-100",
                                iconHoverBg: "group-hover/item:bg-white",
                                iconHoverBorder: "group-hover/item:border-primary-200",
                                iconHoverColor: "group-hover/item:text-primary-600",
                                iconHoverShadow: "group-hover/item:shadow-md group-hover/item:shadow-primary-500/10",
                                textHover: "group-hover/item:text-primary-700",
                                badgeBg: "bg-primary-50",
                                badgeText: "text-primary-600",
                                badgeHoverBg: "group-hover/item:bg-primary-100",
                              };

                              if (child.icon === "wifi") {
                                colorTheme = {
                                  activeCardBg: "bg-blue-50/50 border-blue-100",
                                  activeIconBg: "bg-white border-blue-200 text-blue-600 shadow-md shadow-blue-500/10",
                                  activeText: "text-blue-700",
                                  cardHoverBg: "hover:bg-blue-50/30 hover:border-blue-100",
                                  iconHoverBg: "group-hover/item:bg-white",
                                  iconHoverBorder: "group-hover/item:border-blue-200",
                                  iconHoverColor: "group-hover/item:text-blue-600",
                                  iconHoverShadow: "group-hover/item:shadow-md group-hover/item:shadow-blue-500/10",
                                  textHover: "group-hover/item:text-blue-700",
                                  badgeBg: "bg-blue-50",
                                  badgeText: "text-blue-600",
                                  badgeHoverBg: "group-hover/item:bg-blue-100",
                                };
                              } else if (child.icon === "shield") {
                                colorTheme = {
                                  activeCardBg: "bg-eco-50/50 border-eco-100",
                                  activeIconBg: "bg-white border-eco-200 text-eco-600 shadow-md shadow-eco-500/10",
                                  activeText: "text-eco-700",
                                  cardHoverBg: "hover:bg-eco-50/30 hover:border-eco-100",
                                  iconHoverBg: "group-hover/item:bg-white",
                                  iconHoverBorder: "group-hover/item:border-eco-200",
                                  iconHoverColor: "group-hover/item:text-eco-600",
                                  iconHoverShadow: "group-hover/item:shadow-md group-hover/item:shadow-eco-500/10",
                                  textHover: "group-hover/item:text-eco-700",
                                  badgeBg: "bg-eco-50",
                                  badgeText: "text-eco-600",
                                  badgeHoverBg: "group-hover/item:bg-eco-100",
                                };
                              }

                              return (
                                <Link
                                  key={child.path}
                                  to={child.path}
                                  className={`group/item flex items-start gap-4 p-4 rounded-md transition-all duration-300 border ${
                                    isCurrent
                                      ? colorTheme.activeCardBg
                                      : `border-transparent ${colorTheme.cardHoverBg}`
                                  }`}
                                >
                                  <div
                                    className={`w-12 h-12 rounded-md flex items-center justify-center shrink-0 border transition-all duration-300 ${
                                      isCurrent
                                        ? colorTheme.activeIconBg
                                        : `bg-slate-50 border-slate-200 text-slate-400 ${colorTheme.iconHoverBg} ${colorTheme.iconHoverBorder} ${colorTheme.iconHoverColor} ${colorTheme.iconHoverShadow}`
                                    }`}
                                  >
                                    <RenderDropdownIcon icon={child.icon} className="w-6 h-6 transition-transform duration-300 group-hover/item:scale-110" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                      <span
                                        className={`text-[15px] font-heading font-bold transition-colors ${
                                          isCurrent
                                            ? colorTheme.activeText
                                            : `text-slate-700 ${colorTheme.textHover}`
                                        }`}
                                      >
                                        {child.label}
                                      </span>
                                    </div>
                                    <p className={`text-[13px] mt-1 line-clamp-2 leading-relaxed transition-colors ${
                                      isCurrent ? "text-slate-600" : "text-slate-500 group-hover/item:text-slate-600"
                                    }`}>
                                      {child.desc}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>


            {/* Desktop Right CTA Section */}
            
            <div className="flex items-center gap-3 xl:gap-4">
              {/* Primary Get a Quote Button */}
              <Button onClick={openModal}>
                Get a Free Quote
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover/button:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Button>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                className="lg:hidden p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500/40"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle navigation menu"
              >
                {mobileOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Clean White Theme with Backdrop Blur) */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${
          mobileOpen
            ? "visible pointer-events-auto"
            : "invisible pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-slate-900/35 backdrop-blur-xs transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer Content */}
        <div
          className={`absolute right-0 top-0 h-full w-84 max-w-[85vw] bg-white border-l border-slate-200 shadow-2xl flex flex-col transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Top Header */}
          <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center"
            >
              <img
                src={logo}
                alt="Teck Solar"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <button
              type="button"
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Rebate banner inside mobile drawer */}
          <div className="bg-primary-50 px-4 py-2 text-xs text-primary-800 border-b border-primary-100 flex items-center gap-1.5 font-medium">
            <span>☀️</span>
            <span>Australian Rebates Up to $1,400 Available</span>
          </div>

          {/* Drawer Navigation Links */}
          <div className="flex-1 overflow-y-auto p-4 space-y-1">
            {navLinks.map((item) => {
              const isChildActive = item.children?.some(
                (c) => location.pathname === c.path,
              );
              const isActive = location.pathname === item.path || isChildActive;

              if (item.children) {
                const isOpen = openDropdown === item.label;
                return (
                  <div
                    key={item.label}
                    className="border-b border-slate-100 pb-1 mb-1"
                  >
                    <button
                      type="button"
                      className={`w-full flex items-center justify-between px-3 py-3 rounded-xl text-sm font-heading font-semibold transition-colors ${
                        isActive || isOpen
                          ? "text-primary-600 bg-primary-50"
                          : "text-slate-700 hover:text-primary-600 hover:bg-slate-50"
                      }`}
                      onClick={() =>
                        setOpenDropdown(isOpen ? null : item.label)
                      }
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180 text-primary-600" : "text-slate-400"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-200 space-y-1 pl-2 pt-1 ${
                        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      {item.children.map((child) => {
                        const isCurrent = location.pathname === child.path;
                        return (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`flex items-start gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${
                              isCurrent
                                ? "text-primary-600 font-semibold bg-primary-50"
                                : "text-slate-600 hover:text-primary-600 hover:bg-slate-50"
                            }`}
                          >
                            <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                              <RenderDropdownIcon icon={child.icon} />
                            </div>
                            <div className="flex-1">
                              <span className="block font-heading font-bold text-slate-800">
                                {child.label}
                              </span>
                              <span className="block text-xs text-slate-400 line-clamp-1">
                                {child.desc}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`block px-3 py-3 rounded-xl text-sm font-heading font-semibold transition-colors ${
                    isActive
                      ? "text-primary-600 bg-primary-50 font-bold"
                      : "text-slate-700 hover:text-primary-600 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Drawer Bottom Actions & Contacts */}
          <div className="p-4 border-t border-slate-200 bg-slate-50 space-y-2.5">
            <Button
              onClick={() => { openModal(); setMobileOpen(false); }}
              className="w-full"
            >
              Get a Free Quote
            </Button>

            <div className="grid grid-cols-2 gap-2 text-center text-xs">
              <a
                href="tel:1300000832"
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 hover:border-primary-500 transition-colors flex flex-col items-center gap-1 shadow-xs font-semibold"
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
                <span>Call 1300</span>
              </a>

              <a
                href="https://wa.me/61400000000"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 hover:border-eco-500 transition-colors flex flex-col items-center gap-1 shadow-xs font-semibold"
              >
                <svg
                  className="w-4 h-4 text-eco-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
