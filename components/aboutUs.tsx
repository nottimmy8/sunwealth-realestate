"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const AboutUs = () => {
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
      className="relative h-[700px] py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden flex items-center justify-center rounded-2xl "
    >
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <Image
          src="/img2.png"
          alt="about us"
          fill
          className="object-cover opacity-70 z-0  "
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/50 rounded-2xl" />
      </motion.div>

      <motion.div
        style={{ y: textY }}
        className="relative z-10 px-4 max-w-5xl mx-auto text-center"
      >
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
  );
};

export default AboutUs;
