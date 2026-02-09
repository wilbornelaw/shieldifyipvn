import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";

import { BlogPostMotion } from "@/components/blog/BlogPostMotion";
import { Prose } from "@/components/blog/Prose";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { mdxComponents } from "@/components/blog/mdx-components";
import { Badge } from "@/components/ui/badge";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

const prettyCodeOptions = {
  theme: "github-light",
  keepBackground: false,
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Post not found" };
  }

  const image = post.coverImage ?? "/faviconsip.png";
  const url = `https://shieldify-ip.example/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      images: [{ url: image }],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const related = (await getAllPosts())
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="container py-12">
      <BlogPostMotion>
        <article className="grid gap-10 lg:grid-cols-[1fr_300px]">
          <div className="space-y-8">
            <header className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="text-4xl leading-tight">{post.title}</h1>
              <p className="text-sm text-muted-foreground">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                {" · "}
                {post.author}
                {" · "}
                {post.readingTime}
              </p>
            </header>

            {post.coverImage ? (
              <div className="relative h-[320px] overflow-hidden rounded-lg border border-border">
                <Image
                  src={post.coverImage}
                  alt={`${post.title} cover image`}
                  fill
                  className="image-fade-in object-cover"
                />
              </div>
            ) : null}

            <Prose>
              <MDXRemote
                source={post.content}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [
                      rehypeSlug,
                      [
                        rehypeAutolinkHeadings,
                        {
                          behavior: "append",
                          properties: { className: ["anchor"] },
                          content: {
                            type: "text",
                            value: "#",
                          },
                        },
                      ],
                      [rehypePrettyCode, prettyCodeOptions],
                    ],
                  },
                  parseFrontmatter: false,
                }}
                components={mdxComponents}
              />
            </Prose>
          </div>

          <aside className="space-y-6">
            <div className="sticky top-24 rounded-lg border border-border bg-card p-4">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                Table of Contents
              </h2>
              <TableOfContents items={post.toc} />
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                Related Posts
              </h2>
              <ul className="space-y-3 text-sm">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/blog/${item.slug}`} className="transition hover:text-primary">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </article>
      </BlogPostMotion>
    </div>
  );
}
