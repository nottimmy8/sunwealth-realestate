"use client";
import React from "react";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Clock,
  User,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

// Mock data (should ideally come from a central place or CMS)
const posts = [
  {
    id: 1,
    tag: "Market Insights",
    date: "Feb 28, 2026",
    readTime: "5 min read",
    author: "Sunwealth Editorial",
    title: "Why Lagos Real Estate Remains West Africa's Most Lucrative Market",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80",
    content: `
      <p>The Lagos real estate market has long been the crown jewel of West African investment opportunities. Despite global economic shifts, the city's unique position as both the commercial capital of Nigeria and a major gateway to the continent ensures a steady demand for premium residential and commercial spaces.</p>
      
      <h2>The Rise of Luxury Enclaves</h2>
      <p>High-end districts like Ikoyi, Banana Island, and Victoria Island continue to see remarkable appreciation in property values. These areas are not just about bricks and mortar; they represent a lifestyle of exclusivity and sophistication that remains highly sought after by the city's elite and international investors.</p>
      
      <blockquote>"Luxury real estate in Lagos isn't just an asset; it's a statement of ambition and a hedge against volatility."</blockquote>
      
      <h2>Infrastructure as a Catalyst</h2>
      <p>Developments like the Eko Atlantic City and the expansion of the Lekki-Epe Expressway are reshaping the city's geography. These infrastructure projects are opening up new frontiers for development, creating opportunities in areas that were previously overlooked.</p>
      
      <h2>Digital Transformation</h2>
      <p>The integration of technology in property management and sales is streamlining the investor experience. From virtual tours to blockchain-verified land titles, the sector is modernizing at a rapid pace, boosting transparency and confidence.</p>
    `,
  },
  // Add more entries if needed
];

const BlogDetailPage = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id)) || posts[0];

  return (
    <div className="min-h-screen bg-white pb-32">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-zinc-950/40" />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-6 pb-20 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white"
            >
              <span className="inline-block bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                {post.tag}
              </span>
              <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
                {post.title}
              </h1>
              <div className="flex items-center gap-8 text-sm text-zinc-300 border-t border-white/20 pt-8">
                <span className="flex items-center gap-2">
                  <User size={16} /> {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={16} /> {post.readTime}
                </span>
                <span className="ml-auto">{post.date}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content wrapper */}
      <div className="max-w-7xl mx-auto px-6 pt-12">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Article */}
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex-1 max-w-3xl"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-zinc-400 hover:text-red-600 transition-colors mb-12 group"
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Back to Insights
            </Link>

            <div
              className="prose prose-zinc prose-lg max-w-none 
                prose-h2:font-serif prose-h2:text-3xl prose-h2:mb-6
                prose-p:text-zinc-600 prose-p:leading-relaxed prose-p:mb-8
                prose-blockquote:border-l-4 prose-blockquote:border-red-600 prose-blockquote:italic prose-blockquote:text-2xl prose-blockquote:font-serif prose-blockquote:text-zinc-800 prose-blockquote:my-12 prose-blockquote:pl-8
              "
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share */}
            <div className="mt-16 pt-8 border-t border-zinc-100 flex items-center gap-6">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                Share this:
              </span>
              <div className="flex gap-4">
                <button className="p-2 rounded-full border border-zinc-200 hover:bg-zinc-950 hover:text-white transition-all">
                  <Facebook size={18} />
                </button>
                <button className="p-2 rounded-full border border-zinc-200 hover:bg-zinc-950 hover:text-white transition-all">
                  <Twitter size={18} />
                </button>
                <button className="p-2 rounded-full border border-zinc-200 hover:bg-zinc-950 hover:text-white transition-all">
                  <Linkedin size={18} />
                </button>
              </div>
            </div>
          </motion.article>

          {/* Sidebar */}
          <aside className="lg:w-80">
            <div className="sticky top-32 space-y-12">
              <div className="bg-zinc-50 p-8 rounded-[2rem] border border-zinc-100">
                <h3 className="font-serif text-xl mb-4 text-zinc-900">
                  Expert Guidance
                </h3>
                <p className="text-sm text-zinc-500 mb-6 leading-relaxed">
                  Looking to invest in the Lagos market? Our advisors provide
                  tailored strategies for high-net-worth portfolio growth.
                </p>
                <button className="w-full bg-zinc-950 text-white text-xs font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-red-600 transition-colors">
                  Contact Advisor
                </button>
              </div>

              <div className="p-8 border border-zinc-100 rounded-[2rem]">
                <h3 className="font-serif text-xl mb-6 text-zinc-900">
                  Trending Now
                </h3>
                <div className="space-y-6">
                  <div className="group cursor-pointer">
                    <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest mb-1 block">
                      Luxury Living
                    </span>
                    <h4 className="text-sm font-bold text-zinc-900 leading-snug group-hover:text-yellow-500 transition-colors">
                      The ₦2.8B Penthouse Tour: Inside Ikoyi's finest residence.
                    </h4>
                  </div>
                  <div className="group cursor-pointer">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1 block">
                      Lifestyle
                    </span>
                    <h4 className="text-sm font-bold text-zinc-900 leading-snug group-hover:text-yellow-500 transition-colors">
                      Banana Island vs Eko Atlantic: The battle of elite
                      enclaves.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
