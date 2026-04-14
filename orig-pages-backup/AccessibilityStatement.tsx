import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AccessibilityStatement = () => {
  return (
    <>
      <Helmet>
        <title>הצהרת נגישות — ואקנין אינסטלציה</title>
        <meta name="description" content="הצהרת הנגישות של ואקנין אינסטלציה — מחויבותנו להנגשת האתר לכלל האוכלוסייה." />
        <link rel="canonical" href="https://vaknin-plumbing.co.il/accessibility" />
      </Helmet>
      <Navbar />
      <main className="py-16 bg-background min-h-screen">
        <div className="container max-w-3xl">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">הצהרת נגישות</h1>
          <p className="text-muted-foreground mb-6">עדכון אחרון: {new Date().toLocaleDateString("he-IL")}</p>

          <div className="space-y-8 text-foreground/90 leading-relaxed">
            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">מחויבותנו לנגישות</h2>
              <p>
                ואקנין אינסטלציה מחויבת לאפשר לכל אדם, לרבות אנשים עם מוגבלויות, להשתמש באתר בצורה נוחה ושוויונית.
                אנו פועלים להתאים את האתר לתקן הישראלי (ת"י 5568) ולהנחיות WCAG 2.1 ברמה AA.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">התאמות הנגישות שבוצעו</h2>
              <ul className="list-disc pr-6 space-y-2">
                <li>תפריט נגישות מובנה באתר לשינוי גודל גופן, ניגודיות צבעים והדגשת קישורים</li>
                <li>תמיכה בניווט מלא באמצעות מקלדת</li>
                <li>תוויות ותיאורים חלופיים (alt text) לתמונות</li>
                <li>מבנה כותרות היררכי ונכון (H1-H6)</li>
                <li>ניגודיות צבעים מספקת בין טקסט לרקע</li>
                <li>תמיכה בקוראי מסך</li>
                <li>אתר רספונסיבי המותאם למכשירים ניידים</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">תפריט הנגישות</h2>
              <p>
                באתר מוטמע תפריט נגישות הזמין בכל עמוד. לחצו על כפתור הנגישות (♿) כדי לפתוח את 
                התפריט ולהתאים את תצוגת האתר לצרכיכם, כולל: שינוי גודל הגופן, מצב ניגודיות גבוהה, 
                הדגשת קישורים, עצירת אנימציות ועוד.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">דפדפנים וטכנולוגיות</h2>
              <p>
                האתר תוכנן לתמוך בדפדפנים הנפוצים: Chrome, Firefox, Safari ו-Edge בגרסאותיהם העדכניות.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">נתקלתם בבעיית נגישות?</h2>
              <p>
                אנו ממשיכים לפעול לשיפור נגישות האתר. אם נתקלתם בבעיה או שיש לכם הצעה לשיפור, 
                נשמח לשמוע:
              </p>
              <ul className="list-none space-y-2 mt-3">
                <li>📞 טלפון: <a href="tel:+972528126653" className="text-primary hover:underline font-semibold">052-8126653</a></li>
                <li>📧 אימייל: <a href="mailto:info@vaknin-plumbing.co.il" className="text-primary hover:underline font-semibold">info@vaknin-plumbing.co.il</a></li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AccessibilityStatement;
