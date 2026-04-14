import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, MessageCircle, CheckCircle2, MapPin, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import LeadCaptureBlock from "@/components/LeadCaptureBlock";
import { getCityBySlug, cityPages } from "@/data/cities";

const services = [
  "פתיחת סתימות",
  "תיקון נזילות",
  "איתור נזילות סמויות",
  "תיקון והחלפת צנרת",
  "תיקון דוד שמש",
  "התקנת אינסטלציה",
  "שירות מהיר לתקלות דחופות",
  "תיקון אסלות",
];

const CityPage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const city = getCityBySlug(citySlug || "");

  if (!city) return <Navigate to="/" replace />;

  const otherCities = cityPages.filter((c) => c.slug !== citySlug).slice(0, 6);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: `ואקנין אינסטלציה - ${city.name}`,
    description: city.metaDescription,
    telephone: "+972528126653",
    url: `https://vaknin-plumbing.co.il/city/${city.slug}`,
    areaServed: { "@type": "City", name: city.name },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "07:00",
      closes: "22:00",
    },
  };

  return (
    <>
      <Helmet>
        <title>{city.title}</title>
        <meta name="description" content={city.metaDescription} />
        <link rel="canonical" href={`https://vaknin-plumbing.co.il/city/${city.slug}`} />
        <meta property="og:title" content={city.title} />
        <meta property="og:description" content={city.metaDescription} />
        <meta property="og:url" content={`https://vaknin-plumbing.co.il/city/${city.slug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="he_IL" />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>
      <Navbar />
      <main>
        <section className="bg-primary/5 py-12 md:py-16">
          <div className="container px-4 sm:px-6">
            <BreadcrumbNav
              items={[
                { label: "ראשי", href: "/" },
                { label: "אזורי שירות", href: "/#areas" },
                { label: city.name },
              ]}
            />
            <h1 className="mb-3 md:mb-4 font-heading text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">{city.h1}</h1>
            <p className="mb-6 md:mb-8 max-w-2xl text-sm md:text-lg text-muted-foreground">{city.intro}</p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="hero" size="xl" asChild>
                <a href="tel:+972528126653">
                  <Phone className="h-5 w-5" />
                  התקשרו עכשיו
                </a>
              </Button>
              <Button variant="hero-outline" size="xl" className="border-accent text-accent hover:bg-accent/10" asChild>
                <a href="https://wa.me/972528126653" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  ווטסאפ
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="container px-4 sm:px-6 py-10 md:py-16">
          <div className="mb-8 md:mb-12 rounded-2xl border border-primary/15 bg-primary/5 p-5 md:p-8 text-center">
            <h2 className="mb-3 font-heading text-2xl font-bold text-foreground md:text-3xl">{city.emergencyH2}</h2>
            <p className="mb-4 text-muted-foreground">
              הגעה מהירה לכל אזור ב{city.name}, אבחון מקצועי ופתרון מסודר עם ציוד מתקדם.
            </p>
            <Button variant="hero" size="xl" asChild>
              <a href="tel:+972528126653">
                <Phone className="h-5 w-5" />
                דברו איתנו
              </a>
            </Button>
          </div>

          <div className="mb-10 md:mb-16 grid grid-cols-1 gap-3 md:gap-6 md:grid-cols-3">
            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
              <Clock className="h-8 w-8 flex-shrink-0 text-primary" />
              <div>
                <h3 className="font-heading font-bold text-foreground">הגעה מהירה</h3>
                <p className="text-sm text-muted-foreground">מענה מהיר לכל מקום ב{city.name}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
              <Shield className="h-8 w-8 flex-shrink-0 text-primary" />
              <div>
                <h3 className="font-heading font-bold text-foreground">אחריות על העבודה</h3>
                <p className="text-sm text-muted-foreground">ביטוח מלא ואחריות עד שנה</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
              <MapPin className="h-8 w-8 flex-shrink-0 text-primary" />
              <div>
                <h3 className="font-heading font-bold text-foreground">מכירים את האזור</h3>
                <p className="text-sm text-muted-foreground">{city.areaDescription}</p>
              </div>
            </div>
          </div>

          <section className="mb-16">
            <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">שירותי אינסטלציה ב{city.name}</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {services.map((s) => (
                <div key={s} className="flex items-center gap-3 rounded-lg bg-secondary p-4">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="font-medium text-foreground">{s}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">שכונות שאנו משרתים ב{city.name}</h2>
            <div className="flex flex-wrap gap-3">
              {city.neighborhoods.map((n) => (
                <span key={n} className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  {n}
                </span>
              ))}
            </div>
          </section>

          <LeadCaptureBlock />

          <section className="mt-12">
            <h2 className="mb-4 font-heading text-xl font-bold text-foreground">אזורי שירות נוספים</h2>
            <div className="flex flex-wrap gap-3">
              {otherCities.map((c) => (
                <Link
                  key={c.slug}
                  to={`/city/${c.slug}`}
                  className="rounded-full bg-secondary px-4 py-2 text-sm text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  {`אינסטלטור ב${c.name}`}
                </Link>
              ))}
            </div>
          </section>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default CityPage;
