import Layout from "@/components/layout/Layout";
import FAQAccordion from "@/components/services/FaqAccordion";
import HeroSection from "@/components/services/HeroSection";
import TechnologiesShowcase from "@/components/services/TechnologiesShowcase";
import TechSolutionsSection from "@/components/services/TechSolutionSection";
import WhyChooseUs from "@/components/services/WhyChooseUs";
const AllServices = () => {
  return (
    <Layout>
      <HeroSection />
      <TechSolutionsSection />
      <TechnologiesShowcase />
      <FAQAccordion />
      <WhyChooseUs />
    </Layout>
  );
};

export default AllServices;
