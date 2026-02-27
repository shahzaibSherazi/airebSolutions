import Layout from "@/components/layout/Layout";
import AllBlogs from "@/components/resources/blogs/AllBlogs";
import BlogsHero from "@/components/resources/blogs/BlogsHero";

const Blogs = () => {
  return (
    <Layout>
      <BlogsHero />
      <AllBlogs />
    </Layout>
  );
};

export default Blogs;
