"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import {
  BedDouble,
  Bath,
  Ruler,
  Calendar,
  MapPin,
  Phone,
  Mail,
  ArrowLeft,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PropertyCard } from "@/components/property-card";
import { formatPrice } from "@/lib/utils";
import { properties, type Property } from "@/data/properties";

const specs = (p: Property) => [
  { icon: BedDouble, label: "Bedrooms", value: p.beds },
  { icon: Bath, label: "Bathrooms", value: p.baths },
  { icon: Ruler, label: "Area (sqft)", value: p.area.toLocaleString() },
  { icon: Calendar, label: "Built", value: p.year },
];

export function PropertyDetail({ property }: { property: Property }) {
  const [activeImage, setActiveImage] = useState(0);
  const related = properties
    .filter((p) => p.id !== property.id && p.city === property.city)
    .slice(0, 3);
  const fallback = properties.filter((p) => p.id !== property.id).slice(0, 3);
  const relatedList = related.length ? related : fallback;

  return (
    <>
      {/* image header */}
      <section className="relative pt-24">
        <div className="container pt-8">
          <Link
            href="/properties"
            className="group inline-flex items-center gap-2 text-sm font-medium text-ink/70 hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to all properties
          </Link>
        </div>

        <div className="container mt-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[340px] overflow-hidden rounded-3xl sm:h-[440px] lg:h-[520px]"
          >
            <Image
              src={property.gallery[activeImage]}
              alt={property.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />

            <div className="absolute left-6 top-6 flex gap-2">
              <Badge variant={property.status === "For Rent" ? "dark" : "default"}>
                {property.status}
              </Badge>
              <Badge variant="outline">{property.type}</Badge>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h1 className="font-display text-3xl font-medium text-white sm:text-4xl">
                  {property.title}
                </h1>
                <p className="mt-2 flex items-center gap-1.5 text-sm text-white/70">
                  <MapPin className="h-4 w-4 text-ember-500" />
                  {property.location}, {property.city}
                </p>
              </div>
              <p className="font-mono text-2xl font-bold text-ember-500 sm:text-3xl">
                {formatPrice(property.price)}
              </p>
            </div>
          </motion.div>

          {/* thumbnail strip */}
          <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
            {property.gallery.map((img, i) => (
              <button
                key={img}
                onClick={() => setActiveImage(i)}
                className={`relative h-20 w-28 shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
                  activeImage === i ? "border-ember-500" : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <Image src={img} alt={`${property.title} ${i + 1}`} fill className="object-cover" sizes="120px" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* body */}
      <section className="bg-cream py-16">
        <div className="container grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <p className="eyebrow">Overview</p>
            <h2 className="mt-4 font-display text-3xl font-medium text-ink">
              About this property
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
              {property.description}
            </p>

            {/* specs grid */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {specs(property).map((s) => (
                <Card key={s.label} className="flex flex-col items-start gap-3 p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ember-50 text-ember-600">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-xl font-semibold text-ink">{s.value}</p>
                    <p className="text-xs text-muted">{s.label}</p>
                  </div>
                </Card>
              ))}
            </div>

            {/* amenities */}
            <div className="mt-10">
              <p className="eyebrow">Amenities</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {["Private Parking", "24/7 Security", "Backup Power", "Central AC", "Servant Quarters", "Rooftop Access"].map(
                  (a) => (
                    <span
                      key={a}
                      className="flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm text-ink/80"
                    >
                      <ShieldCheck className="h-3.5 w-3.5 text-ember-500" />
                      {a}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* sidebar */}
          <div>
            <Card className="sticky top-28 p-6">
              <p className="eyebrow">Interested?</p>
              <h3 className="mt-3 font-display text-xl font-medium text-ink">
                Talk to the listing agent
              </h3>
              <p className="mt-2 text-sm text-muted">
                Response time under 2 hours, on average.
              </p>

              <div className="mt-6 flex items-center gap-3 rounded-2xl bg-cream p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ink font-display text-lg text-ember-500">
                  A
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">Ayesha Malik</p>
                  <p className="text-xs text-muted">Senior Property Consultant</p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <Button className="w-full">
                  <Phone className="h-4 w-4" /> Request a Call Back
                </Button>
                <Button variant="outline" className="w-full">
                  <Mail className="h-4 w-4" /> Email Agent
                </Button>
              </div>

              <div className="mt-6 flex items-center gap-2 border-t border-ink/8 pt-5 text-xs text-muted">
                <ShieldCheck className="h-4 w-4 text-ember-500" />
                Listing legally verified by EstateHaus
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* related properties */}
      <section className="bg-white py-24">
        <div className="container">
          <div className="flex items-end justify-between">
            <div>
              <p className="eyebrow">Similar Listings</p>
              <h2 className="mt-4 font-display text-3xl font-medium text-ink sm:text-4xl">
                You might also like
              </h2>
            </div>
            <Link
              href="/properties"
              className="group hidden items-center gap-2 text-sm font-semibold text-ink sm:flex"
            >
              View all
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {relatedList.map((p, i) => (
              <PropertyCard key={p.id} property={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
