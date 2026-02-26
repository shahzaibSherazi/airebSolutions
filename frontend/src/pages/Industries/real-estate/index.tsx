import RealEstateCycle from "@/components/Industries/real-estate/RealEstateCycle";
import RealEstateExpertise from "@/components/Industries/real-estate/RealEstateExpertise";
import RealEstateHero from "@/components/Industries/real-estate/RealEstateHero";
import RealEstateServices from "@/components/Industries/real-estate/RealEstateServices";
import RealEstateSolutions from "@/components/Industries/real-estate/RealEstateSolutions";
import RealEstateTechStack from "@/components/Industries/real-estate/RealEstateTechStack";
import Layout from "@/components/layout/Layout";

const RealEstate = () => {
  return (
    <Layout enableSmoothScroll>
      <RealEstateHero />
      <RealEstateSolutions />
      <RealEstateServices />
      <RealEstateCycle />
      <RealEstateTechStack />
      <RealEstateExpertise />
    </Layout>
  );
};

export default RealEstate;
