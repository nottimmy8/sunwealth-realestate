"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  MapPin,
  Home,
  DollarSign,
  SlidersHorizontal,
  BedDouble,
  Bath,
  Square,
  LayoutGrid,
  List,
  Map,
  X,
  ChevronDown,
} from "lucide-react";

export type ViewMode = "grid" | "list" | "map";

export interface FilterState {
  location: string;
  type: string;
  priceRange: string;
  beds: string;
  baths: string;
  minSqft: string;
  tag: string;
}

interface FilterProps {
  onFilterChange: (filters: FilterState) => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  resultCount: number;
  totalCount: number;
}

const defaultFilters: FilterState = {
  location: "",
  type: "all",
  priceRange: "all",
  beds: "any",
  baths: "any",
  minSqft: "any",
  tag: "all",
};

export default function Filter({
  onFilterChange,
  viewMode,
  onViewModeChange,
  resultCount,
  totalCount,
}: FilterProps) {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [hasActiveAdvanced, setHasActiveAdvanced] = useState(false);

  const update = (key: keyof FilterState, value: string) => {
    const next = { ...filters, [key]: value };
    setFilters(next);
    onFilterChange(next);
    // track if advanced panel has non-default values
    const adv = ["beds", "baths", "minSqft", "tag"];
    setHasActiveAdvanced(
      adv.some(
        (k) =>
          next[k as keyof FilterState] !==
          defaultFilters[k as keyof FilterState],
      ),
    );
  };

  const clearAll = () => {
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
    setHasActiveAdvanced(false);
  };

  const isFiltered =
    filters.location !== "" ||
    filters.type !== "all" ||
    filters.priceRange !== "all" ||
    hasActiveAdvanced;

  return (
    <div className="mb-10 space-y-6">
      {/* Main filter bar */}
      <div className="bg-white rounded-3xl border border-zinc-200 shadow-xl shadow-zinc-200/40 p-2 md:p-3">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-2">
          {/* Location */}
          <div className="flex-[1.5] flex flex-col gap-1 px-4 py-3 hover:bg-zinc-50 rounded-2xl transition-colors">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-2">
              <MapPin size={12} className="text-red-500" /> Location
            </label>
            <input
              type="text"
              placeholder="City, neighborhood, estate..."
              value={filters.location}
              onChange={(e) => update("location", e.target.value)}
              className="w-full bg-transparent text-sm font-medium text-zinc-900 placeholder-zinc-300 focus:outline-none focus:border-red-600 transition-colors"
            />
          </div>

          <div className="hidden lg:block w-px h-10 bg-zinc-100 mx-2" />

          {/* Property Type */}
          <div className="flex-1 flex flex-col gap-1 px-4 py-3 hover:bg-zinc-50 rounded-2xl transition-colors">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-1.5">
              <Home size={11} className="text-amber-500" /> Property Type
            </label>
            <div className="relative">
              <select
                value={filters.type}
                onChange={(e) => update("type", e.target.value)}
                className="w-full bg-transparent text-sm font-medium text-zinc-900 focus:outline-none appearance-none cursor-pointer pr-6"
              >
                <option value="all">All Properties</option>
                <option value="House">Residential House</option>
                <option value="Rent">Luxury Rental</option>
                <option value="Land">Premium Land</option>
              </select>
              <ChevronDown
                size={14}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none"
              />
            </div>
          </div>

          <div className="hidden lg:block w-px h-10 bg-zinc-100 mx-2" />

          {/* Price Range */}
          <div className="flex-1 flex flex-col gap-1 px-4 py-3 hover:bg-zinc-50 rounded-2xl transition-colors">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-1.5">
              <DollarSign size={11} className="text-zinc-700" /> Budget Range
            </label>
            <div className="relative">
              <select
                value={filters.priceRange}
                onChange={(e) => update("priceRange", e.target.value)}
                className="w-full bg-transparent text-sm font-medium text-zinc-900 focus:outline-none appearance-none cursor-pointer pr-6"
              >
                <option value="all">All Price Range</option>
                <option value="0-50m">Below ₦50M</option>
                <option value="50m-200m">₦50M – ₦200M</option>
                <option value="200m-500m">₦200M – ₦500M</option>
                <option value="500m+">₦500M and Above</option>
              </select>
              <ChevronDown
                size={14}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none"
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 p-2 shrink-0 lg:ml-auto">
            {/* Advanced Filter toggle */}
            <button
              onClick={() => setAdvancedOpen((v) => !v)}
              className={`flex items-center gap-2 px-6 py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                advancedOpen || hasActiveAdvanced
                  ? "bg-zinc-950 text-white shadow-lg shadow-zinc-950/20"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
              }`}
            >
              <SlidersHorizontal size={14} />
              Filters
              {hasActiveAdvanced && (
                <span className="ml-1 w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              )}
            </button>

            {/* Clear (only when filtered) */}
            {isFiltered && (
              <button
                onClick={clearAll}
                className="p-4 rounded-2xl bg-zinc-50 text-zinc-400 hover:text-red-600 hover:bg-red-50 transition-all border border-zinc-100"
                aria-label="Clear filters"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Advanced Filters Panel */}
        <AnimatePresence>
          {advancedOpen && (
            <motion.div
              key="advanced"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 pt-2 grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-6">
                {/* Bedrooms */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-1.5">
                    <BedDouble size={11} className="text-blue-500" /> Bedrooms
                  </label>
                  <div className="relative">
                    <select
                      value={filters.beds}
                      onChange={(e) => update("beds", e.target.value)}
                      className="w-full bg-transparent border-b border-zinc-200 py-2 text-sm font-medium text-zinc-800 focus:outline-none focus:border-blue-500 appearance-none cursor-pointer pr-6"
                    >
                      <option value="any">Any Number</option>
                      <option value="1">1+ Bedroom</option>
                      <option value="2">2+ Bedrooms</option>
                      <option value="3">3+ Bedrooms</option>
                      <option value="4">4+ Bedrooms</option>
                      <option value="5">5+ Bedrooms</option>
                    </select>
                    <ChevronDown
                      size={14}
                      className="absolute right-0 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none"
                    />
                  </div>
                </div>

                {/* Bathrooms */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-1.5">
                    <Bath size={11} className="text-teal-500" /> Bathrooms
                  </label>
                  <div className="relative">
                    <select
                      value={filters.baths}
                      onChange={(e) => update("baths", e.target.value)}
                      className="w-full bg-transparent border-b border-zinc-200 py-2 text-sm font-medium text-zinc-800 focus:outline-none focus:border-teal-500 appearance-none cursor-pointer pr-6"
                    >
                      <option value="any">Any Number</option>
                      <option value="1">1+ Bathroom</option>
                      <option value="2">2+ Bathrooms</option>
                      <option value="3">3+ Bathrooms</option>
                      <option value="4">4+ Bathrooms</option>
                    </select>
                    <ChevronDown
                      size={14}
                      className="absolute right-0 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none"
                    />
                  </div>
                </div>

                {/* Min Sqft */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-1.5">
                    <Square size={11} className="text-purple-500" /> Square
                    Footage
                  </label>
                  <div className="relative">
                    <select
                      value={filters.minSqft}
                      onChange={(e) => update("minSqft", e.target.value)}
                      className="w-full bg-transparent border-b border-zinc-100 py-2 text-sm font-medium text-zinc-800 focus:outline-none focus:border-purple-500 appearance-none cursor-pointer pr-6"
                    >
                      <option value="any">Unlimited</option>
                      <option value="500">500+ sqft</option>
                      <option value="1000">1,000+ sqft</option>
                      <option value="2000">2,000+ sqft</option>
                      <option value="4000">4,000+ sqft</option>
                      <option value="6000">6,000+ sqft</option>
                    </select>
                    <ChevronDown
                      size={14}
                      className="absolute right-0 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none"
                    />
                  </div>
                </div>

                {/* Tag */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                    Collection
                  </label>
                  <div className="relative">
                    <select
                      value={filters.tag}
                      onChange={(e) => update("tag", e.target.value)}
                      className="w-full bg-transparent border-b border-zinc-100 py-2 text-sm font-medium text-zinc-800 focus:outline-none appearance-none cursor-pointer pr-6"
                    >
                      <option value="all">Full Portfolio</option>
                      <option value="New Listing">New Arrivals</option>
                      <option value="Price Drop">Limited Offers</option>
                      <option value="Hot Deal">Trending Now</option>
                      <option value="Exclusive">Privé Collection</option>
                    </select>
                    <ChevronDown
                      size={14}
                      className="absolute right-0 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Results bar + view toggle */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
        <div className="flex items-center gap-4">
          <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">
            Analysis:{" "}
            <span className="text-zinc-900">{resultCount} Matches</span> Found
            in <span className="text-zinc-900">{totalCount} Total</span>
          </p>
          {isFiltered && (
            <button
              onClick={clearAll}
              className="text-[10px] text-red-600 hover:text-red-700 font-bold uppercase tracking-widest flex items-center gap-1 transition-colors"
            >
              Reset All <X size={12} />
            </button>
          )}
        </div>

        {/* View mode toggle */}
        <div className="flex items-center p-1.5 bg-zinc-50 border border-zinc-100 rounded-2xl shadow-inner shadow-zinc-200/20">
          {(
            [
              { mode: "grid" as ViewMode, Icon: LayoutGrid, label: "Grid" },
              { mode: "list" as ViewMode, Icon: List, label: "List" },
              { mode: "map" as ViewMode, Icon: Map, label: "Map" },
            ] as {
              mode: ViewMode;
              Icon: React.ComponentType<{ size?: number }>;
              label: string;
            }[]
          ).map(({ mode, Icon, label }) => (
            <button
              key={mode}
              onClick={() => onViewModeChange(mode)}
              title={label}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                viewMode === mode
                  ? "bg-white text-zinc-950 shadow-md ring-1 ring-zinc-950/5"
                  : "text-zinc-400 hover:text-zinc-600"
              }`}
            >
              <Icon size={14} />
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
