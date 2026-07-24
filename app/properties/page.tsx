import type { Metadata } from "next";
import { PropertiesHeader } from "@/components/properties-header";
import { PropertiesExplorer } from "@/components/properties-explorer";
import { properties } from "@/data/properties";

export const metadata: Metadata = {
  title: "Properties — EstateHaus",
  description: "Browse the latest 16 property listings across Pakistan.",
};

export default function PropertiesPage() {
  return (
    <>
      <PropertiesHeader count={properties.length} />
      <PropertiesExplorer />
    </>
  );
}
