"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Briefcase, Snowflake, Phone } from "lucide-react";
import { vehicles } from "@/data/fleet";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

const categories = [
  { key: "all", label: "All Vehicles" },
  { key: "sedan", label: "Sedan" },
  { key: "suv", label: "SUV" },
  { key: "premium", label: "Premium" },
  { key: "tempo-traveller", label: "Tempo Traveller" },
  { key: "mini-bus", label: "Mini Bus" },
];

const vehicleImages: Record<string, string> = {
  "swift-dzire":
    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80",
  "honda-amaze":
    "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=600&q=80",
  "toyota-etios":
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=600&q=80",
  "innova-crysta":
    "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=80",
  "innova-hycross":
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=600&q=80",
  ertiga:
    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80",
  "tempo-traveller-12":
    "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80",
  "tempo-traveller-17":
    "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80",
  "mini-bus":
    "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80",
};

export default function FleetPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? vehicles
      : vehicles.filter((v) => v.category === activeCategory);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=1920&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-brand-950/85" />
        </div>
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-3 inline-block text-xs font-medium uppercase tracking-[0.2em] text-saffron-400">
              Our Fleet
            </span>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Premium Vehicle Fleet
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-warm-300">
              Well-maintained, comfortable vehicles for every journey. From
              sedans to mini buses, travel in style.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Fleet Grid */}
      <section className="py-16 md:py-24">
        <Container>
          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-all cursor-pointer",
                  activeCategory === cat.key
                    ? "bg-saffron-400 text-brand-950"
                    : "border border-white/10 text-warm-400 hover:border-saffron-400/50 hover:text-white"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Vehicles Grid */}
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((vehicle) => (
              <StaggerItem key={vehicle.id}>
                <div className="group overflow-hidden rounded-2xl border border-white/5 bg-brand-900 transition-all duration-500 hover:border-saffron-400/20 hover:-translate-y-1">
                  <div className="relative h-52 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{
                        backgroundImage: `url('${vehicleImages[vehicle.id] || vehicleImages["swift-dzire"]}')`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-transparent to-transparent" />
                    <div className="absolute top-3 right-3">
                      <span className="inline-block rounded-full bg-brand-950/80 px-3 py-1 text-xs font-medium text-saffron-400 backdrop-blur-sm capitalize">
                        {vehicle.category.replace("-", " ")}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="mb-1 font-heading text-xl font-semibold text-white">
                      {vehicle.name}
                    </h3>
                    <p className="mb-4 text-sm text-warm-400 leading-relaxed">
                      {vehicle.description}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-warm-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Users className="h-3.5 w-3.5 text-saffron-400" />
                        {vehicle.passengerCapacity} Passengers
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

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {vehicle.features.map((f) => (
                        <span
                          key={f}
                          className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-warm-400"
                        >
                          {f}
                        </span>
                      ))}
                    </div>

                    {vehicle.pricePerKm && (
                      <div className="flex items-center justify-between pt-4 border-t border-white/5">
                        <div>
                          <span className="text-xs text-warm-500">From</span>
                          <p className="font-heading text-lg font-bold text-saffron-400">
                            ₹{vehicle.pricePerKm}/km
                          </p>
                        </div>
                        <a
                          href={`tel:${SITE_CONFIG.phone}`}
                          className="inline-flex items-center gap-1.5 rounded-full bg-saffron-400 px-4 py-2 text-xs font-semibold text-brand-950 transition-all hover:bg-saffron-500"
                        >
                          <Phone className="h-3.5 w-3.5" />
                          Book Now
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </>
  );
}
