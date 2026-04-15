const Link = ({ to, href, children, ...props }: any) => <a href={to || href} {...props}>{children}</a>;
import { categories } from "@/data/articles";

const KnowledgeCenterSection = () => {
  return (
    <section id="knowledge" className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            מרכז הידע לאינסטלציה
          </h2>
          <p className="text-muted-foreground text-lg">
            מדריכים מקצועיים, טיפים וכלים שיעזרו לכם לזהות ולפתור בעיות אינסטלציה.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/knowledge/${cat.slug}`}
              className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all group"
            >
              <span className="text-4xl mb-3 block">{cat.icon}</span>
              <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                {cat.name}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                {cat.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/knowledge"
            className="inline-block font-semibold text-primary hover:text-accent transition-colors"
          >
            → לכל המדריכים
          </Link>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeCenterSection;
