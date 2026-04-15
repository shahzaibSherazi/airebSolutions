import careerImg from "@/assets/careers/hero-img.png";
import rightImg from "@/assets/careers/rightImg.png";
export default function CareersHero() {
  return (
    <section className="heros_height relative flex  justify-center flex-col overflow-hidden py-8 lg:py-10">
      {/* ── Radial gradient background (from Figma) ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, #02070F 0%, #103775 100%)",
        }}
      />

      {/* ── Title ── */}
      <h1 className="relative z-10 text-center text-h1 font-stoke font-normal text-white mb-10">
        Careers
      </h1>

      {/* ── Content row ── */}
      <div className="relative z-10 flex items-center justify-center  px-6 lg:px-8">
        <div className="relative flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto  w-full">
          {/* ── Left image with corner brackets ── */}
          <div className="relative flex items-center justify-center flex-shrink-0 w-1/2 mb-10 md:mb-0">
            {/* Image — replace src with your import */}
            <div className=" relative careerHeroImg_Edge ml-0 md:ml-10 w-[clamp(250px,30vw,310px)] aspect-[387/388] ">
              <img
                src={careerImg}
                alt="careers Featured"
                className="w-full h-full object-cover "
              />
            </div>
          </div>

          {/* ── Right content ── */}
          <div className="relative flex flex-col items-center lg:items-start justify-center lg:justify-start w-full md:w-1/2">
            <div className="absolute left-20 -bottom-10 pointer-events-none hidden md:block">
              <img src={rightImg} className="w-full h-full object-contain" />
            </div>

            {/* Title */}
            <h2 className="text-white text-[clamp(16px,2.2vw,28px)] font-outfit font-light mb-3 leading-snug">
              Mid Frontend Developer (React.js & Next.js) <br /> - open source
            </h2>

            {/* Category tag */}
            <p className="mb-20 text-[clamp(12px,1.1vw,14px)] font-outfit font-normal text-primary">
              Open Postion
            </p>

            {/* Read Now button */}
            <div className="flex justify-center md:justify-start">
              <button className="flex items-center bg-primary text-[clamp(13px,1.1vw,15px)] font-outfit font-bold gap-2 text-white  rounded-sm px-6 py-3 transition-all duration-200 hover:opacity-90 active:scale-95">
                Apply Now
                <span className="text-base">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
