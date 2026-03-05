"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Home,
  TrendingUp,
  Key,
  ShieldCheck,
  UserCheck,
  Landmark,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Luxury Property Sales",
    description:
      "Access our exclusive portfolio of premium residential and commercial properties handpicked for discerning buyers across Lagos and beyond.",
    accent: "from-rose-500 to-red-700",
    delay: 0,
  },
  {
    icon: Key,
    title: "Property Management",
    description:
      "From tenant screening to maintenance, our full-service management ensures your investment delivers consistent, worry-free returns.",
    accent: "from-amber-400 to-yellow-600",
    delay: 0.1,
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description:
      "Our seasoned analysts provide in-depth market intelligence and tailored strategies to maximise your real estate portfolio growth.",
    accent: "from-emerald-400 to-green-700",
    delay: 0.2,
  },
  {
    icon: ShieldCheck,
    title: "Legal & Documentation",
    description:
      "We handle every legal intricacy — C of O, title searches, deed of assignment — ensuring watertight, fully compliant transactions.",
    accent: "from-blue-400 to-blue-700",
    delay: 0.3,
  },
  {
    icon: Landmark,
    title: "Estate Development",
    description:
      "Partnering with world-class architects and contractors, we develop bespoke estates that redefine community living standards.",
    accent: "from-purple-400 to-violet-700",
    delay: 0.4,
  },
  {
    icon: UserCheck,
    title: "Concierge Relocation",
    description:
      "We offer white-glove relocation services including home-finding tours, neighborhood insights, and settlement support.",
    accent: "from-orange-400 to-rose-600",
    delay: 0.5,
  },
];

const Service = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const decorY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section
      ref={containerRef}
      id="services"
      className="relative py-32 bg-zinc-950 overflow-hidden"
    >
      {/* Floating decoration */}
      <motion.div
        style={{ y: decorY }}
        className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-red-700/10 blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: decorY }}
        className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-yellow-500/10 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-red-500 mb-5 border border-red-500/30 px-4 py-1.5 rounded-full">
              Our Services
            </span>
            <h2 className="text-5xl md:text-6xl font-serif text-white leading-tight">
              Elevating Every
              <br />
              <span className="italic font-light text-yellow-400">
                Property Experience.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="text-zinc-400 leading-relaxed max-w-md text-base md:text-lg"
          >
            Sunwealth curates exclusive, high-end properties in Lagos and
            beyond, blending timeless elegance with modern refinements for
            discerning lifestyles — bespoke opportunities and lasting legacies.
          </motion.p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: service.delay,
                  ease: "easeOut",
                }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl p-8 overflow-hidden cursor-default"
              >
                {/* Card glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-5`}
                  />
                </div>

                {/* Icon */}
                <div
                  className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${service.accent} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <Icon size={26} className="text-white" />
                </div>

                {/* Number */}
                <span className="absolute top-6 right-8 text-5xl font-black text-zinc-800 group-hover:text-zinc-700 transition-colors duration-300 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="text-xl font-semibold text-white mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom line reveal on hover */}
                <div
                  className={`mt-6 h-0.5 w-0 bg-gradient-to-r ${service.accent} group-hover:w-full transition-all duration-500 rounded-full`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 bg-gradient-to-r from-red-700 to-red-900 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h4 className="text-2xl md:text-3xl font-serif text-white font-semibold">
              Ready to invest in your future?
            </h4>
            <p className="text-red-200 mt-1 text-sm">
              Speak with our expert advisors and let us match you with the
              perfect property.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 bg-white text-red-700 font-semibold px-8 py-3.5 rounded-full hover:bg-red-50 transition-colors duration-300 text-sm"
          >
            Book a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
