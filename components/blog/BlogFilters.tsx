"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { BlogPostListItem } from "@/lib/blog";
import { Input } from "@/components/ui/input";
import { BlogCard } from "@/components/blog/BlogCard";
import { staggerContainer, staggerItem } from "@/lib/motion";

type BlogFiltersProps = {
  posts: BlogPostListItem[];
  tags: string[];
};

export function BlogFilters({ posts, tags }: BlogFiltersProps) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return [...posts]
      .filter((post) => {
        const matchesQuery =
          post.title.toLowerCase().includes(normalized) ||
          post.excerpt.toLowerCase().includes(normalized);
        const matchesTag = activeTag === "All" ? true : post.tags.includes(activeTag);
        return matchesQuery && matchesTag;
      })
      .sort((a, b) => +new Date(b.date) - +new Date(a.date));
  }, [activeTag, posts, query]);

  const allTags = ["All", ...tags];

  return (
    <div className="space-y-6">
      <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-center">
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search posts"
          aria-label="Search posts"
        />
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`rounded-full border px-3 py-1.5 text-sm font-medium transition ${
                activeTag === tag
                  ? "border-primary/20 bg-primary/10 text-primary"
                  : "border-border bg-white text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.15 }}
      >
        {filtered.map((post) => (
          <motion.div key={post.slug} variants={staggerItem}>
            <BlogCard post={post} />
          </motion.div>
        ))}
      </motion.div>

      {filtered.length === 0 ? (
        <p className="rounded-md border border-border bg-card p-4 text-sm text-muted-foreground">
          No posts match your search and filter criteria.
        </p>
      ) : null}
    </div>
  );
}
