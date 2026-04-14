import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <>
      {/* סרגל שיחה נייד */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary-dark p-3 flex gap-2">
        <a
          href="tel:+972528126653"
          className="flex-1 flex items-center justify-center gap-2 bg-accent text-accent-foreground font-bold py-3 rounded-lg text-sm"
        >
          <Phone className="w-4 h-4" />
          התקשרו עכשיו
        </a>
        <a
          href="https://wa.me/972528126653"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] text-accent-foreground font-bold py-3 px-5 rounded-lg text-sm"
        >
          <MessageCircle className="w-4 h-4" />
        </a>
      </div>

      {/* כפתור וואטסאפ צף - דסקטופ */}
      <a
        href="https://wa.me/972528126653"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#25D366] rounded-full items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="שלחו הודעה בוואטסאפ"
      >
        <MessageCircle className="w-7 h-7 text-accent-foreground" />
      </a>
    </>
  );
};

export default FloatingButtons;
