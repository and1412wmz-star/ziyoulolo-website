import Link from "next/link";

import { Container } from "@/components/container";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/explore", label: "Explore" },
  { href: "/story", label: "Story" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white">
      <Container className="flex items-center justify-between gap-6 py-4">
        <Link href="/" className="text-sm font-semibold tracking-[0.22em] text-black">
          ZIYOU &amp; LOLO
        </Link>
        <nav aria-label="Primary" className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-black/70 hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
