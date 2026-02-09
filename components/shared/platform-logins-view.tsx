"use client";

import Link from "next/link";
import { Copyright, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motionDurations, motionEase, staggerContainer, staggerItem } from "@/lib/motion";

function PlatformCard({
  title,
  description,
  href,
  buttonLabel,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  buttonLabel: string;
  icon: ReactNode;
}) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -3 }}
      transition={{ duration: motionDurations.fast, ease: motionEase }}
      className="h-full"
    >
      <Card className="h-full border-border bg-card">
        <CardHeader className="space-y-4">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-primary/20 bg-primary/5 text-primary">
            {icon}
          </div>
          <CardTitle className="text-2xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground">{description}</p>
          <Button asChild className="w-full sm:w-auto">
            <Link href={href} target="_blank" rel="noopener noreferrer">
              {buttonLabel}
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function PlatformLoginsView() {
  return (
    <div className="container py-12">
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: motionDurations.base, ease: motionEase }}
        className="mx-auto max-w-5xl space-y-8"
      >
        <header className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Access Gateway
          </p>
          <h1 className="text-4xl">Platform Login</h1>
          <p className="text-muted-foreground">
            Select the platform you want to access.
          </p>
        </header>

        <motion.div
          className="grid gap-5 md:grid-cols-2"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <PlatformCard
            title="Brand Protection"
            description="Access the Brand Protection platform to manage trademark enforcement, counterfeit takedowns, and impersonation reports."
            href="https://bp.shieldifyip.vn"
            buttonLabel="Login to Brand Protection"
            icon={<ShieldCheck className="h-5 w-5" />}
          />
          <PlatformCard
            title="Anti-Piracy"
            description="Access the Anti-Piracy platform to manage copyright enforcement, content removal requests, and infringement monitoring."
            href="https://ap.shieldifyip.vn"
            buttonLabel="Login to Anti-Piracy"
            icon={<Copyright className="h-5 w-5" />}
          />
        </motion.div>
      </motion.section>
    </div>
  );
}

