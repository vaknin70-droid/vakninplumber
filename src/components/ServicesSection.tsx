import { Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft } from "lucide-react";
import repairIcon from "@/assets/icons/repair.png";
import cameraIcon from "@/assets/icons/camera.png";
import drainIcon from "@/assets/icons/drain.png";
import servicesBg from "@/assets/pipeSection2.png";
import { servicePages } from "@/data/services";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const topServiceSlugs = ["pipe-repair", "sewer-camera-inspection", "drain-cleaning"];

interface ServicesSectionProps {
  showAll?: boolean;
}

const ServicesSection = ({ showAll = false }: ServicesSectionProps) => {
  const displayServices = showAll 
    ? servicePages 
    : servicePages.filter(s => topServiceSlugs.includes(s.slug));

  const ref = useScrollReveal();

  // Map slugs to specific icons from the assets
  const serviceIcons: Record<string, string> = {
    "pipe-repair": repairIcon,
    "sewer-camera-inspection": cameraIcon,
    "drain-cleaning": drainIcon
  };

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id="services" 
      className={`${showAll ? 'py-8' : 'py-16 md:py-24'} flex flex-col items-center gap-6 bg-cover bg-center`}
      style={{ backgroundImage: `url(${servicesBg})` }}
    >
      {!showAll && (
        <div className="w-full max-w-[1280px] px-6 py-6 md:py-[35px] flex flex-col items-center">
          <h2 className="reveal reveal-up font-heading font-black text-3xl md:text-[60px] leading-none tracking-[-1.2px] text-[#0f2757] text-center">
            השירותים שלנו
          </h2>
          <div className="h-8 md:h-[60px] w-full" />
        </div>
      )}

      <div className={`grid grid-cols-1 ${showAll ? 'sm:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-3'} gap-6 md:gap-[50px] w-full max-w-[1314px] px-6 md:px-0 md:max-w-[calc(100%-48px)] items-stretch`}>
        {displayServices.map((service, idx) => (
          <div
            key={service.slug}
            className={`touch-card reveal reveal-scale stagger-${Math.min(idx + 1, 6)} group relative overflow-hidden backdrop-blur-[12px] bg-white/60 border border-white/40 rounded-[24px] md:rounded-[32px] p-5 md:p-7 flex flex-col gap-3 md:gap-4 items-center shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-3 hover:bg-white/85 hover:shadow-[0_45px_90px_-20px_rgba(15,39,87,0.35)]`}
          >
            <div className="absolute inset-0 rounded-[24px] md:rounded-[32px] bg-gradient-to-br from-white/20 to-transparent opacity-50 pointer-events-none group-hover:opacity-70 transition-opacity duration-500" />

            <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center shrink-0 relative overflow-hidden transform transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
              {serviceIcons[service.slug] ? (
                <img
                  src={serviceIcons[service.slug]}
                  alt={service.name}
                  className="w-full h-full object-contain mix-blend-multiply contrast-[1.1] brightness-[1.05]"
                />
              ) : (
                <div className="text-5xl md:text-6xl filter drop-shadow-sm">{service.icon}</div>
              )}
            </div>

            <h3 className="font-heading font-black text-xl md:text-[24px] leading-tight tracking-[-0.5px] text-[#0f2757] text-center">
              {service.name}
            </h3>

            <p className="text-[14px] md:text-[15px] leading-[22px] text-[#334155] text-center line-clamp-3">
              {service.intro.split('.')[0] + '.'}
            </p>

            <Link
              to={`/services/${service.slug}`}
              className="mt-auto w-full bg-gradient-to-l from-[#ee4b2b] to-[#ff7a47] rounded-xl shadow-[0_10px_30px_0_rgba(255,91,43,0.35)] py-3 px-4 flex gap-2 items-center justify-center no-underline hover:scale-[1.02] active:scale-95 transition-all"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-white transition-transform group-hover:-translate-x-1" />
              <span className="text-[15px] md:text-[17px] font-extrabold text-white whitespace-nowrap">למידע נוסף</span>
            </Link>
          </div>
        ))}
      </div>

      {!showAll && (
        <Link
          to="/services"
          className="mt-4 md:mt-6 flex items-center gap-3 px-8 md:px-10 py-3 md:py-[14px] pb-4 md:pb-[22px] bg-white/80 backdrop-blur-[4px] border-2 border-[#1162d4]/20 rounded-full shadow-[0_8px_30px_0_rgba(3,105,161,0.14)] text-lg md:text-xl font-bold text-[#1162d4] no-underline whitespace-nowrap transition-all hover:bg-white"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          <span>לכל שירותי האינסטלציה שלנו</span>
        </Link>
      )}
    </section>
  );
};

export default ServicesSection;


