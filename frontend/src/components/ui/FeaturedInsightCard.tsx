// // type CardType = "case-study" | "blog" | "white-paper";

// // type FeaturedInsightCardProps = {
// //   type: CardType;
// //   tag: string;
// //   image: string;
// //   icon: string;
// //   title: string;
// //   description: string;
// //   heading?: string;
// //   gradient?: string; // only for blog
// // };

// // const FeaturedInsightCard: React.FC<FeaturedInsightCardProps> = ({
// //   type,
// //   tag,
// //   image,
// //   icon,
// //   title,
// //   heading,
// //   description,
// //   gradient,
// // }) => {
// //   const isWhitePaper = type === "white-paper";
// //   const isOverlayCard = type === "case-study" || type === "blog";

// //   return (
// //     <div className="w-full max-w-[444px] max-h-[527px] flex flex-col border border-gray-200 overflow-hidden bg-white">
// //       {/* IMAGE / HERO */}
// //       {isOverlayCard && (
// //         <div
// //           className="relative h-[240px] bg-cover bg-center"
// //           style={{
// //             backgroundImage: `
// //               ${gradient ? gradient + "," : ""}
// //               url(${image})
// //             `,
// //           }}>
// //           <div className="absolute inset-0 bg-black/40" />

// //           <div className="absolute top-4 left-6 right-6 text-white">
// //             <p className="text-sm mb-1">{tag}</p>
// //           </div>
// //         </div>
// //       )}

// //       {isWhitePaper && (
// //         <div className="h-[240px] bg-black px-6 pt-4 flex flex-col">
// //           <p className="text-sm text-white">{tag}</p>

// //           <div className="flex justify-end mt-2">
// //             <img
// //               src={image}
// //               alt={title}
// //               className="w-[130px] rotate-[-12deg] rounded shadow-xl"
// //             />
// //           </div>
// //         </div>
// //       )}

// //       {/* CONTENT */}
// //       <div
// //         className={`flex flex-col pt-4 ${
// //           isWhitePaper ? "bg-black text-white" : "bg-white text-black"
// //         }`}>
// //         <h3 className="text-[18px] font-semibold leading-snug px-6">{title}</h3>

// //         {heading && !isWhitePaper && (
// //           <h3 className="text-[18px] font-semibold leading-snug px-6">
// //             {heading}
// //           </h3>
// //         )}

// //         <p className="text-sm opacity-80 leading-relaxed mt-2 px-6">
// //           {description}
// //         </p>

// //         {/* FOOTER — ALWAYS STICKS BOTTOM */}
// //         <div className="mt-6 flex items-center justify-between bg-[#0B23C8] px-4 py-2">
// //           <p className="text-sm text-white ">Read More</p>
// //           <img src={icon} alt="icon" className="w-3 h-3" />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FeaturedInsightCard;

// type CardType = "case-study" | "blog" | "white-paper";

// type FeaturedInsightCardProps = {
//   type: CardType;
//   tag: string;
//   image: string;
//   icon: string;
//   title: string;
//   description: string;
//   heading?: string;
//   gradient?: string; // blog only
// };

// const FeaturedInsightCard: React.FC<FeaturedInsightCardProps> = ({
//   type,
//   tag,
//   image,
//   icon,
//   title,
//   heading,
//   description,
//   gradient,
// }) => {
//   const isWhitePaper = type === "white-paper";
//   const isBlog = type === "blog";
//   const isOverlayCard = type === "case-study" || isBlog;

//   return (
//     <div
//       className="w-full h-[500px] flex flex-col overflow-hidden border border-gray-200"
//       style={{
//         background: isBlog && gradient ? gradient : "#ffffff",
//       }}>
//       {/* IMAGE / HERO */}
//       {isOverlayCard && (
//         <div
//           className="relative h-[240px] bg-cover"
//           style={{ backgroundImage: `url(${image})` }}>
//           <div className="absolute inset-0 bg-black/40" />

//           <div className="absolute top-4 left-6 right-6 text-white">
//             <p className="text-2xl font-normal font-stoke mb-1">{tag}</p>
//           </div>
//         </div>
//       )}

//       {/* WHITE PAPER IMAGE */}
//       {isWhitePaper && (
//         <div className="h-[240px] bg-black px-6 pt-4">
//           <p className="text-2xl font-normal font-stoke text-white">{tag}</p>

//           <div className="flex justify-end mt-2">
//             <img
//               src={image}
//               alt={title}
//               className="w-[130px] rotate-[-12deg] rounded shadow-xl"
//             />
//           </div>
//         </div>
//       )}

//       {/* CONTENT */}
//       <div
//         className={`flex flex-col flex-1  pt-4 ${
//           isWhitePaper ? "bg-black text-white" : "text-black"
//         }`}>
//         {/* TITLE — fixed height */}
//         <h3
//           className={`text-[18px] font-medium font-outfit leading-snug px-6 ${
//             isBlog || isWhitePaper ? "text-white" : "text-black"
//           }`}>
//           {title}
//         </h3>

//         {heading && !isWhitePaper && (
//           <h3
//             className={`text-[18px] font-medium font-outfit leading-snug px-6 ${
//               isBlog ? "text-white" : "text-black"
//             }`}>
//             {heading}
//           </h3>
//         )}

//         {/* DESCRIPTION — fixed height */}
//         <p
//           className={`text-base font-normal  leading-relaxed mt-2  line-clamp-3 px-6 ${
//             isBlog || isWhitePaper ? "text-white" : "text-[#4B4B4B]"
//           }`}>
//           {description}
//         </p>

//         {/* FOOTER — locked bottom */}
//         <div className="mt-auto flex items-center justify-between bg-[#0B23C8] px-4 py-4">
//           <p className="text-sm text-white">Read More</p>
//           <img src={icon} alt="icon" className="w-3 h-3" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturedInsightCard;

import { useState, useEffect, useRef } from "react";

type CardType = "case-study" | "blog" | "white-paper";

type FeaturedInsightCardProps = {
  type: CardType;
  tag: string;
  image: string;
  icon: string;
  title: string;
  description: string;
  heading?: string;
  gradient?: string;
  index?: number; // For stagger delay
};

const FeaturedInsightCard: React.FC<FeaturedInsightCardProps> = ({
  type,
  tag,
  image,
  icon,
  title,
  heading,
  description,
  gradient,
  index = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const isWhitePaper = type === "white-paper";
  const isBlog = type === "blog";
  const isOverlayCard = type === "case-study" || isBlog;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`w-full h-[500px] flex flex-col overflow-hidden border border-gray-200 transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-12 scale-95"
      }`}
      style={{
        background: isBlog && gradient ? gradient : "#ffffff",
        transitionDelay: `${index * 150}ms`,
      }}>
      {/* IMAGE / HERO */}
      {isOverlayCard && (
        <div
          className={`relative h-[240px] bg-cover overflow-hidden transition-transform duration-1000 ease-out ${
            isVisible ? "scale-100" : "scale-110"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            transitionDelay: `${index * 150 + 100}ms`,
          }}>
          <div
            className={`absolute inset-0 bg-black/40 transition-opacity duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: `${index * 150 + 200}ms` }}
          />

          <div
            className={`absolute top-4 left-6 right-6 text-white transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }`}
            style={{ transitionDelay: `${index * 150 + 300}ms` }}>
            <p className="text-2xl font-normal font-stoke mb-1">{tag}</p>
          </div>
        </div>
      )}

      {/* WHITE PAPER IMAGE */}
      {isWhitePaper && (
        <div className="h-[240px] bg-black px-6 pt-4 overflow-hidden">
          <p
            className={`text-2xl font-normal font-stoke text-white transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
            style={{ transitionDelay: `${index * 150 + 200}ms` }}>
            {tag}
          </p>

          <div className="flex justify-end mt-2">
            <img
              src={image}
              alt={title}
              className={`w-[130px] rotate-[-12deg] rounded shadow-xl transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0 rotate-[-12deg]"
                  : "opacity-0 translate-y-8 rotate-[15deg]"
              }`}
              style={{ transitionDelay: `${index * 150 + 400}ms` }}
            />
          </div>
        </div>
      )}

      {/* CONTENT */}
      <div
        className={`flex flex-col flex-1 pt-4 ${
          isWhitePaper ? "bg-black text-white" : "text-black"
        }`}>
        {/* TITLE */}
        <h3
          className={`text-[18px] font-medium font-outfit leading-snug px-6 transition-all duration-700 ${
            isBlog || isWhitePaper ? "text-white" : "text-black"
          } ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
          }`}
          style={{ transitionDelay: `${index * 150 + 400}ms` }}>
          {title}
        </h3>

        {heading && !isWhitePaper && (
          <h3
            className={`text-[18px] font-medium font-outfit leading-snug px-6 transition-all duration-700 ${
              isBlog ? "text-white" : "text-black"
            } ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-4"
            }`}
            style={{ transitionDelay: `${index * 150 + 450}ms` }}>
            {heading}
          </h3>
        )}

        {/* DESCRIPTION */}
        <p
          className={`text-base font-normal leading-relaxed mt-2 line-clamp-3 px-6 transition-all duration-700 ${
            isBlog || isWhitePaper ? "text-white" : "text-[#4B4B4B]"
          } ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: `${index * 150 + 500}ms` }}>
          {description}
        </p>

        {/* FOOTER */}
        <div
          className={`mt-auto flex items-center justify-between bg-[#0B23C8] px-4 py-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: `${index * 150 + 600}ms` }}>
          <p className="text-sm text-white">Read More</p>
          <img
            src={icon}
            alt="icon"
            className={`w-3 h-3 transition-transform duration-500 ${
              isVisible ? "translate-x-0" : "-translate-x-2"
            }`}
            style={{ transitionDelay: `${index * 150 + 700}ms` }}
          />
        </div>
      </div>
    </div>
  );
};
export default FeaturedInsightCard;
