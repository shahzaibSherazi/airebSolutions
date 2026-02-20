// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
// import { useLocation } from "react-router-dom";
// import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";
// import AllServices from "./pages/services";
// import ScrollToTop from "./components/ui/ScrollTop";
// import WebDevelopment from "./pages/web_development";
// import MobileAppDevelopment from "./pages/mobile_app_development";
// import CrmIntegration from "./pages/crm_integration";
// import DevOps from "./pages/dev_ops";
// import AiServices from "./pages/Ai_services";
// import ApiIntegration from "./pages/api_integration";
// import Dialer from "./pages/Dialer";
// import Ecommerce from "./pages/ecommerce";
// import OnDemand from "./pages/on_demand";
// import LogoDesign from "./pages/logo_design";
// import UiDesign from "./pages/ui_ux_design";
// import ContentWriting from "./pages/content_writing";
// import ContactCenter from "./pages/contact_center";
// import HealthCare from "./pages/Industries/health_care";
// import Education from "./pages/Industries/education";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <ScrollToTop />
//         <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="/services" element={<AllServices />} />
//           <Route path="/web-development" element={<WebDevelopment />} />
//           <Route
//             path="/mobile-app-development"
//             element={<MobileAppDevelopment />}
//           />
//           <Route path="/crm-integration" element={<CrmIntegration />} />
//           <Route path="/devops-services" element={<DevOps />} />
//           <Route path="/ai-services" element={<AiServices />} />
//           <Route path="/api-integration" element={<ApiIntegration />} />
//           <Route path="/dialer" element={<Dialer />} />
//           <Route path="/ecommerce" element={<Ecommerce />} />
//           <Route path="/on-demand" element={<OnDemand />} />
//           <Route path="/logo-design" element={<LogoDesign />} />
//           <Route path="/ui-ux-design" element={<UiDesign />} />
//           <Route path="/content-writing" element={<ContentWriting />} />
//           <Route path="/contact-center" element={<ContactCenter />} />
//           <Route path="/industries/healthcare" element={<HealthCare />} />
//           <Route path="/industries/education" element={<Education />} />

//           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;

// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";

// import ScrollToTop from "./components/ui/ScrollTop";

// // Pages
// import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";
// import AllServices from "./pages/services";
// import WebDevelopment from "./pages/web_development";
// import MobileAppDevelopment from "./pages/mobile_app_development";
// import CrmIntegration from "./pages/crm_integration";
// import DevOps from "./pages/dev_ops";
// import AiServices from "./pages/Ai_services";
// import ApiIntegration from "./pages/api_integration";
// import Dialer from "./pages/Dialer";
// import Ecommerce from "./pages/ecommerce";
// import OnDemand from "./pages/on_demand";
// import LogoDesign from "./pages/logo_design";
// import UiDesign from "./pages/ui_ux_design";
// import ContentWriting from "./pages/content_writing";
// import ContactCenter from "./pages/contact_center";
// import HealthCare from "./pages/Industries/health_care";
// import Education from "./pages/Industries/education";

// const queryClient = new QueryClient();

// // 🔥 Page Transition Wrapper
// const PageTransition = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -40 }}
//       transition={{ duration: 0.6, ease: "easeInOut" }}
//       className="min-h-screen">
//       {children}
//     </motion.div>
//   );
// };

// // 🔥 Animated Routes Component
// const AnimatedRoutes = () => {
//   const location = useLocation();

//   return (
//     <AnimatePresence mode="wait">
//       <Routes location={location} key={location.pathname}>
//         <Route
//           path="/"
//           element={
//             <PageTransition>
//               <Index />
//             </PageTransition>
//           }
//         />
//         <Route
//           path="/services"
//           element={
//             <PageTransition>
//               <AllServices />
//             </PageTransition>
//           }
//         />
//         <Route
//           path="/web-development"
//           element={
//             <PageTransition>
//               <WebDevelopment />
//             </PageTransition>
//           }
//         />
//         <Route
//           path="/mobile-app-development"
//           element={
//             <PageTransition>
//               <MobileAppDevelopment />
//             </PageTransition>
//           }
//         />
//         <Route
//           path="/crm-integration"
//           element={
//             <PageTransition>
//               <CrmIntegration />
//             </PageTransition>
//           }
//         />
//         <Route
//           path="/devops-services"
//           element={
//             <PageTransition>
//               <DevOps />
//             </PageTransition>
//           }
//         />
//         <Route
//           path="/ai-services"
//           element={
//             <PageTransition>
//               <AiServices />
//             </PageTransition>
//           }
//         />
//         <Route
//           path="/api-integration"
//           element={
//             <PageTransition>
//               <ApiIntegration />
//             </PageTransition>
//           }
//         />
//         <Route
//           path="/dialer"
//           element={
//             <PageTransition>
//               <Dialer />
//             </PageTransition>
//           }
//         />
//         <Route
//           path="/ecommerce"
//           element={
//             <PageTransition>
//               <Ecommerce />
//             </PageTransition>
//           }
//         />
//         <Route
//           path="/on-demand"
//           element={
//             <PageTransition>
//               <OnDemand />
//             </PageTransition>
//           }
//         />
//         <Route
//           path="/logo-design"
//           element={
//             <PageTransition>
//               <LogoDesign />
//             </PageTransition>
//           }
//         />
//         <Route
//           path="/ui-ux-design"
//           element={
//             <PageTransition>
//               <UiDesign />
//             </PageTransition>
//           }
//         />
//         <Route
//           path="/content-writing"
//           element={
//             <PageTransition>
//               <ContentWriting />
//             </PageTransition>
//           }
//         />
//         <Route
//           path="/contact-center"
//           element={
//             <PageTransition>
//               <ContactCenter />
//             </PageTransition>
//           }
//         />
//         <Route
//           path="/industries/healthcare"
//           element={
//             <PageTransition>
//               <HealthCare />
//             </PageTransition>
//           }
//         />
//         <Route
//           path="/industries/education"
//           element={
//             <PageTransition>
//               <Education />
//             </PageTransition>
//           }
//         />
//         <Route
//           path="*"
//           element={
//             <PageTransition>
//               <NotFound />
//             </PageTransition>
//           }
//         />
//       </Routes>
//     </AnimatePresence>
//   );
// };

// // 🚀 Main App
// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <ScrollToTop />
//         <AnimatedRoutes />
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;

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
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route
          path="/mobile-app-development"
          element={<MobileAppDevelopment />}
        />
        <Route path="/crm-integration" element={<CrmIntegration />} />
        <Route path="/devops-services" element={<DevOps />} />
        <Route path="/ai-services" element={<AiServices />} />
        <Route path="/api-integration" element={<ApiIntegration />} />
        <Route path="/dialer" element={<Dialer />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/on-demand" element={<OnDemand />} />
        <Route path="/logo-design" element={<LogoDesign />} />
        <Route path="/ui-ux-design" element={<UiDesign />} />
        <Route path="/content-writing" element={<ContentWriting />} />
        <Route path="/contact-center" element={<ContactCenter />} />
        <Route path="/industries/healthcare" element={<HealthCare />} />
        <Route path="/industries/education" element={<Education />} />
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
