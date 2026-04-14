import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const contactCards = [
  {
    icon: <Phone className="h-7 w-7" />,
    title: "טלפון",
    content: "052-8126653",
    href: "tel:+972528126653",
    color: "text-primary",
    bg: "from-primary/10 to-primary/5",
  },
  {
    icon: <MessageCircle className="h-7 w-7" />,
    title: "ווטסאפ משרד",
    content: "שלחו הודעה מהירה",
    href: "https://wa.me/972528126653",
    color: "text-green-600",
    bg: "from-green-500/10 to-green-500/5",
  },
  {
    icon: <Mail className="h-7 w-7" />,
    title: "אימייל",
    content: "info@vaknin-plumbing.co.il",
    href: "mailto:info@vaknin-plumbing.co.il",
    color: "text-blue-600",
    bg: "from-blue-500/10 to-blue-500/5",
  },
  {
    icon: <MapPin className="h-7 w-7" />,
    title: "אזור שירות",
    content: "תל אביב והמרכז",
    href: null,
    color: "text-accent",
    bg: "from-accent/10 to-accent/5",
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `שם: ${formData.name}%0Aטלפון: ${formData.phone}%0Aהודעה: ${formData.message}`;
    window.open(`https://wa.me/972528126653?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-slate-50 py-24">
      <div className="pointer-events-none absolute top-0 right-0 z-0 h-full w-full overflow-hidden">
        <div className="absolute top-0 right-0 h-1/2 w-1/2 -translate-y-1/2 translate-x-1/3 rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-1/2 w-1/2 -translate-x-1/3 translate-y-1/3 rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-bold uppercase tracking-widest text-primary shadow-sm">
            זמינים עבורכם
          </span>
          <h2 className="mb-6 font-heading text-4xl font-black text-primary-dark md:text-5xl">
            צרו קשר לקבלת <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">הצעת מחיר</span>
          </h2>
          <p className="text-lg leading-relaxed text-slate-500 md:text-xl">
            צריכים ייעוץ, אבחון או הצעת מחיר? פנו אלינו באחת הדרכים הנוחות לכם,
            ונחזור אליכם בהקדם עם מענה מקצועי וברור.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            {contactCards.map((item, idx) => (
              <div
                key={idx}
                className="group relative flex items-center gap-5 overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-xl"
              >
                <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-primary to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div
                  className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.bg} ${item.color} shadow-sm transition-transform duration-300 group-hover:scale-110`}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="mb-1 text-sm font-semibold text-slate-500">{item.title}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="block font-heading text-lg font-bold text-primary-dark transition-colors hover:text-primary"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="font-heading text-lg font-bold text-primary-dark">{item.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="flex h-full flex-col justify-center rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:p-12"
            >
              <h3 className="mb-8 font-heading text-2xl font-black uppercase tracking-wide text-primary-dark">
                שלחו פנייה מהירה
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">שם מלא</label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-base shadow-sm transition-all focus:border-transparent focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="הקלידו את שמכם המלא"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">מספר טלפון</label>
                  <input
                    type="tel"
                    required
                    maxLength={20}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-base shadow-sm transition-all focus:border-transparent focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="למשל: 052-8126653"
                    dir="ltr"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">הודעה (אופציונלי)</label>
                  <textarea
                    maxLength={1000}
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-base shadow-sm transition-all focus:border-transparent focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="תארו בקצרה את הבעיה או ציינו פרטים נוספים..."
                  />
                </div>
              </div>

              <Button
                variant="hero"
                size="xl"
                type="submit"
                className="mt-8 w-full shadow-xl shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <MessageCircle className="ml-2 h-5 w-5" />
                שליחה ויצירת קשר בווטסאפ
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
