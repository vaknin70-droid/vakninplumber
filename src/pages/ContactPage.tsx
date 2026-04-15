import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Helmet } from "react-helmet-async";
import FloatingButtons from "@/components/FloatingButtons";

const ContactPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Helmet>
        <title>צור קשר - ואקנין אינסטלציה | ייעוץ, אבחון והצעת מחיר</title>
        <meta
          name="description"
          content="צרו קשר עם ואקנין אינסטלציה לקבלת ייעוץ, אבחון והצעת מחיר. זמינים בטלפון, בווטסאפ ובמייל לשירות מקצועי באזור המרכז."
        />
        <link rel="canonical" href="https://vaknin-plumbing.co.il/contact" />
      </Helmet>

      <Navbar />

      <main className="flex-grow pt-0">
        <ContactSection />
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default ContactPage;
