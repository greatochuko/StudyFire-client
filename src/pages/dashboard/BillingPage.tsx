import React, { useState } from "react";
import { toast } from "sonner";
import { useAuth, type PlanTier } from "../../context/AuthContext";

interface Plan {
  id: PlanTier;
  name: string;
  price: number;
  features: string[];
  description: string;
}

interface Invoice {
  id: string;
  date: string;
  amount: number;
  status: "Paid" | "Pending" | "Failed";
  downloadUrl: string;
}

const invoiceHistory: Invoice[] = [
  {
    id: "INV-2026-003",
    date: "Jun 18, 2026",
    amount: 15.0,
    status: "Paid",
    downloadUrl: "#",
  },
  {
    id: "INV-2026-002",
    date: "May 18, 2026",
    amount: 15.0,
    status: "Paid",
    downloadUrl: "#",
  },
  {
    id: "INV-2026-001",
    date: "Apr 18, 2026",
    amount: 0.0,
    status: "Paid",
    downloadUrl: "#",
  },
];

const plans: Plan[] = [
  {
    id: "free",
    name: "Standard Base",
    price: 0,
    description: "Fundamental AI validation engine components.",
    features: ["Standard Fast Engine", "3 Documents Limit", "Daily Token Caps"],
  },
  {
    id: "pro",
    name: "Scholar Pro (Premium)",
    price: 15,
    description: "Advanced deep chain-of-thought analysis pipelines.",
    features: [
      "Advanced Reasoning Models",
      "20 Documents Store",
      "Uncapped Burst Tokens",
      "Socratic Rigor Modes",
    ],
  },
];

export default function BillingPage(): React.JSX.Element {
  const { updateSubscriptionState, user } = useAuth();

  // ── STATE MANAGEMENT ──
  const [isChangingPlan, setIsChangingPlan] = useState<boolean>(false);
  const [isCancelingPlan, setIsCancelingPlan] = useState<boolean>(false);

  const currentPlanId = user?.planTier || "free";

  const activePlanDetails = plans.find((p) => p.id === currentPlanId) || {
    name: "Custom Base",
    price: 0,
    interval: "month",
    nextBillingDate: "N/A",
    tokenUsage: 0,
    documentCount: 0,
    documentLimit: 3,
  };

  const isPremium = currentPlanId === "pro";
  const isAutoRenewActive = user?.autoRenew;

  // ── MUTATION HANDLERS ──
  const triggerPlanSwitch = (planId: PlanTier) => {
    // If an active Pro user requests a downgrade to free, route it directly to our cancellation intercept logic
    if (isPremium && planId === "free") {
      setIsChangingPlan(false);
      setIsCancelingPlan(true);
      return;
    }

    const in30Days = new Date();
    in30Days.setDate(in30Days.getDate() + 30);

    const expiresAt = planId === "pro" ? in30Days : undefined;
    updateSubscriptionState(planId, planId !== "free", expiresAt?.toString());
    setIsChangingPlan(false);
    toast.success(
      `Subscription configuration successfully updated to: ${planId.toUpperCase()}`,
    );
  };

  const confirmCancelSubscription = () => {
    // Updates database to drop renewal flags while preserving the visual premium experience
    updateSubscriptionState(currentPlanId, false);
    setIsCancelingPlan(false);
    toast.info(
      "Auto-renewal disabled. Premium tools remain active until July 18, 2026.",
    );
  };

  const handleReactivateSubscription = () => {
    updateSubscriptionState(currentPlanId, true);
    toast.success("Subscription auto-renewal successfully re-enabled.");
  };

  return (
    <main className="flex flex-1 flex-col gap-8">
      {/* ── ALERTS BANNER TRAY ── */}
      <div className="border-border/40 flex flex-col justify-between gap-4 border-b pb-5 sm:flex-row sm:items-center">
        <h1 className="text-text font-serif text-3xl font-bold tracking-tight">
          Billing & System Quotas
        </h1>
        <p className="text-muted mt-1 text-xs">
          Upgrade your operational infrastructure matrix, alter plan tiers, or
          terminate account cycles.
        </p>
      </div>

      {/* ── PREMIUM UPGRADE PROMPT CALLOUT ── */}
      {!isPremium && (
        <div className="from-accent/10 to-accent/5 border-accent/40 flex flex-col justify-between gap-6 rounded-2xl border bg-linear-to-r p-6 shadow-xs lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <span className="bg-accent rounded px-2 py-0.5 text-[0.55rem] font-bold tracking-wider text-white uppercase">
              Recommended Upgrade
            </span>
            <h2 className="text-text mt-2 font-serif text-lg font-bold">
              Unlock Deep Reasoning Pipeline Capabilities
            </h2>
            <p className="text-muted mt-1 text-xs leading-relaxed">
              Ascend your environment out of restricted daily evaluation
              constraints. Gain 20+ persistent context vector storage buckets
              along with extreme reciprocal socratic logic patterns.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsChangingPlan(true)}
            className="bg-accent shrink-0 cursor-pointer rounded-xl px-6 py-2.5 text-center text-xs font-bold text-white shadow-md transition hover:opacity-95"
          >
            Upgrade to Premium Pro Now
          </button>
        </div>
      )}

      {/* ── TWO COLUMN CURRENT OVERVIEW LAYOUT ── */}
      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Card: Active Execution Tier Overview */}
        <div className="bg-surface border-border/80 flex flex-col justify-between rounded-2xl border p-6 shadow-xs">
          <div>
            <span className="text-muted block font-mono text-[0.62rem] font-bold tracking-wider uppercase">
              Operational Matrix Level
            </span>

            <div className="mt-1 flex flex-wrap items-center gap-2">
              <h3 className="text-text font-serif text-2xl font-bold">
                {activePlanDetails.name}
              </h3>
              {isPremium && (
                <span
                  className={`rounded border px-1.5 py-0.5 font-mono text-[0.55rem] font-bold tracking-wide uppercase ${
                    isAutoRenewActive
                      ? "border-green-200 bg-green-50 text-green-700"
                      : "border-amber-200 bg-amber-50 text-amber-700"
                  }`}
                >
                  {isAutoRenewActive ? "✦ Auto-Renew Active" : "⚠️ Canceled"}
                </span>
              )}
            </div>

            <p className="text-text mt-2 font-serif text-sm font-semibold">
              ${activePlanDetails.price}{" "}
              <span className="text-muted font-sans text-xs font-normal">
                / month
              </span>
            </p>

            <p className="text-muted mt-4 text-[0.68rem] leading-relaxed">
              {isPremium ? (
                isAutoRenewActive ? (
                  <>
                    Your subscription is configured to auto-renew. The next
                    automated parsing charge triggers processing on{" "}
                    <strong className="text-text font-semibold">
                      July 18, 2026
                    </strong>
                    .
                  </>
                ) : (
                  <>
                    Auto-renew is deactivated. Your Scholar Pro level features
                    remain completely active until final cycle expiration on{" "}
                    <strong className="text-text font-semibold">
                      July 18, 2026
                    </strong>
                    .
                  </>
                )
              ) : (
                <>
                  Your account limits run under restrictive ecosystem
                  conditions. Modify profiles to remove caps.
                </>
              )}
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => setIsChangingPlan(true)}
              className="bg-text text-bg w-full cursor-pointer rounded-xl py-2 text-center text-xs font-bold shadow-xs transition hover:opacity-95"
            >
              {isPremium ? "Change / Switch Plan" : "Upgrade Subscription"}
            </button>

            {isPremium &&
              (isAutoRenewActive ? (
                <button
                  type="button"
                  onClick={() => setIsCancelingPlan(true)}
                  className="w-full cursor-pointer rounded-lg bg-transparent py-1.5 text-center text-[0.68rem] font-bold text-red-600 transition hover:bg-red-50/40"
                >
                  Cancel Premium Plan
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleReactivateSubscription}
                  className="border-accent/20 bg-accent/5 text-accent hover:bg-accent/10 w-full cursor-pointer rounded-lg border py-1.5 text-center text-[0.68rem] font-bold transition"
                >
                  Re-enable Auto-Renewal
                </button>
              ))}
          </div>
        </div>

        {/* Card: Real-time Context Storage Quotas */}
        <div className="bg-surface border-border/80 flex flex-col justify-between rounded-2xl border p-6 shadow-xs">
          <div>
            <span className="text-muted block font-mono text-[0.62rem] font-bold tracking-wider uppercase">
              Resource Allotments
            </span>
            <h3 className="text-text mt-1 font-serif text-base font-bold">
              AI Context Usage Profiles
            </h3>

            {/* Token Analytics Progress Bar */}
            <div className="mt-5">
              <div className="mb-1.5 flex items-center justify-between text-xs">
                <span className="text-text font-medium">
                  Model Inference Allocation
                </span>
                <span className="text-muted font-mono">
                  {isPremium ? "74%" : "100%"} Used
                </span>
              </div>
              <div className="bg-bg border-border/40 h-2 w-full overflow-hidden rounded-full border">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${isPremium ? "bg-accent" : "bg-red-500"}`}
                  style={{ width: isPremium ? "74%" : "100%" }}
                />
              </div>
              <span className="text-muted mt-1 block text-[0.65rem]">
                {isPremium
                  ? "Resets monthly. Overages automatically adapt via standard fallback routers."
                  : "✖ Base pipeline exhausted. System is throttling heavy analysis execution logs."}
              </span>
            </div>

            {/* Multi-variable vector bounds */}
            <div className="border-border/30 mt-5 grid grid-cols-2 gap-4 border-t pt-4">
              <div>
                <span className="text-muted block text-[0.62rem] font-bold tracking-wider uppercase">
                  Knowledge Cache
                </span>
                <span className="text-text mt-0.5 block font-serif text-sm font-bold">
                  {isPremium ? "8 / 20" : "3 / 3"}{" "}
                  <span className="text-muted font-sans text-xs font-normal">
                    documents vectorized
                  </span>
                </span>
              </div>
            </div>
          </div>

          <span className="text-muted mt-4 block font-mono text-[0.6rem] tracking-wider uppercase">
            Ecosystem parameters running matching 2026 platform architecture
            protocols.
          </span>
        </div>
      </div>

      {/* ── ACTIVE PLAN SWITCHING OVERLAY MATRIX (MODAL INTERFACE) ── */}
      {isChangingPlan && (
        <PlanSwitchModal
          isAutoRenewActive={isAutoRenewActive}
          triggerPlanSwitch={triggerPlanSwitch}
          currentPlanId={currentPlanId}
          onClose={() => setIsChangingPlan(false)}
        />
      )}

      {/* ── CANCELLATION CONFIRMATION MODAL INTERFACE ── */}
      {isCancelingPlan && (
        <div className="bg-bg/80 animate-fade-in fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-surface flex w-full max-w-md flex-col gap-4 rounded-2xl border border-red-200/60 p-6 shadow-xl">
            <div className="flex flex-col gap-1.5">
              <h3 className="text-text font-serif text-lg font-bold">
                Turn Off Subscription Auto-Renewal?
              </h3>
              <p className="text-muted text-xs leading-relaxed">
                Your premium Scholar Pro parameters will remain completely
                functional until your billing window concludes on{" "}
                <strong className="text-text font-semibold">
                  July 18, 2026
                </strong>
                . No future recurring statements will process after validation.
              </p>
            </div>

            <div className="mt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsCancelingPlan(false)}
                className="border-border/80 text-text hover:bg-bg/40 cursor-pointer rounded-xl border px-4 py-2 text-xs font-semibold transition"
              >
                Keep Auto-Renew On
              </button>
              <button
                type="button"
                onClick={confirmCancelSubscription}
                className="cursor-pointer rounded-xl bg-red-600 px-4 py-2 text-xs font-semibold text-white shadow-xs transition hover:bg-red-700"
              >
                Turn Off Auto-Renew
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── TRANSACTION LEDGER TABLE SECTION ── */}
      <div className="bg-surface border-border/80 rounded-2xl border p-6 shadow-xs">
        <span className="text-muted block font-mono text-[0.62rem] font-bold tracking-wider uppercase">
          Transaction Records
        </span>
        <h3 className="text-text mt-1 font-serif text-base font-bold">
          Historical Statement Ledger
        </h3>

        <div className="mt-5 overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-border/60 text-muted border-b font-mono text-[0.62rem] tracking-wider uppercase">
                <th className="pb-3 font-bold">Reference Token</th>
                <th className="pb-3 font-bold">Settlement Date</th>
                <th className="pb-3 font-bold">Amount Paid</th>
                <th className="pb-3 font-bold">Ledger Status</th>
                <th className="pb-3 text-right font-bold">Receipt Asset</th>
              </tr>
            </thead>
            <tbody className="divide-border/40 divide-y text-xs">
              {invoiceHistory.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="hover:bg-bg/20 transition-colors"
                >
                  <td className="text-text py-3.5 font-mono font-medium">
                    {invoice.id}
                  </td>
                  <td className="text-muted py-3.5">{invoice.date}</td>
                  <td className="text-text py-3.5 font-medium">
                    ${invoice.amount.toFixed(2)}
                  </td>
                  <td className="py-3.5">
                    <span className="inline-flex items-center rounded border border-green-100 bg-green-50 px-2 py-0.5 text-[0.58rem] font-bold tracking-wide text-green-600 uppercase">
                      {invoice.status}
                    </span>
                  </td>
                  <td className="py-3.5 text-right">
                    <a
                      href={invoice.downloadUrl}
                      className="text-accent text-[0.7rem] font-semibold tracking-wider uppercase hover:underline"
                    >
                      Download PDF
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

function PlanSwitchModal({
  onClose,
  currentPlanId,
  isAutoRenewActive,
  triggerPlanSwitch,
}: {
  onClose(): void;
  triggerPlanSwitch: (planId: PlanTier) => void;
  currentPlanId: PlanTier;
  isAutoRenewActive?: boolean;
}) {
  return (
    <div className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur">
      <div className="bg-surface border-border flex w-full max-w-2xl flex-col gap-4 rounded-2xl border p-6 shadow-xl">
        <div className="border-border/40 flex items-start justify-between border-b pb-3">
          <div>
            <h3 className="text-text font-serif text-lg font-bold">
              Ecosystem Tier Framework Switcher
            </h3>
            <p className="text-muted text-xs">
              Instantly migrate parameters across platform resource bounds.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-muted hover:text-text cursor-pointer p-1 font-mono text-xs"
          >
            ✕ Close
          </button>
        </div>

        <div className="my-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {plans.map((plan) => {
            const isSelected = currentPlanId === plan.id;

            // Disable conditions to prevent duplicate requests when auto-renew is already turned off
            const isDowngradeDisabled =
              plan.id === "free" &&
              currentPlanId === "pro" &&
              !isAutoRenewActive;
            const isButtonDisabled = isSelected || isDowngradeDisabled;

            return (
              <div
                key={plan.id}
                className={`flex flex-col justify-between rounded-xl border p-4 transition-all ${
                  isSelected
                    ? "border-accent bg-accent/5 ring-accent ring-1"
                    : "border-border/60 bg-bg/20 hover:border-border"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between">
                    <h4 className="text-text flex items-center gap-2 font-serif text-sm font-bold">
                      {plan.name}
                    </h4>
                    <span className="text-text font-serif text-sm font-bold">
                      ${plan.price}
                    </span>
                  </div>
                  <p className="text-muted mt-1 text-[0.68rem]">
                    {plan.description}
                  </p>

                  <ul className="mt-3 flex flex-col gap-1">
                    {plan.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className="text-text flex items-center gap-1.5 text-[0.65rem]"
                      >
                        <span className="text-accent text-[0.55rem]">✓</span>{" "}
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  disabled={isButtonDisabled}
                  onClick={() => triggerPlanSwitch(plan.id)}
                  className={`mt-5 w-full cursor-pointer rounded-lg py-1.5 text-center text-xs font-bold transition ${
                    isButtonDisabled
                      ? "bg-border/40 text-muted cursor-not-allowed"
                      : "bg-text text-bg hover:opacity-90"
                  }`}
                >
                  {isSelected
                    ? isAutoRenewActive
                      ? "Active Configuration"
                      : "Active (Ends July 18)"
                    : isDowngradeDisabled
                      ? "Downgrade Pending Cycle End"
                      : plan.price === 0
                        ? "Downgrade to Base"
                        : "Deploy Premium Framework"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
