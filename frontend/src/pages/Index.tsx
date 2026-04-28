import { lazy, Suspense } from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
const ServicesSection = lazy(() => import("@/components/home/ServicesSection"));
const AdaptableSection = lazy(
  () => import("@/components/home/AdaptableSection"),
);
const StrategicApproach = lazy(
  () => import("@/components/home/StrategicApproach"),
);
const ResultSection = lazy(() => import("@/components/home/ResultSection"));
const FeaturedSection = lazy(() => import("@/components/home/FeaturedSection"));
const OurReviews = lazy(() => import("@/components/home/OurReviews"));

const SectionLoader = () => (
  <div className="h-[200px]" /> // skeleton spacer (important for layout stability)
);

const Index = () => {
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
    </Layout>
  );
};

export default Index;
