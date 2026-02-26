"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Car, Users } from "lucide-react";
import { fadeUpVariants, slideInLeftVariants, slideInRightVariants } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    icon: Shield,
    title: "RTO Authorized & Licensed",
    description:
      "All our vehicles are officially RTO authorized with proper commercial permits. Travel with complete peace of mind.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "We're available round the clock for your travel needs. Book anytime, travel anytime.",
  },
  {
    icon: Car,
    title: "Premium Fleet",
    description:
      "From compact sedans to luxury SUVs and spacious tempo travellers - we have the perfect vehicle for every need.",
  },
  {
    icon: Users,
    title: "Experienced Local Drivers",
    description:
      "Our drivers are local experts with years of experience navigating Maharashtra's temples and heritage sites.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-50" />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            variants={slideInLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=800&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-950/60 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl border border-saffron-400/20 hidden lg:block" />
            <div className="absolute -top-4 -left-4 h-24 w-24 rounded-2xl border border-gold-400/20 hidden lg:block" />
          </motion.div>

          {/* Right - Features */}
          <motion.div
            variants={slideInRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="mb-3 inline-block text-xs font-medium uppercase tracking-[0.2em] text-saffron-400">
              Why Choose Us
            </span>
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl mb-8">
              Trusted by Thousands of{" "}
              <span className="text-gold-gradient">Pilgrims</span>
            </h2>

            <div className="space-y-6">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="group flex gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-saffron-400/10 text-saffron-400 transition-colors group-hover:bg-saffron-400 group-hover:text-brand-950">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-heading text-lg font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-warm-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
