import StartUpCycle from "@/components/Industries/start-up/StartUpCycle";
import StartUpExpertise from "@/components/Industries/start-up/StartUpExpertise";
import StartUpHero from "@/components/Industries/start-up/StartUpHero";
import StartUpServices from "@/components/Industries/start-up/StartUpServices";
import StartUpSolutions from "@/components/Industries/start-up/StartUpSolutions";
import StartUpTechStack from "@/components/Industries/start-up/StartUpTechStack";
import Layout from "@/components/layout/Layout";

const StartUp = () => {
  return (
    <Layout enableSmoothScroll>
      <StartUpHero />
      <StartUpSolutions />
      <StartUpServices />
      <StartUpCycle />
      <StartUpTechStack />
      <StartUpExpertise />
    </Layout>
  );
};

export default StartUp;
