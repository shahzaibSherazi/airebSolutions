interface VideoCardProps {
  video: string;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <div
      className="
        flex justify-center
        w-[90vw] max-w-[450px]  
        aspect-[551/510]  
        p-2       
        rounded-md
        overflow-hidden
        
        bg-gradient-to-b from-[#0B23C8] to-black
      ">
      {/* Inner video container (Figma: width 423, height 523, opacity 0.8) */}
      <div className="w-[100%] h-[100%] ">
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </div>
  );
}
