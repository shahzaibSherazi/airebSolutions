import { useState } from "react";
import SoftwareDevIcon from "@/assets/icons/industries/health-care/services-icons/software_dev.svg?react";
import MhealthIcon from "@/assets/icons/industries/health-care/services-icons/mHealth.svg?react";
import LabIcon from "@/assets/icons/industries/health-care/services-icons/lab.svg?react";
import MachinLearningIcon from "@/assets/icons/industries/health-care/services-icons/machin-learning.svg?react";
import CloudIcon from "@/assets/icons/industries/health-care/services-icons/cloud.svg?react";
import DigitalIcon from "@/assets/icons/industries/health-care/services-icons/digital.svg?react";
const services = [
  {
    id: 1,
    icon: <SoftwareDevIcon />,
    title: "Website Development for Startups",
    description:
      "Your website is often the first impression your customers will have of your business. We help startups build professional, mobile-responsive websites that are optimized for speed, SEO, and conversion. Our solutions are not just about aesthetics—they're designed to create a seamless user experience that drives results.",
  },
  {
    id: 2,
    icon: <MhealthIcon />,
    title: "Mobile App Development",
    description:
      "In a world where mobile usage is at an all-time high, having a well-designed mobile app can significantly boost a startup's success. We build intuitive, user-friendly mobile apps for both iOS and Android platforms, ensuring that your business stays connected with your audience on the go.",
  },
  {
    id: 3,
    icon: <LabIcon />,
    title: "Branding & Graphic Design",
    description:
      "Strong branding is essential for any startup looking to make a lasting impact. We help create a powerful visual identity for your startup that resonates with your target audience and builds brand recognition.",
  },
  {
    id: 4,
    icon: <MachinLearningIcon />,
    title: "Digital Marketing for Startups",
    description:
      "Effective marketing is critical for startup growth. Our digital marketing solutions are designed to help you reach your target audience, generate leads, and increase sales, all while optimizing your budget.",
  },
  {
    id: 5,
    icon: <CloudIcon />,
    title: "Cloud-Based Solutions",
    description:
      "Startups need scalable and flexible solutions that can grow with their business. We offer cloud-based solutions that allow you to manage operations more efficiently, reduce IT overhead, and ensure that your infrastructure can scale as needed.",
  },
  {
    id: 6,
    icon: <DigitalIcon />,
    title: "CRM & Automation Solutions",
    description:
      "Customer relationship management (CRM) systems are essential for startups looking to manage leads, automate marketing, and build strong relationships with customers. We offer CRM solutions tailored to startups, helping you manage your customer data efficiently and automate key business processes.",
  },
];

const cardStyle = {
  border: "1.5px solid transparent",
  backgroundImage:
    "linear-gradient(#02070F, #02070F), linear-gradient(180deg, #4285F4 0%, #000000 99.51%, #4285F4 99.52%)",
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
  borderRadius: "9px",
  width: "100%",
  maxWidth: "450px",
  minHeight: "347px",
};

function ServiceCard({ service, animationDelay = 0 }) {
  return (
    <div
      className="border border-primary flex flex-col gap-4 p-8 transition-all duration-300 hover:-translate-y-1 group"
      style={{
        ...cardStyle,
        animation: `faddeUp 0.4s ease ${animationDelay}ms both`,
        boxShadow: "0 0 0 rgba(66,133,244,0)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 16px 40px rgba(66,133,244,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 0 0 rgba(66,133,244,0)";
      }}>
      {/* Icon */}
      <div
        className="w-11 h-11  flex items-center justify-center rounded-[2px] p-[1px] flex-shrink-0"
        style={{
          backgroundImage: "linear-gradient(180deg, #4285F4 0%, #000000 100%)",
        }}>
        <div className="bg-[#02070F] flex items-center justify-center w-full h-full">
          {service.icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-textColor font-stoke font-normal text-[clamp(18px,1vw,24px)] leading-snug">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-[clamp(14px,1vw,16px)] text-textColor font-outfit font-light leading-relaxed flex-1">
        {service.description}
      </p>
    </div>
  );
}

export default function StartUpServices() {
  return (
    <>
      <section className=" py-16 lg:py-24 px-6 lg:px-8 bg-[#02070F]">
        <div className="">
          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="font-stoke text-[clamp(24px,4vw,42px)] font-normal leading-[1.28] text-white mb-5">
              Our Startup Solutions
            </h1>
            <p className="font-outfit font-normal  mx-auto text-sm md:text-lg leading-relaxed">
              At Aireb Solutions, we offer tailored solutions that help startups
              from the ground up. Whether <br /> you're looking to build a
              website, develop a mobile app, or scale your marketing efforts, we{" "}
              <br /> provide the expertise and support you need to succeed.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:mx-auto xl:max-w-screen-2xl">
            {services.map((service, i) => (
              <div key={service.id} className="flex justify-center">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
