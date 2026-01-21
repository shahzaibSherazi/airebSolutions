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
import ResultSection from "@/components/home/ResultSection";
import FeaturedSection from "@/components/home/FeaturedSection";
import ContactForm from "@/components/home/ContactForm";
import OurReviews from "@/components/home/OurReviews";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <AdaptableSection />
      <ResultSection />
      <FeaturedSection />
      <OurReviews />
      {/* <ProjectsSection /> */}
      {/* <WhyChooseUsSection /> */}
      {/* <TestimonialsSection /> */}
      <StrategicApproach />
      <ContactForm />
      {/* <TeamSection /> */}
      {/* <CTASection /> */}
    </Layout>
  );
};

export default Index;
