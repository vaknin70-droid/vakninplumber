import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import LeadCaptureBlock from "@/components/LeadCaptureBlock";
import { getPostBySlug, blogPosts } from "@/data/blog";
import { Clock, Tag, ArrowLeft, CheckCircle2, ChevronLeft } from "lucide-react";

const categoryColors: Record<string, string> = {
  "נזילות מים": "bg-blue-100 text-blue-700",
  "תחזוקה מונעת": "bg-green-100 text-green-700",
  "דוד שמש": "bg-orange-100 text-orange-700",
  "חירום": "bg-red-100 text-red-700",
  "ניקוז": "bg-cyan-100 text-cyan-700",
};
const getCategoryStyle = (cat: string) =>
  categoryColors[cat] || "bg-slate-100 text-slate-700";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug || "");
  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  const faqSchema = post.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }
    : null;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Organization", name: "ואקנין אינסטלציה" },
    publisher: { "@type": "Organization", name: "ואקנין אינסטלציה" },
    datePublished: post.date,
    mainEntityOfPage: `https://vaknin-plumbing.co.il/blog/${post.slug}`,
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-foreground overflow-x-hidden" dir="rtl">
      <Helmet>
        <title>{post.title} | ואקנין אינסטלציה</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://vaknin-plumbing.co.il/blog/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="he_IL" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        {faqSchema && (
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        )}
      </Helmet>

      <Navbar />

      {/* ── Post Hero ── */}
      <div className="relative bg-primary-dark pt-24 pb-14 md:pt-32 md:pb-18 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-56 h-56 md:w-[400px] md:h-[400px] bg-primary/20 rounded-full blur-[70px] md:blur-[80px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 md:w-[500px] md:h-[500px] bg-accent/10 rounded-full blur-[70px] md:blur-[100px] translate-y-1/3 -translate-x-1/3" />
        </div>

        <div className="container px-4 sm:px-6 relative z-10">
          <BreadcrumbNav
            items={[
              { label: "ראשי", href: "/" },
              { label: "בלוג", href: "/blog" },
              { label: post.title },
            ]}
            className="mb-5 md:mb-8 [filter:brightness(0)_invert(1)] opacity-70"
          />

          <div className="max-w-3xl">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-5 flex-wrap">
              <span className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-bold ${getCategoryStyle(post.category)}`}>
                <Tag className="w-3 h-3 inline mr-1" />
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-white/60 text-xs md:text-sm">
                <Clock className="w-3 h-3 md:w-3.5 md:h-3.5" />
                {post.readTime} דקות קריאה
              </span>
              <span className="text-white/40 text-xs md:text-sm">{post.date}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 md:mb-6">
              {post.title}
            </h1>
            <p className="text-sm md:text-lg text-white/75 leading-relaxed max-w-2xl font-light">
              {post.excerpt}
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60" className="w-full h-auto text-slate-50 fill-current">
            <path d="M0,48L60,44C120,40,240,32,360,32C480,32,600,40,720,42C840,44,960,40,1080,36C1200,32,1320,28,1380,26L1440,24L1440,60L0,60Z" />
          </svg>
        </div>
      </div>

      <main className="container px-4 sm:px-6 py-10 md:py-16">
        <div className="max-w-3xl mx-auto">

          {/* ── Article Content ── */}
          <article className="mb-10 md:mb-12">
            <div className="space-y-4 md:space-y-6">
              {post.content.map((section, i) => (
                <section
                  key={i}
                  className="bg-white rounded-xl md:rounded-2xl border border-slate-100 p-5 md:p-6 lg:p-8 shadow-sm"
                >
                  <h2 className="font-heading text-lg md:text-xl font-bold text-primary-dark mb-3 md:mb-4 flex items-start gap-2 md:gap-3">
                    <span className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs md:text-sm font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <span className="leading-snug">{section.title}</span>
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-[1.05rem] pr-9 md:pr-11">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>

            {/* ── Tips Box ── */}
            {post.tips && post.tips.length > 0 && (
              <div className="mt-6 md:mt-8 bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/15 rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8">
                <h3 className="font-heading text-base md:text-lg font-bold text-primary-dark mb-4 md:mb-5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
                  טיפים חשובים
                </h3>
                <ul className="space-y-2.5 md:space-y-3">
                  {post.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2.5 md:gap-3 text-slate-700">
                      <span className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent block" />
                      </span>
                      <span className="leading-relaxed text-sm md:text-base">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* ── FAQs ── */}
            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-6 md:mt-8">
                <h2 className="font-heading text-xl md:text-2xl font-bold text-primary-dark mb-4 md:mb-6">
                  שאלות נפוצות
                </h2>
                <div className="space-y-3 md:space-y-4">
                  {post.faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl border border-slate-100 p-4 md:p-6 shadow-sm"
                    >
                      <h3 className="font-heading font-bold text-foreground mb-2 flex items-start gap-2 text-sm md:text-base">
                        <span className="text-accent font-black text-base md:text-lg leading-none mt-0.5 flex-shrink-0">?</span>
                        {faq.question}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-sm md:text-base pr-5 md:pr-6">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* ── CTA ── */}
          <div className="mb-10 md:mb-12">
            <LeadCaptureBlock />
          </div>

          {/* ── Related Posts ── */}
          {related.length > 0 && (
            <section>
              <h2 className="font-heading text-lg md:text-xl font-bold text-primary-dark mb-4 md:mb-5">
                מאמרים קשורים
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/blog/${r.slug}`}
                    className="group bg-white border border-slate-100 rounded-xl p-4 md:p-5 hover:border-primary/30 hover:shadow-md transition-all"
                  >
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold mb-2 ${getCategoryStyle(r.category)}`}>
                      {r.category}
                    </span>
                    <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2 text-sm md:text-base">
                      {r.title}
                    </h3>
                    <div className="flex items-center text-primary text-xs font-bold group-hover:text-accent transition-colors">
                      קראו עוד
                      <ChevronLeft className="w-3 h-3 mr-1" />
                    </div>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-6 md:mt-8">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold transition-colors text-sm md:text-base"
                >
                  <ArrowLeft className="w-4 h-4" />
                  לכל המאמרים בבלוג
                </Link>
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default BlogPostPage;
