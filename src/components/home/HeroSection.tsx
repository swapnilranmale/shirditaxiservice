"use client";

import { motion } from "framer-motion";
import { ChevronDown, Phone, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/80 via-brand-950/60 to-brand-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/50 to-transparent" />
      </div>

      {/* Content */}
      <Container className="relative z-10 pt-24 pb-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left - Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4"
            >
              <span className="font-devanagari text-saffron-400 text-xl">
                {SITE_CONFIG.greeting}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              Your Trusted{" "}
              <span className="text-gold-gradient">Pilgrimage</span> &{" "}
              <span className="text-gold-gradient">Travel Partner</span>{" "}
              in Shirdi
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 text-lg text-warm-300 leading-relaxed max-w-xl"
            >
              RTO Authorized Premium Taxi Service. Experience divine journeys
              with luxury vehicles, expert drivers, and curated tour packages
              across Maharashtra&apos;s most sacred destinations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <ButtonLink href="/tour-packages" size="lg">
                Explore Tours
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary" size="lg">
                Get a Quote
              </ButtonLink>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-8 flex items-center gap-6 text-sm text-warm-400"
            >
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-2 hover:text-saffron-400 transition-colors"
              >
                <Phone className="h-4 w-4 text-saffron-400" />
                {SITE_CONFIG.phoneDisplay}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-saffron-400" />
                Shirdi, Maharashtra
              </span>
            </motion.div>
          </div>

          {/* Right - Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="font-heading text-xl font-semibold text-white mb-6">
                Book Your Ride
              </h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-warm-400 mb-1.5">
                    Pickup Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Shirdi Temple"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-warm-500 focus:border-saffron-400 focus:outline-none focus:ring-1 focus:ring-saffron-400/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-warm-400 mb-1.5">
                    Drop Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Trambakeshwar"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-warm-500 focus:border-saffron-400 focus:outline-none focus:ring-1 focus:ring-saffron-400/50 transition-colors"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-warm-400 mb-1.5">
                      Date
                    </label>
                    <input
                      type="date"
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:border-saffron-400 focus:outline-none focus:ring-1 focus:ring-saffron-400/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-warm-400 mb-1.5">
                      Vehicle
                    </label>
                    <select className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:border-saffron-400 focus:outline-none focus:ring-1 focus:ring-saffron-400/50 transition-colors appearance-none">
                      <option value="" className="bg-brand-900">Select</option>
                      <option value="sedan" className="bg-brand-900">Sedan</option>
                      <option value="suv" className="bg-brand-900">SUV</option>
                      <option value="premium" className="bg-brand-900">Premium</option>
                      <option value="tempo" className="bg-brand-900">Tempo Traveller</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-saffron-400 to-gold-400 py-3.5 text-sm font-semibold text-brand-950 transition-all hover:shadow-glow-saffron hover:scale-[1.01] cursor-pointer"
                >
                  Search Available Rides
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 text-warm-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
