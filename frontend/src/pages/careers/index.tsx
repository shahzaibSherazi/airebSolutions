import BenefitsSection from "@/components/careers/BenefitsSection";
import CareersHero from "@/components/careers/CareersHero";
import Layout from "@/components/layout/Layout";

const Careers = () => {
  return (
    <Layout enableSmoothScroll>
      <CareersHero />
      <BenefitsSection />
    </Layout>
  );
};

export default Careers;
