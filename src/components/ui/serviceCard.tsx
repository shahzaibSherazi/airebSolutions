const ServiceCard = ({ image, title, gradient }) => {
  return (
    <div
      className="w-[403px] h-[574px] border border-[#001FEF] flex flex-col gap-4 items-center p-2 rounded-md overflow-hidden snap-center mx-auto shrink-0"
      style={{
        background:
          gradient || "linear-gradient(180deg, #0B23C8 0%, rgba(0,0,0,0) 100%)",
      }}>
      {/* Image */}
      <div className="">
        <img
          src={image}
          alt={title}
          className="w-full h-[416px] object-cover"
        />
      </div>

      {/* Title */}
      <div className="items-start self-start">
        <p className="font-[Outfit] font-medium text-[25px] text-white">
          {title}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
