import { Phone } from "lucide-react";
const Link = ({ to, href, children, ...props }: any) => <a href={to || href} {...props}>{children}</a>;
import { cityPages } from "@/data/cities";
import { servicePages } from "@/data/services";
import logo from "@/assets/logo-kv.png";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-primary-dark py-12 pb-24 text-primary-foreground/80 md:pb-12">
      <div
        className="absolute top-0 right-0 left-0 h-12 bg-background"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)" }}
      />

      <div className="container relative z-10 pt-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <img src={logo.src || logo} alt="ואקנין אינסטלציה" className="h-10 w-auto invert brightness-0" />
              <h3 className="font-heading text-xl font-bold text-primary-foreground">ואקנין אינסטלציה</h3>
            </div>
            <p className="text-sm leading-relaxed">
              שירותי אינסטלציה מקצועיים עם עבודה נקייה, ציוד מתקדם וחומרים מהמותגים המובילים בשוק.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-heading font-semibold text-primary-foreground">שירותים</h4>
            <nav className="space-y-2 text-base">
              {servicePages.slice(0, 6).map((s: any) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="block transition-colors hover:text-accent">
                  {s.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="mb-3 font-heading font-semibold text-primary-foreground">אזורי שירות</h4>
            <nav className="space-y-2 text-base">
              {cityPages.slice(0, 6).map((c: any) => (
                <Link key={c.slug} href={`/city/${c.slug}`} className="block transition-colors hover:text-accent">
                  {`אינסטלטור ב${c.name}`}
                </Link>
              ))}
              <Link to="/cities" className="mt-2 block font-semibold text-accent hover:underline">
                לכל אזורי השירות...
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="mb-3 font-heading font-semibold text-primary-foreground">קישורים</h4>
            <nav className="space-y-2 text-base">
              <Link to="/services" className="block transition-colors hover:text-accent">כל השירותים</Link>
              <a href="/#reviews" className="block transition-colors hover:text-accent">המלצות</a>
              <Link to="/contact" className="block transition-colors hover:text-accent">צור קשר</Link>
              <Link to="/knowledge" className="block transition-colors hover:text-accent">מרכז הידע</Link>
              <Link to="/tools-hub" className="block font-semibold text-accent transition-colors hover:text-accent">
                מרכז הכלים
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="mb-3 font-heading font-semibold text-primary-foreground">דברו איתנו</h4>
            <a
              href="tel:+972528126653"
              className="flex items-center gap-2 text-lg font-bold text-accent transition-colors hover:text-accent/80"
            >
              <Phone className="h-5 w-5" />
              052-8126653
            </a>
            <p className="mt-2 text-sm">ייעוץ, הצעת מחיר ותיאום עבודה מקצועית באזור תל אביב והמרכז.</p>
          </div>
        </div>

        <div className="mt-8 space-y-2 border-t border-primary-foreground/10 pt-6 text-center text-sm">
          <div className="flex items-center justify-center gap-4">
            <Link to="/privacy" className="transition-colors hover:text-accent">מדיניות פרטיות</Link>
            <span>|</span>
            <Link to="/accessibility" className="transition-colors hover:text-accent">הצהרת נגישות</Link>
          </div>
          <p>© {new Date().getFullYear()} ואקנין אינסטלציה. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
