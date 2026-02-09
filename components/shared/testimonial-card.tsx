import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function TestimonialCard({
  quote,
  name,
  role,
  company,
}: {
  quote: string;
  name: string;
  role: string;
  company: string;
}) {
  return (
    <Card className="h-full border-border/70 bg-card/80">
      <CardHeader>
        <p className="text-lg leading-relaxed text-foreground">&ldquo;{quote}&rdquo;</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm font-semibold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">
          {role}, {company}
        </p>
      </CardContent>
    </Card>
  );
}
