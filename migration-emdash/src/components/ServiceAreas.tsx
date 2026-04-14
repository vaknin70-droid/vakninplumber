import { MapPin } from "lucide-react";
const Link = ({ to, href, children, ...props }: any) => <a href={to || href} {...props}>{children}</a>;
import { cityPages } from "@/data/cities";

const ServiceAreas = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-primary-dark" />
      {/* Diagonal accent */}
      <div className="absolute top-0 right-[5%] w-1/5 h-full bg-primary/30 skew-x-[12deg]" />

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            אזורי שירות
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            אנו מספקים שירותי אינסטלציה מקצועיים באזור המרכז.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cityPages.map((city) => (
            <Link
              key={city.slug}
              href={`/city/${city.slug}`}
              className="flex items-center gap-3 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg p-4 transition-all hover:scale-[1.02] border border-primary-foreground/5"
            >
              <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="font-medium text-sm md:text-base text-primary-foreground">
                אינסטלטור ב{city.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
