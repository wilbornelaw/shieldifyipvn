import { Service } from "@/lib/types";

export const services: Service[] = [
  {
    id: "platform-enforcement",
    slug: "platform-enforcement",
    title: "Platform Enforcement",
    category: "Platform Enforcement",
    summary: "Preparation and submission of rights-owner reports across social and commerce platforms.",
    whatItIs:
      "We prepare notice packages aligned with each platform's policy requirements and submit infringement reports with supporting evidence.",
    whenToUse:
      "Use when unauthorized listings, pages, or content are active on social media, marketplaces, or hosted storefronts.",
    deliverables: [
      "Platform-specific notice package",
      "Submission logs and status tracking",
      "Escalation-ready evidence summary"
    ],
    timeline: "Initial submission usually within 24-72 hours after verification. Final resolution depends on platform review.",
    icon: "ShieldCheck"
  },
  {
    id: "marketplace-monitoring",
    slug: "marketplace-monitoring",
    title: "Marketplace Monitoring",
    category: "Marketplace Monitoring",
    summary: "Continuous monitoring for suspicious product listings and seller behavior.",
    whatItIs:
      "We scan public marketplaces to detect high-risk listings, suspicious pricing patterns, and repeated misuse of brand assets.",
    whenToUse:
      "Use when brands need regular visibility over counterfeit risk in fast-moving product categories.",
    deliverables: ["Weekly detection summaries", "Prioritized enforcement queue", "Seller recurrence mapping"],
    timeline: "Monitoring begins immediately after onboarding. Review cycles are weekly or custom. Enforcement timing depends on platform review.",
    icon: "Radar"
  },
  {
    id: "impersonation-scam",
    slug: "impersonation-scam",
    title: "Impersonation & Scam Takedowns",
    category: "Impersonation & Scam Takedowns",
    summary: "Targeted response for fake pages, fraudulent profiles, and phishing-style abuse.",
    whatItIs:
      "We investigate impersonation signals, compile identity misuse evidence, and submit coordinated reports for urgent removal.",
    whenToUse:
      "Use when fake social pages, scam messaging accounts, or deceptive domains threaten customer trust.",
    deliverables: ["Threat triage brief", "Impersonation evidence package", "Removal status report"],
    timeline: "Critical submissions can be issued same-day after validation. Resolution depends on platform review and policy scope.",
    icon: "UserX"
  },
  {
    id: "evidence-documentation",
    slug: "evidence-documentation",
    title: "Evidence & Documentation",
    category: "Evidence & Documentation",
    summary: "Structured documentation for enforcement workflows and potential legal escalation.",
    whatItIs:
      "We create timestamped records, infringement comparisons, and chain-of-custody style reporting to support internal or counsel review.",
    whenToUse:
      "Use when enforcement volume is high, repeat offenders are present, or legal teams require clean supporting records.",
    deliverables: ["Timestamped evidence archive", "Infringement matrix by URL/account", "Executive-ready enforcement report"],
    timeline: "Baseline documentation package is typically prepared within 3-5 business days. Final timing depends on case complexity and platform review.",
    icon: "FileText"
  },
  {
    id: "policy-advisory",
    slug: "policy-advisory",
    title: "Policy Workflow Advisory",
    category: "Platform Enforcement",
    summary: "Practical guidance for improving report acceptance rates across major platforms.",
    whatItIs:
      "We review notice templates and evidence structure against known policy expectations and optimize reporting workflow quality.",
    whenToUse:
      "Use when internal teams face repeated rejections, delays, or inconsistent enforcement outcomes.",
    deliverables: ["Workflow gap analysis", "Revised reporting templates", "Internal playbook recommendations"],
    timeline: "Advisory review is commonly completed in 5-10 business days. Downstream platform decisions depend on platform review.",
    icon: "Scale"
  }
];
