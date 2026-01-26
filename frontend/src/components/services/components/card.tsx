// import React from "react";

// const Card = ({
//   title,
//   subtitle,
//   description,
//   backgroundImage,
//   backgroundColor = "#000000",
//   overlayColor = "rgba(0, 0, 0, 0.5)",
//   items = [],
//   showStartProjectButton = true,
//   className = "",
//   titleClassName = "",
//   subtitleClassName = "",
//   descriptionClassName = "",
//   itemsClassName = "",
//   buttonClassName = "",
//   children,
// }) => {
//   return (
//     <div
//       className={`relative rounded-lg overflow-hidden flex flex-col h-[331px] ${className}`}
//       style={{
//         backgroundColor,
//         width: "100%",
//         maxWidth: "443px",
//       }}>
//       {/* Background Image with Overlay */}
//       {backgroundImage && (
//         <div className="absolute inset-0">
//           <img
//             src={backgroundImage}
//             alt={title}
//             className="w-full h-full object-cover"
//           />
//           <div
//             className="absolute inset-0"
//             style={{ backgroundColor: overlayColor }}
//           />
//         </div>
//       )}

//       {/* Content Container */}
//       <div className="relative flex-1 flex flex-col p-8 z-10">
//         {/* Title and Subtitle */}
//         <div className="mb-6">
//           {subtitle && (
//             <h3 className={`text-sm font-medium mb-2 ${subtitleClassName}`}>
//               {subtitle}
//             </h3>
//           )}
//           <h2 className={`text-3xl font-bold leading-tight ${titleClassName}`}>
//             {title}
//           </h2>
//         </div>

//         {/* Description */}
//         {description && (
//           <p
//             className={`text-base leading-relaxed mb-6 ${descriptionClassName}`}>
//             {description}
//           </p>
//         )}

//         {/* Items List (for Technology & Engineering card) */}
//         {items.length > 0 && (
//           <ul className={`space-y-3 mb-6 ${itemsClassName}`}>
//             {items.map((item, index) => (
//               <li key={index} className="flex items-center">
//                 <span className="text-blue-400 mr-2">•</span>
//                 <span className="text-base">{item}</span>
//               </li>
//             ))}
//           </ul>
//         )}

//         {/* Custom Children Content */}
//         {children}

//         {/* Start Project Button */}
//         {showStartProjectButton && (
//           <div className="mt-auto">
//             <hr className="border-gray-600 mb-6" />
//             <button
//               className={`w-full py-3 text-center font-medium rounded transition-colors ${buttonClassName}`}>
//               Start A Project
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // Add TypeScript types for better development experience
// Card.defaultProps = {
//   titleClassName: "text-white",
//   subtitleClassName: "text-gray-400",
//   descriptionClassName: "text-gray-300",
//   itemsClassName: "text-gray-200",
//   buttonClassName: "bg-blue-600 hover:bg-blue-700 text-white",
// };

// export default Card;

import React, { useState } from "react";
import { ChevronRight, Bookmark } from "lucide-react";

// Reusable Card Component
const ServiceCard = ({ title, description, image, onStartProject }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className="w-[433px] h-[331px] rounded-2xl bg-gradient-to-br from-indigo-900/60 via-purple-900/50 to-blue-900/60 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 overflow-hidden group relative flex flex-col">
      {/* Bookmark Icon */}
      <button
        onClick={() => setIsBookmarked(!isBookmarked)}
        className="absolute top-4 right-4 z-20 text-white/70 hover:text-white transition-colors">
        <Bookmark
          size={20}
          fill={isBookmarked ? "currentColor" : "none"}
          className="drop-shadow-lg"
        />
      </button>

      {/* Image Section - Fixed Height */}
      <div className="relative h-[200px] flex-shrink-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-transparent to-transparent" />
        </div>
      </div>

      {/* Content Section - Fixed Height */}
      <div className="relative px-6 py-5 bg-gradient-to-b from-indigo-950/80 to-indigo-950/90 h-[131px] flex-shrink-0 flex flex-col justify-between">
        <div className="flex-1 min-h-0">
          <h3 className="text-white text-lg font-semibold mb-1 line-clamp-2">
            {title}
          </h3>
        </div>

        <button
          onClick={onStartProject}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 w-fit">
          Start A Project
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};
export default ServiceCard;
