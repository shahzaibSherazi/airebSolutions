import bgImg from "../../assets/AllServices_assets/hero_bg.webp";
import { motion } from "framer-motion";
const AllServicesHero = () => {
  return (
    <section className="heros_height relative flex flex-col justify-center w-full bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0  bg-[linear-gradient(180deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.5)_50%,rgba(66,133,244,0.25)_100%)] sm:bg-[linear-gradient(66.03deg,#629DFF_-38.71%,rgba(0,0,0,0.2)_114.21%)]" />
      {/* Content */}
      <div className="container relative z-10 py-8 lg:py-10 flex flex-col justify-end ">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}>
          <div className="mb-[2vh] sm:mb-[3vh] ">
            <p className="font-outfit text-p leading-[1.6] text-textColor max-w-2xl">
              Achieve your business goals
            </p>
          </div>

          <h1 className="font-stoke text-h1 leading-[1.28] text-textColor">
            AI Consulting,
            <br className="hidden lg:block" />
            IT & Digital Services
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default AllServicesHero;
