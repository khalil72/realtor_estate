"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, House } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // when the mobile menu is open, force the "scrolled" (light) look so the
  // dropdown always has a solid, readable background
  const light = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        light
          ? "bg-cream/95 backdrop-blur-md border-b border-ink/8 py-3"
          : "bg-black py-6"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2">
          <span
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 group-hover:rotate-12",
              light ? "bg-ink text-ember-500" : "bg-ember-500 text-ink"
            )}
          >
            <House className="h-4 w-4" strokeWidth={2.5} />
          </span>
          <span
            className={cn(
              "font-display text-xl font-semibold tracking-tight transition-colors duration-300",
              light ? "text-ink" : "text-white"
            )}
          >
              Real<span className="text-ember-500">Estate</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={cn(
                "group relative font-medium text-sm transition-colors duration-300",
                light ? "text-ink/80 hover:text-ink" : "text-white/80 hover:text-white"
              )}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-ember-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button size="sm" asChild>
            <Link href="/properties">List a Property</Link>
          </Button>
        </div>

        <button
          className={cn(
            "transition-colors duration-300 md:hidden",
            light ? "text-ink" : "text-white"
          )}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="container mt-4 flex flex-col gap-4 border-t border-ink/8 pt-4 pb-6 md:hidden">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-ink/80"
            >
              {l.label}
            </Link>
          ))}
          <Button size="sm" asChild className="w-fit">
            <Link href="/properties">List a Property</Link>
          </Button>
        </div>
      )}
    </header>
  );
}