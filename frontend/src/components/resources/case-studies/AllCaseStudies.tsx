import { useState } from "react";
import cardImg1 from "@/assets/resources/white-papers/card-1.png";
import cardImg2 from "@/assets/resources/white-papers/card-2.png";
import cardImg3 from "@/assets/resources/white-papers/card-3.png";
import cardImg4 from "@/assets/resources/white-papers/card-4.png";
import cardImg5 from "@/assets/resources/white-papers/card-5.png";
import cardImg6 from "@/assets/resources/white-papers/card-6.png";

interface WhiePaperPost {
  id: number;
  image: string;
  title: string;
  pdfUrl?: string;
}

const posts: WhiePaperPost[] = [
  {
    id: 1,
    image: cardImg1,

    title:
      "DevOps Transformation & Assessment for Education Technology (EdTech) Platform",
    pdfUrl: "/pdfs/Edtechcasestudy.pdf",
  },
  {
    id: 2,
    image: cardImg2,

    title: "DevOps Transformation & Assessment for Job Portal Platform",
    pdfUrl: "/pdfs/jobscasestudy.pdf",
  },
  // {
  //   id: 3,
  //   image: cardImg3,

  //   title: "Build a High-Quality Content Website For Better SEO",
  //   pdfUrl: "/pdfs/Edtechcasestudy.pdf",
  // },
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

// ── Small Card ────────────────────────────────────────────────────────────────
function SmallCard({ post, variant }) {
  const onClick = () => window.open(post.pdfUrl, "_blank");
  return (
    <div className="flex flex-col h-full">
      {/* Image */}
      <div
        onClick={onClick}
        className="relative overflow-hidden flex-shrink-0 blogsCards_TopEdge"
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
        <div className="flex flex-col items-start justify-start gap-3">
          <div className="flex items-center  gap-4">
            <p className="font-outfit font-normal text-sm text-white py-1 px-2 bg-[#4285F433]">
              Case Study
            </p>{" "}
            <div className="w-2 h-2 animate-pulse rounded-full bg-white"></div>{" "}
            <p className="font-outfit font-thin text-base">
              Artificial Inteligence
            </p>
          </div>
          <h3 className="text-white font-outfit font-light leading-snug line-clamp-3  text-[clamp(16px,2vw,24px)]">
            {post.title}
          </h3>
        </div>
        {/* Meta row */}
        <div className="flex items-center justify-end pt-3">
          <button
            onClick={onClick}
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
export default function AllCaseStudies() {
  return (
    <section className="w-full bg-[#02070F] ">
      <div className="container py-16 lg:py-24 px-2 lg:px-8">
        <div className="flex justify-center">
          <h1 className="font-stoke font-normal text-h2 text-white text-center mb-20 mr-1">
            All Case Studies
          </h1>
          <span className="font-outfit font-thin text-h2 text-white">
            {" "}
            ( {posts?.length})
          </span>
        </div>
        {/* SMALL CARDS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <SmallCard key={post.id} post={post} variant="small" />
          ))}
        </div>
      </div>
    </section>
  );
}
