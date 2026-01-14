const FeaturedSection = () => {
  return (
    <section className="w-full bg-white px-6 py-16 h-screen md:mx-auto">
      <div className="w-full flex flex-col lg:flex-row items-start  gap-8 lg:gap-16">
        {/* Text Content */}
        <div className="flex-1 flex flex-col gap-4">
          <p className="text-lg sm:text-xl font-normal text-[#0B23C8]">
            Featured Insights
          </p>

          <p className="lg:max-w-[60vw] text-base sm:text-lg md:text-xl font-normal font-outfit text-[#000000] leading-relaxed">
            Highlights our latest perspectives on design, technology, and
            digital innovation. From UI/UX best practices and modern web
            development to DevOps, automation, and emerging tech trends, we
            share practical insights that help businesses make smarter
            decisions, stay competitive, and build scalable digital solutions.
          </p>
        </div>

        {/* Button */}
        <div className="w-full lg:w-auto flex lg:justify-end items-start">
          <button className="bg-[#0B23C8] text-white text-sm font-medium px-6 py-3 hover:bg-blue-700 transition">
            Let's work together
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
