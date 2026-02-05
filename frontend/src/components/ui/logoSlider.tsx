// import logo from "../../assets/slider_logos/slider_logo.png";
// import pklabs from "../../assets/slider_logos/pkLabs.png";
// import beauty from "../../assets/slider_logos/beauty.png";
// import desk from "../../assets/slider_logos/desk.png";
// import eyeora from "../../assets/slider_logos/eyeora.png";
// import fiscfiler from "../../assets/slider_logos/fiscfiler.png";
// import happy from "../../assets/slider_logos/happy.png";
// import masstorts from "../../assets/slider_logos/masstort.png";
// import narsun from "../../assets/slider_logos/narsun.png";
// import nourai from "../../assets/slider_logos/nourai.png";
// import siratulbaqi from "../../assets/slider_logos/siratulbaqi.png";
// import skn from "../../assets/slider_logos/skn.png";
// import zenbe from "../../assets/slider_logos/zenbe.png";
// const logos = [
//   logo,
//   pklabs,
//   beauty,
//   desk,
//   eyeora,
//   fiscfiler,
//   happy,
//   masstorts,
//   narsun,
//   nourai,
//   siratulbaqi,
//   skn,
//   zenbe,
// ];

// export default function LogoSlider() {
//   const duplicatedLogos = [...logos, ...logos];
//   return (
//     <div className=" flex justify-center">
//       {/* Limited width container */}
//       <div className="relative w-full max-w-[520px] overflow-hidden ">
//         {/* Left gradient overlay */}
//         <div
//           className="absolute left-0 top-0 bottom-0 w-24 z-10
//           bg-gradient-to-r from-primary/80 via-primary/30 to-transparent
//           pointer-events-none"
//         />
//         {/* Right gradient overlay */}
//         <div
//           className="absolute right-0 top-0 bottom-0 w-24 z-10
//           bg-gradient-to-l from-primary/80 via-primary/30 to-transparent
//           pointer-events-none"
//         />
//         <div className="flex gap-4 animate-slide">
//           {duplicatedLogos.map((logo, index) => (
//             <div
//               key={index}
//               className="
//                 min-w-[120px]
//                 h-[60px]
//                 bg-black
//                 flex
//                 items-center
//                 justify-center
//                 px-2
//               ">
//               <img
//                 src={logo}
//                 alt="logo"
//                 className="h-full w-full object-contain"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

import logo from "../../assets/slider_logos/slider_logo.png";
import pklabs from "../../assets/slider_logos/pkLabs.png";
import beauty from "../../assets/slider_logos/beauty.png";
import desk from "../../assets/slider_logos/desk.png";
import eyeora from "../../assets/slider_logos/eyeora.png";
import fiscfiler from "../../assets/slider_logos/fiscfiler.png";
import happy from "../../assets/slider_logos/happy.png";
import masstorts from "../../assets/slider_logos/masstort.png";
import narsun from "../../assets/slider_logos/narsun.png";
import nourai from "../../assets/slider_logos/nourai.png";
import siratulbaqi from "../../assets/slider_logos/siratulbaqi.png";
import skn from "../../assets/slider_logos/skn.png";
import zenbe from "../../assets/slider_logos/zenbe.png";

const logos = [
  logo,
  pklabs,
  beauty,
  desk,
  eyeora,
  fiscfiler,
  happy,
  masstorts,
  narsun,
  nourai,
  siratulbaqi,
  skn,
  zenbe,
];

export default function LogoSlider() {
  return (
    <div className="flex justify-center">
      {/* Limited width container */}
      <div className="relative w-full max-w-[520px] overflow-hidden">
        {/* Left gradient overlay */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 
          bg-gradient-to-r from-primary/80 via-primary/30 to-transparent 
          pointer-events-none"
        />

        {/* Right gradient overlay */}
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 
          bg-gradient-to-l from-primary/80 via-primary/30 to-transparent 
          pointer-events-none"
        />

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, FreeMode]}
          simulateTouch={false}
          spaceBetween={16}
          slidesPerView="auto"
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          freeMode={true}
          className="logo-swiper">
          {logos.map((logo, index) => (
            <SwiperSlide key={index} className="!w-[120px]">
              <div
                className="
                  w-[120px]
                  h-[60px]
                  bg-black
                  flex
                  items-center
                  justify-center
                  px-2
                ">
                <img
                  src={logo}
                  alt={`logo-${index}`}
                  className="h-full w-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
