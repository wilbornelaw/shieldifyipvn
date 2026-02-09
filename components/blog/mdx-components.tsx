import type { ComponentType, ReactNode } from "react";
import { AlertTriangle, CheckCircle2, Info } from "lucide-react";

import { cn } from "@/lib/utils";

type CalloutType = "info" | "warning" | "success";

const calloutStyle: Record<CalloutType, string> = {
  info: "border-blue-200 bg-blue-50 text-blue-900",
  warning: "border-amber-200 bg-amber-50 text-amber-900",
  success: "border-emerald-200 bg-emerald-50 text-emerald-900",
};

const iconByType: Record<CalloutType, ComponentType<{ className?: string }>> = {
  info: Info,
  warning: AlertTriangle,
  success: CheckCircle2,
};

export function Callout({
  type = "info",
  title,
  children,
}: {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}) {
  const Icon = iconByType[type];

  return (
    <div className={cn("my-6 rounded-md border p-4", calloutStyle[type])}>
      <div className="flex items-start gap-3">
        <Icon className="mt-0.5 h-4 w-4" />
        <div className="space-y-1 text-sm leading-6">
          {title ? <p className="font-semibold">{title}</p> : null}
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return <Callout type="info" title="Note">{children}</Callout>;
}

export function Disclaimer({ children }: { children: ReactNode }) {
  return <Callout type="warning" title="Disclaimer">{children}</Callout>;
}

export function EvidenceChecklist({ items }: { items: string[] }) {
  return (
    <div className="my-6 rounded-md border border-border bg-card p-4">
      <p className="mb-3 text-sm font-semibold text-foreground">Evidence checklist</p>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const mdxComponents = {
  Callout,
  Note,
  Disclaimer,
  EvidenceChecklist,
};
