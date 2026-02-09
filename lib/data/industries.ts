import { Industry } from "@/lib/types";

export const industries: Industry[] = [
  {
    slug: "cosmetics",
    name: "Cosmetics",
    threats: ["Counterfeit product listings", "Unauthorized reseller bundles", "Misuse of before/after assets"],
    recommendedServiceIds: ["marketplace-monitoring", "platform-enforcement", "evidence-documentation"]
  },
  {
    slug: "fashion",
    name: "Fashion",
    threats: ["Design imitation", "Brand name keyword abuse", "Fraudulent outlet pages"],
    recommendedServiceIds: ["marketplace-monitoring", "impersonation-scam", "platform-enforcement"]
  },
  {
    slug: "luxury-goods",
    name: "Luxury Goods",
    threats: ["High-volume replicas", "Social commerce counterfeits", "Cross-border seller networks"],
    recommendedServiceIds: ["marketplace-monitoring", "platform-enforcement", "evidence-documentation"]
  },
  {
    slug: "consumer-electronics",
    name: "Consumer Electronics",
    threats: ["Unauthorized accessory bundles", "Clone storefronts", "Warranty confusion scams"],
    recommendedServiceIds: ["platform-enforcement", "impersonation-scam", "policy-advisory"]
  },
  {
    slug: "banking-fintech",
    name: "Banking & Fintech",
    threats: ["Phishing pages", "Impersonation accounts", "Fraud app download links"],
    recommendedServiceIds: ["impersonation-scam", "evidence-documentation", "platform-enforcement"]
  },
  {
    slug: "education",
    name: "Education",
    threats: ["Fake enrollment pages", "Impersonation of faculty profiles", "Unauthorized content reposting"],
    recommendedServiceIds: ["impersonation-scam", "platform-enforcement", "evidence-documentation"]
  }
];
