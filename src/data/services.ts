import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "taxi",
    title: "Taxi Services",
    description:
      "Official RTO authorized commercial taxi service with luxury cars for all your travel needs. Available 24/7 for local and outstation trips.",
    icon: "Car",
    features: [
      "RTO Authorized & Licensed",
      "Luxury & Economy Options",
      "24/7 Availability",
      "Corporate Duty Vehicles",
      "Airport Transfers",
      "Experienced Local Drivers",
    ],
    href: "/services#taxi",
  },
  {
    id: "tours",
    title: "Tour Packages",
    description:
      "Curated pilgrimage and heritage tour packages covering Jyotirlinga darshan, Shani Dham, Ellora & Ajanta Caves, and more.",
    icon: "Map",
    features: [
      "Three Jyotirlinga Darshan",
      "Shani Shingnapur Visit",
      "Heritage Cave Tours",
      "Customizable Itineraries",
      "Family Tour Packages",
      "Group Discounts",
    ],
    href: "/tour-packages",
  },
  {
    id: "hotels",
    title: "Hotel Booking",
    description:
      "Premium hotel reservations in Shirdi and across Maharashtra. From 3-star comfort to 5-star luxury, we arrange the perfect stay.",
    icon: "Hotel",
    features: [
      "3 to 5 Star Hotels",
      "Standard & Deluxe Rooms",
      "Premier & Suite Options",
      "Near Temple Locations",
      "Best Rate Guarantee",
      "Verified Properties",
    ],
    href: "/services#hotels",
  },
  {
    id: "flights",
    title: "Flight Booking",
    description:
      "Hassle-free flight booking assistance to reach Shirdi and nearby airports. Let us handle your complete travel planning.",
    icon: "Plane",
    features: [
      "Domestic Flight Booking",
      "Best Fare Search",
      "Airport Pickup Included",
      "Complete Travel Planning",
      "Group Booking Assistance",
      "24/7 Support",
    ],
    href: "/services#flights",
  },
];
