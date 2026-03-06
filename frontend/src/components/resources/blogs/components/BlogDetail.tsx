import { useEffect, useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { blogData, BlogPost, ContentBlock } from "./BlogData";

// ── image map — import all blog images and map by id ──────────────
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

const imageMap: Record<number, string> = {
  1: devopsImg,
  2: webAppImg,
  3: contentWebImg,
  4: smartdevOpsImg,
  5: enterpriseImg,
  6: aiPoweredImg,
  7: mobileAppImg,
  8: designingImg,
  9: crmImg,
  10: transformingImg,
  11: contentWebImg,
  12: designingImg,
  13: aiPoweredImg,
  14: mobileAppImg,
  15: designingImg,
  16: mobileAppImg,
  17: designingImg,
  18: designingImg,
};

// ── Gradient border styles (same as AllBlogs) ─────────────────────
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

// ── Content block renderer ────────────────────────────────────────
function RenderBlock({ block }: { block: ContentBlock }) {
  if (block.type === "p") {
    return (
      <p className="font-outfit text-[15px] text-white/75 leading-[1.85] mb-4">
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
        {block.items?.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-2 font-outfit text-[15px] text-white/75 leading-relaxed">
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
        {block.items?.map((item, i) => (
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

// ── Related post mini-card (same SmallCard style) ─────────────────
function RelatedCard({
  post,
  onClick,
}: {
  post: BlogPost;
  onClick: () => void;
}) {
  return (
    <div className="flex flex-col h-full cursor-pointer" onClick={onClick}>
      <div
        className="relative overflow-hidden flex-shrink-0"
        style={imageBorderStyle}>
        <img
          src={post.image}
          alt={post.title}
          className="w-full object-contain transition-transform duration-500 hover:scale-105"
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
            {post.readTime}
          </span>
        </div>
        <div className="flex items-center justify-between mt-auto pt-3">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
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

// ── Main BlogDetail ───────────────────────────────────────────────
interface Props {
  postId: number;
  onBack: () => void;
  onNavigate: (id: number) => void;
}

export default function BlogDetail({ postId, onBack, onNavigate }: Props) {
  const raw = blogData.find((p) => p.id === postId);
  const [activeSection, setActiveSection] = useState<string>("");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Hydrate image
  const post: BlogPost | undefined = raw
    ? { ...raw, image: imageMap[raw.id] ?? imageMap[1] }
    : undefined;

  const relatedPosts: BlogPost[] = (post?.relatedIds ?? [])
    .map((id) => {
      const r = blogData.find((p) => p.id === id);
      return r ? { ...r, image: imageMap[r.id] ?? imageMap[1] } : null;
    })
    .filter(Boolean) as BlogPost[];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [postId]);

  // Active TOC tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );
    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [postId]);

  if (!post) return <div className="text-white p-16">Post not found.</div>;

  const scrollToSection = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="w-full min-h-screen bg-[#02070F] text-white">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <div
        style={{
          background:
            "radial-gradient(50% 295.84% at 50% 50%, rgba(66, 133, 244, 0.25) 0%, rgba(2, 7, 15, 0) 70.6%)",
        }}
        className="px-6 lg:px-8 lg:py-24 py-16">
        {/* Tag */}
        <span className="inline-block font-outfit text-xs tracking-widest uppercase text-primary border border-white/20 px-3 py-1 mb-5">
          {post.category}
        </span>

        {/* Hero row: title left, image right */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center mb-8 blogDetail-fade-up">
          {/* Left */}
          <div className="flex-1">
            <h1 className="font-stoke text-[clamp(28px,4vw,52px)] leading-tight text-white mb-6">
              {post.title}
            </h1>
            {/* Author + meta */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shrink-0">
                <span className="text-white text-xs font-bold">
                  {post.author.charAt(0)}
                </span>
              </div>
              <span className="font-outfit text-sm text-primary font-medium">
                {post.author}
              </span>
            </div>
            <div className="flex items-center gap-4 font-outfit text-xs text-white/50 pl-10">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Right: hero image */}
          <div className="w-full lg:w-[45%] shrink-0">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* ── Body: article + sticky TOC ───────────────────────── */}
      <div className="px-4 sm:px-8 lg:px-16 py-12 flex flex-col lg:flex-row gap-12">
        {/* Article */}
        <article className="flex-1 min-w-0">
          {/* Intro paragraph */}
          {post.intro && (
            <p className="font-outfit text-[15px] text-white/75 leading-[1.9] mb-10 border-l-2 border-[#4285F4] pl-5">
              {post.intro}
            </p>
          )}

          {/* Sections */}
          {post.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              ref={(el) => {
                sectionRefs.current[section.id] = el;
              }}
              className="mb-10 scroll-mt-8">
              <h2 className="font-stoke text-[clamp(18px,2.5vw,26px)] text-white mb-5 leading-snug">
                {section.heading}
              </h2>
              {section.content.map((block, i) => (
                <RenderBlock key={i} block={block} />
              ))}
            </section>
          ))}
        </article>

        {/* Sticky TOC */}
        <aside className="hidden lg:block w-56 xl:w-64 shrink-0">
          <div className="sticky top-8">
            <p className="font-outfit text-xs tracking-widest uppercase text-white/40 mb-4">
              Introduction
            </p>
            <nav className="flex flex-col gap-1">
              {post.sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left font-outfit text-[13px] leading-snug py-1.5 px-3 rounded transition-all duration-200 border-l-2 ${
                    activeSection === section.id
                      ? "text-white border-[#4285F4] bg-[#4285F4]/10"
                      : "text-white/40 border-transparent hover:text-white/70 hover:border-white/20"
                  }`}>
                  {section.heading}
                </button>
              ))}
            </nav>
          </div>
        </aside>
      </div>

      {/* ── Related Posts ─────────────────────────────────────── */}
      {relatedPosts.length > 0 && (
        <div className="px-4 sm:px-8 lg:px-16 pb-20">
          <div
            className="h-px mb-10"
            style={{
              background:
                "linear-gradient(90deg, transparent, #4285F4 50%, transparent)",
            }}
          />
          <div className="inline-block font-outfit text-sm text-white border border-white/20 px-4 py-1.5 mb-8">
            Related Posts
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((rp) => (
              <RelatedCard
                key={rp.id}
                post={rp}
                onClick={() => onNavigate(rp.id)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
