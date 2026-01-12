const ServiceCard = ({ image, title, gradient }) => {
  return (
    <div
      className="relative w-[403px] h-[572px] border border-[#001FEF] rounded-md overflow-hidden snap-start shrink-0"
      style={{
        background:
          gradient || "linear-gradient(180deg, #0B23C8 0%, rgba(0,0,0,0) 100%)",
      }}
    >
      {/* Image */}
      <div className="absolute top-[12px] left-[12px]">
        <img
          src={image}
          alt={title}
          className="w-[378px] h-[416px] object-cover"
        />
      </div>

      {/* Title */}
      <div className="absolute top-[452px] left-[12px] w-[250px] h-[44px] flex items-center">
        <p className="font-[Outfit] font-medium text-[25px] text-white">
          {title}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
