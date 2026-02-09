import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { CursorShield } from "@/components/providers/cursor-shield";
import { PageTransition } from "@/components/providers/page-transition";
import { Header } from "@/components/layout/header";
import { Toaster } from "@/components/providers/toaster";
import { getAllPosts } from "@/lib/blog";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shieldify-ip.example"),
  title: {
    default: "Shieldify IP | IP Enforcement Support in Vietnam",
    template: "%s | Shieldify IP",
  },
  description:
    "Shieldify IP Co., Ltd. delivers compliance-focused brand protection and IP enforcement support for Vietnam-focused digital channels.",
  icons: {
    icon: [{ url: "/faviconsip.png", type: "image/png" }],
    shortcut: ["/faviconsip.png"],
    apple: [{ url: "/faviconsip.png", type: "image/png" }],
  },
  openGraph: {
    title: "Shieldify IP | IP Enforcement Support in Vietnam",
    description:
      "Premium, evidence-ready IP enforcement operations for platforms, marketplaces, and social channels.",
    type: "website",
    locale: "en_US",
    url: "https://shieldify-ip.example",
    siteName: "Shieldify IP",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shieldify IP",
    description: "Brand protection and IP enforcement support in Vietnam-focused markets.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const posts = await getAllPosts();
  const blogSearchItems = posts.map((post) => ({
    href: `/blog/${post.slug}`,
    label: post.title,
  }));

  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:text-foreground">
          Skip to main content
        </a>
        <Header blogSearchItems={blogSearchItems} />
        <main id="main-content" className="min-h-[70vh]">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <CursorShield />
        <Toaster />
      </body>
    </html>
  );
}
