import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { industries } from "@/lib/data/industries";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Industry-specific IP threats and recommended enforcement services for Vietnam-focused brands.",
};

export default function IndustriesPage() {
  return (
    <div className="container space-y-8 py-12">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Industry Coverage
        </p>
        <h1 className="text-4xl">Risk patterns differ by industry</h1>
        <p className="max-w-3xl text-muted-foreground">
          We align monitoring and enforcement approach to sector-specific threat behavior and platform exposure.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {industries.map((industry) => (
          <Card key={industry.slug} className="border-border/70">
            <CardHeader>
              <CardTitle className="text-2xl">{industry.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="mb-2 text-sm font-semibold text-foreground">Typical threats</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {industry.threats.map((threat) => (
                    <li key={threat}>• {threat}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2 text-sm font-semibold text-foreground">
                  Recommended services
                </p>
                <div className="flex flex-wrap gap-2">
                  {industry.recommendedServiceIds.map((serviceId) => {
                    const service = services.find((item) => item.id === serviceId);
                    if (!service) return null;
                    return (
                      <Badge key={serviceId} variant="secondary">
                        {service.title}
                      </Badge>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
