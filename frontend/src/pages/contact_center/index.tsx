import ContactCenterChallenges from "@/components/contact_center/ContactCenterchallenges";
import ContactCenterExpertise from "@/components/contact_center/ContactCenterExpertise";
import ContactCenterHero from "@/components/contact_center/ContactCenterHero";
import ContactCenterProblems from "@/components/contact_center/ContactCenterProblems";
import ContactCenterProcess from "@/components/contact_center/ContactCenterProcess";
import ContactCenterServices from "@/components/contact_center/ContactCenterServices";
import ContactCenterWork from "@/components/contact_center/ContactCenterWork";
import Layout from "@/components/layout/Layout";

const ContactCenter = () => {
  return (
    <Layout enableSmoothScroll>
      <ContactCenterHero />
      <ContactCenterServices />
      <ContactCenterProblems />
      <ContactCenterProcess />
      <ContactCenterChallenges />
      {/* <ContactCenterWork /> */}
      <ContactCenterExpertise />
    </Layout>
  );
};

export default ContactCenter;
