"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { fadeUpVariants } from "@/lib/animations";

export function CTASection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-saffron-400 via-saffron-500 to-gold-400" />
      <div className="absolute inset-0 bg-noise opacity-30" />

      <Container className="relative z-10">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-brand-950 sm:text-4xl lg:text-5xl">
            Ready to Plan Your Sacred Journey?
          </h2>
          <p className="mt-4 text-lg text-brand-950/70">
            Contact us today for the best deals on taxi services, tour packages,
            and hotel bookings in Shirdi.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-2 rounded-full bg-brand-950 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-brand-900 hover:scale-[1.02] shadow-xl"
            >
              <Phone className="h-5 w-5" />
              Call {SITE_CONFIG.phoneDisplay}
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand-950 px-8 py-4 text-lg font-semibold text-brand-950 transition-all hover:bg-brand-950 hover:text-white"
            >
              Get a Free Quote
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
