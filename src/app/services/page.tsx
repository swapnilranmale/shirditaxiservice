"use client";

import { motion } from "framer-motion";
import {
  Car,
  Map,
  Hotel,
  Plane,
  CheckCircle2,
  Phone,
  ArrowRight,
} from "lucide-react";
import { services } from "@/data/services";
import { SITE_CONFIG } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { ButtonLink } from "@/components/ui/Button";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Car,
  Map,
  Hotel,
  Plane,
};

const serviceImages: Record<string, string> = {
  taxi: "https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=800&q=80",
  tours: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=800&q=80",
  hotels: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
  flights: "https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=800&q=80",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
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
              What We Offer
            </span>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-warm-300">
              Comprehensive travel solutions for pilgrims and travelers. From
              taxi services to complete tour packages.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Car;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-24"
                >
                  <div
                    className={`grid gap-12 lg:grid-cols-2 items-center ${
                      !isEven ? "lg:[direction:rtl]" : ""
                    }`}
                  >
                    {/* Image */}
                    <FadeIn>
                      <div className="relative overflow-hidden rounded-2xl lg:[direction:ltr]">
                        <div
                          className="aspect-[4/3] bg-cover bg-center"
                          style={{
                            backgroundImage: `url('${serviceImages[service.id]}')`,
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 to-transparent" />
                      </div>
                    </FadeIn>

                    {/* Content */}
                    <FadeIn delay={0.2}>
                      <div className="lg:[direction:ltr]">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-saffron-400/10 text-saffron-400">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h2 className="font-heading text-3xl font-bold text-white mb-4">
                          {service.title}
                        </h2>
                        <p className="text-warm-300 leading-relaxed mb-6">
                          {service.description}
                        </p>

                        <div className="grid gap-2 sm:grid-cols-2 mb-8">
                          {service.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-center gap-2 text-sm text-warm-200"
                            >
                              <CheckCircle2 className="h-4 w-4 shrink-0 text-saffron-400" />
                              {feature}
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-3">
                          <a
                            href={`tel:${SITE_CONFIG.phone}`}
                            className="inline-flex items-center gap-2 rounded-full bg-saffron-400 px-6 py-2.5 text-sm font-semibold text-brand-950 transition-all hover:bg-saffron-500"
                          >
                            <Phone className="h-4 w-4" />
                            Book Now
                          </a>
                          {service.id === "tours" && (
                            <ButtonLink
                              href="/tour-packages"
                              variant="secondary"
                              size="sm"
                            >
                              View Packages
                              <ArrowRight className="h-4 w-4" />
                            </ButtonLink>
                          )}
                        </div>
                      </div>
                    </FadeIn>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
