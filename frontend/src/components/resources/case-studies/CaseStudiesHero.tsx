import paperImg from "@/assets/resources/white-papers/hero-img.png";
import rightImg from "@/assets/resources/white-papers/hero-bg-right.png";
export default function CaseStudiesHero() {
  return (
    <section className="heros_height relative flex flex-col justify-center w-full overflow-hidden py-8 lg:py-10">
      {/* ── Radial gradient background (from Figma) ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 295.84% at 50% 50%, rgba(66, 133, 244, 0.25) 0%, rgba(2, 7, 15, 0) 70.6%)",
        }}
      />

      {/* ── Title ── */}
      <h1 className="relative z-10 text-center text-h1 font-stoke font-normal text-white mb-10">
        Case Studies
      </h1>

      {/* ── Content row ── */}
      <div className="relative z-10 flex items-center justify-center  px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="relative flex flex-col lg:flex-row items-center gap-24  w-full">
          {/* ── Left image with corner brackets ── */}
          <div className="relative flex items-center justify-center flex-shrink-0 w-1/2 mb-10 md:mb-0">
            <div className=" relative whitePaperCards_TopEdge  w-[clamp(300px,50vh,510px)] aspect-square ">
              <img
                src={paperImg}
                alt="White Paper Featured"
                className="w-full h-full object-cover "
              />
            </div>
          </div>

          {/* ── Right content ── */}
          <div className="relative flex flex-col items-center lg:items-start justify-center lg:justify-start w-1/2">
            <div className="absolute left-0 -bottom-28 pointer-events-none hidden md:block">
              <img src={rightImg} className="w-full h-full object-contain" />
            </div>

            {/* Title */}
            <h2 className="text-white text-[clamp(18px,2.2vw,28px)] font-outfit font-light mb-3 leading-snug">
              Transforming Bussinesses With Web <br /> Development Excellence
            </h2>

            {/* Category tag */}
            <p className="mb-8 text-[clamp(12px,1.1vw,14px)] font-outfit font-normal text-primary">
              Development Excellence
            </p>

            {/* Read Now button */}
            <div className="flex justify-center md:justify-start">
              <button className="flex items-center bg-primary text-[clamp(13px,1.1vw,15px)] font-outfit font-bold gap-2 text-white  rounded-sm px-[clamp(10px,2vw,24px)] py-[clamp(8px,1.1vw,12px)] transition-all duration-200 hover:opacity-90 active:scale-95">
                Read Now
                <span className="text-base">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
