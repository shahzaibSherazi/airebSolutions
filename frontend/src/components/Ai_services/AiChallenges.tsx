import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const keyProblems = [
  {
    title: "Low efficiency and manual work",
    desc: "Doing the same thing again and over again wastes time, lowers productivity, and raises costs.",
  },
  {
    title: "Not making decisions based on data",
    desc: "Businesses have a hard time looking at big information and overlook important growth opportunities.",
  },
  {
    title: "Poor customer engagement",
    desc: "Without personifications and intelligent systems, businesses fail to engage and retain users.",
  },
  {
    title: "Limited ability to automate",
    desc: "Because traditional systems don't have automation, workflows are slowed down, and mistakes are made by people.",
  },
  {
    title: "Poor data analysis",
    desc: "Without AI, dealing with complicated data can lead to wrong forecasts and missed chances.",
  },
  {
    title: "Week customer interaction systems",
    desc: "Lack of AI-driven chatbots and NLP tools reduces communication efficiency.",
  },
  {
    title: "Problems with security and finding fraud",
    desc: "Businesses are more likely to be victims of fraud and security issues if they don't have AI surveillance.",
  },
  {
    title: "Intelligent systems can't grow as needed",
    desc: "Basic systems can't keep up with more data and the more advanced AI needs.",
  },
];

const valuePropositions = [
  "AI integration and automating workflows",
  "Data-driven insights and predictive analytics",
  "Solutions for Natural Language Processing (NLP)",
  "Systems for recognising images and seeing things with a computer",
  "Models for generative AI and deep learning ",
  "Recommendation systems that use AI",
  "Smart chatbots and virtual helpers",
  "AI architecture that is scalable, safe, and fast",
];

const AiChallenges = () => {
  return (
    <section
      style={{
        background:
          "linear-gradient(280.41deg, rgba(2, 7, 15, 0) 61.52%, #103775 98.99%, #103775 98.99%)",
      }}
      className="relative w-full text-white ">
      {/* ── Top row: heading left, button right ── */}
      <div className="container px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex sm:flex-row flex-col items-start justify-center sm:justify-between gap-2 sm:gap-6 mb-3">
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}>
            <h2
              className="font-stoke text-h2 text-textColor leading-tight mb-3
          ">
              AI Challenges <br /> Holding You Back?
            </h2>
            {/* Subheading */}
            <p className="font-outfit text-sm lg:text-base text-white mb-12">
              You're not alone, here's what we fix every day.
            </p>
          </motion.div>
          <Link
            to="/resources/case-studies"
            style={{
              background: "linear-gradient(90deg, #4285F4 0%, #000000 100%)",
            }}
            className="shrink-0  self-start mt-2 px-4 py-2 font-outfit text-xs sm:text-sm text-white font-medium border border-primary transition-all whitespace-nowrap">
            View All Case Studies
          </Link>
        </div>

        {/* ── Two cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          <div
            className="p-px"
            style={{
              background:
                "linear-gradient(89.86deg, #4285F4 0.12%, #02070F 99.88%)",
            }}>
            <div className="bg-[#02070F] p-6 sm:p-8 h-full">
              <h3 className="font-stoke text-[clamp(16px,2vw,28px)] font-normal text-white mb-6">
                Key Problems:
              </h3>
              <ul className="flex flex-col gap-3 mb-3">
                {keyProblems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0" />

                    <div>
                      <p className="font-outfit text-sm lg:text-base text-white leading-relaxed font-medium">
                        {item.title}
                      </p>
                      <p className="font-outfit text-xs lg:text-sm text-white leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="p-4"
            style={{
              border: "1px solid transparent",
              backgroundImage:
                "linear-gradient(#02070F,#02070F),linear-gradient(180deg, #111111 0%, #629DFF 56.73%, #0D0D0D 100%)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
            }}>
            <div className="bg-[#192B4A] p-6 sm:p-8 h-full">
              <h3 className="font-stoke text-[clamp(16px,2vw,28px)] font-normal text-white mb-6">
                What you get from our AI & ML services
              </h3>

              <ul className="flex flex-col gap-3">
                {valuePropositions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span className="font-outfit text-sm lg:text-base text-white leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiChallenges;
