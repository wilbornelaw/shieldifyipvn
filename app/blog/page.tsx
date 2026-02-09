import type { Metadata } from "next";

import { BlogFilters } from "@/components/blog/BlogFilters";
import { Reveal } from "@/components/shared/reveal";
import { getAllBlogTags, getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on IP infringement reporting, evidence workflows, platform policy, and Vietnam market enforcement notes.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Shieldify IP Blog",
    description:
      "Practical guidance for brand protection and IP enforcement operations.",
    url: "https://shieldify-ip.example/blog",
  },
};

export default async function BlogPage() {
  const [posts, tags] = await Promise.all([getAllPosts(), getAllBlogTags()]);

  return (
    <div className="container space-y-8 py-12">
      <Reveal revealKey="blog-header">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Blog
          </p>
          <h1 className="text-4xl">IP enforcement insights for operational teams</h1>
          <p className="max-w-3xl text-muted-foreground">
            Guidance for reporting quality, evidence standards, and policy-aware enforcement in
            Vietnam-focused digital channels.
          </p>
        </div>
      </Reveal>
      <BlogFilters posts={posts} tags={tags} />
    </div>
  );
}
