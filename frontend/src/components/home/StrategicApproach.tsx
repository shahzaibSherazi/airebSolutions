import { Search, Users, Wrench, RefreshCw, UserCheck } from "lucide-react";
import developmentSkillIcon from "../../assets/icons/development_skill.png";
import conferenceIcon from "../../assets/icons/conference.png";
import toolIcon from "../../assets/icons/tools.png";
import lifeCycleIcon from "../../assets/icons/life_cycle.png";
import bussinessIcon from "../../assets/icons/business_group.png";
import { motion } from "framer-motion";

interface ValueCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ValueCard = ({
  title,
  description,
  icon,
  className = "",
}: ValueCardProps) => (
  <div
    className={`group
    bg-primary text-white p-6 md:p-8
    flex flex-col justify-between
    sm:min-h-[180px]
    transition-all duration-300
    hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.25)]
    ${className}
  `}>
    <div className="flex justify-between items-center">
      <h3 className="text-2xl text-black md:text-[26px] font-stoke">{title}</h3>
      <div className=" text-black size-10 sm:size-11 flex justify-center items-center brightness-0 group-hover:invert trasitaion-all duration-300">
        {icon}
      </div>
    </div>
    <p className="text-textColor leading-[22px] mt-3.5">{description}</p>
  </div>
);

const StrategicApproach = () => {
  const values = [
    {
      title: "Clarity",
      description:
        "We identify real growth opportunities and find what is slowing down your systems, processes, or brand direction, so every decision helps your business move forward with clear purpose and strong results.",
      icon: (
        <img
          src={developmentSkillIcon}
          alt="Clarity Icon"
          className="size-7 sm:size-8"
        />
      ),
    },
    {
      title: "Partnership",
      description:
        "We dont simple build a solution for you, we collaborate with you. Working as one team, we turn ideas and ambitions into scalable and practical outcomes.",
      icon: (
        <img
          src={conferenceIcon}
          alt="Partnership Icon"
          className="size-7 sm:size-8"
        />
      ),
    },
    {
      title: "Engineering",
      description:
        "We develop technology that runs smoothly, adapts as you grow and is thoughtfully engineered to support long term business success.",
      icon: (
        <img
          src={toolIcon}
          alt="Engineering Icon"
          className="size-7 sm:size-8"
        />
      ),
    },
    {
      title: "Evolution",
      description:
        "Our solutions are built to evolve with change, respond quickly to new challenges, work smarter and help your business gain more value from every advancement.",
      icon: (
        <img
          src={lifeCycleIcon}
          alt="Evolution Icon"
          className="size-7 sm:size-8"
        />
      ),
    },
    {
      title: "Leadership",
      description:
        "We help strengthen your market position by improving visibility, enhancing performance nad creating a competitive advantage taht continuous to grow.",
      icon: (
        <img
          src={bussinessIcon}
          alt="Leadership Icon"
          className="size-7 sm:size-8"
        />
      ),
    },
  ];

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #000000 0%, #0E1828 100%)",
      }}>
      <div className="container font-outfit pb-16 lg:pb-24 lg:pt-0 pt-16 px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}>
          <span className="inline-block bg-primary font-outfit text-textColor px-6 py-3 text-2xl leading-4 mb-9 sm:mb-6">
            Strategic Approach
          </span>
          <h2 className="font-stoke text-textColor text-center mb-6 sm:mb-3.5 text-2xl md:text-[32px] lg:text-[42px] lg:leading-[56px]">
            The drive behind <br className="sm:hidden" /> everything we build
          </h2>
          <p className="text-textColor font-outfit max-w-[833px] mx-auto text-base leading-[22px]">
            We don't plan strategies; we focus on measurable results. Real
            growth means better conversasion optimized strong brands. See how
            our approach helpbussiness grow smarter and achieve long term
            success.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1.5 text-white">
          {/* Top Row - 3 Cards */}
          {values.slice(0, 3).map((value, index) => (
            <ValueCard
              key={index}
              title={value.title}
              description={value.description}
              icon={value.icon}
            />
          ))}
        </div>

        {/* Bottom Row - 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 mt-1.5">
          {values.slice(3, 5).map((value, index) => (
            <ValueCard
              key={index + 3}
              title={value.title}
              description={value.description}
              icon={value.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicApproach;
