import BankingCycle from "@/components/Industries/banking-fintech/BankingCycle";
import BankingExpertise from "@/components/Industries/banking-fintech/BankingExpertise";
import BankingHero from "@/components/Industries/banking-fintech/BankingHero";
import BankingServices from "@/components/Industries/banking-fintech/BankingServices";
import BankingSolutions from "@/components/Industries/banking-fintech/BankingSolutions";
import BankingTechStack from "@/components/Industries/banking-fintech/BankingTechStack";
import Layout from "@/components/layout/Layout";

const Banking = () => {
  return (
    <Layout enableSmoothScroll>
      <BankingHero />
      <BankingSolutions />
      <BankingServices />
      <BankingCycle />
      <BankingTechStack />
      <BankingExpertise />
    </Layout>
  );
};

export default Banking;
