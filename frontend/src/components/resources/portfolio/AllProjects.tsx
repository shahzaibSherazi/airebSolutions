// import React, { useState } from "react";
// import { ChevronDown, Star } from "lucide-react";

// // ── Replace these imports with your actual project images ──
// import proj1 from "@/assets/resources/portfolio/card-1.png";
// import proj2 from "@/assets/resources/portfolio/card-2.png";
// import proj3 from "@/assets/resources/portfolio/card-3.png";
// import proj4 from "@/assets/resources/portfolio/card-4.png";
// import proj5 from "@/assets/resources/portfolio/card-5.png";
// import proj6 from "@/assets/resources/portfolio/card-6.png";
// import proj7 from "@/assets/resources/portfolio/card-7.png";

// // ── Project Data ──
// const projects = [
//   {
//     id: 1,
//     tag: "Communication",
//     title: "A Contact Center Solutions Provider",
//     desc: "Tazacall enables teams to communicate smarter: unified voice, SMS and email tools + AI-driven analytics all in one cloud platform so you spend less time managing systems, and more time building relationships.",
//     category: "Branding",
//     satisfaction: 4,
//     production: "May 10, 2022",
//     image: proj1,
//   },
//   {
//     id: 2,
//     tag: "Communication",
//     title: "A Contact Center Solutions Provider",
//     desc: "Tazacall enables teams to communicate smarter: unified voice, SMS and email tools + AI-driven analytics all in one cloud platform so you spend less time managing systems, and more time building relationships.",
//     category: "Branding",
//     satisfaction: 4,
//     production: "May 10, 2022",
//     image: proj2,
//   },
//   {
//     id: 3,
//     tag: "E-Commerce",
//     title: "Smart Shopping Experience Platform",
//     desc: "A fully integrated e-commerce solution with AI-powered recommendations, real-time inventory tracking, and seamless checkout experience built for modern retail brands.",
//     category: "Development",
//     satisfaction: 5,
//     production: "Aug 15, 2022",
//     image: proj3,
//   },
//   {
//     id: 4,
//     tag: "Healthcare",
//     title: "Patient Management & Telehealth App",
//     desc: "A HIPAA-compliant telehealth platform enabling doctors and patients to connect virtually, manage appointments, and share medical records securely from any device.",
//     category: "UI/UX Design",
//     satisfaction: 5,
//     production: "Jan 20, 2023",
//     image: proj4,
//   },
//   {
//     id: 5,
//     tag: "Finance",
//     title: "Digital Banking Dashboard",
//     desc: "A next-generation digital banking interface offering real-time transaction tracking, AI budgeting tools, and multi-currency support for modern financial institutions.",
//     category: "Branding",
//     satisfaction: 4,
//     production: "Mar 5, 2023",
//     image: proj5,
//   },
//   {
//     id: 6,
//     tag: "Education",
//     title: "Interactive Learning Management System",
//     desc: "A cloud-based LMS built for schools and enterprises — featuring live classes, progress analytics, gamified learning paths, and seamless integrations with third-party tools.",
//     category: "Development",
//     satisfaction: 5,
//     production: "Jun 12, 2023",
//     image: proj6,
//   },
//   {
//     id: 7,
//     tag: "Communication",
//     title: "Omnichannel Marketing Automation Tool",
//     desc: "A unified marketing platform that automates email, SMS, and social media campaigns using AI segmentation and real-time performance analytics for maximum ROI.",
//     category: "UI/UX Design",
//     satisfaction: 4,
//     production: "Sep 30, 2023",
//     image: proj7,
//   },
// ];

// // ── Star Rating ──
// const StarRating = ({ count }) => (
//   <div className="flex items-center gap-0.5">
//     {[1, 2, 3, 4, 5].map((star) => (
//       <Star
//         key={star}
//         size={13}
//         className={star <= count ? "text-yellow-400" : "text-white/20"}
//         fill={star <= count ? "#facc15" : "transparent"}
//       />
//     ))}
//   </div>
// );

// // ── Project Card ──
// const ProjectCard = ({ project }) => (
//   <div
//     className="relative w-full rounded-2xl overflow-hidden flex flex-col sm:flex-row gap-6 p-6 sm:p-8"
//     style={{
//       background: "linear-gradient(180deg, #4285F4 0%, #02070F 100%)",
//       borderBottom: "1px solid #4285F4",
//     }}>
//     {/* Left: Text content */}
//     <div className="flex flex-col gap-4 flex-1 justify-between w-1/2">
//       <div className="flex flex-col gap-2 w-full">
//         {/* Tag */}
//         <span className="font-outfit italic text-[clamp(16px,2vw,25px)] text-black tracking-wide">
//           {project.tag}
//         </span>

//         {/* Title */}
//         <h3 className="font-outfit text-[clamp(26px,3vw,36px)] line-clamp-2 overflow-hidden font-bold text-white leading-snug">
//           {project.title}
//         </h3>

//         {/* Description */}
//         <p className="font-outfit text-[clamp(14px,2vw,20px)] line-clamp-4 overflow-hidden font-normal text-white leading-relaxed">
//           {project.desc}
//         </p>
//       </div>

//       {/* Meta rows */}
//       <div className="flex flex-col gap-2 mt-2">
//         {/* Category */}
//         <div className="flex items-center justify-between px-4 py-2 rounded-sm bg-white">
//           <span className="font-outfit text-[clamp(12px,2vw,20px)] text-black">
//             Category
//           </span>
//           <span className="font-outfit text-[clamp(12px,2vw,20px)] text-[#535353]">
//             {project.category}
//           </span>
//         </div>

//         {/* Satisfaction */}
//         <div className="flex items-center justify-between px-4 py-2 rounded-sm bg-white">
//           <span className="font-outfit text-[clamp(12px,2vw,20px)] text-black">
//             Satisfaction
//           </span>
//           <StarRating count={project.satisfaction} />
//         </div>

//         {/* Production */}
//         <div className="flex items-center justify-between px-4 py-2 rounded-sm bg-white">
//           <span className="font-outfit text-[clamp(12px,2vw,20px)] text-black">
//             Production
//           </span>
//           <span className="font-outfit text-[clamp(12px,2vw,20px)] text-[#535353]">
//             {project.production}
//           </span>
//         </div>
//       </div>

//       {/* View Project Button */}
//       <button className="mt-4 self-start bg-primary px-5 py-2 rounded-sm font-outfit text-sm text-white font-medium transition-all hover:opacity-90">
//         View Project
//       </button>
//     </div>

//     {/* Right: Laptop mockup image */}
//     <div className="flex items-center justify-center w-1/2 shrink-0">
//       <img
//         src={project.image}
//         alt={project.title}
//         className="w-full   h-auto object-contain drop-shadow-2xl"
//       />
//     </div>
//   </div>
// );

// // ── Main Section ──
// const AllProjects = () => {
//   const [showAll, setShowAll] = useState(true);

//   return (
//     <section className="relative w-full bg-[#02070F] text-white px-6 lg:px-8 py-16 lg:py-24">
//       {/* Heading */}
//       <div className="flex flex-col items-center text-center mb-10 gap-1">
//         <h2 className="font-stoke text-[clamp(28px,4vw,42px)] font-semibold text-white">
//           Proven Success In
//         </h2>
//         <span className="font-outfit text-[clamp(28px,4vw,42px)] text-primary font-light">
//           Every Project
//         </span>
//       </div>

//       {/* Filter Button */}
//       <div className="flex justify-center mb-10">
//         <button
//           onClick={() => setShowAll((prev) => !prev)}
//           className="flex items-center border border-primary gap-2 px-5 py-2 rounded-sm font-outfit text-sm text-white font-bold transition-all hover:opacity-90"
//           style={{
//             background: "linear-gradient(90deg, #000000 0%, #4285F4 100%)",
//           }}>
//           All Project
//           <ChevronDown
//             size={16}
//             className="transition-transform duration-300"
//             style={{ transform: showAll ? "rotate(0deg)" : "rotate(180deg)" }}
//           />
//         </button>
//       </div>

//       {/* Cards */}
//       {showAll && (
//         <div className="flex flex-col gap-24 ">
//           {projects.map((project) => (
//             <ProjectCard key={project.id} project={project} />
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default AllProjects;

import React, { useState } from "react";
import { ChevronDown, Star } from "lucide-react";

// ── Replace these imports with your actual project images ──
import proj1 from "@/assets/resources/portfolio/card-1.png";
import proj2 from "@/assets/resources/portfolio/card-2.png";
import proj3 from "@/assets/resources/portfolio/card-3.png";
import proj4 from "@/assets/resources/portfolio/card-4.png";
import proj5 from "@/assets/resources/portfolio/card-5.png";
import proj6 from "@/assets/resources/portfolio/card-6.png";
import proj7 from "@/assets/resources/portfolio/card-7.png";

// ── Project Data ──
const projects = [
  {
    id: 1,
    tag: "Communication",
    title: "A Contact Center Solutions Provider",
    desc: "Tazacall enables teams to communicate smarter: unified voice, SMS and email tools + AI-driven analytics all in one cloud platform so you spend less time managing systems, and more time building relationships.",
    category: "Branding",
    satisfaction: 4,
    production: "May 10, 2022",
    image: proj1,
  },
  {
    id: 2,
    tag: "Communication",
    title: "A Contact Center Solutions Provider",
    desc: "Tazacall enables teams to communicate smarter: unified voice, SMS and email tools + AI-driven analytics all in one cloud platform so you spend less time managing systems, and more time building relationships.",
    category: "Branding",
    satisfaction: 4,
    production: "May 10, 2022",
    image: proj2,
  },
  {
    id: 3,
    tag: "E-Commerce",
    title: "Smart Shopping Experience Platform",
    desc: "A fully integrated e-commerce solution with AI-powered recommendations, real-time inventory tracking, and seamless checkout experience built for modern retail brands.",
    category: "Development",
    satisfaction: 5,
    production: "Aug 15, 2022",
    image: proj3,
  },
  {
    id: 4,
    tag: "Healthcare",
    title: "Patient Management & Telehealth App",
    desc: "A HIPAA-compliant telehealth platform enabling doctors and patients to connect virtually, manage appointments, and share medical records securely from any device.",
    category: "UI/UX Design",
    satisfaction: 5,
    production: "Jan 20, 2023",
    image: proj4,
  },
  {
    id: 5,
    tag: "Finance",
    title: "Digital Banking Dashboard",
    desc: "A next-generation digital banking interface offering real-time transaction tracking, AI budgeting tools, and multi-currency support for modern financial institutions.",
    category: "Branding",
    satisfaction: 4,
    production: "Mar 5, 2023",
    image: proj5,
  },
  {
    id: 6,
    tag: "Education",
    title: "Interactive Learning Management System",
    desc: "A cloud-based LMS built for schools and enterprises — featuring live classes, progress analytics, gamified learning paths, and seamless integrations with third-party tools.",
    category: "Development",
    satisfaction: 5,
    production: "Jun 12, 2023",
    image: proj6,
  },
  {
    id: 7,
    tag: "Communication",
    title: "Omnichannel Marketing Automation Tool",
    desc: "A unified marketing platform that automates email, SMS, and social media campaigns using AI segmentation and real-time performance analytics for maximum ROI.",
    category: "UI/UX Design",
    satisfaction: 4,
    production: "Sep 30, 2023",
    image: proj7,
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
    className="relative w-full rounded-2xl overflow-hidden flex flex-col sm:flex-row gap-6 p-6 sm:p-8"
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
        <h3 className="font-outfit text-[clamp(20px,3vw,36px)] line-clamp-2 overflow-hidden font-bold text-white leading-snug">
          {project.title}
        </h3>

        {/* Description */}
        <p className="font-outfit text-[clamp(13px,1.5vw,20px)] line-clamp-4 overflow-hidden font-normal text-white leading-relaxed">
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
      <button className="mt-4 self-start bg-primary px-5 py-2 rounded-sm font-outfit text-sm text-white font-medium transition-all hover:opacity-90">
        View Project
      </button>
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
    <section className="relative w-full bg-[#02070F] text-white px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      {/* Heading */}
      <div className="flex flex-col items-center text-center mb-10 gap-1">
        <h2 className="font-stoke text-[clamp(24px,4vw,42px)] font-semibold text-white">
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
    </section>
  );
};

export default AllProjects;
