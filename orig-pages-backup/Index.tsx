import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PrecisionSection from "@/components/PrecisionSection";
import LeadingBrandsSection from "@/components/LeadingBrandsSection";
import GallerySection from "@/components/GallerySection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ReviewsSection from "@/components/ReviewsSection";
import CTASection from "@/components/CTASection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import AccessibilityWidget from "@/components/AccessibilityWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUs />
        <LeadingBrandsSection />
        <PrecisionSection />
        <GallerySection />
        <ReviewsSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingButtons />
      <AccessibilityWidget />
    </div>
  );
};

export default Index;

