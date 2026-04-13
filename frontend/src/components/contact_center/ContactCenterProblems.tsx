import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const keyProblems = [
  {
    title: "Long wait times for customers",
    desc: "Long wait times make people angry and less happy with the service.",
  },
  {
    title: "Inefficient support processes",
    desc: "Manual workflow and a lack of automation reduce agent productivity and increase operational costs.",
  },
  {
    title: "Poor omnichannel support",
    desc: "Inconsistent support across voice, email, chat, and social media weakens customer experience.",
  },
  {
    title: " Hard to deal with heavy traffic",
    desc: "Traffic spikes that aren't supported can cause missed calls and lost chances.",
  },
  {
    title: "Low resolution of the first interaction",
    desc: "Without committed technical support, complicated problems stay unsolved, which hurts trust.",
  },
  {
    title: "Rising operational costs",
    desc: "Inefficient staffing and outdated systems inflate support expenses.",
  },
  {
    title: "Limited use of smart technology",
    desc: "Without AI driven tool, contact centers struggle to deliver fast, personalized service.",
  },
];

const valuePropositions = [
  "Inbound and outbound voice support",
  "Non-voice support (email, chat, social media)",
  "Technical support teams that are always available",
  "Integrations of CRM and support systems that work well",
  "Automation and smart routing are better because of AI",
  "Experience with assistance across all channels",
  "Solutions that can grow with high demand",
  "Strategies for keeping customers and getting them to connect with you proactively",
];

const ContactCenterProblems = () => {
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
              Contact Center Challenges <br /> Holding You Back?
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
              What you get with our contact center services
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

export default ContactCenterProblems;
