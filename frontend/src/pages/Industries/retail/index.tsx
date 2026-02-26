import RetailCycle from "@/components/Industries/retail/RetailCycle";
import RetailExpertise from "@/components/Industries/retail/RetailExpertise";
import RetailHero from "@/components/Industries/retail/RetailHero";
import RetailSolutions from "@/components/Industries/retail/RetailSolutions";
import RetailTechStack from "@/components/Industries/retail/RetailTechStack";
import Layout from "@/components/layout/Layout";

const Retail = () => {
  return (
    <Layout enableSmoothScroll>
      <RetailHero />
      <RetailSolutions />
      <RetailCycle />
      <RetailTechStack />
      <RetailExpertise />
    </Layout>
  );
};

export default Retail;
