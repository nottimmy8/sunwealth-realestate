"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const AboutUs = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section
      ref={containerRef}
      id="about"
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
          className="max-w-2xl "
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-red-600 mb-4">
            About Us
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-zinc-900 leading-tight">
            Sunwealth Journery <br />
            <span className="italic font-light">since</span> --XXXX
          </h3>
        </motion.div>

        <div className="flex flex-col md:flex-row mt-7 items-start justify-between gap-8 ">
          <span className="bg-yellow-500 rounded-2xl max-w-[500px] w-full h-[500px] shadow-md "></span>
          <span className="max-w-xl ">
            <h1 className="text-4xl md:text-3xl font-semibold mb-4">CEO: </h1>
            <h1 className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, odio. Dolorum laudantium hic error autem iste
              voluptatibus debitis cupiditate! Quam, earum. Nostrum molestias
              facilis excepturi fugiat rem. Doloremque, sequi iste.{" "}
            </h1>
            <h1 className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, odio. Dolorum laudantium hic error autem iste
              voluptatibus debitis cupiditate! Quam, earum. Nostrum molestias
              facilis excepturi fugiat rem. Doloremque, sequi iste. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quibusdam, odio.
              Dolorum laudantium hic error autem iste voluptatibus debitis
              cupiditate! Quam, earum. Nostrum molestias facilis excepturi
              fugiat rem. Doloremque, sequi iste.
            </h1>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, odio. Dolorum laudantium hic error autem iste
              voluptatibus debitis cupiditate! Quam, earum. Nostrum molestias
              facilis excepturi fugiat rem. Doloremque, sequi iste. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quibusdam, odio.
              Dolorum laudantium hic error autem iste voluptatibus debitis
              cupiditate! Quam, earum. Nostrum molestias facilis excepturi
              fugiat rem. Doloremque, sequi iste.
            </h1>

            <a
              href=""
              className="mt-3 text-yellow-600 underline hover:text-yellow-700"
            >
              Read more
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
