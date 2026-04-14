import { Link } from "react-router-dom";
import { Search, Calculator, AlertTriangle, Camera, Wrench } from "lucide-react";

interface ToolsSectionProps {
  hideHeader?: boolean;
}

const tools = [
  {
    icon: Search,
    title: "אבחון תקלה",
    description: "ענו על שאלות וגלו מה הבעיה",
    href: "/tools/diagnosis",
    gradient: "from-blue-500 to-cyan-400",
    visible: true,
  },
  {
    icon: Calculator,
    title: "מחשבון עלויות",
    description: "הערכת מחיר מיידית לשירות",
    href: "/tools/cost-calculator",
    gradient: "from-emerald-500 to-teal-400",
    visible: false, // מוסתר זמנית — הקובץ קיים ב-/tools/cost-calculator
  },
  {
    icon: AlertTriangle,
    title: "בדיקת חירום",
    description: "האם התקלה דחופה?",
    href: "/tools/emergency-checker",
    gradient: "from-orange-500 to-amber-400",
    visible: true,
  },
  {
    icon: Camera,
    title: "אבחון בתמונה",
    description: "שלחו תמונה ונאבחן",
    href: "/tools/photo-upload",
    gradient: "from-purple-500 to-pink-400",
    visible: true,
  },
];

const ToolsSection = ({ hideHeader = false }: ToolsSectionProps) => {
  return (
    <section id="tools" className={`relative bg-secondary overflow-hidden ${hideHeader ? 'py-10' : 'py-24'}`}>
      <div className="container relative z-10">
        {!hideHeader && (
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight">
              כלים חכמים לאבחון מהיר
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              השתמשו בכלים המתקדמים שלנו כדי להבין את הבעיה, להעריך עלויות מראש, ולקבל החלטות חכמות — הכל בחינם וללא התחייבות.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.filter((t) => t.visible).map((tool) => (
            <Link
              key={tool.href}
              to={tool.href}
              className="group relative flex flex-col items-center p-8 rounded-2xl bg-white border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center mb-6 shadow-md transform group-hover:scale-110 transition-transform duration-300`}>
                <tool.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-bold text-lg md:text-xl text-foreground mb-3 text-center">
                {tool.title}
              </h3>
              <p className="text-muted-foreground text-sm text-center leading-relaxed">
                {tool.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
