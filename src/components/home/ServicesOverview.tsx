"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Car, Map, Hotel, Plane, ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { fadeUpVariants } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Car,
  Map,
  Hotel,
  Plane,
};

export function ServicesOverview() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-noise opacity-50" />
      <Container className="relative">
        <SectionHeading
          label="What We Offer"
          title="Premium Travel Services"
          subtitle="From sacred pilgrimages to luxury travel, we provide end-to-end services for a seamless journey."
        />

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Car;
            return (
              <StaggerItem key={service.id}>
                <Link
                  href={service.href}
                  className="group flex flex-col h-full rounded-2xl border border-white/5 bg-brand-900 p-6 transition-all duration-500 hover:border-saffron-400/30 hover:shadow-glow-saffron hover:-translate-y-1"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-saffron-400/10 text-saffron-400 transition-colors group-hover:bg-saffron-400 group-hover:text-brand-950">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm text-warm-400 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-saffron-400 group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
