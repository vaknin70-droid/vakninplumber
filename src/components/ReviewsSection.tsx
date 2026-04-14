import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "שרה מ.",
    text: "מקצועיים, נקיים ובמחיר סביר. החליפו לנו את דוד השמש הישן והשירות היה מצוין מתחילתו ועד סופו.",
    rating: 5,
    avatar: "ש"
  },
  {
    name: "דוד כ.",
    text: "התקשרתי בחצות עם צינור פרוץ. הם הגיעו תוך 30 דקות ותיקנו הכל במהירות. ממליץ בחום!",
    rating: 5,
    avatar: "ד"
  },
  {
    name: "אבי ר.",
    text: "האינסטלטור הכי טוב שהזמנו. פתר סתימה עקשנית ששני אינסטלטורים אחרים לא הצליחו להתמודד איתה. מחיר הוגן.",
    rating: 5,
    avatar: "א"
  },
  {
    name: "רחל ל.",
    text: "התקין ברז חדש לחדר האמבטיה בצורה מושלמת. עבודה נקייה ותקשורת מעולה לאורך כל התהליך.",
    rating: 5,
    avatar: "ר"
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="bg-[#f1f5f9] py-20 px-8 md:px-[320px]">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col gap-14 items-center">
        <div className="text-center flex flex-col gap-4 items-center max-w-[700px]">
          <h2 className="font-heading font-bold text-3xl md:text-[36px] leading-[40px] tracking-[-0.72px] text-[#0f2757]">
            מה הלקוחות אומרים
          </h2>
          <p className="text-lg leading-[28px] text-[#676f7e]">
            המלצות אמיתיות מלקוחות מרוצים.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[900px]">
          {reviews.map((review, i) => (
            <div key={i} className="relative bg-white border border-[#e2e7e9] rounded-xl p-[29px] flex flex-col gap-3 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
              <Quote className="absolute left-4 top-4 w-8 h-8 text-[#1162d4]/10" />
              
              <div className="flex gap-1 justify-start">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-[#ffc107] fill-[#ffc107]"
                  />
                ))}
              </div>

              <p className="text-sm leading-[23px] text-[#1f242e]/80 text-right">
                "{review.text}"
              </p>

              <div className="flex gap-3 items-center justify-start pt-1">
                <div className="w-10 h-10 rounded-full bg-[#1162d4] flex items-center justify-center font-bold text-sm text-white shrink-0">
                  {review.avatar}
                </div>
                <span className="font-heading font-bold text-sm text-[#0f2757]">
                  {review.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;