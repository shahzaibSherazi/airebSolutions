import VideoCard from "../ui/videoCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const serviceVideos = [
  { id: 1, video: "/videos/Ai_video.mp4" },
  { id: 2, video: "/videos/fintech_video.mp4" },
  { id: 3, video: "/videos/ecommerce_video.mp4" },
  { id: 4, video: "/videos/edu_video.mp4" },
  { id: 5, video: "/videos/health_care.mp4" },
  { id: 6, video: "/videos/gaming_video.mp4" },
  { id: 7, video: "/videos/contact_video.mp4" },
  { id: 8, video: "/videos/real_estate_video.mp4" },
  { id: 9, video: "/videos/startUp_video.mp4" },
  { id: 10, video: "/videos/retail_video.mp4" },
];

// Duplicate cards for ultra-wide / 4K seamless flow
const loopVideos = [...serviceVideos, ...serviceVideos, ...serviceVideos];

export default function AdaptableSection() {
  return (
    <section className="bg-black overflow-hidden">
      <div className="px-1 lg:px-8 py-16 lg:py-24">
        {/* Heading */}
        <div className="border main_heading rounded-full text-center mb-[45px] xs:mb-[55px] sm:mb-[70px] md:mb-[85px] lg:mb-[101px] w-fit mx-auto flex justify-center text-white px-3 xs:px-4 sm:px-5 py-2 xs:py-2.5 sm:py-3 text-xs xs:text-sm sm:text-lg md:text-xl lg:text-2xl font-outfit font-normal leading-4">
          Adaptable for any sector
        </div>

        {/* Marquee Slider */}
        <Swiper
          modules={[Autoplay]}
          allowTouchMove={false}
          simulateTouch={false}
          loop={true}
          loopAdditionalSlides={loopVideos.length}
          speed={6000} // smooth constant speed
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          slidesPerView="auto"
          centeredSlides={false}
          watchSlidesProgress={true}
          spaceBetween={12}
          breakpoints={{
            320: {
              spaceBetween: 8,
            },
            640: {
              spaceBetween: 10,
            },
            1024: {
              spaceBetween: 12,
            },
            1600: {
              spaceBetween: 14,
            },
            2560: {
              spaceBetween: 18, // 4K optimized
            },
            3840: {
              spaceBetween: 22, // ultra-wide / 4K
            },
          }}
          className="video-marquee !overflow-visible ">
          {loopVideos.map((item, index) => (
            <SwiperSlide
              key={`${item.id}-${index}`}
              className="!w-auto flex-shrink-0">
              <VideoCard video={item.video} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
