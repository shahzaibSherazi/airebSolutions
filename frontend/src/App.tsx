import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import ScrollToTop from "./components/ui/ScrollTop";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AllServices from "./pages/services";
import WebDevelopment from "./pages/web_development";
import MobileAppDevelopment from "./pages/mobile_app_development";
import CrmIntegration from "./pages/crm_integration";
import DevOps from "./pages/dev_ops";
import AiServices from "./pages/Ai_services";
import ApiIntegration from "./pages/api_integration";
import Dialer from "./pages/Dialer";
import Ecommerce from "./pages/ecommerce";
import OnDemand from "./pages/on_demand";
import LogoDesign from "./pages/logo_design";
import UiDesign from "./pages/ui_ux_design";
import ContentWriting from "./pages/content_writing";
import ContactCenter from "./pages/contact_center";
import HealthCare from "./pages/Industries/health_care";
import Education from "./pages/Industries/education";
import logoImg from "@/assets/aireb_logo.png";
import IndustriesEcommerce from "./pages/Industries/ecommerce";
import Gaming from "./pages/Industries/gaming";
import Telecommunication from "./pages/Industries/telecommunication";
import StartUp from "./pages/Industries/start-up";
import Banking from "./pages/Industries/banking-fintech";
import RealEstate from "./pages/Industries/real-estate";
import Retail from "./pages/Industries/retail";
import TravelHospitality from "./pages/Industries/travel-hospitality";
import Blogs from "./pages/resources/blogs";
import WhitePaper from "./pages/resources/white-paper";
import ContactUs from "./pages/contactUs";
import AboutUs from "./pages/aboutUs";
import Careers from "./pages/careers";
import PrivacyPolicy from "./pages/privacyPolicy";
import TermsAndConditions from "./pages/terms-conditions";
import Portfolio from "./pages/resources/portfolio";
import BlogDetailPage from "./pages/resources/blogs/DetailPage";
import DetailPage from "./pages/resources/blogs/DetailPage";
import CaseStudy from "./pages/resources/case-studies";

// Admin pages
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import BlogsManagement from "./pages/admin/BlogsManagement";
import BlogForm from "./pages/admin/BlogForm";
import WhitePapersManagement from "./pages/admin/WhitePapersManagement";
import WhitePaperForm from "./pages/admin/WhitePaperForm";
import ProtectedRoute from "@/components/admin/ProtectedRoute";

const queryClient = new QueryClient();

/* =========================
   MINIMAL TRANSPARENT LOADER
========================= */
const RouteLoader = ({ loading }: { loading: boolean }) => {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-md bg-black/20">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-5">
            <img
              src={logoImg} // your logo path
              alt="logo"
              className="w-14"
            />

            <div className="w-7 h-7 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* =========================
   ROUTES + LOADER
========================= */
const AnimatedRoutes = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // lock scroll (Lenis will respect overflow hidden)
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
    }, 600);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <RouteLoader loading={loading} />

      <Routes location={location}>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<AllServices />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route
          path="/services/mobile-app-development"
          element={<MobileAppDevelopment />}
        />
        <Route path="/services/crm-integration" element={<CrmIntegration />} />
        <Route path="/services/devops-services" element={<DevOps />} />
        <Route path="/services/ai-services" element={<AiServices />} />
        <Route path="/services/api-integration" element={<ApiIntegration />} />
        <Route path="/services/dialer" element={<Dialer />} />
        <Route path="/services/ecommerce" element={<Ecommerce />} />
        <Route path="/services/on-demand" element={<OnDemand />} />
        <Route path="/services/logo-design" element={<LogoDesign />} />
        <Route path="/services/ui-ux-design" element={<UiDesign />} />
        <Route path="/services/content-writing" element={<ContentWriting />} />
        <Route path="/services/contact-center" element={<ContactCenter />} />
        <Route path="/industries/healthcare" element={<HealthCare />} />
        <Route path="/industries/education" element={<Education />} />
        <Route path="/industries/ecommerce" element={<IndustriesEcommerce />} />
        <Route path="/industries/gaming" element={<Gaming />} />
        <Route
          path="/industries/telecommunication"
          element={<Telecommunication />}
        />
        <Route path="/industries/start-up" element={<StartUp />} />
        <Route path="/industries/banking-fintech" element={<Banking />} />
        <Route path="/industries/real-estate" element={<RealEstate />} />
        <Route path="/industries/retail" element={<Retail />} />
        <Route
          path="/industries/travel-hospitality"
          element={<TravelHospitality />}
        />
        <Route path="/resources/blogs" element={<Blogs />} />
        <Route path="/resources/blogs/:id" element={<DetailPage />} />
        <Route path="/resources/white-papers" element={<WhitePaper />} />
        <Route path="/resources/case-studies" element={<CaseStudy />} />
        <Route path="/resources/portfolio" element={<Portfolio />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about/careers" element={<Careers />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms&conditions" element={<TermsAndConditions />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/blogs"
          element={
            <ProtectedRoute>
              <BlogsManagement />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/blogs/create"
          element={
            <ProtectedRoute>
              <BlogForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/blogs/:id"
          element={
            <ProtectedRoute>
              <BlogForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/whitepapers"
          element={
            <ProtectedRoute>
              <WhitePapersManagement />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/whitepapers/create"
          element={
            <ProtectedRoute>
              <WhitePaperForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/whitepapers/:id"
          element={
            <ProtectedRoute>
              <WhitePaperForm />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

/* =========================
   MAIN APP
========================= */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
