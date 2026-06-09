import type { Metadata } from "next";
import HeroSection from "@/components/landing/HeroSection";
import ServicesSection from "@/components/landing/ServicesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import StatsSection from "@/components/landing/StatsSection";
import PricingTeaser from "@/components/landing/PricingTeaser";
import SchedulingCTA from "@/components/landing/SchedulingCTA";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Latitude Advisory — Strategic Franchise Advisory for Multi-Unit Operators",
  description:
    "Site selection, portfolio diversification, franchise evaluation, and exit strategy for franchise operators running 3–50 units. Join the waitlist for early access.",
  openGraph: {
    title: "Latitude Advisory",
    description: "Your franchise portfolio deserves a strategist, not a salesperson.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <StatsSection />
      <PricingTeaser />
      <SchedulingCTA />
      <Footer />
    </main>
  );
}
