"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: SITE_CONFIG.phoneDisplay,
    href: `tel:${SITE_CONFIG.phone}`,
    description: "Available 24/7 for bookings",
  },
  {
    icon: Mail,
    title: "Email (Business)",
    value: SITE_CONFIG.emailBusiness,
    href: `mailto:${SITE_CONFIG.emailBusiness}`,
    description: "For corporate & B2B inquiries",
  },
  {
    icon: Mail,
    title: "Email (Guest)",
    value: SITE_CONFIG.emailGuest,
    href: `mailto:${SITE_CONFIG.emailGuest}`,
    description: "For individual bookings",
  },
  {
    icon: MapPin,
    title: "Address",
    value: SITE_CONFIG.address,
    href: `https://maps.google.com/?q=${SITE_CONFIG.mapCoords.lat},${SITE_CONFIG.mapCoords.lng}`,
    description: "Our office location",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "24/7 by Appointment",
    description: "We're always available",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: SITE_CONFIG.phoneDisplay,
    href: `https://wa.me/${SITE_CONFIG.whatsapp}`,
    description: "Quick responses on WhatsApp",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, construct a mailto link
    const subject = `Inquiry: ${formState.serviceType || "General"} - ${formState.name}`;
    const body = `Name: ${formState.name}\nEmail: ${formState.email}\nPhone: ${formState.phone}\nService: ${formState.serviceType}\n\nMessage:\n${formState.message}`;
    window.location.href = `mailto:${SITE_CONFIG.emailGuest}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
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
              Get in Touch
            </span>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-warm-300">
              Ready to plan your journey? Reach out to us for bookings,
              inquiries, or custom tour requests.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <FadeIn>
              <div className="rounded-2xl border border-white/5 bg-brand-900 p-6 sm:p-8">
                <h2 className="font-heading text-2xl font-bold text-white mb-2">
                  Send Us a Message
                </h2>
                <p className="text-sm text-warm-400 mb-6">
                  Fill out the form and we&apos;ll get back to you within a few
                  hours.
                </p>

                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-400">
                      <Send className="h-8 w-8" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-warm-400">
                      Thank you for reaching out. We&apos;ll contact you shortly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormState({ name: "", email: "", phone: "", serviceType: "", message: "" });
                      }}
                      className="mt-4 text-sm text-saffron-400 hover:underline cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-warm-400 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) =>
                            setFormState({ ...formState, name: e.target.value })
                          }
                          placeholder="Your name"
                          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-warm-500 focus:border-saffron-400 focus:outline-none focus:ring-1 focus:ring-saffron-400/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-warm-400 mb-1.5">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({ ...formState, email: e.target.value })
                          }
                          placeholder="your@email.com"
                          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-warm-500 focus:border-saffron-400 focus:outline-none focus:ring-1 focus:ring-saffron-400/50 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-warm-400 mb-1.5">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formState.phone}
                          onChange={(e) =>
                            setFormState({ ...formState, phone: e.target.value })
                          }
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-warm-500 focus:border-saffron-400 focus:outline-none focus:ring-1 focus:ring-saffron-400/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-warm-400 mb-1.5">
                          Service Type
                        </label>
                        <select
                          value={formState.serviceType}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              serviceType: e.target.value,
                            })
                          }
                          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:border-saffron-400 focus:outline-none focus:ring-1 focus:ring-saffron-400/50 transition-colors appearance-none"
                        >
                          <option value="" className="bg-brand-900">
                            Select a service
                          </option>
                          <option value="Taxi Booking" className="bg-brand-900">
                            Taxi Booking
                          </option>
                          <option value="Tour Package" className="bg-brand-900">
                            Tour Package
                          </option>
                          <option value="Hotel Booking" className="bg-brand-900">
                            Hotel Booking
                          </option>
                          <option value="Flight Booking" className="bg-brand-900">
                            Flight Booking
                          </option>
                          <option value="Corporate Service" className="bg-brand-900">
                            Corporate Service
                          </option>
                          <option value="Other" className="bg-brand-900">
                            Other
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-warm-400 mb-1.5">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({ ...formState, message: e.target.value })
                        }
                        placeholder="Tell us about your travel plans..."
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-warm-500 focus:border-saffron-400 focus:outline-none focus:ring-1 focus:ring-saffron-400/50 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-lg bg-gradient-to-r from-saffron-400 to-gold-400 py-3.5 text-sm font-semibold text-brand-950 transition-all hover:shadow-glow-saffron hover:scale-[1.01] cursor-pointer"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>

            {/* Contact Info */}
            <div className="space-y-6">
              <FadeIn delay={0.1}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {contactInfo.map((info) => (
                    <div
                      key={info.title}
                      className="group rounded-xl border border-white/5 bg-brand-900 p-5 transition-all hover:border-saffron-400/20"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-saffron-400/10 text-saffron-400">
                        <info.icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-sm font-semibold text-white mb-1">
                        {info.title}
                      </h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-sm text-saffron-400 hover:underline break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm text-warm-200">{info.value}</p>
                      )}
                      <p className="mt-1 text-xs text-warm-500">
                        {info.description}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>

              {/* Map */}
              <FadeIn delay={0.2}>
                <div className="overflow-hidden rounded-2xl border border-white/5">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.1234!2d${SITE_CONFIG.mapCoords.lng}!3d${SITE_CONFIG.mapCoords.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDQ2JzAwLjUiTiA3NMKwMjgnMzcuNiJF!5e0!3m2!1sen!2sin!4v1234567890`}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                    title="Shirdi Taxi Service Location"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
