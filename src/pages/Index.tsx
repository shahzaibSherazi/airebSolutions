import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TeamSection from "@/components/home/TeamSection";
import CTASection from "@/components/home/CTASection";
import AdaptableSection from "@/components/home/AdaptableSection";
import StrategicApproach from "@/components/home/StrategicApproach";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <AdaptableSection/>
      <ProjectsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <StrategicApproach />
      <TeamSection />
      <CTASection />
    </Layout>
  );
};

export default Index;