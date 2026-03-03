"use client";
import { motion } from "motion/react";

const Service = () => {
  return (
    <section
      id="service"
      className="relative py-24 bg-white overflow-hidden flex flex-col items-center justify-center "
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-red-600 mb-4">
            Our Service
          </h2>
          <h3 className="text-xl md:text-3xl font-serif text-zinc-900 leading-tight">
            Sunwealth curates exclusive, high-end properties in Lagos and
            beyond, blending timeless elegance with modern refinements for
            discerning lifestyles. Bespoke investment opportunities, impeccable
            service, and lasting legacies.
          </h3>
        </motion.div>

        <div></div>
      </div>
    </section>
  );
};

export default Service;
