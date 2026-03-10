import React from "react";
import { motion } from "framer-motion";
const keyProblems = [
  "Slow database queries when students accessed the course dashboards",
  "Delays in loading video lessons and course materials.",
  "High database load during live classes and peak study times.",
  "Inefficient indexing and poorly optimized queries.",
  "Repeated database requests due to a lack of caching.",
  "Difficulty handling thousands of simultaneous users.",
];

const valuePropositions = [
  "Analyze and optimize slow database queries.",
  "Implemented proper indexing to speed up data retrieval.",
  "Introduce a caching mechanism to reduce repeated database calls.",
  "Optimized database schema and query structure.",
  "Implemented load balancing to distribute traffic efficiently.",
  "Integrate monitoring tools to track database performance in real time.",
  "Improve the deployment process using a CI/CD pipeline.",
];

const DevOpsChallenges = () => {
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
              DevOps Challenges Holding <br /> You Back?
            </h2>
            {/* Subheading */}
            <p className="font-outfit text-sm text-white mb-12">
              You're not alone, here's what we fix every day.
            </p>
          </motion.div>
        </div>
        <button
          style={{
            background: "linear-gradient(90deg, #4285F4 0%, #000000 100%)",
          }}
          className="shrink-0  self-start mt-2 px-4 py-2 font-outfit text-xs sm:text-sm text-white font-medium border border-primary transition-all whitespace-nowrap">
          View All Case Studies
        </button>
      </div>

      {/* ── Two cards ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
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
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="font-outfit text-sm text-white leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="font-outfit text-sm text-white leading-relaxed">
              These issues resulted in slow response times and frustrated users,
              and an unreliable learning platform.
            </p>
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
              Solution by Aireb Solutions:
            </h3>
            <p className="font-outfit text-sm text-white leading-relaxed">
              Aireb Solutions implemented a devops base database optimization
              strategy to improve performance and stability.
            </p>
            <ul className="flex flex-col gap-3">
              {valuePropositions.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="font-outfit text-sm text-white leading-relaxed">
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

export default DevOpsChallenges;
