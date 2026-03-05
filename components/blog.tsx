"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Clock, User } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    tag: "Market Insights",
    date: "Feb 28, 2026",
    readTime: "5 min read",
    author: "Sunwealth Editorial",
    title: "Why Lagos Real Estate Remains West Africa's Most Lucrative Market",
    excerpt:
      "From Ikoyi's waterfront penthouses to Victoria Island's commercial towers, Lagos continues to attract tier-1 global investors. Here's why the momentum won't slow.",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80",
    featured: true,
  },
  {
    tag: "Luxury Living",
    date: "Feb 20, 2026",
    readTime: "4 min read",
    author: "Adaeze Nwosu",
    title: "Inside Ikoyi's Most Expensive Penthouse of 2026",
    excerpt:
      "We get an exclusive tour of a ₦2.8 billion duplex penthouse redefining what luxury means in Lagos.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    featured: false,
  },
  {
    tag: "Investment Tips",
    date: "Feb 12, 2026",
    readTime: "6 min read",
    author: "Chukwuemeka Eze",
    title: "5 Due Diligence Steps Every Smart Property Investor Must Take",
    excerpt:
      "Avoiding title fraud and plot disputes starts with the right checks. Our experts break down the essential process.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    featured: false,
  },
  {
    tag: "Lifestyle",
    date: "Feb 5, 2026",
    readTime: "3 min read",
    author: "Sunwealth Editorial",
    title: "Lekki Phase 1 vs Banana Island: Which Is Right For You?",
    excerpt:
      "A frank comparison of two of Lagos' most coveted addresses — lifestyle, ROI, and everything in between.",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80",
    featured: false,
  },
];

const Blog = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const blobY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <section
      ref={containerRef}
      id="blog"
      className="relative py-32 bg-white overflow-hidden"
    >
      {/* Subtle decorative blobs */}
      <motion.div
        style={{ y: blobY }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-50 rounded-full blur-3xl opacity-60 pointer-events-none -translate-y-1/2 translate-x-1/3"
      />
      <motion.div
        style={{ y: blobY }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-50 rounded-full blur-3xl opacity-70 pointer-events-none translate-y-1/3 -translate-x-1/4"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-red-600 mb-4">
              News & Insights
            </span>
            <h2 className="text-5xl md:text-6xl font-serif text-zinc-900 leading-tight">
              Property Intelligence,
              <br />
              <span className="italic font-light">Delivered Fresh.</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="self-start md:self-end flex items-center gap-2 text-sm font-semibold text-zinc-900 border border-zinc-200 px-5 py-2.5 rounded-full hover:bg-zinc-950 hover:text-white hover:border-zinc-950 transition-all duration-300 shrink-0"
          >
            View all posts <ArrowUpRight size={16} />
          </Link>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="group relative grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden border border-zinc-100 shadow-xl mb-10 cursor-pointer"
        >
          {/* Image side */}
          <div className="relative h-72 lg:h-auto overflow-hidden">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/60 via-transparent to-transparent" />
            <span className="absolute top-6 left-6 bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
              Featured
            </span>
          </div>

          {/* Content side */}
          <div className="bg-zinc-950 p-10 lg:p-14 flex flex-col justify-center gap-5">
            <span className="text-xs text-yellow-400 font-semibold uppercase tracking-widest">
              {featured.tag}
            </span>
            <h3 className="text-2xl md:text-3xl font-serif text-white leading-snug group-hover:text-yellow-300 transition-colors duration-300">
              {featured.title}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {featured.excerpt}
            </p>
            <div className="flex items-center gap-5 text-xs text-zinc-500 mt-2 border-t border-zinc-800 pt-5">
              <span className="flex items-center gap-1.5">
                <User size={13} /> {featured.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} /> {featured.readTime}
              </span>
              <span className="ml-auto text-zinc-600">{featured.date}</span>
            </div>
            <a
              href="#"
              className="flex items-center gap-2 text-sm font-semibold text-yellow-400 hover:text-yellow-300 transition-colors mt-2"
            >
              Read Full Article <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>

        {/* Post Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rest.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: "easeOut" }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="group bg-white rounded-2xl overflow-hidden border border-zinc-100 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col"
            >
              {/* Thumbnail */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-zinc-800 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {post.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-lg font-serif text-zinc-900 leading-snug group-hover:text-red-700 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-zinc-400 mt-auto pt-4 border-t border-zinc-100">
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {post.readTime}
                  </span>
                  <span className="ml-auto">{post.date}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
