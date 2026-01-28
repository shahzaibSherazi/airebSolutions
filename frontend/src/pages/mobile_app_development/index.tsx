import Layout from "@/components/layout/Layout";
import ChooseUs from "@/components/mobile_app_development/ChooseUs";
import MobileAppServices from "@/components/mobile_app_development/MobileAppServices";
import MobileHero from "@/components/mobile_app_development/MobileHero";
import OurWork from "@/components/mobile_app_development/OurWork";
import WorkProcess from "@/components/mobile_app_development/WorkProcess";

const MobileAppDevelopment = () => {
  return (
    <Layout>
      <MobileHero />
      <MobileAppServices />
      <WorkProcess />
      <OurWork />
      <ChooseUs />
    </Layout>
  );
};

export default MobileAppDevelopment;
