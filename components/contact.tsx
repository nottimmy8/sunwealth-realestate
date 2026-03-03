"use client";
import Image from "next/image";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <div>
      <div
        id="contact"
        className="relative py-24 overflow-hidden flex items-center justify-center  "
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
        {/* px-4 sm:px-6 lg:px-8  */}
        <div className="max-w-7xl mx-auto relative h-[600px]  w-full overflow-hidden rounded-2xl">
          <motion.div className=" absolute inset-0 ">
            <Image
              src="/banner.png"
              alt="about us"
              fill
              className="object-fit opacity-70 z-0  w-full h-full "
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/50 rounded-2xl" />
          </motion.div>

          <motion.div className="relative h-full z-10 px-4 max-w-5xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-yellow-400 font-sans tracking-[0.2em] uppercase text-sm md:text-base mb-6 font-semibold"
            >
              Sunwealth Ltd — RC: 1739523.
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl md:text-4xl font-bold text-zinc-200 "
            >
              Let’s find your dream property.
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-4xl font-bold text-zinc-200 "
            >
              Contact Sunwealth Ltd today <br /> for professional, trustworthy
              service.
            </motion.h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
