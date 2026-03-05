"use client";
import dynamic from "next/dynamic";

import { Data } from "@/lib/dummydata";

// Dynamically import the actual map implementation to avoid SSR issues with Leaflet
const MapWithNoSSR = dynamic(() => import("@/components/map-impl"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[500px] rounded-2xl bg-zinc-100 flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-red-600 border-t-transparent animate-spin" />
    </div>
  ),
});

export default function MapPanel({ items }: { items: Data[] }) {
  return <MapWithNoSSR items={items} />;
}
