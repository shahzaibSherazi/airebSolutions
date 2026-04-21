import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { blogAPI } from "@/services/api/blogAPI";
import { formatDate } from "@/utils/helpers";
import { getImageUrl } from "@/utils/imageUtils";
import { Blog } from "@/store/contentStore";
import { X } from "lucide-react";

const tabs = [
  "All Blogs",
  "AI & SaaS",
  "Microservices",
  "Design Systems",
  "Engineering",
];

const imageBorderStyle: React.CSSProperties = {
  border: "1px solid transparent",
  backgroundImage:
    "linear-gradient(#02070F,#02070F), linear-gradient(180deg,#000000 0%,#000000 6.73%,#4285F4 55.77%,#000000 97.12%)",
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
};
const contentBorderStyle: React.CSSProperties = {
  border: "1px solid transparent",
  backgroundImage:
    "linear-gradient(#02070F,#02070F),linear-gradient(270deg, #000000 0%, #4285F4 55.77%, #000000 97.12%)",
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
};
const readMoreBorderStyle: React.CSSProperties = {
  border: "1px solid transparent",
  backgroundImage:
    "linear-gradient(#02070F,#02070F),linear-gradient(90deg, #000000 0%, #4285F4 100%)",
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
};

function SmallCard({
  post,
  onReadMore,
}: {
  post: Blog;
  onReadMore: () => void;
}) {
  return (
    <div
      onClick={onReadMore}
      className="flex flex-col h-full group cursor-pointer">
      <div
        className="relative overflow-hidden flex-shrink-0 blogsCards_TopEdge"
        style={imageBorderStyle}>
        <img
          src={getImageUrl(post.image) || "/placeholder.svg"}
          alt={post.title}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/placeholder.svg";
          }}
          className="w-full object-contain transition-transform duration-500 group-hover:scale-105 h-full"
        />
      </div>
      <div
        className="relative flex flex-col p-4 gap-2 blogsCards_BottomEdge flex-1"
        style={contentBorderStyle}>
        <div className="grid grid-cols-[6fr,2fr] gap-6">
          <h3 className="text-white font-stoke leading-snug line-clamp-3 text-[clamp(14px,2vw,22px)]">
            {post.title}
          </h3>
          <span className="text-primary font-outfit text-[11px] flex justify-end">
            {post.readTime || "5 min read"}
          </span>
        </div>

        <div className="flex items-center justify-between pt-3 mt-auto">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <span className="text-white text-[9px] font-bold">
                {(post.author || "A").charAt(0)}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-outfit text-[10px] font-medium leading-none">
                {post.author || "Airebsolution Teams"}
              </span>
              <span className="text-white font-outfit text-[9px] leading-none mt-0.5">
                {post.publishedDate ? formatDate(post.publishedDate) : "N/A"}
              </span>
            </div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onReadMore();
            }}
            style={readMoreBorderStyle}
            className="text-primary font-outfit text-[11px] font-medium hover:text-white transition-colors duration-200 flex items-center gap-0.5 py-2 px-[clamp(6px,2vw,24px)] group">
            Read More
            <span className="group-hover:translate-x-0.5 transition-transform duration-200">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AllBlogs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const [activeTab, setActiveTab] = useState("All Blogs");
  const [currentPage, setCurrentPage] = useState(1);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const POSTS_PER_PAGE = 11;

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await blogAPI.getBlogs(1, 100, "published");
        if (res.success) {
          setBlogs(res.blogs);
        } else {
          setError("Unable to load blogs.");
        }
      } catch (err: any) {
        setError(err.response?.data?.message || "Failed to load blogs.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Apply filters based on search and category
  const filtered = blogs.filter((blog) => {
    // If there's a search query, use it
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      return (
        blog.title.toLowerCase().includes(query) ||
        blog.category.toLowerCase().includes(query) ||
        (blog.intro && blog.intro.toLowerCase().includes(query))
      );
    }
    // Otherwise use category filter
    return activeTab === "All Blogs" ? true : blog.category === activeTab;
  });

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = filtered.slice(startIndex, startIndex + POSTS_PER_PAGE);
  const largeCards = currentPosts.slice(0, 2);
  const smallCards = currentPosts.slice(2);

  return (
    <section id="all-blogs-section" className="w-full bg-[#02070F] font-outfit">
      <div className="container py-16 lg:py-24 px-2 lg:px-8">
        {/* Search Results Header */}
        {searchQuery && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-primary/20">
              <div>
                <h2 className="text-white font-stoke text-xl lg:text-2xl font-normal mb-2">
                  Search Results
                </h2>
                <p className="text-white/60 font-outfit text-sm">
                  {filtered.length}{" "}
                  {filtered.length === 1 ? "result" : "results"} found for "
                  {searchQuery}"
                </p>
              </div>
              <button
                onClick={() => setSearchParams({})}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all">
                <X size={18} />
                <span className="text-sm">Clear search</span>
              </button>
            </div>

            {/* Search results display */}
            {filtered.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {largeCards.map((post) => (
                    <SmallCard
                      key={post._id ?? post.title}
                      post={post}
                      onReadMore={() =>
                        navigate(`/resources/blogs/${post.slug || post._id}`)
                      }
                    />
                  ))}
                </div>
                {smallCards.length > 0 && (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {smallCards.map((post) => (
                      <SmallCard
                        key={post._id ?? post.title}
                        post={post}
                        onReadMore={() =>
                          navigate(`/resources/blogs/${post.slug || post._id}`)
                        }
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="py-16 text-center">
                <p className="text-white/60 text-lg mb-3">
                  No blogs found matching your search
                </p>
                <p className="text-white/40 text-sm mb-6">
                  Try different keywords or browse all our articles below
                </p>
                <button
                  onClick={() => setSearchParams({})}
                  className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-primary text-white hover:bg-primary/80 transition-all">
                  Browse All Articles
                </button>
              </div>
            )}
          </div>
        )}

        {/* Main Blogs Section */}
        <div>
          <div className="flex justify-center items-center gap-2 mb-4">
            <h2 className="text-white font-stoke text-h2 font-normal">
              {searchQuery ? "More Articles" : "Latest Blogs"}
            </h2>
            <span className="text-white/60">({blogs.length})</span>
          </div>

          <div className="flex items-center gap-1 sm:gap-2 flex-wrap justify-center mb-10">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setCurrentPage(1);
                  setSearchParams({}); // Clear search when changing tab
                }}
                className={`px-4 py-1.5 rounded-full text-sm font-medium font-outfit transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "text-white/55 hover:text-white/80 bg-white/5 hover:bg-white/10"
                }`}>
                {tab}
              </button>
            ))}
          </div>

          {loading && (
            <div className="p-8 flex items-center justify-center text-white/70">
              Loading blogs...
            </div>
          )}

          {error && (
            <div className="p-8 bg-red-500/10 border border-red-500/30 rounded-lg text-red-200 text-center">
              {error}
            </div>
          )}

          {!loading && !error && filtered.length === 0 && (
            <div className="text-center py-20 text-white/30 font-outfit">
              No blogs available yet.
            </div>
          )}

          {!loading && !error && blogs.length > 0 && !searchQuery && (
            <>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {largeCards.map((post) => (
                  <SmallCard
                    key={post._id ?? post.title}
                    post={post}
                    onReadMore={() =>
                      navigate(`/resources/blogs/${post.slug || post._id}`)
                    }
                  />
                ))}
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {smallCards.map((post) => (
                  <SmallCard
                    key={post._id ?? post.title}
                    post={post}
                    onReadMore={() =>
                      navigate(`/resources/blogs/${post.slug || post._id}`)
                    }
                  />
                ))}
              </div>
            </>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12 flex-wrap">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1.5 rounded-md bg-white/5 text-white/60 hover:bg-white/10 disabled:opacity-30 transition">
                Prev
              </button>
              {Array.from({ length: Math.min(totalPages, 5) }).map((_, i) => {
                const page = i + 1;
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition ${
                      currentPage === page
                        ? "bg-primary text-white shadow-md shadow-primary/40"
                        : "bg-white/5 text-white/60 hover:bg-white/10"
                    }`}>
                    {page}
                  </button>
                );
              })}
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-3 py-1.5 rounded-md bg-white/5 text-white/60 hover:bg-white/10 disabled:opacity-30 transition">
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
