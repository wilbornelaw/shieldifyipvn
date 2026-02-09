import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Prose({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "prose prose-slate max-w-none prose-headings:font-semibold prose-headings:tracking-[-0.01em] prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-pre:rounded-lg prose-pre:border prose-pre:border-border prose-code:text-foreground",
        className
      )}
    >
      {children}
    </div>
  );
}
