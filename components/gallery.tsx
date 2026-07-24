"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { properties } from "@/data/properties";

const galleryItems = [
  { ...properties[0], span: "row-span-2" },
  { ...properties[1], span: "row-span-1" },
  { ...properties[5], span: "row-span-1" },
  { ...properties[7], span: "row-span-2" },
  { ...properties[2], span: "row-span-1" },
  { ...properties[4], span: "row-span-1" },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-28">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Visual Tour</p>
            <h2 className="mt-4 max-w-lg font-display text-4xl font-medium leading-tight tracking-tight text-balance sm:text-5xl">
              A closer look at spaces worth living in.
            </h2>
          </div>
          <Link
            href="/properties"
            className="group flex items-center gap-2 text-sm font-semibold text-ink"
          >
            View all properties
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, i) => (
            <motion.a
              href={`/properties/${item.slug}`}
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className={`group relative block overflow-hidden rounded-3xl ${item.span}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />

              <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-mono text-[10px] uppercase tracking-widest text-ember-500">
                  {item.city}
                </p>
                <h3 className="mt-1 font-display text-xl font-medium text-white">
                  {item.title}
                </h3>
              </div>

              <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-ember-500">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
