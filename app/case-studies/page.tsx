import type { Metadata } from "next";

import { CaseStudyFilter } from "@/components/shared/case-study-filter";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Illustrative IP enforcement case studies with challenge, approach, and clearly labeled example results.",
};

export default function CaseStudiesPage() {
  return (
    <div className="container space-y-8 py-12">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Case Studies
        </p>
        <h1 className="text-4xl">Enforcement outcomes, clearly documented</h1>
        <p className="max-w-3xl text-muted-foreground">
          The following examples are anonymized and include illustrative figures labeled as
          example results.
        </p>
      </div>
      <CaseStudyFilter />
    </div>
  );
}
