// import headPhoneImg from "@/assets/Dialer_assets/headphones.png";
// const BenifitsDialer = () => {
//   return (
//     <section
//       style={{
//         background: "linear-gradient(97.32deg, #0E1828 1.89%, #000000 98.11%)",
//       }}
//       className=" ">
//       <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr]">
//         <div className="flex flex-col pl-0 lg:pl-8 lg:px-0 px-6  py-16">
//           <div className="mb-10">
//             <h1 className="text-textColor font-stoke font-normal text-3xl md:text-4xl lg:text-5xl mb-4">
//               Benefits of AI Custom <br /> Dialer Solutions
//             </h1>
//             <p className="text-textColor font-outfit font-normal text-lg">
//               Partner with Aireb Solutions to implement an AI-powered custom
//               dialer solution that enhances your business operations, optimizes
//               communication, and improves customer relationships. Reach out
//               today to learn how we can revolutionize your business with AI
//               technology.
//             </p>
//           </div>
//           <div className="mt-10 flex flex-col gap-6">
//             <div className="flex gap-3">
//               <div className="px-4 py-3 border-025 border-[#8897FF]">
//                 <p className="font-stoke md:text-lg text-sm lg:text-xl">
//                   Increased Efficiency
//                 </p>
//               </div>
//               <div className="inline-flex px-4 py-3 border-025 border-[#8897FF]">
//                 <p className="font-stoke md:text-lg text-sm lg:text-xl">
//                   Improved Customer Experience
//                 </p>
//               </div>
//             </div>
//             <div className="flex gap-3">
//               <div className="px-4 py-3 border-025 border-[#8897FF]">
//                 <p className="font-stoke md:text-lg text-sm lg:text-xl">
//                   Cost Savings
//                 </p>
//               </div>
//               <div className="px-4 py-3 border-025 border-[#8897FF]">
//                 <p className="font-stoke md:text-lg text-sm lg:text-xl">
//                   Scalability
//                 </p>
//               </div>
//               <div className="px-4 py-3 border-025 border-[#8897FF]">
//                 <p className="font-stoke md:text-lg text-sm lg:text-xl">
//                   Get Started
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className=" flex items-start justify-end h-[649px]">
//           <img src={headPhoneImg} className="w-full h-full " />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BenifitsDialer;

import headPhoneImg from "@/assets/Dialer_assets/headphones.png";

const BenifitsDialer = () => {
  return (
    <section
      style={{
        background: "linear-gradient(97.32deg, #0E1828 1.89%, #000000 98.11%)",
      }}
      className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr]">
        {/* Left Column - Content */}
        <div className="flex flex-col px-6 lg:pl-8 lg:pr-0 py-16 lg:py-24">
          <div className="mb-8 sm:mb-10">
            <h1 className="text-textColor font-stoke font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] mb-4 leading-tight">
              Benefits of AI Custom <br /> Dialer Solutions
            </h1>
            <p className="text-textColor font-outfit font-normal text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
              Partner with Aireb Solutions to implement an AI-powered custom
              dialer solution that enhances your business operations, optimizes
              communication, and improves customer relationships. Reach out
              today to learn how we can revolutionize your business with AI
              technology.
            </p>
          </div>

          {/* Benefits Tags */}
          <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col gap-3 sm:gap-4 lg:gap-6">
            {/* First Row */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <div className="px-3 sm:px-4 py-2 sm:py-3 hover:bg-white rounded-sm hover:text-black cursor-pointer border-025 border-[#8897FF]">
                <p className="font-stoke text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl whitespace-nowrap">
                  Increased Efficiency
                </p>
              </div>
              <div className="inline-flex px-3 sm:px-4 py-2 sm:py-3 hover:bg-white hover:text-black cursor-pointer rounded-sm border-025 border-[#8897FF]">
                <p className="font-stoke text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl whitespace-nowrap">
                  Improved Customer Experience
                </p>
              </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <div className="px-3 sm:px-4 py-2 sm:py-3 border-025 hover:bg-white hover:text-black cursor-pointer rounded-sm border-[#8897FF]">
                <p className="font-stoke text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl whitespace-nowrap">
                  Cost Savings
                </p>
              </div>
              <div className="px-3 sm:px-4 py-2 sm:py-3 border-025 hover:bg-white hover:text-black cursor-pointer rounded-sm border-[#8897FF]">
                <p className="font-stoke text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl whitespace-nowrap">
                  Scalability
                </p>
              </div>
              <div className="px-3 sm:px-4 py-2 sm:py-3 border-025 hover:bg-white rounded-sm hover:text-black cursor-pointer border-[#8897FF]">
                <p className="font-stoke text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl whitespace-nowrap">
                  Get Started
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Headphone Image */}
        <div className="flex items-start justify-end h-[400px] sm:h-[500px] md:h-[550px] lg:h-[649px] relative">
          <img
            src={headPhoneImg}
            alt="AI Headphones"
            className="w-full h-full object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default BenifitsDialer;
