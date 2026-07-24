const items = [
  "Islamabad",
  "Lahore",
  "Karachi",
  "Verified Listings",
  "Legal Assistance",
  "Zero Hidden Fees",
];

export function MarqueeStrip() {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-ink/8 bg-ink py-4">
      <div className="flex w-max animate-marquee gap-10">
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-white/50"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-ember-500" />
          </span>
        ))}
      </div>
    </div>
  );
}
