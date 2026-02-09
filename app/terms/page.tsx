import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Website terms for using Shieldify IP informational content and inquiry channels.",
};

export default function TermsPage() {
  return (
    <div className="container max-w-4xl space-y-6 py-12">
      <h1 className="text-4xl">Terms of Use</h1>
      <p className="text-sm text-muted-foreground">Effective date: February 9, 2026</p>
      <p className="text-muted-foreground">
        By using this website, you agree to these terms and to use the content for lawful informational and business communication purposes.
      </p>
      <h2 className="text-2xl">Service Scope</h2>
      <p className="text-muted-foreground">
        Content on this website describes operational IP enforcement support services. It does not establish attorney-client relationship or legal representation.
      </p>
      <h2 className="text-2xl">Intellectual Property</h2>
      <p className="text-muted-foreground">
        Website content, structure, and branding are protected and may not be reused without permission except as permitted by law.
      </p>
      <h2 className="text-2xl">No Legal Advice</h2>
      <p className="text-muted-foreground">
        Shieldify IP provides brand protection and IP enforcement support. We do not provide legal advice. For legal advice, consult qualified counsel.
      </p>
      <h2 className="text-2xl">Limitation</h2>
      <p className="text-muted-foreground">
        Platform takedown outcomes are controlled by platform policy review and cannot be guaranteed.
      </p>
    </div>
  );
}
