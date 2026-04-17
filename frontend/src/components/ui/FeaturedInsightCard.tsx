// import { useRef } from "react";
// import BtnIcon from "@/assets/icons/btn_icon.svg?react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import GridImageReveal from "./GridImageReveal";

// type CardType = "case-study" | "blog" | "white-paper";

// type FeaturedInsightCardProps = {
//   type: CardType;
//   tag: string;
//   image: string;
//   title: string;
//   description: string;
//   heading?: string;
//   gradient?: string;
//   index?: number;
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
//   const navigate = useNavigate();
//   const cardRef = useRef<HTMLDivElement>(null);

//   const getCardLink = () => {
//     if (type === "blog") return "/resources/blogs";
//     if (type === "white-paper") return "/resources/white-papers";
//     return "/resources/case-studies";
//   };

//   const handleCardClick = () => {
//     const link = getCardLink();
//     navigate(link);
//   };

//   const isWhitePaper = type === "white-paper";
//   const isBlog = type === "blog";
//   const isCaseStudy = type === "case-study";

//   const nSliceX = 8;
//   const nSliceY = 8;
//   const nSlice = nSliceX * nSliceY;

//   // Generate slices with random offsets
//   const slices = Array.from({ length: nSlice }, (_, i) => {
//     const row = Math.floor(i / nSliceX);
//     const col = i % nSliceX;

//     const bgPosX = (col / (nSliceX - 1)) * 100;
//     const bgPosY = (row / (nSliceY - 1)) * 100;

//     // Random offset for hover
//     const hoverX = Math.random() * 80 - 20; // px
//     const hoverY = Math.random() * 80 - 20; // px
//     const hoverRot = Math.random() * 80 - 15; // deg

//     return { bgPosX, bgPosY, hoverX, hoverY, hoverRot };
//   });
//   return (
//     <motion.div
//       ref={cardRef}
//       onClick={handleCardClick}
//       className="w-full h-[500px] flex flex-col overflow-hidden transition-all duration-700 ease-out cursor-pointer"
//       style={{
//         background: "#000000", // ← black bg for all cards now
//         transitionDelay: `${index * 150}ms`,
//       }}
//       whileHover={{ scale: 1.02 }}
//       whileTap={{ scale: 0.98 }}>
//       {/* ─────────────────────────────────────────
//           BLOG CARD  ← UPDATED
//       ───────────────────────────────────────── */}
//       {isBlog && (
//         <>
//           {/* Top image — same structure & height as case-study */}

//           <motion.div
//             initial={{ y: 60, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{
//               duration: 0.8,
//               ease: "easeOut",
//               delay: index * 0.15,
//             }}
//             viewport={{ once: true }}
//             className="relative transition-transform duration-700 ease-in-out group-hover:scale-110 h-[240px] bg-cover bg-center overflow-hidden"
//             style={{ backgroundImage: `url(${image})` }}>
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 0.4 }}
//               transition={{
//                 duration: 0.7,
//                 ease: "easeOut",
//                 delay: index * 0.15 + 0.1,
//               }}
//               className="absolute inset-0 bg-black"
//             />
//             <motion.div
//               initial={{ y: 20, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{
//                 duration: 0.7,
//                 ease: "easeOut",
//                 delay: index * 0.15 + 0.2,
//               }}
//               className="absolute top-4 left-6 right-6 text-white">
//               <p className="text-2xl font-normal font-stoke mb-1">{tag}</p>
//             </motion.div>
//           </motion.div>

//           {/* Content — black bg */}
//           <motion.div
//             initial={{ y: 60, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             viewport={{ once: false }}
//             className="flex flex-col flex-1 pt-4 bg-black">
//             <h3 className="text-[18px] font-medium font-outfit leading-snug px-6 text-white">
//               {title}
//             </h3>
//             <p className="text-base font-normal leading-relaxed mt-2 line-clamp-3 px-6 text-white">
//               {description}
//             </p>

//             {/* Footer — white bg, black text  ← Read More white bg */}
//             <div className="mt-auto flex items-center justify-between hover:cursor-pointer w-full px-0 py-4 bg-white">
//               <p className="text-sm text-black pl-6">Read More</p>
//               <div className="pr-6">
//                 <BtnIcon className="w-3 h-3 text-black" />
//               </div>
//             </div>
//           </motion.div>
//         </>
//       )}

//       {/* ─────────────────────────────────────────
//           CASE-STUDY  ← NOT CHANGED (identical to original)
//       ───────────────────────────────────────── */}
//       {isCaseStudy && (
//         <>
//           <motion.div
//             initial={{ y: 60, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{
//               duration: 0.8,
//               ease: "easeOut",
//               delay: index * 0.15,
//             }}
//             viewport={{ once: true }}
//             className="relative h-[240px] bg-cover bg-center overflow-hidden"
//             style={{ backgroundImage: `url(${image})` }}>
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 0.4 }}
//               transition={{
//                 duration: 0.7,
//                 ease: "easeOut",
//                 delay: index * 0.15 + 0.1,
//               }}
//               className="absolute inset-0 bg-black"
//             />
//             <motion.div
//               initial={{ y: 20, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{
//                 duration: 0.7,
//                 ease: "easeOut",
//                 delay: index * 0.15 + 0.2,
//               }}
//               className="absolute top-4 left-6 right-6 text-white">
//               <p className="text-2xl font-normal font-stoke mb-1">{tag}</p>
//             </motion.div>
//           </motion.div>

//           <motion.div
//             initial={{ y: 60, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             viewport={{ once: false }}
//             className="flex flex-col flex-1 bg-white pt-4 text-black">
//             <h3 className="text-[18px] font-medium font-outfit leading-snug px-6 text-black">
//               {title}
//             </h3>
//             <p className="text-base font-normal leading-relaxed mt-2 line-clamp-3 px-6 text-black">
//               {description}
//             </p>
//             <div className="mt-auto flex items-center justify-between hover:cursor-pointer w-full px-0 py-4 bg-black">
//               <p className="text-sm text-white pl-6">Read More</p>
//               <div className="pr-6">
//                 <BtnIcon className="w-3 h-3 text-white" />
//               </div>
//             </div>
//           </motion.div>
//         </>
//       )}

//       {/* ─────────────────────────────────────────
//           WHITE-PAPER  ← UPDATED
//       ───────────────────────────────────────── */}
//       {isWhitePaper && (
//         <>
//           {/* Top image — same structure & height as case-study */}

//           <motion.div
//             initial={{ y: 60, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{
//               duration: 0.8,
//               ease: "easeOut",
//               delay: index * 0.15,
//             }}
//             viewport={{ once: true }}
//             className="relative h-[240px] bg-cover bg-center overflow-hidden"
//             style={{ backgroundImage: `url(${image})` }}>
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 0.4 }}
//               transition={{
//                 duration: 0.7,
//                 ease: "easeOut",
//                 delay: index * 0.15 + 0.1,
//               }}
//               className="absolute inset-0 bg-black"
//             />
//             <motion.div
//               initial={{ y: 20, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{
//                 duration: 0.7,
//                 ease: "easeOut",
//                 delay: index * 0.15 + 0.2,
//               }}
//               className="absolute top-4 left-6 right-6 text-white">
//               <p className="text-2xl font-normal font-stoke mb-1">{tag}</p>
//             </motion.div>
//           </motion.div>
//           {/* Content — black bg */}
//           <motion.div
//             initial={{ y: 60, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             viewport={{ once: false }}
//             className="flex flex-col flex-1 pt-4 bg-black">
//             <h3 className="text-[18px] font-medium font-outfit leading-snug px-6 text-white">
//               {title}
//             </h3>
//             <p className="text-base font-normal leading-relaxed mt-2 line-clamp-3 px-6 text-white">
//               {description}
//             </p>

//             {/* Footer — white bg, black text  ← Read More white bg */}
//             <div className="mt-auto flex items-center justify-between hover:cursor-pointer w-full px-0 py-4 bg-white">
//               <p className="text-sm text-black pl-6">Read More</p>
//               <div className="pr-6">
//                 <BtnIcon className="w-3 h-3 text-black" />
//               </div>
//             </div>
//           </motion.div>
//         </>
//       )}
//     </motion.div>
//   );
// };

// export default FeaturedInsightCard;

import { useRef } from "react";
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
  gradient?: string;
  index?: number;
};

const CARD_THEME = {
  "case-study": {
    content: "bg-white pt-4 text-black",
    title: "text-black",
    description: "text-black",
    footer: "bg-black",
    footerText: "text-white",
    footerIcon: "text-white",
  },
  blog: {
    content: "bg-black pt-4",
    title: "text-white",
    description: "text-white",
    footer: "bg-white",
    footerText: "text-black",
    footerIcon: "text-black",
  },
  "white-paper": {
    content: "bg-black pt-4",
    title: "text-white",
    description: "text-white",
    footer: "bg-white",
    footerText: "text-black",
    footerIcon: "text-black",
  },
} as const;

const CARD_ROUTES: Record<CardType, string> = {
  "case-study": "/resources/case-studies",
  blog: "/resources/blogs",
  "white-paper": "/resources/white-papers",
};

const FeaturedInsightCard: React.FC<FeaturedInsightCardProps> = ({
  type,
  tag,
  image,
  title,
  description,
  index = 0,
}) => {
  const navigate = useNavigate();
  const theme = CARD_THEME[type];

  return (
    <motion.div
      onClick={() => navigate(CARD_ROUTES[type])}
      className="w-full h-[500px] flex flex-col overflow-hidden transition-all duration-700 ease-out cursor-pointer bg-black"
      style={{ transitionDelay: `${index * 150}ms` }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}>
      {/* Image */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.15 }}
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
          <p className="text-xl md:text-2xl font-normal font-stoke mb-1">
            {tag}
          </p>
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
        className={`flex flex-col flex-1 ${theme.content}`}>
        <h3
          className={`text-title font-medium font-outfit px-6 ${theme.title}`}>
          {title}
        </h3>
        <p
          className={`text-p font-outfit font-normal mt-2 line-clamp-3 px-6 ${theme.description}`}>
          {description}
        </p>

        {/* Footer */}
        <div
          className={`mt-auto flex items-center justify-between cursor-pointer w-full px-0 py-4 ${theme.footer}`}>
          <p className={`text-sm pl-6 ${theme.footerText}`}>Read More</p>
          <div className="pr-6">
            <BtnIcon className={`w-3 h-3 ${theme.footerIcon}`} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FeaturedInsightCard;
