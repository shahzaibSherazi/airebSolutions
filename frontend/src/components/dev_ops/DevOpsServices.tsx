// import React from "react";
// import CiIcon from "@/assets/icons/devOps-icons/services-icons/ci-cd.svg?react";
// import ContainerizationIcon from "@/assets/icons/devOps-icons/services-icons/containerization.svg?react";
// import InfrastructureIcon from "@/assets/icons/devOps-icons/services-icons/infrastructure.svg?react";
// import MicroservicesIcon from "@/assets/icons/devOps-icons/services-icons/microservices.svg?react";
// import IntegrationIcon from "@/assets/icons/devOps-icons/services-icons/integration.svg?react";
// import AutomationIcon from "@/assets/icons/devOps-icons/services-icons/automation.svg?react";
// import OptimizationIcon from "@/assets/icons/devOps-icons/services-icons/optimization.svg?react";
// import CloudIcon from "@/assets/icons/devOps-icons/services-icons/devops.svg?react";
// const DevOpsServices = () => {
//   const services = [
//     {
//       id: 1,
//       iconPath: <CiIcon />,
//       title: "Continuous Integration and Continuous Deployment (CI/CD)",
//       description:
//         "We implement automated CI/CD pipelines that test and deploy code changes automatically, reducing manual effort and speeding up releases. This improves code quality, minimizes errors, and enables faster, more reliable delivery while keeping applications stable and secure throughout the development lifecycle.",
//     },
//     {
//       id: 2,
//       iconPath: <ContainerizationIcon />,
//       title: "Containerization and Orchestration",
//       description:
//         "We use Docker and Kubernetes to build portable, scalable applications with consistent environments across all stages. This improves reliability, speeds up deployments, reduces dependency issues, and enhances resilience through a microservices-based architecture.",
//     },
//     {
//       id: 3,
//       iconPath: <InfrastructureIcon />,
//       title: "Infrastructure as Code",
//       description:
//         "We implement Infrastructure as Code (IaC) to manage infrastructure through automated scripts, ensuring consistency, scalability, and version control. Using tools like Terraform and AWS CloudFormation, this approach reduces configuration drift and enables fast, reliable, and compliant infrastructure deployment.",
//     },
//     {
//       id: 4,
//       iconPath: <IntegrationIcon />,
//       title: "Security Integration (DevSecOps)",
//       description:
//         "We embed security into the DevOps pipeline with automated checks, vulnerability scanning, and compliance monitoring. This DevSecOps approach reduces risk, strengthens application security, and maintains fast, agile deployments.",
//     },
//     {
//       id: 5,
//       iconPath: <AutomationIcon />,
//       title: "Configuration Management & Automation",
//       description:
//         "We use tools like Ansible, Chef, and Puppet to automate configuration, deployment, and provisioning, improving efficiency, reducing errors, and ensuring consistent environments across all stages.",
//     },
//     {
//       id: 6,
//       iconPath: <OptimizationIcon />,
//       title: "Monitoring, Logging & Performance Optimization",
//       description:
//         "We implement monitoring and logging with tools like Prometheus, Grafana, ELK Stack, and Datadog to gain real-time insights, detect issues proactively, optimize performance, reduce downtime, and improve user experience.",
//     },
//     {
//       id: 7,
//       iconPath: <CloudIcon />,
//       title: "Cloud DevOps & Multi-Cloud Management",
//       description:
//         "Aireb Solutions delivers cloud-native DevOps solutions using AWS, Azure, and Google Cloud to build scalable, high-performance applications. We focus on automation, cost optimization, and multi-cloud strategies to ensure smooth deployment and reliable operations across cloud environments.",
//     },
//     {
//       id: 8,
//       iconPath: <MicroservicesIcon />,
//       title: "Microservices & Serverless Architecture",
//       description:
//         "We modernize applications by transitioning monolithic systems to microservices and serverless architectures, enabling faster deployments, greater scalability, and flexibility. Using AWS Lambda, Google Cloud Functions, and Azure Functions, we reduce infrastructure overhead while improving performance and cost efficiency.",
//     },
//   ];

//   return (
//     <section className="relative w-full bg-black py-[8vh] sm:py-[10vh] lg:py-[12vh] px-8">
//       <div className="">
//         {/* Header Section */}
//         <div className="text-center mb-[6vh] sm:mb-[8vh] lg:mb-[10vh]">
//           <h2 className="font-stoke font-normal text-[clamp(28px,4.5vw,42px)] leading-[1.3] text-white mb-[2vh] sm:mb-[3vh]">
//             Our DevOps Services
//           </h2>
//           <p className="font-outfit font-normal text-[clamp(13px,1.3vw,16px)] leading-[1.6] text-[#EBEBEB] max-w-[800px] mx-auto px-4">
//             We don't just create strategies we show the numbers. Growth means
//             higher conversions, lower costs, and stronger brands. Discover how
//             we help brands grow smarter
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(16px,2vh,24px)]">
//           {services.map((service) => (
//             <div
//               key={service.id}
//               className="service-card group relative bg-black hover:bg-primary
//   border border-gray-800 p-[clamp(24px,3vh,40px)]
//   transition-all duration-500 ease-in-out hover:border-primary
//   overflow-hidden
//   ">
//               {/* Icon Container */}
//               <div className="mb-[clamp(16px,2.5vh,32px)]">
//                 <div className="w-[clamp(44px,5vh,56px)] h-[clamp(44px,5vh,56px)] bg-white text-black  flex items-center justify-center transition-all duration-500">
//                   {service.iconPath}
//                 </div>
//               </div>

//               {/* Title */}
//               <h3
//                 className="font-outfit font-semibold text-white
//   text-[clamp(16px,1.8vw,22px)] leading-[1.3]
//   mb-[clamp(12px,1.5vh,20px)]
//   line-clamp-2">
//                 {service.title}
//               </h3>

//               {/* Description */}
//               <p
//                 className="font-outfit font-normal text-gray-400 group-hover:text-white
//   text-[clamp(12px,1.3vw,15px)] leading-[1.7]
//   transition-colors duration-500
//   line-clamp-5">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DevOpsServices;

import React from "react";
import { Boxes } from "lucide-react";

// Replace with your actual images
import cicdImg from "@/assets/devops-assets/services/card-1.png";
import containerImg from "@/assets/devops-assets/services/card-3.png";
import iacImg from "@/assets/devops-assets/services/card-3.png";
import securityImg from "@/assets/devops-assets/services/card-4.png";
import monitoringImg from "@/assets/devops-assets/services/card-4.png";
import cloudImg from "@/assets/devops-assets/services/card-6.png";
import cloudsImg from "@/assets/devops-assets/services/card-7.png";
import configrationImg from "@/assets/devops-assets/services/card-8.png";
import multiCloudImg from "@/assets/devops-assets/services/card-9.png";
import microserviceImg from "@/assets/devops-assets/services/card-10.png";

const services = [
  {
    id: 1,
    image: cicdImg,
    title: "Continuous Integration & Continuous Deployment (CI/CD)",
    points: [
      {
        label: "Automated pipelines",
        desc: "We build a CI/CD pipeline that automatically tests and deploys code changes.",
      },
      {
        label: "Faster Releases",
        desc: "Reduce manual work and speed up the software release cycle.",
      },
      {
        label: "Improved code Quality",
        desc: "Automated testing helps detect and fix errors early.",
      },
    ],
  },
  {
    id: 2,
    image: containerImg,
    title: "Containerization & Orchestration",
    points: [
      {
        label: "Docker & Kubernetes",
        desc: "Package applications into containers for consistent environments across all stages.",
      },
      {
        label: "Auto Scaling",
        desc: "Automatically scale workloads up or down based on real-time demand.",
      },
      {
        label: "High Availability",
        desc: "Ensure zero-downtime deployments with rolling updates and health checks.",
      },
    ],
  },
  {
    id: 3,
    image: iacImg,
    title: "Infrastructure as Code (IaC)",
    points: [
      {
        label: "Automated Infrastructure",
        desc: "Manage and provision infrastructure using code-based scripts.",
      },
      {
        label: "Consistency & Scaleability",
        desc: "Ensure reliable, repeatable, and scalable environments.",
      },
      {
        label: "Modern Tools",
        desc: "Use tools like Terraform and AWS CloudFormation for faster deployment.",
      },
    ],
  },
  {
    id: 4,
    image: securityImg,
    title: "Security Integration (DevSecOps)",
    points: [
      {
        label: "Shift-Left Security",
        desc: "Embed security checks early in the development pipeline.",
      },
      {
        label: "Compliance Automation",
        desc: "Automate compliance checks and vulnerability scanning across all environments.",
      },
      {
        label: "Zero Trust Architecture",
        desc: "Implement least-privilege access controls and continuous verification.",
      },
    ],
  },
  {
    id: 5,
    image: monitoringImg,
    title: "Monitoring & Observability",
    points: [
      {
        label: "Real-time Monitoring",
        desc: "Track system health, performance, and availability 24/7.",
      },
      {
        label: "Centralized Logging",
        desc: "Aggregate logs from all services for fast debugging and root cause analysis.",
      },
      {
        label: "Alerting & Incident Response",
        desc: "Get instant alerts and automated responses to reduce mean time to recovery.",
      },
    ],
  },
  {
    id: 6,
    image: cloudImg,
    title: "Cloud Infrastructure & Migration",
    points: [
      {
        label: "Multi-Cloud Strategy",
        desc: "Deploy and manage workloads across AWS, Azure, and Google Cloud.",
      },
      {
        label: "Seamless Migration",
        desc: "Migrate on-premise infrastructure to the cloud with minimal downtime.",
      },
      {
        label: "Cost Optimisation",
        desc: "Right-size resources and eliminate waste to reduce cloud spend.",
      },
    ],
  },
  {
    id: 7,
    image: cloudsImg,
    title: "Configuration Management & Automation",
    points: [
      {
        label: "Multi-Cloud Strategy",
        desc: "Deploy and manage workloads across AWS, Azure, and Google Cloud.",
      },
      {
        label: "Seamless Migration",
        desc: "Migrate on-premise infrastructure to the cloud with minimal downtime.",
      },
      {
        label: "Cost Optimisation",
        desc: "Right-size resources and eliminate waste to reduce cloud spend.",
      },
    ],
  },
  {
    id: 8,
    image: configrationImg,
    title: "Monitoring Logging & Performance Optimization",
    points: [
      {
        label: "Multi-Cloud Strategy",
        desc: "Deploy and manage workloads across AWS, Azure, and Google Cloud.",
      },
      {
        label: "Seamless Migration",
        desc: "Migrate on-premise infrastructure to the cloud with minimal downtime.",
      },
      {
        label: "Cost Optimisation",
        desc: "Right-size resources and eliminate waste to reduce cloud spend.",
      },
    ],
  },
  {
    id: 9,
    image: multiCloudImg,
    title: "Cloud DevOps & Multi-cloud management",
    points: [
      {
        label: "Multi-Cloud Strategy",
        desc: "Deploy and manage workloads across AWS, Azure, and Google Cloud.",
      },
      {
        label: "Seamless Migration",
        desc: "Migrate on-premise infrastructure to the cloud with minimal downtime.",
      },
      {
        label: "Cost Optimisation",
        desc: "Right-size resources and eliminate waste to reduce cloud spend.",
      },
    ],
  },
  {
    id: 10,
    image: microserviceImg,
    title: "Microservices & Serverless Architecture",
    points: [
      {
        label: "Multi-Cloud Strategy",
        desc: "Deploy and manage workloads across AWS, Azure, and Google Cloud.",
      },
      {
        label: "Seamless Migration",
        desc: "Migrate on-premise infrastructure to the cloud with minimal downtime.",
      },
      {
        label: "Cost Optimisation",
        desc: "Right-size resources and eliminate waste to reduce cloud spend.",
      },
    ],
  },
];

const ServiceCard = ({ service }: { service: (typeof services)[0] }) => {
  return (
    <div
      className="relative group overflow-hidden"
      style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
      {/* ── DEFAULT STATE ── */}
      {/* Image */}
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover absolute inset-0 transition-all duration-500 group-hover:opacity-0 group-hover:scale-110"
      />

      {/* Bottom gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

      {/* Default visible content — sets the card height via padding */}
      <div className="relative z-10 flex flex-col justify-between p-4 min-h-[280px] sm:min-h-[320px]">
        {/* Icon top */}
        <div
          className="w-8 h-8 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0 self-start"
          style={{ border: "1px solid rgba(255,255,255,0.4)" }}>
          <Boxes size={16} className="text-white" strokeWidth={1.5} />
        </div>

        {/* Title + button bottom */}
        <div className="transition-opacity duration-300 group-hover:opacity-0">
          <h3 className="font-outfit font-bold text-white text-sm sm:text-base leading-snug mb-3">
            {service.title}
          </h3>
          <button
            className="px-5 py-1.5 font-outfit text-xs text-white font-medium hover:opacity-90 transition-all"
            style={{ background: "#4285F4" }}>
            Grab Now
          </button>
        </div>
      </div>

      {/* ── HOVER STATE — absolutely fills card, scrollable if needed ── */}
      <div
        className="absolute inset-0 z-20 flex flex-col p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0"
        style={{
          background: "linear-gradient(180deg, #02070F 0%, #102545 100%)",
        }}>
        {/* Icon */}
        <div
          className="w-8 h-8 flex items-center justify-center mb-3 shrink-0"
          style={{ border: "1px solid rgba(255,255,255,0.4)" }}>
          <Boxes size={16} className="text-white" strokeWidth={1.5} />
        </div>

        {/* Title */}
        <h3 className="font-outfit font-bold text-white text-sm sm:text-[15px] line-clamp-2 overflow-hidden leading-snug mb-3 shrink-0">
          {service.title}
        </h3>

        {/* Points */}
        <div className="flex flex-col gap-2.5 flex-1">
          {service.points.map((point, i) => (
            <div key={i}>
              <p className="font-outfit text-[11px] line-clamp-1 overflow-hidden sm:text-xs font-semibold text-primary leading-none mb-0.5">
                {point.label}
              </p>
              <p className="font-outfit text-[11px] line-clamp-2 overflow-hidden sm:text-xs text-white leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Button — always at bottom */}
        <button className="mt-4 self-start bg-primary px-5 py-1.5 font-outfit text-xs text-white font-medium hover:opacity-90 transition-all shrink-0">
          Grab Now
        </button>
      </div>
    </div>
  );
};

const DevOpsServices = () => {
  return (
    <section className="w-full bg-[#02070F] text-white px-6 lg:px-8 py-16 lg:py-24">
      {/* Heading */}
      <div className="flex flex-col items-center text-center mb-12 max-w-2xl mx-auto gap-3">
        <h2 className="font-stoke text-[clamp(28px,4vw,42px)] font-semibold text-white">
          Our DevOps Services
        </h2>
        <p className="font-outfit text-sm sm:text-base text-white/65 leading-relaxed">
          We don't just create strategies; we show the numbers. Growth means
          higher conversions, lower costs, and stronger brands. Discover how we
          help brands grow smarter
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default DevOpsServices;
