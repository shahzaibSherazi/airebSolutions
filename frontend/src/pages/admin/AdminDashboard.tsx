import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "@/components/admin/AdminLayout";
import { useAuthStore } from "@/store/authStore";
import { useContentStore } from "@/store/contentStore";
import { blogAPI } from "@/services/api/blogAPI";
import { whitePaperAPI } from "@/services/api/whitePaperAPI";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, BookOpen, FileText, Eye, Edit2 } from "lucide-react";
import { formatDate } from "@/utils/helpers";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();
  const { blogs, whitePapers, setBlogs, setWhitePapers } = useContentStore();
  const [stats, setStats] = useState({
    totalBlogs: 0,
    totalWP: 0,
    totalViews: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/admin/login");
      return;
    }
    fetchDashboardData();
  }, [isAuthenticated, navigate]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const [blogsRes, wpRes] = await Promise.all([
        blogAPI.getBlogs(1, 5, "published"),
        whitePaperAPI.getWhitePapers(1, 5, "published"),
      ]);

      if (blogsRes.blogs) setBlogs(blogsRes.blogs);
      if (wpRes.whitePapers) setWhitePapers(wpRes.whitePapers);

      setStats({
        totalBlogs: blogsRes.total || 0,
        totalWP: wpRes.total || 0,
        totalViews:
          (blogsRes.blogs || []).reduce((sum, b) => sum + (b.views || 0), 0) +
          (wpRes.whitePapers || []).reduce((sum, w) => sum + (w.views || 0), 0),
      });
    } catch (error) {
      console.error("Failed to fetch dashboard data", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout
      title="Dashboard"
      subtitle="Welcome back! Here's your content overview.">
      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-[#0a0f1f] to-[#02070F] border-primary/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-white/80 text-sm font-medium flex items-center gap-2">
              <BookOpen className="text-primary" size={18} /> Total Blogs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">
              {stats.totalBlogs}
            </div>
            <p className="text-white/50 text-xs mt-2">Published & Drafts</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#0a0f1f] to-[#02070F] border-primary/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-white/80 text-sm font-medium flex items-center gap-2">
              <FileText className="text-primary" size={18} /> White Papers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">
              {stats.totalWP}
            </div>
            <p className="text-white/50 text-xs mt-2">Published & Drafts</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#0a0f1f] to-[#02070F] border-primary/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-white/80 text-sm font-medium flex items-center gap-2">
              <Eye className="text-primary" size={18} /> Total Views
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">
              {stats.totalViews.toLocaleString()}
            </div>
            <p className="text-white/50 text-xs mt-2">Across all content</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent blogs */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">Recent Blogs</h2>
            <Button
              onClick={() => navigate("/admin/blogs")}
              className="bg-primary hover:bg-primary/90 text-white text-xs">
              <Plus size={14} className="mr-1" /> New Blog
            </Button>
          </div>

          <div className="space-y-3">
            {blogs.slice(0, 5).map((blog) => (
              <div
                key={blog._id}
                className="p-4 bg-gradient-to-r from-[#0a0f1f] to-[#02070F] border border-primary/20 rounded-lg hover:border-primary/50 transition-all">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-white font-medium line-clamp-1">
                      {blog.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2 text-xs text-white/60">
                      <span className="capitalize">{blog.category}</span>
                      <span>•</span>
                      <span>{blog.status}</span>
                      <span>•</span>
                      <span>{blog.views || 0} views</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigate(`/admin/blogs/${blog._id}`)}
                    className="text-primary hover:bg-primary/10">
                    <Edit2 size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent white papers */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">
              Recent White Papers
            </h2>
            <Button
              onClick={() => navigate("/admin/whitepapers")}
              className="bg-primary hover:bg-primary/90 text-white text-xs">
              <Plus size={14} className="mr-1" /> New Paper
            </Button>
          </div>

          <div className="space-y-3">
            {whitePapers.slice(0, 5).map((paper) => (
              <div
                key={paper._id}
                className="p-4 bg-gradient-to-r from-[#0a0f1f] to-[#02070F] border border-primary/20 rounded-lg hover:border-primary/50 transition-all">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-white font-medium line-clamp-1">
                      {paper.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2 text-xs text-white/60">
                      <span className="capitalize">{paper.category}</span>
                      <span>•</span>
                      <span>{paper.status}</span>
                      <span>•</span>
                      <span>{paper.downloads || 0} downloads</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigate(`/admin/whitepapers/${paper._id}`)}
                    className="text-primary hover:bg-primary/10">
                    <Edit2 size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
