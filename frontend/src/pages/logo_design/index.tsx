import Layout from "@/components/layout/Layout";
import LogoDesignChallenges from "@/components/logo_design/LogoDesignChallenges";
import LogoDesignDevelopment from "@/components/logo_design/LogoDesignDevelopment";
import LogoDesignExpertise from "@/components/logo_design/LogoDesignExpertise";
import LogoDesignHero from "@/components/logo_design/LogoDesignHero";
import LogoDesignServices from "@/components/logo_design/LogoDesignServices";
import LogoDesignWork from "@/components/logo_design/LogoDesignWork";

const LogoDesign = () => {
  return (
    <Layout enableSmoothScroll>
      <LogoDesignHero />
      <LogoDesignServices />
      <LogoDesignChallenges />
      <LogoDesignDevelopment />
      {/* <LogoDesignWork /> */}
      <LogoDesignExpertise />
    </Layout>
  );
};

export default LogoDesign;
