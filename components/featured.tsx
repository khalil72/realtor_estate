import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { properties } from "@/data/properties";
import { PropertyCard } from "@/components/property-card";

export function Featured() {
  const featured = properties.filter((p) => p.featured);

  return (
    <section className="bg-white py-28">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Handpicked</p>
            <h2 className="mt-4 max-w-lg font-display text-4xl font-medium leading-tight tracking-tight text-balance sm:text-5xl">
              Featured properties this month.
            </h2>
          </div>
          <Link
            href="/properties"
            className="group flex items-center gap-2 text-sm font-semibold text-ink"
          >
            All 16 listings
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <PropertyCard key={p.id} property={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
