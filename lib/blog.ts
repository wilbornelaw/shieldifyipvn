import "server-only";

import fs from "node:fs/promises";
import path from "node:path";

import matter from "gray-matter";
import readingTime from "reading-time";

export type BlogFrontmatter = {
  title: string;
  date: string;
  author: string;
  tags: string[];
  excerpt: string;
  coverImage?: string;
};

export type TocItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

export type BlogPostListItem = BlogFrontmatter & {
  slug: string;
  readingTime: string;
};

export type BlogPost = BlogPostListItem & {
  content: string;
  toc: TocItem[];
};

const BLOG_CONTENT_DIR = path.join(process.cwd(), "content", "blog");

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function extractToc(markdown: string): TocItem[] {
  const withoutCodeBlocks = markdown.replace(/```[\s\S]*?```/g, "");
  const lines = withoutCodeBlocks.split("\n");
  const toc: TocItem[] = [];

  for (const line of lines) {
    const match = /^(##|###)\s+(.*)$/.exec(line.trim());
    if (!match) continue;

    const level = match[1].length === 2 ? 2 : 3;
    const text = match[2].trim();
    toc.push({ id: slugify(text), text, level });
  }

  return toc;
}

function parseFrontmatter(data: Record<string, unknown>, slug: string): BlogFrontmatter {
  const title = typeof data.title === "string" ? data.title : "";
  const date = typeof data.date === "string" ? data.date : "";
  const author = typeof data.author === "string" ? data.author : "";
  const excerpt = typeof data.excerpt === "string" ? data.excerpt : "";
  const coverImage = typeof data.coverImage === "string" ? data.coverImage : undefined;

  const tags = Array.isArray(data.tags)
    ? data.tags.filter((tag): tag is string => typeof tag === "string")
    : [];

  if (!title || !date || !author || !excerpt || tags.length === 0) {
    throw new Error(`Invalid frontmatter in post: ${slug}`);
  }

  return { title, date, author, tags, excerpt, coverImage };
}

async function readPostFile(slug: string) {
  const fullPath = path.join(BLOG_CONTENT_DIR, `${slug}.mdx`);
  const raw = await fs.readFile(fullPath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = parseFrontmatter(data, slug);

  return {
    slug,
    frontmatter,
    content,
    readingTime: readingTime(content).text,
    toc: extractToc(content),
  };
}

export async function getAllPostSlugs() {
  const files = await fs.readdir(BLOG_CONTENT_DIR);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getAllPosts(): Promise<BlogPostListItem[]> {
  const slugs = await getAllPostSlugs();
  const posts = await Promise.all(slugs.map((slug) => readPostFile(slug)));

  return posts
    .map((post) => ({
      slug: post.slug,
      ...post.frontmatter,
      readingTime: post.readingTime,
    }))
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const slugs = await getAllPostSlugs();
  if (!slugs.includes(slug)) return null;

  const post = await readPostFile(slug);
  return {
    slug: post.slug,
    ...post.frontmatter,
    content: post.content,
    readingTime: post.readingTime,
    toc: post.toc,
  };
}

export async function getAllBlogTags() {
  const posts = await getAllPosts();
  const tags = new Set<string>();

  posts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags).sort((a, b) => a.localeCompare(b));
}
