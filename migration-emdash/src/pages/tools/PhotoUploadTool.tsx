import { useState, useRef } from "react";
import { Phone, MessageCircle, ArrowRight, Upload, Camera, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

interface PhotoDiagnosis {
  title: string;
  description: string;
  tips: string[];
}

const problemPatterns: { keywords: string[]; diagnosis: PhotoDiagnosis }[] = [
  {
    keywords: [],
    diagnosis: {
      title: "תמונה התקבלה — נבדוק ונחזור אליכם",
      description: "צוות המומחים שלנו יבדוק את התמונה ויצור איתכם קשר עם אבחנה מקצועית.",
      tips: [
        "צלמו מקרוב את מוקד הבעיה",
        "צלמו גם את הסביבה לקונטקסט",
        "אם יש נזילה — צלמו גם את מקור המים",
        "ציינו בהודעת וואטסאפ מתי התחילה הבעיה",
      ],
    },
  },
];

const PhotoUploadTool = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) return;
    if (file.size > 10 * 1024 * 1024) return; // 10MB limit

    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    if (preview) {
      setSubmitted(true);
    }
  };

  const reset = () => {
    setPreview(null);
    setDescription("");
    setSubmitted(false);
    if (fileRef.current) fileRef.current.value = "";
  };

  const whatsappMessage = encodeURIComponent(
    `שלום, אני רוצה לשלוח תמונה של בעיית אינסטלציה.${description ? `\nתיאור: ${description}` : ""}`
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>שלחו תמונה של הבעיה — אבחון אינסטלציה | ואקנין אינסטלציה</title>
        <meta name="description" content="צלמו את בעיית האינסטלציה ושלחו לנו. נאבחן את הבעיה ונחזור אליכם עם פתרון והצעת מחיר." />
      </Helmet>

      <Navbar />

      <main className="container max-w-2xl py-12 flex-grow">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 text-sm">
          <ArrowRight className="w-4 h-4" />
          חזרה לעמוד הראשי
        </Link>

        <div className="text-center mb-10">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            שלחו תמונה — נאבחן בחינם
          </h1>
          <p className="text-muted-foreground">צלמו את הבעיה ונחזור אליכם עם אבחנה והצעת מחיר.</p>
        </div>

        {!submitted ? (
          <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
            {!preview ? (
              <div
                onClick={() => fileRef.current?.click()}
                className="border-2 border-dashed border-border rounded-xl p-12 text-center cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                <div className="flex justify-center gap-4 mb-4">
                  <Camera className="w-10 h-10 text-muted-foreground" />
                  <Upload className="w-10 h-10 text-muted-foreground" />
                </div>
                <p className="font-heading font-bold text-foreground mb-1">לחצו לצילום או העלאת תמונה</p>
                <p className="text-sm text-muted-foreground">JPG, PNG — עד 10MB</p>
              </div>
            ) : (
              <div className="relative">
                <img src={preview} alt="תמונת הבעיה" className="w-full rounded-xl max-h-80 object-cover" />
                <button
                  onClick={reset}
                  className="absolute top-2 left-2 bg-foreground/80 text-background rounded-full p-2 hover:bg-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleFile}
              className="hidden"
            />

            <div>
              <label className="block font-heading font-semibold text-foreground mb-2">
                תארו את הבעיה (אופציונלי)
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value.slice(0, 500))}
                placeholder="למשל: יש נזילה מתחת לכיור המטבח כבר שבוע..."
                className="w-full rounded-xl border border-border bg-background p-4 text-foreground placeholder:text-muted-foreground text-sm min-h-[100px] focus:outline-none focus:ring-2 focus:ring-ring"
                maxLength={500}
              />
              <p className="text-xs text-muted-foreground mt-1">{description.length}/500</p>
            </div>

            <Button
              variant="hero"
              size="xl"
              className="w-full"
              disabled={!preview}
              onClick={handleSubmit}
            >
              <Upload className="w-5 h-5" />
              שלחו לאבחון
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8 text-center">
              <span className="text-4xl mb-4 block">✅</span>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
                התמונה התקבלה!
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto mb-4">
                לאבחון מהיר ומדויק, שלחו את התמונה גם בוואטסאפ — כך נוכל לחזור אליכם תוך דקות.
              </p>
              {preview && (
                <img src={preview} alt="תמונה שנשלחה" className="w-32 h-32 object-cover rounded-xl mx-auto mb-4" />
              )}
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-heading font-bold text-foreground mb-3">💡 טיפים לתמונה טובה:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• צלמו מקרוב את מוקד הבעיה</li>
                <li>• ודאו תאורה טובה</li>
                <li>• צלמו גם את הסביבה לקונטקסט</li>
                <li>• אם יש נזילה — צלמו את מקור המים</li>
              </ul>
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 text-center">
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">שלחו בוואטסאפ לתגובה מהירה</h3>
              <p className="text-muted-foreground mb-6">נחזור אליכם תוך דקות עם אבחנה והצעת מחיר.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero-outline" size="xl" className="border-accent text-accent hover:bg-accent/10" asChild>
                  <a href={`https://wa.me/972528126653?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    שלחו בוואטסאפ
                  </a>
                </Button>
                <Button variant="hero" size="xl" asChild>
                  <a href="tel:+972528126653">
                    <Phone className="w-5 h-5" />
                    התקשרו עכשיו
                  </a>
                </Button>
              </div>
            </div>

            <div className="text-center">
              <button onClick={reset} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                → שליחת תמונה נוספת
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

export default PhotoUploadTool;
