import { useState } from "react";
import HotelIcon from "@/assets/Industies/travel-hospitality/services/hotel.svg?react";
import TravelIcon from "@/assets/Industies/travel-hospitality/services/travel.svg?react";
import MobileIcon from "@/assets/Industies/travel-hospitality/services/mobile-app.svg?react";
import MarketingIcon from "@/assets/Industies/travel-hospitality/services/marketing.svg?react";
import IntegrationIcon from "@/assets/Industies/travel-hospitality/services/integration.svg?react";
import WebsiteIcon from "@/assets/Industies/travel-hospitality/services/website.svg?react";
const services = [
  {
    id: 1,
    icon: <HotelIcon />,
    title: "Hotel Management Solutions",
    description:
      "We provide hotel management systems to improve operations, manage bookings, and deliver better guest experiences.",
  },
  {
    id: 2,
    icon: <TravelIcon />,
    title: "Travel Agency Solutions",
    description:
      "We help travel agencies manage bookings, communication, and operations efficiently for better customer service.",
  },
  {
    id: 3,
    icon: <MobileIcon />,
    title: "Mobile App Development for Travel & Hospitality",
    description:
      "We build mobile apps to improve customer experience and provide easy access to travel services.",
  },
  {
    id: 4,
    icon: <MarketingIcon />,
    title: "Digital Marketing Solutions",
    description:
      "We offer marketing services to increase online visibility, attract customers, and grow your brand.",
  },
  {
    id: 5,
    icon: <IntegrationIcon />,
    title: "Booking Engine Integration & Optimization",
    description:
      "We integrate booking systems to make reservations fast, easy, and improve conversion rates.",
  },
  {
    id: 6,
    icon: <WebsiteIcon />,
    title: "Property Website Design & Development",
    description:
      "We create professional, user-friendly websites that reflect your brand and improve user experience.",
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
    title: "Virtual Concierge & AI Chatbots",
    description:
      "We provide AI chatbots to assist customers, answer queries, and offer personalized support.",
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
    title: "Data Analytics & Reporting",
    description:
      "We offer analytics tools to track customer behavior and improve business decisions.",
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
      <p className="text-[clamp(14px,1vw,16px)] text-textColor font-outfit font-light line-clamp-4 overflow-hidden leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}

export default function TravelHospitalityServices() {
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
              Our Travel & Hospitality Solutions
            </h1>
            <p className="font-outfit font-normal  mx-auto text-sm md:text-lg leading-relaxed">
              At Aireb Solutions, we provide tailored solutions that help travel
              and hospitality businesses <br /> improve operational efficiency,
              enhance guest experiences, and drive profitability.
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
