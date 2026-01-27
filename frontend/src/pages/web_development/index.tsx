import Layout from "@/components/layout/Layout";
import WebHeroSection from "@/components/web_development/WebHeroSection";
import WebServicesSection from "@/components/web_development/WebServicesSection";
import WorkProcessSection from "@/components/web_development/WorkProcessSection";

const WebDevelopment = () => {
  return (
    <Layout>
      <WebHeroSection />
      <WebServicesSection />
      <WorkProcessSection />
    </Layout>
  );
};

export default WebDevelopment;
