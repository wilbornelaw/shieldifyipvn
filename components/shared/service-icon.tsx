import {
  FileText,
  Radar,
  Scale,
  ShieldCheck,
  UserX,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Radar,
  UserX,
  FileText,
  Scale,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name] ?? ShieldCheck;
  return <Icon className={className} aria-hidden="true" />;
}
