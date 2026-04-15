import heroImg1 from "@/assets/Industies/education/hero-imag1.png";
import heroImg2 from "@/assets/Industies/education/hero-imag2.png";
import PhoneMockup from "./PhoneMockup";

export default function EducationHero() {
  return (
    <section
      className="heros_height relative w-full flex flex-col justify-end"
      style={{
        background:
          "linear-gradient(257.21deg, rgba(0, 0, 0, 0) 1.73%, #0E1828 98.27%)",
      }}>
      <div className="container w-full px-6 lg:px-8 flex flex-col lg:flex-row gap-4 py-8 lg:py-10">
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-end items-start w-full space-y-6">
          {/* Sector Button */}

          <p
            style={{
              background: "linear-gradient(180deg, #4285F4 0%, #02070F 100%)",
            }}
            className="font-outfit text-[clamp(14px,1.5vw,22px)] font-bold mb-[2vh] sm:mb-[3vh] border border-primary rounded-sm w-fit px-10 py-3">
            Sector
          </p>

          <h1 className="font-stoke text-h1 leading-[1.28] text-white">
            Healthcare &
            <br className="hidden lg:block" /> Pharmaceuticals
          </h1>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative w-full flex justify-center lg:justify-end items-center gap-6 mt-16 lg:mt-0">
          {/* <PhoneMockup /> */}
          {/* First Phone */}
          <img
            src={heroImg1}
            alt="Education App 1"
            className="w-[clamp(130px,22vw,300px)] md:w-[clamp(130px,30vh,300px)] h-auto object-contain mb-12"
          />

          {/* Second Phone */}
          <img
            src={heroImg2}
            alt="Education App 2"
            className="w-[clamp(130px,22vw,300px)] md:w-[clamp(130px,30vh,300px)] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
