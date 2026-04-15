import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>מדיניות פרטיות — ואקנין אינסטלציה</title>
        <meta name="description" content="מדיניות הפרטיות של ואקנין אינסטלציה — כיצד אנו אוספים, משתמשים ומגינים על המידע שלכם." />
        <link rel="canonical" href="https://vaknin-plumbing.co.il/privacy" />
      </Helmet>
      <Navbar />
      <main className="py-16 bg-background min-h-screen">
        <div className="container max-w-3xl">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">מדיניות פרטיות</h1>
          <p className="text-muted-foreground mb-6">עדכון אחרון: {new Date().toLocaleDateString("he-IL")}</p>

          <div className="space-y-8 text-foreground/90 leading-relaxed">
            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">1. כללי</h2>
              <p>
                ואקנין אינסטלציה ("החברה", "אנחנו") מכבדת את פרטיותכם ומחויבת להגן על המידע האישי שלכם.
                מדיניות פרטיות זו מפרטת כיצד אנו אוספים, משתמשים, מאחסנים ומגינים על מידע שנאסף 
                באמצעות האתר שלנו.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">2. מידע שאנו אוספים</h2>
              <ul className="list-disc pr-6 space-y-2">
                <li><strong>מידע שאתם מוסרים:</strong> שם, מספר טלפון, כתובת דוא"ל והודעות שנשלחות דרך טופס יצירת הקשר.</li>
                <li><strong>מידע טכני:</strong> כתובת IP, סוג דפדפן, מערכת הפעלה, עמודים שנצפו ומשך הביקור.</li>
                <li><strong>עוגיות (Cookies):</strong> קבצים קטנים הנשמרים במכשירכם לשיפור חוויית הגלישה וניתוח שימוש.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">3. שימוש במידע</h2>
              <p>אנו משתמשים במידע שנאסף למטרות הבאות:</p>
              <ul className="list-disc pr-6 space-y-2 mt-2">
                <li>מתן שירותי אינסטלציה ותקשורת עם לקוחות</li>
                <li>שיפור האתר והשירותים שלנו</li>
                <li>שליחת עדכונים ומבצעים (בהסכמתכם בלבד)</li>
                <li>עמידה בדרישות החוק</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">4. שיתוף מידע עם צדדים שלישיים</h2>
              <p>
                אנו לא מוכרים או משכירים את המידע האישי שלכם. ייתכן שנשתף מידע עם ספקי שירות 
                הפועלים מטעמנו (כגון שירותי אחסון, ניתוח נתונים) תחת התחייבויות סודיות מתאימות.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">5. אבטחת מידע</h2>
              <p>
                אנו נוקטים באמצעי אבטחה סבירים ומקובלים להגנה על המידע שלכם מפני גישה בלתי מורשית, 
                שינוי, חשיפה או השמדה.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">6. זכויותיכם</h2>
              <p>בהתאם לחוק הגנת הפרטיות, עומדות לכם הזכויות הבאות:</p>
              <ul className="list-disc pr-6 space-y-2 mt-2">
                <li>עיון במידע האישי שנשמר אודותיכם</li>
                <li>תיקון או מחיקת מידע אישי</li>
                <li>התנגדות לעיבוד מידע לצרכי שיווק ישיר</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">7. יצירת קשר</h2>
              <p>
                לשאלות בנוגע למדיניות הפרטיות, ניתן לפנות אלינו בטלפון 052-8126653 
                או באימייל info@vaknin-plumbing.co.il.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
