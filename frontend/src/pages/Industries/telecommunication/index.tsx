import TelecommunicationCycle from "@/components/Industries/telecommunication/TelecommunicationCycle";
import TelecommunicationExpertise from "@/components/Industries/telecommunication/TelecommunicationExpertise";
import TelecommunicationHero from "@/components/Industries/telecommunication/TelecommunicationHero";
import TelecommunicationServices from "@/components/Industries/telecommunication/TelecommunicationServices";
import TelecommunicationSolutions from "@/components/Industries/telecommunication/TelecommunicationSolutions";
import TelecommunicationTechStack from "@/components/Industries/telecommunication/TelecommunicationTechStack";
import Layout from "@/components/layout/Layout";
import ScrollTopButton from "@/components/ui/ScrollTopButton";

const Telecommunication = () => {
  return (
    <Layout enableSmoothScroll>
      <TelecommunicationHero />
      <TelecommunicationSolutions />
      <TelecommunicationServices />
      <TelecommunicationCycle />
      <TelecommunicationTechStack />
      <TelecommunicationExpertise />
      <ScrollTopButton />
    </Layout>
  );
};

export default Telecommunication;
