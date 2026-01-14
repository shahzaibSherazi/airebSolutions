import LogoSlider from "../ui/logoSlider";

const ResultSection = () => {
  return (
    <section className="w-full bg-white flex flex-col gap-8 py-12 px-6 items-center justify-center min-h-[100vh] mx-auto">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-0 w-full ">
        {/* Left Column */}
        <div className="flex flex-col gap-4 lg:w-1/3">
          <h1 className="text-xl font-normal text-[#0B23C8]">Results</h1>
          <p className="text-3xl sm:text-4xl font-serif text-[#000000]">
            Impact you can feel
          </p>
        </div>

        {/* Middle Column */}
        <div className="lg:w-1/3">
          <p className="text-gray-700 text-sm sm:text-base">
            Our approach allows us to deliver exceptional experiences that drive
            growth and success for all stakeholders. Let’s rise to new heights
            with the power of digital transformation.
          </p>
        </div>

        {/* Right Column */}
        <div className=" lg:justify-end">
          <button className="bg-[#0B23C8] text-white text-sm font-medium px-6 py-3 rounded hover:bg-blue-700 transition">
            Read More About Us
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-col sm:flex-row gap-6 lg:gap-12 w-full">
        {/* Stat 1 */}
        <div className="flex flex-col items-start  sm:flex-1 gap-2">
          <p className="text-black font-normal text-[42px] sm:text-[48px]">
            95%
          </p>
          <p className="text-[#4B4B4B] text-sm text-left sm:text-center">
            Clients who stay because we consistently deliver results
          </p>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-start  sm:flex-1 gap-2 sm:border-l-2 sm:pl-4 border-gray-300">
          <p className="text-black font-normal text-[42px] sm:text-[48px]">
            45%
          </p>
          <p className="text-[#4B4B4B] text-sm text-left sm:text-center">
            Conversion growth driven by thoughtful design and optimisation
          </p>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-start  sm:flex-1 gap-2 sm:border-l-2 sm:pl-4 border-gray-300">
          <p className="text-black font-normal text-[42px] sm:text-[48px]">
            99%
          </p>
          <p className="text-[#4B4B4B] text-sm text-left sm:text-center">
            Reliable, secure systems that perform with unwavering stability
          </p>
        </div>
      </div>

      {/* Footer Slider */}
      <div className="w-full mt-8">
        <LogoSlider />
      </div>
    </section>
  );
};

export default ResultSection;
