"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "180+", label: "Properties Sold" },
  { value: "12", label: "Cities Covered" },
  { value: "9.8", label: "Avg. Client Rating" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pb-24 pt-36 text-white md:pt-44">
      {/* diagonal ember accent */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rotate-12 bg-gradient-to-br from-ember-500/25 via-ember-500/5 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember-500/40 to-transparent" />

      <div className="container relative grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow flex items-center gap-2 text-ember-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-ember-500" />
            Real Estate, Reimagined
          </motion.div>

          <h1 className="mt-6 font-display text-5xl font-medium leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-[4.2rem]">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="block"
            >
              Find a home that
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="relative mt-1 block italic text-ember-500"
            >
              feels like you.
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="14"
                viewBox="0 0 400 14"
                fill="none"
              >
                <path
                  d="M2 11C80 3 260 -2 398 8"
                  stroke="#FF5A1F"
                  strokeWidth="3"
                  strokeLinecap="round"
                  pathLength="1"
                  className="animate-[reveal-line_1s_ease-out_1s_forwards]"
                  style={{
                    strokeDasharray: 1,
                    strokeDashoffset: 1,
                    animation: "dash 1.2s 0.9s ease forwards",
                  }}
                />
              </svg>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-7 max-w-md text-base leading-relaxed text-white/60"
          >
            EstateHaus curates the finest villas, penthouses, and townhouses
            across Pakistan — verified listings, real photography, zero
            surprises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button size="lg" asChild>
              <Link href="/properties">
                Browse Properties <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="light" asChild>
              <Link href="#gallery">View Gallery</Link>
            </Button>
          </motion.div>

          {/* quick search bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex max-w-lg items-center gap-3 rounded-full border border-white/15 bg-white/5 p-2 pl-5 backdrop-blur-sm"
          >
            <MapPin className="h-4 w-4 shrink-0 text-ember-500" />
            <input
              placeholder="Search by city — Islamabad, Lahore, Karachi..."
              className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
            />
            <Link
              href="/properties"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ember-500 transition-colors hover:bg-white hover:text-ink"
            >
              <Search className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-8"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-semibold text-ember-500">
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-white/50">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* image collage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative mx-auto grid h-[520px] w-full max-w-md grid-cols-2 gap-4 lg:h-[600px]"
        >
          <div className="relative col-span-2 h-64 overflow-hidden rounded-3xl lg:h-72">
            <Image
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop"
              alt="Villa exterior at golden hour"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 90vw, 420px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
          </div>
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop"
              alt="Modern living room"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="200px"
            />
          </div>
          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-ember-500 p-5">
            <p className="font-mono text-[11px] uppercase tracking-widest text-ink/70">
              Featured
            </p>
            <div>
              <p className="font-display text-3xl font-semibold text-ink">
                285K
              </p>
              <p className="text-xs text-ink/70">Azure Ridge Villa, Islamabad</p>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 top-1/2 hidden -translate-y-1/2 rounded-2xl border border-white/10 bg-ink/80 px-4 py-3 shadow-xl backdrop-blur-md lg:block"
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-ember-500">
              Verified
            </p>
            <p className="text-xs text-white/70">100% Legal Check</p>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  );
}
