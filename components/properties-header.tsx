export function PropertiesHeader({ count }: { count: number }) {
  return (
    <section className="relative overflow-hidden bg-ink pb-20 pt-36 text-white">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-ember-500/20 blur-3xl" />
      <div className="container relative">
        <p className="eyebrow flex items-center gap-2 text-ember-400">
          <span className="h-1.5 w-1.5 rounded-full bg-ember-500" />
          Listings
        </p>
        <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h1 className="max-w-xl font-display text-4xl font-medium leading-tight tracking-tight text-balance sm:text-5xl">
            {count} properties, ready to become yours.
          </h1>
          <p className="max-w-sm text-sm leading-relaxed text-white/60">
            Filter by city, type, or budget to find the listing that matches
            how you want to live.
          </p>
        </div>
      </div>
    </section>
  );
}
