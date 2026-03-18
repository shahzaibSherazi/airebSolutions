import Layout from "@/components/layout/Layout";
import AllCaseStudies from "@/components/resources/case-studies/AllCaseStudies";
import CaseStudiesHero from "@/components/resources/case-studies/CaseStudiesHero";
const CaseStudy = () => {
  return (
    <Layout enableSmoothScroll>
      <CaseStudiesHero />
      <AllCaseStudies />
    </Layout>
  );
};

export default CaseStudy;
