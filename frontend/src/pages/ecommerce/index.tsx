import ChooseUs from "@/components/ecommerce/ChooseUs";
import DevelopmentProcess from "@/components/ecommerce/DevelopmentProcess";
import EcommerceChallenges from "@/components/ecommerce/EcommerceChallenges";
import EcommerceHero from "@/components/ecommerce/EcommerceHero";
import EcommerceServices from "@/components/ecommerce/EcommerceServices";
import Layout from "@/components/layout/Layout";

const Ecommerce = () => {
  return (
    <Layout enableSmoothScroll>
      <EcommerceHero />
      <EcommerceServices />
      <EcommerceChallenges />
      <DevelopmentProcess />
      <ChooseUs />
    </Layout>
  );
};

export default Ecommerce;
