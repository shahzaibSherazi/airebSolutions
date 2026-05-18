import { motion } from "framer-motion";
import headPhoneImg from "@/assets/Dialer_assets/headphones.png";

const BenifitsDialer = () => {
  return (
    <section
      style={{
        background: "linear-gradient(97.32deg, #0E1828 1.89%, #000000 98.11%)",
      }}
      className="overflow-hidden relative">
      {/* Background Image Layer */}
      <div
        className="hidden lg:block absolute top-0 right-0 h-full w-[380px] xl:w-[440px] 2xl:w-[520px] bg-contain bg-right bg-no-repeat pointer-events-none z-0"
        style={{
          backgroundImage: `url(${headPhoneImg})`,
        }}
      />

      {/* Optional dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/10 to-black/40 pointer-events-none z-0" />

      {/* Main Content */}
      <div className="container relative z-10">
        <div className="py-16 lg:py-24">
          <div className="flex flex-col space-y-8 sm:space-y-10 max-w-4xl">
            {/* Heading */}
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}>
              <h1 className="text-textColor font-stoke font-normal text-h2 mb-4 leading-[1.3] relative z-10">
                Benefits of AI Custom <br /> Dialer Solutions
              </h1>

              <p className="text-textColor font-outfit font-normal text-p leading-[1.3] relative z-10">
                Partner with Aireb Solutions to implement an AI-powered custom
                dialer solution that enhances your business operations,
                optimizes communication, and improves customer relationships.
                Reach out today to learn how we can revolutionize your business
                with AI technology.
              </p>
            </motion.div>

            {/* Benefits Tags */}
            <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6 relative z-10">
              <motion.div
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false }}>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <p className="font-stoke text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl whitespace-nowrap px-3 sm:px-4 py-2 sm:py-3 hover:bg-white rounded-sm hover:text-black border-025 border-[#8897FF]">
                    Increased Efficiency
                  </p>

                  <p className="font-stoke text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl whitespace-nowrap inline-flex px-3 sm:px-4 py-2 sm:py-3 hover:bg-white hover:text-black rounded-sm border-025 border-[#8897FF]">
                    Improved Customer Experience
                  </p>
                </div>
              </motion.div>

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
        </div>
      </div>
    </section>
  );
};

export default BenifitsDialer;
