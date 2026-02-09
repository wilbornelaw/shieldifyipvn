import type { Metadata } from "next";
import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Shieldify IP Co., Ltd. and our compliance-focused approach to digital IP enforcement support.",
};

export default function AboutPage() {
  return (
    <div className="container space-y-10 py-12">
      <section className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            About Shieldify IP
          </p>
          <h1 className="text-4xl">Built for trust in high-risk digital environments</h1>
          <p className="text-muted-foreground">
            Shieldify IP Co., Ltd. supports brands with operational IP enforcement workflows
            designed for consistency, documentation quality, and executive visibility.
          </p>
          <p className="text-muted-foreground">
            Our Vietnam-focused model combines marketplace awareness, platform policy expertise, and
            evidence discipline for scalable takedown response programs.
          </p>
        </div>
        <div className="relative min-h-[280px] overflow-hidden rounded-xl border border-border/70">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
            alt="Modern office tower"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        <Card className="border-border/70">
          <CardHeader>
            <CardTitle>Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Deliver reliable, policy-aligned enforcement support that protects customer trust and
            brand equity.
          </CardContent>
        </Card>
        <Card className="border-border/70">
          <CardHeader>
            <CardTitle>Operating Principles</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Evidence integrity, transparent reporting, and response prioritization based on business
            risk.
          </CardContent>
        </Card>
        <Card className="border-border/70">
          <CardHeader>
            <CardTitle>Market Focus</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Vietnam-focused channels with workflows adaptable to regional, multi-platform enforcement
            programs.
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
