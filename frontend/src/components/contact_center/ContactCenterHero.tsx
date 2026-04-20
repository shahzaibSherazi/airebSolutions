import { Link } from "react-router-dom";
import bgImg from "../../assets/contact-center_assets/hero_bg.png";
import { motion } from "../ui/motion";

const ContactCenterHero = () => {
  return (
    <section className="heros_height relative flex flex-col justify-center sm:text-start text-center w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0  bg-[linear-gradient(180deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.5)_50%,rgba(66,133,244,0.25)_100%)] sm:bg-[linear-gradient(66deg,#629DFF_-90%,rgba(0,0,0,0.2)_114%)]" />
      {/* Content */}
      <div className="container relative z-10 px-2 lg:px-8 py-8 lg:py-10  flex flex-col justify-end sm:items-start items-center">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}>
          <h1 className="font-stoke text-h1 leading-[1.28] text-white mb-4 lg:mb-2">
            Contact Center
            <br className="hidden lg:block" /> Services
          </h1>
          <p className="font-outfit text-p leading-[1.6] text-textColor max-w-2xl mb-10">
            We provide a reliable, scalable contact center solution that
            elevates customer support and engagement. From voice and non-voice
            support to technical assistance and AI-enhanced interactions, our
            services ensure seamless communication and exceptional experiences
            for your customers.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 w-fit gap-3 sm:gap-4">
          <Link
            to="/resources/portfolio"
            className="font-outfit font-bold text-center text-sm md:text-lg  px-6 sm:px-7 py-2 sm:py-[9px] bg-black text-textColor rounded hover:bg-textColor hover:text-black transition-all duration-300 shadow-md hover:shadow-lg">
            Discover It
          </Link>
          <a
            href="#contact-form"
            className="font-outfit font-bold text-sm md:text-lg  px-6 sm:px-7 py-2 sm:py-[9px] bg-black text-textColor rounded  hover:bg-textColor hover:text-black transition-all duration-300 shadow-md hover:shadow-lg">
            Start A Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCenterHero;
