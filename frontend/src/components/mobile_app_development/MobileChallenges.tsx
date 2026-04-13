import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const keyProblems = [
  {
    title: "Apps that are old or don't work well",
    desc: "Old, poorly designed, and slow apps make users angry and less likely to use them.",
  },
  {
    title: "Platform incompatibility",
    desc: "Apps not optimized for multiple devices limit reach and user satisfaction.",
  },
  {
    title: "A bad experience for users",
    desc: "Confusing interfaces and weak design reduce interaction and retention.",
  },
  {
    title: "Enterprise mobility that doesn't work right",
    desc: "Without mobile solutions that are customised to fit, internal procedures and communication suffer.",
  },
  {
    title: "Not enough new stuff in AR and VR",
    desc: "Apps that don't have immersive experiences could not be as engaging or competitive.",
  },
  {
    title: "Not good enough testing and QA",
    desc: "Apps are less useful and less reliable when they have bugs, crashes, and security gaps.",
  },
  {
    title: "Difficult app maintenance",
    desc: "Without ongoing support, apps quickly become outdated and prone to issues.",
  },
  {
    title: " Limited scalability",
    desc: "Apps not designed to scale struggle with growing user bases and new user interactions.",
  },
];

const valuePropositions = [
  "Creating unique mobile apps for Android and iOS",
  "Native app development to make the platform work better",
  "Cross platform apps using React Native and Flutter.",
  "Enterprise mobility solutions to improve how things function",
  "Updating, revamping, and improving apps ",
  "Creating AR and VR apps for immersive experiences",
  "Testing apps to make sure they perform well",
  "Long-term dependability with regular help and maintenance",
];

const MobileChallenges = () => {
  return (
    <section
      style={{
        background:
          "linear-gradient(280.41deg, rgba(2, 7, 15, 0) 61.52%, #103775 98.99%, #103775 98.99%)",
      }}
      className="relative w-full text-white px-6 lg:px-8 py-16 lg:py-24">
      {/* ── Top row: heading left, button right ── */}
      <div className="flex sm:flex-row flex-col items-start justify-center sm:justify-between gap-2 sm:gap-6 mb-3">
        <div>
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}>
            <h2
              className="font-stoke text-[clamp(28px,4vw,48px)] text-textColor leading-tight mb-3
          ">
              Mobile Development Challenges <br /> Holding You Back?
            </h2>
            {/* Subheading */}
            <p className="font-outfit text-sm lg:text-base text-white mb-12">
              You're not alone, here's what we fix every day.
            </p>
          </motion.div>
        </div>
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
              What you get when you use our Mobile Apps & Games services
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
    </section>
  );
};

export default MobileChallenges;
