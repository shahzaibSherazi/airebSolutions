import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { whitePaperAPI } from "@/services/api/whitePaperAPI";
import { getImageUrl } from "@/utils/imageUtils";
import { WhitePaper } from "@/store/contentStore";

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

function SmallCard({ post }: { post: WhitePaper }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full">
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
          className="w-full object-cover transition-transform duration-500 hover:scale-105 h-full"
        />
      </div>
      <div
        className="relative flex flex-col flex-1 p-4 gap-2 blogsCards_BottomEdge"
        style={contentBorderStyle}>
        <div className="flex flex-col items-start justify-start gap-3">
          <div className="flex justify-between w-full">
            <p className="font-outfit font-normal text-sm text-white py-1 px-2 bg-[#4285F433]">
              White Paper
            </p>
            <div className="w-2 h-2 animate-pulse rounded-full bg-white" />
            <p className="font-outfit font-thin text-base">{post.category}</p>
          </div>
          <h3 className="text-white font-outfit font-light leading-snug line-clamp-3 text-[clamp(16px,2vw,24px)]">
            {post.title}
          </h3>
        </div>
        <div className="flex items-center justify-between mt-auto pt-3">
          <button
            onClick={() => {
              if (post.pdfUrl) {
                window.open(post.pdfUrl, "_blank");
              } else if (post._id) {
                navigate(`/resources/white-paper/${post._id}`);
              }
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

export default function AllWhitePapers() {
  const [whitePapers, setWhitePapers] = useState<WhitePaper[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWhitePapers = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await whitePaperAPI.getWhitePapers(1, 100, "published");
        if (res.success) {
          setWhitePapers(res.whitePapers);
        } else {
          setError("Unable to load white papers.");
        }
      } catch (err: any) {
        setError(err.response?.data?.message || "Failed to load white papers.");
      } finally {
        setLoading(false);
      }
    };

    fetchWhitePapers();
  }, []);

  return (
    <section className="w-full bg-[#02070F] ">
      <div className="container py-16 lg:py-24 px-6 lg:px-8">
        <div className="flex justify-center items-center gap-3 mb-10">
          <h1 className="font-outfit font-bold text-h2 text-white text-center">
            All Whitepapers
          </h1>
          <span className="font-outfit font-thin text-h2 text-white">
            ({whitePapers.length})
          </span>
        </div>

        {loading && (
          <div className="text-white p-10 text-center">
            Loading white papers...
          </div>
        )}
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-200 text-center">
            {error}
          </div>
        )}

        {!loading && !error && whitePapers.length === 0 && (
          <div className="text-center py-20 text-white/30 font-outfit">
            No white papers found. Create one from admin dashboard.
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whitePapers.map((paper) => (
            <SmallCard key={paper._id ?? paper.title} post={paper} />
          ))}
        </div>
      </div>
    </section>
  );
}
