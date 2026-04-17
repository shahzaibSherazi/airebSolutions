import VideoCard from "../ui/videoCard";
import video from "../../assets/Ai_video.mp4";
import fintechVideo from "../../assets/fintech_video.mp4";
import ecommerceVideo from "../../assets/ecommerce_video.mp4";
import educationVideo from "../../assets/edu_video.mp4";
import healthCareVideo from "../../assets/health_care.mp4";
import gamingVideo from "../../assets/gaming_video.mp4";
import contactVideo from "../../assets/contact_video.mp4";
import realEstateVideo from "../../assets/real_estate_video.mp4";
import startUpVideo from "../../assets/startUp_video.mp4";
import retailVideo from "../../assets/retail_video.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, FreeMode } from "swiper/modules";

const serviceVideos = [
  { id: 1, video: video },
  { id: 2, video: fintechVideo },
  { id: 3, video: ecommerceVideo },
  { id: 4, video: educationVideo },
  { id: 5, video: healthCareVideo },
  { id: 6, video: gamingVideo },
  { id: 7, video: contactVideo },
  { id: 8, video: realEstateVideo },
  { id: 9, video: startUpVideo },
  { id: 10, video: retailVideo },
];

export default function AdaptableSection() {
  return (
    <section className="bg-black">
      <div className=" px-1 lg:px-8 py-16 lg:py-24 ">
        {/* Heading */}
        <div className=" border main_heading rounded-full text-center mb-[45px] xs:mb-[55px] sm:mb-[70px] md:mb-[85px] lg:mb-[101px] w-fit mx-auto flex  justify-center  text-white px-3 xs:px-4 sm:px-5 py-2 xs:py-2.5 sm:py-3 text-xs xs:text-sm sm:text-lg md:text-xl lg:text-2xl font-outfit font-normal leading-4">
          Adaptable for any sector
        </div>

        {/* Scrollable cards */}
        <Swiper
          modules={[Autoplay, FreeMode]}
          allowTouchMove={false}
          simulateTouch={false}
          touchStartPreventDefault={false}
          freeMode={false}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          slidesPerView="auto"
          spaceBetween={16}
          breakpoints={{
            640: {
              spaceBetween: 10,
            },
            768: {
              spaceBetween: 10,
            },
            1024: {
              spaceBetween: 10,
            },
            1550: {
              spaceBetween: 12,
            },
          }}
          className="video-marquee">
          {serviceVideos.map((item) => (
            <SwiperSlide key={item.id} className="!w-auto">
              <VideoCard video={item.video} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
