// import LogoSlider from "../ui/logoSlider";
// import btnIcon from "../../assets/icons/btn_icon.png";

// const ResultSection = () => {
//   return (
//     <section className="w-full bg-white flex flex-col px-4 md:px-6 py-8 items-center">
//       {/* Header */}
//       <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-1 lg:gap-0 w-full pt-8 sm:pt-10 md:pt-12">
//         {/* Left Column */}
//         <div className="flex flex-col md:gap-[30px] gap-[7px] lg:w-1/3">
//           <h1 className="text-xl font-normal text-[#0B23C8]">Results</h1>
//           <p className="text-3xl sm:text-4xl font-stoke text-[#000000]">
//             Impact you can feel
//           </p>
//         </div>

//         {/* Middle Column */}
//         <div className="lg:w-1/3">
//           <p className="text-[#4B4B4B] text-base font-normal leading-[28px]">
//             Our approach allows us to deliver exceptional experiences that drive
//             growth and success for all stakeholders. Let’s rise to new heights
//             with the power of digital transformation.
//           </p>
//         </div>

//         {/* Right Column */}
//         <div className="hidden md:flex lg:justify-end">
//           <button className="inline-flex items-center gap-2 bg-primary text-white text-xs sm:text-sm font-medium px-[21px] py-[18px] hover:bg-blue-700 transition whitespace-nowrap">
//             Read More About Us
//             <img
//               src={btnIcon}
//               alt="icon"
//               className="w-2.5 h-2.5 sm:w-3 sm:h-3"
//             />
//           </button>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="flex flex-col sm:flex-row gap-6 md:pt-[50px] pt-[56px] lg:gap-12 w-full">
//         {/* Stat 1 */}
//         <div className="flex flex-col items-start  sm:flex-1 gap-2">
//           <p className="text-black font-normal text-[24px] sm:text-[42px]">
//             95%
//           </p>
//           <p className="text-[#4B4B4B] text-sm text-left">
//             Clients who stay because we consistently deliver results
//           </p>
//         </div>

//         {/* Stat 2 */}
//         <div className="flex flex-col items-start  sm:flex-1 gap-2 lg:border-l-2 lg:pl-4 border-black">
//           <p className="text-black font-normal text-[24px] sm:text-[42px]">
//             45%
//           </p>
//           <p className="text-[#4B4B4B] text-sm text-left ">
//             Conversion growth driven by thoughtful design and optimisation
//           </p>
//         </div>

//         {/* Stat 3 */}
//         <div className="flex flex-col items-start  sm:flex-1 gap-2 lg:border-l-2 lg:pl-4 border-black ">
//           <p className="text-black font-normal text-[24px] sm:text-[42px]">
//             99%
//           </p>
//           <p className="text-[#4B4B4B] text-sm text-left">
//             Reliable, secure systems that perform with unwavering stability
//           </p>
//         </div>
//         <div className="md:hidden justify-start pt-6 sm:pt-8">
//           <button className="inline-flex items-center gap-2 bg-primary text-white text-xs sm:text-sm font-medium px-[21px] py-[18px] hover:bg-blue-700 transition whitespace-nowrap">
//             Read More About Us
//             <img
//               src={btnIcon}
//               alt="icon"
//               className="w-2.5 h-2.5 sm:w-3 sm:h-3"
//             />
//           </button>
//         </div>
//       </div>

//       {/* Footer Slider */}
//       <div className="w-full mt-[clamp(64px,8vh,111px)]">
//         <LogoSlider />
//       </div>
//     </section>
//   );
// };

// export default ResultSection;

import { useEffect, useRef, useState } from "react";
import LogoSlider from "../ui/logoSlider";
import btnIcon from "../../assets/icons/btn_icon.png";
import { useInView } from "framer-motion";

const ResultSection = () => {
  const [count95, setCount95] = useState(0);
  const [count45, setCount45] = useState(0);
  const [count99, setCount99] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      // Animate 95% from 0 to 95
      const duration95 = 2000; // 2 seconds
      const steps95 = 95;
      const interval95 = duration95 / steps95;

      let current95 = 0;
      const timer95 = setInterval(() => {
        current95 += 1;
        setCount95(current95);
        if (current95 >= 95) clearInterval(timer95);
      }, interval95);

      // Animate 45% from 0 to 45
      const duration45 = 1500; // 1.5 seconds
      const steps45 = 45;
      const interval45 = duration45 / steps45;

      let current45 = 0;
      const timer45 = setInterval(() => {
        current45 += 1;
        setCount45(current45);
        if (current45 >= 45) clearInterval(timer45);
      }, interval45);

      // Animate 99% from 0 to 99
      const duration99 = 2200; // 2.2 seconds
      const steps99 = 99;
      const interval99 = duration99 / steps99;

      let current99 = 0;
      const timer99 = setInterval(() => {
        current99 += 1;
        setCount99(current99);
        if (current99 >= 99) clearInterval(timer99);
      }, interval99);

      return () => {
        clearInterval(timer95);
        clearInterval(timer45);
        clearInterval(timer99);
      };
    }
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white flex flex-col px-4 md:px-6 py-[87px] md:py-[103px] items-center">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-1 lg:gap-0 w-full ">
        {/* Left Column */}
        <div className="flex flex-col md:gap-[30px] gap-[7px] lg:w-1/3">
          <h1 className="text-xl font-normal text-[#0B23C8]">Results</h1>
          <p className="text-3xl sm:text-4xl font-stoke text-[#000000]">
            Impact you can feel
          </p>
        </div>

        {/* Middle Column */}
        <div className="lg:w-1/3">
          <p className="text-[#4B4B4B] text-base font-normal font-outfit leading-[28px]">
            Our approach allows us to deliver exceptional experiences that drive
            growth and success for all stakeholders. Let's rise to new heights
            with the power of digital transformation.
          </p>
        </div>

        {/* Right Column */}
        <div className="hidden md:flex lg:justify-end">
          <button className="inline-flex items-center gap-2 bg-primary text-white text-xs sm:text-sm font-medium px-[21px] py-[18px] hover:bg-blue-700 transition whitespace-nowrap">
            Read More About Us
            <img
              src={btnIcon}
              alt="icon"
              className="w-2.5 h-2.5 sm:w-3 sm:h-3"
            />
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-col sm:flex-row gap-6 md:pt-[50px] pt-[56px] lg:gap-12 w-full">
        {/* Stat 1 */}
        <div className="flex flex-col items-start sm:flex-1 gap-2">
          <p className="text-black font-normal text-[24px] sm:text-[42px]">
            {count95}%
          </p>
          <p className="text-[#4B4B4B] text-sm text-left">
            Clients who stay because we consistently deliver results
          </p>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-start sm:flex-1 gap-2 lg:border-l-2 lg:pl-4 border-black">
          <p className="text-black font-normal text-[24px] sm:text-[42px]">
            {count45}%
          </p>
          <p className="text-[#4B4B4B] text-sm text-left">
            Conversion growth driven by thoughtful design and optimisation
          </p>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-start sm:flex-1 gap-2 lg:border-l-2 lg:pl-4 border-black">
          <p className="text-black font-normal text-[24px] sm:text-[42px]">
            {count99}%
          </p>
          <p className="text-[#4B4B4B] text-sm text-left">
            Reliable, secure systems that perform with unwavering stability
          </p>
        </div>
        <div className="md:hidden justify-start pt-6 sm:pt-8">
          <button className="inline-flex items-center gap-2 bg-primary text-white text-xs sm:text-sm font-medium px-[21px] py-[18px] hover:bg-blue-700 transition whitespace-nowrap">
            Read More About Us
            <img
              src={btnIcon}
              alt="icon"
              className="w-2.5 h-2.5 sm:w-3 sm:h-3"
            />
          </button>
        </div>
      </div>

      {/* Footer Slider */}
      <div className="w-full mt-[clamp(64px,8vh,111px)]">
        <LogoSlider />
      </div>
    </section>
  );
};

export default ResultSection;
