import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "@/components/admin/AdminLayout";
import { useContentStore, WhitePaper } from "@/store/contentStore";
import { whitePaperAPI } from "@/services/api/whitePaperAPI";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertCircle,
  Loader2,
  Trash2,
  Edit2,
  Download,
  Plus,
} from "lucide-react";
import { formatDate } from "@/utils/helpers";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function WhitePapersManagement() {
  const navigate = useNavigate();
  const {
    whitePapers,
    setWhitePapers,
    removeWhitePaper,
    wpLoading,
    setWpLoading,
    wpError,
    setWpError,
  } = useContentStore();

  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("all");
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [total, setTotal] = useState(0);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetchWhitePapers();
    fetchCategories();
  }, [page, status, category, search]);

  const fetchWhitePapers = async () => {
    setWpLoading(true);
    setWpError(null);

    try {
      const res = await whitePaperAPI.getWhitePapers(
        page,
        10,
        status === "all" ? "published" : status,
        category === "all" ? undefined : category,
        search || undefined,
      );

      if (res.success) {
        setWhitePapers(res.whitePapers);
        setTotal(res.total);
      }
    } catch (error: any) {
      setWpError(
        error.response?.data?.message || "Failed to fetch white papers",
      );
    } finally {
      setWpLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await whitePaperAPI.getCategories();
      if (res.success) {
        setCategories(res.categories);
      }
    } catch (error) {
      console.error("Failed to fetch categories");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await whitePaperAPI.deleteWhitePaper(id);
      if (res.success) {
        removeWhitePaper(id);
        setDeleteId(null);
      }
    } catch (error: any) {
      setWpError(
        error.response?.data?.message || "Failed to delete white paper",
      );
    }
  };

  return (
    <AdminLayout
      title="White Papers Management"
      subtitle="Manage and publish your white papers.">
      {/* Toolbar */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            onClick={() => navigate("/admin/whitepapers/create")}
            className="bg-primary hover:bg-primary/90 text-white">
            <Plus size={16} className="mr-2" /> New White Paper
          </Button>

          <Input
            placeholder="Search white papers..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="bg-white/5 border-primary/20 text-white flex-1"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Select
            value={status}
            onValueChange={(value) => {
              setStatus(value);
              setPage(1);
            }}>
            <SelectTrigger className="w-32 bg-white/5 border-primary/20 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#02070F] border-primary/20">
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={category}
            onValueChange={(value) => {
              setCategory(value);
              setPage(1);
            }}>
            <SelectTrigger className="w-40 bg-white/5 border-primary/20 text-white">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent className="bg-[#02070F] border-primary/20">
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Error */}
      {wpError && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-3">
          <AlertCircle
            className="text-red-500 flex-shrink-0 mt-0.5"
            size={18}
          />
          <p className="text-red-400 text-sm">{wpError}</p>
        </div>
      )}

      {/* Table */}
      <div className="bg-gradient-to-br from-[#0a0f1f] to-[#02070F] border border-primary/20 rounded-lg overflow-hidden">
        {wpLoading ? (
          <div className="p-8 flex items-center justify-center">
            <Loader2 className="animate-spin text-primary" size={24} />
          </div>
        ) : whitePapers.length === 0 ? (
          <div className="p-8 text-center text-white/50">
            No white papers found. Create your first one!
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-primary/20">
                <tr className="bg-primary/5">
                  <th className="px-4 py-3 text-left font-semibold text-white">
                    Title
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-white">
                    Category
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-white">
                    Status
                  </th>
                  <th className="px-4 py-3 text-right font-semibold text-white">
                    Downloads
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-white">
                    Published
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-white">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/10">
                {whitePapers.map((wp) => (
                  <tr
                    key={wp._id}
                    className="hover:bg-primary/5 transition-colors">
                    <td className="px-4 py-3 text-white font-medium truncate">
                      {wp.title}
                    </td>
                    <td className="px-4 py-3 text-white/70">{wp.category}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          wp.status === "published"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}>
                        {wp.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right text-white/70 flex items-center justify-end gap-1">
                      <Download size={14} />
                      {wp.downloads || 0}
                    </td>
                    <td className="px-4 py-3 text-white/70">
                      {wp.publishedDate ? formatDate(wp.publishedDate) : "-"}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            navigate(`/admin/whitepapers/${wp._id}`)
                          }
                          className="text-primary hover:bg-primary/10">
                          <Edit2 size={16} />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setDeleteId(wp._id || "")}
                          className="text-red-500 hover:bg-red-500/10">
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Pagination */}
      {total > 0 && (
        <div className="mt-6 flex items-center justify-between">
          <p className="text-white/60 text-sm">
            Showing {(page - 1) * 10 + 1} to {Math.min(page * 10, total)} of{" "}
            {total}
          </p>
          <div className="flex gap-2">
            <Button
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
              variant="outline"
              className="border-primary/30">
              Previous
            </Button>
            <Button
              onClick={() => setPage(page + 1)}
              disabled={page * 10 >= total}
              variant="outline"
              className="border-primary/30">
              Next
            </Button>
          </div>
        </div>
      )}

      {/* Delete dialog */}
      <AlertDialog
        open={!!deleteId}
        onOpenChange={(open) => !open && setDeleteId(null)}>
        <AlertDialogContent className="bg-[#02070F] border-primary/30">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white">
              Delete White Paper
            </AlertDialogTitle>
            <AlertDialogDescription className="text-white/60">
              Are you sure you want to delete this white paper? This action
              cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex gap-3 justify-end">
            <AlertDialogCancel className="border-primary/30">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteId && handleDelete(deleteId)}
              className="bg-red-600 hover:bg-red-700">
              Delete
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </AdminLayout>
  );
}
