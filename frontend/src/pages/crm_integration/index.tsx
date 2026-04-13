import ChooseUs from "@/components/crm_integration/chooseUs";
import CrmChallenges from "@/components/crm_integration/CrmChallenges";
import CrmHero from "@/components/crm_integration/CrmHero";
import CrmServices from "@/components/crm_integration/CrmServices";
import OurWork from "@/components/crm_integration/OurWork";
import SalesforceIntegration from "@/components/crm_integration/SaleForce";
import WorkProcess from "@/components/crm_integration/WorkProcess";
import Layout from "@/components/layout/Layout";

const CrmIntegration = () => {
  return (
    <Layout enableSmoothScroll>
      <CrmHero />
      <CrmServices />
      <CrmChallenges />
      <WorkProcess />
      <OurWork />
      {/* <SalesforceIntegration /> */}
      <ChooseUs />
    </Layout>
  );
};

export default CrmIntegration;
