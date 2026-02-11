import DevOpsCycle from "@/components/dev_ops/DevOpsCycle";
import DevOpsHero from "@/components/dev_ops/DevOpsHero";
import DevOpsServices from "@/components/dev_ops/DevOpsServices";
import OurExpertise from "@/components/dev_ops/Expertise";
import Layout from "@/components/layout/Layout";

const DevOps = () => {
  return (
    <Layout enableSmoothScroll>
      <DevOpsHero />
      <DevOpsServices />
      <DevOpsCycle />
      <OurExpertise />
    </Layout>
  );
};

export default DevOps;
