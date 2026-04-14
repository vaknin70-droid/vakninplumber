import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const LeadCaptureBlock = () => (
  <section className="bg-accent/10 border border-accent/20 rounded-xl p-5 md:p-8 my-8 md:my-12 text-center">
    <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3">
      צריכים עזרה מקצועית?
    </h2>
    <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
      אינסטלטור מוסמך זמין עכשיו. הגעה מהירה, מחירים הוגנים, אחריות על העבודה.
    </p>
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
  </section>
);

export default LeadCaptureBlock;
