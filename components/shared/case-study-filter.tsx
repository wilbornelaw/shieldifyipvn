"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motionDurations, motionEase, staggerContainer, staggerItem } from "@/lib/motion";
import { caseStudies } from "@/lib/data/case-studies";

const tags = ["All", "Counterfeit", "Impersonation", "Marketplace", "Social Media", "Copyright"];

export function CaseStudyFilter() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered = useMemo(() => {
    if (activeTag === "All") {
      return caseStudies;
    }
    return caseStudies.filter((study) => study.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActiveTag(tag)}
            className={`rounded-full border px-3 py-1.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              activeTag === tag
                ? "border-primary/20 bg-primary/10 text-primary"
                : "border-border bg-white text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <motion.div
        className="grid gap-5 md:grid-cols-2"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.15 }}
      >
        {filtered.map((study) => (
          <motion.div
            key={study.id}
            variants={staggerItem}
            whileHover={{ y: -3 }}
            transition={{ duration: motionDurations.fast, ease: motionEase }}
          >
            <Card className="group overflow-hidden border-border">
              <div className="relative h-52">
              <Image
                src={study.image}
                alt={`${study.title} placeholder visual`}
                fill
                className="image-fade-in object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />
              </div>
              <CardHeader>
                <div className="mb-3 flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-xl">{study.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">Challenge: </span>
                  {study.challenge}
                </p>
                <p>
                  <span className="font-semibold text-foreground">Approach: </span>
                  {study.approach}
                </p>
                <div>
                  <p className="mb-2 font-semibold text-foreground">Example results:</p>
                  <ul className="space-y-1">
                    {study.results.map((result) => (
                      <li key={result}>{result}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
