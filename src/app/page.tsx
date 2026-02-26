import { HeroSection } from "@/components/home/HeroSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { PopularTours } from "@/components/home/PopularTours";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { StatsCounter } from "@/components/home/StatsCounter";
import { FleetShowcase } from "@/components/home/FleetShowcase";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <PopularTours />
      <WhyChooseUs />
      <StatsCounter />
      <FleetShowcase />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
