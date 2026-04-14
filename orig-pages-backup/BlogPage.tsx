import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import LeadCaptureBlock from "@/components/LeadCaptureBlock";
import { blogPosts, getAllCategories } from "@/data/blog";
import { Clock, ArrowLeft, BookOpen, Tag } from "lucide-react";

const categoryColors: Record<string, string> = {
  "נזילות מים": "bg-blue-100 text-blue-700",
  "תחזוקה מונעת": "bg-green-100 text-green-700",
  "דוד שמש": "bg-orange-100 text-orange-700",
  "חירום": "bg-red-100 text-red-700",
  "ניקוז": "bg-cyan-100 text-cyan-700",
};
const getCategoryStyle = (cat: string) =>
  categoryColors[cat] || "bg-slate-100 text-slate-700";

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("הכל");
  const categories = ["הכל", ...getAllCategories()];
  const filtered =
    activeCategory === "הכל"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);
  const featured = blogPosts.filter((p) => p.featured);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-foreground overflow-x-hidden" dir="rtl">
      <Helmet>
        <title>בלוג אינסטלציה — טיפים ומדריכים מקצועיים | ואקנין אינסטלציה</title>
        <meta name="description" content="מאמרים וטיפים מקצועיים בנושאי אינסטלציה, תחזוקת בית, נזילות ודוד שמש. הבלוג של ואקנין אינסטלציה." />
        <link rel="canonical" href="https://vaknin-plumbing.co.il/blog" />
      </Helmet>

      <Navbar />

      {/* ── Hero ── */}
      <div className="relative bg-primary-dark pt-28 pb-20 md:pt-36 md:pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 md:w-[500px] md:h-[500px] bg-primary/20 rounded-full blur-[80px] md:blur-[100px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-72 h-72 md:w-[600px] md:h-[600px] bg-accent/10 rounded-full blur-[80px] md:blur-[120px] translate-y-1/3 -translate-x-1/3" />
        </div>

        <div className="container px-4 sm:px-6 relative z-10">
          <BreadcrumbNav
            items={[{ label: "ראשי", href: "/" }, { label: "בלוג" }]}
            className="mb-6 md:mb-8 [filter:brightness(0)_invert(1)] opacity-80"
          />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs md:text-sm font-medium mb-5 md:mb-6">
              <BookOpen className="w-3.5 h-3.5 md:w-4 md:h-4" />
              <span>טיפים ומדריכים מקצועיים</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 md:mb-6">
              הבלוג של
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">
                ואקנין אינסטלציה
              </span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl font-light">
              מאמרים מקצועיים, טיפים חוסכי כסף ומדריכים פרקטיים — כתובים בשפה פשוטה, ישר משולחן האינסטלטורים שלנו.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" className="w-full h-auto text-slate-50 fill-current">
            <path d="M0,64L48,58.7C96,53,192,43,288,42.7C384,43,480,53,576,56C672,59,768,53,864,48C960,43,1056,37,1152,34.7L1248,32L1440,32L1440,80L0,80Z" />
          </svg>
        </div>
      </div>

      <main className="container px-4 sm:px-6 py-10 md:py-16">

        {/* ── Featured Posts (desktop 2-col, mobile stack) ── */}
        {activeCategory === "הכל" && featured.length > 0 && (
          <section className="mb-12 md:mb-16">
            <h2 className="text-xl md:text-2xl font-black text-primary-dark mb-5 md:mb-8">מאמרים מומלצים</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {featured.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col"
                >
                  <div className="h-1.5 w-full bg-gradient-to-r from-primary to-accent" />
                  <div className="h-28 md:h-36 bg-gradient-to-br from-primary-dark/5 to-primary/10 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-primary/30 blur-xl" />
                      <div className="absolute bottom-4 left-4 w-14 h-14 rounded-full bg-accent/30 blur-xl" />
                    </div>
                    <span className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-bold z-10 ${getCategoryStyle(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                  <div className="p-4 md:p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime} דקות קריאה
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-base md:text-xl text-foreground group-hover:text-primary transition-colors mb-2 md:mb-3 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed flex-grow mb-4 line-clamp-2 md:line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-primary text-sm font-bold group-hover:text-accent transition-colors mt-auto">
                      קראו את המאמר
                      <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── Category Filter ── */}
        <div className="mb-8 md:mb-10">
          <div className="flex items-center gap-2 flex-wrap">
            <Tag className="w-4 h-4 text-slate-400 flex-shrink-0" />
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 border ${
                    activeCategory === cat
                      ? "bg-primary text-white border-primary shadow-md"
                      : "bg-white text-slate-600 border-slate-200 hover:border-primary/30 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── All Posts Grid ── */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-xl md:text-2xl font-black text-primary-dark mb-6 md:mb-8">
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
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
                >
                  <div className="h-1.5 w-full bg-gradient-to-r from-primary to-accent opacity-60 group-hover:opacity-100 transition-opacity" />
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
                    <h3 className="font-heading font-bold text-base md:text-lg text-foreground group-hover:text-primary transition-colors mb-2 md:mb-3 line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-sm line-clamp-2 md:line-clamp-3 mb-4 md:mb-5 flex-grow leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-3 md:pt-4 border-t border-slate-100">
                      <span className="text-xs text-slate-400">{post.date}</span>
                      <div className="flex items-center text-primary text-xs md:text-sm font-bold group-hover:text-accent transition-colors">
                        קראו עוד
                        <ArrowLeft className="w-3.5 h-3.5 mr-1 group-hover:-translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        <LeadCaptureBlock />
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default BlogPage;
