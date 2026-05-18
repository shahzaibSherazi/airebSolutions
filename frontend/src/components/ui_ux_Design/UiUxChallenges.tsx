import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const keyProblems = [
  {
    title: "Poor user experience and hard-to-understand navigation",
    desc: "Users have a hard time finding what they need since the layouts and structure are not obvious, which causes significant bounce rates.",
  },
  {
    title: "An old and unappealing design",
    desc: "An inconsistent and old design doesn't generate trust and makes users less likely to engage.",
  },
  {
    title: "Low conversion rates",
    desc: "Poor design and user flow lead to fewer leads, sales, and activities.",
  },
  {
    title: "Not optimizing for mobile devices",
    desc: "A lot of potential users will not use designs that are not mobile-friendly.",
  },
  {
    title: "No proper user research",
    desc: "Without understanding user behavior, designs fail to meet real customer needs.",
  },
  {
    title: "Design aspects that don't match",
    desc: "Not having a design system makes things confusing and makes the brand less recognizable.",
  },
  {
    title: "Accessibility issues",
    desc: "Ignoring accessibility makes it difficult for all users to interact with your platform.",
  },
  {
    title: " Poor usability and interaction",
    desc: "Users are frustrated with complicated interfaces, which lowers their overall satisfaction.",
  },
];

const valuePropositions = [
  "User research and design strategy based on data",
  "Wireframing and making interactive prototypes",
  "UI design that is modern and interesting",
  "User-centered UX design for a better experience",
  "Testing for usability and making improvements all the time ",
  "Responsive and mobile-first design",
  "Design for e-commerce and conversions",
  "Systems for design and solutions that focus on accessibility",
];

const UiUxChallenges = () => {
  return (
    <section
      style={{
        background:
          "linear-gradient(280.41deg, rgba(2, 7, 15, 0) 61.52%, #103775 98.99%, #103775 98.99%)",
      }}
      className="relative w-full text-white ">
      {/* ── Top row: heading left, button right ── */}
      <div className="container py-16 lg:py-24">
        <div className="flex sm:flex-row flex-col items-start justify-center sm:justify-between gap-2 sm:gap-6 mb-3">
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}>
            <h2
              className="font-stoke text-h2 text-textColor leading-[1.3] mb-3
          ">
              UI/UX Design Challenges <br /> Holding You Back?
            </h2>
            {/* Subheading */}
            <p className="font-outfit text-sm lg:text-base text-white mb-12 leading-[1.3]">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
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
                      <p className="font-outfit text-title text-white leading-[1.3] font-medium">
                        {item.title}
                      </p>
                      <p className="font-outfit text-p text-white leading-[1.3]">
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
                {/* What you get with our UI/UX design services */}
                Solutions:
              </h3>

              <ul className="flex flex-col gap-3">
                {valuePropositions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span className="font-outfit text-p text-white leading-[1.3]">
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

export default UiUxChallenges;
