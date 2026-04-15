import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const keyProblems = [
  {
    title: "Manual data entry and errors",
    desc: "Managing data manually across multiple platforms increases errors and wastes valuable time.",
  },
  {
    title: "Disconnected Systems",
    desc: "Lack of integration between CRM, Marketing, and other tools leads to poor data flow and inefficiency.",
  },
  {
    title: "Poor handling of client relations",
    desc: "Without good integration, it becomes hard and messy to keep track of consumer communications.",
  },
  {
    title: "Lack of automation",
    desc: "Manual workflow slows down processes like lead management, follow-ups, and task assignments.",
  },
  {
    title: "Not many reports or insights",
    desc: "When the data is scattered out, it's challenging to put together reliable statistics and figure out how well a business is doing.",
  },
  {
    title: " E-commerce data management issues",
    desc: "It's hard to keep track of orders, inventory, and customer data when they're all in different places.",
  },
  {
    title: "Integration challenges with third-party tools",
    desc: "Connecting CRM to other systems is hard, which makes it less valuable and less able to grow.",
  },
  {
    title: "Business processes that aren't very effective",
    desc: "When technologies and procedures don't operate well together, productivity and growth potential fall.",
  },
];

const valuePropositions = [
  "Data syncs flawlessly on all platforms",
  "CRM works with technologies for business and communication.",
  "Managing tasks and setting up automatic workflows",
  "Real-time advanced reporting and analytics",
  "Ways to combine e-commerce and customer relationship management (CRM)",
  "Easy connections with third-party apps through integrations",
  "An integration architecture that is safe and can grow",
  "More efficient and smoother work",
];

const CrmChallenges = () => {
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
          <div>
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}>
              <h2
                className="font-stoke text-h2 text-textColor leading-tight mb-3
          ">
                CRM Integration Challenges <br /> Holding You Back?
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
                What you get with our API & CRM integration services
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

export default CrmChallenges;
