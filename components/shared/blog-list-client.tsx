"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motionDurations, motionEase, staggerContainer, staggerItem } from "@/lib/motion";
import { blogPosts } from "@/lib/data/posts";

const allTags = ["All", ...Array.from(new Set(blogPosts.flatMap((post) => post.tags)))];

export function BlogListClient() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return blogPosts.filter((post) => {
      const matchText =
        post.title.toLowerCase().includes(normalized) ||
        post.excerpt.toLowerCase().includes(normalized);
      const matchTag = activeTag === "All" ? true : post.tags.includes(activeTag);
      return matchText && matchTag;
    });
  }, [activeTag, query]);

  return (
    <div className="space-y-6">
      <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-center">
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search articles"
          aria-label="Search blog posts"
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
          <motion.div
            key={post.slug}
            variants={staggerItem}
            whileHover={{ y: -3 }}
            transition={{ duration: motionDurations.fast, ease: motionEase }}
          >
            <Card className="group overflow-hidden border-border">
              <div className="relative h-44">
              <Image
                src={post.coverImage}
                alt={`${post.title} cover`}
                fill
                className="image-fade-in object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />
              </div>
              <CardHeader className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-lg">
                  <Link href={`/blog/${post.slug}`} className="transition hover:text-primary">
                    {post.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>{post.excerpt}</p>
                <p>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                  {" · "}
                  {post.readingTime}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      {filtered.length === 0 && (
        <p className="rounded-md border border-border bg-card p-4 text-sm text-muted-foreground">
          No posts match your filters.
        </p>
      )}
    </div>
  );
}
