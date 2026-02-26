import type { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

export function createMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    title: {
      template: `%s | ${SITE_CONFIG.name}`,
      default: `${SITE_CONFIG.name} - Premium Taxi & Tour Services in Shirdi`,
    },
    description:
      "RTO authorized premium taxi service in Shirdi. Book luxury cabs, Jyotirlinga darshan tours, hotel reservations & flight bookings. Trusted by thousands of pilgrims.",
    keywords: [
      "Shirdi taxi service",
      "Shirdi cab booking",
      "Sai Baba temple taxi",
      "Jyotirlinga darshan package",
      "Trambakeshwar tour from Shirdi",
      "Shirdi to Bhimashankar",
      "Ellora caves tour",
      "Ajanta caves tour",
      "Shirdi hotel booking",
      "Maharashtra pilgrimage tour",
    ],
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: SITE_CONFIG.name,
    },
    robots: { index: true, follow: true },
    ...overrides,
  };
}
