interface VideoCardProps {
  video: string;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <div
      className="card relative flex justify-center overflow-hidden bg-gradient-to-b from-primary to-black
        w-full max-w-[381px] h-[466px]
        lg:max-w-[450px] lg:h-[551px]
        p-1.5 xs:p-2 sm:p-2.5
        mx-auto
      ">
      {/* CORNERS */}
      <span className="corner bottom-left" />
      <span className="corner bottom-right" />
      <video
        src={video}
        autoPlay
        muted
        loop
        playsInline
        className="w-full max-w-[357.98px] h-[442.61px] 
          lg:max-w-[425px] lg:h-[527px]
          object-cover"
      />
    </div>
  );
}
