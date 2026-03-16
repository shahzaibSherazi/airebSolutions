import React from "react";
import ResearchIcon from "@/assets/icons/ui-ux_icons/services_icons/research.svg?react";
import WireFrameIcon from "@/assets/icons/ui-ux_icons/services_icons/wireframe.svg?react";
import UserInterfaceIcon from "@/assets/icons/ui-ux_icons/services_icons/user_interface.svg?react";
import UserExperienceIcon from "@/assets/icons/ui-ux_icons/services_icons/user_experience.svg?react";
import UseabilityIcon from "@/assets/icons/ui-ux_icons/services_icons/useability.svg?react";
import MoibleDesignIcon from "@/assets/icons/ui-ux_icons/services_icons/design-content.svg?react";
import EcommerceIcon from "@/assets/icons/ui-ux_icons/services_icons/ecommerce.svg?react";
import DesignSystemIcon from "@/assets/icons/ui-ux_icons/services_icons/design-system.svg?react";
import AccessibilityIcon from "@/assets/icons/ui-ux_icons/services_icons/accessibility.svg?react";
const UiDesignServices = () => {
  const services = [
    {
      id: 1,
      iconPath: <ResearchIcon />,
      title: "User Research & Analysis",
      description:
        "Before diving into design, we gain a deep understanding of your target audience, market trends, and business objectives. Through user research and data analysis, we gather actionable insights to inform design decisions. This helps us create user experiences that are aligned with your customer needs and expectations.",
    },
    {
      id: 2,
      iconPath: <WireFrameIcon />,
      title: "Wireframing & Prototyping",
      description:
        "Wireframing is the blueprint for your digital product. Our team creates low and high-fidelity wireframes to establish structure, layout, and user flow.Prototyping further enhances this by simulating real interactions, enabling feedback from real users before finalizing the design.",
    },
    {
      id: 3,
      iconPath: <UserInterfaceIcon />,
      title: "UI Design (User Interface)",
      description:
        "User Interface Design (UI) focuses on the look and feel of the product. We create aesthetically pleasing and functional designs that resonate with your brand identity. Our UI designs ensure an engaging experience for users while keeping the design simple, intuitive, and accessible.",
    },
    {
      id: 4,
      iconPath: <UserExperienceIcon />,
      title: "UX Design (User Experience)",
      description:
        "User Experience Design (UX) is about creating intuitive, human-centered designs that allow users to easily navigate and interact with your product. We focus on enhancing the ease of use and accessibility of your platform, ensuring that users have a smooth and enjoyable experience.",
    },
    {
      id: 5,
      iconPath: <UseabilityIcon />,
      title: "Usability Testing",
      description:
        "Once the prototype is ready, we conduct thorough usability testing with real users to validate the design and identify areas for improvement. This iterative process ensures that the final product is functional, intuitive, and user-friendly.",
    },
    {
      id: 6,
      iconPath: <MoibleDesignIcon />,
      title: "Mobile UI/UX Design",
      description:
        "With mobile-first becoming a standard in design, we ensure that your app or website is optimized for mobile screens, creating responsive and intuitive mobile designs that adapt to different screen sizes. We focus on making mobile interactions simple and efficient.",
    },
    {
      id: 7,
      iconPath: <EcommerceIcon />,
      title: "E-commerce UI/UX Design",
      description:
        "We design user-friendly e-commerce websites and apps that enhance the shopping experience and drive conversions. With intuitive navigation, effective product displays, and streamlined checkout, we help customers find what they need quickly while boosting sales and satisfaction.",
    },
    {
      id: 8,
      iconPath: <DesignSystemIcon />,
      title: "Design System & Style Guides",
      description:
        "Consistency across design elements is crucial for maintaining a strong brand identity. Our Design Systems and Style Guides offer a blueprint for all visual elements, ensuring that every aspect of your platform is aligned with your brand, from colors and fonts to button styles and spacing.",
    },
    {
      id: 9,
      iconPath: <AccessibilityIcon />,
      title: "Accessibility Design",
      description:
        "Ensuring that your platform is accessible to all users, including those with disabilities, is essential. We follow WCAG (Web Content Accessibility Guidelines) to incorporate accessibility features into the design, making sure that everyone, regardless of ability, can navigate and interact with your product.",
    },
  ];

  return (
    <section className="relative w-full bg-black py-16 lg:py-24 px-6 lg:px-8">
      <div className="">
        {/* Header Section */}
        <div className="text-center mb-[6vh] sm:mb-[8vh] lg:mb-[10vh]">
          <h2 className="font-stoke font-normal text-[clamp(28px,4.5vw,42px)] leading-[1.3] text-white mb-[2vh] sm:mb-[3vh]">
            Our UI/UX Design Services
          </h2>
        </div>

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
                  {service.iconPath}
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

export default UiDesignServices;
