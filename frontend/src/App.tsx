import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ScrollToTop from "./components/ui/ScrollTop";
import logoImg from "@/assets/aireb_logo.png";

// ── Lazy load ALL pages ────────────────────────────────────────────
const Toaster = lazy(() => import("@/components/ui/toaster"));
const Sonner = lazy(() => import("@/components/ui/sonner"));
// Public pages
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ContactUs = lazy(() => import("./pages/contactUs"));
const AboutUs = lazy(() => import("./pages/aboutUs"));
const Careers = lazy(() => import("./pages/careers"));
const PrivacyPolicy = lazy(() => import("./pages/privacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/terms-conditions"));

// Services
const AllServices = lazy(() => import("./pages/services"));
const WebDevelopment = lazy(() => import("./pages/web_development"));
const MobileAppDevelopment = lazy(
  () => import("./pages/mobile_app_development"),
);
const CrmIntegration = lazy(() => import("./pages/crm_integration"));
const DevOps = lazy(() => import("./pages/dev_ops"));
const AiServices = lazy(() => import("./pages/Ai_services"));
const ApiIntegration = lazy(() => import("./pages/api_integration"));
const Dialer = lazy(() => import("./pages/Dialer"));
const Ecommerce = lazy(() => import("./pages/ecommerce"));
const OnDemand = lazy(() => import("./pages/on_demand"));
const LogoDesign = lazy(() => import("./pages/logo_design"));
const UiDesign = lazy(() => import("./pages/ui_ux_design"));
const ContentWriting = lazy(() => import("./pages/content_writing"));
const ContactCenter = lazy(() => import("./pages/contact_center"));

// Industries
const HealthCare = lazy(() => import("./pages/Industries/health_care"));
const Education = lazy(() => import("./pages/Industries/education"));
const IndustriesEcommerce = lazy(() => import("./pages/Industries/ecommerce"));
const Gaming = lazy(() => import("./pages/Industries/gaming"));
const Telecommunication = lazy(
  () => import("./pages/Industries/telecommunication"),
);
const StartUp = lazy(() => import("./pages/Industries/start-up"));
const Banking = lazy(() => import("./pages/Industries/banking-fintech"));
const RealEstate = lazy(() => import("./pages/Industries/real-estate"));
const Retail = lazy(() => import("./pages/Industries/retail"));
const TravelHospitality = lazy(
  () => import("./pages/Industries/travel-hospitality"),
);

// Resources
const Resources = lazy(() => import("./pages/resources"));
const Blogs = lazy(() => import("./pages/resources/blogs"));
const DetailPage = lazy(() => import("./pages/resources/blogs/DetailPage"));
const WhitePaper = lazy(() => import("./pages/resources/white-paper"));
const CaseStudy = lazy(() => import("./pages/resources/case-studies"));
const Portfolio = lazy(() => import("./pages/resources/portfolio"));

// Admin pages
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const BlogsManagement = lazy(() => import("./pages/admin/BlogsManagement"));
const BlogForm = lazy(() => import("./pages/admin/BlogForm"));
const WhitePapersManagement = lazy(
  () => import("./pages/admin/WhitePapersManagement"),
);
const WhitePaperForm = lazy(() => import("./pages/admin/WhitePaperForm"));
const ProtectedRoute = lazy(() => import("@/components/admin/ProtectedRoute"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // cache for 5 mins
      retry: 1,
    },
  },
});

// ── Page loader ────────────────────────────────────────────────────
const RouteLoader = ({ loading }: { loading: boolean }) => (
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
          <img src={logoImg} alt="logo" className="w-14" />
          <div className="w-7 h-7 border-2 border-white border-t-transparent rounded-full animate-spin" />
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

// ── Suspense fallback (instant — no spinner flash) ─────────────────
const PageFallback = () => <div className="bg-[#02070F] min-h-screen" />;

// ── Routes ─────────────────────────────────────────────────────────
const AnimatedRoutes = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
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

      <Suspense fallback={<PageFallback />}>
        <Routes location={location}>
          {/* ── Public ── */}
          <Route path="/" element={<Index />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about/careers" element={<Careers />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms&conditions" element={<TermsAndConditions />} />

          {/* ── Services ── */}
          <Route path="/services" element={<AllServices />} />
          <Route
            path="/services/web-development"
            element={<WebDevelopment />}
          />
          <Route
            path="/services/mobile-app-development"
            element={<MobileAppDevelopment />}
          />
          <Route
            path="/services/crm-integration"
            element={<CrmIntegration />}
          />
          <Route path="/services/devops-services" element={<DevOps />} />
          <Route path="/services/ai-services" element={<AiServices />} />
          <Route
            path="/services/api-integration"
            element={<ApiIntegration />}
          />
          <Route path="/services/dialer" element={<Dialer />} />
          <Route path="/services/ecommerce" element={<Ecommerce />} />
          <Route path="/services/on-demand" element={<OnDemand />} />
          <Route path="/services/logo-design" element={<LogoDesign />} />
          <Route path="/services/ui-ux-design" element={<UiDesign />} />
          <Route
            path="/services/content-writing"
            element={<ContentWriting />}
          />
          <Route path="/services/contact-center" element={<ContactCenter />} />

          {/* ── Industries ── */}
          <Route path="/industries/healthcare" element={<HealthCare />} />
          <Route path="/industries/education" element={<Education />} />
          <Route
            path="/industries/ecommerce"
            element={<IndustriesEcommerce />}
          />
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

          {/* ── Resources ── */}
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/blogs" element={<Blogs />} />
          <Route path="/resources/blogs/:id" element={<DetailPage />} />
          <Route path="/resources/white-papers" element={<WhitePaper />} />
          <Route path="/resources/case-studies" element={<CaseStudy />} />
          <Route path="/resources/portfolio" element={<Portfolio />} />

          {/* ── Admin ── */}
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
      </Suspense>
    </>
  );
};

// ── Main App ───────────────────────────────────────────────────────
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Suspense fallback={null}>
        <Toaster />
        <Sonner />
      </Suspense>
      <BrowserRouter>
        <ScrollToTop />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
