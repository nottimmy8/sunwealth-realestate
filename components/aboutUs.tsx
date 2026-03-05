"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Award, Users, Building2, TrendingUp } from "lucide-react";

const stats = [
  { icon: Building2, value: "500+", label: "Properties Sold" },
  { icon: Users, value: "1,200+", label: "Happy Clients" },
  { icon: TrendingUp, value: "₦50B+", label: "Total Transactions" },
  { icon: Award, value: "12+", label: "Years of Excellence" },
];

const AboutUs = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const textY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative py-28 bg-[#fafaf9] overflow-hidden"
    >
      {/* Decorative large text watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[220px] font-black text-zinc-100 select-none pointer-events-none leading-none tracking-tighter pr-4 hidden xl:block">
        ABOUT
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-red-600 mb-4 border border-red-200 px-4 py-1.5 rounded-full bg-red-50">
            About Us
          </span>
          <h2 className="text-5xl md:text-6xl font-serif text-zinc-900 leading-tight">
            The Sunwealth Journey <br />
            <span className="italic font-light text-zinc-500">
              since — 2012.
            </span>
          </h2>
        </motion.div>

        {/* Main Content: Image + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* CEO Image */}
          <motion.div ref={imageRef} style={{ y: imageY }} className="relative">
            <div className="relative rounded-3xl overflow-hidden h-[580px] shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-end">
                {/* Placeholder - replace with actual CEO image */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent" />
                <div className="relative z-10 p-8">
                  <p className="text-white/60 text-xs uppercase tracking-widest mb-1">
                    Chief Executive Officer
                  </p>
                  <h3 className="text-white text-2xl font-serif font-semibold">
                    Founder & CEO
                  </h3>
                </div>
              </div>
            </div>
            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-red-600 text-white rounded-2xl px-7 py-5 shadow-xl"
            >
              <p className="text-4xl font-black leading-none">12+</p>
              <p className="text-red-200 text-sm mt-1">Years of Trust</p>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div style={{ y: textY }} className="flex flex-col gap-8">
            <div className="space-y-5 text-zinc-600 leading-relaxed text-[15px]">
              <p>
                Founded in 2012, Sunwealth Real Estate has grown from a
                single-office boutique firm into one of Nigeria's most respected
                names in luxury property. Our philosophy is simple — every
                client deserves an experience as remarkable as the property they
                acquire.
              </p>
              <p>
                We specialize in curating exclusive residential and commercial
                properties across Ikoyi, Victoria Island, Lekki, and Banana
                Island — bringing together world-class architecture, strategic
                investment insight, and impeccable service.
              </p>
              <p>
                Our team of seasoned professionals brings decades of combined
                market expertise, providing you with honest guidance, meticulous
                attention to detail, and seamless transactions from the first
                consultation to final handover.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
                <span className="text-zinc-700 text-sm">
                  Registered with CAC — RC: 1739523
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
                <span className="text-zinc-700 text-sm">
                  Licensed by the Real Estate Regulatory Authority
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
                <span className="text-zinc-700 text-sm">
                  Award-winning service — Best Luxury Agency 2023
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-colors duration-300 shadow-lg shadow-red-600/20"
              >
                Work With Us
              </a>
              <a
                href="/aboutUs"
                className="text-zinc-900 text-sm font-semibold border border-zinc-200 px-7 py-3.5 rounded-full hover:bg-zinc-950 hover:text-white hover:border-zinc-950 transition-all duration-300"
              >
                Read Our Story
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors duration-300">
                  <Icon
                    size={20}
                    className="text-red-600 group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <p className="text-3xl font-black text-zinc-900">
                  {stat.value}
                </p>
                <p className="text-sm text-zinc-500 mt-1">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
