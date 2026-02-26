"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, MapPin, ArrowRight, AlertTriangle } from "lucide-react";
import { tourPackages } from "@/data/tours";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

const categories = [
  { key: "all", label: "All Tours" },
  { key: "jyotirlinga", label: "Jyotirlinga" },
  { key: "heritage", label: "Heritage" },
  { key: "spiritual", label: "Spiritual" },
];

const tourImages: Record<string, string> = {
  trambakeshwar:
    "https://images.unsplash.com/photo-1621427637140-7fa64a186e8e?w=600&q=80",
  ghrushneshwar:
    "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=600&q=80",
  bhimashankar:
    "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=600&q=80",
  "three-jyotirlinga":
    "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=600&q=80",
  "shani-shingnapur":
    "https://images.unsplash.com/photo-1564804955013-e02ce25e3ec6?w=600&q=80",
  "ellora-caves":
    "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=600&q=80",
  "ajanta-caves":
    "https://images.unsplash.com/photo-1621427637140-7fa64a186e8e?w=600&q=80",
};

export default function TourPackagesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? tourPackages
      : tourPackages.filter((t) => t.category === activeCategory);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=1920&q=80')",
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
              Explore
            </span>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Tour Packages
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-warm-300">
              Curated pilgrimage and heritage tours from Shirdi to
              Maharashtra&apos;s most sacred destinations.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Filter + Grid */}
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

          {/* Tour Grid */}
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((tour) => (
              <StaggerItem key={tour.id}>
                <Link
                  href={`/tour-packages/${tour.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-brand-900 transition-all duration-500 hover:border-saffron-400/20 hover:-translate-y-1"
                >
                  <div className="relative h-52 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{
                        backgroundImage: `url('${tourImages[tour.id] || tourImages.trambakeshwar}')`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-transparent to-transparent" />
                    {tour.closedOn && (
                      <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-red-500/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                        <AlertTriangle className="h-3 w-3" />
                        Closed {tour.closedOn}
                      </div>
                    )}
                    <div className="absolute bottom-3 left-3">
                      <span className="inline-block rounded-full bg-saffron-400/90 px-3 py-1 text-xs font-semibold text-brand-950 backdrop-blur-sm capitalize">
                        {tour.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="mb-2 font-heading text-xl font-semibold text-white group-hover:text-saffron-400 transition-colors">
                      {tour.name}
                    </h3>
                    <p className="mb-4 text-sm text-warm-400 leading-relaxed line-clamp-2">
                      {tour.shortDescription}
                    </p>

                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="flex items-center gap-4 text-xs text-warm-500">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {tour.duration}
                        </span>
                        {tour.distance && (
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {tour.distance}
                          </span>
                        )}
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-warm-500">From</span>
                        <p className="font-heading text-lg font-bold text-saffron-400">
                          {formatPrice(tour.startingPrice)}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </>
  );
}
