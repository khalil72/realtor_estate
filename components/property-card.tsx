"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { BedDouble, Bath, Ruler, ArrowUpRight, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { formatPrice } from "@/lib/utils";
import type { Property } from "@/data/properties";

export function PropertyCard({ property, index = 0 }: { property: Property; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
    >
      <Card className="group relative overflow-hidden transition-shadow duration-300 hover:shadow-[0_12px_40px_-12px_rgba(11,11,12,0.25)]">
        <button
          onClick={(e) => e.preventDefault()}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink transition-colors hover:bg-ember-500 hover:text-white"
        >
          <Heart className="h-4 w-4" />
        </button>
        <Link href={`/properties/${property.slug}`} className="block">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="absolute left-4 top-4 flex gap-2">
            <Badge variant={property.status === "For Rent" ? "dark" : "default"}>
              {property.status}
            </Badge>
          </div>
          <div className="absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-2 backdrop-blur-sm">
            <span className="font-mono text-sm font-bold text-ink">
              {formatPrice(property.price)}
            </span>
          </div>
        </div>

        <div className="p-6">
          <p className="font-mono text-[11px] uppercase tracking-widest text-ember-600">
            {property.type} · {property.city}
          </p>
          <h3 className="mt-2 font-display text-xl font-medium text-ink">
            {property.title}
          </h3>
          <p className="mt-1 text-sm text-muted">{property.location}</p>

          <div className="mt-5 flex items-center justify-between border-t border-ink/8 pt-5">
            <div className="flex items-center gap-4 text-sm text-ink/70">
              <span className="flex items-center gap-1.5">
                <BedDouble className="h-4 w-4 text-ember-500" /> {property.beds}
              </span>
              <span className="flex items-center gap-1.5">
                <Bath className="h-4 w-4 text-ember-500" /> {property.baths}
              </span>
              <span className="flex items-center gap-1.5">
                <Ruler className="h-4 w-4 text-ember-500" /> {property.area.toLocaleString()}
              </span>
            </div>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/5 text-ink transition-all duration-300 group-hover:bg-ember-500 group-hover:text-white">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
        </Link>
      </Card>
    </motion.div>
  );
}
