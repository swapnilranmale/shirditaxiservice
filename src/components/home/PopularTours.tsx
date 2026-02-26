"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, MapPin, ArrowRight, AlertTriangle } from "lucide-react";
import { tourPackages } from "@/data/tours";
import { formatPrice } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { ButtonLink } from "@/components/ui/Button";

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
};

export function PopularTours() {
  const featured = tourPackages.filter((t) => t.featured);

  return (
    <section className="py-20 md:py-28 bg-brand-900/50">
      <Container>
        <SectionHeading
          label="Popular Tours"
          title="Sacred Journeys & Heritage Tours"
          subtitle="Explore our most-booked pilgrimage and heritage tour packages from Shirdi."
        />

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((tour) => (
            <StaggerItem key={tour.id}>
              <Link
                href={`/tour-packages/${tour.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-brand-900 transition-all duration-500 hover:border-saffron-400/20 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
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

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="mb-2 font-heading text-lg font-semibold text-white line-clamp-1 group-hover:text-saffron-400 transition-colors">
                    {tour.name}
                  </h3>
                  <p className="mb-4 text-sm text-warm-400 leading-relaxed line-clamp-2">
                    {tour.shortDescription}
                  </p>

                  <div className="mt-auto flex items-center justify-between">
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

        <div className="mt-12 text-center">
          <ButtonLink href="/tour-packages" variant="secondary" size="lg">
            View All Packages
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
