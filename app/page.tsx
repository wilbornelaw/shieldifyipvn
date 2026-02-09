import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, CircleDashed, ShieldAlert } from "lucide-react";

import { CtaBanner } from "@/components/shared/cta-banner";
import { FaqSection } from "@/components/shared/faq-section";
import { FinalLeadForm } from "@/components/shared/final-lead-form";
import { Reveal } from "@/components/shared/reveal";
import { ServiceCard } from "@/components/shared/service-card";
import { ServiceIcon } from "@/components/shared/service-icon";
import { StaggerGrid, StaggerItem } from "@/components/shared/stagger-grid";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { caseStudies } from "@/lib/data/case-studies";
import { faqs } from "@/lib/data/faqs";
import { services } from "@/lib/data/services";
import { testimonials } from "@/lib/data/testimonials";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Shieldify IP delivers high-trust, compliance-focused IP enforcement support for brands operating in Vietnam.",
};

const trustItems = [
  "Vietnam-focused enforcement",
  "Evidence-ready reporting",
  "Platform policy expertise",
  "Fast response",
];

const problems = [
  "Counterfeit listings",
  "Impersonation pages",
  "Trademark misuse",
  "Copyright misuse",
];

const processSteps = ["Intake", "Verification", "Enforcement", "Reporting"];

export default function Home() {
  return (
    <div className="container space-y-20 py-14 md:space-y-24 md:py-20">
      <section className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <Reveal revealKey="home-hero-copy">
          <div className="space-y-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Shieldify IP Co., Ltd.
            </p>
            <h1 className="max-w-3xl text-5xl leading-[1.08] sm:text-6xl">
              IP enforcement operations engineered for trust, speed, and
              compliance.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground sm:text-[1.0625rem]">
              Shieldify IP supports Vietnam-focused brands with premium takedown
              workflows, evidence-ready documentation, and structured reporting
              across major digital platforms.
            </p>
            <div className="flex flex-wrap gap-2.5 pt-1">
              <Button asChild size="lg">
                <Link href="/contact">
                  Request a Takedown Review <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1} revealKey="home-hero-media">
          <div className="relative overflow-hidden rounded-lg border border-border">
            <Image
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80"
              alt="Legal and compliance workspace"
              width={900}
              height={700}
              className="image-fade-in h-full min-h-[340px] w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081632]/55 to-transparent" />
          </div>
        </Reveal>
      </section>

      <Reveal revealKey="home-trust">
        <section className="rounded-lg border border-border bg-card">
        <div className="grid gap-3 p-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-md border border-border bg-white px-3 py-2 text-sm font-medium"
            >
              <CheckCircle2 className="h-4 w-4 text-primary" />
              {item}
            </div>
          ))}
        </div>
        </section>
      </Reveal>

      <Reveal revealKey="home-problem-solution">
        <section className="space-y-6">
        <h2 className="text-3xl">From signal to action</h2>
        <Tabs defaultValue="threats" className="space-y-5">
          <TabsList>
            <TabsTrigger value="threats">Threat patterns</TabsTrigger>
            <TabsTrigger value="solution">Response model</TabsTrigger>
          </TabsList>
          <TabsContent value="threats">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {problems.map((problem) => (
                <Card key={problem} className="border-border/70">
                  <CardHeader className="space-y-3">
                    <ShieldAlert className="h-5 w-5 text-primary" />
                    <CardTitle>{problem}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Structured identification, policy-aligned reporting, and audit-ready tracking for consistent response quality.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="solution">
            <Card className="border-border/70">
              <CardContent className="pt-6 text-sm text-muted-foreground">
                Shieldify IP combines monitoring, rights verification, policy-matched submissions, and evidence-ready reporting to maintain enforcement continuity across teams.
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        </section>
      </Reveal>

      <Reveal revealKey="home-services">
        <section className="space-y-6">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-3xl">Core Services</h2>
          <Button asChild variant="ghost">
            <Link href="/services">
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <StaggerGrid className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <StaggerItem key={service.id}>
              <ServiceCard
                title={service.title}
                description={service.summary}
                href="/services"
                icon={<ServiceIcon name={service.icon} className="h-5 w-5" />}
              />
            </StaggerItem>
          ))}
        </StaggerGrid>
        </section>
      </Reveal>

      <Reveal revealKey="home-process">
        <section className="space-y-6">
        <h2 className="text-3xl">Process Timeline</h2>
        <div className="grid gap-3 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step} className="rounded-lg border border-border bg-card p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Step {index + 1}
              </p>
              <div className="mt-3 flex items-center gap-2">
                <CircleDashed className="h-4 w-4 text-primary" />
                <p className="text-base font-semibold">{step}</p>
              </div>
            </div>
          ))}
        </div>
        </section>
      </Reveal>

      <Reveal revealKey="home-case-studies">
        <section className="space-y-6">
        <h2 className="text-3xl">Featured Case Studies</h2>
        <StaggerGrid className="grid gap-4 md:grid-cols-3">
          {caseStudies.slice(0, 3).map((study) => (
            <StaggerItem key={study.id}>
              <Card className="group overflow-hidden border-border/70">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={`${study.title} visual`}
                    fill
                    className="image-fade-in object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{study.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  {study.results.map((result) => (
                    <p key={result}>{result}</p>
                  ))}
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGrid>
        </section>
      </Reveal>

      <Reveal revealKey="home-testimonials">
        <section className="space-y-6">
        <h2 className="text-3xl">Testimonials</h2>
        <StaggerGrid className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <StaggerItem key={item.name}>
              <TestimonialCard {...item} />
            </StaggerItem>
          ))}
        </StaggerGrid>
        </section>
      </Reveal>

      <Reveal revealKey="home-faq">
        <section className="space-y-6">
        <h2 className="text-3xl">Frequently Asked Questions</h2>
        <FaqSection items={faqs} />
        </section>
      </Reveal>

      <Reveal revealKey="home-cta">
        <CtaBanner />
      </Reveal>
      <Reveal revealKey="home-lead-form">
        <FinalLeadForm />
      </Reveal>
    </div>
  );
}
