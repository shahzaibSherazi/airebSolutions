import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AllServices from "./pages/services";
import ScrollToTop from "./components/ui/ScrollTop";
import WebDevelopment from "./pages/web_development";
import MobileAppDevelopment from "./pages/mobile_app_development";
import CrmIntegration from "./pages/crm_integration";
import DevOps from "./pages/dev_ops";
import AiServices from "./pages/Ai_services";
import ApiIntegration from "./pages/api_integration";
import Dialer from "./pages/Dialer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useSmoothScroll } from "./hooks/useSmoothScroll";
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

// const queryClient = new QueryClient();

// const App = () => {
//   // Initialize smooth scroll with optional GSAP
//   useSmoothScroll({
//     enableGsap: true, // Set to false if you don't need GSAP
//     lenisConfig: {
//       duration: 1.2,
//       easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       smoothWheel: true,
//       smoothTouch: false, // Better for mobile UX
//     },
//   });

//   return (
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <Toaster />
//         <Sonner />
//         <BrowserRouter>
//           <ScrollToTop />
//           <Routes>
//             <Route path="/" element={<Index />} />
//             <Route path="/services" element={<AllServices />} />
//             <Route path="/web-development" element={<WebDevelopment />} />
//             <Route
//               path="/mobile-app-development"
//               element={<MobileAppDevelopment />}
//             />
//             <Route path="/crm-integration" element={<CrmIntegration />} />
//             <Route path="/devops-services" element={<DevOps />} />
//             <Route path="/ai-services" element={<AiServices />} />
//             <Route path="/api-integration" element={<ApiIntegration />} />
//             {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </BrowserRouter>
//       </TooltipProvider>
//     </QueryClientProvider>
//   );
// };

// export default App;
