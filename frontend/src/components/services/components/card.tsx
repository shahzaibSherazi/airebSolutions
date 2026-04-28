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
