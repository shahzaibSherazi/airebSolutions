import AboutUsHero from "@/components/aboutUs/AboutUsHero";
import AboutUsSolutions from "@/components/aboutUs/AboutUsSolutions";
import CreativeMinds from "@/components/aboutUs/CreativeMinds";
import DynamicLeadership from "@/components/aboutUs/DynamicLeadership";
import Layout from "@/components/layout/Layout";

const AboutUs = () => {
  return (
    <Layout>
      <AboutUsHero />
      <AboutUsSolutions />
      <DynamicLeadership />
      <CreativeMinds />
    </Layout>
  );
};

export default AboutUs;
