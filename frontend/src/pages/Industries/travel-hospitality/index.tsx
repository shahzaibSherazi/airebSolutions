import TravelHospitalityCycle from "@/components/Industries/travel-hospitality/TravelHospitalityCycle";
import TravelHospitalityExpertise from "@/components/Industries/travel-hospitality/TravelHospitalityExpertise";
import TravelHospitalityHero from "@/components/Industries/travel-hospitality/TravelHospitalityHero";
import TravelHospitalityServices from "@/components/Industries/travel-hospitality/TravelHospitalityServices";
import TravelHospitalitySolutions from "@/components/Industries/travel-hospitality/TravelHospitalitySolutions";
import TravelHospitalityTechStack from "@/components/Industries/travel-hospitality/TravelHospitalityTechStack";
import Layout from "@/components/layout/Layout";

const TravelHospitality = () => {
  return (
    <Layout enableSmoothScroll>
      <TravelHospitalityHero />
      <TravelHospitalitySolutions />
      <TravelHospitalityServices />
      <TravelHospitalityCycle />
      <TravelHospitalityTechStack />
      <TravelHospitalityExpertise />
    </Layout>
  );
};

export default TravelHospitality;
