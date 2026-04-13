import { useState } from "react";
import { Clock, ArrowLeft, Tag, BookOpen } from "lucide-react";

interface BlogPost {
  title: string;
  slug: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  featured?: boolean;
}

interface BlogListProps {
  posts: BlogPost[];
  categories: string[];
}

const categoryColors: Record<string, string> = {
  "נזילות מים": "bg-blue-100 text-blue-700",
  "תחזוקה מונעת": "bg-green-100 text-green-700",
  "דוד שמש": "bg-orange-100 text-orange-700",
  "חירום": "bg-red-100 text-red-700",
  "ניקוז": "bg-cyan-100 text-cyan-700",
};

const getCategoryStyle = (cat: string) =>
  categoryColors[cat] || "bg-slate-100 text-slate-700";

const BlogList = ({ posts, categories }: BlogListProps) => {
  const [activeCategory, setActiveCategory] = useState<string>("הכל");
  
  const filtered =
    activeCategory === "הכל"
      ? posts
      : posts.filter((p) => p.category === activeCategory);
      
  const featured = posts.filter((p) => p.featured);

  return (
    <div className="w-full">
      {/* Featured Posts */}
      {activeCategory === "הכל" && featured.length > 0 && (
        <section className="mb-12 md:mb-16">
          <h2 className="text-xl md:text-2xl font-black text-[#0f2757] mb-5 md:mb-8 text-right">מאמרים מומלצים</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {featured.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col no-underline text-right"
              >
                <div className="h-1.5 w-full bg-gradient-to-r from-[#1162d4] to-[#ee4b2b]" />
                <div className="h-28 md:h-36 bg-gradient-to-br from-[#0f2757]/5 to-[#1162d4]/10 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-[#1162d4]/30 blur-xl" />
                    <div className="absolute bottom-4 left-4 w-14 h-14 rounded-full bg-[#ee4b2b]/30 blur-xl" />
                  </div>
                  <span className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-bold z-10 ${getCategoryStyle(post.category)}`}>
                    {post.category}
                  </span>
                </div>
                <div className="p-4 md:p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3 justify-start">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime} דקות קריאה
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-base md:text-xl text-[#0f2757] group-hover:text-[#1162d4] transition-colors mb-2 md:mb-3 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-grow mb-4 line-clamp-2 md:line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-[#1162d4] text-sm font-bold group-hover:text-[#ee4b2b] transition-colors mt-auto justify-end">
                    <ArrowLeft className="w-4 h-4 ml-2 group-hover:-translate-x-1 transition-transform" />
                    קראו את המאמר
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Category Filter */}
      <div className="mb-8 md:mb-10 flex justify-start">
        <div className="flex items-center gap-2 flex-wrap">
          <Tag className="w-4 h-4 text-slate-400 flex-shrink-0" />
          <div className="flex flex-wrap gap-2">
            {["הכל", ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 border ${
                  activeCategory === cat
                    ? "bg-[#1162d4] text-white border-[#1162d4] shadow-md"
                    : "bg-white text-slate-600 border-slate-200 hover:border-[#1162d4]/30 hover:text-[#1162d4]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* All Posts Grid */}
      <section className="mb-16 md:mb-20">
        <h2 className="text-xl md:text-2xl font-black text-[#0f2757] mb-6 md:mb-8 text-right">
          {activeCategory === "הכל" ? "כל המאמרים" : `מאמרים בנושא: ${activeCategory}`}
        </h2>

        {filtered.length === 0 ? (
          <div className="text-center py-16 md:py-20 text-slate-400">
            <BookOpen className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 opacity-40" />
            <p className="text-base md:text-lg">אין מאמרים בקטגוריה זו עדיין.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filtered.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 no-underline text-right"
              >
                <div className="h-1.5 w-full bg-gradient-to-r from-[#1162d4] to-[#ee4b2b] opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="p-4 md:p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${getCategoryStyle(post.category)}`}>
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <Clock className="w-3 h-3" />
                      {post.readTime} דק'
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-base md:text-lg text-[#0f2757] group-hover:text-[#1162d4] transition-colors mb-2 md:mb-3 line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm line-clamp-2 md:line-clamp-3 mb-4 md:mb-5 flex-grow leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-3 md:pt-4 border-t border-slate-100">
                    <span className="text-xs text-slate-400">{post.date}</span>
                    <div className="flex items-center text-[#1162d4] text-sm font-bold group-hover:text-[#ee4b2b] transition-colors">
                      <ArrowLeft className="w-3.5 h-3.5 ml-1 group-hover:-translate-x-1 transition-transform" />
                      קראו עוד
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default BlogList;
