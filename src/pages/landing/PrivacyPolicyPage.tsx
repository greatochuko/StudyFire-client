import React from "react";
import { Link } from "react-router";

export default function PrivacyPolicyPage(): React.JSX.Element {
  return (
    <main className="bg-bg text-text mt-12 min-h-screen py-12 sm:py-16">
      <div className="mx-auto w-11/12 max-w-5xl">
        {/* Navigation Breadcrumb */}
        <Link
          to="/"
          className="text-accent text-xs font-semibold tracking-wide uppercase hover:underline"
        >
          ← Back to Homepage
        </Link>

        <header className="border-border/40 mt-6 border-b pb-6">
          <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="text-muted mt-2 font-mono text-xs uppercase">
            Last Updated: June 22, 2026
          </p>
        </header>

        <div className="text-text/90 mt-8 space-y-6 text-sm leading-relaxed">
          <p>
            At <strong>StudyFire</strong>, we take your data privacy seriously.
            This document outlines how we collect, store, secure, and process
            your files, vector knowledge indices, and operational account data.
          </p>

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-text font-serif text-xl font-bold">
              1. Information We Collect
            </h2>
            <p>
              To provide our automated validation, flashcard generation, and AI
              quiz matching pipelines, we require specific operational
              parameters:
            </p>
            <ul className="list-inside list-disc space-y-1.5 pl-2 text-xs">
              <li>
                <strong>Account Credentials:</strong> Full name, email identity,
                and encrypted authentication tokens.
              </li>
              <li>
                <strong>User Study Assets:</strong> Digital text documents,
                vectors, notes, or materials you actively upload to your
                dashboard vaults.
              </li>
              <li>
                <strong>Transaction Vectors:</strong> Stripe customer IDs,
                subscription tiers, and payment event histories (we do not
                process raw credit card records on our systems).
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-text font-serif text-xl font-bold">
              2. How Your Documents & Data Are Handled
            </h2>
            <p>
              Any files uploaded to StudyFire are processed exclusively to
              derive embedding vectors, structural summaries, flashcards, and
              quizzes.
            </p>
            <blockquote className="border-accent/40 bg-surface rounded-xl border-l-4 p-4 text-xs italic">
              Important: We do not sell your personal notes, training datasets,
              or private text materials to third-party ad brokers or use your
              content to train open baseline LLM architectures.
            </blockquote>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-text font-serif text-xl font-bold">
              3. Data Retention & System Deletion
            </h2>
            <p>
              You maintain total dominion over your educational library profile.
              When you choose to purge a vector note block, document, or
              completely terminate your StudyFire account context:
            </p>
            <ul className="list-inside list-disc space-y-1.5 pl-2 text-xs">
              <li>
                Our server storage pools immediately trigger a drop cycle for
                raw text structures.
              </li>
              <li>
                Connected vector cache entries are wiped out within 24 business
                hours.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-text font-serif text-xl font-bold">
              4. Security Frameworks
            </h2>
            <p>
              All customer sessions and vector storage interactions are
              transmitted over secure TLS pathways. Your platform operational
              matrix is isolated natively inside individual user tenant rings to
              prevent cross-account exposure.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-text font-serif text-xl font-bold">
              5. Contact Us
            </h2>
            <p>
              If you have any questions regarding data lifecycle processing,
              please submit a privacy validation ticket directly to{" "}
              <a
                href="mailto:privacy@studyfire.ai"
                className="text-accent underline"
              >
                privacy@studyfire.ai
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
