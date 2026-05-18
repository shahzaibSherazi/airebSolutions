import RetailCycle from "@/components/Industries/retail/RetailCycle";
import RetailExpertise from "@/components/Industries/retail/RetailExpertise";
import RetailHero from "@/components/Industries/retail/RetailHero";
import RetailServices from "@/components/Industries/retail/RetailServices";
import RetailSolutions from "@/components/Industries/retail/RetailSolutions";
import RetailTechStack from "@/components/Industries/retail/RetailTechStack";
import Layout from "@/components/layout/Layout";
import ScrollTopButton from "@/components/ui/ScrollTopButton";

const Retail = () => {
  return (
    <Layout enableSmoothScroll>
      <RetailHero />
      <RetailSolutions />
      <RetailServices />
      <RetailCycle />
      <RetailTechStack />
      <RetailExpertise />
      <ScrollTopButton />
    </Layout>
  );
};

export default Retail;
