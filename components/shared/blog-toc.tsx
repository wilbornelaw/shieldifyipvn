"use client";

import { useMemo } from "react";

export function BlogToc({ headings }: { headings: string[] }) {
  const links = useMemo(
    () =>
      headings.map((heading) => ({
        heading,
        id: heading.toLowerCase().replace(/\s+/g, "-"),
      })),
    [headings]
  );

  return (
    <ul className="space-y-2 text-sm">
      {links.map((link) => (
        <li key={link.id}>
          <a
            href={`#${link.id}`}
            className="text-muted-foreground transition hover:text-primary"
          >
            {link.heading}
          </a>
        </li>
      ))}
    </ul>
  );
}
