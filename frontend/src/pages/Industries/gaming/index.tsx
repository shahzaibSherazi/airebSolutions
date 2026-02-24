import GamingDevelopmentCycle from "@/components/Industries/gaming/GamingDevelopmentCycle";
import GamingExpertise from "@/components/Industries/gaming/GamingExpertise";
import GamingHero from "@/components/Industries/gaming/GamingHero";
import GamingServices from "@/components/Industries/gaming/GamingServices";
import GamingSolutions from "@/components/Industries/gaming/GamingSolution";
import GamingTechStack from "@/components/Industries/gaming/GamingtechStack";
import Layout from "@/components/layout/Layout";

const Gaming = () => {
  return (
    <Layout enableSmoothScroll>
      <GamingHero />
      <GamingSolutions />
      <GamingServices />
      <GamingDevelopmentCycle />
      <GamingTechStack />
      <GamingExpertise />
    </Layout>
  );
};

export default Gaming;
