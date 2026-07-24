import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="bg-cream pb-28">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2rem] bg-ember-500 px-8 py-16 sm:px-16">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-10 h-56 w-56 rounded-full bg-ink/10 blur-2xl" />

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-ink/70">
                Ready when you are
              </p>
              <h2 className="mt-3 max-w-lg font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
                Let&apos;s find your next address together.
              </h2>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-ink text-white hover:bg-white hover:text-ink" asChild>
                <Link href="/properties">
                  Browse Properties <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-ink/30 text-ink hover:bg-ink hover:text-white" asChild>
                <Link href="#contact">Talk to an Agent</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
