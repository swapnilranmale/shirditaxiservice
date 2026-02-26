"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/stats";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Container } from "@/components/ui/Container";

export function StatsCounter() {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-brand-950/85" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-heading text-4xl font-bold text-saffron-400 sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-warm-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
