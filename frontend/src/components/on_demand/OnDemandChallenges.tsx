import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const keyProblems = [
  {
    title: "Slow and inefficient service systems",
    desc: "Manual processes slow down bookings, orders, and service delivery.",
  },
  {
    title: "No tracking in real time",
    desc: "Customers can't keep an eye on their orders, deliveries, or service status without live tracking.",
  },
  {
    title: "Bad experience for users",
    desc: "Complicated interfaces make people less interested and more likely to leave.",
  },
  {
    title: "Limited capacity to grow",
    desc: "It's hard for old systems to keep up with more users, vendors, and transactions.",
  },
  {
    title: "Weak payment integration",
    desc: "People don't trust anything when there aren't safe and easy ways to pay.",
  },
  {
    title: "Inefficient vendor and service management",
    desc: "Managing multiple providers manually leads to confusion and errors.",
  },
  {
    title: "No smart features or automation",
    desc: "Without AI and analytics, companies miss chances to make things better.",
  },
  {
    title: "Security and compliance concerns",
    desc: "Poor data protection and compliance can risk customer trust and business reputation.",
  },
];

const valuePropositions = [
  "Custom app creation on demand for any business",
  "Platforms for multi-vendor marketplaces",
  "Tracking in real time and smart notifications",
  "Integration of a secure payment gateway",
  "Recommendations and automation powered by AI",
  "Scheduling and dispatching systems in real time",
  "Architecture that can evolve with your business",
  "Design that is safe, fast, and focused on the user",
];

const OnDemandChallenges = () => {
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
              On-Demand Challenges <br /> Holding You Back?
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
                      <p className="font-outfit text-sm lg:text-base text-white leading-relaxed font-medium">
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
                {/* Our On-Demand solutions give you the following */}
                Solutions:
              </h3>

              <ul className="flex flex-col gap-3">
                {valuePropositions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span className="font-outfit text-p text-white leading-relaxed">
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

export default OnDemandChallenges;
