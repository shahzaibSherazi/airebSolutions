import Layout from "@/components/layout/Layout";
import Expertise from "@/components/on_demand/Expertise";
import OnDemandDevelopment from "@/components/on_demand/OnDemandDevelopment";
import OnDemandHero from "@/components/on_demand/OnDemandHero";
import OnDemandServices from "@/components/on_demand/OnDemandServices";
import OurWork from "@/components/on_demand/OurWork";

const OnDemand = () => {
  return (
    <Layout enableSmoothScroll>
      <OnDemandHero />
      <OnDemandServices />
      <OnDemandDevelopment />
      <OurWork />
      <Expertise />
    </Layout>
  );
};

export default OnDemand;
