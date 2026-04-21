import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { blogAPI } from "@/services/api/blogAPI";
import { formatDate } from "@/utils/helpers";
import { getImageUrl } from "@/utils/imageUtils";
import { Blog } from "@/store/contentStore";
import SearchIcon from "@/assets/icons/resources/blogs/search-icon.svg?react";
import { X, Loader2, ArrowRight } from "lucide-react";

interface BlogSearchProps {
  onSearchChange?: (query: string) => void;
}

export default function BlogSearch({ onSearchChange }: BlogSearchProps) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Responsive detection
  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const listener = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(e.matches);
    };
    listener(media);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  // Search with debounce
  useEffect(() => {
    if (!query.trim()) {
      setSuggestions([]);
      setShowDropdown(false);
      return;
    }

    const timer = setTimeout(() => {
      performSearch();
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const performSearch = async () => {
    setLoading(true);
    try {
      const res = await blogAPI.getBlogs(1, 50, "published", undefined, query);
      if (res.success) {
        setSuggestions(res.blogs.slice(0, 6)); // Show max 6 suggestions
        setShowDropdown(true);
      }
    } catch (error) {
      console.error("Search failed:", error);
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleBlogClick = (blog: Blog) => {
    setShowDropdown(false);
    setQuery("");
    setSuggestions([]);
    // Navigate to blog detail page
    navigate(`/resources/blogs/${blog.slug || blog._id}`, {
      state: { referrer: "search" },
    });
  };

  const handleSearch = () => {
    if (query.trim()) {
      onSearchChange?.(query);
      navigate(`/resources/blogs?search=${encodeURIComponent(query)}`);
      setShowDropdown(false);
      // Scroll to AllBlogs section
      setTimeout(() => {
        const element = document.getElementById("all-blogs-section");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  return (
    <div ref={searchRef} className="relative w-full" style={{ maxWidth: 580 }}>
      {/* Search bar */}
      <div
        className="flex items-center w-full border border-primary rounded-2xl py-2 px-[clamp(10px,1.5vw,20px)]"
        style={{
          background: "linear-gradient(90deg, #4285F4 0%, #000000 100%)",
        }}>
        {/* Search icon */}
        <SearchIcon className="text-white mr-4 flex-shrink-0" />

        {/* Input */}
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            onSearchChange?.(e.target.value);
          }}
          onFocus={() =>
            query.trim() && suggestions.length > 0 && setShowDropdown(true)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          placeholder={
            isMobile
              ? "Search articles..."
              : "Search for articles, guides, or tech news..."
          }
          className="flex-1 text-[clamp(12px,1.1vw,14px)] bg-transparent outline-none text-white placeholder-white placeholder:text-xs placeholder:font-outfit placeholder:font-normal md:placeholder:text-sm min-w-0"
        />

        {/* Clear button */}
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setSuggestions([]);
              setShowDropdown(false);
            }}
            className="flex-shrink-0 text-white hover:text-primary mr-2 transition-colors">
            <X size={18} />
          </button>
        )}

        {/* Search button */}
        <button
          onClick={handleSearch}
          disabled={!query.trim()}
          className="flex-shrink-0 text-primary bg-white hover:bg-primary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap font-outfit text-sm border-0 font-bold rounded-2xl px-[clamp(10px,1.5vw,20px)] py-2 transition-all duration-200 hover:opacity-90 active:scale-95">
          Search
        </button>
      </div>

      {/* Dropdown suggestions */}
      {showDropdown && (
        <div className="absolute top-full left-0 right-0 mt-3 bg-[#02070F] border border-primary/30 rounded-xl shadow-2xl overflow-hidden z-50">
          {loading ? (
            <div className="px-6 py-8 flex items-center justify-center">
              <Loader2 className="animate-spin text-primary" size={24} />
            </div>
          ) : suggestions.length > 0 ? (
            <>
              {/* Results section */}
              <div className="max-h-[500px] overflow-y-auto">
                {suggestions.map((blog, index) => (
                  <button
                    key={blog._id || index}
                    onClick={() => handleBlogClick(blog)}
                    className="w-full px-6 py-3 hover:bg-primary/10 transition-colors border-b border-primary/10 last:border-b-0 text-left">
                    <div className="flex gap-4">
                      {/* Blog image */}
                      <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border border-primary/20">
                        <img
                          src={getImageUrl(blog.image) || "/placeholder.svg"}
                          alt={blog.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Blog info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className="text-white font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
                            {blog.title}
                          </h4>
                          <ArrowRight
                            size={16}
                            className="text-primary flex-shrink-0 mt-0.5"
                          />
                        </div>

                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[11px] bg-primary/20 text-primary px-2 py-0.5 rounded">
                            {blog.category}
                          </span>
                          <span className="text-[11px] text-white/60">
                            {blog.readTime || "5 min read"}
                          </span>
                        </div>

                        <p className="text-[12px] text-white/70 line-clamp-1">
                          {blog.intro || ""}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* View all results footer */}
              <button
                onClick={handleSearch}
                className="w-full px-6 py-3 bg-primary/5 hover:bg-primary/10 text-primary font-semibold text-sm transition-colors border-t border-primary/20 flex items-center justify-center gap-2">
                View all results
                <ArrowRight size={16} />
              </button>
            </>
          ) : (
            <div className="px-6 py-8 text-center">
              <p className="text-white/60 text-sm font-outfit">
                No blogs found matching "{query}"
              </p>
              <p className="text-white/40 text-xs mt-2">
                Try different keywords or browse all articles
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
