import React from "react";
import cardIcon from "../../assets/icons/webService_icon.png";
import CustomIcon from "@/assets/icons/ecommerce/services-icons/custom.svg?react";
import MultichennelIcon from "@/assets/icons/ecommerce/services-icons/multichannel.svg?react";
import MobileEcommerceIcon from "@/assets/icons/ecommerce/services-icons/mobile-ecommerce.svg?react";
import GetwayIcon from "@/assets/icons/ecommerce/services-icons/getway.svg?react";
import SeoIcon from "@/assets/icons/ecommerce/services-icons/seo.svg?react";
import CrmIcon from "@/assets/icons/ecommerce/services-icons/crm.svg?react";
import SecurityIcon from "@/assets/icons/ecommerce/services-icons/security.svg?react";
import ProductIcon from "@/assets/icons/ecommerce/services-icons/product.svg?react";
import AnalyticsIcon from "@/assets/icons/ecommerce/services-icons/analytics.svg?react";
import HostingIcon from "@/assets/icons/ecommerce/services-icons/hosting.svg?react";
import AiPoweredIcon from "@/assets/icons/ecommerce/services-icons/ai-powered.svg?react";
import SupportIcon from "@/assets/icons/ecommerce/services-icons/support.svg?react";
const EcommerceServices = () => {
  const services = [
    {
      id: 1,
      iconPath: <CustomIcon />,
      title: "Custom Ecommerce Store Development",
      description:
        "We build scalable, flexible, and secure e-commerce stores customized to your business’s unique needs. From platform selection to system integration, we ensure that your online store is equipped with the latest features to enhance your operations. Our team works with platforms such as Shopify, WooCommerce, Magento, and custom-built solutions for fully personalized websites that meet your brand vision.",
    },
    {
      id: 2,
      iconPath: <MultichennelIcon />,
      title: "Multi-Channel E-commerce Integration",
      description:
        "Expand your reach by integrating your e-commerce store with top platforms like Amazon, eBay, and Etsy. We help you streamline your inventory management and order processing across multiple channels, ensuring that your business can scale without complication.",
    },
    {
      id: 3,
      iconPath: <MobileEcommerceIcon />,
      title: "Mobile E-commerce Solutions",
      description:
        "With mobile shopping on the rise, we ensure that your online store is fully optimized for mobile devices. Our mobile-first approach guarantees that your e-commerce store is responsive, providing customers with an excellent shopping experience on their smartphones and tablets.",
    },
    {
      id: 4,
      iconPath: <GetwayIcon />,
      title: "Payment Gateway Integration",
      description:
        "We integrate secure and diverse payment gateways like PayPal, Stripe, Square, and Razorpay, providing customers with the flexibility to pay with their preferred method. We ensure that the payment process is smooth, secure, and reliable, giving your customers confidence to shop.",
    },
    {
      id: 5,
      iconPath: <SeoIcon />,
      title: "Advanced E-commerce SEO and Digital Marketing",
      description:
        "Our team helps you get your products seen by the right audience. Through comprehensive SEO strategies and digital marketing campaigns, we drive traffic to your online store, optimize your product pages for better visibility, and improve your conversion rates.",
    },
    {
      id: 6,
      iconPath: <CrmIcon />,
      title: "CRM Integration for Better Customer Engagement",
      description:
        "Our AI-powered dialer solutions integrate with a variety of communication channels, including phone calls, emails, SMS, and social media. This omni-channel approach ensures that businesses can engage customers on their preferred platform, leading to improved satisfaction and faster issue resolution.We integrate CRM tools such as HubSpot, Salesforce, and Zoho into your e-commerce platform to help manage customer relationships effectively. With a robust CRM, you can automate customer interactions, personalize marketing efforts, and improve customer retention.",
    },
    {
      id: 7,
      iconPath: <SecurityIcon />,
      title: "E-commerce Security & Compliance",
      description:
        "Keeping your store and customers' data secure is our top priority. We integrate SSL certificates, enable two-factor authentication, and ensure compliance with regulations like PCI DSS. We also stay updated with the latest security trends to keep your site safe from threats.",
    },
    {
      id: 8,
      iconPath: <ProductIcon />,
      title: "Product & Order Management",
      description:
        "Our product and order management systems streamline your operations, automate tasks, and improve efficiency. With real-time updates on inventory, order processing, and customer data, you can focus on growing your business rather than managing operations.",
    },
    {
      id: 9,
      iconPath: <AnalyticsIcon />,
      title: "Analytics & Reporting for Business Growth",
      description:
        "We integrate CRM tools such as HubSpot, Salesforce, and Zoho into your e-commerce platform to help manage customer relationships effectively. With a robust CRM, you can automate customer interactions, personalize marketing efforts, and improve customer retention.",
    },
    {
      id: 10,
      iconPath: <HostingIcon />,
      title: "Cloud Hosting & Scalability",
      description:
        "We ensure your e-commerce store is hosted on reliable cloud platforms like AWS, Google Cloud, or Microsoft Azure for robust performance and scalability. Our cloud hosting solutions provide high uptime, enhanced security, and the ability to scale as your business grows.",
    },
    {
      id: 11,
      iconPath: <AiPoweredIcon />,
      title: "AI-Powered Solutions for E-commerce",
      description:
        "We implement AI-driven solutions such as personalized product recommendations, automated customer service chatbots, and predictive analytics to enhance the shopping experience. These innovations improve customer engagement and increase conversions.",
    },
    {
      id: 12,
      iconPath: <SupportIcon />,
      title: "Omnichannel Support",
      description:
        "Provide a consistent and integrated experience across all customer touchpoints. We enable seamless omnichannel strategies that unify your website, mobile app, social media, and physical stores to create a holistic shopping experience.",
    },
  ];

  return (
    <section className="relative w-full bg-black py-16 lg:py-24 px-6 lg:px-8">
      <div className="">
        {/* Header Section */}
        <div className="text-center mb-[6vh] sm:mb-[8vh] lg:mb-[10vh]">
          <h2 className="font-stoke font-normal text-[clamp(28px,4.5vw,42px)] leading-[1.3] text-white mb-[2vh] sm:mb-[3vh]">
            Discover Our Ecommerce
            <br className="hidden lg:block" /> Services In Detail
          </h2>
          <p className="font-outfit font-normal text-[clamp(13px,1.3vw,16px)] leading-[1.6] text-[#EBEBEB] max-w-[800px] mx-auto px-4">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the little blind texts. The Big
            Oxmox advised her not to do so, because there were thousands of bad
            Commas.
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

export default EcommerceServices;
