"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { label } from "framer-motion/client";

const Footer = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const decorY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <footer
      ref={containerRef}
      className=" relative bg-zinc-950 min-h-screen  overflow-hidden text-slate-300 py-32 border-t border-slate-800"
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
      <div className="max-w-7xl mx-auto px-6 relatice z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Brand & Intro */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl leading-none">
                  S
                </span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Sunwealth
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              Elevating the standard of real estate. We curate premium
              properties for discerning clients worldwide with unparalleled
              expertise and dedication.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="#"
                className="p-2 bg-slate-900 rounded-full hover:bg-red-700  hover:text-white transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-900 rounded-full hover:bg-red-700  hover:text-white transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-900 rounded-full hover:bg-red-700  hover:text-white transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-900 rounded-full hover:bg-red-700  hover:text-white transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6 lg:ml-8">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Home", href: "#home" },
                { label: "Properties", href: "#properties" },
                { label: "Services", href: "#services" },
                { label: "News & Blog", href: "#blog" },
                { label: "Contact Us", href: "#contact" },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-semibold text-lg">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-red-700  shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400">
                  123 Luxury Avenue, Suite 400
                  <br />
                  Beverly Hills, CA 90210
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-red-700  shrink-0" />
                <span className="text-sm text-slate-400">
                  +1 (800) 123-4567
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-red-700  shrink-0" />
                <span className="text-sm text-slate-400">
                  hello@sunwealth-realestate.com
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-semibold text-lg">Newsletter</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Subscribe to our newsletter to receive the latest updates,
              exclusive properties, and market insights.
            </p>
            <form className="flex flex-col gap-3 mt-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
              <button
                type="button"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg px-4 py-3 text-sm flex items-center justify-center gap-2 transition-all duration-300"
              >
                Subscribe <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Sunwealth Real Estate. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-slate-500 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-slate-500 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
