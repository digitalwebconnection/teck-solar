export interface StatItem {
  id: string;
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
  badge: string;
  color: "blue" | "orange";
  image: string;
  description: string;
}

export const trustStats: StatItem[] = [
  {
    id: "installations",
    target: 2500,
    suffix: "+",
    label: "Installations Completed",
    badge: "Australia Wide",
    color: "blue",
    image: "/images/hero/installation.webp",
    description:
      "Over 2,500 successful solar installations across Australia, providing sustainable and reliable energy solutions to homes and businesses.",
  },
  {
    id: "capacity",
    target: 50,
    suffix: " MW+",
    label: "Solar Capacity Installed",
    badge: "Clean Energy",
    color: "orange",
    image: "/images/hero/commercial.webp",
    description:
      "Delivering over 50 Megawatts of clean, renewable energy to the grid, significantly reducing carbon footprints and power bills.",
  },
  {
    id: "satisfaction",
    target: 99,
    suffix: "%",
    label: "Customer Satisfaction",
    badge: "★ 4.9/5 Rating",
    color: "blue",
    image: "/images/products/residential.webp",
    description:
      "A consistent 4.9/5 star rating from our customers, reflecting our commitment to quality, transparency, and ongoing support.",
  },
  {
    id: "warranty",
    target: 25,
    suffix: " Yrs",
    label: "Performance Warranty",
    badge: "Tier-1 Guaranteed",
    color: "orange",
    image: "/images/banners/mission-solar.webp",
    description:
      "Backed by an industry-leading 25-year performance warranty on Tier-1 engineered components for absolute peace of mind.",
  },
  {
    id: "carbon",
    target: 100,
    suffix: "k+",
    label: "Tons Carbon Offset",
    badge: "Eco Impact",
    color: "blue",
    image: "/images/products/battery.webp",
    description:
      "Our installations have successfully offset over 100,000 tons of CO2 emissions, actively fighting climate change across the country.",
  },
];
