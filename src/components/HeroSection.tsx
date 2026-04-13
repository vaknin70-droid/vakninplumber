import { Phone, MessageCircle, ChevronLeft } from "lucide-react";
const heroKobi = "/kobi.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const HeroSection = () => {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative min-h-[600px] md:h-[900px] overflow-hidden bg-[#f4f7fb] flex items-center justify-center"
    >
      {/* Plumber photo — desktop only */}
      <img
        src={heroKobi}
        alt="קובי ואקנין"
        className="absolute top-[-45px] left-0 w-1/2 h-[calc(100%+45px)] object-cover object-[center_top] pointer-events-none z-0 hidden md:block"
      />

      {/* Mobile background image */}
      <div className="absolute inset-0 md:hidden z-0">
        <img
          src={heroKobi}
          alt=""
          className="w-full h-full object-cover object-top opacity-10 pointer-events-none"
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_110%_200%_at_100%_0%,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.62)_34%,rgba(194,200,211,0.48)_43%,rgba(133,145,167,0.35)_51%,rgba(71,89,122,0.22)_60%,rgba(10,34,78,0.08)_68%,rgba(10,34,78,0.15)_100%)] z-[1]" />
      <div className="absolute top-0 right-0 bottom-0 w-full md:w-[67.7%] bg-[linear-gradient(to_right,rgba(244,247,251,0)_0%,rgba(244,247,251,0.85)_40%,#f4f7fb_65%)] z-[2]" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-[17.5%] flex justify-center md:justify-start">
        <div className="w-full md:w-[39%] md:min-w-[560px] md:max-w-[749px] flex flex-col gap-6 md:gap-8 py-16 md:py-24 items-center md:items-start text-center md:text-right">

          {/* Heading — staggered reveal */}
          <h1 className="flex flex-col items-center md:items-start w-full">
            <span className="reveal reveal-up stagger-1 font-heading font-black text-[52px] md:text-[83px] leading-none text-[#0f2757] tracking-[-1.7px] whitespace-nowrap">
              אינסטלציה
            </span>
            <span className="reveal reveal-up stagger-2 font-heading font-black text-[52px] md:text-[83px] leading-none text-[#1162d4] tracking-[-1.7px] whitespace-nowrap">
              שנגמרת
            </span>
            <span className="reveal reveal-up stagger-3 font-heading font-black text-[44px] md:text-[72px] leading-none text-[#ee4b2b] tracking-[-1.7px] whitespace-nowrap pt-2">
              בפעם הראשונה
            </span>
          </h1>

          <p className="reveal reveal-fade stagger-4 text-[17px] md:text-[20px] leading-[28px] text-[#334155] text-center md:text-right max-w-[672px]">
            מגיעים מהר, עובדים נקי — ומסיימים את העבודה בפעם הראשונה. ואקנין אינסטלציה:
            <br />
            מקצועיות, שקיפות ושקט נפשי מהרגע הראשון.
          </p>

          <div className="reveal reveal-up stagger-5 flex flex-col sm:flex-row gap-3 items-center justify-center md:justify-start w-full">
            <a
              href="https://wa.me/972528126653"
              target="_blank"
              rel="noopener noreferrer"
              className="touch-card flex items-center gap-3 h-14 px-7 bg-white/90 backdrop-blur-[2px] border border-[#1162d4]/15 rounded-2xl shadow-[0_18px_40px_0_rgba(13,33,74,0.1)] text-[17px] text-[#0f2757] no-underline whitespace-nowrap w-full sm:w-auto justify-center"
            >
              <span>שלחו וואטסאפ</span>
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="tel:052-8126653"
              className="touch-card flex items-center gap-3 h-14 px-7 bg-[#ee4b2b] rounded-2xl shadow-[0_22px_45px_0_rgba(255,91,43,0.28)] text-[17px] font-bold text-white no-underline whitespace-nowrap w-full sm:w-auto justify-center"
            >
              <span>התקשרו עכשיו</span>
              <Phone className="w-4 h-4" />
            </a>
          </div>

          <div className="reveal reveal-fade stagger-6 flex flex-col gap-3 max-w-[576px]">
            <p className="text-[15px] md:text-[16px] leading-[26px] text-[#334155] text-center md:text-right">
              ייעוץ ראשוני ברור, עבודה נקייה בשטח ושימוש בחומרים ואביזרים של מותגים מובילים כדי לתת פתרון שמחזיקה לאורך זמן.
            </p>
            <button className="group inline-flex gap-2 items-center bg-transparent border-none p-0 cursor-pointer w-fit mx-auto md:mx-0">
              <span className="text-[14px] font-bold text-[#1162d4]">לראות שירותים שלנו</span>
              <ChevronLeft className="w-4 h-4 text-[#1162d4] transition-transform duration-300 group-hover:-translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
