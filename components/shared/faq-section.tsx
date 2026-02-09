"use client";

import { motion } from "framer-motion";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motionDurations, motionEase } from "@/lib/motion";
import { Faq } from "@/lib/types";

export function FaqSection({ items }: { items: Faq[] }) {
  return (
    <Accordion type="single" collapsible className="w-full rounded-xl border border-border/70 bg-card px-6">
      {items.map((item, index) => (
        <motion.div
          key={item.question}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: motionDurations.base,
            ease: motionEase,
            delay: index * 0.05,
          }}
        >
          <AccordionItem value={`faq-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        </motion.div>
      ))}
    </Accordion>
  );
}
