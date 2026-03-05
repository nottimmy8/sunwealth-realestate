"use client";

import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { listData } from "@/lib/dummydata";
import Filter, { FilterState, ViewMode } from "@/components/filter";
import PropertyCard from "@/components/property-card";
import { Building2, Home, TrendingUp, Star, ArrowLeft } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { Search } from "lucide-react";
import Link from "next/link";
import MapPanel from "@/components/map-panel";

function applyFilters(data: typeof listData, f: FilterState) {
  return data.filter((item) => {
    if (
      f.location &&
      !item.location.toLowerCase().includes(f.location.toLowerCase()) &&
      !item.title.toLowerCase().includes(f.location.toLowerCase())
    )
      return false;
    if (f.type !== "all" && item.type !== f.type) return false;
    if (f.priceRange !== "all") {
      const p = item.priceValue;
      if (f.priceRange === "0-50m" && p >= 50_000_000) return false;
      if (f.priceRange === "50m-200m" && (p < 50_000_000 || p > 200_000_000))
        return false;
      if (f.priceRange === "200m-500m" && (p < 200_000_000 || p > 500_000_000))
        return false;
      if (f.priceRange === "500m+" && p < 500_000_000) return false;
    }
    if (
      f.beds !== "any" &&
      item.type !== "Land" &&
      item.beds < parseInt(f.beds)
    )
      return false;
    if (
      f.baths !== "any" &&
      item.type !== "Land" &&
      item.baths < parseInt(f.baths)
    )
      return false;
    if (
      f.minSqft !== "any" &&
      item.type !== "Land" &&
      item.sqftValue < parseInt(f.minSqft)
    )
      return false;
    if (f.tag !== "all" && item.tag !== f.tag) return false;
    return true;
  });
}

const stats = [
  { icon: Building2, label: "Total Listings", value: `${listData.length}` },
  {
    icon: Home,
    label: "For Sale",
    value: `${listData.filter((d) => d.type === "House").length}`,
  },
  {
    icon: TrendingUp,
    label: "For Rent",
    value: `${listData.filter((d) => d.type === "Rent").length}`,
  },
  {
    icon: Star,
    label: "Exclusive",
    value: `${listData.filter((d) => d.tag === "Exclusive").length}`,
  },
];

function EmptyState({ onClear }: { onClear: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-24 gap-5 text-center"
    >
      <div className="w-16 h-16 rounded-2xl bg-zinc-100 flex items-center justify-center">
        <Search size={28} className="text-zinc-400" />
      </div>
      <div>
        <h3 className="text-lg font-serif font-semibold text-zinc-800 mb-1">
          No matching properties
        </h3>
        <p className="text-sm text-zinc-500 max-w-xs">
          Adjust your filters to explore our full portfolio.
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

export default function PropertiesPage() {
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
    <div className="min-h-screen bg-zinc-50">
      {/* Hero Banner */}
      <div className="relative bg-zinc-950 text-white overflow-hidden">
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #dc2626 0%, transparent 50%), radial-gradient(circle at 80% 20%, #ffffff 0%, transparent 40%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-500 mb-3">
              Sunwealth Real Estate
            </p>
            <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-4">
              All Properties
            </h1>
            <p className="text-zinc-400 max-w-xl text-base">
              Browse our curated portfolio of luxury homes, penthouses, and
              premium land across Lagos — Nigeria's capital of ambition.
            </p>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10"
          >
            {stats.map(({ icon: Icon, label, value }, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-red-600/20 flex items-center justify-center shrink-0">
                  <Icon size={17} className="text-red-400" />
                </div>
                <div>
                  <p className="text-xl font-bold">{value}</p>
                  <p className="text-[11px] text-zinc-400 uppercase tracking-wider">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Property Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Link
          href="/"
          className="mb-4 flex items-center gap-2 text-sm  font-bold uppercase tracking-wider text-black hover:text-red-700 transition-all duration-300 shrink-0 group "
        >
          <ArrowLeft
            size={16}
            className="transform group-hover:translate-x-1 transition-transform"
          />
          Back
        </Link>

        <Filter
          onFilterChange={setFilterState}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          resultCount={filtered.length}
          totalCount={listData.length}
        />

        <div
          className={`flex gap-6 mt-6 ${viewMode === "map" ? "flex-col lg:flex-row" : "flex-col"}`}
        >
          <div className={viewMode === "map" ? "flex-1 min-w-0" : "w-full"}>
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
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
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
                <MapPanel items={filtered} />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
