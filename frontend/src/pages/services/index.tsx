import Layout from "@/components/layout/Layout";
import FAQAccordion from "@/components/services/FaqAccordion";
import HeroSection from "@/components/services/AllServicesHero";
import TechnologiesShowcase from "@/components/services/TechnologiesShowcase";
import TechSolutionsSection from "@/components/services/TechSolutionSection";
import WhyChooseUs from "@/components/services/WhyChooseUs";
import AllServicesHero from "@/components/services/AllServicesHero";
const AllServices = () => {
  return (
    <Layout enableSmoothScroll>
      <AllServicesHero />
      <TechSolutionsSection />
      <TechnologiesShowcase />
      <FAQAccordion />
      <WhyChooseUs />
    </Layout>
  );
};

export default AllServices;
