import logo from "../../assets/slider_logo.png";
const logos = [logo, logo, logo, logo];

export default function LogoSlider() {
  return (
    <div className=" flex justify-center">
      {/* Limited width container */}
      <div className="relative w-full max-w-[520px] overflow-hidden">
        <div className="flex gap-4 animate-slide">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="
                min-w-[120px]
                h-[60px]
                bg-[#0B23C8]
                rounded
                flex
                items-center
                justify-center
              ">
              <img src={logo} alt="logo" className="h-6 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
