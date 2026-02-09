import { TocItem } from "@/lib/blog";

export function TableOfContents({ items }: { items: TocItem[] }) {
  if (items.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">No sections available.</p>
    );
  }

  return (
    <nav aria-label="Table of contents">
      <ul className="space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.id} className={item.level === 3 ? "pl-4" : ""}>
            <a href={`#${item.id}`} className="text-muted-foreground transition hover:text-primary">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
