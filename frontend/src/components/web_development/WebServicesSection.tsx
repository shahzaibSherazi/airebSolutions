import React from "react";
import cardIcon from "../../assets/icons/webService_icon.png";
const WebServicesSection = () => {
  const services = [
    {
      id: 1,
      iconPath: cardIcon,
      title: "Custom Web Development",
      description:
        "We build feature-rich, highly scalable web applications tailored to your specific business requirements. Whether you need a complex enterprise application or a sleek corporate website, our custom web development services ensure top-tier performance and usability.",
    },
    {
      id: 2,
      iconPath: cardIcon,
      title: "E-commerce Development",
      description:
        "Aireb Solutions creates robust e-commerce platforms that provide seamless shopping experiences. From WooCommerce and Shopify to Magento and custom-built solutions, we develop online stores that drive sales and maximize user retention.",
      featured: true,
    },
    {
      id: 3,
      iconPath: cardIcon,
      title: "Content Management Systems (CMS)",
      description:
        "Take control of your content with our CMS development services. We work with leading platforms like WordPress, Joomla, and Drupal, offering intuitive and easy-to-manage content solutions that keep your website updated with minimal effort.",
    },
    {
      id: 4,
      iconPath: cardIcon,
      title: "API Development & Integration",
      description:
        "Seamlessly integrate third-party services and applications with our API development expertise. We create secure and scalable APIs, enabling smooth communication between your website and external platforms like CRM, ERP, and payment gateways.",
    },
    {
      id: 5,
      iconPath: cardIcon,
      title: "AI-Powered Web Solutions",
      description:
        "We leverage artificial intelligence to enhance web functionality, including chatbots, predictive analytics, and automated workflows, improving efficiency and user experience",
    },
    {
      id: 6,
      iconPath: cardIcon,
      title: "Progressive Web Apps (PWA)",
      description:
        "Enhance your web presence with Progressive Web Apps that deliver a mobile app-like experience with fast loading times, offline accessibility, and responsive design across all devices.",
    },
  ];

  return (
    <section className="relative w-full bg-black py-[8vh] sm:py-[10vh] lg:py-[12vh] px-8">
      <div className="">
        {/* Header Section */}
        <div className="text-center mb-[6vh] sm:mb-[8vh] lg:mb-[10vh]">
          <h2 className="font-stoke font-normal text-[clamp(28px,4.5vw,42px)] leading-[1.3] text-white mb-[2vh] sm:mb-[3vh]">
            Our Web Development Services
          </h2>
          <p className="font-outfit font-normal text-[clamp(13px,1.3vw,16px)] leading-[1.6] text-[#EBEBEB] max-w-[800px] mx-auto px-4">
            We don't just create strategies, we drive the numbers. Growth means
            higher conversion, lower costs, and stronger brands. Discover how we
            help brands grow smarter
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

export default WebServicesSection;
