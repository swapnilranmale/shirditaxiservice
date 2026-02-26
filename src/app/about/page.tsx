"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Award, Heart, Users, ThumbsUp, Target, Eye } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem, FadeIn } from "@/components/ui/FadeIn";

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description: "RTO authorized vehicles with experienced drivers ensuring your complete safety on every journey.",
  },
  {
    icon: Heart,
    title: "Customer Care",
    description: "We treat every pilgrim like family. Your comfort and satisfaction is our highest priority.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Well-maintained luxury vehicles, professional drivers, and meticulously planned tours.",
  },
  {
    icon: ThumbsUp,
    title: "Trust & Transparency",
    description: "No hidden charges, upfront pricing, and honest service that has earned us thousands of happy customers.",
  },
];

const milestones = [
  { year: "2014", title: "Founded", description: "Shirdi Taxi Service started with a vision to provide premium travel services for pilgrims visiting Shirdi." },
  { year: "2016", title: "Fleet Expansion", description: "Expanded our fleet to include SUVs and tempo travellers, serving larger groups and families." },
  { year: "2018", title: "Tour Packages", description: "Launched curated Jyotirlinga darshan and heritage tour packages based on customer demand." },
  { year: "2020", title: "Hotel & Flight Services", description: "Added hotel booking and flight assistance to offer complete end-to-end travel solutions." },
  { year: "2023", title: "Premium Fleet", description: "Introduced premium vehicles including Innova Hycross for luxury-seeking travelers." },
  { year: "2024", title: "15,000+ Happy Customers", description: "Crossed 15,000 happy customers with 5-star ratings and growing strong." },
];

export default function AboutPage() {
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
              About Us
            </span>
            <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
              Our Story
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-warm-300">
              A decade of trusted service, connecting pilgrims to sacred
              destinations across Maharashtra.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <FadeIn>
              <div className="relative overflow-hidden rounded-2xl">
                <div
                  className="aspect-[4/3] bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=800&q=80')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-950/40 to-transparent" />
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <span className="mb-3 inline-block text-xs font-medium uppercase tracking-[0.2em] text-saffron-400">
                Our Journey
              </span>
              <h2 className="font-heading text-3xl font-bold text-white mb-6">
                From Humble Beginnings to{" "}
                <span className="text-gold-gradient">Trusted Excellence</span>
              </h2>
              <div className="space-y-4 text-warm-300 leading-relaxed">
                <p>
                  Founded by {SITE_CONFIG.founder}, Shirdi Taxi Service began
                  with a simple mission: to provide safe, comfortable, and
                  reliable transportation for pilgrims visiting the holy town of
                  Shirdi.
                </p>
                <p>
                  What started as a small operation with a few vehicles has grown
                  into a comprehensive travel service trusted by over 15,000
                  customers. Our deep understanding of the local terrain,
                  temples, and heritage sites makes us the preferred choice for
                  pilgrims from across India.
                </p>
                <p>
                  Today, we offer not just taxi services, but complete travel
                  solutions including curated tour packages, hotel reservations,
                  and flight booking assistance - everything you need for a
                  hassle-free pilgrimage experience.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-brand-900/50">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <FadeIn>
              <div className="h-full rounded-2xl border border-white/5 bg-brand-900 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-saffron-400/10 text-saffron-400">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-warm-300 leading-relaxed">
                  To provide the most reliable, comfortable, and affordable
                  travel services in Shirdi, ensuring every pilgrim&apos;s journey is
                  as divine as their destination. We strive to be the bridge
                  between devotees and their spiritual destinations.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="h-full rounded-2xl border border-white/5 bg-brand-900 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/10 text-gold-400">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-warm-300 leading-relaxed">
                  To become Maharashtra&apos;s most trusted travel partner for
                  religious tourism, known for premium service quality,
                  transparent pricing, and an unwavering commitment to customer
                  satisfaction.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            label="Our Journey"
            title="Milestones"
            subtitle="Key moments in our journey of serving pilgrims and travelers."
          />

          <div className="relative mx-auto max-w-3xl">
            {/* Vertical Line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-saffron-400/50 via-saffron-400/20 to-transparent md:left-1/2" />

            <div className="space-y-8">
              {milestones.map((milestone, i) => (
                <FadeIn key={milestone.year} delay={i * 0.05}>
                  <div className={`relative flex items-start gap-6 md:gap-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-saffron-400 ring-4 ring-brand-950 z-10" />

                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8 md:ml-auto"}`}>
                      <span className="text-sm font-bold text-saffron-400">{milestone.year}</span>
                      <h3 className="font-heading text-lg font-semibold text-white mt-1">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-warm-400 mt-1 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-brand-900/50">
        <Container>
          <SectionHeading
            label="Our Values"
            title="What Drives Us"
            subtitle="The principles that guide every journey we facilitate."
          />

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="group h-full rounded-2xl border border-white/5 bg-brand-900 p-6 text-center transition-all duration-500 hover:border-saffron-400/20 hover:-translate-y-1">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-saffron-400/10 text-saffron-400 transition-colors group-hover:bg-saffron-400 group-hover:text-brand-950">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-semibold text-white">
                    {value.title}
                  </h3>
                  <p className="text-sm text-warm-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </>
  );
}
