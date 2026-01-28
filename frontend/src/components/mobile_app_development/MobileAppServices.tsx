import React from "react";
import cardIcon from "../../assets/icons/webService_icon.png";
const MobileAppServices = () => {
  const services = [
    {
      id: 1,
      iconPath: cardIcon,
      title: "Custom Mobile App Development",
      description:
        "Our expert team leverages the latest technologies to build intuitive, high-performing apps for iOS and Android. From concept to deployment, we deliver innovative solutions that enhance user engagement and drive business growth.",
    },
    {
      id: 2,
      iconPath: cardIcon,
      title: "Native Mobile App Development",
      description:
        "We design and build high-performing, native apps for iOS and Android, delivering a unique experience optimized for each platform. From enterprise solutions to consumer-focused apps, our native apps are tailored for maximum performance, responsiveness, and seamless interaction with mobile device features.",
    },
    {
      id: 3,
      iconPath: cardIcon,
      title: "Cross-Platform App Development",
      description:
        "With cross-platform development tools like React Native and Flutter, we create apps that work seamlessly on both iOS and Android. This approach saves time and resources while ensuring high performance, and scalability, and delivering a consistent experience across devices.",
    },
    {
      id: 4,
      iconPath: cardIcon,
      title: "Enterprise Mobility Solutions",
      description:
        "Aireb Solutions specializes in developing custom enterprise mobility solutions that optimize internal workflows and boost productivity. We provide mobile apps tailored to the needs of your organization, enabling real-time data access, process automation, and improved communication across teams.",
    },
    {
      id: 5,
      iconPath: cardIcon,
      title: "Mobile App Modernization and Optimization",
      description:
        "If your current app is outdated or underperforming, we offer modernization services that breathe new life into your mobile experience. From redesigns and feature enhancements to code optimization and platform upgrades, we ensure your app remains competitive and user-friendly.",
    },
    {
      id: 6,
      iconPath: cardIcon,
      title: "Augmented Reality (AR) & Virtual Reality (VR) App Development",
      description:
        "Comprehensive API documentation is crucial for developers. We provide detailed, easy-to-understand documentation to facilitate smooth implementation and integration, along with ongoing support to ensure optimal performance.",
    },
  ];

  return (
    <section className="relative w-full bg-black py-[8vh] sm:py-[10vh] lg:py-[12vh] px-8">
      <div className="">
        {/* Header Section */}
        <div className="text-center mb-[6vh] sm:mb-[8vh] lg:mb-[10vh]">
          <h2 className="font-stoke font-normal text-[clamp(28px,4.5vw,42px)] leading-[1.3] text-white mb-[2vh] sm:mb-[3vh]">
            Our Mobile App & Game <br /> Development Services
          </h2>
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

export default MobileAppServices;
