import Link from "next/link";

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-[#f6f8fc] text-foreground">
      <div className="container grid gap-10 py-12 md:grid-cols-3">
        <div className="space-y-3">
          <h3 className="text-base font-semibold tracking-[-0.01em]">Shieldify IP Co., Ltd.</h3>
          <p className="text-sm text-muted-foreground">
            IP enforcement operations for brands operating in Vietnam-focused digital channels.
          </p>
          <p className="text-sm text-muted-foreground">
            Business code: 2803206763
          </p>
          <p className="text-sm text-muted-foreground">
            Address: Le Hoan Street, Phong Coc Village, Xuan Lap Commune, Thanh Hoa Province, Vietnam
          </p>
          <p className="text-sm text-muted-foreground">Email: info@shieldifyip.vn</p>
          <p className="text-sm text-muted-foreground">Phone: +84777199678</p>
        </div>

        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted-foreground transition hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Legal</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy" className="text-sm text-muted-foreground transition hover:text-foreground">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-sm text-muted-foreground transition hover:text-foreground">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container flex flex-col gap-3 py-5 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p className="max-w-3xl">
            Shieldify IP provides brand protection and IP enforcement support. We do not provide legal advice. For legal advice, consult qualified counsel.
          </p>
          <p>© {new Date().getFullYear()} Shieldify IP Co., Ltd.</p>
        </div>
      </div>
    </footer>
  );
}
