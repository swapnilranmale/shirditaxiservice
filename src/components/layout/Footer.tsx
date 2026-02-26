import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { navItems } from "@/data/navigation";
import { Container } from "@/components/ui/Container";

const serviceLinks = [
  { label: "Taxi Service", href: "/services#taxi" },
  { label: "Tour Packages", href: "/tour-packages" },
  { label: "Hotel Booking", href: "/services#hotels" },
  { label: "Flight Booking", href: "/services#flights" },
  { label: "Corporate Service", href: "/services#taxi" },
];

const popularTours = [
  { label: "Three Jyotirlinga Darshan", href: "/tour-packages/three-jyotirlinga-darshan" },
  { label: "Shani Shingnapur", href: "/tour-packages/shani-shingnapur-darshan" },
  { label: "Ellora Caves", href: "/tour-packages/ellora-caves-tour" },
  { label: "Ajanta Caves", href: "/tour-packages/ajanta-caves-tour" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-brand-950">
      <Container>
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-saffron-400 to-gold-400 text-brand-950 font-heading font-bold text-lg">
                S
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg font-bold text-white leading-tight">
                  Shirdi Taxi
                </span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-saffron-400/80">
                  Service
                </span>
              </div>
            </Link>
            <p className="text-sm text-warm-400 leading-relaxed mb-4">
              Your trusted pilgrimage & travel partner in Shirdi. RTO authorized premium taxi service for all your travel needs.
            </p>
            <p className="font-devanagari text-saffron-400 text-lg">
              {SITE_CONFIG.greeting}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-warm-400 transition-colors hover:text-saffron-400"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-warm-400 transition-colors hover:text-saffron-400"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-start gap-3 text-sm text-warm-400 hover:text-saffron-400 transition-colors"
                >
                  <Phone className="h-4 w-4 mt-0.5 shrink-0 text-saffron-400" />
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.emailBusiness}`}
                  className="flex items-start gap-3 text-sm text-warm-400 hover:text-saffron-400 transition-colors"
                >
                  <Mail className="h-4 w-4 mt-0.5 shrink-0 text-saffron-400" />
                  {SITE_CONFIG.emailBusiness}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-warm-400">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-saffron-400" />
                {SITE_CONFIG.address}
              </li>
              <li className="flex items-start gap-3 text-sm text-warm-400">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 text-saffron-400" />
                Available 24/7 by Appointment
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
            <p className="text-xs text-warm-500">
              &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All Rights Reserved.
            </p>
            <p className="text-xs text-warm-600">
              Powered by {SITE_CONFIG.founder}
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
