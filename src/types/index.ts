import type { ReactNode } from 'react';

// Navigation Types
export interface NavLinkItem {
  name: string;
  href: string;
  badge?: string;
  description?: string;
  icon?: string;
}

export interface NavDropdownItem {
  title: string;
  items: NavLinkItem[];
}

// Service Types
export interface ServiceBenefit {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServicePageProps {
  title: string;
  bannerImage: string;
  subtitle?: string;
  intro: string;
  introDetail: string;
  benefits: ServiceBenefit[];
  featureImage: string;
  faqs: ServiceFAQ[];
}

export interface ServiceCardItem {
  title: string;
  description: string;
  image: string;
  link: string;
}

// Stats & Impact Types
export interface StatItem {
  id?: string;
  target?: number;
  number?: string;
  suffix?: string;
  symbol?: string;
  label: string;
  sub?: string;
  badge?: string;
  color?: 'blue' | 'orange';
  image?: string;
  bgImage?: string;
  description?: string;
}

// Process Step Types
export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  image: string;
}

// FAQ Types
export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

// Testimonial Types
export interface TestimonialItem {
  name: string;
  location: string;
  quote: string;
  rating: number;
  systemSize?: string;
  verified?: boolean;
}

// Quote Modal & Lead Form Types
export interface QuoteModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export interface QuoteFormData {
  propertyType: string;
  electricityBill: string;
  systemInterest: string[];
  batteryInterest: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  suburb: string;
  postcode: string;
  state: string;
  notes?: string;
}
