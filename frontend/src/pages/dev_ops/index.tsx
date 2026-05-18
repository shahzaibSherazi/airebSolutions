import DevOpsChallenges from "@/components/dev_ops/DevOpsChallenges";
import DevOpsCycle from "@/components/dev_ops/DevOpsCycle";
import DevOpsHero from "@/components/dev_ops/DevOpsHero";
import DevOpsServices from "@/components/dev_ops/DevOpsServices";
import DevOpsTechStack from "@/components/dev_ops/DevOpsTechStack";
import OurExpertise from "@/components/dev_ops/Expertise";
import Layout from "@/components/layout/Layout";
import ScrollTopButton from "@/components/ui/ScrollTopButton";

const DevOps = () => {
  return (
    <Layout enableSmoothScroll>
      <DevOpsHero />
      <DevOpsServices />
      <DevOpsChallenges />
      <DevOpsCycle />
      <DevOpsTechStack />
      <OurExpertise />
      <ScrollTopButton />
    </Layout>
  );
};

export default DevOps;
