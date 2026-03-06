import BlogDetail from "@/components/resources/blogs/components/BlogDetail";
import { useParams, useNavigate } from "react-router-dom";

const BlogDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <BlogDetail
      postId={Number(id)}
      onBack={() => navigate("/resources/blogs")}
      onNavigate={(newId) => navigate(`/resources/blogs/${newId}`)}
    />
  );
};
export default BlogDetailPage;
