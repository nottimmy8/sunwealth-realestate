"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Homeowner",
    image: "https://i.pravatar.cc/150?img=47",
    text: "Sunwealth Real Estate made finding our dream home a breeze. Their expertise and dedication to our needs were unmatched.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Property Investor",
    image: "https://i.pravatar.cc/150?img=11",
    text: "As an investor, I need quick and accurate data. The team provided exactly what I needed to make profitable decisions.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "First-time Buyer",
    image: "https://i.pravatar.cc/150?img=32",
    text: "I was nervous about buying my first home, but their agents guided me through every step with extreme patience.",
    rating: 4,
  },
];

const Testimonial = () => {
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
      className="relative py-32 bg-white overflow-hidden flex flex-col items-center justify-center min-h-screen"
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
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm tracking-widest uppercase text-blue-600 font-semibold">
          
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-slate-900 tracking-tight">
            <br />.
          </h2>
        </motion.div> */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-red-600 mb-4">
            Testimonials
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-zinc-900 leading-tight">
            Trusted by thousands of <br />
            <span className="italic font-light"> happy </span> clients.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative items-start">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              style={{ y: idx % 2 === 0 ? y1 : y2 }}
              className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-6"
            >
              <div className="flex gap-1 text-yellow-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>

              <p className="text-slate-600 leading-relaxed text-lg">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-slate-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
