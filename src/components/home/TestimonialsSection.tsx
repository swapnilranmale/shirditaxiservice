"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setCurrent(index < 0 ? testimonials.length - 1 : index % testimonials.length);
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-50" />
      <Container className="relative">
        <SectionHeading
          label="Testimonials"
          title="What Our Customers Say"
          subtitle="Hear from the pilgrims and travelers who chose us for their sacred journey."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Quote icon */}
          <Quote className="absolute -top-2 left-0 h-16 w-16 text-saffron-400/10 rotate-180" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center px-8"
            >
              {/* Stars */}
              <div className="mb-6 flex items-center justify-center gap-1">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-saffron-400 text-saffron-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="mb-8 text-lg text-warm-200 leading-relaxed md:text-xl italic">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              {/* Author */}
              <div>
                <p className="font-heading text-lg font-semibold text-white">
                  {testimonials[current].name}
                </p>
                <p className="text-sm text-warm-400">
                  {testimonials[current].location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={() => goTo(current - 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-warm-400 transition-all hover:border-saffron-400 hover:text-saffron-400 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    i === current
                      ? "w-8 bg-saffron-400"
                      : "w-2 bg-warm-600 hover:bg-warm-500"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => goTo(current + 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-warm-400 transition-all hover:border-saffron-400 hover:text-saffron-400 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
