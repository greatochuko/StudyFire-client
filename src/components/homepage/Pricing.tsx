import React from "react";
import { Link } from "react-router";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingTier {
  name: string;
  price: number;
  subtext: string;
  features: PricingFeature[];
  buttonText: string;
  buttonLink?: string;
  isPopular?: boolean;
}

const PRICING_TIERS: PricingTier[] = [
  {
    name: "Standard Base",
    price: 0,
    subtext: "Free forever",
    buttonText: "Get Started Free",
    buttonLink: "/signup",
    features: [
      { text: "3 Documents Limit", included: true },
      { text: "Standard Fast Engine", included: true },
      { text: "Daily Token Caps", included: true },
      { text: "Create quizzes and flashcards", included: true },
      { text: "Advanced Reasoning Models", included: false },
      { text: "Socratic Rigor Modes", included: false },
    ],
  },
  {
    name: "Scholar Pro",
    price: 5,
    subtext: "per month — or $30 if you pay yearly",
    buttonText: "Start Pro Plan",
    buttonLink: "/signup?plan=pro",
    isPopular: true,
    features: [
      { text: "20 Documents Store", included: true },
      { text: "Advanced Reasoning Models", included: true },
      { text: "Uncapped Burst Tokens", included: true },
      { text: "Socratic Rigor Modes", included: true },
      { text: "Unlimited chat and files", included: true },
      { text: "Fast priority processing", included: true },
    ],
  },
  {
    name: "Teams",
    price: 3,
    subtext:
      "per user / month (min. 5 users). Or $2 per user / month if you pay yearly",
    buttonText: "Coming soon",
    features: [
      { text: "Everything in Pro Plan", included: true },
      { text: "Shared document library", included: true },
      { text: "Shared quizzes & study groups", included: true },
      { text: "Team usage dashboard", included: true },
      { text: "One simple bill for the team", included: true },
      { text: "Helpful customer support", included: true },
    ],
  },
];

export default function Pricing(): React.JSX.Element {
  return (
    <section className="mx-auto max-w-7xl px-6 py-25 md:px-12" id="pricing">
      <p className="text-accent mb-4 text-[0.75rem] font-bold tracking-widest uppercase">
        Pricing Plans
      </p>
      <h2 className="text-text mb-5 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
        Start for free.
        <br />
        Upgrade when you need more.
      </h2>
      <p className="text-md text-muted mb-14">
        No credit card needed to start. Cancel anytime you want.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {PRICING_TIERS.map((tier) => (
          <div
            key={tier.name}
            className={`bg-surface relative min-w-80 flex-1 rounded-2xl p-9 shadow-sm ${
              tier.isPopular
                ? "border-accent shadow-accent/5 border-2 shadow-md"
                : "border-border border"
            }`}
          >
            {tier.isPopular && (
              <div className="bg-accent absolute -top-3 left-1/2 -translate-x-1/2 transform rounded-full px-3.5 py-1 text-[0.72rem] font-bold tracking-wider whitespace-nowrap text-white uppercase shadow-sm">
                Most Popular
              </div>
            )}

            <div
              className={`mb-3 text-xs font-bold tracking-widest uppercase ${
                tier.isPopular ? "text-accent" : "text-muted"
              }`}
            >
              {tier.name}
            </div>

            <div className="text-text mb-1 font-serif text-6xl leading-none font-bold">
              <sup className="vertical-super text-2xl font-medium">$</sup>
              {tier.price}
            </div>

            <div className="text-muted mb-6 text-xs">{tier.subtext}</div>
            <div className="bg-border mb-6 h-px"></div>

            <ul className="mb-8 flex list-none flex-col gap-3">
              {tier.features.map((feature, idx) => (
                <li
                  key={idx}
                  className={`flex items-start gap-2.5 text-sm ${
                    feature.included ? "text-text" : "text-muted opacity-50"
                  }`}
                >
                  {feature.included ? (
                    <span className="text-green-custom mt-0.5 shrink-0 font-semibold">
                      ✓
                    </span>
                  ) : (
                    <span className="text-muted mt-0.5 shrink-0">-</span>
                  )}
                  {feature.text}
                </li>
              ))}
            </ul>

            {tier.buttonLink ? (
              <Link
                to={tier.buttonLink}
                className={
                  tier.isPopular
                    ? "bg-accent hover:bg-accent/95 block w-full transform rounded-lg px-5.5 py-2.25 text-center text-sm font-semibold text-white shadow-sm transition duration-150 hover:-translate-y-px"
                    : "border-border text-text bg-bg hover:border-accent hover:text-accent hover:bg-surface block w-full rounded-lg border px-5 py-2 text-center text-sm font-medium transition duration-200"
                }
              >
                {tier.buttonText}
              </Link>
            ) : (
              <button
                disabled
                className={`pointer-events-none ${
                  tier.isPopular
                    ? "bg-accent hover:bg-accent/95 block w-full transform rounded-lg px-5.5 py-2.25 text-center text-sm font-semibold text-white shadow-sm transition duration-150 hover:-translate-y-px"
                    : "border-border text-text bg-bg hover:border-accent hover:text-accent hover:bg-surface block w-full rounded-lg border px-5 py-2 text-center text-sm font-medium transition duration-200"
                }`}
              >
                {tier.buttonText}
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
