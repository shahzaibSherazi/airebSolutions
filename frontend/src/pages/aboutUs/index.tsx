import AboutUsHero from "@/components/aboutUs/AboutUsHero";
import AboutUsSolutions from "@/components/aboutUs/AboutUsSolutions";
import CreativeMinds from "@/components/aboutUs/CreativeMinds";
import DynamicLeadership from "@/components/aboutUs/DynamicLeadership";
import OurValues from "@/components/aboutUs/OurValues";
import Layout from "@/components/layout/Layout";

const AboutUs = () => {
  return (
    <Layout enableSmoothScroll>
      <AboutUsHero />
      <AboutUsSolutions />
      <DynamicLeadership />
      <CreativeMinds />
      <OurValues />
    </Layout>
  );
};

export default AboutUs;
