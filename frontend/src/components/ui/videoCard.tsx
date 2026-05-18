// interface VideoCardProps {
//   video: string;
// }

// export default function VideoCard({ video }: VideoCardProps) {
//   return (
//     <div
//       className="card relative flex justify-center overflow-hidden bg-gradient-to-b from-primary to-black
//         w-full max-w-[381px] h-[450px]
//         lg:max-w-[450px]
//         p-1.5 xs:p-2 sm:p-2.5
//         mx-auto
//       ">
//       {/* CORNERS */}
//       <span className="corner bottom-left" />
//       <span className="corner bottom-right" />
//       <video
//         src={video}
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="w-full max-w-[357.98px] h-[426.61px]
//           lg:max-w-[425px]
//           object-cover"
//       />
//     </div>
//   );
// }

interface VideoCardProps {
  video: string;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <div
      className="
        relative flex justify-center overflow-hidden
        bg-gradient-to-b from-primary to-black
        

        /* Responsive sizing */
        w-[42vw] min-w-[150px] max-w-[381px]
        sm:w-[34vw] sm:min-w-[180px] sm:max-w-[300px]
        md:w-[28vw] md:min-w-[220px] md:max-w-[340px]
        lg:w-[24vw] lg:min-w-[260px] lg:max-w-[420px]
        xl:w-[22vw] xl:max-w-[450px]

        aspect-[381/450]

        p-1 sm:p-1.5 md:p-2
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
        className="
          w-full 
          object-fill
          
        "
      />
    </div>
  );
}
