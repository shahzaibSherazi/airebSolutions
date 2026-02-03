// import bgImg from "../../assets/web_hero_bg.png";

// const WebHeroSection = () => {
//   return (
//     <section
//       className="h-[100vh] w-full  bg-black flex items-center bg-no-repeat bg-cover bg-center"
//       style={{
//         backgroundImage: `url(${bgImg})`,
//       }}>
//       <div
//         style={{
//           background:
//             " linear-gradient(66.03deg, #629DFF -38.71%, rgba(0, 0, 0, 0.2) 114.21%)",
//         }}
//         className="w-full h-full px-8 py-[8vh] sm:py-[10vh] lg:py-[12vh] flex flex-col items-end justify-end gap-[2vh] sm:gap-[3vh] lg:gap-[4.5vh]">
//         {/* Description Text */}
//         <p className="font-outfit font-normal text-[clamp(14px,1.5vw,18px)] leading-[1.6] tracking-[0px] text-gray-300  w-full">
//           Scalable Web Solutions for Ambitious Brands
//         </p>
//         <h1 className="font-stoke font-normal w-full block text-[clamp(28px,5vw,56px)] leading-[1.28] tracking-[0px] text-white">
//           Web Development <br className="lg:block hidden" /> Service
//         </h1>
//       </div>
//     </section>
//   );
// };

// export default WebHeroSection;

import bgImg from "../../assets/web_hero_bg.png";

const WebHeroSection = () => {
  return (
    <section className="relative w-full min-h-[100svh] bg-black overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${bgImg})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(66deg,#629DFF_-90%,rgba(0,0,0,0.2)_114%)]" />

      {/* Content */}
      <div className="relative z-10 min-h-[100svh] px-8 py-[8vh] sm:py-[10vh] lg:py-[12vh] flex flex-col justify-end gap-[2vh] sm:gap-[3vh] lg:gap-[4.5vh]">
        <p className="font-outfit text-[clamp(14px,1.5vw,18px)] leading-[1.6] text-gray-300 max-w-2xl">
          Scalable Web Solutions for Ambitious Brands
        </p>

        <h1 className="font-stoke text-[clamp(28px,5vw,56px)] leading-[1.28] text-white">
          Web Development <br className="hidden lg:block" />
          Service
        </h1>
      </div>
    </section>
  );
};

export default WebHeroSection;
