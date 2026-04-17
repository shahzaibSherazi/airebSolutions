import React from "react";
import shahzaibImg from "@/assets/about-us/Sherazi.png";
import bilalImg from "@/assets/about-us/Bilal.png";
import zohaibImg from "@/assets/about-us/Zohaib.png";
import adeelImg from "@/assets/about-us/Adeel.png";
import kamranImg from "@/assets/about-us/Kamran.png";
import saboorImg from "@/assets/about-us/Saboor.png";
import mouzamImg from "@/assets/about-us/Mouzam.png";
import hussainImg from "@/assets/about-us/Hussain.png";
import shoaibImg from "@/assets/about-us/Shoaib.png";
import zareefImg from "@/assets/about-us/Zareef.png";
import sabeenImg from "@/assets/about-us/Sabeen.png";
import muneebImg from "@/assets/about-us/muneeb.png";
const leaders = [
  {
    name: "Shahzaib Sherazi",
    role: "Senior Front End Developer",
    image: shahzaibImg,
  },
  {
    name: "Muhammad Bilal",
    role: "UI / UX Designer",
    image: bilalImg,
  },
  {
    name: "Mehar Zohaib",
    role: "Front End Developer",
    image: zohaibImg,
  },
  {
    name: "Muhammad Adeel",
    role: "Senior Full Stack Developer",
    image: adeelImg,
  },
  {
    name: "Mirza Kamran",
    role: "Manager Security & Administration",
    image: kamranImg,
  },

  {
    name: "A. Saboor Asad",
    role: "Senior Devops Manager",
    image: saboorImg,
  },
  {
    name: "M. Mouzam",
    role: "Full Stack Developer",
    image: mouzamImg,
  },
  {
    name: "G. Hussain",
    role: "SEO Specialist",
    image: hussainImg,
  },
  {
    name: "M. Shoaib",
    role: "Mern Stack Developer",
    image: shoaibImg,
  },
  {
    name: "M. Zareef",
    role: "AI Software Engineer",
    image: zareefImg,
  },
  {
    name: "Muneeb",
    role: "Senior Accountant",
    image: muneebImg,
  },
  {
    name: "Sabeen Sheikh",
    role: "Business Development Specialist",
    image: sabeenImg,
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
      className="relative leadersCards_Edge flex flex-col w-full border-b border-[#4285F4]"
      style={{
        background:
          "linear-gradient(180deg, rgba(66, 133, 244, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)",
        aspectRatio: "247 / 199",
      }}>
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover object-top"
        style={{ display: "block" }}
      />

      {/* Name & Role bar — bottom overlay */}
      <div className=" px-[clamp(8px,0.8vw,14px)] py-3 ">
        <h3 className="text-white font-outfit font-normal text-[clamp(14px,1.8vw,20px)] leading-tight">
          {name}
        </h3>
        <p className="text-textColor font-outfit font-normal text-[clamp(9px,0.8vw,14px)] mt-0.5">
          {role}
        </p>
      </div>
    </div>
  </div>
);

const CreativeMinds = () => {
  return (
    <section
      style={{
        background:
          "linear-gradient(359.92deg, #02070F 22.66%, #102545 73.53%)",
      }}
      className="w-full  overflow-hidden">
      <div className="container px-2 lg:px-8 py-16 lg:py-24">
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-textColor font-stoke font-normal text-h2 leading-tight mb-4">
            Creative Minds
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {leaders.map((leader) => (
            <LeaderCard key={leader.name} {...leader} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeMinds;
