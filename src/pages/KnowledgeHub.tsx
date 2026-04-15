import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import LeadCaptureBlock from "@/components/LeadCaptureBlock";
import { categories, articles } from "@/data/articles";
import { 
  Droplets, Waves, Toilet, Flame, 
  Construction, Bath, CookingPot, AlertTriangle, 
  Search, BookOpen, ArrowRight, ChevronLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Map slugs to lucide icons
const iconMap: Record<string, React.ReactNode> = {
  "drain-problems": <Waves className="w-8 h-8" />,
  "water-leaks": <Droplets className="w-8 h-8" />,
  "toilet-problems": <Toilet className="w-8 h-8" />,
  "water-heater": <Flame className="w-8 h-8" />,
  "sewer-problems": <Construction className="w-8 h-8" />,
  "bathroom-plumbing": <Bath className="w-8 h-8" />,
  "kitchen-plumbing": <CookingPot className="w-8 h-8" />,
  "emergency-plumbing": <AlertTriangle className="w-8 h-8" />,
};

// Map slugs to gradient colors
const colorMap: Record<string, string> = {
  "drain-problems": "from-blue-500 to-cyan-400",
  "water-leaks": "from-cyan-500 to-teal-400",
  "toilet-problems": "from-sky-500 to-blue-400",
  "water-heater": "from-orange-500 to-red-400",
  "sewer-problems": "from-slate-600 to-slate-400",
  "bathroom-plumbing": "from-teal-500 to-emerald-400",
  "kitchen-plumbing": "from-amber-500 to-orange-400",
  "emergency-plumbing": "from-red-600 to-rose-500",
};

const KnowledgeHub = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-foreground">
      <Helmet>
        <title>מרכז הידע לאינסטלציה — מדריכים וטיפים | ואקנין אינסטלציה</title>
        <meta name="description" content="מרכז הידע המקיף לאינסטלציה ביתית של ואקנין אינסטלציה. מדריכים מקצועיים, טיפים לפתרון בעיות, וכלים אינטראקטיביים." />
        <link rel="canonical" href="https://vaknin-plumbing.co.il/knowledge" />
      </Helmet>
      <Navbar />
      
      {/* Premium Hero Section */}
      <div className="relative bg-primary-dark pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3"></div>
          <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="container relative z-10">
          <BreadcrumbNav 
            items={[{ label: "ראשי", href: "/" }, { label: "מרכז הידע" }]} 
            className="mb-8 [filter:brightness(0)_invert(1)] opacity-80 hover:opacity-100 transition-opacity"
          />
          
          <div className="max-w-3xl">
            
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-4 md:mb-6">
              מרכז הידע
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400 mt-2">
                לאינסטלציה חכמה
              </span>
            </h1>
            
            <p className="text-sm md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl font-light mb-6 md:mb-8">
              מדריכים מקיפים, טיפים מקצועיים ומידע חיוני שיעזור לכם להבין, לזהות ולפתור תקלות אינסטלציה בבית, צעד אחר צעד משולחן המומחים של ואקנין.
            </p>

            {/* Search Bar Representation (Decorative/Future) */}
            <div className="relative max-w-xl group">
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              </div>
              <input 
                type="text" 
                placeholder="חפש מדריך, למשל: נזילה באסלה..." 
                className="w-full h-14 pl-4 pr-12 rounded-xl border-none bg-white shadow-lg text-lg focus:ring-2 focus:ring-accent outline-none"
              />
              <div className="absolute inset-y-0 left-2 flex items-center">
                <Button size="sm" className="bg-accent hover:bg-accent/90 text-white rounded-lg px-6">
                  חפש
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom stylized wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto text-slate-50 fill-current">
            <path d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,64C672,75,768,85,864,80C960,75,1056,53,1152,48C1248,43,1344,53,1392,58.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      <main className="container px-4 sm:px-6 py-10 md:py-16">
        
        {/* Categories Grid */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-black text-primary-dark">נושאי ליבה</h2>
            <p className="text-muted-foreground hidden sm:block">בחרו את התחום הרלוונטי לכם</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => {
              const count = articles.filter((a) => a.categorySlug === cat.slug).length;
              const Icon = iconMap[cat.slug] || <BookOpen className="w-8 h-8" />;
              const gradient = colorMap[cat.slug] || "from-primary to-primary-dark";
              
              return (
                <Link
                  key={cat.slug}
                  to={`/knowledge/${cat.slug}`}
                  className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col items-center text-center translate-y-0 hover:-translate-y-1"
                >
                  <div className={`absolute top-0 right-0 w-full h-1 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                  
                  <div className={`w-16 h-16 rounded-2xl mb-5 flex items-center justify-center text-white bg-gradient-to-br ${gradient} shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300`}>
                    {Icon}
                  </div>
                  
                  <h3 className="font-heading font-extrabold text-xl text-foreground mb-3">
                    {cat.name}
                  </h3>
                  
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-grow">
                    {cat.description}
                  </p>
                  
                  <div className="flex items-center justify-center w-full mt-auto pt-4 border-t border-slate-100 text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                    <span>{count} מדריכים מעשיים</span>
                    <ChevronLeft className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Popular Articles List */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-black text-primary-dark">המדריכים הנצפים ביותר</h2>
            <Link to="/knowledge/emergency-plumbing" className="text-primary hover:text-accent font-semibold flex items-center gap-1 transition-colors">
              ראה הכל <ChevronLeft className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(0, 6).map((article) => {
              const catGradient = colorMap[article.categorySlug] || "from-primary to-primary-dark";
              
              return (
                <Link
                  key={article.slug}
                  to={`/knowledge/${article.categorySlug}/${article.slug}`}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
                >
                  <div className={`h-2 w-full bg-gradient-to-r ${catGradient}`}></div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="inline-block px-3 py-1 rounded-md bg-slate-100 text-xs font-bold text-slate-600 mb-4 w-fit">
                      {article.category}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2 leading-snug">
                      {article.h1}
                    </h3>
                    <p className="text-slate-500 text-sm line-clamp-2 mb-6 flex-grow">
                      {article.intro}
                    </p>
                    <div className="flex items-center text-primary text-sm font-bold group-hover:text-accent transition-colors mt-auto">
                      קרא את המדריך
                      <ArrowRight className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        <LeadCaptureBlock />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default KnowledgeHub;
