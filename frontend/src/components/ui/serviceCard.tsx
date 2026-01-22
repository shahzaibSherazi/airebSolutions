import btnIcon from "../../assets/icons/servicCardbtn_icon.png";
const ServiceCard = ({ image, title, gradient }) => {
  return (
    <div
      className="card relative w-full  sm:max-w-none lg:max-w-[403px] h-[480px] sm:h-[490px] md:h-[500px] lg:h-[565px] border border-[#001FEF] flex flex-col gap-2 sm:gap-4 p-2 sm:p-3 overflow-hidden snap-center mx-auto shrink-0"
      style={{
        background:
          gradient || "linear-gradient(180deg, #0B23C8 0%, rgba(0,0,0,0) 100%)",
      }}>
      {/* Image - Responsive height */}
      <div className="w-full flex-1 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Title - Responsive text size */}
      <div className="w-full">
        <p className="font-outfit font-medium text-sm sm:text-base md:text-lg lg:text-xl text-white line-clamp-2">
          {title}
        </p>
      </div>

      {/* Learn More Button */}
      <div className="relative w-fit flex items-center gap-1 sm:gap-1.5 bg-primary px-2 sm:px-3 py-1 text-xs font-outfit btn_edge">
        <span className="btn_corner btn_bottom-left" />
        <p className="whitespace-nowrap">Learn More</p>
        <img src={btnIcon} alt="" className="w-3 h-3 sm:w-3 sm:h-3" />
      </div>
    </div>
  );
};

export default ServiceCard;
