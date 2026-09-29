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

export interface OfficeLocation {
  id: string;
  name: string;
  badge: string;
  suburb: string;
  region: string;
  state: string;
  stateFull: string;
  street: string;
  locality: string;
  address: string;
  fullAddress: string;
  isHeadOffice?: boolean;
}

export const officeLocations: OfficeLocation[] = [
  {
    id: "nsw",
    name: "NSW Head Office",
    badge: "Head Office",
    suburb: "North Strathfield",
    region: "Sydney Metro",
    state: "NSW",
    stateFull: "New South Wales",
    street: "Level 1, 5 George St",
    locality: "North Strathfield NSW 2137",
    address: "Level 1, 5 George St, North Strathfield NSW 2137",
    fullAddress: "Level 1, 5 George St, North Strathfield NSW 2137, Australia",
    isHeadOffice: true,
  },
  {
    id: "sa",
    name: "SA Office",
    badge: "SA Branch",
    suburb: "Adelaide",
    region: "Adelaide CBD",
    state: "SA",
    stateFull: "South Australia",
    street: "217-255 Flinders St",
    locality: "Adelaide SA 5000",
    address: "217-255 Flinders St, Adelaide SA 5000",
    fullAddress: "217-255 Flinders St, Adelaide SA 5000, Australia",
    isHeadOffice: false,
  },
  {
    id: "wa",
    name: "WA Office",
    badge: "WA Branch",
    suburb: "Mandurah",
    region: "Mandurah & Perth Region",
    state: "WA",
    stateFull: "Western Australia",
    street: "22 Ormsby Terrace",
    locality: "Mandurah WA 6210",
    address: "22 Ormsby Terrace, Mandurah WA 6210",
    fullAddress: "22 Ormsby Terrace, Mandurah WA 6210, Australia",
    isHeadOffice: false,
  },
  {
    id: "vic",
    name: "VIC Office",
    badge: "VIC Branch",
    suburb: "Carlton",
    region: "Melbourne Metro",
    state: "VIC",
    stateFull: "Victoria",
    street: "Suite 250, 139 Cardigan St",
    locality: "Carlton VIC 3053",
    address: "Suite 250, 139 Cardigan St, Carlton VIC 3053",
    fullAddress: "Suite 250, 139 Cardigan St, Carlton VIC 3053, Australia",
    isHeadOffice: false,
  },
];

export const contactEmails = [
  {
    label: "General Enquiries",
    email: "info@teck-solar.com.au",
  },
  {
    label: "Sales & Support",
    email: "sales@tecksolar.com.au",
  },
];

export const contactDetails = {
  phone: "+61 1300 134 077",
  phoneRaw: "+611300134077",
  email: "info@teck-solar.com.au",
  salesEmail: "sales@tecksolar.com.au",
  address: "Level 1, 5 George St, North Strathfield NSW 2137, Australia",
  hours: "Mon - Fri: 8:00 AM - 6:00 PM AEST",
};
