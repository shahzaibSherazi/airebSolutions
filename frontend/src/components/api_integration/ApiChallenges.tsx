import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const keyProblems = [
  {
    title: "Disconnected system and datasilos",
    desc: "When APIs aren't integrated correctly, data gets spread out across systems, which makes them less efficient and less visible.",
  },
  {
    title: "Bad communication between systems",
    desc: "Different apps can't talk to each other well without solid APIs, which causes delays and mistakes.",
  },
  {
    title: "APIs that aren't safe",
    desc: "Cyber dangers can get to sensitive data if authentication and security mechanisms aren't strong enough.",
  },
  {
    title: "Slow and inefficient Integrations",
    desc: "If you don't set up your API correctly, it can make your system less efficient and slow down processes.",
  },
  {
    title: "Limited ability to grow",
    desc: "APIs that aren't built to grow have a hard time keeping up with more data and user needs.",
  },
  {
    title: "Complex integration processes",
    desc: "Integrating APIs takes a lot of effort and is hard to do without the right knowledge.",
  },
  {
    title: "Not enough good API documentation",
    desc: "Bad documentation makes it hard for developers to understand and use APIs properly.",
  },
  {
    title: "Difficulty in managing multiple services",
    desc: "Handling multiple APIs without a structured approach can create confusion and inefficiency.",
  },
];

const valuePropositions = [
  "Building custom APIs (REST, SOAP, GraphQL)",
  "Integrations with third-party APIs like CRM, ERP, payment gateways, and more",
  "Authentication for APIs that is safe (OAuth, JWT, API keys)",
  "API architecture based on microservices",
  "Making cloud APIs (for AWS, Azure, and Google Cloud)",
  "API solutions that work well and can grow with your needs",
  "Data transmission and system connectivity that work without a hitch",
  "API documentation that is clear and easy to understand, as well as ongoing help",
];

const ApiChallenges = () => {
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
              className="font-stoke text-h2 text-textColor leading-tight mb-3
          ">
              API Development Challenges <br /> Holding You Back?
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
                      <p className="font-outfit text-sm lg:text-base text-white leading-[1.3] font-medium">
                        {item.title}
                      </p>
                      <p className="font-outfit text-xs lg:text-sm text-white leading-[1.3]">
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
                {/* What we get with our API development services */}
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

export default ApiChallenges;
