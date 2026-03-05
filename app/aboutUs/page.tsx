"use client";
import { motion } from "motion/react";
import AboutUs from "@/components/aboutUs";
import Service from "@/components/service";
import { Compass, Target, Shield, Zap, Heart, Trophy } from "lucide-react";

const CoreValues = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Transparency and honesty in every transaction and interaction.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Unwavering commitment to the highest quality in all we do.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "Leveraging technology and creative strategies for better results.",
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Your needs and dreams are at the heart of our service.",
  },
  {
    icon: Trophy,
    title: "Leadership",
    description: "Setting the standard for luxury real estate in Nigeria.",
  },
  {
    icon: Compass,
    title: "Visionary",
    description: "Anticipating market trends to guide your investments.",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/about-hero.png')" }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-red-500 font-bold tracking-[0.3em] uppercase text-sm mb-4"
          >
            Our Legacy of Excellence
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-white mb-6"
          >
            Redefining Luxury <br />{" "}
            <span className="italic font-light text-zinc-300">
              Real Estate.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-300 max-w-2xl mx-auto text-lg md:text-xl font-light"
          >
            At Sunwealth, we don't just sell properties; we curate lifestyles
            and secure legacies for the most discerning clients.
          </motion.p>
        </div>
      </section>

      {/* Main About Component */}
      <AboutUs />

      {/* Mission & Vision Section */}
      <section className="py-24 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white">
              <Target size={24} />
            </div>
            <h2 className="text-4xl font-serif text-zinc-900">Our Mission</h2>
            <p className="text-zinc-600 leading-relaxed text-lg">
              To provide unparalleled real estate services through innovation,
              integrity, and a deep understanding of the luxury market, ensuring
              our clients achieve their investment goals and lifestyle dreams.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white">
              <Compass size={24} />
            </div>
            <h2 className="text-4xl font-serif text-zinc-900">Our Vision</h2>
            <p className="text-zinc-600 leading-relaxed text-lg">
              To be the most trusted and influential luxury real estate firm in
              Africa, recognized for our commitment to excellence and our
              portfolio of the most prestigious properties.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-zinc-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto">
              The principles that guide every decision we make and every client
              we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CoreValues.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow"
              >
                <div className="text-red-600 mb-4">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-zinc-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Service />

      {/* Final CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-zinc-900 mb-6">
            Experience the Sunwealth Difference
          </h2>
          <p className="text-zinc-600 mb-10 text-lg">
            Whether you are looking to buy, sell, or manage a luxury property,
            our team is ready to provide you with world-class service.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="w-full sm:w-auto px-10 py-4 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20"
            >
              Contact Us Today
            </a>
            <a
              href="/properties"
              className="w-full sm:w-auto px-10 py-4 border border-zinc-200 text-zinc-900 rounded-full font-semibold hover:bg-zinc-950 hover:text-white hover:border-zinc-950 transition-all"
            >
              Browse Properties
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
