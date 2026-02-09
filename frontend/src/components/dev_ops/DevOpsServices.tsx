import React from "react";
import cardIcon from "../../assets/icons/webService_icon.png";
const DevOpsServices = () => {
  const services = [
    {
      id: 1,
      iconPath: cardIcon,
      title: "Continuous Integration and Continuous Deployment (CI/CD)",
      description:
        "We implement automated CI/CD pipelines that test and deploy code changes automatically, reducing manual effort and speeding up releases. This improves code quality, minimizes errors, and enables faster, more reliable delivery while keeping applications stable and secure throughout the development lifecycle.",
    },
    {
      id: 2,
      iconPath: cardIcon,
      title: "Containerization and Orchestration",
      description:
        "We use Docker and Kubernetes to build portable, scalable applications with consistent environments across all stages. This improves reliability, speeds up deployments, reduces dependency issues, and enhances resilience through a microservices-based architecture.",
    },
    {
      id: 3,
      iconPath: cardIcon,
      title: "Infrastructure as Code",
      description:
        "We implement Infrastructure as Code (IaC) to manage infrastructure through automated scripts, ensuring consistency, scalability, and version control. Using tools like Terraform and AWS CloudFormation, this approach reduces configuration drift and enables fast, reliable, and compliant infrastructure deployment.",
    },
    {
      id: 4,
      iconPath: cardIcon,
      title: "Security Integration (DevSecOps)",
      description:
        "We embed security into the DevOps pipeline with automated checks, vulnerability scanning, and compliance monitoring. This DevSecOps approach reduces risk, strengthens application security, and maintains fast, agile deployments.",
    },
    {
      id: 5,
      iconPath: cardIcon,
      title: "Configuration Management & Automation",
      description:
        "We use tools like Ansible, Chef, and Puppet to automate configuration, deployment, and provisioning, improving efficiency, reducing errors, and ensuring consistent environments across all stages.",
    },
    {
      id: 6,
      iconPath: cardIcon,
      title: "Monitoring, Logging & Performance Optimization",
      description:
        "We implement monitoring and logging with tools like Prometheus, Grafana, ELK Stack, and Datadog to gain real-time insights, detect issues proactively, optimize performance, reduce downtime, and improve user experience.",
    },
    {
      id: 7,
      iconPath: cardIcon,
      title: "Cloud DevOps & Multi-Cloud Management",
      description:
        "Aireb Solutions delivers cloud-native DevOps solutions using AWS, Azure, and Google Cloud to build scalable, high-performance applications. We focus on automation, cost optimization, and multi-cloud strategies to ensure smooth deployment and reliable operations across cloud environments.",
    },
    {
      id: 8,
      iconPath: cardIcon,
      title: "Microservices & Serverless Architecture",
      description:
        "We modernize applications by transitioning monolithic systems to microservices and serverless architectures, enabling faster deployments, greater scalability, and flexibility. Using AWS Lambda, Google Cloud Functions, and Azure Functions, we reduce infrastructure overhead while improving performance and cost efficiency.",
    },
  ];

  return (
    <section className="relative w-full bg-black py-[8vh] sm:py-[10vh] lg:py-[12vh] px-8">
      <div className="">
        {/* Header Section */}
        <div className="text-center mb-[6vh] sm:mb-[8vh] lg:mb-[10vh]">
          <h2 className="font-stoke font-normal text-[clamp(28px,4.5vw,42px)] leading-[1.3] text-white mb-[2vh] sm:mb-[3vh]">
            Our DevOps Services
          </h2>
          <p className="font-outfit font-normal text-[clamp(13px,1.3vw,16px)] leading-[1.6] text-[#EBEBEB] max-w-[800px] mx-auto px-4">
            We don't just create strategies we show the numbers. Growth means
            higher conversions, lower costs, and stronger brands. Discover how
            we help brands grow smarter
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(16px,2vh,24px)]">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card group relative bg-black hover:bg-primary
  border border-gray-800 p-[clamp(24px,3vh,40px)]
  transition-all duration-500 ease-in-out hover:border-primary
  overflow-hidden
  ">
              {/* Icon Container */}
              <div className="mb-[clamp(16px,2.5vh,32px)]">
                <div className="w-[clamp(44px,5vh,56px)] h-[clamp(44px,5vh,56px)] bg-white text-black  flex items-center justify-center transition-all duration-500">
                  <img
                    src={service.iconPath}
                    className="w-[clamp(20px,2.5vh,28px)] h-[clamp(20px,2.5vh,28px)]"
                  />
                </div>
              </div>

              {/* Title */}
              <h3
                className="font-outfit font-semibold text-white
  text-[clamp(16px,1.8vw,22px)] leading-[1.3]
  mb-[clamp(12px,1.5vh,20px)]
  line-clamp-2">
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="font-outfit font-normal text-gray-400 group-hover:text-white
  text-[clamp(12px,1.3vw,15px)] leading-[1.7]
  transition-colors duration-500
  line-clamp-5">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevOpsServices;
