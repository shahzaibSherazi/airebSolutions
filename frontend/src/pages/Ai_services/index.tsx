import AIDevelopmentProcess from "@/components/Ai_services/AiDevelopmentProcess";
import AIExpertiseSection from "@/components/Ai_services/AiExpertise";
import AiHero from "@/components/Ai_services/AiHero";
import AiServicesSection from "@/components/Ai_services/AiServices";
import WhyChooseUs from "@/components/Ai_services/WhyChooseUs";
import Layout from "@/components/layout/Layout";

const AiServices = () => {
  return (
    <Layout>
      <AiHero />
      <AiServicesSection />
      <AIExpertiseSection />
      <AIDevelopmentProcess />
      <WhyChooseUs />
    </Layout>
  );
};

export default AiServices;
