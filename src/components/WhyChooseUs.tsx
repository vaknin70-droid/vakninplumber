import checkIcon from "@/assets/check.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const benefits = [
  { title: "אחריות מלאה", description: "עבודה איכותית עם חומרים מהמותגים המובילים." },
  { title: "מחיר הוגן", description: "הצעת מחיר שקופה והסבר ברור לפני שמתחילים." },
  { title: "ציוד מתקדם", description: "טכנולוגיות וכלים מקצועיים לאבחון ולביצוע מדויק." },
  { title: "שירות מסודר", description: "מענה מהיר, תיאום ברור ועמידה בהתחייבויות." },
  { title: "ניסיון מוכח", description: "שנים של עבודת שטח, פתרונות מורכבים ולקוחות חוזרים." },
];

const WhyChooseUs = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="why-us" className="bg-white py-16 md:py-24 px-6 md:px-16 lg:px-[320px] flex flex-col gap-12 md:gap-[72px] items-center">
      <div className="text-center flex flex-col gap-4 items-center max-w-[700px]">
        <h2 className="reveal reveal-up font-heading font-bold text-2xl md:text-[36px] leading-tight tracking-[-0.72px] text-[#0f2757]">
          למה לקוחות מרגישים בטוחים לבחור בנו
        </h2>
        <p className="reveal reveal-fade stagger-2 text-[16px] md:text-[18px] leading-[28px] text-[#676f7e]">
          כי אינסטלציה טובה היא לא רק לפתור תקלה, אלא לתת שירות מדויק, נקי ואמין מהשיחה הראשונה.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-12 lg:gap-16 w-full max-w-[1248px]">
        {benefits.map((b, idx) => (
          <div key={b.title} className={`reveal reveal-scale stagger-${idx + 1} touch-card flex flex-col gap-4 items-center text-center group`}>
            <div className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] flex items-center justify-center relative transition-transform duration-300 group-hover:scale-105">
              <img
                src={checkIcon}
                alt=""
                className="w-full h-full object-contain drop-shadow-md"
              />
            </div>
            <div className="flex flex-col gap-1 md:gap-2">
              <h3 className="font-heading font-black text-base md:text-[18px] leading-[24px] tracking-[-0.32px] text-[#0f2757]">
                {b.title}
              </h3>
              <p className="text-[13px] md:text-[14px] leading-[20px] text-[#676f7e] max-w-[200px]">
                {b.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;




