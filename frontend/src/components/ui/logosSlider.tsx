import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

// ✅ No imports — just string URLs pointing to public folder
const logos = [
  "/slider_logos/tozcall.png",
  "/slider_logos/pkLabs.png",
  "/slider_logos/beauty.png",
  "/slider_logos/desk.png",
  "/slider_logos/eyeora.png",
  "/slider_logos/fiscfiler.png",
  "/slider_logos/happy.png",
  "/slider_logos/narsun.png",
  "/slider_logos/nourai.png",
  "/slider_logos/siratulbaqi.png",
  "/slider_logos/skn.png",
  "/slider_logos/zenbe.png",
];

export default function LogosSlider() {
  return (
    <div className="flex justify-center">
      <div className="relative w-full max-w-[620px] overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#02070F]/80 via-[#02070F]/30 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#02070F]/80 via-[#02070F]/40 to-transparent pointer-events-none" />

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
              <div className="w-[120px] h-[60px] bg-white flex items-center justify-center px-2">
                <div className="w-full h-full flex items-center justify-center py-1">
                  <img
                    src={logo}
                    alt={`client logo ${index + 1}`}
                    className="w-full h-full object-contain"
                    loading="lazy" // ✅ lazy load
                    decoding="async" // ✅ non-blocking
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
