// import { useState, useEffect, useRef } from "react";
// import BtnIcon from "@/assets/icons/btn_icon.svg?react";

// type CardType = "case-study" | "blog" | "white-paper";

// type FeaturedInsightCardProps = {
//   type: CardType;
//   tag: string;
//   image: string;

//   title: string;
//   description: string;
//   heading?: string;
//   gradient?: string;
//   index?: number; // For stagger delay
// };

// const FeaturedInsightCard: React.FC<FeaturedInsightCardProps> = ({
//   type,
//   tag,
//   image,

//   title,
//   heading,
//   description,
//   gradient,
//   index = 0,
// }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const cardRef = useRef<HTMLDivElement>(null);

//   const isWhitePaper = type === "white-paper";
//   const isBlog = type === "blog";
//   const isOverlayCard = type === "case-study" || isBlog;

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       {
//         threshold: 0.2,
//         rootMargin: "0px 0px -50px 0px",
//       },
//     );

//     if (cardRef.current) {
//       observer.observe(cardRef.current);
//     }

//     return () => {
//       if (cardRef.current) {
//         observer.unobserve(cardRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div
//       ref={cardRef}
//       className={`w-full h-[500px] flex flex-col overflow-hidden  transition-all duration-700 ease-out ${
//         isVisible
//           ? "opacity-100 translate-y-0 scale-100"
//           : "opacity-0 translate-y-12 scale-95"
//       }`}
//       style={{
//         background: isBlog && gradient ? gradient : "#ffffff",
//         transitionDelay: `${index * 150}ms`,
//       }}>
//       {/* IMAGE / HERO */}
//       {isOverlayCard && (
//         <div
//           className={`relative h-[240px] bg-cover overflow-hidden transition-transform duration-1000 ease-out ${
//             isVisible ? "scale-100" : "scale-110"
//           }`}
//           style={{
//             backgroundImage: `url(${image})`,
//             transitionDelay: `${index * 150 + 100}ms`,
//           }}>
//           <div
//             className={`absolute inset-0 bg-black/40 transition-opacity duration-700 ${
//               isVisible ? "opacity-100" : "opacity-0"
//             }`}
//             style={{ transitionDelay: `${index * 150 + 200}ms` }}
//           />

//           <div
//             className={`absolute top-4 left-6 right-6 text-white transition-all duration-700 ${
//               isVisible
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 -translate-y-4"
//             }`}
//             style={{ transitionDelay: `${index * 150 + 300}ms` }}>
//             <p className="text-2xl font-normal font-stoke mb-1">{tag}</p>
//           </div>
//         </div>
//       )}

//       {/* WHITE PAPER IMAGE */}
//       {isWhitePaper && (
//         <div className="h-[240px] bg-black px-6 pt-4 overflow-hidden">
//           <p
//             className={`text-2xl font-normal font-stoke text-white transition-all duration-700 ${
//               isVisible
//                 ? "opacity-100 translate-x-0"
//                 : "opacity-0 -translate-x-8"
//             }`}
//             style={{ transitionDelay: `${index * 150 + 200}ms` }}>
//             {tag}
//           </p>

//           <div className="flex justify-end mt-2">
//             <img
//               src={image}
//               alt={title}
//               className={`w-[130px] rotate-[-12deg] rounded shadow-xl transition-all duration-1000 ease-out ${
//                 isVisible
//                   ? "opacity-100 translate-y-0 rotate-[-12deg]"
//                   : "opacity-0 translate-y-8 rotate-[15deg]"
//               }`}
//               style={{ transitionDelay: `${index * 150 + 400}ms` }}
//             />
//           </div>
//         </div>
//       )}

//       {/* CONTENT */}
//       <div
//         className={`flex flex-col flex-1 pt-4 ${
//           isWhitePaper ? "bg-black text-white" : "text-black"
//         }`}>
//         {/* TITLE */}
//         <h3
//           className={`text-[18px] font-medium font-outfit leading-snug px-6 transition-all duration-700 ${
//             isBlog || isWhitePaper ? "text-white" : "text-black"
//           } ${
//             isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
//           }`}
//           style={{ transitionDelay: `${index * 150 + 400}ms` }}>
//           {title}
//         </h3>

//         {heading && !isWhitePaper && (
//           <h3
//             className={`text-[18px] font-medium font-outfit leading-snug px-6 transition-all duration-700 ${
//               isBlog ? "text-white" : "text-black"
//             } ${
//               isVisible
//                 ? "opacity-100 translate-x-0"
//                 : "opacity-0 -translate-x-4"
//             }`}
//             style={{ transitionDelay: `${index * 150 + 450}ms` }}>
//             {heading}
//           </h3>
//         )}

//         {/* DESCRIPTION */}
//         <p
//           className={`text-base font-normal leading-relaxed mt-2 line-clamp-3 px-6 transition-all duration-700 ${
//             isBlog || isWhitePaper ? "text-white" : "text-[#4B4B4B]"
//           } ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//           }`}
//           style={{ transitionDelay: `${index * 150 + 500}ms` }}>
//           {description}
//         </p>

//         {/* FOOTER */}
//         <div
//           className={`mt-auto flex items-center justify-between ${type === "case-study" ? "bg-black" : "bg-white"} px-4 py-4 transition-all duration-700 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//           }`}
//           style={{ transitionDelay: `${index * 150 + 600}ms` }}>
//           <p
//             className={`text-sm ${type === "case-study" ? "text-textColor" : "text-black"}`}>
//             Read More
//           </p>
//           <BtnIcon
//             className={`w-3 h-3  transition-transform duration-500 ${type === "case-study" ? "text-white" : "text-black"} ${
//               isVisible ? "translate-x-0" : "-translate-x-2"
//             }`}
//             style={{ transitionDelay: `${index * 150 + 700}ms` }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default FeaturedInsightCard;

import { useState, useEffect, useRef } from "react";
import BtnIcon from "@/assets/icons/btn_icon.svg?react";

type CardType = "case-study" | "blog" | "white-paper";

type FeaturedInsightCardProps = {
  type: CardType;
  tag: string;
  image: string;
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
  const isCaseStudy = type === "case-study";

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
      className={`w-full h-[500px] flex flex-col overflow-hidden transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-12 scale-95"
      }`}
      style={{
        background: isBlog && gradient ? gradient : "#ffffff",
        transitionDelay: `${index * 150}ms`,
      }}>
      {/* BLOG CARD - Full height image */}
      {isBlog ? (
        <div className="relative h-full flex flex-col">
          {/* Full height background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${image})`,
            }}>
            {/* Dark overlay */}
            <div
              className={`absolute inset-0 bg-black/50 transition-opacity duration-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            />
          </div>

          {/* Tag positioned at the top */}
          <div
            className={`relative z-10 top-6 left-6 text-white transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }`}
            style={{ transitionDelay: `${index * 150 + 300}ms` }}>
            <p className="text-2xl font-normal font-stoke mb-1">{tag}</p>
          </div>

          {/* Content positioned above footer */}
          <div className="relative mt-auto  ">
            <div className="px-6">
              {/* Title */}
              <h3
                className={`text-[18px] font-medium font-outfit leading-snug text-white transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: `${index * 150 + 400}ms` }}>
                {title}
              </h3>

              {/* Heading if exists */}
              {heading && (
                <h3
                  className={`text-[18px] font-medium font-outfit leading-snug text-white mt-1 transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${index * 150 + 450}ms` }}>
                  {heading}
                </h3>
              )}

              {/* Description */}
              <p
                className={`text-base font-normal leading-relaxed mt-2 text-white line-clamp-3 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 150 + 500}ms` }}>
                {description}
              </p>
            </div>
            {/* Footer - Matching white-paper style */}
            <div
              className={`relative mt-14 z-10  flex items-center justify-between px-4 py-4 bg-white backdrop-blur-sm transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 150 + 600}ms` }}>
              <p className="text-sm text-black">Read More</p>
              <BtnIcon
                className={`w-3 h-3 text-black transition-transform duration-500 ${
                  isVisible ? "translate-x-0" : "-translate-x-2"
                }`}
                style={{ transitionDelay: `${index * 150 + 700}ms` }}
              />
            </div>
          </div>
        </div>
      ) : (
        /* CASE-STUDY and WHITE-PAPER CARDS - Original layout */
        <>
          {/* CASE-STUDY IMAGE */}
          {isCaseStudy && (
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

          {/* CONTENT FOR CASE-STUDY and WHITE-PAPER */}
          <div
            className={`flex flex-col flex-1 pt-4 ${
              isWhitePaper ? "bg-black text-white" : "text-black"
            }`}>
            {/* TITLE */}
            <h3
              className={`text-[18px] font-medium font-outfit leading-snug px-6 transition-all duration-700 ${
                isWhitePaper ? "text-white" : "text-black"
              } ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
              }`}
              style={{ transitionDelay: `${index * 150 + 400}ms` }}>
              {title}
            </h3>

            {heading && isCaseStudy && (
              <h3
                className={`text-[18px] font-medium font-outfit leading-snug px-6 transition-all duration-700 ${
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
                isWhitePaper ? "text-white" : "text-[#4B4B4B]"
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 150 + 500}ms` }}>
              {description}
            </p>

            {/* FOOTER */}
            <div
              className={`mt-auto flex items-center justify-between ${
                isCaseStudy ? "bg-black" : "bg-white"
              } px-4 py-4 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 150 + 600}ms` }}>
              <p
                className={`text-sm ${
                  isCaseStudy ? "text-textColor" : "text-black"
                }`}>
                Read More
              </p>
              <BtnIcon
                className={`w-3 h-3 transition-transform duration-500 ${
                  isCaseStudy ? "text-white" : "text-black"
                } ${isVisible ? "translate-x-0" : "-translate-x-2"}`}
                style={{ transitionDelay: `${index * 150 + 700}ms` }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FeaturedInsightCard;
