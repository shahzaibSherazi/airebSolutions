import React from "react";
import { motion } from "framer-motion";
import SeamlessIcon from "@/assets/icons/crm-integration/services-icons/seamless.svg?react";
import StreamedIcon from "@/assets/icons/crm-integration/services-icons/streamed.svg?react";
import AutomatedIcon from "@/assets/icons/crm-integration/services-icons/automated.svg?react";
import ReportingIcon from "@/assets/icons/crm-integration/services-icons/reporting.svg?react";
import CrmIcon from "@/assets/icons/crm-integration/services-icons/crm.svg?react";
import ThirdPartyIcon from "@/assets/icons/crm-integration/services-icons/third-party.svg?react";

const CrmServices = () => {
  const services = [
    {
      id: 1,
      iconPath: <SeamlessIcon />,
      title: "Seamless Data Synchronization",
      description:
        "Our API integrations allow data to be automatically synchronized between various platforms. Whether it’s customer details, sales leads, support tickets, or marketing data, you can ensure that your CRM is always up-to-date with the latest information. This eliminates manual data entry, reduces errors, and saves valuable time.",
    },
    {
      id: 2,
      iconPath: <StreamedIcon />,
      title: "Streamlined Customer Interaction",
      description:
        "Integrating your CRM with communication tools such as email, phone systems, and chat platforms can streamline customer interactions. With API integrations, you can track interactions, schedule follow-ups, and manage communication all from within a single CRM interface, allowing for a more personalized and responsive customer experience",
    },
    {
      id: 3,
      iconPath: <AutomatedIcon />,
      title: "Automated Workflows",
      description:
        "Automating business workflows is crucial for improving efficiency and reducing manual effort. API integrations allow for the seamless automation of tasks, such as assigning leads, scheduling appointments, or updating customer records. This improves team collaboration and speeds up the overall process, ensuring that every task is completed on time",
    },
    {
      id: 4,
      iconPath: <ReportingIcon />,
      title: "Enhanced Reporting and Analytics",
      description:
        "With integrated APIs, businesses can consolidate data from different sources, enabling advanced analytics and reporting. By syncing CRM data with other tools like marketing automation platforms, analytics dashboards, and financial systems, you gain comprehensive insights into your business performance, customer behavior, and market trends.",
    },
    {
      id: 5,
      iconPath: <CrmIcon />,
      title: "CRM with E-Commerce Integrations",
      description:
        "For businesses that also manage e-commerce stores, API integrations between CRMs and e-commerce platforms can offer a seamless shopping experience. Sync customer orders, inventory, payment status, and shipping details directly with your CRM, enabling you to provide timely and accurate information to customers.",
    },
    {
      id: 6,
      iconPath: <ThirdPartyIcon />,
      title: "Third-Party App Integrations",
      description:
        "Whether it's integrating your CRM with social media, customer support tools, or project management platforms, API integrations enable seamless communication between your CRM and third-party applications. These integrations ensure that data flows freely between platforms, ensuring you always have the latest customer information at your fingertips.",
    },
  ];

  return (
    <section className="relative w-full bg-black ">
      <div className="container py-16 lg:py-24 px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-[6vh] sm:mb-[8vh] lg:mb-[10vh]"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}>
          <h2 className="font-stoke font-normal text-h2 leading-[1.3] text-white mb-[2vh] sm:mb-[3vh]">
            Our API and CRM Integration Services
          </h2>
          <p className="font-outfit font-normal text-p leading-[1.6] text-[#EBEBEB] max-w-[890px] mx-auto px-4">
            Aireb Solutions, we specialize in creating custom API integrations
            with leading CRM platforms to ensure your business has a unified and
            efficient communication strategy. Our integration services are
            designed to help businesses create a connected ecosystem that
            ensures smooth data flow, improved productivity, and seamless
            customer experiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(16px,2vh,24px)]">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card group relative bg-black hover:bg-primary
  border border-gray-800 p-[clamp(24px,3vh,40px)]
  transition-all duration-500 ease-in-out hover:border-primary
  overflow-hidden
  ">
              <motion.div
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false }}>
                {/* Icon Container */}
                <div className="w-[clamp(44px,5vh,56px)] h-[clamp(44px,5vh,56px)] mb-[clamp(16px,2.5vh,32px)] bg-white text-black  flex items-center justify-center transition-all duration-500">
                  {service.iconPath}
                </div>

                {/* Title */}
                <h3
                  className="font-outfit font-semibold text-white
  text-[clamp(16px,1.8vw,22px)] leading-[1.3]
  mb-[clamp(12px,1.5vh,20px)]
  line-clamp-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="font-outfit font-normal text-gray-400 group-hover:text-white
  text-[clamp(12px,1.3vw,15px)] leading-[1.7]
  transition-colors duration-500
  line-clamp-5">
                  {service.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrmServices;
