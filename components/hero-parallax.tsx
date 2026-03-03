"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import banner from "@/public/banner.png";

const HeroParallax = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div
      ref={ref}
      id="home"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-zinc-900 "
    >
      <motion.div className="absolute inset-0 " style={{ y: backgroundY }}>
        <Image
          src={banner}
          alt="Luxury real estate banner"
          fill
          className="object-cover opacity-60  "
          priority
          referrerPolicy="no-referrer"
        />
        {/* <div className="absolute inset-0 bg-black/80"></div> */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-white"></div>
      </motion.div>

      <motion.div
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        style={{ y: textY, opacity: textOpacity }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-yellow-400 font-sans tracking-[0.2em] uppercase text-sm md:text-base mb-6 font-semibold"
        >
          SunWealth Properties
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight"
        >
          Finding your{" "}
          <span className="italic font-light text-white">legacy</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-zinc-200 max-w-2xl mx-auto mb-12 font-light"
        >
          Investing in the future with curated, high-end real estate tailored to
          your sophisticated lifestyle.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="px-8 py-4 bg-red-600 text-white font-medium uppercase tracking-wider text-sm hover:bg-red-700 transition-colors w-full sm:w-auto">
            Explore Properties
          </button>
          <button className="px-8 py-4 bg-transparent border border-white text-white font-medium uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-colors w-full sm:w-auto">
            Schedule a Tour
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroParallax;
