import huliotImg from "@/assets/huliot-equipment.jpg";

const BrandTrust = () => {
  return (
    <section className="overflow-hidden bg-primary-dark py-20">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-accent/20 blur-3xl" />
            <img
              src={huliotImg}
              alt="ציוד וחומרים מקצועיים"
              className="relative z-10 rounded-2xl border-2 border-white/10 shadow-2xl"
            />
          </div>

          <div className="space-y-6">
            <h2 className="font-heading text-4xl leading-tight font-black text-white">
              עובדים עם חומרים, אביזרים
              <br />
              <span className="text-accent">וטכנולוגיות מהשורה הראשונה</span>
            </h2>
            <p className="text-lg leading-relaxed text-white/70">
              בכל פרויקט, קטן כגדול, אנחנו עובדים עם פתרונות איכותיים של מותגים
              מובילים כמו חוליות, PLASSON, SP, Geberit ו-RIDGID. זה מאפשר לנו לעבוד
              בצורה מדויקת יותר, אמינה יותר ועם תוצאה שמחזיקה לאורך זמן.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <p className="text-2xl font-bold text-accent">Leading Brands</p>
                <p className="text-xs text-white/50">בחירה קפדנית של חומרים ואביזרים</p>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-accent">Advanced Tech</p>
                <p className="text-xs text-white/50">איתור, אבחון וביצוע ברמת דיוק גבוהה</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandTrust;
