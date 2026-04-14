import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, MessageCircle, CheckCircle2, Cpu, Award, Clock, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import LeadCaptureBlock from "@/components/LeadCaptureBlock";
import { getServiceBySlug, servicePages } from "@/data/services";

const ServicePage = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = getServiceBySlug(serviceSlug || "");

  if (!service) return <Navigate to="/" replace />;

  const relatedServices = servicePages.filter((s) =>
    service.relatedServiceSlugs.includes(s.slug)
  );

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.metaDescription,
    provider: {
      "@type": "Plumber",
      name: "ואקנין אינסטלציה",
      telephone: "+972528126653",
      url: "https://vaknin-plumbing.co.il",
    },
    areaServed: "מרכז ישראל",
    url: `https://vaknin-plumbing.co.il/services/${service.slug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <Helmet>
        <title>{service.title}</title>
        <meta name="description" content={service.metaDescription} />
        <meta name="keywords" content={service.keywords.join(", ")} />
        <link rel="canonical" href={`https://vaknin-plumbing.co.il/services/${service.slug}`} />
        <meta property="og:title" content={service.title} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:url" content={`https://vaknin-plumbing.co.il/services/${service.slug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="he_IL" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-primary/5 py-12 md:py-16 lg:py-20">
          <div className="container px-4 sm:px-6">
            <BreadcrumbNav
              items={[
                { label: "ראשי", href: "/" },
                { label: "שירותים", href: "/#services" },
                { label: service.name },
              ]}
            />
            <div className="max-w-3xl">
              <span className="text-4xl md:text-5xl mb-3 md:mb-4 block">{service.icon}</span>
              <h1 className="font-heading text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
                {service.h1}
              </h1>
              <p className="text-muted-foreground text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
                {service.intro}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" asChild>
                  <a href="tel:+972528126653">
                    <Phone className="w-5 h-5" />
                    התקשרו עכשיו
                  </a>
                </Button>
                <Button variant="hero-outline" size="xl" className="border-accent text-accent hover:bg-accent/10" asChild>
                  <a href="https://wa.me/972528126653" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    וואטסאפ
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-10 md:py-16 container px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {service.benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-3 bg-card border border-border rounded-xl p-5">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Trust bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10 md:mb-16">
            {[
              { icon: Clock, label: "הגעה מהירה", value: "30-60 דק'" },
              { icon: Shield, label: "אחריות מלאה", value: "עד שנה" },
              { icon: Award, label: "ניסיון", value: "15+ שנה" },
              { icon: Star, label: "שביעות רצון", value: "98%" },
            ].map((item) => (
              <div key={item.label} className="text-center bg-secondary rounded-xl p-5">
                <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-heading font-bold text-foreground text-lg">{item.value}</div>
                <div className="text-muted-foreground text-sm">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Process */}
          <section className="mb-16">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              איך אנחנו עובדים
            </h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              {service.process.map((step, i) => (
                <div key={i} className="flex gap-5 bg-card border border-border rounded-xl p-6">
                  <span className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-lg mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technologies */}
          <section className="mb-16">
            <div className="text-center mb-8">

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                הציוד והטכנולוגיות שלנו
              </h2>
              <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
                אנחנו משתמשים אך ורק בציוד מקצועי מהחברות המובילות בעולם
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
              {service.technologies.map((tech, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading font-bold text-foreground text-lg">{tech.name}</h3>
                    <span className="bg-accent/5 text-accent text-xs font-bold px-3 py-1 rounded-md flex-shrink-0">
                      {tech.brand}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{tech.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              שאלות נפוצות
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {service.faqs.map((faq, i) => (
                <div key={i} className="bg-secondary rounded-xl p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <LeadCaptureBlock />

          {/* Related services */}
          {relatedServices.length > 0 && (
            <section className="mt-12">
              <h2 className="font-heading text-xl font-bold text-foreground mb-4">שירותים נוספים</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedServices.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all group text-center"
                  >
                    <span className="text-3xl mb-2 block">{s.icon}</span>
                    <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                      {s.name}
                    </h3>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default ServicePage;
