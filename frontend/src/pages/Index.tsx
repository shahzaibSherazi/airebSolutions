import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AdaptableSection from "@/components/home/AdaptableSection";
import StrategicApproach from "@/components/home/StrategicApproach";
import ResultSection from "@/components/home/ResultSection";
import FeaturedSection from "@/components/home/FeaturedSection";
import OurReviews from "@/components/home/OurReviews";

const Index = () => {
  return (
    <Layout enableSmoothScroll>
      <HeroSection />
      <ServicesSection />
      <AdaptableSection />
      <ResultSection />
      <FeaturedSection />
      <OurReviews />

      <StrategicApproach />
    </Layout>
  );
};

export default Index;
