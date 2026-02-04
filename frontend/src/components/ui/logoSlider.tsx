import logo from "../../assets/slider_logo.png";
const logos = [logo, logo, logo, logo];

export default function LogoSlider() {
  return (
    <div className=" flex justify-center">
      {/* Limited width container */}
      <div className="relative w-full max-w-[520px] overflow-hidden ">
        {/* Left gradient overlay */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 
          bg-gradient-to-r from-primary/80 via-primary/30 to-transparent 
          pointer-events-none"
        />
        {/* Right gradient overlay */}
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 
          bg-gradient-to-l from-primary/80 via-primary/30 to-transparent 
          pointer-events-none"
        />
        <div className="flex gap-4 animate-slide">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="
                min-w-[120px]
                h-[60px]
                bg-black
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
