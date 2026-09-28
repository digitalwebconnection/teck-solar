export interface NavChild {
  label: string;
  path: string;
  desc?: string;
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

export interface NavItem {
  label: string;
  path: string;
  children?: NavChild[];
}

export const navLinks: NavItem[] = [
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
        label: "SAA Consumer Guide",
        path: "/resources/cec-consumer-guide",
        desc: "Official Clean Energy Council consumer guides & standards.",
        icon: "shield",
      },
    ],
  },
  { label: "Contact Us", path: "/contact" },
];

export const footerQuickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact Us", path: "/contact" },
];

export const footerServices = [
  { label: "Residential Solar", path: "/services/residential-solar" },
  { label: "Commercial Solar", path: "/services/commercial-solar" },
  { label: "Battery Storage", path: "/services/battery-storage" },
  { label: "EV Charger", path: "/services/ev-charger" },
];

export const officeLocations = [
  "Lvl 1/5 George St, North Strathfield NSW 2137, Australia",
];

export const contactDetails = {
  phone: "+61 1300 134 077",
  phoneRaw: "+611300134077",
  email: "info@tecksolar.com.au",
  address: "Lvl 1/5 George St, North Strathfield NSW 2137, Australia",
  hours: "Mon - Fri: 8:00 AM - 6:00 PM AEST",
};
