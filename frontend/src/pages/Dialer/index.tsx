import BenifitsDialer from "@/components/dialer/BenifitsDialer";
import DialerChallenges from "@/components/dialer/DialerChallenges";
import DialerHero from "@/components/dialer/DialerHero";
import DialerServices from "@/components/dialer/DialerServices";
import DialerSolutions from "@/components/dialer/Dialersolutions";
import Layout from "@/components/layout/Layout";

const Dialer = () => {
  return (
    <Layout enableSmoothScroll>
      <DialerHero />
      <DialerServices />
      <DialerChallenges />
      <DialerSolutions />
      <BenifitsDialer />
    </Layout>
  );
};

export default Dialer;
