"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motionDurations, motionEase } from "@/lib/motion";

export function ServiceCard({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: motionDurations.fast, ease: motionEase }}
      className="h-full"
    >
      <Card className="group h-full border-border bg-white">
        <CardHeader>
          <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-md border border-primary/20 bg-primary/5 text-primary">
            {icon}
          </div>
          <CardTitle className="text-lg tracking-[-0.01em]">{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">{description}</p>
          <Link
            href={href}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition group-hover:gap-2.5"
          >
            Learn more <ArrowRight className="h-4 w-4" />
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}
