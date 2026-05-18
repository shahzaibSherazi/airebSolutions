import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "@/components/admin/AdminLayout";
import { useContentStore, WhitePaper } from "@/store/contentStore";
import { whitePaperAPI } from "@/services/api/whitePaperAPI";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertCircle, Loader2, Upload, X, Plus, Trash2 } from "lucide-react";
import { validateImageFile, validatePDFFile } from "@/utils/helpers";
import { getImageUrl } from "@/utils/imageUtils";

const DEFAULT_CATEGORIES = ["Development", "Design", "Strategy", "Technology"];

export default function WhitePaperForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { whitePapers, addWhitePaper, updateWhitePaper } = useContentStore();

  const [loading, setLoading] = useState(!id);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const [formData, setFormData] = useState<WhitePaper>({
    title: "",
    description: "",
    image: "",
    pdfUrl: "",
    category: "",
    author: "Airebsolution Teams",
    keyPoints: [],
    status: "draft",
  });

  const [keyPointInput, setKeyPointInput] = useState("");
  const [categories, setCategories] = useState<string[]>(DEFAULT_CATEGORIES);

  useEffect(() => {
    if (id) {
      const paper = whitePapers.find((p) => p._id === id);
      if (paper) {
        setFormData(paper);
        if (paper.image) setImagePreview(getImageUrl(paper.image));
        setLoading(false);
      } else {
        fetchWhitePaper();
      }
    } else {
      setLoading(false);
    }
    fetchCategories();
  }, [id]);

  const fetchWhitePaper = async () => {
    try {
      const res = await whitePaperAPI.getWhitePaper(id!);
      if (res.success) {
        setFormData(res.whitePaper);
        if (res.whitePaper.image)
          setImagePreview(getImageUrl(res.whitePaper.image));
      }
    } catch (error: any) {
      setError(error.response?.data?.message || "Failed to load white paper");
    } finally {
      setLoading(false);
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

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validation = validateImageFile(file);
    if (!validation.valid) {
      setError(validation.error || "Invalid file");
      return;
    }

    try {
      const res = await whitePaperAPI.uploadImage(file);
      if (res.success) {
        setFormData({
          ...formData,
          image: res.file.path,
          imageFileName: res.file.filename,
        });
        setImagePreview(res.file.url);
        setError("");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to upload image");
    }
  };

  const handlePDFUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validation = validatePDFFile(file);
    if (!validation.valid) {
      setError(validation.error || "Invalid file");
      return;
    }

    try {
      const res = await whitePaperAPI.uploadPDF(file);
      if (res.success) {
        setFormData({
          ...formData,
          pdfUrl: res.file.path,
          pdfFileName: res.file.filename,
        });
        setError("");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to upload PDF");
    }
  };

  const handleAddKeyPoint = () => {
    if (keyPointInput.trim()) {
      setFormData({
        ...formData,
        keyPoints: [...(formData.keyPoints || []), keyPointInput.trim()],
      });
      setKeyPointInput("");
    }
  };

  const handleRemoveKeyPoint = (index: number) => {
    setFormData({
      ...formData,
      keyPoints: (formData.keyPoints || []).filter((_, i) => i !== index),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (
      !formData.title ||
      !formData.category ||
      !formData.image ||
      !formData.pdfUrl
    ) {
      setError("Please fill in all required fields");
      return;
    }

    setSaving(true);

    try {
      if (id) {
        const res = await whitePaperAPI.updateWhitePaper(id, formData);
        if (res.success) {
          updateWhitePaper(res.whitePaper);
          navigate("/admin/whitepapers");
        }
      } else {
        const res = await whitePaperAPI.createWhitePaper(formData);
        if (res.success) {
          addWhitePaper(res.whitePaper);
          navigate("/admin/whitepapers");
        }
      }
    } catch (error: any) {
      setError(error.response?.data?.message || "Failed to save white paper");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center p-12">
          <Loader2 className="animate-spin text-primary" size={32} />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title={id ? "Edit White Paper" : "Create New White Paper"}>
      <div className="max-w-4xl mx-auto">
        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-3">
            <AlertCircle
              className="text-red-500 flex-shrink-0 mt-0.5"
              size={18}
            />
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-white font-medium mb-2">
              White Paper Title *
            </label>
            <Input
              placeholder="Enter white paper title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
              className="bg-white/5 border-primary/20 text-white"
            />
          </div>

          {/* Category & Author */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white font-medium mb-2">
                Category *
              </label>
              <Select
                value={formData.category}
                onValueChange={(value) =>
                  setFormData({ ...formData, category: value })
                }>
                <SelectTrigger className="bg-white/5 border-primary/20 text-white">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent className="bg-[#02070F] border-primary/20">
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">
                Author
              </label>
              <Input
                placeholder="Author name"
                value={formData.author}
                onChange={(e) =>
                  setFormData({ ...formData, author: e.target.value })
                }
                className="bg-white/5 border-primary/20 text-white"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-white font-medium mb-2">
              Description
            </label>
            <Textarea
              placeholder="Brief description of the white paper..."
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              rows={3}
              className="bg-white/5 border-primary/20 text-white"
            />
          </div>

          {/* Featured Image */}
          <div>
            <label className="block text-white font-medium mb-2">
              Featured Image *
              {formData.imageFileName && (
                <span className="text-primary text-sm ml-2">
                  ({formData.imageFileName})
                </span>
              )}
            </label>
            <div className="space-y-3">
              {imagePreview && (
                <div className="relative">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setFormData({
                        ...formData,
                        image: "",
                        imageFileName: "",
                      });
                      setImagePreview("");
                    }}
                    className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg">
                    <X size={16} />
                  </button>
                </div>
              )}
              <label className="block border-2 border-dashed border-primary/30 rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 transition-colors">
                <Upload className="mx-auto text-primary mb-2" size={24} />
                <div className="text-white font-medium">
                  Click to upload featured image
                </div>
                <div className="text-white/50 text-sm">
                  PNG, JPG, WebP up to 5MB
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* PDF Upload */}
          <div>
            <label className="block text-white font-medium mb-2">
              White Paper PDF *
              {formData.pdfFileName && (
                <span className="text-primary text-sm ml-2">
                  ({formData.pdfFileName})
                </span>
              )}
            </label>
            <label className="block border-2 border-dashed border-primary/30 rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 transition-colors">
              <Upload className="mx-auto text-primary mb-2" size={24} />
              <div className="text-white font-medium">Click to upload PDF</div>
              <div className="text-white/50 text-sm">PDF files up to 10MB</div>
              <input
                type="file"
                accept=".pdf"
                onChange={handlePDFUpload}
                className="hidden"
              />
            </label>
          </div>

          {/* Key Points */}
          <div>
            <label className="block text-white font-medium mb-2">
              Key Points
            </label>
            <div className="flex gap-2 mb-3">
              <Input
                placeholder="Add a key point..."
                value={keyPointInput}
                onChange={(e) => setKeyPointInput(e.target.value)}
                onKeyPress={(e) =>
                  e.key === "Enter" && (e.preventDefault(), handleAddKeyPoint())
                }
                className="bg-white/5 border-primary/20 text-white"
              />
              <Button
                type="button"
                onClick={handleAddKeyPoint}
                className="bg-primary/20 hover:bg-primary/30 text-primary">
                <Plus size={16} />
              </Button>
            </div>
            {(formData.keyPoints || []).length > 0 && (
              <div className="space-y-2">
                {formData.keyPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-white/5 p-3 rounded-lg border border-primary/20">
                    <span className="text-white text-sm">{point}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveKeyPoint(index)}
                      className="text-red-500 hover:text-red-400">
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Status */}
          <div>
            <label className="block text-white font-medium mb-2">Status</label>
            <Select
              value={formData.status}
              onValueChange={(value: any) =>
                setFormData({ ...formData, status: value })
              }>
              <SelectTrigger className="bg-white/5 border-primary/20 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#02070F] border-primary/20">
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="published">Published</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Submit */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/admin/whitepapers")}
              className="border-primary/30">
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={saving}
              className="bg-primary hover:bg-primary/90 text-white flex-1">
              {saving ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : id ? (
                "Update White Paper"
              ) : (
                "Create White Paper"
              )}
            </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
