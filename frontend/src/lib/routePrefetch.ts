import { lazy } from "react";
import type { ComponentType, LazyExoticComponent } from "react";

type PrefetchableComponent = LazyExoticComponent<ComponentType<any>> & {
  preload?: () => Promise<any>;
};

const lazyWithPreload = (
  factory: () => Promise<{ default: ComponentType<any> }>,
) => {
  const Component = lazy(factory) as PrefetchableComponent;
  Component.preload = factory;
  return Component;
};

export const ContactUs = lazyWithPreload(() => import("@/pages/contactUs"));
export const AboutUs = lazyWithPreload(() => import("@/pages/aboutUs"));
export const Careers = lazyWithPreload(() => import("@/pages/careers"));
export const PrivacyPolicy = lazyWithPreload(
  () => import("@/pages/privacyPolicy"),
);
export const TermsAndConditions = lazyWithPreload(
  () => import("@/pages/terms-conditions"),
);

export const AllServices = lazyWithPreload(() => import("@/pages/services"));
export const WebDevelopment = lazyWithPreload(
  () => import("@/pages/web_development"),
);
export const MobileAppDevelopment = lazyWithPreload(
  () => import("@/pages/mobile_app_development"),
);
export const CrmIntegration = lazyWithPreload(
  () => import("@/pages/crm_integration"),
);
export const DevOps = lazyWithPreload(() => import("@/pages/dev_ops"));
export const AiServices = lazyWithPreload(() => import("@/pages/Ai_services"));
export const ApiIntegration = lazyWithPreload(
  () => import("@/pages/api_integration"),
);
export const Dialer = lazyWithPreload(() => import("@/pages/Dialer"));
export const Ecommerce = lazyWithPreload(() => import("@/pages/ecommerce"));
export const OnDemand = lazyWithPreload(() => import("@/pages/on_demand"));
export const LogoDesign = lazyWithPreload(() => import("@/pages/logo_design"));
export const UiDesign = lazyWithPreload(() => import("@/pages/ui_ux_design"));
export const ContentWriting = lazyWithPreload(
  () => import("@/pages/content_writing"),
);
export const ContactCenter = lazyWithPreload(
  () => import("@/pages/contact_center"),
);

export const HealthCare = lazyWithPreload(
  () => import("@/pages/Industries/health_care"),
);
export const Education = lazyWithPreload(
  () => import("@/pages/Industries/education"),
);
export const IndustriesEcommerce = lazyWithPreload(
  () => import("@/pages/Industries/ecommerce"),
);
export const Gaming = lazyWithPreload(
  () => import("@/pages/Industries/gaming"),
);
export const Telecommunication = lazyWithPreload(
  () => import("@/pages/Industries/telecommunication"),
);
export const StartUp = lazyWithPreload(
  () => import("@/pages/Industries/start-up"),
);
export const Banking = lazyWithPreload(
  () => import("@/pages/Industries/banking-fintech"),
);
export const RealEstate = lazyWithPreload(
  () => import("@/pages/Industries/real-estate"),
);
export const Retail = lazyWithPreload(
  () => import("@/pages/Industries/retail"),
);
export const TravelHospitality = lazyWithPreload(
  () => import("@/pages/Industries/travel-hospitality"),
);

export const Resources = lazyWithPreload(() => import("@/pages/resources"));
export const Blogs = lazyWithPreload(() => import("@/pages/resources/blogs"));
export const DetailPage = lazyWithPreload(
  () => import("@/pages/resources/blogs/DetailPage"),
);
export const WhitePaper = lazyWithPreload(
  () => import("@/pages/resources/white-paper"),
);
export const CaseStudy = lazyWithPreload(
  () => import("@/pages/resources/case-studies"),
);
export const Portfolio = lazyWithPreload(
  () => import("@/pages/resources/portfolio"),
);

export const AdminLogin = lazyWithPreload(
  () => import("@/pages/admin/AdminLogin"),
);
export const AdminDashboard = lazyWithPreload(
  () => import("@/pages/admin/AdminDashboard"),
);
export const BlogsManagement = lazyWithPreload(
  () => import("@/pages/admin/BlogsManagement"),
);
export const BlogForm = lazyWithPreload(() => import("@/pages/admin/BlogForm"));
export const WhitePapersManagement = lazyWithPreload(
  () => import("@/pages/admin/WhitePapersManagement"),
);
export const WhitePaperForm = lazyWithPreload(
  () => import("@/pages/admin/WhitePaperForm"),
);
export const ProtectedRoute = lazyWithPreload(
  () => import("@/components/admin/ProtectedRoute"),
);

const routePrefetchMap: Record<string, PrefetchableComponent> = {
  "/contact-us": ContactUs,
  "/about-us": AboutUs,
  "/about/careers": Careers,
  "/privacy-policy": PrivacyPolicy,
  "/terms&conditions": TermsAndConditions,
  "/services": AllServices,
  "/services/web-development": WebDevelopment,
  "/services/mobile-app-development": MobileAppDevelopment,
  "/services/crm-integration": CrmIntegration,
  "/services/devops-services": DevOps,
  "/services/ai-services": AiServices,
  "/services/api-integration": ApiIntegration,
  "/services/dialer": Dialer,
  "/services/ecommerce": Ecommerce,
  "/services/on-demand": OnDemand,
  "/services/logo-design": LogoDesign,
  "/services/ui-ux-design": UiDesign,
  "/services/content-writing": ContentWriting,
  "/services/contact-center": ContactCenter,
  "/industries/healthcare": HealthCare,
  "/industries/education": Education,
  "/industries/ecommerce": IndustriesEcommerce,
  "/industries/gaming": Gaming,
  "/industries/telecommunication": Telecommunication,
  "/industries/start-up": StartUp,
  "/industries/banking-fintech": Banking,
  "/industries/real-estate": RealEstate,
  "/industries/retail": Retail,
  "/industries/travel-hospitality": TravelHospitality,
  "/resources": Resources,
  "/resources/blogs": Blogs,
  "/resources/white-papers": WhitePaper,
  "/resources/case-studies": CaseStudy,
  "/resources/portfolio": Portfolio,
  "/admin/login": AdminLogin,
  "/admin/dashboard": AdminDashboard,
  "/admin/blogs": BlogsManagement,
  "/admin/blogs/create": BlogForm,
  "/admin/whitepapers": WhitePapersManagement,
  "/admin/whitepapers/create": WhitePaperForm,
};

const prefixPrefetchMap: Array<{
  prefix: string;
  component: PrefetchableComponent;
}> = [
  { prefix: "/resources/blogs/", component: DetailPage },
  { prefix: "/admin/blogs/", component: BlogForm },
  { prefix: "/admin/whitepapers/", component: WhitePaperForm },
];

const prefetchedPaths = new Set<string>();

export const prefetchRoute = (href?: string | { pathname?: string }) => {
  if (!href) return;

  let pathname = "";
  try {
    const url = new URL(
      typeof href === "string" ? href : (href.pathname ?? ""),
      window.location.href,
    );

    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return;
    }

    pathname = url.pathname;
  } catch {
    return;
  }

  if (prefetchedPaths.has(pathname)) {
    return;
  }

  const route =
    routePrefetchMap[pathname] ||
    prefixPrefetchMap.find(({ prefix }) => pathname.startsWith(prefix))
      ?.component;

  if (!route?.preload) {
    return;
  }

  prefetchedPaths.add(pathname);
  route.preload().catch(() => undefined);
};

export const allPrefetchableRoutes: PrefetchableComponent[] = [
  ContactUs,
  AboutUs,
  Careers,
  PrivacyPolicy,
  TermsAndConditions,
  AllServices,
  WebDevelopment,
  MobileAppDevelopment,
  CrmIntegration,
  DevOps,
  AiServices,
  ApiIntegration,
  Dialer,
  Ecommerce,
  OnDemand,
  LogoDesign,
  UiDesign,
  ContentWriting,
  ContactCenter,
  HealthCare,
  Education,
  IndustriesEcommerce,
  Gaming,
  Telecommunication,
  StartUp,
  Banking,
  RealEstate,
  Retail,
  TravelHospitality,
  Resources,
  Blogs,
  DetailPage,
  WhitePaper,
  CaseStudy,
  Portfolio,
  AdminLogin,
  AdminDashboard,
  BlogsManagement,
  BlogForm,
  WhitePapersManagement,
  WhitePaperForm,
  ProtectedRoute,
];
