import Layout from "@/components/layout/Layout";
import ScrollTimeline from "@/components/web_development/ChooseUs";
import OurWork from "@/components/web_development/OurWork";
import WebHeroSection from "@/components/web_development/WebHeroSection";
import WebServicesSection from "@/components/web_development/WebServicesSection";
import WorkProcessSection from "@/components/web_development/WorkProcessSection";

const WebDevelopment = () => {
  return (
    <Layout>
      <WebHeroSection />
      <WebServicesSection />
      <WorkProcessSection />
      <OurWork />
      <ScrollTimeline />
    </Layout>
  );
};

export default WebDevelopment;
