import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Consultation & Strategy",
    description:
      "We analyze your challenges, customer needs, and goals to craft a clear strategy, ensuring our solutions align with your objectives.",
  },
  {
    number: 2,
    title: "Design & Prototyping",
    description:
      "We design intuitive solutions to enhance guest experiences and optimize operations, refining prototypes through testing and feedback.",
  },
  {
    number: 3,
    title: "Development & Integration",
    description:
      "We develop secure, scalable solutions tailored to your needs, integrating systems for seamless functionality and enhanced guest experiences.",
  },
  {
    number: 4,
    title: "Testing",
    description:
      "We test everything carefully to ensure it is bug-free, easy to use, and works smoothly on all platforms.",
  },
  {
    number: 5,
    title: "Deployment & Launch",
    description:
      "After testing, we launch your solution smoothly with full integration and ensure everything runs properly.",
  },
  {
    number: 6,
    title: "Ongoing Support",
    description:
      "We provide continuous support to fix issues, monitor performance, and improve your solution as your business grows.",
  },
];

function Badge({ number }) {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "backOut" }}
      viewport={{ once: true }}
      className="w-12 h-12 md:w-[52px] md:h-[52px] rounded-full flex items-center justify-center
      bg-primary text-white font-outfit font-bold text-lg shadow-lg ring-4 ring-blue-500/20">
      {number}
    </motion.div>
  );
}

function Arrow() {
  return (
    <div className="flex items-center flex-1 ml-4 min-w-0">
      {/* Line animation */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        style={{
          transformOrigin: "left",
          backgroundImage: "linear-gradient(90deg, #0E1828 0%, #FFFFFF 100%)",
        }}
        className="h-[1px] flex-1"
      />

      {/* Arrow icon */}
      <svg
        viewBox="0 0 10 16"
        className="w-3 h-4 text-white flex-shrink-0"
        fill="none">
        <polyline
          points="2,2 8,8 2,14"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function StepCard({ step }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="step-card flex flex-col">
      {/* Badge + Arrow */}
      <div className="flex items-center mb-6">
        <Badge number={step.number} />
        <Arrow />
      </div>

      {/* Content */}
      <h3 className="text-textColor font-stoke font-normal line-clamp-2 overflow-hidden text-base md:text-lg lg:text-xl mb-3 leading-snug">
        {step.title}
      </h3>
      <p className="text-textColor font-outfit text-sm md:text-base line-clamp-4 overflow-hidden font-light leading-relaxed">
        {step.description}
      </p>
    </motion.div>
  );
}

export default function TravelHospitalityCycle() {
  return (
    <section className="w-full bg-[#0E1828]">
      <div className="container py-16 md:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20">
          <h1 className="font-stoke lg:text-start text-center text-h2 leading-[1.28] text-white mb-6">
            Our Travel & Hospitality Development Cycle
          </h1>
          <p className="text-textColor lg:text-start text-center font-outfit text-sm leading-relaxed">
            At Aireb Solutions, we follow a structured development cycle to
            ensure that our travel and hospitality solutions are optimized for
            success, security, <br className="hidden lg:block" /> and
            performance.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-12">
          {steps.map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
