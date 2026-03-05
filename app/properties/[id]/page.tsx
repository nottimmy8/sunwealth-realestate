"use client";
import { useParams } from "next/navigation";
import { listData } from "@/lib/dummydata";
import {
  ArrowLeft,
  Bed,
  Bath,
  Move,
  MapPin,
  Share2,
  Heart,
  CheckCircle2,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

const PropertyDetailPage = () => {
  const { id } = useParams();
  const property = listData.find((p) => p.id === Number(id)) || listData[0];
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Gallery */}
      <div className="relative h-[60vh] md:h-[80vh] bg-zinc-950 overflow-hidden pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={property.images[activeImage]}
              alt={property.title}
              fill
              className="object-cover opacity-80"
              priority
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />

        <div className="absolute inset-0 flex flex-col justify-between px-6 md:px-12 pt-24">
          <Link
            href="/list"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white hover:text-red-500 transition-colors group"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Properties
          </Link>

          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              {property.tag && (
                <span className="inline-block bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                  {property.tag}
                </span>
              )}
              <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 leading-tight">
                {property.title}
              </h1>
              <div className="flex items-center gap-2 text-zinc-300">
                <MapPin size={18} className="text-red-500" />
                <span className="text-lg">{property.location}</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="absolute bottom-12 right-12 hidden md:flex gap-4 z-20">
          {property.images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(idx)}
              className={`relative w-24 h-24 rounded-xl overflow-hidden border-2 transition-all ${
                activeImage === idx
                  ? "border-red-600 scale-105"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image src={img} alt="" fill className="object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Main Content */}
          <div className="flex-1">
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 pb-12 border-b border-zinc-100 mb-12">
              <div className="flex flex-col gap-2">
                <span className="text-zinc-400 uppercase text-[10px] font-bold tracking-widest text-center">
                  Price
                </span>
                <span className="text-2xl font-serif text-red-600 text-center">
                  {property.price}
                </span>
              </div>
              <div className="flex flex-col gap-2 border-x border-zinc-100">
                <span className="text-zinc-400 uppercase text-[10px] font-bold tracking-widest text-center">
                  Bedrooms
                </span>
                <div className="flex items-center justify-center gap-2 text-2xl font-serif text-zinc-900">
                  <Bed size={22} /> {property.beds}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-zinc-400 uppercase text-[10px] font-bold tracking-widest text-center">
                  Area
                </span>
                <div className="flex items-center justify-center gap-2 text-2xl font-serif text-zinc-900">
                  <Move size={22} /> {property.sqft}{" "}
                  <span className="text-sm font-sans mt-2">sqft</span>
                </div>
              </div>
            </div>

            <div className="prose prose-zinc prose-lg max-w-none">
              <h2 className="font-serif text-3xl mb-6">About this Property</h2>
              <p className="text-zinc-600 leading-relaxed mb-8">
                {property.description}
              </p>
              <p className="text-zinc-600 leading-relaxed mb-12">
                Experience the pinnacle of luxury living in this exquisite
                residence. Every detail has been meticulously crafted to offer
                unparalleled comfort and style. From the expansive living spaces
                to the state-of-the-art kitchen, this home is designed for both
                grand entertaining and intimate family moments.
              </p>

              <h3 className="font-serif text-2xl mb-6">Key Features</h3>
              <div className="grid grid-cols-2 gap-y-4 mb-16">
                {[
                  "Smart Home System",
                  "Private Infinity Pool",
                  "24/7 Security & Concierge",
                  "Waterfront Views",
                  "Gourmet Chef's Kitchen",
                  "Private Cinema Room",
                  "Fully Equipped Gym",
                  "Landscaped Gardens",
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-zinc-700 text-sm"
                  >
                    <CheckCircle2 size={18} className="text-red-600" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Inquiry Form */}
          <aside className="lg:w-[400px]">
            <div className="sticky top-32 bg-zinc-50 border border-zinc-100 p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-zinc-200/50">
              <h3 className="font-serif text-2xl mb-2 text-zinc-900">
                Inquire Now
              </h3>
              <p className="text-sm text-zinc-500 mb-8">
                Schedule a private viewing or request more information.
              </p>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-white border border-zinc-200 px-6 py-4 rounded-xl text-sm focus:border-red-600 focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white border border-zinc-200 px-6 py-4 rounded-xl text-sm focus:border-red-600 focus:outline-none transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-white border border-zinc-200 px-6 py-4 rounded-xl text-sm focus:border-red-600 focus:outline-none transition-colors"
                />
                <textarea
                  placeholder="Your Message..."
                  rows={4}
                  className="w-full bg-white border border-zinc-200 px-6 py-4 rounded-xl text-sm focus:border-red-600 focus:outline-none transition-colors resize-none"
                />
                <button className="w-full bg-zinc-950 text-white font-bold uppercase tracking-widest text-xs py-5 rounded-xl hover:bg-red-600 transition-all shadow-lg shadow-zinc-950/10 active:scale-[0.98]">
                  Send Inquiry
                </button>
              </form>

              <div className="mt-10 pt-8 border-t border-zinc-200 text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">
                  Or Contact Broker Directly
                </p>
                <div className="flex justify-center gap-6">
                  <a
                    href="tel:+2340000000"
                    className="flex items-center justify-center w-12 h-12 bg-white rounded-full border border-zinc-200 hover:text-red-600 transition-colors"
                  >
                    <Phone size={18} />
                  </a>
                  <a
                    href="mailto:broker@sunwealth.com"
                    className="flex items-center justify-center w-12 h-12 bg-white rounded-full border border-zinc-200 hover:text-red-600 transition-colors"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
