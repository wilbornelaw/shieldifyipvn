import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/shared/reveal";
import { ServiceIcon } from "@/components/shared/service-icon";
import { StaggerGrid, StaggerItem } from "@/components/shared/stagger-grid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Platform enforcement, marketplace monitoring, impersonation response, and evidence-ready documentation services.",
};

const categories = [
  "Platform Enforcement",
  "Marketplace Monitoring",
  "Impersonation & Scam Takedowns",
  "Evidence & Documentation",
] as const;

export default function ServicesPage() {
  return (
    <div className="container py-12">
      <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
        <div className="space-y-8">
          <Reveal revealKey="services-header">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Service Catalog
              </p>
              <h1 className="text-4xl">Compliance-first IP enforcement services</h1>
              <p className="max-w-3xl text-muted-foreground">
                Every service includes documented workflows and timing guidance. Final takedown
                resolution always depends on platform review.
              </p>
            </div>
          </Reveal>

          {categories.map((category) => (
            <section key={category} className="space-y-4">
              <h2 className="text-2xl">{category}</h2>
              <StaggerGrid className="space-y-4">
                {services
                  .filter((service) => service.category === category)
                  .map((service) => (
                    <StaggerItem key={service.id}>
                      <Card className="border-border/70">
                        <CardHeader>
                          <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                            <ServiceIcon name={service.icon} className="h-5 w-5" />
                          </div>
                          <CardTitle className="text-xl">{service.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">{service.summary}</p>
                        </CardHeader>
                        <CardContent className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-3 text-sm text-muted-foreground">
                            <p>
                              <span className="font-semibold text-foreground">What it is: </span>
                              {service.whatItIs}
                            </p>
                            <p>
                              <span className="font-semibold text-foreground">When to use: </span>
                              {service.whenToUse}
                            </p>
                          </div>
                          <div className="space-y-3 text-sm">
                            <div>
                              <p className="font-semibold text-foreground">Deliverables</p>
                              <ul className="mt-2 space-y-1 text-muted-foreground">
                                {service.deliverables.map((item) => (
                                  <li key={item}>• {item}</li>
                                ))}
                              </ul>
                            </div>
                            <Badge variant="secondary">{service.timeline}</Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </StaggerItem>
                  ))}
              </StaggerGrid>
            </section>
          ))}
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-xl border border-border/70 bg-card p-5">
            <h3 className="text-lg font-semibold">Need rapid support?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Send your case details for a structured takedown review.
            </p>
            <Button asChild className="mt-4 w-full">
              <Link href="/contact">Request a Takedown Review</Link>
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
}
