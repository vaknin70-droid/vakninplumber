import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { CheckCircle2, History, Award, ShieldCheck, Clock, Hammer, Droplets, Waves, Flame, AlertTriangle, Search } from "lucide-react";
import plumberWorking from "@/assets/plumber-working.jpg";
import parkingJob from "@/assets/parking-job.jpg";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-foreground">
      <Helmet>
        <title>אודות ואקנין אינסטלציה — מעל 20 שנות ניסיון ומקצועיות</title>
        <meta name="description" content="ואקנין אינסטלציה - מומחים לפתרון תקלות מים וביוב מורכבות מעל 20 שנה. אמינות, שקיפות ועבודה נקייה ללא פשרות. שירות בפריסה ארצית." />
        <link rel="canonical" href="https://vaknin-plumbing.co.il/about" />
        <meta property="og:title" content="אודות ואקנין אינסטלציה — מעל 20 שנות ניסיון ומקצועיות" />
        <meta property="og:description" content="מומחים לפתרון תקלות מים וביוב מורכבות מעל 20 שנה. אמינות, שקיפות ועבודה נקייה ללא פשרות." />
        <meta property="og:url" content="https://vaknin-plumbing.co.il/about" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="he_IL" />
      </Helmet>
      <Navbar />
      
      <main>
        {/* Premium Hero Section */}
        <div className="relative bg-primary-dark pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-36 overflow-hidden text-white">
          <div className="absolute inset-0 z-0 opacity-15">
             <img src={parkingJob} className="w-full h-full object-cover grayscale" alt="Background" />
             <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 to-primary-dark" />
          </div>

          {/* Abstract Background Shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3"></div>
          </div>
          
          <div className="container relative z-10">
            <BreadcrumbNav 
              items={[{ label: "ראשי", href: "/" }, { label: "אודות" }]} 
              className="[filter:brightness(0)_invert(1)] opacity-70 mb-8"
            />
            <div className="max-w-3xl">
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-black mb-5 md:mb-8 leading-tight">
                ואקנין אינסטלציה:
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-accent mt-2">מעל 20 שנה של מצוינות</span>
              </h1>
              <p className="text-base md:text-xl lg:text-2xl text-white/80 leading-relaxed font-light max-w-2xl">
                כבר למעלה משני עשורים שאנחנו פותרים את תקלות המים המורכבות ביותר, בבתים פרטיים ובמוסדות ברחבי הארץ. השקט הנפשי שלכם מתחיל כאן.
              </p>
            </div>
          </div>

          {/* Bottom stylized wave */}
          <div className="absolute bottom-0 left-0 right-0 z-10 translate-y-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto text-white fill-current">
              <path d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,64C672,75,768,85,864,80C960,75,1056,53,1152,48C1248,43,1344,53,1392,58.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
            </svg>
          </div>
        </div>

        {/* Core Philosophy Section */}
        <section className="py-12 md:py-24 container px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary">
                <History className="w-8 h-8" />
              </div>
              <h2 className="text-xl md:text-3xl lg:text-4xl font-black text-primary-dark">המקצועיות היא השקט הנפשי שלכם</h2>
              <div className="space-y-4 md:space-y-6 text-base md:text-lg text-slate-600 leading-relaxed">
                <p>
                  אנחנו מאמינים שאינסטלציה היא הרבה מעבר לתיקון נזילה – היא הביטחון שלכם בבית. כעסק שהוקם על בסיס מקצועיות ללא פשרות, צברנו לאורך שני עשורים מוניטין של אמינות, שקיפות ועבודה נקייה.
                </p>
                <p className="font-semibold text-primary-dark bg-primary/5 p-4 rounded-xl border-r-4 border-primary">
                  אצלנו אין "בערך" ואין פתרונות זמניים. אנחנו מביאים איתנו מיומנות שנרכשה באלפי פרויקטים בשטח, כדי שאתם תוכלו לישון בשקט.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl -rotate-2"></div>
              <img 
                src={plumberWorking} 
                alt="עבודת אינסטלציה מקצועית" 
                className="relative z-10 rounded-2xl shadow-2xl border border-slate-100"
              />
              <div className="absolute -bottom-10 -right-10 bg-white/90 backdrop-blur-lg shadow-2xl p-8 rounded-3xl hidden md:block z-20 border border-white max-w-[220px] text-center transform hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl pointer-events-none" />
                <p className="relative text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark mb-2 drop-shadow-sm">20+</p>
                <p className="relative text-sm font-bold text-slate-600 uppercase tracking-widest leading-snug">שנות ניסיון<br/>בשטח</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid (What we do) */}
        <section className="py-24 bg-slate-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-primary-dark mb-4">מה אנחנו עושים בשטח?</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                אנחנו מספקים מענה מקצועי מקצה לקצה לכל צורך במערכות המים והביוב עם הציוד המתקדם ביותר.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Search className="w-6 h-6" />,
                  title: "צילום צנרת וסמארט-כבל",
                  desc: "אבחון ושיקום פנים הצנרת באמצעות סמארט-כבל וטכנולוגיות וידאו מתקדמות המונעות חפירות מיותרות."
                },
                {
                  icon: <Waves className="w-6 h-6" />,
                  title: "פתיחת סתימות וניקוי קווי ביוב",
                  desc: "טיפול יסודי בסתימות חוזרות ומורכבות בקווי ביוב ראשיים וביתיים."
                },
                {
                  icon: <Hammer className="w-6 h-6" />,
                  title: "שדרוג תשתיות מים",
                  desc: "החלפת צנרת והגברת לחץ מים באמצעות ציוד מתקדם מהמותגים המובילים."
                },
                {
                  icon: <Flame className="w-6 h-6" />,
                  title: "מערכות סולאריות",
                  desc: "טיפול בדודי שמש וחשמל ליעילות אנרגטית מקסימלית ומים חמים כל השנה."
                },
                {
                  icon: <AlertTriangle className="w-6 h-6" />,
                  title: "טכנולוגיות מתקדמות וסטנדרט גבוה",
                  desc: "עבודה עם ציוד מתקדם, מותגים מובילים ותהליך מסודר שמוביל לתוצאה איכותית יותר."
                }
              ].map((item, idx) => (
                <div key={idx} className="group relative bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-2xl transition-all duration-300 overflow-hidden translate-y-0 hover:-translate-y-2">
                  <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 text-primary flex items-center justify-center mb-6 group-hover:from-primary group-hover:to-primary-dark group-hover:text-white transition-all duration-300 shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Manifesto (Amana) */}
        <section className="py-24 container overflow-hidden">
          <div className="bg-primary-dark rounded-[2.5rem] p-12 lg:p-20 relative text-white overflow-hidden">
             {/* Decorative patterns */}
             <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
             </div>

             <div className="relative z-10">
               <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-5xl font-black mb-6">האמנה שלנו: אמינות היא המפתח</h2>
                 <p className="text-white/70 text-lg max-w-2xl mx-auto">
                   אנחנו בואקנין אינסטלציה יודעים שהזמנת בעל מקצוע הביתה דורשת אמון. לכן, אנחנו מתחייבים ל:
                 </p>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-4xl mx-auto">
                 {[
                   { icon: <Award />, title: "מחירים הוגנים", desc: "הצעות מחיר שקופות ללא הפתעות בסיום העבודה." },
                   { icon: <Clock />, title: "עמידה בזמנים", desc: "הזמן שלכם יקר לנו, ואנחנו מקפידים על הגעה מהירה ומדויקת." },
                   { icon: <ShieldCheck />, title: "איכות חומרים", desc: "שימוש אך ורק באביזרים מקוריים בעלי תו תקן ישראלי." },
                   { icon: <CheckCircle2 />, title: "אחריות מלאה", desc: "אנחנו עומדים מאחורי כל עבודה שאנחנו מבצעים." }
                 ].map((item, idx) => (
                   <div key={idx} className="flex gap-5 items-start">
                     <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-accent shadow-inner border border-white/5">
                       {item.icon}
                     </div>
                     <div>
                       <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                       <p className="text-white/60 leading-relaxed">{item.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>

               <div className="mt-20 text-center border-t border-white/10 pt-12">
                 <p className="text-xl font-medium italic">
                    "בין אם מדובר בתיקון קטן או בפרויקט תשתית רחב – ואקנין אינסטלציה כאן כדי לתת לכם את הפתרון המקצועי ביותר."
                 </p>
               </div>
             </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default AboutPage;
