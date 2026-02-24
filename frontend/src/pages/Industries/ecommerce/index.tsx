import EcommerceCycle from "@/components/Industries/ecommerce/EcommerceCycle";
import EcommerceExpertise from "@/components/Industries/ecommerce/EcommerceExpertise";
import EcommerceHero from "@/components/Industries/ecommerce/EcommerceHero";
import EcommerceServices from "@/components/Industries/ecommerce/EcommerceServices";
import EcommerceSolutions from "@/components/Industries/ecommerce/EcommerceSolutions";
import EcommerceTechStack from "@/components/Industries/ecommerce/EcommerceTechStak";
import Layout from "@/components/layout/Layout";

const IndustriesEcommerce = () => {
  return (
    <Layout enableSmoothScroll>
      <EcommerceHero />
      <EcommerceSolutions />
      <EcommerceServices />
      <EcommerceCycle />
      <EcommerceTechStack />
      <EcommerceExpertise />
    </Layout>
  );
};

export default IndustriesEcommerce;
