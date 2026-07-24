"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SlidersHorizontal, Search, X } from "lucide-react";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { PropertyCard } from "@/components/property-card";
import { properties, cities, types } from "@/data/properties";

const statuses = ["For Sale", "For Rent", "Sold"] as const;

export function PropertiesExplorer() {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("All");
  const [type, setType] = useState("All");
  const [status, setStatus] = useState("All");
  const [sort, setSort] = useState("Newest");

  const filtered = useMemo(() => {
    let list = properties.filter((p) => {
      const matchesQuery =
        query.trim() === "" ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.location.toLowerCase().includes(query.toLowerCase()) ||
        p.city.toLowerCase().includes(query.toLowerCase());
      const matchesCity = city === "All" || p.city === city;
      const matchesType = type === "All" || p.type === type;
      const matchesStatus = status === "All" || p.status === status;
      return matchesQuery && matchesCity && matchesType && matchesStatus;
    });

    if (sort === "Price: Low to High") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "Price: High to Low") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "Newest") list = [...list].sort((a, b) => b.year - a.year);

    return list;
  }, [query, city, type, status, sort]);

  const resetFilters = () => {
    setQuery("");
    setCity("All");
    setType("All");
    setStatus("All");
    setSort("Newest");
  };

  const activeFilterCount = [city, type, status].filter((v) => v !== "All").length;

  return (
    <section className="bg-cream py-16">
      <div className="container">
        {/* filter bar */}
        <div className="rounded-3xl border border-ink/8 bg-white p-5 shadow-[0_2px_20px_-8px_rgba(11,11,12,0.1)] sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, area, or city..."
                className="h-11 w-full rounded-full border border-ink/12 bg-white pl-11 pr-4 text-sm focus:border-ember-500 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 lg:flex lg:gap-3">
              <Select value={city} onChange={(e) => setCity(e.target.value)}>
                <option value="All">All Cities</option>
                {cities.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </Select>
              <Select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="All">All Types</option>
                {types.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </Select>
              <Select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="All">Any Status</option>
                {statuses.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </Select>
              <Select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="Newest">Newest</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
              </Select>
            </div>
          </div>

          <AnimatePresence>
            {activeFilterCount > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 flex items-center gap-3 overflow-hidden"
              >
                <span className="flex items-center gap-1.5 text-xs text-muted">
                  <SlidersHorizontal className="h-3.5 w-3.5" />
                  {activeFilterCount} filter{activeFilterCount > 1 ? "s" : ""} applied
                </span>
                <button
                  onClick={resetFilters}
                  className="flex items-center gap-1 text-xs font-semibold text-ember-600 hover:underline"
                >
                  <X className="h-3.5 w-3.5" /> Clear all
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* results */}
        <div className="mt-10 flex items-center justify-between">
          <p className="text-sm text-muted">
            Showing <span className="font-semibold text-ink">{filtered.length}</span> of{" "}
            {properties.length} properties
          </p>
        </div>

        {filtered.length > 0 ? (
          <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <PropertyCard key={p.id} property={p} index={i} />
            ))}
          </div>
        ) : (
          <div className="mt-16 flex flex-col items-center justify-center rounded-3xl border border-dashed border-ink/15 py-20 text-center">
            <p className="font-display text-xl text-ink">No properties match yet.</p>
            <p className="mt-2 max-w-sm text-sm text-muted">
              Try widening your search — clear a filter or search a different city.
            </p>
            <Button className="mt-6" onClick={resetFilters}>
              Reset filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
