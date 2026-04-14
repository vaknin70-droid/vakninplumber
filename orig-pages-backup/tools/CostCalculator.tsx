import { useState } from "react";
import { Phone, MessageCircle, ArrowRight, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const serviceTypes = [
  { label: "פתיחת סתימה", value: "clog", min: 150, max: 400 },
  { label: "תיקון נזילה", value: "leak", min: 200, max: 600 },
  { label: "איתור נזילה סמויה", value: "detect", min: 300, max: 800 },
  { label: "תיקון / החלפת ברז", value: "faucet", min: 150, max: 400 },
  { label: "תיקון אסלה", value: "toilet", min: 150, max: 500 },
  { label: "תיקון / החלפת דוד שמש", value: "heater", min: 200, max: 7000 },
  { label: "החלפת צנרת", value: "pipe", min: 500, max: 3000 },
  { label: "שיפוץ אמבטיה — אינסטלציה", value: "renovation", min: 5000, max: 15000 },
  { label: "התקנת מכשיר (מקלחון, כיור)", value: "install", min: 300, max: 1000 },
];

const urgencyOptions = [
  { label: "רגיל — בתיאום מראש", value: "regular", multiplier: 1 },
  { label: "דחוף — היום", value: "urgent", multiplier: 1.3 },
  { label: "חירום — עכשיו (לילה/שבת)", value: "emergency", multiplier: 1.8 },
];

const propertyTypes = [
  { label: "דירה", value: "apartment", multiplier: 1 },
  { label: "בית פרטי", value: "house", multiplier: 1.1 },
  { label: "עסק / משרד", value: "business", multiplier: 1.15 },
];

const CostCalculator = () => {
  const [service, setService] = useState("");
  const [urgency, setUrgency] = useState("");
  const [property, setProperty] = useState("");
  const [showResult, setShowResult] = useState(false);

  const selectedService = serviceTypes.find((s) => s.value === service);
  const selectedUrgency = urgencyOptions.find((u) => u.value === urgency);
  const selectedProperty = propertyTypes.find((p) => p.value === property);

  const canCalculate = service && urgency && property;

  const calculate = () => {
    if (canCalculate) setShowResult(true);
  };

  const minPrice = selectedService && selectedUrgency && selectedProperty
    ? Math.round(selectedService.min * selectedUrgency.multiplier * selectedProperty.multiplier)
    : 0;
  const maxPrice = selectedService && selectedUrgency && selectedProperty
    ? Math.round(selectedService.max * selectedUrgency.multiplier * selectedProperty.multiplier)
    : 0;

  const reset = () => {
    setService("");
    setUrgency("");
    setProperty("");
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>מחשבון עלויות אינסטלציה — ואקנין אינסטלציה</title>
        <meta name="description" content="חשבו עלות משוערת לשירותי אינסטלציה. בחרו סוג שירות, דחיפות וסוג נכס וקבלו הערכת מחיר מיידית." />
      </Helmet>
      
      <Navbar />

      <main className="container max-w-2xl py-12 flex-grow">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 text-sm">
          <ArrowRight className="w-4 h-4" />
          חזרה לעמוד הראשי
        </Link>

        <div className="text-center mb-10">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            מחשבון עלויות אינסטלציה
          </h1>
          <p className="text-muted-foreground">קבלו הערכת מחיר מיידית לשירותי אינסטלציה.</p>
        </div>

        {!showResult ? (
          <div className="bg-card border border-border rounded-2xl p-8 space-y-8">
            {/* Service Type */}
            <div>
              <h2 className="font-heading font-bold text-foreground mb-4">סוג השירות</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceTypes.map((s) => (
                  <button
                    key={s.value}
                    onClick={() => setService(s.value)}
                    className={`text-right p-3 rounded-xl border transition-all text-sm font-medium ${
                      service === s.value
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-background hover:border-primary/40 text-foreground"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Urgency */}
            <div>
              <h2 className="font-heading font-bold text-foreground mb-4">דחיפות</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {urgencyOptions.map((u) => (
                  <button
                    key={u.value}
                    onClick={() => setUrgency(u.value)}
                    className={`text-right p-3 rounded-xl border transition-all text-sm font-medium ${
                      urgency === u.value
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-background hover:border-primary/40 text-foreground"
                    }`}
                  >
                    {u.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Property */}
            <div>
              <h2 className="font-heading font-bold text-foreground mb-4">סוג הנכס</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {propertyTypes.map((p) => (
                  <button
                    key={p.value}
                    onClick={() => setProperty(p.value)}
                    className={`text-right p-3 rounded-xl border transition-all text-sm font-medium ${
                      property === p.value
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-background hover:border-primary/40 text-foreground"
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            <Button
              variant="hero"
              size="xl"
              className="w-full"
              disabled={!canCalculate}
              onClick={calculate}
            >
              <Calculator className="w-5 h-5" />
              חשבו עלות משוערת
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-8 text-center">
              <p className="text-muted-foreground text-sm mb-2">הערכת מחיר עבור</p>
              <h2 className="font-heading text-xl font-bold text-foreground mb-6">
                {selectedService?.label} • {selectedUrgency?.label} • {selectedProperty?.label}
              </h2>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
                <p className="text-sm text-muted-foreground mb-1">טווח מחירים משוער</p>
                <p className="font-heading text-4xl font-extrabold text-primary">
                  ₪{minPrice.toLocaleString()} — ₪{maxPrice.toLocaleString()}
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  * המחיר הסופי נקבע לאחר אבחון בשטח. ללא עלויות נסתרות.
                </p>
              </div>

              {urgency === "emergency" && (
                <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 mb-6 text-sm text-foreground">
                  <strong>💡 טיפ:</strong> שירות חירום בלילה/שבת כולל תוספת מחיר. אם אפשר לחכות לבוקר — תחסכו עד 40%.
                </div>
              )}
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 text-center">
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">רוצים הצעת מחיר מדויקת?</h3>
              <p className="text-muted-foreground mb-6">התקשרו ונתאם ביקור ללא עלות ראשונית.</p>
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
                → חישוב חדש
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

export default CostCalculator;
