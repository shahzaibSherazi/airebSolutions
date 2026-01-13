import LogoSlider from "../ui/logoSlider";
import VideoCard from "../ui/videoCard";
import video from "../../assets/industry_video.mp4";

const serviceVideos = [
  { id: 1, video },
  { id: 2, video },
  { id: 3, video },
];

export default function AdaptableSection() {
  return (
    <section className="bg-black py-20 px-8">
      {/* Heading */}
      <div className="text-center mb-12">
        <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded text-sm">
          Adaptable for any sector
        </span>
      </div>

      {/* Scrollable cards */}
      <div className="w-full overflow-x-auto scrollbar-hide px-4">
        <div className="flex gap-4  animate-slide">
          {serviceVideos.map((v) => (
            <VideoCard key={v.id} video={v.video} />
          ))}
        </div>
      </div>

      {/* Bottom slider */}
      <LogoSlider />
    </section>
  );
}
