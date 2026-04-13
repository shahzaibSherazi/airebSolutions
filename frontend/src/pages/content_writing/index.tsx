import ContentWritingChallenges from "@/components/content_writing/ContentWritingChallenges";
import ContentWritingExpertise from "@/components/content_writing/ContentwritingExpertise";
import ContentWritingHero from "@/components/content_writing/ContentWritingHero";
import ContentWritingProcess from "@/components/content_writing/ContentwritingProcess";
import ContentWritingServices from "@/components/content_writing/ContentWritingServices";
import ContentWritingWork from "@/components/content_writing/ContentWritingWork";
import Layout from "@/components/layout/Layout";

const ContentWriting = () => {
  return (
    <Layout enableSmoothScroll>
      <ContentWritingHero />
      <ContentWritingServices />
      <ContentWritingChallenges />
      <ContentWritingProcess />
      {/* <ContentWritingWork /> */}
      <ContentWritingExpertise />
    </Layout>
  );
};

export default ContentWriting;
