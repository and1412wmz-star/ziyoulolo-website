import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";

import { Container } from "@/components/container";

const navItems = [
  { href: "/", label: "Home", imageSrc: "/home/home.svg", width: 66, offsetX: -3, offsetY: 10 },
  {
    href: "/explore",
    label: "Explore",
    imageSrc: "/home/explore.svg",
    width: 83,
    offsetX: 0,
    offsetY: 15,
  },
  { href: "/news", label: "News", imageSrc: "/home/news.svg", width: 68, offsetX: -1, offsetY: 12 },
  { href: "/story", label: "Story", imageSrc: "/home/story.svg", width: 54, offsetX: 2, offsetY: 16 },
  {
    href: "/contact",
    label: "Contact",
    imageSrc: "/home/contact.svg",
    width: 88,
    offsetX: 2,
    offsetY: 12,
  },
] as const;

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[120px] bg-white"
        style={{ clipPath: "ellipse(120% 100% at 50% 0%)" }}
      />
      <Container className="relative pt-7 sm:pt-9">
        <nav aria-label="Primary" className="flex items-center justify-center gap-9 sm:gap-11">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-opacity duration-200 hover:opacity-70"
            >
              <Image
                src={item.imageSrc}
                alt={item.label}
                width={item.width}
                height={64}
                priority
                className="nav-item-img block"
                style={
                  {
                    "--nav-width": `${item.width}px`,
                    "--nav-x": `${item.offsetX}px`,
                    "--nav-y": `${item.offsetY}px`,
                  } as CSSProperties
                }
              />
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
