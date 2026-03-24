import React from "react";
import { motion } from "framer-motion";
import ArrowIcon from "@/assets/icons/card_arrow.svg?react";
export default function APICRMIntegration() {
  const phases = [
    {
      number: "01",
      title: "Consultation & Planning",
      description:
        "Understand your business requirements and CRM needs. Identify third-party tools and platforms to integrate. Define clear objectives and outcomes for the integration.",
    },
    {
      number: "02",
      title: "System Architecture & Design",
      description:
        "Design a scalable architecture for seamless data flow and integration. Plan API integrations to ensure compatibility between all systems.",
    },
    {
      number: "03",
      title: "Development & Customization",
      description:
        "Develop custom API solutions based on your specific business requirements. Customize CRM systems to ensure they align with your operational goals.",
    },
    {
      number: "04",
      title: "Post-Deployment Support & Optimization",
      description:
        "Provide ongoing support to troubleshoot and resolve any issues. Continuously monitor and optimize integrations for performance and scalability.",
    },
    {
      number: "05",
      title: "Deployment & Integration",
      description:
        "Deploy the solution in a controlled environment for initial implementation. Integrate APIs with your CRM and ensure data flows smoothly across systems.",
    },
    {
      number: "06",
      title: "Testing & Quality Assurance",
      description:
        "Conduct thorough testing to ensure seamless data synchronization and integration. Perform load testing and security audits to ensure optimal performance and safety.",
    },
  ];

  return (
    <section className="bg-black text-white">
      <div className="px-6 lg:px-8 pb-16 md:pb-24">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <span className="inline-block bg-primary text-textColor text-base font-outfit font-medium px-4 py-2 rounded">
            Our Work Process
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24">
          {/* LEFT — Sticky */}
          <div className="lg:sticky lg:top-24 self-start">
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}>
              <h1 className="text-3xl sm:text-4xl md:text-[42px] font-normal font-stoke md:leading-[56px] mb-6">
                Our API and CRM
                <br className="hidden sm:block" />
                Integration Development
                <br className="hidden sm:block" />
                Cycle
              </h1>
            </motion.div>
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}>
              <p className="text-textColor font-normal font-outfit text-base leading-relaxed max-w-xl">
                Transform your business by connecting your CRM with powerful
                tools and platforms through Airish Solutions API integration
                services. Let us help you streamline your operations, enhance
                customer experiences, and drive business growth.
              </p>
            </motion.div>
          </div>

          {/* RIGHT — Cards Column */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="
                border-b  p-6 sm:p-8 
               transition-all duration-300 group
                flex flex-col h-auto hover:bg-primary">
                {/* Top Row: Number, Title, Arrow in one line */}
                <div className="flex items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-4">
                  {/* Number - Fixed width */}
                  <div className="flex-shrink-0 w-10 sm:w-12">
                    <span className="text-textColor font-bold text-lg sm:text-xl">
                      {phase.number}
                    </span>
                  </div>

                  {/* Title - Takes remaining space */}
                  <div className="flex-grow min-w-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-outfit font-medium text-textColor line-clamp-2 sm:line-clamp-3">
                      {phase.title}
                    </h3>
                  </div>

                  {/* Arrow - Fixed width */}
                  <div className="flex-shrink-0 w-4 h-3">
                    <ArrowIcon className="w-full h-full text-primary group-hover:text-white transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Description - Starts below title, not number */}
                <div className="pl-12 sm:pl-14 md:pl-16 mt-2">
                  <p className="text-textColor font-outfit font-light text-sm sm:text-base leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
