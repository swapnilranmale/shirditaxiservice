"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Briefcase, Snowflake, ArrowRight } from "lucide-react";
import { vehicles } from "@/data/fleet";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { ButtonLink } from "@/components/ui/Button";

const vehicleImages: Record<string, string> = {
  "swift-dzire":
    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80",
  "innova-crysta":
    "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=80",
  "innova-hycross":
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=600&q=80",
  "tempo-traveller-12":
    "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80",
};

const showcaseVehicles = vehicles.filter((v) =>
  ["swift-dzire", "innova-crysta", "innova-hycross", "tempo-traveller-12"].includes(v.id)
);

export function FleetShowcase() {
  return (
    <section className="py-20 md:py-28 bg-brand-900/50">
      <Container>
        <SectionHeading
          label="Our Fleet"
          title="Travel in Comfort & Style"
          subtitle="Choose from our well-maintained fleet of premium vehicles suited for every type of journey."
        />

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {showcaseVehicles.map((vehicle) => (
            <StaggerItem key={vehicle.id}>
              <div className="group overflow-hidden rounded-2xl border border-white/5 bg-brand-900 transition-all duration-500 hover:border-saffron-400/20 hover:-translate-y-1">
                <div className="relative h-44 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('${vehicleImages[vehicle.id] || vehicleImages["swift-dzire"]}')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="mb-1 font-heading text-lg font-semibold text-white">
                    {vehicle.name}
                  </h3>
                  <p className="mb-3 text-xs text-warm-500 uppercase tracking-wider capitalize">
                    {vehicle.category.replace("-", " ")}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-warm-400">
                    <span className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5 text-saffron-400" />
                      {vehicle.passengerCapacity} Seats
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-3.5 w-3.5 text-saffron-400" />
                      {vehicle.luggageCapacity} Bags
                    </span>
                    {vehicle.hasAC && (
                      <span className="flex items-center gap-1">
                        <Snowflake className="h-3.5 w-3.5 text-saffron-400" />
                        AC
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-12 text-center">
          <ButtonLink href="/fleet" variant="secondary" size="lg">
            View Full Fleet
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
