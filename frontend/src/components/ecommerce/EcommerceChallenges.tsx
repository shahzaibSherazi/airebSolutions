import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const keyProblems = [
  {
    title: "Low conversion rates",
    desc: "Poor design and complicated checkout processes reduce sales and customer trust.",
  },
  {
    title: "Limited scalability",
    desc: "E-commerce stores that can't handle growth struggle with traffic spikes and expanding product lines.",
  },
  {
    title: "Poor mobile shopping experience",
    desc: "Non-optimized mobile stores lead to high bounce rates and lost customers.",
  },
  {
    title: "Difficult product & order management",
    desc: " Manual processes and outdated systems slow down operations and increase errors.",
  },
  {
    title: " Payment and checkout issues",
    desc: "Limited or insecure payment options create friction and reduce customer confidence.",
  },
  {
    title: "Weak SEO and low visibility",
    desc: "Without proper optimization, your store fails to attract organic traffic and sales.",
  },
  {
    title: "Integration challenges",
    desc: "Disconnected systems (CRM, inventory, marketplaces) create inefficiencies and data issues.",
  },
  {
    title: "Security risks",
    desc: "Lack of proper security measures puts customer data and business reputation at risk.",
  },
];

const valuePropositions = [
  "Custom e-commerce store development (Shopify, WooCommerce, Magento, custom)",
  "Multi-channel marketplace integrations (Amazon, eBay, Etsy)",
  "Mobile-first and responsive store design",
  "Secure payment gateway integrations (PayPal, Stripe, etc.)",
  "Advanced SEO and digital marketing optimization",
  "CRM integration for better customer management",
  "Smart product & order management systems",
  "AI-powered features (recommendations, chatbots, automation)",
  "Cloud hosting with high scalability (AWS, Google Cloud, Azure)",
  "Strong security implementation (SSL, PCI compliance, 2FA)",
  "Analytics and reporting for data-driven decisions",
  "Omnichannel commerce solutions",
];

const EcommerceChallenges = () => {
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
              E-commerce Challenges <br /> Holding You Back?
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
                What you get with our e-commerce development services
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

export default EcommerceChallenges;
