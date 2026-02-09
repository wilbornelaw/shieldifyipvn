import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Shieldify IP website visitors and inquiry submissions.",
};

export default function PrivacyPage() {
  return (
    <div className="container max-w-4xl space-y-6 py-12">
      <h1 className="text-4xl">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground">Effective date: February 9, 2026</p>
      <p className="text-muted-foreground">
        Shieldify IP Co., Ltd. collects contact and case-related information submitted through this website for enforcement support communication and service scoping.
      </p>
      <h2 className="text-2xl">Information We Collect</h2>
      <p className="text-muted-foreground">
        We may collect names, company information, contact details, submitted URLs, and issue descriptions provided voluntarily through forms.
      </p>
      <h2 className="text-2xl">How We Use Information</h2>
      <p className="text-muted-foreground">
        Submitted information is used to evaluate inquiry scope, provide response updates, and improve service operations.
      </p>
      <h2 className="text-2xl">Data Handling</h2>
      <p className="text-muted-foreground">
        This demo website stores form submissions locally in your browser for demonstration purposes. No backend transmission occurs in this implementation.
      </p>
      <h2 className="text-2xl">Legal Notice</h2>
      <p className="text-muted-foreground">
        Shieldify IP provides brand protection and IP enforcement support. We do not provide legal advice. For legal advice, consult qualified counsel.
      </p>
    </div>
  );
}
