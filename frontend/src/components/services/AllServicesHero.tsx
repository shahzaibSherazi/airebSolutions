import bgImg from "../../assets/AllServices_assets/hero_bg.png";
import { motion } from "framer-motion";
const AllServicesHero = () => {
  return (
    <section className="relative w-full bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      />
      {/* Gradient Overlay */}
      <div
        style={{
          background:
            "linear-gradient(66.03deg, #629DFF -38.71%, rgba(0, 0, 0, 0.2) 114.21%)",
        }}
        className="absolute inset-0 "
      />
      {/* Content */}
      <div className="relative z-10 min-h-screen px-8 py-[8vh] sm:py-[10vh] lg:py-[14vh] flex flex-col justify-end ">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}>
          <div className="mb-[2vh] sm:mb-[3vh] ">
            <p className="font-outfit text-[clamp(14px,1.5vw,18px)] leading-[1.6] text-textColor max-w-2xl">
              Achieve your business goals
            </p>
          </div>

          <h1 className="font-stoke text-[clamp(28px,5vw,56px)] leading-[1.28] text-textColor">
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
