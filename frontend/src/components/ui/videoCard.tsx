interface VideoCardProps {
  video: string;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <div
      className="card relative
        flex justify-center
        w-full
        h-[500px]
        p-1.5 xs:p-2 sm:p-2.5
        overflow-hidden
        bg-gradient-to-b from-[#0B23C8] to-black
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
        className="w-full h-full object-fill"
      />
    </div>
  );
}
