const Link = ({ to, href, children, ...props }: any) => <a href={to || href} {...props}>{children}</a>;
import { getRecentPosts } from "@/data/blog";
import { Clock, ArrowLeft, BookOpen, Calendar } from "lucide-react";

const getCategoryStyle = (cat: string) => {
  const colors: Record<string, { bg: string, text: string }> = {
    "נזילות מים": { bg: "#dbeafe", text: "#1d4ed8" },
    "תחזוקה מונעת": { bg: "#dcfce7", text: "#15803d" },
    "דוד שמש": { bg: "#ffedd5", text: "#9a3412" },
    "חירום": { bg: "#fee2e2", text: "#b91c1c" },
  };
  const style = colors[cat] || { bg: "#f1f5f9", text: "#475569" };
  return { backgroundColor: style.bg, color: style.text };
};

const BlogSection = () => {
  const posts = getRecentPosts(3);

  return (
    <section className="bg-[#f8fafc] py-20 px-8 md:px-[320px]">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col gap-12">
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-2 items-start">
            <div className="inline-flex items-center gap-2 border border-[#1162d4]/15 rounded-full px-[13px] py-[7px]">
              <span className="text-sm text-[#1162d4]">הבלוג שלנו</span>
              <BookOpen className="w-4 h-4 text-[#1162d4]" />
            </div>
            <h2 className="font-heading font-black text-3xl md:text-[36px] leading-[40px] tracking-[-0.72px] text-[#0f2757]">
              טיפים ועצות אינסטלציה
            </h2>
            <p className="text-[18px] text-[#64748b] text-right">
              מאמרים שימושיים לשמירה על מערכת האינסטלציה בבית.
            </p>
          </div>
          <Link to="/blog" className="flex gap-2 items-center no-underline group">
            <div className="w-8 h-8 rounded-full bg-[#1162d4]/10 flex items-center justify-center transition-colors group-hover:bg-[#1162d4]/20">
              <ArrowLeft className="w-4 h-4 text-[#1162d4]" />
            </div>
            <span className="text-sm font-semibold text-[#1162d4]">לכל המאמרים</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-white border border-[#f1f5f9] rounded-2xl h-[352px] overflow-hidden relative shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] cursor-pointer no-underline transition-shadow hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
            >
              <div className="absolute inset-x-0 top-0 h-[150px] overflow-hidden flex items-center justify-center">
                <div className="absolute inset-x-0 top-0 h-[6px] bg-gradient-to-l from-[#1162d4] to-[#ee4b2b] opacity-70 z-10" />
                <div className="absolute inset-0 top-[6px] bg-gradient-to-br from-[#0f2757]/05 to-[#1162d4]/10" />
                <div
                  className="relative z-20 px-3 py-1.5 rounded-full text-xs font-bold"
                  style={getCategoryStyle(post.category)}
                >
                  {post.category}
                </div>
              </div>

              <div className="absolute inset-x-0 top-[150px] p-5 flex flex-col gap-1.5">
                <div className="flex gap-2 items-center justify-start mb-1 text-[#94a3b8] text-xs">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                  <span>·</span>
                  <Clock className="w-4 h-4 ml-1" />
                  <span>{post.readTime} דק'</span>
                </div>

                <h3 className="font-heading font-bold text-[15px] leading-6 tracking-[-0.32px] text-[#0f2757] text-right">
                  {post.title}
                </h3>

                <p className="text-[13px] leading-5 text-[#64748b] text-right h-[60px] overflow-hidden">
                  {post.excerpt}
                </p>

                <div className="flex gap-1.5 items-center justify-start mt-1 text-[#1162d4] font-bold text-sm">
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>קראו עוד</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

