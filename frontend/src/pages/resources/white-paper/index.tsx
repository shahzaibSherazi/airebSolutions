import Layout from "@/components/layout/Layout";
import AllBlogs from "@/components/resources/blogs/AllBlogs";
import BlogsHero from "@/components/resources/blogs/BlogsHero";
import AllWhitePapers from "@/components/resources/white-paper/AllWhitePapers";
import WhitePaperHero from "@/components/resources/white-paper/WhitePaperHero";

const WhitePaper = () => {
  return (
    <Layout>
      <WhitePaperHero />
      <AllWhitePapers />
    </Layout>
  );
};

export default WhitePaper;
