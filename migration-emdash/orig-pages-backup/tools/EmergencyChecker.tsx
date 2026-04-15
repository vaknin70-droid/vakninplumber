import { useState } from "react";
import { Phone, MessageCircle, ArrowRight, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

interface Question {
  text: string;
  yesPoints: number;
}

const questions: Question[] = [
  { text: "האם מים מציפים את הרצפה כרגע?", yesPoints: 3 },
  { text: "האם צינור התפוצץ או שבור?", yesPoints: 3 },
  { text: "האם יש ריח ביוב חזק מאוד?", yesPoints: 2 },
  { text: "האם מים זולגים ללא הפסקה?", yesPoints: 3 },
  { text: "האם החשמל בסכנה (מים ליד שקעים)?", yesPoints: 3 },
  { text: "האם האסלה עולה על גדותיה?", yesPoints: 2 },
  { text: "האם אין מים חמים כלל?", yesPoints: 1 },
  { text: "האם הבעיה החלה בדקות האחרונות?", yesPoints: 1 },
];

type Severity = "emergency" | "urgent" | "normal";

function getSeverity(score: number): Severity {
  if (score >= 5) return "emergency";
  if (score >= 2) return "urgent";
  return "normal";
}

const severityConfig: Record<Severity, { icon: React.ReactNode; color: string; bg: string; title: string; desc: string }> = {
  emergency: {
    icon: <AlertTriangle className="w-8 h-8" />,
    color: "text-destructive",
    bg: "bg-destructive/10 border-destructive/30",
    title: "🚨 מצב חירום — התקשרו מיד!",
    desc: "הבעיה שתיארתם דורשת טיפול מיידי. אל תחכו — כל דקה קריטית. סגרו את שסתום המים הראשי והתקשרו עכשיו.",
  },
  urgent: {
    icon: <Clock className="w-8 h-8" />,
    color: "text-accent",
    bg: "bg-accent/10 border-accent/30",
    title: "⚠️ דחוף — מומלץ טיפול היום",
    desc: "הבעיה דורשת טיפול בהקדם כדי למנוע החמרה. מומלץ ליצור קשר ולתאם ביקור מהיר.",
  },
  normal: {
    icon: <CheckCircle className="w-8 h-8" />,
    color: "text-primary",
    bg: "bg-primary/10 border-primary/30",
    title: "ℹ️ לא דחוף — תאמו ביקור",
    desc: "הבעיה לא נראית דחופה, אבל מומלץ לא להתעלם. תאמו ביקור של אינסטלטור בנוחות שלכם.",
  },
};

const EmergencyChecker = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const handleAnswer = (yes: boolean) => {
    const newScore = yes ? score + questions[currentQ].yesPoints : score;
    setScore(newScore);

    // If already emergency, skip remaining
    if (newScore >= 5) {
      setDone(true);
      return;
    }

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setDone(true);
    }
  };

  const reset = () => {
    setCurrentQ(0);
    setScore(0);
    setDone(false);
  };

  const severity = getSeverity(score);
  const config = severityConfig[severity];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>בדיקת חומרת תקלה — האם זה חירום? | ואקנין אינסטלציה</title>
        <meta name="description" content="בדקו האם בעיית האינסטלציה שלכם היא מצב חירום. ענו על שאלות פשוטות וגלו מה רמת הדחיפות." />
      </Helmet>

      <Navbar />

      <main className="container max-w-2xl py-12 flex-grow">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 text-sm">
          <ArrowRight className="w-4 h-4" />
          חזרה לעמוד הראשי
        </Link>

        <div className="text-center mb-10">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            האם זה מצב חירום?
          </h1>
          <p className="text-muted-foreground">ענו על כמה שאלות וגלו את רמת הדחיפות של הבעיה.</p>
        </div>

        {!done ? (
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="flex gap-2 mb-8">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full flex-1 transition-colors ${
                    i <= currentQ ? "bg-destructive" : "bg-muted"
                  }`}
                />
              ))}
            </div>

            <p className="text-xs text-muted-foreground mb-2">שאלה {currentQ + 1} מתוך {questions.length}</p>
            <h2 className="font-heading text-xl font-bold text-foreground mb-8">
              {questions[currentQ].text}
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleAnswer(true)}
                className="p-4 rounded-xl border border-destructive/30 bg-destructive/5 hover:bg-destructive/10 transition-all font-bold text-foreground text-lg"
              >
                כן
              </button>
              <button
                onClick={() => handleAnswer(false)}
                className="p-4 rounded-xl border border-border bg-background hover:bg-muted transition-all font-bold text-foreground text-lg"
              >
                לא
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className={`rounded-2xl border p-8 text-center ${config.bg}`}>
              <div className={`mx-auto mb-4 ${config.color}`}>{config.icon}</div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">{config.title}</h2>
              <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto">{config.desc}</p>
            </div>

            {severity === "emergency" && (
              <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6">
                <h3 className="font-heading font-bold text-foreground mb-3">פעולות מיידיות:</h3>
                <ul className="space-y-2 text-sm text-foreground">
                  <li>1. סגרו את שסתום המים הראשי</li>
                  <li>2. כבו חשמל אם יש סכנה</li>
                  <li>3. אספו מים עם מגבות/דליים</li>
                  <li>4. התקשרו לאינסטלטור חירום</li>
                </ul>
              </div>
            )}

            <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 text-center">
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                {severity === "emergency" ? "חייגו מיד!" : "צרו קשר"}
              </h3>
              <p className="text-muted-foreground mb-6">זמינים 24/7. הגעה מהירה לכל אזור המרכז.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <a href="tel:+972528126653">
                    <Phone className="w-5 h-5" />
                    {severity === "emergency" ? "חירום — התקשרו עכשיו" : "התקשרו עכשיו"}
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
                → בדיקה חדשה
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default EmergencyChecker;
