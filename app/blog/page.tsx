"use client";
import { ArrowLeft, Clock, User, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

const posts = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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

const BlogPage = () => {
  const featured = posts.find((p) => p.featured) || posts[0];
  const others = posts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-white">
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
              Property Intelligence
            </p>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">
              Insights & <span className="italic font-light">Elegance.</span>
            </h1>
            <p className="text-zinc-400 max-w-2xl text-lg leading-relaxed">
              In-depth analysis, market trends, and luxury lifestyle spotlights
              from Nigeria&apos;s most sophisticated real estate experts.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-black hover:text-red-500 transition-colors mb-12 group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Home
        </Link>
        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative grid grid-cols-1 lg:grid-cols-2 rounded-[2rem] overflow-hidden border border-zinc-100 shadow-2xl mb-24 cursor-pointer bg-zinc-950"
        >
          <div className="relative h-80 lg:h-auto overflow-hidden">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-zinc-950/20" />
          </div>
          <div className="p-8 lg:p-16 flex flex-col justify-center gap-6">
            <span className="text-xs text-red-500 font-bold uppercase tracking-widest">
              {featured.tag}
            </span>
            <h2 className="text-3xl lg:text-4xl font-serif text-white leading-snug group-hover:text-yellow-500 transition-colors">
              {featured.title}
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed line-clamp-3">
              {featured.excerpt}
            </p>
            <div className="flex items-center gap-6 text-xs text-zinc-500 border-t border-zinc-800 pt-8">
              <span className="flex items-center gap-2">
                <User size={14} /> {featured.author}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={14} /> {featured.readTime}
              </span>
            </div>
            <Link
              href={`/blog/${featured.id}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-red-500 transition-colors mt-4 self-start"
            >
              Read Article <ArrowUpRight size={18} />
            </Link>
          </div>
        </motion.div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {others.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col cursor-pointer"
            >
              <div className="relative h-64 rounded-3xl overflow-hidden mb-6 border border-zinc-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/95 backdrop-blur-sm text-zinc-900 text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
                    {post.tag}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-serif text-zinc-900 leading-snug mb-3 group-hover:text-red-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="mt-auto flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-zinc-400 pt-6 border-t border-zinc-100">
                <span>{post.date}</span>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-zinc-900 hover:text-red-600 transition-colors flex items-center gap-1"
                >
                  Read More <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
