// import { useState, useEffect, useRef } from "react";
// import BtnIcon from "@/assets/icons/btn_icon.svg?react";
// import { motion } from "framer-motion";

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
//   const isCaseStudy = type === "case-study";

//   return (
//     <div
//       className={`w-full h-[500px] flex flex-col overflow-hidden transition-all duration-700 ease-out `}
//       style={{
//         background: isBlog && gradient ? gradient : "#ffffff",
//         transitionDelay: `${index * 150}ms`,
//       }}>
//       {/* BLOG CARD - Full height image */}
//       {isBlog ? (
//         <motion.div
//           initial={{ y: 60, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: false }}
//           className="relative h-full flex flex-col">
//           {/* Full height background image */}
//           <div
//             className="absolute inset-0 bg-cover bg-center"
//             style={{
//               backgroundImage: `url(${image})`,
//             }}>
//             {/* Dark overlay */}
//             <div
//               className={`absolute inset-0 bg-black/50 transition-opacity duration-700 `}
//               style={{ transitionDelay: `${index * 150 + 200}ms` }}
//             />
//           </div>

//           {/* Tag positioned at the top */}
//           <div
//             className={`relative z-10 top-6 left-6 text-white transition-all duration-700 `}
//             style={{ transitionDelay: `${index * 150 + 300}ms` }}>
//             <p className="text-2xl font-normal font-stoke mb-1">{tag}</p>
//           </div>

//           {/* Content positioned above footer */}
//           <div className="relative mt-auto  ">
//             <div className="px-6">
//               {/* Title */}
//               <h3
//                 className={`text-[18px] font-medium font-outfit leading-snug text-white transition-all duration-700 `}
//                 style={{ transitionDelay: `${index * 150 + 400}ms` }}>
//                 {title}
//               </h3>

//               {/* Heading if exists */}
//               {heading && (
//                 <h3
//                   className={`text-[18px] font-medium font-outfit leading-snug text-white mt-1 transition-all duration-700
//                     `}
//                   style={{ transitionDelay: `${index * 150 + 450}ms` }}>
//                   {heading}
//                 </h3>
//               )}

//               {/* Description */}
//               <p
//                 className={`text-base font-normal leading-relaxed mt-2 text-white line-clamp-3 transition-all duration-700 `}
//                 style={{ transitionDelay: `${index * 150 + 500}ms` }}>
//                 {description}
//               </p>
//             </div>
//             {/* Footer - Matching white-paper style */}
//             <div
//               className={`relative mt-14 z-10  flex items-center justify-between hover:cursor-pointer px-4 py-4 bg-white backdrop-blur-sm transition-all duration-700 `}
//               style={{ transitionDelay: `${index * 150 + 600}ms` }}>
//               <p className="text-sm text-black">Read More</p>
//               <BtnIcon
//                 className={`w-3 h-3 text-black transition-transform duration-500 }`}
//                 style={{ transitionDelay: `${index * 150 + 700}ms` }}
//               />
//             </div>
//           </div>
//         </motion.div>
//       ) : (
//         /* CASE-STUDY and WHITE-PAPER CARDS - Original layout */
//         <>
//           {/* CASE-STUDY IMAGE */}
//           {isCaseStudy && (
//             <motion.div
//               initial={{ y: 60, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{
//                 duration: 0.8,
//                 ease: "easeOut",
//                 delay: index * 0.15, // delay each card properly
//               }}
//               viewport={{ once: true }} // play only once
//               className="relative h-[240px] bg-cover bg-center overflow-hidden"
//               style={{ backgroundImage: `url(${image})` }}>
//               {/* Overlay */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 0.4 }}
//                 transition={{
//                   duration: 0.7,
//                   ease: "easeOut",
//                   delay: index * 0.15 + 0.1,
//                 }}
//                 className="absolute inset-0 bg-black"
//               />

//               {/* Text */}
//               <motion.div
//                 initial={{ y: 20, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 transition={{
//                   duration: 0.7,
//                   ease: "easeOut",
//                   delay: index * 0.15 + 0.2,
//                 }}
//                 className="absolute top-4 left-6 right-6 text-white">
//                 <p className="text-2xl font-normal font-stoke mb-1">{tag}</p>
//               </motion.div>
//             </motion.div>
//           )}

//           {/* WHITE PAPER IMAGE */}
//           {isWhitePaper && (
//             <motion.div
//               initial={{ y: 60, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               viewport={{ once: false }}
//               className="h-[240px] bg-black px-6 pt-4 overflow-hidden">
//               <p
//                 className={`text-2xl font-normal font-stoke text-white transition-all duration-700`}
//                 style={{ transitionDelay: `${index * 150 + 200}ms` }}>
//                 {tag}
//               </p>

//               <div className="flex justify-end mt-2">
//                 <img
//                   src={image}
//                   alt={title}
//                   className={`w-[130px] rotate-[-12deg] rounded shadow-xl transition-all duration-1000 ease-out `}
//                   style={{ transitionDelay: `${index * 150 + 400}ms` }}
//                 />
//               </div>
//             </motion.div>
//           )}

//           {/* CONTENT FOR CASE-STUDY and WHITE-PAPER */}
//           <motion.div
//             initial={{ y: 60, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             viewport={{ once: false }}
//             className={`flex flex-col flex-1 pt-4 ${
//               isWhitePaper ? "bg-black text-white" : "text-black"
//             }`}>
//             {/* TITLE */}
//             <h3
//               className={`text-[18px] font-medium font-outfit leading-snug px-6 transition-all duration-700 ${
//                 isWhitePaper ? "text-white" : "text-black"
//               } `}
//               style={{ transitionDelay: `${index * 150 + 400}ms` }}>
//               {title}
//             </h3>

//             {heading && isCaseStudy && (
//               <h3
//                 className={`text-[18px] font-medium font-outfit leading-snug px-6 transition-all duration-700 `}
//                 style={{ transitionDelay: `${index * 150 + 450}ms` }}>
//                 {heading}
//               </h3>
//             )}

//             {/* DESCRIPTION */}
//             <p
//               className={`text-base font-normal leading-relaxed mt-2 line-clamp-3 px-6 transition-all duration-700 ${
//                 isWhitePaper ? "text-white" : "text-[#4B4B4B]"
//               } `}
//               style={{ transitionDelay: `${index * 150 + 500}ms` }}>
//               {description}
//             </p>

//             {/* FOOTER */}
//             <div
//               className={`mt-auto flex items-center justify-between hover:cursor-pointer ${
//                 isCaseStudy ? "bg-black" : "bg-white"
//               } px-4 py-4 transition-all duration-700 }`}
//               style={{ transitionDelay: `${index * 150 + 600}ms` }}>
//               <p
//                 className={`text-sm ${
//                   isCaseStudy ? "text-textColor" : "text-black"
//                 }`}>
//                 Read More
//               </p>
//               <BtnIcon
//                 className={`w-3 h-3 transition-transform duration-500 ${
//                   isCaseStudy ? "text-white" : "text-black"
//                 } `}
//                 style={{ transitionDelay: `${index * 150 + 700}ms` }}
//               />
//             </div>
//           </motion.div>
//         </>
//       )}
//     </div>
//   );
// };

// export default FeaturedInsightCard;

import { useState, useRef } from "react";
import BtnIcon from "@/assets/icons/btn_icon.svg?react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const cardRef = useRef<HTMLDivElement>(null);

  // Determine navigation link
  const getCardLink = () => {
    if (type === "blog") return "/resources/blogs";
    if (type === "white-paper") return "/resources/white-papers";
    return "/resources/case-studies"; // case-study or others
  };

  const handleCardClick = () => {
    const link = getCardLink();
    navigate(link);
  };

  const isWhitePaper = type === "white-paper";
  const isBlog = type === "blog";
  const isCaseStudy = type === "case-study";

  return (
    <motion.div
      ref={cardRef}
      onClick={handleCardClick}
      className={`w-full h-[500px] flex flex-col overflow-hidden transition-all duration-700 ease-out cursor-pointer`}
      style={{
        background: isBlog && gradient ? gradient : "#ffffff",
        transitionDelay: `${index * 150}ms`,
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}>
      {/* BLOG CARD */}
      {isBlog && (
        <div className="relative h-full flex flex-col">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}>
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-700" />
          </div>

          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="relative z-10 top-6 left-6 text-white">
            <p className="text-2xl font-normal font-stoke mb-1">{tag}</p>
          </motion.div>

          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="relative mt-auto">
            <div className="px-6">
              <h3
                className="text-[18px] font-medium font-outfit leading-snug text-white transition-all duration-700"
                style={{ transitionDelay: `${index * 150 + 400}ms` }}>
                {title}
              </h3>

              {heading && (
                <h3
                  className="text-[18px] font-medium font-outfit leading-snug text-white mt-1 transition-all duration-700"
                  style={{ transitionDelay: `${index * 150 + 450}ms` }}>
                  {heading}
                </h3>
              )}

              <p
                className="text-base font-normal leading-relaxed mt-2 text-white line-clamp-3 transition-all duration-700"
                style={{ transitionDelay: `${index * 150 + 500}ms` }}>
                {description}
              </p>
            </div>

            {/* FULL WIDTH FOOTER */}
            <div
              className="relative mt-14 z-10 flex items-center justify-between hover:cursor-pointer w-full px-0 py-4 bg-white backdrop-blur-sm transition-all duration-700"
              style={{ transitionDelay: `${index * 150 + 600}ms` }}>
              <p className="text-sm text-black pl-6">Read More</p>
              <div className="pr-6">
                <BtnIcon
                  className="w-3 h-3 text-black transition-transform duration-500"
                  style={{ transitionDelay: `${index * 150 + 700}ms` }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* CASE-STUDY & WHITE-PAPER */}
      {!isBlog && (
        <>
          {isCaseStudy && (
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="relative h-[240px] bg-cover bg-center overflow-hidden"
              style={{ backgroundImage: `url(${image})` }}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.4 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: index * 0.15 + 0.1,
                }}
                className="absolute inset-0 bg-black"
              />

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: index * 0.15 + 0.2,
                }}
                className="absolute top-4 left-6 right-6 text-white">
                <p className="text-2xl font-normal font-stoke mb-1">{tag}</p>
              </motion.div>
            </motion.div>
          )}

          {isWhitePaper && (
            <div className="h-[240px] bg-black px-6 pt-4 overflow-hidden">
              <motion.div
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false }}>
                <p className="text-2xl font-normal font-stoke text-white transition-all duration-700">
                  {tag}
                </p>
              </motion.div>
              <div className="flex justify-end mt-2">
                <img
                  src={image}
                  alt={title}
                  className="w-[130px] rotate-[-12deg] rounded shadow-xl transition-all duration-1000 ease-out"
                />
              </div>
            </div>
          )}

          {/* CONTENT */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className={`flex flex-col flex-1 pt-4 ${
              isWhitePaper ? "bg-black text-white" : "text-black"
            }`}>
            <h3
              className={`text-[18px] font-medium font-outfit leading-snug px-6 ${
                isWhitePaper ? "text-white" : "text-black"
              }`}>
              {title}
            </h3>

            {heading && isCaseStudy && (
              <h3 className="text-[18px] font-medium font-outfit leading-snug px-6">
                {heading}
              </h3>
            )}

            <p
              className={`text-base font-normal leading-relaxed mt-2 line-clamp-3 px-6 ${
                isWhitePaper ? "text-white" : "text-black"
              }`}>
              {description}
            </p>

            {/* FULL WIDTH FOOTER */}
            <div
              className={`mt-auto flex items-center justify-between hover:cursor-pointer w-full px-0 py-4 ${
                isCaseStudy ? "bg-black" : "bg-white"
              }`}>
              <p
                className={`text-sm ${isCaseStudy ? "text-white" : "text-black"} pl-6`}>
                Read More
              </p>
              <div className="pr-6">
                <BtnIcon
                  className={`w-3 h-3 ${isCaseStudy ? "text-white" : "text-black"}`}
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

export default FeaturedInsightCard;
