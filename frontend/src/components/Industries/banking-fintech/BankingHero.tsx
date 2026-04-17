import heroImg from "@/assets/Industies/banking-fintech/hero-img.png";
import bgImg from "@/assets/Industies/banking-fintech/hero-bg.png";

export default function BankingHero() {
  return (
    <section className="heros_height relative flex items-center ">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      />
      <div
        style={{
          background:
            "linear-gradient(66.03deg, rgba(66, 133, 244, 0.4) -38.71%, #000000 73.04%)",
        }}
        className="absolute inset-0"
      />
      <div className="container w-full z-10 relative  px-2 lg:px-8 flex flex-col lg:flex-row gap-4 py-8 lg:py-10">
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
            Custom FinTech
            <br className="hidden lg:block" /> Software Solutions
          </h1>
        </div>

        <div className="w-full lg:w-1/2 flex items-start justify-center lg:justify-end">
          <img
            src={heroImg}
            alt="FinTech Hero"
            className="
      w-[85%] 
      sm:w-[75%] 
      md:w-[70%] 
      lg:w-[100%] 
      max-w-[720px] 
      h-auto 
      object-contain
    "
          />
        </div>
      </div>
    </section>
  );
}
