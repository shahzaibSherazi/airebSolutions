import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Suspense, useEffect } from "react";
import ScrollToTop from "./components/ui/ScrollTop";
import logoImg from "@/assets/aireb_logo.png";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Toaster from "@/components/ui/toaster";
import Sonner from "@/components/ui/sonner";
import {
  AboutUs,
  ContactUs,
  AdminDashboard,
  AdminLogin,
  AiServices,
  ApiIntegration,
  AllServices,
  Banking,
  BlogForm,
  Blogs,
  BlogsManagement,
  CaseStudy,
  Careers,
  ContactCenter,
  ContentWriting,
  CrmIntegration,
  DevOps,
  DetailPage,
  Dialer,
  Ecommerce,
  Education,
  Gaming,
  HealthCare,
  IndustriesEcommerce,
  LogoDesign,
  MobileAppDevelopment,
  OnDemand,
  Portfolio,
  PrivacyPolicy,
  ProtectedRoute,
  RealEstate,
  Resources,
  Retail,
  StartUp,
  TermsAndConditions,
  Telecommunication,
  TravelHospitality,
  UiDesign,
  WebDevelopment,
  WhitePaper,
  WhitePaperForm,
  WhitePapersManagement,
  allPrefetchableRoutes,
  prefetchRoute,
} from "@/lib/routePrefetch";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // cache for 5 mins
      retry: 1,
    },
  },
});

// ── Page loader ────────────────────────────────────────────────────
// const RouteLoader = ({ loading }: { loading: boolean }) => (
//   <AnimatePresence>
//     {loading && (
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.25 }}
//         className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-md bg-black/20">
//         <motion.div
//           initial={{ scale: 0.95, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.3 }}
//           className="flex flex-col items-center gap-5">
//           <img src={logoImg} alt="logo" className="w-14" />
//           <div className="w-7 h-7 border-2 border-white border-t-transparent rounded-full animate-spin" />
//         </motion.div>
//       </motion.div>
//     )}
//   </AnimatePresence>
// );

// ── Suspense fallback (instant — no spinner flash) ─────────────────
const PageFallback = () => (
  <div className="bg-[#02070F] min-h-screen flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <img src={logoImg} alt="Aireb logo" className="w-14 animate-pulse" />
      <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
    </div>
  </div>
);

// ── Routes ─────────────────────────────────────────────────────────
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Suspense fallback={null}>
      <Routes location={location} key={location.pathname}>
        {/* ── Public ── */}
        <Route path="/" element={<Index />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about/careers" element={<Careers />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms&conditions" element={<TermsAndConditions />} />

        {/* ── Services ── */}
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

        {/* ── Industries ── */}
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
  );
};

// ── Main App ───────────────────────────────────────────────────────
const App = () => {
  useEffect(() => {
    const idleCallback =
      (window as any).requestIdleCallback ||
      function (cb: FrameRequestCallback) {
        return window.setTimeout(cb, 200);
      };

    const idleId = idleCallback(() => {
      allPrefetchableRoutes.forEach((page) => page.preload?.());
    }) as number;

    return () => {
      if ("cancelIdleCallback" in window) {
        (window as any).cancelIdleCallback(idleId);
      } else {
        clearTimeout(idleId);
      }
    };
  }, []);

  useEffect(() => {
    const handlePrefetch = (event: Event) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest("a");

      if (!anchor?.href || anchor.target === "_blank") {
        return;
      }

      prefetchRoute(anchor.href);
    };

    document.addEventListener("pointerover", handlePrefetch, {
      passive: true,
    });
    document.addEventListener("focusin", handlePrefetch);
    document.addEventListener("pointerdown", handlePrefetch, {
      passive: true,
    });

    return () => {
      document.removeEventListener("pointerover", handlePrefetch);
      document.removeEventListener("focusin", handlePrefetch);
      document.removeEventListener("pointerdown", handlePrefetch);
    };
  }, []);

  return (
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
};

export default App;
