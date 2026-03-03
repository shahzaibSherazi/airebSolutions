import React from "react";
import owaisJaraImg from "@/assets/about-us/Owais-Jara.png";
import talalJamilImg from "@/assets/about-us/Talal-Jamil.png";
import rehmanAliImg from "@/assets/about-us/Rehman-Ali.png";
import usmanShahzadImg from "@/assets/about-us/Usman-Shahzad.png";
const leaders = [
  {
    name: "Owais Jara",
    role: "Founder & CEO",
    image: owaisJaraImg, // replace with your actual image path
  },
  {
    name: "Talal Jamil",
    role: "Co-Founder & CFO",
    image: talalJamilImg,
  },
  {
    name: "Rehman Ali",
    role: "Co-Founder & COO",
    image: rehmanAliImg,
  },
  {
    name: "Usman Shahzad",
    role: "Managing Director",
    image: usmanShahzadImg,
  },
];

const LeaderCard = ({
  name,
  role,
  image,
}: {
  name: string;
  role: string;
  image: string;
}) => (
  <div className=" flex flex-col group">
    {/* Card image container with corner brackets */}
    <div
      className="relative leadersCards_Edge flex flex-col w-full"
      style={{ aspectRatio: "306 / 334" }}>
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover object-top"
        style={{ display: "block" }}
      />

      {/* Name & Role bar — bottom overlay */}
      <div className=" bg-primary px-4 py-3 -mt-3">
        <h3 className="text-white font-stoke font-normal text-[clamp(14px,1.8vw,28px)] leading-tight">
          {name}
        </h3>
        <p className="text-textColor font-outfit font-normal text-[clamp(12px,1vw,16px)] mt-0.5">
          {role}
        </p>
      </div>
    </div>
  </div>
);

const DynamicLeadership = () => {
  return (
    <section
      style={{
        background: "linear-gradient(269.9deg, #102545 43.69%, #02070F 99.92%)",
      }}
      className="w-full  overflow-hidden">
      <div className=" px-6 lg:px-8 pt-16 lg:pt-24 lg:pb-36 pb-20">
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-textColor font-stoke font-normal text-[clamp(36px,5vw,56px)] leading-tight mb-4">
            Meet Our Dynamic
            <br />
            Leadership
          </h2>
          <p className="text-textColor font-outfit font-light text-[clamp(14px,1.2vw,18px)] leading-relaxed  mx-auto">
            Discover the visionary minds leading our journey. Our accomplished
            leaders <br className="hidden sm:block" /> bring innovation,
            integrity, and insight to every step of our success.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {leaders.map((leader) => (
            <LeaderCard key={leader.name} {...leader} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicLeadership;
