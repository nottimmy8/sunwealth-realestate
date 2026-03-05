"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import {
  BedDouble,
  Bath,
  Square,
  MapPin,
  Heart,
  ArrowUpRight,
} from "lucide-react";
import { Data } from "@/lib/dummydata";

interface PropertyCardProps {
  item: Data;
  viewMode?: "grid" | "list";
  index?: number;
}

const tagColors: Record<string, string> = {
  "New Listing": "bg-emerald-500 text-white",
  "Price Drop": "bg-amber-500 text-white",
  "Hot Deal": "bg-red-600 text-white",
  Exclusive: "bg-zinc-900 text-white",
};

const typeColors: Record<string, string> = {
  House: "bg-white/90 text-zinc-900",
  Rent: "bg-blue-600/90 text-white",
  Land: "bg-emerald-600/90 text-white",
};

export default function PropertyCard({
  item,
  viewMode = "grid",
  index = 0,
}: PropertyCardProps) {
  const [saved, setSaved] = useState(false);
  const [imgIdx, setImgIdx] = useState(0);

  if (viewMode === "list") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className="group flex gap-0 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-zinc-100 transition-all duration-500"
      >
        {/* Image */}
        <div className="relative w-52 shrink-0 overflow-hidden">
          <Image
            src={item.images[imgIdx] ?? item.images[0]}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {item.tag && (
            <span
              className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${tagColors[item.tag]}`}
            >
              {item.tag}
            </span>
          )}
          <span
            className={`absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-sm ${typeColors[item.type]}`}
          >
            {item.type}
          </span>
        </div>

        {/* Details */}
        <div className="flex flex-col flex-1 p-5 justify-between">
          <div>
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="text-lg font-serif font-semibold text-zinc-900 group-hover:text-red-600 transition-colors leading-tight">
                {item.title}
              </h3>
              <button
                onClick={() => setSaved((v) => !v)}
                className="shrink-0 p-1.5 rounded-full hover:bg-zinc-100 transition-colors"
                aria-label={saved ? "Unsave" : "Save"}
              >
                <Heart
                  size={16}
                  className={
                    saved ? "fill-red-600 text-red-600" : "text-zinc-400"
                  }
                />
              </button>
            </div>
            <p className="text-xs text-zinc-400 flex items-center gap-1 mb-3">
              <MapPin size={11} /> {item.location}
            </p>
            <p className="text-sm text-zinc-500 line-clamp-2">
              {item.description}
            </p>
          </div>

          <div className="flex items-center justify-between mt-4 pt-3 border-t border-zinc-100">
            <div className="flex items-center gap-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">
              {item.type !== "Land" && (
                <>
                  <span className="flex items-center gap-1">
                    <BedDouble size={13} /> {item.beds}
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath size={13} /> {item.baths}
                  </span>
                </>
              )}
              <span className="flex items-center gap-1">
                <Square size={13} /> {item.sqft}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-zinc-900">
                {item.price}
              </span>
              <Link
                href={`/properties/${item.id}`}
                className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors"
              >
                View <ArrowUpRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Grid mode
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group cursor-pointer flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-zinc-100 hover:border-zinc-200 transition-all duration-500 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.images[imgIdx] ?? item.images[0]}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Overlay CTA */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
          <Link
            href={`/properties/${item.id}`}
            className="bg-white text-zinc-900 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transform translate-y-3 group-hover:translate-y-0 transition-all duration-400 flex items-center gap-1.5"
          >
            View Details <ArrowUpRight size={13} />
          </Link>
        </div>

        {/* Top badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {item.tag && (
            <span
              className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${tagColors[item.tag]}`}
            >
              {item.tag}
            </span>
          )}
          <span
            className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-sm ${typeColors[item.type]}`}
          >
            {item.type}
          </span>
        </div>

        {/* Save button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setSaved((v) => !v);
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors shadow-sm"
          aria-label={saved ? "Unsave" : "Save property"}
        >
          <Heart
            size={15}
            className={saved ? "fill-red-600 text-red-600" : "text-zinc-500"}
          />
        </button>

        {/* Image dots (multiple images) */}
        {item.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {item.images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.preventDefault();
                  setImgIdx(i);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  i === imgIdx ? "bg-white scale-125" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Details */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-base font-serif font-semibold text-zinc-900 group-hover:text-red-600 transition-colors leading-snug">
            {item.title}
          </h3>
          <span className="text-sm font-bold text-zinc-900 shrink-0">
            {item.price}
          </span>
        </div>
        <p className="text-xs text-zinc-400 flex items-center gap-1 mb-3">
          <MapPin size={11} /> {item.location}
        </p>

        <div className="flex items-center gap-4 text-xs font-medium text-zinc-400 uppercase tracking-wider mt-auto pt-3 border-t border-zinc-100">
          {item.type !== "Land" && (
            <>
              <span className="flex items-center gap-1">
                <BedDouble size={12} /> {item.beds} Beds
              </span>
              <span className="flex items-center gap-1">
                <Bath size={12} /> {item.baths} Bath
              </span>
            </>
          )}
          <span className="flex items-center gap-1">
            <Square size={12} /> {item.sqft}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
