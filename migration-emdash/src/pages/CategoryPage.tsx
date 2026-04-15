import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import LeadCaptureBlock from "@/components/LeadCaptureBlock";
import { categories, articles } from "@/data/articles";

const CategoryPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const category = categories.find((c) => c.slug === categorySlug);

  if (!category) return <Navigate to="/knowledge" replace />;

  const catArticles = articles.filter((a) => a.categorySlug === categorySlug);

  return (
    <>
      <Helmet>
        <title>{category.name} — מדריכים מקצועיים | ואקנין אינסטלציה</title>
        <meta name="description" content={category.description} />
        <link rel="canonical" href={`https://vaknin-plumbing.co.il/knowledge/${categorySlug}`} />
        <meta property="og:title" content={`${category.name} — מדריכים מקצועיים | ואקנין אינסטלציה`} />
        <meta property="og:description" content={category.description} />
        <meta property="og:url" content={`https://vaknin-plumbing.co.il/knowledge/${categorySlug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="he_IL" />
      </Helmet>
      <Navbar />
      <main className="container py-12">
        <BreadcrumbNav
          items={[
            { label: "ראשי", href: "/" },
            { label: "מרכז הידע", href: "/knowledge" },
            { label: category.name },
          ]}
        />

        <div className="max-w-3xl mb-10">
          <span className="text-4xl mb-3 block">{category.icon}</span>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            {category.name}
          </h1>
          <p className="text-muted-foreground text-lg">{category.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {catArticles.map((article) => (
            <Link
              key={article.slug}
              to={`/knowledge/${categorySlug}/${article.slug}`}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <h2 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                {article.h1}
              </h2>
              <p className="text-muted-foreground text-sm line-clamp-3">{article.intro}</p>
              <span className="inline-block mt-3 text-primary text-sm font-medium">קראו עוד →</span>
            </Link>
          ))}
        </div>

        {/* Link to other categories */}
        <section className="mb-12">
          <h2 className="font-heading text-xl font-bold text-foreground mb-4">קטגוריות נוספות</h2>
          <div className="flex flex-wrap gap-3">
            {categories
              .filter((c) => c.slug !== categorySlug)
              .map((c) => (
                <Link
                  key={c.slug}
                  to={`/knowledge/${c.slug}`}
                  className="bg-secondary text-foreground px-4 py-2 rounded-lg text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {c.icon} {c.name}
                </Link>
              ))}
          </div>
        </section>

        <LeadCaptureBlock />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default CategoryPage;
