import { useState } from "react";
import devopsImg from "@/assets/resources/blogs/dev-ops.png";
import webAppImg from "@/assets/resources/blogs/web-app.png";
import contentWebImg from "@/assets/resources/blogs/content-web.png";
import smartdevOpsImg from "@/assets/resources/blogs/smart-devOps.png";
import enterpriseImg from "@/assets/resources/blogs/enterprise.png";
import aiPoweredImg from "@/assets/resources/blogs/ai-powerd.png";
import mobileAppImg from "@/assets/resources/blogs/mobile-app.png";
import designingImg from "@/assets/resources/blogs/designing.png";
import crmImg from "@/assets/resources/blogs/crm.png";
import transformingImg from "@/assets/resources/blogs/transforming.png";
// ── Types ─────────────────────────────────────────────────────────────────────
interface BlogPost {
  id: number;
  image: string;
  category: string;
  readTime: string;
  title: string;
  author: string;
  date: string;
  large?: boolean;
}

// ── Mock data ─────────────────────────────────────────────────────────────────
const posts: BlogPost[] = [
  {
    id: 1,
    image: devopsImg,
    category: "Engineering",
    readTime: "3 min read",
    title: "DevOps Services For Cloud Success and Automation",
    author: "David Wall",
    date: "November 26, 2025",
  },
  {
    id: 2,
    image: webAppImg,
    category: "AI & SaaS",
    readTime: "8 min read",
    title: "Top Mobile & Web App Development Business",
    author: "David Wall",
    date: "November 26, 2025",
  },
  {
    id: 3,
    image: contentWebImg,
    category: "Engineering",
    readTime: "3 min read",
    title: "Build a High-Quality Content Website For Better SEO",
    author: "David Wall",
    date: "November 26, 2025",
  },
  {
    id: 4,
    image: smartdevOpsImg,
    category: "AI & SaaS",
    readTime: "3 min read",
    title: "Smart DevOps Solutions For Continuous Integration",
    author: "David Wall",
    date: "November 26, 2025",
  },
  {
    id: 5,
    image: enterpriseImg,
    category: "Humanities",
    readTime: "3 min read",
    title: "Smart Enterprise Software Solutions for Efficiency",
    author: "David Wall",
    date: "November 26, 2025",
  },
  {
    id: 6,
    image: aiPoweredImg,
    category: "Design Systems",
    readTime: "3 min read",
    title: "AI-Powered Communications Make Working Together Smarter",
    author: "David Wall",
    date: "November 26, 2025",
  },
  {
    id: 7,
    image: mobileAppImg,
    category: "Engineering",
    readTime: "3 min read",
    title: "Mobile App UI Design Services For Better User Experience",
    author: "David Wall",
    date: "November 26, 2025",
  },
  {
    id: 8,
    image: designingImg,
    category: "Engineering",
    readTime: "3 min read",
    title: "Designing UI/UX that Converts: Best Practices for 2025",
    author: "David Wall",
    date: "November 26, 2025",
  },
  {
    id: 9,
    image: crmImg,
    category: "Design Systems",
    readTime: "3 min read",
    title: "Top Tips for Successful CRM & API Integrations",
    author: "David Wall",
    date: "November 26, 2025",
  },
  {
    id: 10,
    image: transformingImg,
    category: "Engineering",
    readTime: "3 min read",
    title:
      "How AI & Machine Learning are Transforming Web & Mobile Experiences",
    author: "David Wall",
    date: "November 26, 2025",
  },
  {
    id: 11,
    image: contentWebImg,
    category: "Engineering",
    readTime: "3 min read",
    title: "DevOps for Businesses: Why It Matters & How to Get Started",
    author: "David Wall",
    date: "November 26, 2025",
  },
  {
    id: 12,
    image: designingImg,
    category: "Engineering",
    readTime: "3 min read",
    title: "Designing UI/UX that Converts: Best Practices for 2025",
    author: "David Wall",
    date: "November 26, 2025",
  },
  {
    id: 13,
    image: aiPoweredImg,
    category: "Design Systems",
    readTime: "3 min read",
    title: "AI-Powered Communications Make Working Together Smarter",
    author: "David Wall",
    date: "November 26, 2025",
  },
  {
    id: 14,
    image: mobileAppImg,
    category: "Engineering",
    readTime: "3 min read",
    title: "Mobile App UI Design Services For Better User Experience",
    author: "David Wall",
    date: "November 26, 2025",
  },
  {
    id: 15,
    image: designingImg,
    category: "Engineering",
    readTime: "3 min read",
    title: "Designing UI/UX that Converts: Best Practices for 2025",
    author: "David Wall",
    date: "November 26, 2025",
  },
  {
    id: 16,
    image: mobileAppImg,
    category: "Engineering",
    readTime: "3 min read",
    title: "Mobile App UI Design Services For Better User Experience",
    author: "David Wall",
    date: "November 26, 2025",
  },
  {
    id: 17,
    image: designingImg,
    category: "Engineering",
    readTime: "3 min read",
    title: "Designing UI/UX that Converts: Best Practices for 2025",
    author: "David Wall",
    date: "November 26, 2025",
  },
  {
    id: 18,
    image: designingImg,
    category: "Engineering",
    readTime: "3 min read",
    title: "Designing UI/UX that Converts: Best Practices for 2025",
    author: "David Wall",
    date: "November 26, 2025",
  },
];

const tabs = [
  "All Blogs",
  "AI & SaaS",
  "Humanities",
  "Design Systems",
  "Engineering",
];

// ── Gradient border helpers (must be inline — no Tailwind equivalent) ─────────
const imageBorderStyle = {
  border: "1px solid transparent",
  backgroundImage:
    "linear-gradient(#02070F,#02070F), linear-gradient(180deg,#000000 0%,#000000 6.73%,#4285F4 55.77%,#000000 97.12%)",
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
} as React.CSSProperties;

const contentBorderStyle = {
  border: "1px solid transparent",
  backgroundImage:
    "linear-gradient(#02070F,#02070F),linear-gradient(270deg, #000000 0%, #4285F4 55.77%, #000000 97.12%)",

  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
} as React.CSSProperties;
const readMoreBorderStyle = {
  border: "1px solid transparent",
  backgroundImage:
    "linear-gradient(#02070F,#02070F),linear-gradient(90deg, #000000 0%, #4285F4 100%)",
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
} as React.CSSProperties;
// ── Large Card ────────────────────────────────────────────────────────────────
// function LargeCard({ post }: { post: BlogPost }) {
//   return (
//     <div className="flex flex-col">
//       {/* Image */}
//       <div
//         className="relative overflow-hidden flex-shrink-0 h-[391px]"
//         style={imageBorderStyle}>
//         <img
//           src={post.image}
//           alt={post.title}
//           className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//         />
//       </div>

//       {/* Content */}
//       <div
//         className="flex flex-col flex-1 p-5 gap-3 w-full"
//         style={contentBorderStyle}>
//         <div className="grid grid-cols-[6fr,1fr] gap-6">
//           <h3 className="text-white font-stoke text-[clamp(16px,3.5vw,32px)] leading-snug line-clamp-3">
//             {post.title}
//           </h3>
//           {/* Read time badge */}
//           <span className="  text-primary font-outfit text-[11px]  ">
//             {post.readTime}
//           </span>
//         </div>
//         {/* Meta row */}
//         <div className="flex items-center justify-between mt-auto pt-4">
//           <div className="flex items-center gap-2">
//             {/* Avatar */}
//             <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
//               <span className="text-white text-[10px] font-bold">
//                 {post.author.charAt(0)}
//               </span>
//             </div>
//             <div className="flex flex-col">
//               <span className="text-white/80 font-outfit text-[11px] font-medium leading-none">
//                 {post.author}
//               </span>
//               <span className="text-white/40 font-outfit text-[10px] leading-none mt-0.5">
//                 {post.date}
//               </span>
//             </div>
//           </div>

//           <button className="text-primary font-outfit text-xs font-medium hover:text-white transition-colors duration-200 flex items-center gap-1 group">
//             Read More
//             <span className="group-hover:translate-x-0.5 transition-transform duration-200">
//               →
//             </span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// ── Small Card ────────────────────────────────────────────────────────────────
function SmallCard({ post, variant }) {
  return (
    <div className="flex flex-col h-full">
      {/* Image */}
      <div
        className={`relative overflow-hidden flex-shrink-0 blogsCards_TopEdge`}
        style={imageBorderStyle}>
        <img
          src={post.image}
          alt={post.title}
          className="w-full object-contain transition-transform duration-500 hover:scale-105 h-full"
          //   style={{ height: 160 }}
        />
      </div>

      {/* Content */}
      <div
        className="relative flex flex-col flex-1 p-4 gap-2 blogsCards_BottomEdge"
        style={contentBorderStyle}>
        <div className="grid grid-cols-[6fr,2fr] gap-6">
          <h3
            className={`text-white font-stoke  leading-snug line-clamp-3  ${variant === "large" ? "text-[clamp(16px,2vw,24px)]" : "text-[clamp(14px,2vw,18px)]"}`}>
            {post.title}
          </h3>
          {/* Read time badge */}
          <span className="  text-primary font-outfit text-[11px]  flex justify-end">
            {post.readTime}
          </span>
        </div>
        {/* Meta row */}
        <div className="flex items-center justify-between mt-auto pt-3">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <span className="text-white text-[9px] font-bold">
                {post.author.charAt(0)}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-outfit text-[10px] font-medium leading-none">
                {post.author}
              </span>
              <span className="text-white font-outfit text-[9px] leading-none mt-0.5">
                {post.date}
              </span>
            </div>
          </div>

          <button
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

// ── Main ──────────────────────────────────────────────────────────────────────
export default function AllBlogs() {
  const [activeTab, setActiveTab] = useState("All Blogs");
  const [currentPage, setCurrentPage] = useState(1);

  const POSTS_PER_PAGE = 11;

  const filtered =
    activeTab === "All Blogs"
      ? posts
      : posts.filter((post) => post.category === activeTab);

  // Reset page when tab changes
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = filtered.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const largeCards = currentPosts.slice(0, 2);
  const smallCards = currentPosts.slice(2);

  return (
    <section className="w-full bg-[#02070F] py-16 lg:py-24 px-6 lg:px-8 font-outfit">
      <div>
        {/* ── Filter tabs ───────────────────────────────── */}
        <div className="flex items-center gap-1 sm:gap-2 flex-wrap justify-center mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`
                px-4 py-1.5 rounded-full text-sm font-medium font-outfit transition-all duration-200
                ${
                  activeTab === tab
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "text-white/55 hover:text-white/80 bg-white/5 hover:bg-white/10"
                }
              `}>
              {tab}
            </button>
          ))}
        </div>
        {/* LARGE CARDS ROW */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {largeCards.map((post) => (
            <SmallCard key={post.id} post={post} variant="large" />
          ))}
        </div>

        {/* SMALL CARDS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {smallCards.map((post) => (
            <SmallCard key={post.id} post={post} variant="small" />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-white/30 font-outfit">
            No posts found in this category.
          </div>
        )}

        {/* ── Pagination ───────────────────────────────── */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12 flex-wrap">
            {/* Previous */}
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1.5 rounded-md bg-white/5 text-white/60 hover:bg-white/10 disabled:opacity-30 transition">
              Prev
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }).map((_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`
                    px-3 py-1.5 rounded-md text-sm font-medium transition
                    ${
                      currentPage === page
                        ? "bg-primary text-white shadow-md shadow-primary/40"
                        : "bg-white/5 text-white/60 hover:bg-white/10"
                    }
                  `}>
                  {page}
                </button>
              );
            })}

            {/* Next */}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 rounded-md bg-white/5 text-white/60 hover:bg-white/10 disabled:opacity-30 transition">
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
