"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, Shield, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

type HeaderSearchItem = {
  href: string;
  label: string;
};

export function Header({ blogSearchItems = [] }: { blogSearchItems?: HeaderSearchItem[] }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const filtered = useMemo(() => {
    const searchItems = [...navItems, ...blogSearchItems];
    const query = search.trim().toLowerCase();
    if (!query) {
      return searchItems.slice(0, 7);
    }
    return searchItems.filter((item) => item.label.toLowerCase().includes(query)).slice(0, 10);
  }, [blogSearchItems, search]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-border/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/80",
        "transition-all duration-300 ease-out",
        isScrolled ? "bg-background/95" : "bg-background/88",
      )}
    >
      <div
        className={cn(
          "container flex items-center justify-between gap-4 transition-all duration-300 ease-out",
          isScrolled ? "h-14" : "h-16",
        )}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 text-[15px] font-semibold tracking-[-0.01em] text-foreground"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border bg-white">
            <Shield className="h-4 w-4 text-primary" />
          </span>
          <span className="leading-none">
            Shieldify IP
            <span className="block pt-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Enforcement Operations
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-sm font-medium text-muted-foreground transition hover:text-foreground",
                "after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primary/70 after:transition-transform hover:after:scale-x-100",
                pathname === item.href && "text-foreground after:scale-x-100",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open search">
                <Search className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Search pages and articles</DialogTitle>
                <DialogDescription>Client-side quick search for site navigation and blog content.</DialogDescription>
              </DialogHeader>
              <Input
                placeholder="Search by keyword"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                aria-label="Search site"
              />
              <div className="mt-2 max-h-72 space-y-1 overflow-auto rounded-md border border-border p-2">
                {filtered.map((item) => (
                  <Link
                    key={`${item.href}-${item.label}`}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-sm transition hover:bg-accent"
                  >
                    {item.label}
                  </Link>
                ))}
                {filtered.length === 0 && <p className="px-3 py-2 text-sm text-muted-foreground">No results found.</p>}
              </div>
            </DialogContent>
          </Dialog>

          <Button asChild variant="outline" className="hidden md:inline-flex">
            <Link href="/platform-logins">Login</Link>
          </Button>

          <Button asChild className="hidden md:inline-flex">
            <Link href="/contact">Request a Takedown Review</Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="md:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur md:hidden">
          <nav className="container flex flex-col gap-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition",
                  pathname === item.href ? "bg-accent text-foreground" : "text-muted-foreground hover:bg-accent hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                Request a Takedown Review
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/platform-logins" onClick={() => setMobileOpen(false)}>
                Login
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
