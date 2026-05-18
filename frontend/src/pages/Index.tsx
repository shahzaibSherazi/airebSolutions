import { lazy, Suspense, useEffect } from "react";
import type { ComponentType, LazyExoticComponent } from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ScrollTopButton from "@/components/ui/ScrollTopButton";

type PrefetchableComponent = LazyExoticComponent<ComponentType<any>> & {
  preload?: () => Promise<any>;
};

const lazyWithPreload = (
  factory: () => Promise<{ default: ComponentType<any> }>,
): PrefetchableComponent => {
  const Component = lazy(factory) as PrefetchableComponent;
  Component.preload = factory;
  return Component;
};

const ServicesSection = lazyWithPreload(
  () => import("@/components/home/ServicesSection"),
);
const AdaptableSection = lazyWithPreload(
  () => import("@/components/home/AdaptableSection"),
);
const ResultSection = lazyWithPreload(
  () => import("@/components/home/ResultSection"),
);
const FeaturedSection = lazyWithPreload(
  () => import("@/components/home/FeaturedSection"),
);
const StrategicApproach = lazyWithPreload(
  () => import("@/components/home/StrategicApproach"),
);
const OurReviews = lazyWithPreload(
  () => import("@/components/home/OurReviews"),
);

const SectionLoader = () => (
  <div
    className="min-h-[240px] w-full animate-pulse bg-slate-900/10"
    aria-hidden="true"
  />
);

const homeSections: PrefetchableComponent[] = [
  ServicesSection,
  AdaptableSection,
  ResultSection,
  FeaturedSection,
  OurReviews,
  StrategicApproach,
];

const Index = () => {
  useEffect(() => {
    const idleCallback =
      (window as any).requestIdleCallback ||
      function (cb: FrameRequestCallback) {
        return window.setTimeout(cb, 200);
      };

    const idleId = idleCallback(() => {
      homeSections.forEach((section) => section.preload?.());
    }) as number;

    return () => {
      if ("cancelIdleCallback" in window) {
        (window as any).cancelIdleCallback(idleId);
      } else {
        clearTimeout(idleId);
      }
    };
  }, []);

  return (
    <Layout enableSmoothScroll>
      <HeroSection />

      <Suspense fallback={<SectionLoader />}>
        <ServicesSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <AdaptableSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <ResultSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <FeaturedSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <OurReviews />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <StrategicApproach />
      </Suspense>

      <ScrollTopButton />
    </Layout>
  );
};

export default Index;
