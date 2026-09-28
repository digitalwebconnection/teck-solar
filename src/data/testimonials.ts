export interface Testimonial {
  name: string;
  location: string;
  role: string;
  system: string;
  saving: string;
  rating: number;
  quote: string;
  initials: string;
}

export const testimonialsList: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    location: "Sydney, NSW",
    role: "Residential Homeowner",
    system: "6.6kW Solar + 10kWh Battery",
    saving: "Saved $2,200/year",
    rating: 5,
    initials: "SM",
    quote:
      "Teck Solar transformed our electricity bills completely. From the initial consultation to final commissioning, the team was punctual and respectful of our home. Our quarterly power bill dropped by over 80%!",
  },
  {
    name: "James Chen",
    location: "Melbourne, VIC",
    role: "Commercial Facility Director",
    system: "100kW Commercial Array",
    saving: "ROI in Under 4 Years",
    rating: 5,
    initials: "JC",
    quote:
      "As a warehouse operator, spiralling grid electricity was hurting our margins. Teck Solar engineered a high-yield system that delivered on every performance projection. Exceptional service and zero downtime.",
  },
  {
    name: "David & Emma Thompson",
    location: "Brisbane, QLD",
    role: "Family Homeowners",
    system: "10.5kW Solar + Smart EV Charger",
    saving: "Virtually Off-Grid",
    rating: 5,
    initials: "DT",
    quote:
      "The quality of Tier-1 equipment and flawless installation on our tile roof was outstanding. We now power both our family home and electric vehicle almost entirely with clean Australian sunshine.",
  },
  {
    name: "Marcus Campbell",
    location: "Adelaide, SA",
    role: "Rural Property Owner",
    system: "13.2kW Solar + Dual Battery",
    saving: "Zero Grid Power Bills",
    rating: 5,
    initials: "MC",
    quote:
      "Living rurally, reliability is everything. Teck Solar set up an off-grid capable battery system that has kept our power running through multiple regional grid blackouts without missing a beat.",
  },
  {
    name: "Olivia Reynolds",
    location: "Perth, WA",
    role: "Hospitality Business Owner",
    system: "50kW Commercial Solar",
    saving: "Cut 70% Operating Costs",
    rating: 5,
    initials: "OR",
    quote:
      "From paperwork and Western Power grid approvals to rooftop panel placement, Teck Solar managed every single step seamlessly. Our daytime commercial electricity bills have literally plummeted.",
  },
  {
    name: "Liam & Chloe Watson",
    location: "Gold Coast, QLD",
    role: "Coastal Homeowners",
    system: "8.8kW All-Black System",
    saving: "Saved $1,950 in Year 1",
    rating: 5,
    initials: "LW",
    quote:
      "The aesthetic of the all-black panels blends seamlessly with our roof design. The mobile monitoring app is brilliant — we can track solar generation and household consumption in real-time every day!",
  },
];
