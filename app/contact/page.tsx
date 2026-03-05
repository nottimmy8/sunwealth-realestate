"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Phone, Mail, MapPin, ArrowRight, Clock } from "lucide-react";

const ContactPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <div ref={containerRef} className=" relative min-h-screen bg-white">
      {/* Header Section */}
      <div className="relative bg-zinc-950 text-white overflow-hidden pt-20">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #dc2626 0%, transparent 50%), radial-gradient(circle at 80% 20%, #ffffff 0%, transparent 40%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-red-500 mb-4">
              Contact Us
            </p>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">
              Let's find your{" "}
              <span className="italic font-light"> dream property.</span>
            </h1>
            <p className="text-zinc-400 max-w-2xl text-lg leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae at
              eos odio voluptatibus
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="bg-white rounded-3xl shadow-xl border border-zinc-100 p-10 flex flex-col gap-6"
          >
            <h3 className="text-2xl font-serif text-zinc-900 font-semibold">
              Send us a message
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Okafor"
                  className="bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-red-400 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-red-400 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+234 800 000 0000"
                className="bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-red-400 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">
                Interested In
              </label>
              <select className="bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-red-400 transition-colors appearance-none">
                <option>Buying a Property</option>
                <option>Renting a Property</option>
                <option>Property Investment</option>
                <option>Estate Development</option>
                <option>Property Management</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your ideal property..."
                className="bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-red-400 transition-colors resize-none"
              />
            </div>

            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl px-6 py-4 flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-red-600/20 mt-2">
              Send Message <ArrowRight size={16} />
            </button>
          </motion.div>

          {/* Right: Image + Contact details */}
          <div className="flex flex-col gap-6">
            {/* Banner image with parallax */}
            <motion.div
              style={{ y: imgY }}
              className="relative rounded-3xl overflow-hidden h-64 lg:h-auto flex-1 shadow-xl min-h-[260px]"
            >
              <Image
                src="/banner.png"
                alt="Sunwealth property"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-2">
                  Sunwealth Ltd — RC: 1739523
                </p>
                <p className="text-white text-xl font-serif leading-snug">
                  Professional, trustworthy, <br />
                  <span className="italic font-light">
                    and always client-first.
                  </span>
                </p>
              </div>
            </motion.div>

            {/* Contact info cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {[
                {
                  icon: MapPin,
                  label: "Address",
                  value: "123 Admiralty Way, Lekki Phase 1, Lagos",
                },
                { icon: Phone, label: "Phone", value: "+234 800 123 4567" },
                { icon: Mail, label: "Email", value: "hello@sunwealth.ng" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-5 border border-zinc-100 shadow-sm flex flex-col gap-2"
                  >
                    <div className="w-9 h-9 bg-red-50 rounded-lg flex items-center justify-center">
                      <Icon size={18} className="text-red-600" />
                    </div>
                    <p className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">
                      {item.label}
                    </p>
                    <p className="text-sm text-zinc-700 font-medium leading-snug">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </motion.div>

            {/* Office hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-zinc-950 rounded-2xl p-6 flex items-center gap-4"
            >
              <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center shrink-0">
                <Clock size={18} className="text-white" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Office Hours</p>
                <p className="text-zinc-400 text-xs mt-0.5">
                  Mon–Fri: 9am – 6pm &nbsp;|&nbsp; Sat: 10am – 4pm
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
