import LogoSlider from "../ui/logoSlider";
import VideoCard from "../ui/videoCard";
import video from "../../assets/Ai_video.mp4";
import fintechVideo from "../../assets/fintech_video.mp4";
import ecommerceVideo from "../../assets/ecommerce_video.mp4";
import educationVideo from "../../assets/edu_video.mp4";
import healthCareVideo from "../../assets/health_care.mp4";
import gamingVideo from "../../assets/gaming_video.mp4";
import contactVideo from "../../assets/contact_video.mp4";
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
];

export default function AdaptableSection() {
  // const serviceVideos = [...videos, ...videos];

  return (
    <section className="bg-black px-4 md:px-8 py-16  mx-auto">
      {/* Heading */}
      <div className="text-center md:mb-[101px] mb-[75px]">
        <span className="inline-block bg-primary text-white px-5 py-[18px] text-2xl font-outfit font-normal leading-4 mb-9 sm:mb-6">
          Adaptable for any sector
        </span>
      </div>

      {/* Scrollable cards */}
      <Swiper
        modules={[Autoplay, FreeMode]}
        simulateTouch={false}
        loop={true}
        speed={8000} // animation speed
        autoplay={{
          delay: 0, // continuous
          disableOnInteraction: false,
          // pauseOnMouseEnter: true,
        }}
        freeMode={true}
        slidesPerView={1}
        spaceBetween={24}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
        }}
        className="video-marquee">
        {serviceVideos.map((item) => (
          <SwiperSlide key={item.id} className="flex">
            <VideoCard video={item.video} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom slider */}
      {/* <LogoSlider /> */}
    </section>
  );
}
