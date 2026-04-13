import ApiChallenges from "@/components/api_integration/ApiChallenges";
import ApiIntegrationHero from "@/components/api_integration/ApiIntegrationHero";
import ApiServices from "@/components/api_integration/ApiServices";
import OurWork from "@/components/api_integration/OurWork";
import OurWorkProcess from "@/components/api_integration/OurWorkProcess";
import WhyChooseUs from "@/components/api_integration/WhyChooseUs";
import Layout from "@/components/layout/Layout";

const ApiIntegration = () => {
  return (
    <Layout enableSmoothScroll>
      <ApiIntegrationHero />
      <ApiServices />
      <ApiChallenges />
      <OurWorkProcess />
      {/* <OurWork /> */}
      <WhyChooseUs />
    </Layout>
  );
};

export default ApiIntegration;
