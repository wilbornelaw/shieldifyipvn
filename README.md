# Shieldify IP Website

Modern legal-tech marketing site for **Shieldify IP Co., Ltd.** built with Next.js App Router, TypeScript, TailwindCSS, shadcn/ui-style components, lucide-react icons, framer-motion, and a local MDX blog system.

## Tech Stack

- Next.js (App Router) + TypeScript
- TailwindCSS + Typography plugin
- shadcn/ui component structure (`components/ui` + `components.json`)
- Radix UI primitives
- lucide-react icons
- framer-motion animations
- sonner toast notifications
- Local MDX blog: `next-mdx-remote`, `gray-matter`, `reading-time`, `remark-gfm`, `rehype-pretty-code`

## Install

```bash
npm install
```

## Run

```bash
npm run dev
```

## Build

```bash
npm run build
npm run start
```

## Scripts

- `npm run dev` - start local dev server
- `npm run lint` - run ESLint
- `npm run build` - create production build
- `npm run start` - serve production build

## Project Structure

```text
content/
  blog/*.mdx
app/
  blog/page.tsx
  blog/[slug]/page.tsx
components/
  blog/
lib/
  blog.ts
```

## MDX Blog System

### Add a new post

1. Create a file in `content/blog` named `<slug>.mdx`.
2. Add required frontmatter.
3. Write markdown + optional custom MDX components.
4. The post will appear automatically in `/blog` and `/blog/<slug>`.

### Required frontmatter fields

```yaml
title: "Post title"
date: "2026-01-01"
author: "Author name"
tags: ["Tag1", "Tag2"]
excerpt: "Short summary"
coverImage: "https://images.unsplash.com/..." # optional
```

### Tags and search behavior

- Blog list search is client-side and matches title + excerpt.
- Tag filtering is client-side using frontmatter `tags`.
- Default sorting is newest first by `date`.

### Custom MDX components

Available in posts:

- `<Callout type="info|warning|success" title="...">...</Callout>`
- `<Note>...</Note>`
- `<Disclaimer>...</Disclaimer>`
- `<EvidenceChecklist items={["Item A", "Item B"]} />`

## SEO

- Blog index metadata set in `app/blog/page.tsx`
- Per-post metadata generated in `app/blog/[slug]/page.tsx`
- OpenGraph image uses `coverImage` when present
- Canonical URLs are set for index and post pages

## Notes

- All content is English only.
- Blog content is local `.mdx` files (no DB, no external CMS).
- Parsing is server-only in `lib/blog.ts`.
- Posts are statically generated via `generateStaticParams`.
