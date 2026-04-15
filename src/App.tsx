import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AccessibilityStatement from "./pages/AccessibilityStatement";
import NotFound from "./pages/NotFound";
import DiagnosisTool from "./pages/tools/DiagnosisTool";
import CostCalculator from "./pages/tools/CostCalculator";
import EmergencyChecker from "./pages/tools/EmergencyChecker";
import PhotoUploadTool from "./pages/tools/PhotoUploadTool";
import KnowledgeHub from "./pages/KnowledgeHub";
import CategoryPage from "./pages/CategoryPage";
import ArticlePage from "./pages/ArticlePage";
import CityPage from "./pages/CityPage";
import ServicePage from "./pages/ServicePage";
import AllServices from "./pages/AllServices";
import ContactPage from "./pages/ContactPage";
import AllCities from "./pages/AllCities";
import AllTools from "./pages/AllTools";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/vakplumbing">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/accessibility" element={<AccessibilityStatement />} />
            <Route path="/tools/diagnosis" element={<DiagnosisTool />} />
            <Route path="/tools/cost-calculator" element={<CostCalculator />} />
            <Route path="/tools/emergency-checker" element={<EmergencyChecker />} />
            <Route path="/tools/photo-upload" element={<PhotoUploadTool />} />
            <Route path="/knowledge" element={<KnowledgeHub />} />
            <Route path="/knowledge/:categorySlug" element={<CategoryPage />} />
            <Route path="/knowledge/:categorySlug/:articleSlug" element={<ArticlePage />} />
            <Route path="/city/:citySlug" element={<CityPage />} />
            <Route path="/cities" element={<AllCities />} />
            <Route path="/tools-hub" element={<AllTools />} />
            <Route path="/services" element={<AllServices />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services/:serviceSlug" element={<ServicePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
