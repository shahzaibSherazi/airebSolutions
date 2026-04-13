import Layout from "@/components/layout/Layout";
import UiDesignExpertise from "@/components/ui_ux_Design/UiDesignExpertise";
import UiDesignHero from "@/components/ui_ux_Design/UiDesignHero";
import UiDesignProcess from "@/components/ui_ux_Design/UiDesignProcess";
import UiDesignServices from "@/components/ui_ux_Design/UiDesignServices";
import UiDesignWork from "@/components/ui_ux_Design/UiDesignWork";
import UiUxChallenges from "@/components/ui_ux_Design/UiUxChallenges";

const UiDesign = () => {
  return (
    <Layout enableSmoothScroll>
      <UiDesignHero />
      <UiDesignServices />
      <UiUxChallenges />
      <UiDesignProcess />
      {/* <UiDesignWork /> */}
      <UiDesignExpertise />
    </Layout>
  );
};

export default UiDesign;
