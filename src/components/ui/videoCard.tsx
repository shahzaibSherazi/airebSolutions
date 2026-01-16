interface VideoCardProps {
  video: string;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <div
      style={{ maxHeight: "500px" }}
      className="card relative
        flex justify-center
        w-[90vw] max-w-[430px]   
        p-2       
        
        overflow-hidden
        
        bg-gradient-to-b from-[#0B23C8] to-black
      ">
      {/* CORNERS */}
      <span className="corner bottom-left" />
      <span className="corner bottom-right" />
      {/* <div className="w-[100%] h-[100%] "> */}
      <video
        src={video}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-fill"
      />
      {/* </div> */}
    </div>
  );
}
