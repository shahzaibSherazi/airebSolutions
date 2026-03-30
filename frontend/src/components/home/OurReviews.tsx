import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import cardImg from "../../assets/review_card.png";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    image: cardImg,
    quote:
      "We approached Aireb Solutions to revamp our eyeora.com website, and we couldn't be happier with the results. The team listened to our needs, provided expert advice, and delivered an intuitive, user-friendly site that perfectly aligns with our brand. Their attention to detail and commitment to quality is truly commendable. We’ve seen increased traffic and customer engagement since the redesign. Highly recommend!",
    name: "Daniel Corazzi",
    position: "CEO at eyeora XR",
  },
  {
    id: 2,
    image: cardImg,
    quote:
      "Setting up our online store was a complex task, but Aireb Solutions made it easy. They guided us through every step of the e-commerce setup process, from choosing the right platform to integrating secure payment gateways. Thanks to their expertise, we now have a fully functional, visually appealing online store. We’ve seen a steady increase in sales and customer satisfaction since launch",
    name: "",
    position: "CEO of Hateef Jewelry",
  },
  {
    id: 3,
    image: cardImg,
    quote:
      "We struggled with managing customer data across multiple platforms, but Aireb Solutions provided the perfect CRM integration solution. Their team carefully integrated our CRM system with existing tools, automating many processes and improving our customer relationship management. We now have a 360-degree view of our clients, and our sales and customer service teams are working more efficiently than ever.",
    name: "Smith",
    position: "Sales Director ZenBee",
  },
  {
    id: 4,
    image: cardImg,
    quote:
      "We needed a seamless API solution to connect our existing systems with third-party platforms, and Aireb Solutions delivered beyond expectations. The team took the time to fully understand our technical requirements and integrated the APIs flawlessly. The process was efficient, and the API is now stable, fast, and highly reliable. This integration has greatly improved our workflow and data accuracy.",
    name: "",
    position: "Sales Director, Izhar Digital",
  },
  {
    id: 5,
    image: cardImg,
    quote:
      "We were in search of a fresh, professional logo to represent our new brand identity, and Aireb Solutions absolutely nailed it. From the initial brainstorming session to the final design, they understood our vision and delivered a logo that perfectly represents our values. It's modern, memorable, and instantly recognizable. The entire team is thrilled with the result!",
    name: "",
    position: "Sales Manager Nourai.pk",
  },
  {
    id: 6,
    image: cardImg,
    quote:
      "Working with Aireb Solutions to develop our mobile app was an incredible experience. The development process was seamless, and the team provided constant updates. They not only met our functional requirements but also offered suggestions to enhance user experience. The app is performing brilliantly, and we've received fantastic feedback from our users.",
    name: "John M",
    position: "Product Manager",
  },
  {
    id: 7,
    image: cardImg,
    quote:
      "Our business required a custom software solution to streamline our internal processes, and Aireb Solutions delivered exactly what we needed. The team understood our complex requirements and worked closely with us to create a tailored solution that significantly improved our workflow. We’re now more efficient and can focus on growing our business",
    name: "Ethan James",
    position: "CEO at OYS Digital",
  },
  {
    id: 8,
    image: cardImg,
    quote:
      "We were in search of a fresh, professional logo to represent our new brand identity, and Aireb Solutions absolutely nailed it. From the initial brainstorming session to the final design, they understood our vision and delivered a logo that perfectly represents our values. It's modern, memorable, and instantly recognizable. The entire team is thrilled with the result!",
    name: "",
    position: "Sales Manager Nourai.pk",
  },
  {
    id: 9,
    image: cardImg,
    quote:
      "We hired Aireb Solutions to help us redesign our user interface, and the results were nothing short of amazing. They completely transformed the design into something modern, intuitive, and visually appealing. User feedback has been overwhelmingly positive, and we’ve seen a noticeable increase in user retention.",
    name: "",
    position: "Founder of Happy Steppy",
  },
];

export default function ClientReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative bg-black text-white py-16 lg:py-24 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Our Reviews Button */}
        <div className="flex justify-center mb-[44px] sm:mb-10 lg:mb-[34px]">
          <button className="relative bg-primary font-stoke font-medium text-white px-6 sm:px-8 py-2 sm:py-2.5 text-xs sm:text-[22px] hover:bg-blue-700 transition-colors">
            Our Reviews
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
          </button>
        </div>

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl  font-stoke leading-tight">
              Our Clients Love
            </h2>
            <p className="text-2xl sm:text-3xl lg:text-4xl  font-stoke font-light mt-2">
              to Recommend us
            </p>
          </motion.div>
        </div>

        {/* Slider Container */}
        <div className="relative flex items-center justify-center px-[7px] sm:px-[15px] lg:px-[23px]">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 bg-white text-black rounded-full p-2 sm:p-2.5 lg:p-3 hover:bg-gray-200 transition-all shadow-lg flex-shrink-0 hover:scale-110"
            aria-label="Previous testimonial">
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </button>

          {/* Card with Animation */}
          <div className="w-full max-w-[1006px] mx-auto perspective-1000 ">
            <div
              key={currentIndex}
              style={{
                borderWidth: 0.5,
                background: "linear-gradient(180deg, #629DFF 0%, #000000 100%)",
                boxShadow: `
                 -80px 0 150px rgba(99, 157, 255, 0.25),
      80px 0 150px rgba(99, 157, 255, 0.25),
      -150px 0 250px rgba(99, 157, 255, 0.15),
      150px 0 250px rgba(99, 157, 255, 0.15)
                `,
                animation:
                  direction === 1
                    ? "rotateAntiClockOut 0.5s ease-in"
                    : direction === -1
                      ? "rotateAntiClockIn 0.5s ease-out"
                      : "rotateAntiClockIn 0.4s ease-out",
              }}
              className="relative  preserve-3d  p-[1px]">
              <div
                style={{
                  background:
                    "linear-gradient(180deg, #629DFF 0%, #000000 100%)",
                }}
                className="px-[7px] sm:px-[15px] lg:px-[23px] py-[7px] sm:py-[15px] lg:py-[23px]">
                <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[180px_1fr] md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr] gap-4 sm:gap-6 lg:gap-8 xl:gap-12 items-center">
                  {/* Image */}
                  <div className="flex justify-center">
                    <div className="w-full h-[160px] sm:h-[240px] md:h-[280px] lg:h-[340px] xl:h-[380px] border-[#8B8B8B] overflow-hidden">
                      <img
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        className="w-full h-full object-cover border-[0.25px] rounded-[10px]"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center space-y-[14px] sm:space-y-8 md:space-y-10 lg:space-y-12 xl:space-y-14 lg:pr-0 md:pr-3 pr-[26px]">
                    {/* Quote Icon */}
                    <div className="text-base sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal">
                      <span className="md:tracking-[-4px]">
                        {" "}
                        &#x275B; &#x275B;{" "}
                      </span>
                    </div>

                    {/* Quote Text */}
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-3 sm:mb-4 lg:mb-6 xl:mb-8 text-gray-200 line-clamp-3 sm:line-clamp-4 lg:line-clamp-5">
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
            className="absolute right-0 z-10 bg-white text-black rounded-full p-2 sm:p-2.5 lg:p-3 hover:bg-gray-200 transition-all shadow-lg flex-shrink-0 hover:scale-110"
            aria-label="Next testimonial">
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8 sm:mt-10 lg:mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary w-8 sm:w-10"
                  : "bg-gray-600 hover:bg-gray-500 w-2 sm:w-2.5"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
