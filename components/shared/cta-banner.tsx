import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="rounded-lg border border-[#cfd8ea] bg-gradient-to-r from-[#f4f7fc] via-[#edf2fb] to-[#eaf0fb] p-8 sm:p-10">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Ready to act</p>
          <h3 className="text-2xl font-semibold text-foreground sm:text-3xl">
            Move from detection to documented enforcement with confidence.
          </h3>
          <p className="text-sm text-muted-foreground sm:text-base">
            Submit your case details and receive a structured takedown review plan tailored to platform policy requirements.
          </p>
        </div>
        <Button asChild size="lg">
          <Link href="/contact">Request a Takedown Review</Link>
        </Button>
      </div>
    </section>
  );
}
