import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import cardImg from "../../assets/review_card.png";

const testimonials = [
  {
    id: 1,
    image: cardImg,
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an",
    name: "Jema G",
    position: "Marketing Head",
  },
  {
    id: 2,
    image: cardImg,
    quote:
      "Working with this team has been an absolute pleasure. Their attention to detail and commitment to excellence is unmatched. They transformed our vision into reality",
    name: "Michael Chen",
    position: "CEO, Tech Solutions",
  },
  {
    id: 3,
    image: cardImg,
    quote:
      "Exceptional service from start to finish. The team's professionalism and expertise made the entire process seamless. They truly understand what it takes to deliver outstanding results and build",
    name: "Sarah Johnson",
    position: "Director of Operations",
  },
];

export default function ClientReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative bg-black text-white py-12 sm:py-16 lg:py-20 xl:py-24 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Reviews Button */}
        <div className="flex justify-center mb-[44px] sm:mb-10 lg:mb-[34px]">
          <button className="relative bg-blue-600 font-outfit font-medium text-white px-6 sm:px-8 py-2 sm:py-2.5 text-xs sm:text-[22px] hover:bg-blue-700 transition-colors">
            Our Reviews
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-white rounded-full"></span>
          </button>
        </div>

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-stoke leading-tight">
            Our Clients Love
          </h2>
          <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light mt-2">
            to Recommend us
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative flex items-center justify-center px-[7px] sm:px-[15px] lg:px-[23px]">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 bg-white text-black rounded-full p-2 sm:p-2.5 lg:p-3 hover:bg-gray-200 transition-all shadow-lg flex-shrink-0"
            aria-label="Previous testimonial">
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </button>

          {/* Card */}
          <div className="w-full max-w-[1006px] mx-auto">
            <div
              style={{
                background: "linear-gradient(180deg, #0B23C8 0%, #000000 100%)",
              }}
              className="relative border-025 border-white p-[1px] transition-all duration-500">
              <div
                style={{
                  background:
                    "linear-gradient(180deg, #0B23C8 0%, #000000 100%)",
                }}
                className="px-[7px] sm:px-[15px] lg:px-[23px] py-[7px] sm:py-[15px] lg:py-[23px]">
                <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[180px_1fr] md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr] gap-4 sm:gap-6 lg:gap-8 xl:gap-12 items-center">
                  {/* Image */}
                  <div className="flex justify-center">
                    <div className="w-full h-[160px] sm:h-[240px] md:h-[280px] lg:h-[340px] xl:h-[380px]    border-[#8B8B8B]  overflow-hidden">
                      <img
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        className="w-full h-full object-cover border-025 rounded-[10px]"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center">
                    {/* Quote Icon */}
                    <div className="text-3xl sm:text-4xl  md:text-5xl lg:text-6xl xl:text-7xl text-white mb-2 sm:mb-3 lg:mb-4 xl:mb-6">
                      ,,
                    </div>

                    {/* Quote Text */}
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-3 sm:mb-4 lg:mb-6 xl:mb-8 text-gray-200">
                      {currentTestimonial.quote}
                    </p>

                    {/* Author */}
                    <div>
                      <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold mb-1">
                        {currentTestimonial.name}
                      </h4>
                      <p className="text-xs sm:text-sm md:text-base text-gray-400">
                        {currentTestimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 z-10 bg-white text-black rounded-full p-2 sm:p-2.5 lg:p-3 hover:bg-gray-200 transition-all shadow-lg flex-shrink-0"
            aria-label="Next testimonial">
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8 sm:mt-10 lg:mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-blue-600 w-8 sm:w-10"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
