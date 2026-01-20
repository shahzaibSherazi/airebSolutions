import btnIcon from "../../assets/icons/servicCardbtn_icon.png";
const ServiceCard = ({ image, title, gradient }) => {
  return (
    <div
      className="card relative w-full 
        max-w-[403px]
        min-h-[220px]
        sm:min-h-[480px]
        lg:min-h-[574px]
        border border-[#001FEF]
        flex flex-col
       gap-4
       
        p-3
        overflow-hidden
        snap-center
        mx-auto
        shrink-0"
      style={{
        background:
          gradient || "linear-gradient(180deg, #0B23C8 0%, rgba(0,0,0,0) 100%)",
      }}>
      {/* CORNERS */}
      {/* <span className="corner bottom-left" />
      <span className="corner bottom-right" /> */}
      {/* Image */}
      <div className="w-full h-[416px] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Title */}
      <div className="w-full">
        <p className="font-[Outfit] font-medium text-lg sm:text-xl lg:text-[25px] text-white">
          {title}
        </p>
      </div>
      <div className="relative w-fit flex items-center gap-2 bg-primary px-4 py-1 text-sm font-outfit btn_edge">
        <span className="btn_corner btn_bottom-left" />
        <p>Learn More</p>
        <img src={btnIcon} alt="" className="w-4 h-4" />
      </div>
    </div>
  );
};

export default ServiceCard;
