const ServiceCard = ({ image, title, gradient }) => {
  return (
    <div
      className=" w-full 
        max-w-[403px]
        min-h-[220px]
        sm:min-h-[480px]
        lg:min-h-[574px]
        border border-[#001FEF]
        flex flex-col
        gap-4
        items-center
        p-3
        rounded-md
        overflow-hidden
        snap-center
        mx-auto
        shrink-0"
      style={{
        background:
          gradient || "linear-gradient(180deg, #0B23C8 0%, rgba(0,0,0,0) 100%)",
      }}>
      {/* Image */}
      <div className="w-full aspect-[3/4] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Title */}
      <div className="w-full">
        <p className="font-[Outfit] font-medium text-lg sm:text-xl lg:text-[25px] text-white">
          {title}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
