import { useEffect, useState } from "react";
import circleImg from "@/assets/resources/blogs/hero-bg.png";
import rightCircleImg from "@/assets/resources/blogs/hero-bg-right.png";
import SearchIcon from "@/assets/icons/resources/blogs/search-icon.svg?react";

export default function BlogsHero() {
  const [query, setQuery] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");

    const listener = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(e.matches);
    };

    listener(media);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, []);

  return (
    <section
      className="heros_height relative w-full flex flex-col justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(50% 295.84% at 50% 50%, rgba(66, 133, 244, 0.25) 0%, rgba(2, 7, 15, 0) 70.6%)",
      }}>
      <img src={circleImg} className="absolute -top-[20%]" />

      <img src={rightCircleImg} className="absolute -bottom-20 right-0" />

      {/* ── Main content ─────────────────────────────────────────────────────── */}
      <div className="relative z-10  flex flex-col items-center justify-center text-center px-6 lg:px-8 py-8 lg:py-10">
        {/* Title */}
        <h1 className="text-white text-h1 font-normal font-stoke mb-4 leading-tight">
          Blogs
        </h1>

        {/* Subtitle */}
        <p className="text-white font-outfit font-medium text-[clamp(16px, 1.5vw, 20px)] mb-10 leading-relaxed">
          Insights, ideas, and expert knowledge from Aireb Solutions.
          <br className="hidden lg:block" />
          Helping you navigate the digital landscape.
        </p>

        {/* ── Search bar ───────────────────────────────────────────────────── */}
        <div
          className="flex items-center w-full border border-primary rounded-2xl py-2 px-[clamp(10px,1.5vw,20px)]"
          style={{
            maxWidth: 580,
            background: "linear-gradient(90deg, #4285F4 0%, #000000 100%)",
          }}>
          {/* Search icon */}
          <SearchIcon className="text-white mr-4" />

          {/* Input */}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              isMobile
                ? "Search articles..."
                : "Search for articles, guides, or tech news..."
            }
            className="flex-1 text-[clamp(12px,1.1vw,14px)] bg-transparent outline-none text-white placeholder-white placeholder:text-xs placeholder:font-outfit placeholder:font-normal md:placeholder:text-sm min-w-0 "
          />

          {/* Search button */}
          <button className="flex-shrink-0 text-primary bg-white hover:bg-primary hover:text-white whitespace-nowrap font-outfit text-sm border-0 font-bold rounded-2xl px-[clamp(10px,1.5vw,20px)] py-2 transition-all duration-200 hover:opacity-90 active:scale-95">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
