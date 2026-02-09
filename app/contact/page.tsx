import type { Metadata } from "next";
import { Mail, MapPin, PhoneCall } from "lucide-react";

import { ContactForm } from "@/components/shared/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a takedown review from Shieldify IP with structured case details and platform information.",
};

export default function ContactPage() {
  return (
    <div className="container space-y-8 py-12">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Contact
        </p>
        <h1 className="text-4xl">Request a Takedown Review</h1>
        <p className="max-w-3xl text-muted-foreground">
          Submit your case details. This form is for enforcement support inquiries and does not
          constitute legal advice.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <ContactForm />
        <Card className="h-fit border-border/70">
          <CardHeader>
            <CardTitle>Contact details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-primary" />
              info@shieldifyip.vn
            </p>
            <p className="flex items-start gap-2">
              <PhoneCall className="mt-0.5 h-4 w-4 text-primary" />
              +84777199678
            </p>
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" />
              Le Hoan Street, Phong Coc Village, Xuan Lap Commune, Thanh Hoa Province, Vietnam
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
