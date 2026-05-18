import circleImg from "@/assets/resources/blogs/hero-bg.png";
import rightCircleImg from "@/assets/resources/blogs/hero-bg-right.png";
import BlogSearch from "./BlogSearch";

interface BlogsHeroProps {
  onSearchChange?: (query: string) => void;
}

export default function BlogsHero({ onSearchChange }: BlogsHeroProps) {
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
      <div className="container relative z-10 flex flex-col items-center justify-center text-center lg:px-8 py-8 lg:py-10">
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

        {/* ── Professional Search bar ───────────────────────────────────────────────────── */}
        <BlogSearch onSearchChange={onSearchChange} />
      </div>
    </section>
  );
}
