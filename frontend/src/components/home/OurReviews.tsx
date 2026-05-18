import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import cardImg from "../../assets/review_card.webp";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    image: cardImg,
    quote:
      "We approached Aireb Solutions to revamp our eyeora.com website, and we couldn't be happier with the results. The team listened to our needs, provided expert advice, and delivered an intuitive, user-friendly site that perfectly aligns with our brand.",
    name: "Daniel Corazzi",
    position: "CEO at eyeora XR",
  },
  {
    id: 2,
    image: cardImg,
    quote:
      "Setting up our online store was a complex task, but Aireb Solutions made it easy. They guided us through every step of the e-commerce setup process, from choosing the right platform to integrating secure payment gateways. ",
    name: "",
    position: "CEO of Hateef Jewelry",
  },
  {
    id: 3,
    image: cardImg,
    quote:
      "We struggled with managing customer data across multiple platforms, but Aireb Solutions provided the perfect CRM integration solution. Their team carefully integrated our CRM system with existing tools, automating many processes.",
    name: "Smith",
    position: "Sales Director ZenBee",
  },
  {
    id: 4,
    image: cardImg,
    quote:
      "We needed a seamless API solution to connect our existing systems with third-party platforms, and Aireb Solutions delivered beyond expectations. The team took the time to fully understand our technical requirements and integrated the APIs flawlessly.",
    name: "",
    position: "Sales Director, Izhar Digital",
  },
  {
    id: 5,
    image: cardImg,
    quote:
      "We were in search of a fresh, professional logo to represent our new brand identity, and Aireb Solutions absolutely nailed it. From the initial brainstorming session to the final design, they understood our vision and delivered a logo that perfectly represents our values.",
    name: "",
    position: "Sales Manager Nourai.pk",
  },
  {
    id: 6,
    image: cardImg,
    quote:
      "Working with Aireb Solutions to develop our mobile app was an incredible experience. The development process was seamless, and the team provided constant updates. They not only met our functional requirements but also offered suggestions to enhance user experience.",
    name: "John M",
    position: "Product Manager",
  },
  {
    id: 7,
    image: cardImg,
    quote:
      "Our business required a custom software solution to streamline our internal processes, and Aireb Solutions delivered exactly what we needed. The team understood our complex requirements and worked closely with us to create a tailored solution that significantly improved our workflow.",
    name: "Ethan James",
    position: "CEO at OYS Digital",
  },
  {
    id: 8,
    image: cardImg,
    quote:
      "We were in search of a fresh, professional logo to represent our new brand identity, and Aireb Solutions absolutely nailed it. From the initial brainstorming session to the final design, they understood our vision and delivered a logo that perfectly represents our values.",
    name: "",
    position: "Sales Manager Nourai.pk",
  },
  {
    id: 9,
    image: cardImg,
    quote:
      "We hired Aireb Solutions to help us redesign our user interface, and the results were nothing short of amazing. They completely transformed the design into something modern, intuitive, and visually appealing.",
    name: "",
    position: "Founder of Happy Steppy",
  },
];

export default function OurReviews() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="container relative py-16 lg:py-24 flex flex-col items-center">
        {/* Our Reviews Badge */}
        <div className="relative mb-[44px] sm:mb-10 lg:mb-[34px] bg-primary font-stoke font-medium text-white px-6 sm:px-8 py-2 sm:py-2.5 text-xs sm:text-[22px] transition-colors">
          Our Reviews
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
        </div>

        {/* Heading */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-stoke leading-tight">
            Our Clients Love
          </h2>
          <p className="text-lg md:text-xl font-stoke font-light mt-2">
            to Recommend us
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative w-full flex items-center gap-2 sm:gap-4">
          {/* Prev Button */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="flex-shrink-0 z-10 bg-white text-black rounded-full p-2 sm:p-2.5 lg:p-3 hover:bg-gray-200 transition-all shadow-lg hover:scale-110"
            aria-label="Previous testimonial">
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </button>

          {/* Swiper */}
          <div className="flex-1 overflow-hidden">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              slidesPerView={1}
              loop={true}
              speed={650}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="reviews-swiper">
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={testimonial.id}>
                  {/* Card */}
                  <div
                    className="w-full p-[1px]"
                    style={{
                      background:
                        "linear-gradient(180deg, #629DFF 0%, #000000 100%)",
                    }}>
                    <div
                      className="px-[4px] sm:px-[15px] lg:px-[23px] py-[7px] sm:py-[15px] lg:py-[23px]"
                      style={{
                        background:
                          "linear-gradient(180deg, #629DFF 0%, #000000 100%)",
                      }}>
                      <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr] gap-4 sm:gap-6 lg:gap-8 xl:gap-12 items-center">
                        {/* Image */}
                        <div className="hidden sm:flex justify-center overflow-hidden">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name || testimonial.position}
                            className="w-full h-auto object-contain"
                            loading="lazy"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col justify-center space-y-[14px] sm:space-y-8 md:space-y-10 lg:space-y-12 xl:space-y-14">
                          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-outfit !leading-[1.3]  text-white line-clamp-3 sm:line-clamp-4 lg:line-clamp-5">
                            {testimonial.quote}
                          </p>
                          <div>
                            {testimonial.name && (
                              <h4 className="text-xs sm:text-base md:text-lg font-outfit lg:text-xl xl:text-2xl font-semibold mb-1">
                                {testimonial.name}
                              </h4>
                            )}
                            <p className="text-xs sm:text-sm md:text-base text-white font-outfit">
                              {testimonial.position}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Next Button */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="flex-shrink-0 z-10 bg-white text-black rounded-full p-2 sm:p-2.5 lg:p-3 hover:bg-gray-200 transition-all shadow-lg hover:scale-110"
            aria-label="Next testimonial">
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8 sm:mt-10 lg:mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => swiperRef.current?.slideToLoop(index)}
              className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-primary w-8 sm:w-10" // ✅ active
                  : "bg-gray-600 hover:bg-gray-500 w-2 sm:w-2.5" // inactive
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
