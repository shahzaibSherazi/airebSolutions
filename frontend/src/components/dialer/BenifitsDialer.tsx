import { motion } from "framer-motion";
import headPhoneImg from "@/assets/Dialer_assets/headphones.png";

const BenifitsDialer = () => {
  return (
    <section
      style={{
        background: "linear-gradient(97.32deg, #0E1828 1.89%, #000000 98.11%)",
      }}
      className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr]">
        {/* Left Column - Content */}
        <div className="flex flex-col px-6 lg:pl-8 lg:pr-0 py-16 lg:py-24">
          <div className="mb-8 sm:mb-10">
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}>
              <h1 className="text-textColor font-stoke font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] mb-4 leading-tight">
                Benefits of AI Custom <br /> Dialer Solutions
              </h1>
              <p className="text-textColor font-outfit font-normal text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
                Partner with Aireb Solutions to implement an AI-powered custom
                dialer solution that enhances your business operations,
                optimizes communication, and improves customer relationships.
                Reach out today to learn how we can revolutionize your business
                with AI technology.
              </p>
            </motion.div>
          </div>

          {/* Benefits Tags */}
          <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col gap-3 sm:gap-4 lg:gap-6">
            {/* First Row */}
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <div className="px-3 sm:px-4 py-2 sm:py-3 hover:bg-white rounded-sm hover:text-black cursor-pointer border-025 border-[#8897FF]">
                  <p className="font-stoke text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl whitespace-nowrap">
                    Increased Efficiency
                  </p>
                </div>
                <div className="inline-flex px-3 sm:px-4 py-2 sm:py-3 hover:bg-white hover:text-black cursor-pointer rounded-sm border-025 border-[#8897FF]">
                  <p className="font-stoke text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl whitespace-nowrap">
                    Improved Customer Experience
                  </p>
                </div>
              </div>
            </motion.div>
            {/* Second Row */}
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <div className="px-3 sm:px-4 py-2 sm:py-3 border-025 hover:bg-white hover:text-black cursor-pointer rounded-sm border-[#8897FF]">
                  <p className="font-stoke text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl whitespace-nowrap">
                    Cost Savings
                  </p>
                </div>
                <div className="px-3 sm:px-4 py-2 sm:py-3 border-025 hover:bg-white hover:text-black cursor-pointer rounded-sm border-[#8897FF]">
                  <p className="font-stoke text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl whitespace-nowrap">
                    Scalability
                  </p>
                </div>
                <div className="px-3 sm:px-4 py-2 sm:py-3 border-025 hover:bg-white rounded-sm hover:text-black cursor-pointer border-[#8897FF]">
                  <p className="font-stoke text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl whitespace-nowrap">
                    Get Started
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column - Headphone Image */}
        <div className="flex items-start justify-end h-[400px] sm:h-[500px] md:h-[550px] lg:h-[649px] relative">
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{
              y: [60, 0, 60], // Moves up and down
              opacity: [0, 1, 0],
              transition: {
                duration: 2,
                ease: "easeOut",
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
            viewport={{ once: false }}>
            <img
              src={headPhoneImg}
              alt="AI Headphones"
              className="w-full h-full object-center"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenifitsDialer;
