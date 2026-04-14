import { Phone, MessageCircle, ChevronLeft } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-24 px-8 md:px-[320px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#0b2a61_0%,#132f6f_42%,#1d4fa3_100%)]" />
      
      {/* Glow effects */}
      <div className="absolute top-[-80px] right-[8%] left-[80%] h-56 rounded-full bg-white/5 blur-[32px]" />
      <div className="absolute bottom-[-80px] right-[6%] left-[79%] h-72 rounded-full bg-[#ee4b2b]/20 blur-[32px]" />

      <div className="relative z-10 bg-[#f8fafc] backdrop-blur-[2px] border border-[#e2e7e9] rounded-[35px] shadow-[0_30px_80px_0_rgba(4,16,42,0.35)] p-12 md:p-[73px_49px_54px] max-w-[1024px] w-full flex flex-col gap-5 items-center">
        <h2 className="font-heading font-black text-3xl md:text-[48px] leading-[1.05] tracking-[-0.96px] text-[#0f2757] text-center">
          רוצים פתרון מדויק, <span className="text-[#ee4b2b]">נקי ומסודר באמת?</span>
        </h2>
        
        <p className="text-lg leading-[28px] text-[#0f2757] text-center max-w-[768px]">
          דברו איתנו לייעוץ ראשוני, אבחון מסודר והצעת מחיר ברורה לעבודת אינסטלציה שמבוססת על ניסיון, טכנולוגיות מתקדמות ושימוש במותגים המובילים בשוק.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-[768px] pt-3">
          <div className="border border-[#0f2757]/12 rounded-2xl p-[17px] flex flex-col gap-1 items-start bg-[#0f2757]/[0.04]">
            <span className="text-sm font-bold text-[#ee4b2b]">אבחון</span>
            <span className="text-sm text-[#0f2757] text-right">מבינים את הבעיה לפני שמתחילים לעבוד</span>
          </div>
          <div className="border border-[#0f2757]/12 rounded-2xl p-[17px] flex flex-col gap-1 items-start bg-[#0f2757]/[0.04]">
            <span className="text-sm font-bold text-[#ee4b2b]">שקיפות</span>
            <span className="text-sm text-[#0f2757] text-right">הסבר ברור על הפתרון, החומרים והשלבים</span>
          </div>
          <div className="border border-[#0f2757]/12 rounded-2xl p-[17px] flex flex-col gap-1 items-start bg-[#0f2757]/[0.04]">
            <span className="text-sm font-bold text-[#ee4b2b]">ביצוע</span>
            <span className="text-sm text-[#0f2757] text-right">עבודה נקייה עם גימור שמרגיש מקצועי</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 items-center justify-center pt-3">
          <a
            href="https://wa.me/972528126653"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 h-14 px-[30px] border-2 border-[#0f2757] rounded-2xl text-[18px] font-semibold text-[#0f2757] no-underline whitespace-nowrap transition-colors hover:bg-[#0f2757] hover:text-white"
          >
            <span>שלחו וואטסאפ</span>
            <MessageCircle className="w-4 h-4" />
          </a>
          <a
            href="tel:052-8126653"
            className="flex items-center gap-2 h-14 px-[28px] bg-[#ee4b2b] rounded-2xl shadow-[0_20px_50px_0_rgba(255,91,43,0.32)] text-[18px] font-bold text-white no-underline whitespace-nowrap"
          >
            <span>התקשרו עכשיו</span>
            <Phone className="w-4 h-4" />
          </a>
        </div>

        <div className="flex gap-2 items-center">
          <ChevronLeft className="w-4 h-4 text-[#0f2757]" />
          <span className="text-sm font-bold text-[#0f2757]">שירות אישי, עבודה מדויקת ופתרונות שמחזיקים לאורך זמן</span>
        </div>
      </div>
    </section>
  );
};

export default CTASection;


