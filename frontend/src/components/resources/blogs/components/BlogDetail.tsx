// import { useEffect, useRef, useState } from "react";
// import { ArrowLeft } from "lucide-react";
// import { useNavigate, useParams } from "react-router-dom";
// import { blogAPI } from "@/services/api/blogAPI";
// import { Blog } from "@/store/contentStore";
// import { formatDate } from "@/utils/helpers";
// import { getImageUrl } from "@/utils/imageUtils";

// // ── Gradient border styles (same as AllBlogs) ─────────────────────
// const imageBorderStyle: React.CSSProperties = {
//   border: "1px solid transparent",
//   backgroundImage:
//     "linear-gradient(#02070F,#02070F), linear-gradient(180deg,#000000 0%,#000000 6.73%,#4285F4 55.77%,#000000 97.12%)",
//   backgroundOrigin: "border-box",
//   backgroundClip: "padding-box, border-box",
// };
// const contentBorderStyle: React.CSSProperties = {
//   border: "1px solid transparent",
//   backgroundImage:
//     "linear-gradient(#02070F,#02070F),linear-gradient(270deg, #000000 0%, #4285F4 55.77%, #000000 97.12%)",
//   backgroundOrigin: "border-box",
//   backgroundClip: "padding-box, border-box",
// };
// const readMoreBorderStyle: React.CSSProperties = {
//   border: "1px solid transparent",
//   backgroundImage:
//     "linear-gradient(#02070F,#02070F),linear-gradient(90deg, #000000 0%, #4285F4 100%)",
//   backgroundOrigin: "border-box",
//   backgroundClip: "padding-box, border-box",
// };

// // ── Content block renderer ────────────────────────────────────────
// function RenderBlock({ block }: { block: any }) {
//   if (block.type === "p") {
//     return (
//       <p className="font-outfit text-[15px] text-white/75 leading-[1.85] mb-4">
//         {block.text}
//       </p>
//     );
//   }
//   if (block.type === "subheading") {
//     return (
//       <h4 className="font-stoke text-white text-base font-semibold mt-5 mb-2">
//         {block.text}
//       </h4>
//     );
//   }
//   if (block.type === "ul") {
//     return (
//       <ul className="mb-4 flex flex-col gap-2 pl-1">
//         {block.items?.map((item: string, i: number) => (
//           <li
//             key={i}
//             className="flex items-start gap-2 font-outfit text-[15px] text-white/75 leading-relaxed">
//             <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4285F4] shrink-0" />
//             {item}
//           </li>
//         ))}
//       </ul>
//     );
//   }
//   if (block.type === "ol") {
//     return (
//       <ol className="mb-4 flex flex-col gap-2 pl-1">
//         {block.items?.map((item: string, i: number) => (
//           <li
//             key={i}
//             className="flex items-start gap-3 font-outfit text-[15px] text-white/75 leading-relaxed">
//             <span className="mt-0.5 w-5 h-5 rounded-full bg-[#4285F4]/20 border border-[#4285F4]/40 flex items-center justify-center text-[10px] text-[#4285F4] font-bold shrink-0">
//               {i + 1}
//             </span>
//             {item}
//           </li>
//         ))}
//       </ol>
//     );
//   }
//   return null;
// }

// // ── Related post mini-card (same SmallCard style) ─────────────────
// function RelatedCard({ post, onClick }: { post: Blog; onClick: () => void }) {
//   return (
//     <div className="flex flex-col h-full cursor-pointer" onClick={onClick}>
//       <div
//         className="relative overflow-hidden flex-shrink-0"
//         style={imageBorderStyle}>
//         <img
//           src={getImageUrl(post.image)}
//           alt={post.title}
//           className="w-full object-contain transition-transform duration-500 hover:scale-105"
//           onError={(e) => {
//             e.currentTarget.onerror = null;
//             e.currentTarget.src = "/placeholder.svg";
//           }}
//         />
//       </div>
//       <div
//         className="relative flex flex-col flex-1 p-4 gap-2"
//         style={contentBorderStyle}>
//         <div className="grid grid-cols-[6fr,2fr] gap-4">
//           <h3 className="text-white font-stoke text-[clamp(13px,1.5vw,17px)] leading-snug line-clamp-3">
//             {post.title}
//           </h3>
//           <span className="text-primary font-outfit text-[11px] flex justify-end">
//             {post.readTime || "5 min read"}
//           </span>
//         </div>
//         <div className="flex items-center justify-between mt-auto pt-3">
//           <div className="flex items-center gap-1.5">
//             <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
//               <span className="text-white text-[9px] font-bold">
//                 {(post.author || "A").charAt(0)}
//               </span>
//             </div>
//             <div className="flex flex-col">
//               <span className="text-white font-outfit text-[10px] font-medium leading-none">
//                 {post.author || "Airebsolution Teams"}
//               </span>
//               <span className="text-white font-outfit text-[9px] leading-none mt-0.5">
//                 {post.publishedDate ? formatDate(post.publishedDate) : "N/A"}
//               </span>
//             </div>
//           </div>
//           <button
//             style={readMoreBorderStyle}
//             className="text-primary font-outfit text-[11px] font-medium hover:text-white transition-colors duration-200 flex items-center gap-0.5 py-2 px-4 group">
//             Read More{" "}
//             <span className="group-hover:translate-x-0.5 transition-transform duration-200">
//               →
//             </span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ── Main BlogDetail ───────────────────────────────────────────────
// export default function BlogDetail() {
//   const { id } = useParams();
//   const [post, setPost] = useState<Blog | null>(null);
//   const [relatedPosts, setRelatedPosts] = useState<Blog[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [activeSection, setActiveSection] = useState<string>("");
//   const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchPost = async () => {
//       if (!id) return;
//       setLoading(true);
//       setError(null);
//       try {
//         const res = await blogAPI.getBlog(id);
//         if (res.success) {
//           setPost(res.blog);

//           // Fetch related posts if there are relatedIds
//           if (res.blog.relatedIds && res.blog.relatedIds.length > 0) {
//             const relatedRes = await blogAPI.getBlogs(1, 10, "published");
//             if (relatedRes.success) {
//               // Filter to only show related posts (excluding current post)
//               const related = relatedRes.blogs.filter(
//                 (p: Blog) =>
//                   p._id !== id && res.blog.relatedIds?.includes(p._id),
//               );
//               setRelatedPosts(related);
//             }
//           }
//         } else {
//           setError("Blog post not found.");
//         }
//       } catch (err: any) {
//         setError(err.response?.data?.message || "Failed to load blog post.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPost();
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [id]);

//   useEffect(() => {
//     if (!post?.sections?.length) return;
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) setActiveSection(entry.target.id);
//         });
//       },
//       { rootMargin: "-20% 0px -60% 0px" },
//     );

//     Object.values(sectionRefs.current).forEach((el) => {
//       if (el) observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, [post]);

//   if (loading)
//     return <div className="text-white p-16">Loading blog details...</div>;
//   if (error) return <div className="text-red-400 p-16">{error}</div>;
//   if (!post) return <div className="text-white p-16">Post not found.</div>;

//   const sections = post.sections || [];
//   const hasRichContent = Boolean(post.contentHtml && post.contentHtml.trim());

//   const scrollToSection = (sectionId: string) => {
//     sectionRefs.current[sectionId]?.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   };

//   return (
//     <div className=" w-full  bg-[#02070F] px-6 lg:px-8 text-white">
//       <div className="container">
//         {/* ── Hero Section ───────────────────────────────────────────── */}
//         <section
//           style={{
//             background:
//               "radial-gradient(50% 295.84% at 50% 50%, rgba(66, 133, 244, 0.25) 0%, rgba(2, 7, 15, 0) 70.6%)",
//           }}
//           className="heros_height relative  py-16 lg:py-24">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             {/* Left: Title & Meta */}
//             <div>
//               <span className="inline-block font-outfit text-xs tracking-widest uppercase text-primary border border-white/20 px-3 py-1 mb-5">
//                 {post.category}
//               </span>

//               <h1 className="font-stoke text-[clamp(28px,4vw,52px)] leading-tight text-white mb-6">
//                 {post.title}
//               </h1>

//               <div className="flex flex-col gap-6 text-white text-sm">
//                 <span className="font-stoke font-normal text-primary w-fit text-[clamp(12px,1.5vw,18px)] border-b border-primary">
//                   {post.author || "Airebsolution Teams"}
//                 </span>
//                 <div className="flex items-center gap-4">
//                   <span className="font-outfit text-[clamp(12px,1.5vw,16px)]">
//                     {post.publishedDate
//                       ? formatDate(post.publishedDate)
//                       : "N/A"}
//                   </span>
//                   <span>•</span>
//                   <span className="font-outfit text-[clamp(12px,1.5vw,16px)]">
//                     {post.readTime || "5 min read"}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Right: Hero Image */}
//             {post.image && (
//               <div
//                 style={imageBorderStyle}
//                 className=" overflow-hidden w-full shrink-0">
//                 <img
//                   src={getImageUrl(post.image)}
//                   alt={post.title}
//                   onError={(e) => {
//                     e.currentTarget.onerror = null;
//                     e.currentTarget.src = "/placeholder.svg";
//                   }}
//                   className="w-full h-auto object-contain"
//                 />
//               </div>
//             )}
//           </div>
//         </section>

//         {/* ── Content Section with TOC ──────────────────────────────── */}
//         {/* ── Content Section with TOC ──────────────────────────────── */}
//         <section className="py-16 lg:py-24">
//           {post.intro && (
//             <p className="font-outfit text-[15px] text-white/75 leading-[1.9] mb-10 border-l-2 border-[#4285F4] pl-5">
//               {post.intro}
//             </p>
//           )}

//           <div className="grid lg:grid-cols-[1fr,320px] gap-12">
//             {/* Main Content */}
//             <main>
//               {hasRichContent ? (
//                 <div
//                   className="
//             prose prose-invert max-w-none
//             prose-headings:font-stoke prose-headings:text-white
//             prose-h2:text-[clamp(18px,2.5vw,26px)] prose-h2:mb-5 prose-h2:mt-10
//             prose-h3:text-[clamp(15px,2vw,20px)] prose-h3:mb-3 prose-h3:mt-8
//             prose-p:font-outfit prose-p:text-[15px] prose-p:text-white/75 prose-p:leading-[1.85] prose-p:mb-4
//             prose-ul:pl-1 prose-ul:mb-4
//             prose-ol:pl-1 prose-ol:mb-4
//             prose-li:font-outfit prose-li:text-[15px] prose-li:text-white/75 prose-li:leading-relaxed
//             prose-strong:text-white prose-strong:font-semibold
//             prose-a:text-primary prose-a:no-underline hover:prose-a:underline
//             prose-blockquote:border-l-2 prose-blockquote:border-primary prose-blockquote:pl-5 prose-blockquote:text-white/60
//             prose-code:text-primary prose-code:bg-white/5 prose-code:px-1 prose-code:rounded
//           "
//                   dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }}
//                 />
//               ) : (
//                 <div className="space-y-12">
//                   {sections.map((section: any) => (
//                     <section
//                       key={section.id}
//                       id={section.id}
//                       ref={(el) => (sectionRefs.current[section.id] = el)}
//                       className="scroll-mt-8">
//                       <h2 className="font-stoke text-[clamp(18px,2.5vw,26px)] text-white mb-5 leading-snug">
//                         {section.heading}
//                       </h2>
//                       {section.content?.map((block: any, index: number) => (
//                         <RenderBlock key={index} block={block} />
//                       ))}
//                     </section>
//                   ))}
//                 </div>
//               )}
//             </main>

//             {/* ✅ TOC — works for BOTH contentHtml and sections */}
//             <aside className="hidden lg:block">
//               <div className="sticky top-24">
//                 <div className="bg-[#0f172a]/70 border border-primary/20 rounded-xl p-4 space-y-4">
//                   <h3 className="text-white text-sm font-semibold tracking-wide uppercase">
//                     On this page
//                   </h3>
//                   <div className="space-y-1">
//                     {hasRichContent
//                       ? // ✅ Extract h2/h3 headings from contentHtml for TOC
//                         (() => {
//                           const parser = new DOMParser();
//                           const doc = parser.parseFromString(
//                             post.contentHtml || "",
//                             "text/html",
//                           );
//                           const headings = Array.from(
//                             doc.querySelectorAll("h2, h3"),
//                           );

//                           // Add IDs to headings in the rendered content
//                           return headings.map((heading, idx) => {
//                             const slugId = `heading-${idx}`;
//                             const level = heading.tagName.toLowerCase();
//                             return (
//                               <button
//                                 key={idx}
//                                 onClick={() => {
//                                   // Find rendered heading by text content
//                                   const allHeadings = document.querySelectorAll(
//                                     ".prose h2, .prose h3",
//                                   );
//                                   allHeadings[idx]?.scrollIntoView({
//                                     behavior: "smooth",
//                                     block: "start",
//                                   });
//                                 }}
//                                 className={`block text-left w-full px-3 py-2 rounded-md text-sm transition-colors
//                         ${level === "h3" ? "pl-6" : ""}
//                         ${
//                           activeSection === slugId
//                             ? "bg-primary/20 text-primary"
//                             : "text-white/60 hover:text-white hover:bg-white/5"
//                         }`}>
//                                 {heading.textContent}
//                               </button>
//                             );
//                           });
//                         })()
//                       : // Sections-based TOC (unchanged)
//                         sections.map((section: any) => (
//                           <button
//                             key={section.id}
//                             onClick={() => scrollToSection(section.id)}
//                             className={`block text-sm w-full text-left px-3 py-2 rounded-md transition-colors ${
//                               activeSection === section.id
//                                 ? "bg-primary/20 text-primary"
//                                 : "text-white/60 hover:text-white hover:bg-white/5"
//                             }`}>
//                             {section.heading}
//                           </button>
//                         ))}
//                   </div>
//                 </div>
//               </div>
//             </aside>
//           </div>
//         </section>

//         {/* ── Related Posts Section ─────────────────────────────────── */}
//         {relatedPosts.length > 0 && (
//           <section className=" pb-16 lg:pb-24">
//             <h3 className="font-stoke text-2xl text-white mb-8">
//               Related Posts
//             </h3>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {relatedPosts.slice(0, 3).map((relatedPost) => (
//                 <RelatedCard
//                   key={relatedPost._id}
//                   post={relatedPost}
//                   onClick={() => navigate(`/blogs/${relatedPost._id}`)}
//                 />
//               ))}
//             </div>
//           </section>
//         )}
//       </div>
//     </div>
//   );
// }

import { useEffect, useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { blogAPI } from "@/services/api/blogAPI";
import { Blog } from "@/store/contentStore";
import { formatDate } from "@/utils/helpers";
import { getImageUrl } from "@/utils/imageUtils";

// ── Gradient border styles ─────────────────────────────────────────
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

// ── Inject rich-text styles once ───────────────────────────────────
const RICH_TEXT_STYLES = `
  .ql-content h1 {
    font-family: 'Stoke', serif;
    font-size: clamp(24px, 3vw, 36px);
    font-weight: 400;
    color: #ffffff;
    line-height: 1.3;
    margin: 2rem 0 1rem;
  }
  .ql-content h2 {
    font-family: 'Stoke', serif;
    font-size: clamp(20px, 2.5vw, 28px);
    font-weight: 400;
    color: #ffffff;
    line-height: 1.35;
    margin: 2rem 0 0.85rem;
    
  }
  .ql-content h3 {
    font-family: 'Stoke', serif;
    font-size: clamp(17px, 2vw, 22px);
    font-weight: 400;
    color: #ffffff;
    line-height: 1.4;
    margin: 1.5rem 0 0.65rem;
  }
  .ql-content h4 {
    font-family: 'Stoke', serif;
    font-size: clamp(15px, 1.8vw, 18px);
    font-weight: 400;
    color: #e2e8f0;
    line-height: 1.4;
    margin: 1.25rem 0 0.5rem;
  }
  .ql-content p {
    font-family: 'Outfit', sans-serif;
    font-size: 15px;
    color: rgba(255,255,255,0.75);
    line-height: 1.9;
    margin: 0 0 1.1rem;
  }
  .ql-content ul {
    margin: 0 0 1.1rem;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .ql-content ul li {
    font-family: 'Outfit', sans-serif;
    font-size: 15px;
    color: rgba(255,255,255,0.75);
    line-height: 1.7;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding-left: 0;
  }
  .ql-content ul li::before {
    content: '';
    display: inline-block;
    width: 7px;
    height: 7px;
    min-width: 7px;
    border-radius: 50%;
    background: #4285F4;
    margin-top: 8px;
  }
  /* Quill nested list bullets */
  .ql-content ul li.ql-indent-1::before { background: rgba(66,133,244,0.5); }
  .ql-content ol {
    margin: 0 0 1.1rem;
    padding: 0;
    list-style: none;
    counter-reset: ol-counter;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .ql-content ol li {
    font-family: 'Outfit', sans-serif;
    font-size: 15px;
    color: rgba(255,255,255,0.75);
    line-height: 1.7;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    counter-increment: ol-counter;
  }
  .ql-content ol li::before {
    content: counter(ol-counter);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 22px;
    height: 22px;
    border-radius: 50%;
    background: rgba(66,133,244,0.15);
    border: 1px solid rgba(66,133,244,0.35);
    color: #4285F4;
    font-size: 11px;
    font-weight: 400;
    font-family: 'Outfit', sans-serif;
    margin-top: 2px;
    flex-shrink: 0;
  }
  /* Quill data-list support */
  .ql-content li[data-list="bullet"] {
    font-family: 'Outfit', sans-serif;
    font-size: 15px;
    color: rgba(255,255,255,0.75);
    line-height: 1.7;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding-left: 0 !important;
    list-style: none !important;
  }
  .ql-content li[data-list="bullet"]::before {
    content: '' !important;
    display: inline-block !important;
    width: 7px !important;
    height: 7px !important;
    min-width: 7px !important;
    border-radius: 50% !important;
    background: #4285F4 !important;
    margin-top: 8px !important;
  }
  .ql-content li[data-list="ordered"] {
    font-family: 'Outfit', sans-serif;
    font-size: 15px;
    color: rgba(255,255,255,0.75);
    line-height: 1.7;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    list-style: none !important;
    counter-increment: ql-ordered !important;
  }
  .ql-content ol { counter-reset: ql-ordered; }
  .ql-content li[data-list="ordered"]::before {
    content: counter(ql-ordered) !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    min-width: 22px !important;
    height: 22px !important;
    border-radius: 50% !important;
    background: rgba(66,133,244,0.15) !important;
    border: 1px solid rgba(66,133,244,0.35) !important;
    color: #4285F4 !important;
    font-size: 11px !important;
    font-weight: 700 !important;
    font-family: 'Outfit', sans-serif !important;
    margin-top: 2px !important;
    flex-shrink: 0 !important;
  }
  .ql-content strong, .ql-content b {
    color: #ffffff;
    font-weight: 600;
  }
  .ql-content em, .ql-content i {
    color: rgba(255,255,255,0.8);
    font-style: italic;
  }
  .ql-content a {
    color: #4285F4;
    text-decoration: none;
    border-bottom: 1px solid rgba(66,133,244,0.3);
    transition: border-color 0.2s;
  }
  .ql-content a:hover {
    border-color: #4285F4;
  }
  .ql-content blockquote {
    border-left: 3px solid #4285F4;
    margin: 1.5rem 0;
    padding: 0.75rem 1.25rem;
    background: rgba(66,133,244,0.05);
    border-radius: 0 6px 6px 0;
  }
  .ql-content blockquote p {
    color: rgba(255,255,255,0.65);
    font-style: italic;
    margin: 0;
  }
  .ql-content pre, .ql-content code {
    font-family: 'Outfit', Courier, monospace;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 4px;
    color: #a5d6ff;
  }
  .ql-content pre {
    padding: 1rem 1.25rem;
    overflow-x: auto;
    margin: 1rem 0;
    display: block;
  }
  .ql-content code {
    padding: 2px 6px;
    font-size: 13px;
  }
  .ql-content img {
    max-width: 100%;
    border-radius: 8px;
    margin: 1rem 0;
  }
  .ql-content hr {
    border: none;
    border-top: 1px solid rgba(66,133,244,0.2);
    margin: 2rem 0;
  }
  /* Quill alignment classes */
  .ql-content .ql-align-center { text-align: center; }
  .ql-content .ql-align-right  { text-align: right; }
  .ql-content .ql-align-justify { text-align: justify; }
  /* Quill indent */
  .ql-content .ql-indent-1 { padding-left: 1.5rem; }
  .ql-content .ql-indent-2 { padding-left: 3rem; }
  .ql-content .ql-indent-3 { padding-left: 4.5rem; }
`;

function StyleInjector() {
  useEffect(() => {
    const id = "ql-blog-styles";
    if (!document.getElementById(id)) {
      const tag = document.createElement("style");
      tag.id = id;
      tag.textContent = RICH_TEXT_STYLES;
      document.head.appendChild(tag);
    }
  }, []);
  return null;
}

// ── TOC item type ──────────────────────────────────────────────────
interface TocItem {
  id: string;
  text: string;
  level: "h2" | "h3";
}

// ── Extract & inject IDs into rendered HTML headings ───────────────
function buildToc(container: HTMLElement): TocItem[] {
  const headings = container.querySelectorAll("h1,h2, h3");
  const items: TocItem[] = [];
  headings.forEach((el, i) => {
    const id = `toc-heading-${i}`;
    el.id = id;
    el.setAttribute("data-toc", "true");
    items.push({
      id,
      text: el.textContent || "",
      level: el.tagName.toLowerCase() as "h2" | "h3",
    });
  });
  return items;
}

// ── Render block (sections mode) ───────────────────────────────────
function RenderBlock({ block }: { block: any }) {
  if (block.type === "p") {
    return (
      <p className="font-outfit text-[15px] text-white leading-[1.85] mb-4">
        {block.text}
      </p>
    );
  }
  if (block.type === "subheading") {
    return (
      <h4 className="font-stoke text-white text-base font-semibold mt-5 mb-2">
        {block.text}
      </h4>
    );
  }
  if (block.type === "ul") {
    return (
      <ul className="mb-4 flex flex-col gap-2 pl-1">
        {block.items?.map((item: string, i: number) => (
          <li
            key={i}
            className="flex items-start gap-2 font-outfit text-[15px] text-white leading-relaxed">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4285F4] shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    );
  }
  if (block.type === "ol") {
    return (
      <ol className="mb-4 flex flex-col gap-2 pl-1">
        {block.items?.map((item: string, i: number) => (
          <li
            key={i}
            className="flex items-start gap-3 font-outfit text-[15px] text-white/75 leading-relaxed">
            <span className="mt-0.5 w-5 h-5 rounded-full bg-[#4285F4]/20 border border-[#4285F4]/40 flex items-center justify-center text-[10px] text-[#4285F4] font-bold shrink-0">
              {i + 1}
            </span>
            {item}
          </li>
        ))}
      </ol>
    );
  }
  return null;
}

// ── Related post card ──────────────────────────────────────────────
function RelatedCard({ post, onClick }: { post: Blog; onClick: () => void }) {
  return (
    <div className="flex flex-col h-full cursor-pointer" onClick={onClick}>
      <div
        className="relative overflow-hidden flex-shrink-0"
        style={imageBorderStyle}>
        <img
          src={getImageUrl(post.image)}
          alt={post.title}
          className="w-full object-contain transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/placeholder.svg";
          }}
        />
      </div>
      <div
        className="relative flex flex-col flex-1 p-4 gap-2"
        style={contentBorderStyle}>
        <div className="grid grid-cols-[6fr,2fr] gap-4">
          <h3 className="text-white font-stoke text-[clamp(13px,1.5vw,17px)] leading-snug line-clamp-3">
            {post.title}
          </h3>
          <span className="text-primary font-outfit text-[11px] flex justify-end">
            {post.readTime || "5 min read"}
          </span>
        </div>
        <div className="flex items-center justify-between mt-auto pt-3">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
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
            style={readMoreBorderStyle}
            className="text-primary font-outfit text-[11px] font-medium hover:text-white transition-colors duration-200 flex items-center gap-0.5 py-2 px-4 group">
            Read More{" "}
            <span className="group-hover:translate-x-0.5 transition-transform duration-200">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main BlogDetail ────────────────────────────────────────────────
export default function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState<Blog | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("");
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;
      setLoading(true);
      setError(null);
      try {
        const res = await blogAPI.getBlog(id);
        if (res.success) {
          setPost(res.blog);
          if (res.blog.relatedIds?.length) {
            const relatedRes = await blogAPI.getBlogs(1, 10, "published");
            if (relatedRes.success) {
              setRelatedPosts(
                relatedRes.blogs.filter(
                  (p: Blog) =>
                    p._id !== id && res.blog.relatedIds?.includes(p._id),
                ),
              );
            }
          }
        } else {
          setError("Blog post not found.");
        }
      } catch (err: any) {
        setError(err.response?.data?.message || "Failed to load blog post.");
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  // Build TOC after HTML content renders
  useEffect(() => {
    if (!contentRef.current) return;
    const items = buildToc(contentRef.current);
    setTocItems(items);
  }, [post]);

  // Intersection observer for active TOC item
  useEffect(() => {
    if (!tocItems.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );

    tocItems.forEach(({ id: hId }) => {
      const el = document.getElementById(hId);
      if (el) observer.observe(el);
    });

    // Also observe section-based headings
    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [tocItems, post]);

  const scrollToHeading = (hId: string) => {
    const el = document.getElementById(hId);
    if (!el) return;
    const offset = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const el = sectionRefs.current[sectionId];
    if (!el) return;
    const offset = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  if (loading) {
    return (
      <div className="w-full bg-[#02070F] px-6 lg:px-8 py-16 animate-pulse">
        <div className="container space-y-10">
          {/* Hero Skeleton */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="h-6 w-32 bg-white/10 rounded"></div>
              <div className="h-10 w-3/4 bg-white/10 rounded"></div>
              <div className="h-4 w-1/2 bg-white/10 rounded"></div>
              <div className="h-4 w-1/3 bg-white/10 rounded"></div>
            </div>
            <div className="h-64 w-full bg-white/10 rounded-xl"></div>
          </div>

          {/* Content Skeleton */}
          <div className="space-y-4 max-w-3xl">
            <div className="h-4 w-full bg-white/10 rounded"></div>
            <div className="h-4 w-5/6 bg-white/10 rounded"></div>
            <div className="h-4 w-4/6 bg-white/10 rounded"></div>
            <div className="h-4 w-full bg-white/10 rounded"></div>
            <div className="h-4 w-3/4 bg-white/10 rounded"></div>
          </div>

          {/* Related Posts Skeleton */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-3">
                <div className="h-40 bg-white/10 rounded-lg"></div>
                <div className="h-4 w-3/4 bg-white/10 rounded"></div>
                <div className="h-3 w-1/2 bg-white/10 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  if (error) return <div className="text-red-400 p-16">{error}</div>;
  if (!post) return <div className="text-white p-16">Post not found.</div>;

  const sections = post.sections || [];
  const hasRichContent = Boolean(post.contentHtml?.trim());

  // Sections TOC items
  const sectionTocItems = sections.map((s: any) => ({
    id: s.id,
    text: s.heading,
  }));

  // Determine what to show in TOC sidebar
  const hasToc = hasRichContent
    ? tocItems.length > 0
    : sectionTocItems.length > 0;

  return (
    <>
      <StyleInjector />
      <div className="w-full bg-[#02070F] px-6 lg:px-8 text-white">
        <div className="container">
          {/* ── Hero ──────────────────────────────────────────────── */}
          <section
            style={{
              background:
                "radial-gradient(50% 295.84% at 50% 50%, rgba(66, 133, 244, 0.25) 0%, rgba(2, 7, 15, 0) 70.6%)",
            }}
            className="heros_height relative py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block font-outfit text-xs tracking-widest uppercase text-primary border border-white/20 px-3 py-1 mb-5">
                  {post.category}
                </span>
                <h1 className="font-stoke text-[clamp(28px,4vw,52px)] leading-tight text-white mb-6">
                  {post.title}
                </h1>
                <div className="flex flex-col gap-6 text-white text-sm">
                  <span className="font-stoke font-normal text-primary w-fit text-[clamp(12px,1.5vw,18px)] border-b border-primary">
                    {post.author || "Airebsolution Teams"}
                  </span>
                  <div className="flex items-center gap-4">
                    <span className="font-outfit text-[clamp(12px,1.5vw,16px)]">
                      {post.publishedDate
                        ? formatDate(post.publishedDate)
                        : "N/A"}
                    </span>
                    <span>•</span>
                    <span className="font-outfit text-[clamp(12px,1.5vw,16px)]">
                      {post.readTime || "5 min read"}
                    </span>
                  </div>
                </div>
              </div>

              {post.image && (
                <div
                  style={imageBorderStyle}
                  className="overflow-hidden w-full shrink-0">
                  <img
                    src={getImageUrl(post.image)}
                    alt={post.title}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                    className="w-full h-auto object-contain"
                  />
                </div>
              )}
            </div>
          </section>

          {/* ── Content + TOC ─────────────────────────────────────── */}
          <section className="py-16 lg:py-24">
            {post.intro && (
              <p className="font-outfit text-[15px] text-white/75 leading-[1.9] mb-10 border-l-2 border-[#4285F4] pl-5">
                {post.intro}
              </p>
            )}

            <div
              className={`grid gap-12 ${hasToc ? "lg:grid-cols-[1fr,280px]" : ""}`}>
              {/* ── Main content ──────────────────────────────────── */}
              <main>
                {hasRichContent ? (
                  <div
                    ref={contentRef}
                    className="ql-content"
                    dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }}
                  />
                ) : (
                  <div className="space-y-12">
                    {sections.map((section: any) => (
                      <section
                        key={section.id}
                        id={section.id}
                        ref={(el) => (sectionRefs.current[section.id] = el)}
                        className="scroll-mt-24">
                        <h2 className="font-stoke text-[clamp(18px,2.5vw,26px)] text-white mb-5 leading-snug">
                          {section.heading}
                        </h2>
                        {section.content?.map((block: any, index: number) => (
                          <RenderBlock key={index} block={block} />
                        ))}
                      </section>
                    ))}
                  </div>
                )}
              </main>

              {/* ── TOC Sidebar ───────────────────────────────────── */}
              {hasToc && (
                <aside className="hidden lg:block">
                  <div className="sticky top-24">
                    {/* Progress indicator line */}
                    <div className="relative">
                      <div
                        className="rounded-xl overflow-hidden"
                        style={{
                          background: "rgba(2,7,15,0.9)",
                          border: "1px solid rgba(66,133,244,0.15)",
                          backdropFilter: "blur(12px)",
                        }}>
                        {/* Header */}
                        <div
                          className="px-4 py-3 flex items-center gap-2"
                          style={{
                            borderBottom: "1px solid rgba(66,133,244,0.1)",
                          }}>
                          <div className="w-1.5 h-1.5 rounded-full bg-[#4285F4]" />
                          <span className="text-white/50 text-[11px] font-outfit tracking-widest uppercase">
                            On this page
                          </span>
                        </div>

                        {/* TOC items */}
                        <div className="py-2 px-2 space-y-0.5 max-h-[60vh] overflow-y-auto scrollbar-thin">
                          {hasRichContent
                            ? tocItems.map((item) => (
                                <button
                                  key={item.id}
                                  onClick={() => scrollToHeading(item.id)}
                                  className="group flex items-start gap-2.5 w-full text-left px-3 py-2 rounded-lg transition-all duration-200"
                                  style={{
                                    background:
                                      activeSection === item.id
                                        ? "rgba(66,133,244,0.12)"
                                        : "transparent",
                                  }}>
                                  {/* Active indicator */}
                                  <span
                                    className="mt-1.5 shrink-0 rounded-full transition-all duration-200"
                                    style={{
                                      width:
                                        item.level === "h2" ? "6px" : "4px",
                                      height:
                                        item.level === "h2" ? "6px" : "4px",
                                      minWidth:
                                        item.level === "h2" ? "6px" : "4px",
                                      background:
                                        activeSection === item.id
                                          ? "#4285F4"
                                          : "rgba(255,255,255,0.2)",
                                      marginLeft:
                                        item.level === "h3" ? "8px" : "0",
                                    }}
                                  />
                                  <span
                                    className="font-outfit text-[12.5px] leading-snug transition-colors duration-200"
                                    style={{
                                      paddingLeft:
                                        item.level === "h3" ? "0" : "0",
                                      color:
                                        activeSection === item.id
                                          ? "#4285F4"
                                          : "rgba(255,255,255,0.5)",
                                      fontWeight:
                                        item.level === "h2" ? 500 : 400,
                                    }}>
                                    {item.text}
                                  </span>
                                </button>
                              ))
                            : sectionTocItems.map((item: any) => (
                                <button
                                  key={item.id}
                                  onClick={() => scrollToSection(item.id)}
                                  className="group flex items-start gap-2.5 w-full text-left px-3 py-2 rounded-lg transition-all duration-200"
                                  style={{
                                    background:
                                      activeSection === item.id
                                        ? "rgba(66,133,244,0.12)"
                                        : "transparent",
                                  }}>
                                  <span
                                    className="mt-1.5 w-1.5 h-1.5 min-w-[6px] rounded-full shrink-0 transition-all duration-200"
                                    style={{
                                      background:
                                        activeSection === item.id
                                          ? "#4285F4"
                                          : "rgba(255,255,255,0.2)",
                                    }}
                                  />
                                  <span
                                    className="font-outfit text-[12.5px] leading-snug font-medium transition-colors duration-200"
                                    style={{
                                      color:
                                        activeSection === item.id
                                          ? "#4285F4"
                                          : "rgba(255,255,255,0.5)",
                                    }}>
                                    {item.text}
                                  </span>
                                </button>
                              ))}
                        </div>

                        {/* Footer decoration */}
                        <div
                          className="px-4 py-2.5 flex items-center gap-1.5"
                          style={{
                            borderTop: "1px solid rgba(66,133,244,0.08)",
                          }}>
                          <div
                            className="h-px flex-1"
                            style={{
                              background:
                                "linear-gradient(90deg, #4285F4 0%, transparent 100%)",
                            }}
                          />
                          <span className="text-white/20 text-[10px] font-outfit">
                            ↑ scroll up
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </aside>
              )}
            </div>
          </section>

          {/* ── Related Posts ──────────────────────────────────────── */}
          {relatedPosts.length > 0 && (
            <section className="pb-16 lg:pb-24">
              <h3 className="font-stoke text-2xl text-white mb-8">
                Related Posts
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.slice(0, 3).map((relatedPost) => (
                  <RelatedCard
                    key={relatedPost._id}
                    post={relatedPost}
                    onClick={() => navigate(`/blogs/${relatedPost._id}`)}
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}
