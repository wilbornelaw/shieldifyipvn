import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Info, User, Users } from "lucide-react";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Starter, Professional, and Enterprise pricing tiers for IP enforcement and brand protection support.",
};

type Plan = {
  name: string;
  subtitle: string;
  icon: typeof User;
  popular?: boolean;
  intro?: string;
  features: string[];
};

const plans: Plan[] = [
  {
    name: "Starter plan",
    subtitle: "For basic brand protection needs",
    icon: User,
    features: [
      "Unlimited detections and takedowns",
      "Counterfeits and brand abuse monitoring",
      "1 trademark protected",
      "Marketplace protection",
      "AI copilot",
      "Custom AI with expert oversight",
      "Advanced image and text recognition",
      "Prioritization technology",
      "Live dashboards",
      "Document management",
      "Dedicated customer success",
      "Built-in optimization loops",
      "Standard migration",
    ],
  },
  {
    name: "Professional plan",
    subtitle: "For growing enforcement challenges",
    icon: Users,
    popular: true,
    intro: "Everything in Starter, plus:",
    features: [
      "Counterfeits, brand abuse, and replicas",
      "Up to 10 trademarks or designs protected",
      "Catalog image protection",
      "Social media protection",
      "Priority enforcement",
      "Zero-gap migration",
      "Quarterly discovery audit",
      "10+ add-ons available",
      "Revenue recovery program",
    ],
  },
  {
    name: "Enterprise plan",
    subtitle: "For complex, large-scale issues",
    icon: Building2,
    intro: "Everything in Professional, plus:",
    features: [
      "10+ trademarks or designs protected",
      "Standalone site protection",
      "Paid search ad protection",
      "Social media ad protection",
      "Premium regional coverage",
      "Actor network mapping",
      "5 custom dashboards",
      "Managed services",
      "10+ add-ons available",
    ],
  },
];

const includedItems = [
  "Platform policy-aligned report preparation and submission support",
  "Evidence packaging with URL-level references and status tracking",
  "Case prioritization based on risk and business impact",
  "Recurring reporting summaries for operations and leadership teams",
];

const excludedItems = [
  "Legal representation, litigation, or court filings",
  "Regulatory legal advice or formal legal opinions",
  "Guaranteed takedown approval on any third-party platform",
  "Emergency incident response outside agreed service scope",
];

const onboardingSteps = [
  {
    step: "Step 1",
    title: "Scope alignment",
    detail: "Define priority platforms, abuse patterns, and reporting cadence.",
  },
  {
    step: "Step 2",
    title: "Rights verification",
    detail: "Collect ownership references and align documentation workflow.",
  },
  {
    step: "Step 3",
    title: "Operational rollout",
    detail: "Activate detection, triage, and policy-matched submission process.",
  },
  {
    step: "Step 4",
    title: "Reporting cadence",
    detail: "Deliver recurring progress and evidence-ready status summaries.",
  },
];

const pricingFaqs = [
  {
    q: "Can you customize a plan for multi-brand portfolios?",
    a: "Yes. Enterprise scoping can be tailored for portfolio structures, shared enforcement teams, and platform-specific priorities.",
  },
  {
    q: "Do plans include monitoring and takedown support together?",
    a: "Yes. Plans are structured to combine detection, triage, and submission support with progress reporting.",
  },
  {
    q: "Are timelines guaranteed?",
    a: "No. Submission speed can be defined operationally, but final removal timelines depend on platform review.",
  },
  {
    q: "Can we start with one plan and upgrade later?",
    a: "Yes. Most clients begin with a focused scope and expand once workflows and risk baselines are established.",
  },
];

export default function PricingPage() {
  return (
    <div className="container space-y-8 py-12 md:space-y-10 md:py-14">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Pricing
        </p>
        <h1 className="text-4xl">Choose the right enforcement scope</h1>
        <p className="max-w-3xl text-muted-foreground">
          Structured plans for different enforcement maturity levels. Final outcomes and timelines
          depend on platform review.
        </p>
      </header>

      <section className="grid gap-5 lg:grid-cols-3">
        {plans.map((plan) => {
          const Icon = plan.icon;

          return (
            <article
              key={plan.name}
              className={`overflow-hidden rounded-lg border bg-card ${
                plan.popular
                  ? "border-primary/50 shadow-[0_8px_24px_rgba(38,56,122,0.08)]"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="bg-gradient-to-r from-[#26387a] via-[#33499a] to-[#4b61b8] px-4 py-1.5 text-center text-xs font-semibold uppercase tracking-[0.08em] text-white">
                  Most Popular
                </div>
              )}

              <div className="space-y-6 p-5 md:p-6">
                <div className="space-y-3">
                  <Icon className="h-5 w-5 text-foreground/85" aria-hidden="true" />
                  <div>
                    <h2 className="text-3xl font-semibold tracking-[-0.02em]">{plan.name}</h2>
                    <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
                  </div>
                </div>

                <Button asChild className="w-auto">
                  <Link href="/contact">Request Pricing</Link>
                </Button>

                <div className="space-y-2.5">
                  {plan.intro && <p className="text-sm text-muted-foreground">{plan.intro}</p>}
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center justify-between gap-3 border-b border-border/70 pb-2.5 text-sm text-muted-foreground"
                    >
                      <span>{feature}</span>
                      <Info className="h-3.5 w-3.5 shrink-0 text-muted-foreground/70" />
                    </div>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        <article className="rounded-lg border border-border bg-card p-5 md:p-6">
          <h2 className="text-2xl">What&apos;s included</h2>
          <div className="mt-4 space-y-2.5">
            {includedItems.map((item) => (
              <p
                key={item}
                className="border-b border-border/70 pb-2.5 text-sm text-muted-foreground"
              >
                {item}
              </p>
            ))}
          </div>
        </article>
        <article className="rounded-lg border border-border bg-card p-5 md:p-6">
          <h2 className="text-2xl">Not included</h2>
          <div className="mt-4 space-y-2.5">
            {excludedItems.map((item) => (
              <p
                key={item}
                className="border-b border-border/70 pb-2.5 text-sm text-muted-foreground"
              >
                {item}
              </p>
            ))}
          </div>
        </article>
      </section>

      <section className="rounded-lg border border-border bg-card p-5 md:p-6">
        <h2 className="text-2xl">How onboarding works</h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Typical onboarding is structured to establish reporting quality early and reduce delays in
          enforcement execution.
        </p>
        <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {onboardingSteps.map((item) => (
            <div key={item.step} className="rounded-md border border-border bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                {item.step}
              </p>
              <h3 className="mt-2 text-lg">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-border bg-card p-5 md:p-6">
        <h2 className="text-2xl">Pricing FAQ</h2>
        <div className="mt-4 space-y-3">
          {pricingFaqs.map((item) => (
            <div key={item.q} className="rounded-md border border-border bg-white p-4">
              <h3 className="text-base font-semibold">{item.q}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <p className="rounded-md border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
        Shieldify IP provides brand protection and IP enforcement support. We do not provide legal
        advice. For legal advice, consult qualified counsel.
      </p>
    </div>
  );
}
