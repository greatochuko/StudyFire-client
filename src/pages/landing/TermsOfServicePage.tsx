import React from "react";
import { Link } from "react-router";

export default function TermsOfServicePage(): React.JSX.Element {
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
            Terms of Service
          </h1>
          <p className="text-muted mt-2 font-mono text-xs uppercase">
            Effective Date: June 22, 2026
          </p>
        </header>

        <div className="text-text/90 mt-8 space-y-6 text-sm leading-relaxed">
          <p>
            Welcome to <strong>StudyFire</strong>. By accessing our dashboard
            spaces, provisioning validation tasks, or executing API query
            structures, you agree to comply with the legal conditions detailed
            inside this operational agreement.
          </p>

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-text font-serif text-xl font-bold">
              1. Provision of Service & Account Creation
            </h2>
            <p>
              StudyFire grants you a non-exclusive, revocable license to utilize
              our AI analytical tools, quiz generators, and workspace modules.
              You agree to safeguard your system password bounds and accept
              responsibility for all execution logs originating from your active
              user identifier.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-text font-serif text-xl font-bold">
              2. Subscription Lifecycle, Invoicing, & Cancellations
            </h2>
            <p>
              Certain advanced reasoning features require an active{" "}
              <strong>Scholar Pro</strong> tier subscription.
            </p>
            <ul className="list-inside list-disc space-y-1.5 pl-2 text-xs">
              <li>
                <strong>Auto-Renewal:</strong> Subscriptions automatically renew
                at the close of each cycle unless auto-renew is explicitly
                disabled.
              </li>
              <li>
                <strong>Cancellation:</strong> Disabling auto-renewal maintains
                your full Scholar Pro access profile until the current billing
                interval expires. No partial-interval refunds are distributed.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-text font-serif text-xl font-bold">
              3. Acceptable Use Policy & Constraints
            </h2>
            <p>
              You represent and warrant that you hold the legal authority to
              distribute and vectorize any context text files you parse into
              StudyFire. You explicitly agree not to use our system pipelines
              to:
            </p>
            <ul className="list-inside list-disc space-y-1.5 pl-2 text-xs">
              <li>
                Reverse engineer internal pipeline weights or query prompt
                wrappers.
              </li>
              <li>
                Inject macro scripts, malicious payloads, or exploit
                high-velocity token limits via scraping utilities.
              </li>
              <li>
                Upload material that violates active copyright intellectual
                parameters.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-text font-serif text-xl font-bold">
              4. Limitation of Liability
            </h2>
            <p>
              StudyFire provides deep learning inferences and educational
              assistance summaries on an <em>"as-is"</em> foundation. We do not
              guarantee absolute factual accuracy for generated outputs.
              StudyFire is not liable for academic penalties, data loss, or
              server pipeline downtime incidents.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-text font-serif text-xl font-bold">
              5. Framework Variations
            </h2>
            <p>
              We reserve the right to alter features, infrastructure parameters,
              pricing configurations, or update these active Terms. Your
              continued engagement with our dashboard environments following
              updates establishes complete acceptance of the updated framework
              conditions.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
