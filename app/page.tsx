import { Hero } from "@/components/hero";
import { MarqueeStrip } from "@/components/marquee-strip";
import { Featured } from "@/components/featured";
import { Gallery } from "@/components/gallery";
import { CtaBanner } from "@/components/cta-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <Featured />
      <Gallery />
      <CtaBanner />
    </>
  );
}
