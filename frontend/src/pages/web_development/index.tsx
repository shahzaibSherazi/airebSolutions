import Layout from "@/components/layout/Layout";
import ScrollTopButton from "@/components/ui/ScrollTopButton";
import ScrollTimeline from "@/components/web_development/ChooseUs";
import WebChallenges from "@/components/web_development/WebChallenges";
import WebHeroSection from "@/components/web_development/WebHeroSection";
import WebServicesSection from "@/components/web_development/WebServicesSection";
import WorkProcessSection from "@/components/web_development/WorkProcessSection";

const WebDevelopment = () => {
  return (
    <Layout enableSmoothScroll>
      <WebHeroSection />
      <WebServicesSection />
      <WebChallenges />
      <WorkProcessSection />
      <ScrollTimeline />
      <ScrollTopButton />
    </Layout>
  );
};

export default WebDevelopment;
