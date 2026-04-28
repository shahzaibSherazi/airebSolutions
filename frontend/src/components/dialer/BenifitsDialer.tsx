import { motion } from "framer-motion";
import headPhoneImg from "@/assets/Dialer_assets/headphones.png";

const BenifitsDialer = () => {
  return (
    <section
      style={{
        background: "linear-gradient(97.32deg, #0E1828 1.89%, #000000 98.11%)",
      }}
      className="overflow-hidden flex lg:flex-row lg:items-center flex-col">
      <div className="container  px-2 lg:px-8">
        {/* Left Column - Content */}
        <div
          className="lg:container flex flex-col ml-0 2xl:ml-44 sm:space-y-10 space-y-8 py-16  lg:py-24 
">
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}>
            <h1 className="text-textColor font-stoke font-normal text-h2 mb-4 leading-tight">
              Benefits of AI Custom <br /> Dialer Solutions
            </h1>
            <p className="text-textColor font-outfit font-normal text-p leading-relaxed max-w-2xl">
              Partner with Aireb Solutions to implement an AI-powered custom
              dialer solution that enhances your business operations, optimizes
              communication, and improves customer relationships. Reach out
              today to learn how we can revolutionize your business with AI
              technology.
            </p>
          </motion.div>

          {/* Benefits Tags */}
          <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col gap-3 sm:gap-4 lg:gap-6">
            {/* First Row */}
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <p className="font-stoke text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl whitespace-nowrap px-3 sm:px-4 py-2 sm:py-3 hover:bg-white rounded-sm hover:text-black border-025 border-[#8897FF]">
                  Increased Efficiency
                </p>
                <p className="font-stoke text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl whitespace-nowrap inline-flex px-3 sm:px-4 py-2 sm:py-3 hover:bg-white hover:text-black  rounded-sm border-025 border-[#8897FF]">
                  Improved Customer Experience
                </p>
              </div>
            </motion.div>
            {/* Second Row */}
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <p className="font-stoke text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl whitespace-nowrap px-3 sm:px-4 py-2 sm:py-3 border-025 hover:bg-white hover:text-black rounded-sm border-[#8897FF]">
                  Cost Savings
                </p>
                <p className="font-stoke text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl whitespace-nowrap px-3 sm:px-4 py-2 sm:py-3 border-025 hover:bg-white hover:text-black rounded-sm border-[#8897FF]">
                  Scalability
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column - Headphone Image */}
      </div>
      <div className="flex items-start justify-end h-[400px] sm:h-[500px] md:h-[550px] lg:h-[649px] relative">
        <img
          src={headPhoneImg}
          alt="AI Headphones"
          className="w-full h-full object-center"
        />
      </div>
    </section>
  );
};

export default BenifitsDialer;
