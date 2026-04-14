import { cityPages } from "@/data/cities";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin } from "lucide-react";

const AllCities = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>אזורי שירות אינסטלציה - כל הערים | ואקנין אינסטלציה</title>
        <meta
          name="description"
          content="צפו בכל אזורי השירות שלנו. אנו מספקים שירותי אינסטלציה מקצועיים בתל אביב, רמת גן, גבעתיים, פתח תקווה וערים רבות נוספות באזור המרכז."
        />
        <link rel="canonical" href="https://vaknin-plumbing.co.il/cities" />
      </Helmet>

      <Navbar />

      <main className="container px-4 sm:px-6 py-14 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 md:mb-16 text-center">
            <h1 className="mb-4 md:mb-6 font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">אזורי שירות</h1>
            <p className="text-base md:text-xl text-muted-foreground">
              אנו מספקים שירותי אינסטלציה מקצועיים ומהירים בפריסה רחבה במרכז הארץ.
              בחרו את עירכם לקבלת פרטים נוספים ושירות אישי.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {cityPages.map((city) => (
              <Link
                key={city.slug}
                to={`/city/${city.slug}`}
                className="group flex items-center gap-3 rounded-lg border bg-card p-4 transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
              >
                <MapPin className="h-5 w-5 text-primary group-hover:text-accent-foreground" />
                <span className="font-semibold">{city.name}</span>
              </Link>
            ))}
          </div>

          <div className="mt-10 md:mt-20 rounded-2xl bg-primary p-5 md:p-8 text-center text-primary-foreground">
            <h2 className="mb-4 text-2xl font-bold">לא מצאתם את העיר שלכם?</h2>
            <p className="mb-6 opacity-90">צרו איתנו קשר עכשיו ובדקו אם אנחנו מגיעים גם אליכם.</p>
            <a
              href="tel:+972528126653"
              className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 font-bold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              התקשרו עכשיו: 052-8126653
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AllCities;
