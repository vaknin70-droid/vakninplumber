import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import { Helmet } from "react-helmet-async";

const AllServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>שירותי אינסטלציה מקצועיים - כל השירותים | ואקנין אינסטלציה</title>
        <meta
          name="description"
          content="צפו במגוון המלא של שירותי האינסטלציה שלנו: תיקון נזילות, פתיחת סתימות, תיקון דודי שמש, החלפת צנרת ועוד. שירות מקצועי עם טכנולוגיות מתקדמות."
        />
        <link rel="canonical" href="https://vaknin-plumbing.co.il/services" />
      </Helmet>

      <Navbar />

      <main className="py-14 md:py-24">
        <div className="container px-4 sm:px-6">
          <div className="mx-auto mb-10 md:mb-16 max-w-4xl text-center">
            <h1 className="mb-4 md:mb-6 font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">מגוון שירותי האינסטלציה שלנו</h1>
            <p className="text-base md:text-xl text-muted-foreground">
              אנו מספקים פתרונות מקצועיים לכל בעיית אינסטלציה, החל מתיקונים קלים ועד לפרויקטים
              מורכבים עם ציוד מתקדם וסטנדרט עבודה גבוה.
            </p>
          </div>

          <ServicesSection showAll />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AllServices;
