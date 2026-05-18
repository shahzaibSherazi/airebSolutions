import EducationDevelopmentCycle from "@/components/Industries/education/EducationDevelopmentCycle";
import EducationExpertise from "@/components/Industries/education/EducationExpertise";
import EducationHero from "@/components/Industries/education/EducationHero";
import EducationServices from "@/components/Industries/education/EducationServices";
import EducationSolutions from "@/components/Industries/education/EducationSolutions";
import EducationTechStack from "@/components/Industries/education/EducationTechStack";
import Layout from "@/components/layout/Layout";
import ScrollTopButton from "@/components/ui/ScrollTopButton";

const Education = () => {
  return (
    <Layout enableSmoothScroll>
      <EducationHero />
      <EducationSolutions />
      <EducationServices />
      <EducationDevelopmentCycle />
      <EducationTechStack />
      <EducationExpertise />
      <ScrollTopButton />
    </Layout>
  );
};

export default Education;
