import React from "react";
import cardIcon from "../../assets/icons/webService_icon.png";
import CustomIcon from "@/assets/icons/api_development/services_icons/custom_api.svg?react";
import IntegrationIcon from "@/assets/icons/api_development/services_icons/third_party.svg?react";
import AuthenticationIcon from "@/assets/icons/api_development/services_icons/authentication.svg?react";
import MicroservicesIcon from "@/assets/icons/api_development/services_icons/microservices.svg?react";
import CloudApiIcon from "@/assets/icons/api_development/services_icons/cloud_api.svg?react";
import DocumentationIcon from "@/assets/icons/api_development/services_icons/documentation.svg?react";
const ApiServices = () => {
  const services = [
    {
      id: 1,
      iconPath: <CustomIcon />,
      title: "Custom API Development",
      description:
        "We build robust, feature-rich APIs tailored to your business needs. Whether you require RESTful, SOAP, or GraphQL APIs, our expert developers ensure seamless data exchange and high-performance connectivity.",
    },
    {
      id: 2,
      iconPath: <IntegrationIcon />,
      title: "Third-Party API Integration",
      description:
        "Enhance your existing systems by integrating third-party APIs, including payment gateways, CRM, ERP, social media platforms, and more. We ensure smooth integration that optimizes your workflows and user experience.",
    },
    {
      id: 3,
      iconPath: <AuthenticationIcon />,
      title: "API Security & Authentication",
      description:
        "Security is our priority. We implement OAuth, JWT, API key authentication, and other advanced security protocols to protect data integrity and ensure secure transactions between applications.",
    },
    {
      id: 4,
      iconPath: <MicroservicesIcon />,
      title: "Microservices API Development",
      description:
        "Our microservices-based API solutions help businesses break down complex systems into smaller, independently deployable services, improving scalability, efficiency, and maintainability.",
    },
    {
      id: 5,
      iconPath: <CloudApiIcon />,
      title: "Cloud API Development",
      description:
        "We design and develop cloud-based APIs that facilitate seamless communication between cloud applications, ensuring high availability and optimal performance on platforms like AWS, Azure, and Google Cloud.",
    },
    {
      id: 6,
      iconPath: <DocumentationIcon />,
      title: "API Documentation & Support",
      description:
        "Comprehensive API documentation is crucial for developers. We provide detailed, easy-to-understand documentation to facilitate smooth implementation and integration, along with ongoing support to ensure optimal performance.",
    },
  ];

  return (
    <section className="relative w-full bg-black py-[8vh] sm:py-[10vh] lg:py-[12vh] px-8">
      <div className="">
        {/* Header Section */}
        <div className="text-center mb-[6vh] sm:mb-[8vh] lg:mb-[10vh]">
          <h2 className="font-stoke font-normal text-[clamp(28px,4.5vw,42px)] leading-[1.3] text-white mb-[2vh] sm:mb-[3vh]">
            Our API Development Services
          </h2>
          <p className="font-outfit font-normal text-[clamp(13px,1.3vw,16px)] leading-[1.6] text-[#EBEBEB] max-w-[800px] mx-auto px-4">
            We don't just create strategies we show the numbers. Growth means
            higher conversions, lower costs, and stronger brands. Discover how
            we help brands grow smarter
          </p>
        </div>

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
              {/* Icon Container */}
              <div className="mb-[clamp(16px,2.5vh,32px)]">
                <div className="w-[clamp(44px,5vh,56px)] h-[clamp(44px,5vh,56px)] bg-white text-black  flex items-center justify-center transition-all duration-500">
                  {service.iconPath}
                </div>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApiServices;
