import { useState } from "react";
import { Phone, MessageCircle, ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

interface Step {
  question: string;
  options: { label: string; value: string }[];
}

const steps: Step[] = [
  {
    question: "איפה נמצאת הבעיה?",
    options: [
      { label: "🍳 מטבח", value: "kitchen" },
      { label: "🛁 אמבטיה", value: "bathroom" },
      { label: "🚽 שירותים", value: "toilet" },
      { label: "🚿 מקלחת", value: "shower" },
      { label: "🏡 חוץ / גינה", value: "outside" },
      { label: "🏠 כללי / לא ברור", value: "general" },
    ],
  },
  {
    question: "מה סוג התקלה?",
    options: [
      { label: "💧 נזילה", value: "leak" },
      { label: "🔧 סתימה", value: "clog" },
      { label: "📉 לחץ מים נמוך", value: "low-pressure" },
      { label: "😷 ריח רע", value: "smell" },
      { label: "🔊 רעש חריג", value: "noise" },
      { label: "🔥 בעיה במים חמים", value: "hot-water" },
    ],
  },
  {
    question: "האם יש נזילת מים פעילה?",
    options: [
      { label: "כן, מים זולגים כרגע", value: "active-leak" },
      { label: "כן, טפטוף קל", value: "drip" },
      { label: "לא", value: "no-leak" },
    ],
  },
  {
    question: "מתי התחילה הבעיה?",
    options: [
      { label: "עכשיו / היום", value: "today" },
      { label: "כמה ימים", value: "days" },
      { label: "שבוע ומעלה", value: "week" },
      { label: "בעיה חוזרת", value: "recurring" },
    ],
  },
];

interface Diagnosis {
  title: string;
  description: string;
  urgency: "high" | "medium" | "low";
  tips: string[];
}

function getDiagnosis(answers: Record<number, string>): Diagnosis {
  const location = answers[0];
  const type = answers[1];
  const leak = answers[2];
  const timing = answers[3];

  if (leak === "active-leak" || timing === "today") {
    if (type === "leak") {
      return {
        title: "נזילה פעילה — נדרש טיפול דחוף",
        description: `נזילת מים פעילה ב${locationLabel(location)} דורשת טיפול מיידי כדי למנוע נזקי מים חמורים.`,
        urgency: "high",
        tips: [
          "סגרו את שסתום המים הראשי מיד",
          "שימו דלי או מגבות מתחת לנזילה",
          "כבו את החשמל אם המים הגיעו לשקעים",
          "התקשרו לאינסטלטור חירום",
        ],
      };
    }
    if (type === "clog") {
      return {
        title: "סתימה חמורה — מומלץ טיפול מקצועי",
        description: `סתימה ב${locationLabel(location)} שהתחילה לאחרונה. נסו פומפה — אם לא עוזר, יש לפנות למקצוען.`,
        urgency: "medium",
        tips: [
          "נסו פומפה (פלנג'ר) על הניקוז",
          "אל תשפכו חומרים כימיים חזקים",
          "אם כמה ניקוזים סתומים — ייתכן סתימה בקו הראשי",
        ],
      };
    }
  }

  if (type === "smell") {
    return {
      title: "ריח ביוב — נדרשת בדיקה",
      description: `ריח רע ב${locationLabel(location)} עלול להצביע על סיפון יבש, סתימה חלקית או סדק בצנרת.`,
      urgency: "medium",
      tips: [
        "שפכו מים לכל ניקוז שלא היה בשימוש",
        "בדקו אם יש סתימה חלקית",
        "ריח ביוב מתמשך דורש בדיקה מקצועית",
      ],
    };
  }

  if (type === "noise") {
    return {
      title: "רעש בצנרת — ככל הנראה פטיש מים",
      description: "דפיקות או שריקות בצנרת מצביעות על בעיית לחץ או צנרת רופפת.",
      urgency: "low",
      tips: [
        "בדקו אם הרעש מתרחש כשסוגרים ברז",
        "ודאו שצנרת גלויה מחוזקת היטב",
        "שריקה מתמשכת דורשת בדיקה של ווסת לחץ",
      ],
    };
  }

  if (type === "low-pressure") {
    return {
      title: "לחץ מים נמוך",
      description: `לחץ נמוך ב${locationLabel(location)} יכול לנבוע מאבנית, שסתום סגור חלקית, או בעיה ברשת העירונית.`,
      urgency: "low",
      tips: [
        "בדקו שהשסתום הראשי פתוח עד הסוף",
        "נקו מסננים בברזים (אירטורים)",
        "אם הבעיה בכל הבית — בדקו גם אצל שכנים",
      ],
    };
  }

  if (type === "hot-water") {
    return {
      title: "בעיה במים חמים",
      description: "ייתכן שמדובר בתקלה בדוד שמש, גוף חימום או טרמוסטט.",
      urgency: "medium",
      tips: [
        "בדקו שהשעון שבת / מפסק הדוד דולק",
        "ודאו שהטרמוסטט מכוון ל-60 מעלות",
        "דוד מעל 10 שנים? ייתכן שצריך החלפה",
      ],
    };
  }

  return {
    title: "בעיית אינסטלציה — מומלץ בדיקה מקצועית",
    description: `בהתבסס על התשובות שלכם, מומלץ לזמן אינסטלטור מקצועי לבדיקה ב${locationLabel(location)}.`,
    urgency: "medium",
    tips: [
      "תעדו את הבעיה בצילום",
      "ציינו מתי התחילה",
      "אינסטלטור מקצועי יאבחן ויתקן במהירות",
    ],
  };
}

function locationLabel(val: string): string {
  const map: Record<string, string> = {
    kitchen: "מטבח",
    bathroom: "אמבטיה",
    toilet: "שירותים",
    shower: "מקלחת",
    outside: "חוץ / גינה",
    general: "בית",
  };
  return map[val] || "בית";
}

const DiagnosisTool = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (value: string) => {
    const updated = { ...answers, [currentStep]: value };
    setAnswers(updated);
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const reset = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
  };

  const diagnosis = showResult ? getDiagnosis(answers) : null;

  const urgencyConfig = {
    high: { bg: "bg-destructive/10 border-destructive/30", icon: "🚨", label: "דחוף — התקשרו עכשיו" },
    medium: { bg: "bg-accent/10 border-accent/30", icon: "⚠️", label: "מומלץ טיפול בקרוב" },
    low: { bg: "bg-primary/10 border-primary/30", icon: "ℹ️", label: "לא דחוף — ניתן לתאם" },
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>כלי אבחון תקלות אינסטלציה — ואקנין אינסטלציה</title>
        <meta name="description" content="אבחנו את בעיית האינסטלציה שלכם בחינם עם הכלי האינטראקטיבי שלנו. ענו על כמה שאלות וקבלו אבחנה מקצועית." />
      </Helmet>

      <Navbar />

      <main className="container max-w-2xl py-12 flex-grow">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 text-sm">
          <ArrowRight className="w-4 h-4" />
          חזרה לעמוד הראשי
        </Link>

        <div className="text-center mb-10">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            אבחון תקלת אינסטלציה
          </h1>
          <p className="text-muted-foreground">ענו על כמה שאלות פשוטות ונעזור לכם לזהות את הבעיה.</p>
        </div>

        {!showResult ? (
          <div className="bg-card border border-border rounded-2xl p-8">
            {/* Progress */}
            <div className="flex gap-2 mb-8">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full flex-1 transition-colors ${
                    i <= currentStep ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>

            <p className="text-xs text-muted-foreground mb-2">שאלה {currentStep + 1} מתוך {steps.length}</p>
            <h2 className="font-heading text-xl font-bold text-foreground mb-6">
              {steps[currentStep].question}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {steps[currentStep].options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleSelect(opt.value)}
                  className="text-right p-4 rounded-xl border border-border bg-background hover:border-primary hover:bg-primary/5 transition-all font-medium text-foreground"
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {currentStep > 0 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="mt-6 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                → חזרה לשאלה הקודמת
              </button>
            )}
          </div>
        ) : diagnosis ? (
          <div className="space-y-6">
            <div className={`rounded-2xl border p-8 ${urgencyConfig[diagnosis.urgency].bg}`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{urgencyConfig[diagnosis.urgency].icon}</span>
                <span className={`text-sm font-bold px-3 py-1 rounded-full ${
                  diagnosis.urgency === "high" ? "bg-destructive text-destructive-foreground" :
                  diagnosis.urgency === "medium" ? "bg-accent text-accent-foreground" :
                  "bg-primary text-primary-foreground"
                }`}>
                  {urgencyConfig[diagnosis.urgency].label}
                </span>
              </div>

              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">{diagnosis.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{diagnosis.description}</p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="font-heading font-bold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                מה מומלץ לעשות:
              </h3>
              <ul className="space-y-3">
                {diagnosis.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground">
                    <span className="bg-primary/10 text-primary font-bold text-xs w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 text-center">
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">רוצים פתרון מקצועי?</h3>
              <p className="text-muted-foreground mb-6">אינסטלטור מוסמך זמין עכשיו. הגעה מהירה, אחריות על העבודה.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

            <div className="text-center">
              <button onClick={reset} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                → התחילו אבחון חדש
              </button>
            </div>
          </div>
        ) : null}
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default DiagnosisTool;
