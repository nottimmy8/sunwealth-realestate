"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowRight, BedDouble, Bath, Square } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "The Glass Pavilion",
    location: "Beverly Hills, CA",
    price: "$12,500,000",
    type: "House",
    beds: 5,
    baths: 6,
    sqft: "8,200",
    image: "/img1.png",
  },
  {
    id: 2,
    title: "Oceanfront Estate",
    location: "Malibu, CA",
    price: "$28,000,000",
    type: "House",
    beds: 7,
    baths: 9,
    sqft: "12,500",
    image: "/img2.png",
  },
  {
    id: 3,
    title: "Skyline Penthouse",
    location: "Manhattan, NY",
    price: "$45,000 / mo",
    type: "Rent",
    beds: 3,
    baths: 4,
    sqft: "4,100",
    image: "/img3.png",
  },
  {
    id: 4,
    title: "Vineyard Acreage",
    location: "Napa Valley, CA",
    price: "$8,200,000",
    type: "Land",
    beds: 0,
    baths: 0,
    sqft: "45 Acres",
    image: "/img1.png",
  },
];

export default function FeaturedProperties() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-red-600 mb-4">
            Exclusive Listings
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-zinc-900 leading-tight">
            Curated properties for the{" "}
            <span className="italic font-light">discerning</span> buyer.
          </h3>
        </motion.div>
        <motion.button
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 md:mt-0 flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-red-600 transition-colors group"
        >
          View All Properties
          <ArrowRight
            size={16}
            className="transform group-hover:translate-x-1 transition-transform"
          />
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {properties.map((property, index) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group cursor-pointer flex flex-col h-full"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
              <Image
                src={property.image}
                alt={property.title}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                {property.type}
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="bg-white text-black px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  View Details
                </span>
              </div>
            </div>

            <div className="flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-serif font-medium text-zinc-900 group-hover:text-red-600 transition-colors">
                  {property.title}
                </h4>
                <span className="text-lg font-bold text-zinc-900">
                  {property.price}
                </span>
              </div>
              <p className="text-sm text-zinc-500 mb-4">{property.location}</p>

              <div className="flex items-center gap-4 text-xs font-medium text-zinc-500 uppercase tracking-wider mt-auto pt-4 border-t border-zinc-100">
                {property.type !== "Land" && (
                  <>
                    <span className="flex items-center gap-1">
                      <BedDouble size={14} /> {property.beds}
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath size={14} /> {property.baths}
                    </span>
                  </>
                )}
                <span className="flex items-center gap-1">
                  <Square size={14} /> {property.sqft}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
