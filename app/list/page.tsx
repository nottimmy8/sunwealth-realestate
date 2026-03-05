"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { listData } from "@/lib/dummydata";
import Filter, { FilterState, ViewMode } from "@/components/filter";
import PropertyCard from "@/components/property-card";
import { MapPin, Search, Building2, ArrowLeft } from "lucide-react";
import MapPanel from "@/components/map-panel";
import Link from "next/link";

// ── Filtering logic ─────────────────────────────────────────────────────────
function applyFilters(data: typeof listData, f: FilterState) {
  return data.filter((item) => {
    // Location
    if (
      f.location &&
      !item.location.toLowerCase().includes(f.location.toLowerCase()) &&
      !item.title.toLowerCase().includes(f.location.toLowerCase())
    )
      return false;

    // Type
    if (f.type !== "all" && item.type !== f.type) return false;

    // Price
    if (f.priceRange !== "all") {
      const p = item.priceValue;
      if (f.priceRange === "0-50m" && p >= 50_000_000) return false;
      if (f.priceRange === "50m-200m" && (p < 50_000_000 || p > 200_000_000))
        return false;
      if (f.priceRange === "200m-500m" && (p < 200_000_000 || p > 500_000_000))
        return false;
      if (f.priceRange === "500m+" && p < 500_000_000) return false;
    }

    // Beds
    if (
      f.beds !== "any" &&
      item.type !== "Land" &&
      item.beds < parseInt(f.beds)
    )
      return false;

    // Baths
    if (
      f.baths !== "any" &&
      item.type !== "Land" &&
      item.baths < parseInt(f.baths)
    )
      return false;

    // Min Sqft (only for non-land where sqftValue is meaningful)
    if (
      f.minSqft !== "any" &&
      item.type !== "Land" &&
      item.sqftValue < parseInt(f.minSqft)
    )
      return false;

    // Tag
    if (f.tag !== "all" && item.tag !== f.tag) return false;

    return true;
  });
}

// ── Map Panel ───────────────────────────────────────────────────────────────
// function MapPanel({ count }: { count: number }) {
//   return (
//     <div className="relative w-full h-full min-h-[500px] bg-zinc-100 rounded-2xl overflow-hidden flex flex-col items-center justify-center">
//       {/* Decorative grid background */}
//       <div
//         className="absolute inset-0 opacity-40"
//         style={{
//           backgroundImage:
//             "linear-gradient(#d4d4d8 1px, transparent 1px), linear-gradient(90deg, #d4d4d8 1px, transparent 1px)",
//           backgroundSize: "40px 40px",
//         }}
//       />

//       {/* Fake map pins */}
//       {[
//         { top: "22%", left: "38%", delay: 0 },
//         { top: "45%", left: "55%", delay: 0.1 },
//         { top: "60%", left: "30%", delay: 0.2 },
//         { top: "35%", left: "67%", delay: 0.15 },
//         { top: "70%", left: "62%", delay: 0.25 },
//         { top: "28%", left: "20%", delay: 0.05 },
//       ].map((pin, i) => (
//         <motion.div
//           key={i}
//           initial={{ scale: 0, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{
//             delay: pin.delay + 0.3,
//             type: "spring",
//             stiffness: 200,
//           }}
//           className="absolute"
//           style={{ top: pin.top, left: pin.left }}
//         >
//           <div className="relative flex flex-col items-center">
//             <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-600/40 cursor-pointer hover:scale-110 transition-transform">
//               <MapPin size={14} className="text-white" />
//             </div>
//             <div className="w-2 h-2 bg-red-600 rotate-45 -mt-1 shadow-sm" />
//           </div>
//         </motion.div>
//       ))}

//       {/* Center overlay */}
//       <div className="relative z-10 flex flex-col items-center gap-3 text-center">
//         <div className="w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center">
//           <MapPin size={26} className="text-red-600" />
//         </div>
//         <div>
//           <p className="text-sm font-bold text-zinc-800">
//             {count} Properties on Map
//           </p>
//           <p className="text-xs text-zinc-500 mt-0.5">Lagos, Nigeria</p>
//         </div>
//         <a
//           href="https://maps.google.com/?q=Lagos,Nigeria"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="mt-1 text-xs font-bold uppercase tracking-wider bg-zinc-900 text-white px-5 py-2.5 rounded-full hover:bg-red-600 transition-colors"
//         >
//           Open Full Map
//         </a>
//       </div>

//       {/* Corner label */}
//       <div className="absolute bottom-4 left-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
//         Sunwealth • Lagos
//       </div>
//     </div>
//   );
// }

// ── Empty State ──────────────────────────────────────────────────────────────
function EmptyState({ onClear }: { onClear: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-20 gap-5 text-center"
    >
      <div className="w-16 h-16 rounded-2xl bg-zinc-100 flex items-center justify-center">
        <Search size={28} className="text-zinc-400" />
      </div>
      <div>
        <h3 className="text-lg font-serif font-semibold text-zinc-800 mb-1">
          No properties found
        </h3>
        <p className="text-sm text-zinc-500 max-w-xs">
          Try adjusting your filters — we're always adding new listings.
        </p>
      </div>
      <button
        onClick={onClear}
        className="text-sm font-bold uppercase tracking-wider bg-zinc-900 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-colors"
      >
        Clear All Filters
      </button>
    </motion.div>
  );
}

// ── Main Page ────────────────────────────────────────────────────────────────
export default function ListPage() {
  const [filterState, setFilterState] = useState<FilterState>({
    location: "",
    type: "all",
    priceRange: "all",
    beds: "any",
    baths: "any",
    minSqft: "any",
    tag: "all",
  });
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  const filtered = useMemo(
    () => applyFilters(listData, filterState),
    [filterState],
  );

  const clearAll = () =>
    setFilterState({
      location: "",
      type: "all",
      priceRange: "all",
      beds: "any",
      baths: "any",
      minSqft: "any",
      tag: "all",
    });

  return (
    <div className="min-h-screen bg-white">
      {/* Page header */}
      <div className="relative bg-zinc-950 text-white overflow-hidden pt-20">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #dc2626 0%, transparent 50%), radial-gradient(circle at 80% 20%, #ffffff 0%, transparent 40%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 relative z-10">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white hover:text-red-500 transition-colors group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Home
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-red-500 mb-3">
                Sunwealth Real Estate
              </p>
              <h1 className="text-4xl md:text-6xl font-serif leading-tight">
                Market{" "}
                <span className="italic font-light text-zinc-400">
                  Listings
                </span>
              </h1>
              <p className="text-sm text-zinc-400 mt-4 max-w-lg">
                Discover a curated collection of Lagos' most prestigious
                residential and investment opportunities.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 shrink-0">
              <div className="flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <Building2 size={18} className="text-red-500" />
                <span className="text-xs font-bold tracking-widest uppercase">
                  {listData.length} Total Listings
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body: Filter + Results + Map */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div
          className={`flex gap-6 ${
            viewMode === "map" ? "flex-col lg:flex-row" : "flex-col"
          }`}
        >
          {/* Left: filter + cards */}
          <div className={viewMode === "map" ? "flex-1 min-w-0" : "w-full"}>
            <Filter
              onFilterChange={setFilterState}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              resultCount={filtered.length}
              totalCount={listData.length}
            />

            <AnimatePresence mode="wait">
              {filtered.length === 0 ? (
                <EmptyState key="empty" onClear={clearAll} />
              ) : viewMode === "list" ? (
                <motion.div
                  key="list"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-4"
                >
                  {filtered.map((item, i) => (
                    <PropertyCard
                      key={item.id}
                      item={item}
                      viewMode="list"
                      index={i}
                    />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filtered.map((item, i) => (
                    <PropertyCard
                      key={item.id}
                      item={item}
                      viewMode="grid"
                      index={i}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right: sticky map (only in map view) */}
          {viewMode === "map" && (
            <motion.div
              key="map-panel"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="w-full lg:w-[420px] shrink-0"
            >
              <div className="sticky top-24">
                {/* <MapPanel count={filtered.length} /> */}
                <MapPanel items={filtered} />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
