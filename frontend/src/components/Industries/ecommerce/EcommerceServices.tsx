import { useState } from "react";
import SoftwareDevIcon from "@/assets/icons/industries/education/services/custom.svg?react";
import MobileIcon from "@/assets/icons/industries/education/services/mobile.svg?react";
import LmsIcon from "@/assets/icons/industries/education/services/lms.svg?react";
import VirtualIcon from "@/assets/icons/industries/education/services/virtual.svg?react";
import WebIcon from "@/assets/icons/industries/education/services/web.svg?react";
import CrmIcon from "@/assets/icons/industries/education/services/crm.svg?react";
const services = [
  {
    id: 1,
    icon: <SoftwareDevIcon />,
    title: "Custom Ecommerce Website Development",
    description:
      "We design and develop custom e-commerce websites that match your brand identity. Our websites are responsive, mobile-friendly, SEO optimized, and easy to use for better performance.",
  },
  {
    id: 2,
    icon: <MobileIcon />,
    title: "Ecommerce Platform Integration",
    description:
      "We integrate platforms like Shopify, WooCommerce, and BigCommerce. We also help you build a new store or smoothly migrate existing ones without any data loss.",
  },
  {
    id: 3,
    icon: <LmsIcon />,
    title: "Payment Gateway Integration",
    description:
      "We integrate a secure payment gateway like PayPal, Stripe, Square, and crypto options. This ensures safe, fast, and smooth checkout for your customers.",
  },
  {
    id: 4,
    icon: <VirtualIcon />,
    title: "Ecommerce Marketing Strategies",
    description:
      "We create targeted marketing strategies to increase traffic, improve conversions, and boots sale using SEO, social media, content marketing, and paid ads.",
  },
  {
    id: 5,
    icon: <WebIcon />,
    title: " Inventory and order management solution",
    description:
      "We provide a smart inventory and order management system to track stock, process orders, and handle fulfillment efficiently for a smooth business operation.",
  },
  {
    id: 6,
    icon: <CrmIcon />,
    title: "Ecommerce Mobile App Development",
    description:
      "We build user-friendly e-commerce mobile apps for android nad ios. These apps improve customer engagement and provide a smooth shopping experience any time, anywhere.",
  },
  {
    id: 7,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5"
        stroke="#4285F4"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Custom E-commerce Features",
    description:
      "We add custom features like product recommendations, advanced filters, and personalized experiences to make your online store more engaging and unique.",
  },
  {
    id: 8,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5"
        stroke="#4285F4"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "E-commerce Analytics Report",
    description:
      "We provide detailed analytics and reports to track sales, customer behavior, and product performance, helping you make better business decisions.",
  },
];

const INITIAL_COUNT = 6;

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
      className="border border-primary flex flex-col gap-8 p-8 transition-all duration-300 hover:-translate-y-1 group"
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
      <p className="text-[clamp(14px,1vw,16px)] text-textColor line-clamp-6 overflow-hidden font-outfit font-light leading-relaxed flex-1">
        {service.description}
      </p>
    </div>
  );
}

export default function EcommerceServices() {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? services : services.slice(0, INITIAL_COUNT);
  const hiddenCount = services.length - INITIAL_COUNT;

  return (
    <>
      <section className=" py-16 lg:py-24 px-6 bg-[#02070F]">
        <div className="">
          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="font-stoke text-[clamp(24px,4vw,42px)] font-normal leading-[1.28] text-white mb-5">
              Our Ecommerce Services
            </h1>
            <p className="font-outfit font-normal max-w-4xl  mx-auto text-sm md:text-lg leading-relaxed">
              We provide complete e-commerce services to support every part of
              your online business. From building and developing your store,
              marketing, and customer engagement, we create solutions that help
              your business grow, improve performance, and achieve long-term
              success online.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:mx-auto xl:max-w-screen-2xl">
            {visibleServices.map((service, i) => (
              <div key={service.id} className="flex justify-center">
                <ServiceCard
                  service={service}
                  animationDelay={
                    showAll && i >= INITIAL_COUNT
                      ? (i - INITIAL_COUNT) * 100
                      : 0
                  }
                />
              </div>
            ))}
          </div>

          {/* View More / Less Button */}
          {services.length > INITIAL_COUNT && (
            <div className="flex justify-center mt-14">
              <button
                onClick={() => setShowAll((prev) => !prev)}
                className="relative overflow-hidden border border-primary text-textColor text-sm md:text-base lg:text-[22px] font-bold font-outfit px-12 py-3.5 rounded-md transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background:
                    "linear-gradient(90deg, #4285F4 0%, #02070F 100%)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 8px 28px rgba(66,133,244,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(66,133,244,0.3)";
                }}>
                <span className="relative z-10">
                  {showAll ? "View Less" : `View More`}
                </span>
                {/* Shine overlay */}
                <span
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.15), transparent)",
                  }}
                />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
