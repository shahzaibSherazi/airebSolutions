import HealthCareCycle from "@/components/Industries/health_care/HealthCareCycle";
import HealthCareExpertise from "@/components/Industries/health_care/HealthCareExpertise";
import HealthCareHero from "@/components/Industries/health_care/HealthCareHero";
import HealthCareServices from "@/components/Industries/health_care/HealthCareServices";
import HealthCareSolutions from "@/components/Industries/health_care/HealthCareSolutions";
import HealthCareTechStack from "@/components/Industries/health_care/HealthCareTechStack";
import Layout from "@/components/layout/Layout";
import ScrollTopButton from "@/components/ui/ScrollTopButton";

const HealthCare = () => {
  return (
    <Layout enableSmoothScroll>
      <HealthCareHero />
      <HealthCareSolutions />
      <HealthCareServices />
      <HealthCareCycle />
      <HealthCareTechStack />
      <HealthCareExpertise />
      <ScrollTopButton />
    </Layout>
  );
};

export default HealthCare;
