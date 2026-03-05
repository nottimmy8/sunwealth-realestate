"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Adaeze Okafor",
    role: "Homeowner — Ikoyi",
    image: "https://i.pravatar.cc/150?img=47",
    text: "Sunwealth didn't just find us a house — they found us a home. From the first consultation to the final key handover, every detail was handled with extraordinary care.",
    rating: 5,
  },
  {
    name: "Emeka Nwachukwu",
    role: "Property Investor — VI",
    image: "https://i.pravatar.cc/150?img=11",
    text: "My portfolio has grown 340% since partnering with Sunwealth. Their market intelligence and advisory services are simply unmatched in Lagos. A true class act.",
    rating: 5,
  },
  {
    name: "Fatima Al-Hassan",
    role: "First-time Buyer — Lekki",
    image: "https://i.pravatar.cc/150?img=32",
    text: "As a first-time buyer, I was overwhelmed. Sunwealth's team made the entire process seamless, transparent, and genuinely enjoyable. I couldn't recommend them more highly.",
    rating: 5,
  },
  {
    name: "David Mensah",
    role: "Commercial Developer",
    image: "https://i.pravatar.cc/150?img=57",
    text: "Three commercial projects, zero stress. Sunwealth understands what serious investors require — precision, speed, and absolute discretion. They are in a league of their own.",
    rating: 5,
  },
];

const Testimonial = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const col1Y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const col2Y = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const blobY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section
      ref={containerRef}
      id="testimonials"
      className="relative py-32 bg-zinc-950 overflow-hidden"
    >
      {/* Background blobs */}
      <motion.div
        style={{ y: blobY }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-red-900/20 blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: blobY }}
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-yellow-900/10 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-red-500 mb-5 border border-red-500/30 px-4 py-1.5 rounded-full">
              Client Stories
            </span>
            <h2 className="text-5xl md:text-6xl font-serif text-white leading-tight">
              Trusted by clients <br />
              <span className="italic font-light text-yellow-400">
                who demand the best.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 shrink-0"
          >
            <div className="flex -space-x-3">
              {[47, 11, 32, 57].map((id) => (
                <img
                  key={id}
                  src={`https://i.pravatar.cc/40?img=${id}`}
                  className="w-10 h-10 rounded-full border-2 border-zinc-950 object-cover"
                  alt="client"
                />
              ))}
            </div>
            <div>
              <p className="text-white font-semibold text-sm">1,200+ clients</p>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Masonry stagger cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Column 1 */}
          <motion.div style={{ y: col1Y }} className="flex flex-col gap-6">
            {[testimonials[0], testimonials[2]].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="group relative bg-zinc-900 rounded-3xl p-8 border border-zinc-800 hover:border-red-800/50 transition-all duration-500"
              >
                {/* Quote icon */}
                <Quote className="text-red-700/40 mb-4" size={36} />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, si) => (
                    <Star
                      key={si}
                      size={14}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-zinc-300 leading-relaxed text-base mb-8">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-4 pt-5 border-t border-zinc-800">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-red-700/30"
                  />
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-zinc-500 text-xs">{t.role}</p>
                  </div>
                </div>

                {/* Left accent line on hover */}
                <div className="absolute top-0 left-0 w-0 h-full rounded-l-3xl bg-gradient-to-b from-red-600 to-red-900 group-hover:w-1 transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>

          {/* Column 2 */}
          <motion.div
            style={{ y: col2Y }}
            className="flex flex-col gap-6 md:mt-16"
          >
            {[testimonials[1], testimonials[3]].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.15 }}
                className="group relative bg-zinc-900 rounded-3xl p-8 border border-zinc-800 hover:border-red-800/50 transition-all duration-500"
              >
                <Quote className="text-red-700/40 mb-4" size={36} />

                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, si) => (
                    <Star
                      key={si}
                      size={14}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-zinc-300 leading-relaxed text-base mb-8">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-4 pt-5 border-t border-zinc-800">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-red-700/30"
                  />
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-zinc-500 text-xs">{t.role}</p>
                  </div>
                </div>

                <div className="absolute top-0 left-0 w-0 h-full rounded-l-3xl bg-gradient-to-b from-red-600 to-red-900 group-hover:w-1 transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
