import React from "react";
import FeaturesGrid from "../../components/homepage/FeaturesGrid";
import MetricsBar from "../../components/homepage/MetricsBar";
import HowItWorks from "../../components/homepage/HowItWorks";
import Hero from "../../components/homepage/Hero";
import TickerTextSection from "../../components/homepage/TickerTextSection";
import Testimonials from "../../components/homepage/Testimonials";
import Pricing from "../../components/homepage/Pricing";
import CTA from "../../components/homepage/CTA";

export default function StudyFireLanding(): React.JSX.Element {
  return (
    <>
      <Hero />

      {/* ── TICKER TEXT SECTION ── */}
      <TickerTextSection />

      {/* ── FEATURES GRID ── */}
      <FeaturesGrid />

      {/* ── METRICS/STATS BAR ── */}
      <MetricsBar />

      {/* ── HOW IT WORKS SECTION ── */}
      <HowItWorks />

      {/* ── PRICING SECTION ── */}
      <Pricing />

      {/* ── TESTIMONIALS SECTION ── */}
      <Testimonials />

      {/* ── FINAL CALL TO ACTION ── */}
      <CTA />
    </>
  );
}
