"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BlogPostListItem } from "@/lib/blog";
import { motionDurations, motionEase } from "@/lib/motion";

export function BlogCard({ post }: { post: BlogPostListItem }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: motionDurations.fast, ease: motionEase }}
    >
      <Card className="group overflow-hidden border-border">
        {post.coverImage ? (
          <div className="relative h-44 overflow-hidden">
            <Image
              src={post.coverImage}
              alt={`${post.title} cover image`}
              fill
              className="image-fade-in object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
          </div>
        ) : null}
        <CardHeader className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={`${post.slug}-${tag}`} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <CardTitle className="text-lg leading-snug">
            <Link href={`/blog/${post.slug}`} className="transition hover:text-primary">
              {post.title}
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>{post.excerpt}</p>
          <p>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
            {" · "}
            {post.author}
            {" · "}
            {post.readingTime}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
