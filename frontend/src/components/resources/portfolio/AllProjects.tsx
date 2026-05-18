import React, { useState } from "react";
import { ChevronDown, Star } from "lucide-react";
import { Link } from "react-router-dom";
// ── Replace these imports with your actual project images ──
import proj1 from "@/assets/resources/portfolio/card-1.webp";
import proj2 from "@/assets/resources/portfolio/card-2.webp";
import proj3 from "@/assets/resources/portfolio/card-3.webp";
import proj4 from "@/assets/resources/portfolio/card-4.webp";
import proj5 from "@/assets/resources/portfolio/card-5.webp";
import proj6 from "@/assets/resources/portfolio/card-6.webp";
import proj7 from "@/assets/resources/portfolio/card-7.webp";
import proj8 from "@/assets/resources/portfolio/eyeora.webp";
import proj9 from "@/assets/resources/portfolio/fiscfiler.webp";
import proj10 from "@/assets/resources/portfolio/infusion.webp";
import proj11 from "@/assets/resources/portfolio/joinmasstorts.webp";
import proj12 from "@/assets/resources/portfolio/nur.webp";

// ── Project Data ──
const projects = [
  {
    id: 1,
    tag: "Tozcall",
    title: "Tozcall for Smart VoIP & Call Center Solutions",
    desc: "Tozcall is a cloud-based call center platform offering VoIP, predictive dialing, virtual numbers, SMS APIs, email marketing, and CRM integrations—powered by AI for scalable, reliable performance with 99.9% uptime.",
    category: "Cloud Base",
    satisfaction: 4,
    production: "Complete solution",
    image: proj1,
    link: "https://tozcall.com/",
  },
  {
    id: 2,
    tag: "PKLabs",
    title: "PKLabs Smart AI & Automation Solutions",
    desc: "PKLabs.ai is an AI-driven digital solutions company that builds custom software, automation systems, and marketing strategies to help businesses grow faster and smarter.",
    category: "Cloud Base",
    satisfaction: 4,
    production: "Complete solution",
    image: proj2,
    link: "https://pklabs.ai/",
  },
  {
    id: 3,
    tag: "Happyvitamins",
    title: "HappyVitamins Vitamins for Health & Wellness",
    desc: "HappyVitamins.pk is an eCommerce platform that sells imported vitamins and health supplements to support fitness, wellness, and daily nutrition in Pakistan.",
    category: "Supplements Store",
    satisfaction: 5,
    production: "Complete solution",
    image: proj3,
    link: "https://happyvitamins.pk/",
  },
  {
    id: 4,
    tag: "B2B sales intelligence platform",
    title: "Boost Sales with ZenBee Intelligence Platform",
    desc: "ZenBee.io is a SaaS-based sales intelligence and lead generation platform that provides data, insights, and tools to help businesses find prospects and close more deals faster.",
    category: "B2B Sales",
    satisfaction: 5,
    production: "Complete Solution",
    image: proj4,
    link: "https://zenbee.io/",
  },
  {
    id: 5,
    tag: "Hsaatchi",
    title: "HSaatchi Luxury Boutique Jewelry Brand",
    desc: "HSaatchi.com represents a boutique jewelry brand with a refined, luxurious aesthetic. It blends regional craftsmanship with modern design sensibilities, making it appealing to style-conscious buyers across the Middle East",
    category: "Jewelry Brand",
    satisfaction: 4,
    production: "Complete solution",
    image: proj5,
    link: "https://www.hsaatchi.com/",
  },
  {
    id: 6,
    tag: "eyeora",
    title: "Eyeora XR for Immersive Events & Monetization",
    desc: "Eyeora is a SaaS-based XR platform that lets users create and monetize immersive 3D virtual experiences, events, and social environments.",
    category: "Saas",
    satisfaction: 5,
    production: "Complete solution",
    image: proj8,
    link: "https://www.eyeora.com/",
  },
  {
    id: 7,
    tag: "Sirat Ul Baqi",
    title: "Explore Sacred Journeys with Sirat-ul-Baqi",
    desc: "Sirat-ul-Baqi provides reliable and spiritually enriching travel services for Muslims visiting sacred destinations, while promoting awareness and preserving Islamic heritage through community engagement.",
    category: "Travel Agency",
    satisfaction: 4,
    production: "Complete solution",
    image: proj7,
    link: "https://www.sirat-ul-baqi.com/",
  },
  {
    id: 8,
    tag: "FISCFILER",
    title: "FiscFiler for Easy Tax Filing & Accounting",
    desc: "FiscFiler provides a user-friendly platform for global accounting and tax filing, offering comprehensive services for individuals and small businesses with a strong focus on simplicity, compliance, and conversions.",
    category: "Accounting",
    satisfaction: 4,
    production: "Complete solution",
    image: proj9,
    link: "https://www.fiscfiler.com/",
  },
  {
    id: 9,
    tag: "Infusion Capital",
    title: "Predictive Dialer for High-Volume Sales Ops",
    desc: "Infusion Capital uses a high-performance outbound dialer designed for large-scale calling. With predictive and progressive dialing, it connects agents to pre-loaded leads, minimizes downtime, and maximizes productivity. Real-time tracking, logging, and analytics enable a fast-paced,high-volume sales environment across multiple industries.",
    category: "Dialer",
    satisfaction: 4,
    production: "Complete solution",
    image: proj10,
    link: "#",
  },
  {
    id: 10,
    tag: "JointMasstorts",
    title: "JoinMassTorts Connection Platform",
    desc: "joinmasstorts.com is a landing page that claims to connect people with mass tort lawsuits. Currently, it only shows a bot verification (CAPTCHA) and does not provide any law firm credentials, case details, or legal guidance.",
    category: "Jewelry Brand",
    satisfaction: 4,
    production: "Complete solution",
    image: proj11,
    link: "https://joinmasstorts.com/",
  },
  {
    id: 11,
    tag: "Narsun Studios",
    title: "Narsun Studios AI & Immersive Tech Solutions",
    desc: "Narsun Studios is a tech and immersive design firm that helps businesses bring cutting-edge AI, virtual reality, augmented reality, blockchain, and interactive experiences to life.",
    category: "Gamification",
    satisfaction: 4,
    production: "Complete solution",
    image: proj12,
    link: "https://narsunstudios.com/en/",
  },
];

// ── Star Rating ──
const StarRating = ({ count }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        size={13}
        className={star <= count ? "text-yellow-400" : "text-white/20"}
        fill={star <= count ? "#facc15" : "transparent"}
      />
    ))}
  </div>
);

// ── Project Card ──
const ProjectCard = ({ project }) => (
  <div
    className="relative w-full rounded-2xl overflow-hidden flex flex-col sm:flex-row gap-6 p-2 sm:p-8"
    style={{
      background: "linear-gradient(180deg, #4285F4 0%, #02070F 100%)",
      borderBottom: "1px solid #4285F4",
    }}>
    {/* Left: Text content */}
    <div className="flex flex-col gap-4 flex-1 justify-between w-full sm:w-1/2">
      <div className="flex flex-col gap-2 w-full">
        {/* Tag */}
        <span className="font-outfit italic text-[clamp(14px,2vw,25px)] text-black tracking-wide">
          {project.tag}
        </span>

        {/* Title */}
        <h3 className="font-stoke text-title line-clamp-2 overflow-hidden font-normal text-white leading-snug">
          {project.title}
        </h3>

        {/* Description */}
        <p className="font-outfit text-p line-clamp-4 overflow-hidden font-normal text-white leading-relaxed">
          {project.desc}
        </p>
      </div>

      {/* Meta rows */}
      <div className="flex flex-col gap-2 mt-2">
        {/* Category */}
        <div className="flex items-center justify-between px-4 py-2 rounded-sm bg-white">
          <span className="font-outfit text-[clamp(11px,1.5vw,20px)] text-black">
            Category
          </span>
          <span className="font-outfit text-[clamp(11px,1.5vw,20px)] text-[#535353]">
            {project.category}
          </span>
        </div>

        {/* Satisfaction */}
        <div className="flex items-center justify-between px-4 py-2 rounded-sm bg-white">
          <span className="font-outfit text-[clamp(11px,1.5vw,20px)] text-black">
            Satisfaction
          </span>
          <StarRating count={project.satisfaction} />
        </div>

        {/* Production */}
        <div className="flex items-center justify-between px-4 py-2 rounded-sm bg-white">
          <span className="font-outfit text-[clamp(11px,1.5vw,20px)] text-black">
            Production
          </span>
          <span className="font-outfit text-[clamp(11px,1.5vw,20px)] text-[#535353]">
            {project.production}
          </span>
        </div>
      </div>

      {/* View Project Button */}
      <Link
        to={project.link}
        className="mt-4 self-start bg-primary px-5 py-2 rounded-sm font-outfit text-sm text-white font-medium transition-all hover:opacity-90"
        target="_blank"
        rel="noopener noreferrer">
        View Project
      </Link>
    </div>

    {/* Right: Laptop mockup image */}
    <div className="flex items-center justify-center w-full sm:w-1/2 shrink-0">
      <img
        src={project.image}
        alt={project.title}
        className="w-full max-w-sm sm:max-w-full h-auto object-contain drop-shadow-2xl"
      />
    </div>
  </div>
);

// ── Main Section ──
const AllProjects = () => {
  const [showAll, setShowAll] = useState(true);

  return (
    <section className="relative w-full bg-[#02070F] text-white ">
      {/* Heading */}
      <div className="container py-16 lg:py-24">
        <div className="flex flex-col items-center text-center mb-10 gap-1">
          <h2 className="font-stoke text-[clamp(24px,4vw,42px)] font-normal text-white">
            Proven Success In
          </h2>
          <span className="font-outfit text-[clamp(24px,4vw,42px)] text-primary font-light">
            Every Project
          </span>
        </div>

        {/* Filter Button */}
        <div className="flex justify-center mb-16">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="flex items-center border border-primary gap-2 px-5 py-2 rounded-sm font-outfit text-sm text-white font-bold transition-all hover:opacity-90"
            style={{
              background: "linear-gradient(90deg, #000000 0%, #4285F4 100%)",
            }}>
            All Project
            <ChevronDown
              size={16}
              className="transition-transform duration-300"
              style={{ transform: showAll ? "rotate(0deg)" : "rotate(180deg)" }}
            />
          </button>
        </div>

        {/* Cards */}
        {showAll && (
          <div className="flex flex-col gap-12 sm:gap-16 lg:gap-24">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllProjects;
