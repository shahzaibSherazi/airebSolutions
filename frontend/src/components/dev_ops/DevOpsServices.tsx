import React from "react";
import { Boxes } from "lucide-react";
import { motion } from "framer-motion";
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
    image: cloudImg,
    title: "Containerization & Orchestration",
    points: [
      {
        label: "Docker Containers",
        desc: "Package applications with all dependencies for consistent environments.",
      },
      {
        label: "Kubernetes Orchestration",
        desc: "Manage and scale containers efficiently across systems.",
      },
      {
        label: "Fast Deployment",
        desc: " Improve deployment speed and reduce dependency issues.",
      },
    ],
  },
  {
    id: 3,
    image: iacImg,
    title: " Infrastructure as Code (IaC)",
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
        desc: "Use tools like Terreform and AWS CloudFormation for faster deployment.",
      },
    ],
  },
  {
    id: 4,
    image: securityImg,
    title: "Security Integration (DevSecOps)",
    points: [
      {
        label: "Built-in Security",
        desc: "integrate security checks and vulnerability scanning into the DevOps pipeline.",
      },
      {
        label: "Risk Reduction",
        desc: "Detect and fix security issues early in the development lifecycle.",
      },
      {
        label: "Secure & Agile",
        desc: "Ensure application and protected without slowing down deployments.",
      },
    ],
  },
  {
    id: 5,
    image: configrationImg,
    title: "Configuration Management & Automation",
    points: [
      {
        label: "Automated Configurations",
        desc: "Use tools like Ansible, chef and Puppet to manage systems efficiently.",
      },
      {
        label: "Consistency across Environments",
        desc: "Ensure uniform setups in developments testing, and production.",
      },
      {
        label: "Reduced Error & Improved Efficiency",
        desc: "Automate repetitive tasks to minimize human error Mistakes.",
      },
    ],
  },
  {
    id: 6,
    image: cloudsImg,
    title: "Monitoring Logging & Performance Optimization",
    points: [
      {
        label: "Real-time insights",
        desc: "Monitor system performance and application health continuously.",
      },
      {
        label: "Proactive issues Detection",
        desc: "Use tools like Prometheus, Grafana, ELK stack, and Datadog to identify",
      },
      {
        label: "Optimized Performance",
        desc: "Ensure smooth operations, reduce downtime, and enhance user experience.",
      },
    ],
  },
  {
    id: 7,
    image: multiCloudImg,
    title: "Cloud DevOps & Multi-cloud management ",
    points: [
      {
        label: "Cloud Native Solutions",
        desc: "Leverage AWS, Azure, and Google Cloud for scalable applications.",
      },
      {
        label: "Automation & Optimizations",
        desc: "Streamline cloud operations and manage resources efficiently.",
      },
      {
        label: "Multi Cloud Strategy",
        desc: "Ensure seamless deployment and operationacross multipel cloud platforms",
      },
    ],
  },
  {
    id: 8,
    image: microserviceImg,
    title: "Microservices & Serverless Architecture",
    points: [
      {
        label: "Modern Architecture",
        desc: "Transition from monolithic app to microservices and serverless models.",
      },
      {
        label: "Scalable & Flexible",
        desc: "Enable faster deployments with improved performance and adaptability.",
      },
      {
        label: "Serverless Platforms",
        desc: "Use AWS Lambda, Google Cloud Functions, and Azure Functions to reduce infrastructure overhead",
      },
    ],
  },
];

const ServiceCard = ({ service }: { service: (typeof services)[0] }) => {
  return (
    <div
      className="relative group overflow-hidden h-[441px] "
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
      <div className="relative z-10 flex flex-col justify-between p-4 w-full h-full">
        {/* Icon top */}
        <div
          className="w-8 h-8 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0 self-start"
          style={{ border: "1px solid rgba(255,255,255,0.4)" }}>
          <Boxes size={16} className="text-white" strokeWidth={1.5} />
        </div>

        {/* Title + button bottom */}
        <div className="transition-opacity duration-300 group-hover:opacity-0">
          <h3 className="font-outfit font-bold text-white text-[clamp(14px,2vw,20px)] leading-snug mb-3">
            {service.title}
          </h3>
          <button className="px-5 py-1.5 bg-primary font-outfit text-[clamp(14px,2vw,18px)] text-white font-medium hover:opacity-90 transition-all">
            Connect With Experts
          </button>
        </div>
      </div>

      {/* ── HOVER STATE — absolutely fills card, scrollable if needed ── */}
      <div
        className="absolute inset-0 z-20 flex flex-col p-4 opacity-0 group-hover:opacity-100 transition-all duration-1000 translate-y-3 group-hover:translate-y-0 "
        style={{
          background: "linear-gradient(180deg, #02070F 0%, #102545 100%)",
        }}>
        {/* Icon */}
        <div
          className="w-8 h-8 flex items-center justify-center mb-3 shrink-0"
          style={{ border: "1px solid rgba(255,255,255,0.4)" }}>
          <Boxes size={16} className="text-white" strokeWidth={1.5} />
        </div>
        <div className="flex flex-col gap-2 flex-1 justify-center">
          {/* Title */}
          <h3 className="font-outfit font-bold text-white text-base sm:text-lg lg:text-xl line-clamp-2 overflow-hidden leading-snug mb-2 shrink-0">
            {service.title}
          </h3>

          {/* Points */}

          {service.points.map((point, i) => (
            <div key={i}>
              <p className="font-outfit text-xs sm:text-sm lg:text-base line-clamp-1 overflow-hidden  font-semibold text-primary leading-none ">
                {point.label}
              </p>
              <p className="font-outfit text-[11px] sm:text-xs lg:text-sm line-clamp-2 overflow-hidden text-white leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Button — always at bottom */}
        <button className="mt-4 self-start bg-primary px-5 py-1.5 font-outfit text-[clamp(14px,2vw,18px)] text-white font-medium hover:opacity-90 transition-all">
          Connect With Experts
        </button>
      </div>
    </div>
  );
};

const DevOpsServices = () => {
  return (
    <section className="w-full bg-[#02070F] text-white px-6 lg:px-8 py-16 lg:py-24">
      {/* Heading */}
      <div className="flex flex-col items-center text-center mb-12 max-w-2xl mx-auto gap-3 ">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}>
          <h2 className="font-stoke text-[clamp(28px,4vw,42px)] text-white">
            Our DevOps Services
          </h2>
          <p className="font-outfit text-sm sm:text-base text-textColor leading-relaxed">
            We don't just create strategies; we show the numbers. Growth means
            higher conversions, lower costs, and stronger brands. Discover how
            we help brands grow smarter
          </p>
        </motion.div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[90rem] mx-auto   gap-5">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default DevOpsServices;
