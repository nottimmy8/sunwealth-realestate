"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import {
  Search,
  MapPin,
  Home,
  DollarSign,
  SlidersHorizontal,
  ChevronDown,
} from "lucide-react";

export default function PropertyFilter() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (location) params.set("location", location);
    if (propertyType !== "all") params.set("type", propertyType);
    if (priceRange !== "all") params.set("priceRange", priceRange);
    router.push(`/list?${params.toString()}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-6xl mx-auto -mt-24 relative z-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="bg-white shadow-2xl rounded-2xl p-6 md:p-8 border border-zinc-100">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Location Filter */}
          <div className="w-full md:w-1/3 flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
              <MapPin size={14} className="text-red-600" /> Location / Area
            </label>
            <input
              type="text"
              placeholder="Enter city, neighborhood..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="w-full bg-zinc-50 border-b-2 border-zinc-200 py-3 px-4 text-zinc-800 focus:outline-none focus:border-red-600 transition-colors rounded-t-md"
            />
          </div>

          <div className="hidden md:block w-px h-16 bg-zinc-200"></div>

          {/* Property Type Filter */}
          <div className="w-full md:w-1/4 flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
              <Home size={14} className="text-yellow-500" /> Property Type
            </label>
            <div className="relative">
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full bg-zinc-50 border-b-2 border-zinc-200 py-3 px-4 text-zinc-800 focus:outline-none focus:border-yellow-500 transition-colors rounded-t-md appearance-none cursor-pointer"
              >
                <option value="all">All Types</option>
                <option value="House">House</option>
                <option value="Rent">Rent</option>
                <option value="Land">Land</option>
              </select>
              <ChevronDown
                size={14}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none"
              />
            </div>
          </div>

          <div className="hidden md:block w-px h-16 bg-zinc-200"></div>

          {/* Price Range Filter */}
          <div className="w-full md:w-1/4 flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
              <DollarSign size={14} className="text-black" /> Price Range
            </label>
            <div className="relative">
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full bg-zinc-50 border-b-2 border-zinc-200 py-3 px-4 text-zinc-800 focus:outline-none focus:border-black transition-colors rounded-t-md appearance-none cursor-pointer"
              >
                <option value="all">Any Price</option>
                <option value="0-50m">Under ₦50M</option>
                <option value="50m-200m">₦50M – ₦200M</option>
                <option value="200m-500m">₦200M – ₦500M</option>
                <option value="500m+">₦500M+</option>
              </select>
              <ChevronDown
                size={14}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none"
              />
            </div>
          </div>

          {/* Search Button */}
          <div className="w-full md:w-auto flex items-end justify-center md:justify-end mt-4 md:mt-0">
            <button
              onClick={handleSearch}
              className="w-full md:w-auto bg-black text-white p-4 rounded-xl hover:bg-red-600 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0"
            >
              <Search size={20} />
              <span className="md:hidden font-medium uppercase tracking-wider text-sm">
                Search Properties
              </span>
            </button>
          </div>
        </div>

        {/* Advanced Filters link */}
        <div className="mt-6 pt-4 border-t border-zinc-100 flex justify-center md:justify-start">
          <button
            onClick={handleSearch}
            className="text-xs font-bold uppercase tracking-wider text-zinc-500 hover:text-red-600 transition-colors flex items-center gap-2"
          >
            <SlidersHorizontal size={14} /> Advanced Filters & Full Listings →
          </button>
        </div>
      </div>
    </motion.div>
  );
}
