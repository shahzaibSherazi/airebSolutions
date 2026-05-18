import React from "react";
import { motion } from "framer-motion";
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
      title: "Custom E-commerce Store Development",
      description:
        "We build secure, scalable e-commerce stores using Shopify, WooCommerce, Magento, and custom solutions tailored to your brand.",
    },
    {
      id: 2,
      iconPath: <MultichennelIcon />,
      title: "Multi-Channel E-commerce Integration",
      description:
        "We connect your store with Amazon, eBay, and Etsy for centralized inventory and smooth order management across platforms.",
    },
    {
      id: 3,
      iconPath: <MobileEcommerceIcon />,
      title: "Mobile E-commerce Solutions",
      description:
        "We create mobile-optimized e-commerce stores, ensuring fast, responsive, and seamless shopping experiences on all devices.",
    },
    {
      id: 4,
      iconPath: <GetwayIcon />,
      title: "Payment Gateway Integration",
      description:
        "We integrate secure payment gateways like PayPal, Stripe, and Razorpay for safe and flexible checkout experiences.",
    },
    {
      id: 5,
      iconPath: <SeoIcon />,
      title: "Advanced E-commerce SEO & Digital Marketing",
      description:
        "We optimize product pages and run marketing campaigns to increase traffic, visibility, and conversions effectively.",
    },
    {
      id: 6,
      iconPath: <CrmIcon />,
      title: "CRM Integration for Customer Engagement",
      description:
        "We integrate CRM tools like HubSpot, Salesforce, and Zoho to improve customer relationships and automate interactions.",
    },
    {
      id: 7,
      iconPath: <SecurityIcon />,
      title: "E-commerce Security & Compliance",
      description:
        "We implement SSL, secure authentication, and PCI compliance to protect customer data and transactions.",
    },
    {
      id: 8,
      iconPath: <ProductIcon />,
      title: "Product & Order Management",
      description:
        "We streamline inventory, orders, and customer data with automated systems for efficient business operations",
    },
    {
      id: 9,
      iconPath: <AnalyticsIcon />,
      title: "Analytics & Reporting for Business Growth",
      description:
        "We provide advanced analytics and reporting tools to track performance and improve decision-making.",
    },
    {
      id: 10,
      iconPath: <HostingIcon />,
      title: "Cloud Hosting & Scalability",
      description:
        "We host stores on AWS, Google Cloud, or Azure for high performance, security, and scalability.",
    },
    {
      id: 11,
      iconPath: <AiPoweredIcon />,
      title: "AI-Powered E-commerce Solutions",
      description:
        "We use AI for recommendations, chatbots, and predictive analytics to improve engagement and sales.",
    },
    {
      id: 12,
      iconPath: <SupportIcon />,
      title: "Omnichannel Support",
      description:
        "We unify web, mobile, and social channels to deliver a consistent and seamless customer experience.",
    },
  ];

  return (
    <section className="relative w-full bg-black ">
      <div className="container py-16 lg:py-24 ">
        {/* Header Section */}
        <motion.div
          className="text-center mb-[6vh] sm:mb-[8vh] lg:mb-[10vh]"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}>
          <h2 className="font-stoke font-normal text-h2 leading-[1.3] text-white mb-[2vh] sm:mb-[3vh]">
            Discover Our Ecommerce
            <br className="hidden lg:block" /> Services In Detail
          </h2>
          <p className="font-outfit font-normal text-p leading-[1.3] text-[#EBEBEB] max-w-[800px] mx-auto">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the little blind texts. The Big
            Oxmox advised her not to do so, because there were thousands of bad
            Commas.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(16px,2vh,24px)]">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card group relative bg-black hover:bg-primary
  border border-gray-800 sm:p-5 p-2
  transition-all duration-500 ease-in-out hover:border-primary
  overflow-hidden
  ">
              <motion.div
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false }}>
                {/* Icon Container */}
                <div className="w-[clamp(44px,5vh,56px)] h-[clamp(44px,5vh,56px)] mb-[clamp(12px,2.5vh,28px)] bg-white text-black  flex items-center justify-center transition-all duration-500">
                  {service.iconPath}
                </div>

                {/* Title */}
                <h3
                  className="font-outfit font-semibold text-white
  text-title leading-[1.3]
  mb-[clamp(12px,1.5vh,20px)]
  line-clamp-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="font-outfit font-normal text-white
  text-p leading-[1.3]
  transition-colors duration-500
  line-clamp-3 overflow-hidden">
                  {service.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcommerceServices;
