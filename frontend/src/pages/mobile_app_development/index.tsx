import Layout from "@/components/layout/Layout";
import ChooseUs from "@/components/mobile_app_development/ChooseUs";
import MobileAppServices from "@/components/mobile_app_development/MobileAppServices";
import MobileChallenges from "@/components/mobile_app_development/MobileChallenges";
import MobileHero from "@/components/mobile_app_development/MobileHero";
import OurWork from "@/components/mobile_app_development/OurWork";
import WorkProcess from "@/components/mobile_app_development/WorkProcess";
import ScrollTopButton from "@/components/ui/ScrollTopButton";

const MobileAppDevelopment = () => {
  return (
    <Layout enableSmoothScroll>
      <MobileHero />
      <MobileAppServices />
      <MobileChallenges />
      <WorkProcess />
      {/* <OurWork /> */}
      <ChooseUs />
      <ScrollTopButton />
    </Layout>
  );
};

export default MobileAppDevelopment;
