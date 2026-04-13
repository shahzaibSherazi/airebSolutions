import CompanyLocations from "@/components/contactUs/CompanyLocations";
import ContactUsHero from "@/components/contactUs/ContactUsHero";
import Layout from "@/components/layout/Layout";

const ContactUs = () => {
  return (
    <Layout enableSmoothScroll hideContactForm>
      <ContactUsHero />
      <CompanyLocations />
    </Layout>
  );
};

export default ContactUs;
