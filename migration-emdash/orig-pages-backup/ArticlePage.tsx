import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import LeadCaptureBlock from "@/components/LeadCaptureBlock";
import { categories, articles } from "@/data/articles";

const ArticlePage = () => {
  const { categorySlug, articleSlug } = useParams<{ categorySlug: string; articleSlug: string }>();
  const article = articles.find((a) => a.slug === articleSlug && a.categorySlug === categorySlug);
  const category = categories.find((c) => c.slug === categorySlug);

  if (!article || !category) return <Navigate to="/knowledge" replace />;

  const related = articles.filter((a) => article.relatedSlugs.includes(a.slug));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.h1,
    description: article.metaDescription,
    author: { "@type": "Organization", name: "ואקנין אינסטלציה" },
    publisher: { "@type": "Organization", name: "ואקנין אינסטלציה" },
    mainEntityOfPage: `https://vaknin-plumbing.co.il/knowledge/${categorySlug}/${articleSlug}`,
  };

  return (
    <>
      <Helmet>
        <title>{article.title}</title>
        <meta name="description" content={article.metaDescription} />
        <link rel="canonical" href={`https://vaknin-plumbing.co.il/knowledge/${categorySlug}/${articleSlug}`} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.metaDescription} />
        <meta property="og:url" content={`https://vaknin-plumbing.co.il/knowledge/${categorySlug}/${articleSlug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="he_IL" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>
      <Navbar />
      <main className="container py-12">
        <BreadcrumbNav
          items={[
            { label: "ראשי", href: "/" },
            { label: "מרכז הידע", href: "/knowledge" },
            { label: category.name, href: `/knowledge/${categorySlug}` },
            { label: article.h1 },
          ]}
        />

        <article className="max-w-3xl mx-auto">

          <h1 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
            {article.h1}
          </h1>
          <p className="text-muted-foreground text-sm md:text-lg leading-relaxed mb-8 md:mb-10">{article.intro}</p>

          {/* Steps */}
          <div className="space-y-4 md:space-y-8 mb-10 md:mb-12">
            {article.steps.map((step, i) => (
              <section key={i} className="bg-card border border-border rounded-xl p-4 md:p-6">
                <h2 className="font-heading text-base md:text-xl font-bold text-foreground mb-2 md:mb-3 flex items-start gap-2 md:gap-3">
                  <span className="bg-primary text-primary-foreground w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="leading-snug">{step.title}</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base pr-9 md:pr-11">{step.content}</p>
              </section>
            ))}
          </div>

          {/* FAQ */}
          {article.faqs.length > 0 && (
            <section className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">שאלות נפוצות</h2>
              <div className="space-y-4">
                {article.faqs.map((faq, i) => (
                  <div key={i} className="bg-secondary rounded-xl p-6">
                    <h3 className="font-heading font-semibold text-foreground mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <LeadCaptureBlock />

          {/* Related articles */}
          {related.length > 0 && (
            <section className="mt-12">
              <h2 className="font-heading text-xl font-bold text-foreground mb-4">מאמרים קשורים</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/knowledge/${r.categorySlug}/${r.slug}`}
                    className="bg-card border border-border rounded-lg p-4 hover:border-primary/30 hover:shadow-md transition-all group"
                  >
                    <span className="text-xs text-primary font-medium">{r.category}</span>
                    <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors mt-1 line-clamp-2">
                      {r.h1}
                    </h3>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default ArticlePage;
