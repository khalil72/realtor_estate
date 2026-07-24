import Link from "next/link";
import { House, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-ink text-white">
      <div className="container grid gap-12 py-20 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ember-500 text-ink">
              <House className="h-4 w-4" strokeWidth={2.5} />
            </span>
            <span className="font-display text-xl font-semibold">
              Real<span className="text-ember-500">Estate</span>
            </span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            A curated collection of villas, penthouses, and townhouses across
            Pakistan&apos;s most desirable neighborhoods — handled end to end.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-ember-500 hover:text-ember-500"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow text-ember-500">Explore</p>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/properties" className="hover:text-white">Properties</Link></li>
            <li><Link href="/#gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link href="/properties?status=For+Rent" className="hover:text-white">Rentals</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-ember-500">Company</p>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Agents</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Press</a></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-ember-500">Visit</p>
          <p className="mt-5 text-sm leading-relaxed text-white/70">
             Pakistan
          </p>
          <p className="mt-4 font-mono text-sm text-white/70">+92 0000000</p>
          <p className="font-mono text-sm text-white/70">info@estatehaus.pk</p>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container flex flex-col items-center justify-between gap-2 text-xs text-white/40 md:flex-row">
          <p>© 2026 RealEstate. All rights reserved.</p>
          <p>Designed with care in world.</p>
        </div>
      </div>
    </footer>
  );
}
