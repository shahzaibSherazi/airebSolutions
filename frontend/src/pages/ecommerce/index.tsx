import ChooseUs from "@/components/ecommerce/ChooseUs";
import DevelopmentProcess from "@/components/ecommerce/DevelopmentProcess";
import EcommerceChallenges from "@/components/ecommerce/EcommerceChallenges";
import EcommerceHero from "@/components/ecommerce/EcommerceHero";
import EcommerceServices from "@/components/ecommerce/EcommerceServices";
import Layout from "@/components/layout/Layout";
import ScrollTopButton from "@/components/ui/ScrollTopButton";

const Ecommerce = () => {
  return (
    <Layout enableSmoothScroll>
      <EcommerceHero />
      <EcommerceServices />
      <EcommerceChallenges />
      <DevelopmentProcess />
      <ChooseUs />
      <ScrollTopButton />
    </Layout>
  );
};

export default Ecommerce;
