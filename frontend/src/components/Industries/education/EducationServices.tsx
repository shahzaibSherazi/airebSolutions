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
    title: "Custom E-Learning Platform Development",
    description:
      "We create custom e-learning systems that are simple to use, provide interactive content, and are good for both teachers and students.",
  },
  {
    id: 2,
    icon: <MobileIcon />,
    title: "Mobile Learning Apps",
    description:
      "We make smartphone apps that make it easy for professors and students to get to classes and talk to each other whenever and wherever they choose.",
  },
  {
    id: 3,
    icon: <LmsIcon />,
    title: "Creating a Learning Management System (LMS)",
    description:
      "We make LMS solutions that allow teachers and students talk to each other better, keep track of how students are doing, and manage content.",
  },
  {
    id: 4,
    icon: <VirtualIcon />,
    title: "Virtual Classroom Solutions",
    description:
      "We have safe online classrooms where you can take live lessons, talk to other students in real time, and easily communicate.",
  },
  {
    id: 5,
    icon: <WebIcon />,
    title: "Custom Web and Mobile Portals",
    description:
      "We create one-of-a-kind portals that make it simple to keep track of student information, resources, and daily tasks.",
  },
  {
    id: 6,
    icon: <CrmIcon />,
    title: "CRM & Student Engagement Solutions",
    description:
      "We have CRM tools that let you keep track of how students engage with each other, improve communication, and get them more active.",
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
    title: "AI-Powered Personalized  Learning",
    description:
      "We use AI to create personalised learning experiences for each student so they can do better",
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
    title: "Conferences, events, and webinars",
    description:
      "We help you plan online events, webinars, and conferences that bring together students, teachers, and professionals.",
  },
  {
    id: 9,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5"
        stroke="#4285F4"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Content Writing for educational websites",
    description:
      "We write good content that keeps students, parents, and teachers interested.",
  },
  {
    id: 9,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5"
        stroke="#4285F4"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Gamification in Education",
    description:
      "We use game-like features like rewards and challenges to make studying more entertaining and fascinating for students.",
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
      <p className="text-[clamp(14px,1vw,16px)] text-textColor font-outfit font-light leading-relaxed flex-1">
        {service.description}
      </p>
    </div>
  );
}

export default function EducationServices() {
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
              Our Education Industry Solutions
            </h1>
            <p className="font-outfit font-normal  mx-auto text-sm md:text-lg leading-relaxed">
              At Aireb Solutions, we offer a wide range of services designed to
              support educational <br className="hidden lg:block" />{" "}
              institutions in improving teaching, learning, and administration
              processes.
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
