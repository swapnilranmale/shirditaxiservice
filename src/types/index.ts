export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  href: string;
}

export interface TourPackage {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  duration: string;
  distance?: string;
  startingPrice: number;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  importantNotes: string[];
  closedOn?: string;
  category: "jyotirlinga" | "heritage" | "spiritual" | "family";
  featured: boolean;
}

export interface Vehicle {
  id: string;
  name: string;
  category: "sedan" | "suv" | "premium" | "tempo-traveller" | "mini-bus";
  passengerCapacity: number;
  luggageCapacity: number;
  hasAC: boolean;
  features: string[];
  pricePerKm?: number;
  description: string;
}
