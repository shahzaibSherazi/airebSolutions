import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "@/components/admin/AdminLayout";
import { useContentStore, Blog } from "@/store/contentStore";
import { blogAPI } from "@/services/api/blogAPI";
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
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { fileToBase64, validateImageFile, generateSlug } from "@/utils/helpers";

const DEFAULT_CATEGORIES = [
  "Engineering",
  "AI & SaaS",
  "Humanities",
  "Design Systems",
  "Microservice",
];

const sectionsToHtml = (sections: any[] = []) => {
  if (!sections || sections.length === 0) return "";

  return sections
    .map((section) => {
      const heading = section.heading ? `<h2>${section.heading}</h2>` : "";
      const htmlContent = (section.content || [])
        .map((item: any) => {
          if (item.type === "p" || item.type === "subheading") {
            const tag = item.type === "subheading" ? "h3" : "p";
            return `<${tag}>${item.text}</${tag}>`;
          }
          if (item.type === "ul") {
            const items = (item.items || [])
              .map((li: string) => `<li>${li}</li>`)
              .join("");
            return `<ul>${items}</ul>`;
          }
          if (item.type === "ol") {
            const items = (item.items || [])
              .map((li: string) => `<li>${li}</li>`)
              .join("");
            return `<ol>${items}</ol>`;
          }
          return "";
        })
        .join("");

      return `${heading}${htmlContent}`;
    })
    .join("");
};

export default function BlogForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { blogs, addBlog, updateBlog } = useContentStore();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [allBlogs, setAllBlogs] = useState<Blog[]>([]);
  const [sectionInput, setSectionInput] = useState({
    heading: "",
    content: "",
    type: "p" as "p" | "subheading" | "ul" | "ol",
    items: [] as string[],
  });
  const [editingSectionIndex, setEditingSectionIndex] = useState<number | null>(
    null,
  );
  const [editingContentIndex, setEditingContentIndex] = useState<number | null>(
    null,
  );
  const [contentBlocks, setContentBlocks] = useState<any[]>([]);

  const [formData, setFormData] = useState<Blog>({
    title: "",
    category: "",
    author: "Airebsolution Teams",
    readTime: "5 min read",
    intro: "",
    contentHtml: "",
    image: "",
    sections: [],
    relatedIds: [],
    status: "draft",
  });

  const [categories, setCategories] = useState<string[]>(DEFAULT_CATEGORIES);

  useEffect(() => {
    const init = async () => {
      await fetchCategories(); // categories first
      await fetchAllBlogs(); // then blogs list
      if (id) {
        await fetchBlog(); // then form data — all selects already populated
      } else {
        setLoading(false);
      }
    };
    init();
  }, [id]);

  const fetchBlog = async () => {
    try {
      const res = await blogAPI.getBlog(id!);
      if (res.success) {
        setFormData({
          ...res.blog,
          contentHtml:
            res.blog.contentHtml || sectionsToHtml(res.blog.sections || []),
          sections: res.blog.sections || [],
          relatedIds: res.blog.relatedIds || [],
        });
        if (res.blog.image) setImagePreview(res.blog.image);
      }
    } catch (error: any) {
      setError(error.response?.data?.message || "Failed to load blog");
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await blogAPI.getCategories();
      console.log("categories response", res);
      if (res.success) {
        setCategories(res.categories);
      }
    } catch (error) {
      console.error("Failed to fetch categories");
    }
  };

  const fetchAllBlogs = async () => {
    try {
      const res = await blogAPI.getBlogs(1, 100, "published");
      if (res.success) {
        setAllBlogs(res.blogs.filter((blog: Blog) => blog._id !== id));
      }
    } catch (error) {
      console.error("Failed to fetch blogs for related posts");
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
      const base64 = await fileToBase64(file);
      setFormData({ ...formData, image: base64 });
      setImagePreview(base64);
      setError("");
    } catch (err) {
      setError("Failed to process image");
    }
  };

  const addSection = () => {
    if (!sectionInput.heading.trim()) return;
    if (contentBlocks.length === 0) return;

    const newSection = {
      id: `section-${Date.now()}`,
      heading: sectionInput.heading,
      content: contentBlocks,
    };

    setFormData({
      ...formData,
      sections: [...formData.sections, newSection],
    });

    // Reset form
    setSectionInput({
      heading: "",
      content: "",
      type: "p",
      items: [],
    });
    setContentBlocks([]);
  };

  const updateSection = (index: number) => {
    if (!sectionInput.heading.trim()) return;
    if (contentBlocks.length === 0) return;

    const updatedSections = [...formData.sections];
    updatedSections[index] = {
      ...updatedSections[index],
      heading: sectionInput.heading,
      content: contentBlocks,
    };

    setFormData({ ...formData, sections: updatedSections });

    // Reset form
    setSectionInput({
      heading: "",
      content: "",
      type: "p",
      items: [],
    });
    setContentBlocks([]);
    setEditingSectionIndex(null);
  };

  const editSection = (index: number) => {
    console.log("currentsection", formData.sections.length);
    const section = formData.sections[index];
    setEditingSectionIndex(index);
    setContentBlocks(section.content || []);
    setSectionInput({
      heading: section.heading,
      content: "",
      type: "p",
      items: [],
    });
    setEditingContentIndex(null);
  };

  const addContentBlockToSection = () => {
    const newBlock: any = {};

    if (sectionInput.type === "p" || sectionInput.type === "subheading") {
      if (!sectionInput.content.trim()) return;
      newBlock.type = sectionInput.type;
      newBlock.text = sectionInput.content;
    } else if (sectionInput.type === "ul" || sectionInput.type === "ol") {
      if (sectionInput.items.length === 0) return;
      newBlock.type = sectionInput.type;
      newBlock.items = sectionInput.items.filter((item) => item.trim());
    }

    setContentBlocks([...contentBlocks, newBlock]);

    // Reset input
    setSectionInput({
      heading: sectionInput.heading,
      content: "",
      type: "p",
      items: [],
    });
  };

  const editContentBlock = (index: number) => {
    const block = contentBlocks[index];
    setSectionInput({
      heading: sectionInput.heading,
      content: block.text || "",
      type: block.type,
      items: block.items || [],
    });
    setEditingContentIndex(index);
  };

  const updateContentBlock = (index: number) => {
    const newBlock: any = {};

    if (sectionInput.type === "p" || sectionInput.type === "subheading") {
      if (!sectionInput.content.trim()) return;
      newBlock.type = sectionInput.type;
      newBlock.text = sectionInput.content;
    } else if (sectionInput.type === "ul" || sectionInput.type === "ol") {
      if (sectionInput.items.length === 0) return;
      newBlock.type = sectionInput.type;
      newBlock.items = sectionInput.items.filter((item) => item.trim());
    }

    const updated = [...contentBlocks];
    updated[index] = newBlock;
    setContentBlocks(updated);

    setSectionInput({
      heading: sectionInput.heading,
      content: "",
      type: "p",
      items: [],
    });
    setEditingContentIndex(null);
  };

  const deleteContentBlock = (index: number) => {
    setContentBlocks(contentBlocks.filter((_, i) => i !== index));
  };

  const deleteSection = (index: number) => {
    setFormData({
      ...formData,
      sections: formData.sections.filter((_, i) => i !== index),
    });
  };

  const addListItem = () => {
    setSectionInput({
      ...sectionInput,
      items: [...sectionInput.items, ""],
    });
  };

  const updateListItem = (index: number, value: string) => {
    const newItems = [...sectionInput.items];
    newItems[index] = value;
    setSectionInput({
      ...sectionInput,
      items: newItems,
    });
  };

  const removeListItem = (index: number) => {
    setSectionInput({
      ...sectionInput,
      items: sectionInput.items.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (
      !formData.title ||
      !formData.category ||
      !formData.image ||
      !formData.contentHtml?.trim()
    ) {
      setError("Please fill in all required fields");
      return;
    }

    setSaving(true);

    const payload = {
      ...formData,
      sections: formData.sections?.length ? formData.sections : [],
    };

    try {
      if (id) {
        const res = await blogAPI.updateBlog(id, payload);
        if (res.success) {
          updateBlog(res.blog);
          navigate("/admin/blogs");
        }
      } else {
        const res = await blogAPI.createBlog(payload);
        if (res.success) {
          addBlog(res.blog);
          navigate("/admin/blogs");
        }
      }
    } catch (error: any) {
      setError(error.response?.data?.message || "Failed to save blog");
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
    <AdminLayout title={id ? "Edit Blog" : "Create New Blog"}>
      <div className="max-w-6xl mx-auto space-y-6 pb-8">
        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-3">
            <AlertCircle
              className="text-red-500 flex-shrink-0 mt-0.5"
              size={18}
            />
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Info Section */}
          <div className="bg-white/5 border border-primary/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              Basic Information
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Title */}
              <div className="lg:col-span-2">
                <label className="block text-white font-medium mb-2">
                  Blog Title *
                </label>
                <Input
                  placeholder="Enter blog title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  required
                  className="bg-white/5 border-primary/20 text-white"
                />
              </div>

              {/* Category & Author */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Category *
                </label>
                <Select
                  key={`category-${formData.category}`} // ← ADD THIS
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

              {/* Read Time & Status */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Read Time
                </label>
                <Input
                  placeholder="e.g., 5 min read"
                  value={formData.readTime}
                  onChange={(e) =>
                    setFormData({ ...formData, readTime: e.target.value })
                  }
                  className="bg-white/5 border-primary/20 text-white"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Status
                </label>
                <Select
                  key={`status-${formData.status}`} // ← ADD THIS
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

              {/* Intro */}
              <div className="lg:col-span-2">
                <label className="block text-white font-medium mb-2">
                  Intro
                </label>
                <Textarea
                  placeholder="Brief introduction to your blog..."
                  value={formData.intro}
                  onChange={(e) =>
                    setFormData({ ...formData, intro: e.target.value })
                  }
                  rows={3}
                  className="bg-white/5 border-primary/20 text-white"
                />
              </div>
            </div>
          </div>

          {/* Featured Image Section */}
          <div className="bg-white/5 border border-primary/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              Featured Image
            </h3>
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
                      setFormData({ ...formData, image: "" });
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
                  Click to upload image
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

          {/* Related Posts Section */}
          <div className="bg-white/5 border border-primary/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              Related Posts
            </h3>
            <div className="bg-white/5 border border-primary/20 rounded-lg p-4 max-h-48 overflow-y-auto">
              {allBlogs.length > 0 ? (
                <div className="space-y-2">
                  {allBlogs.map((blog) => (
                    <label
                      key={blog._id}
                      className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={
                          formData.relatedIds?.includes(blog._id) || false
                        }
                        onChange={(e) => {
                          const currentRelated = formData.relatedIds || [];
                          if (e.target.checked) {
                            setFormData({
                              ...formData,
                              relatedIds: [...currentRelated, blog._id],
                            });
                          } else {
                            setFormData({
                              ...formData,
                              relatedIds: currentRelated.filter(
                                (id) => id !== blog._id,
                              ),
                            });
                          }
                        }}
                        className="rounded border-primary/20 bg-white/10 text-primary focus:ring-primary"
                      />
                      <span className="text-white/80 text-sm">
                        {blog.title}
                      </span>
                    </label>
                  ))}
                </div>
              ) : (
                <p className="text-white/50 text-sm">
                  No published blogs available
                </p>
              )}
            </div>
          </div>

          {/* Blog Content */}
          <div className="bg-white/5 border border-primary/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              Blog Content
            </h3>
            <p className="text-white/70 text-sm mb-3">
              Use the rich text editor to write and format the full blog
              content.
            </p>
            <ReactQuill
              theme="snow"
              value={formData.contentHtml || ""}
              onChange={(value) =>
                setFormData({ ...formData, contentHtml: value })
              }
              className="bg-white rounded-lg text-black"
            />
          </div>
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/admin/blogs")}
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
                "Update Blog"
              ) : (
                "Create Blog"
              )}
            </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
