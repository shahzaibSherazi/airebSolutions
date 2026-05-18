import React from "react";
import cardIcon from "../../assets/icons/webService_icon.png";
import { motion } from "framer-motion";
import BlogIcon from "@/assets/icons/content-writing_icons/services_icons/blog.svg?react";
import CopyWritingIcon from "@/assets/icons/content-writing_icons/services_icons/copywriting.svg?react";
import ProductIcon from "@/assets/icons/content-writing_icons/services_icons/product.svg?react";
import SocialMediaIcon from "@/assets/icons/content-writing_icons/services_icons/social-media.svg?react";
import SeoIcon from "@/assets/icons/content-writing_icons/services_icons/seo.svg?react";
import PressIcon from "@/assets/icons/content-writing_icons/services_icons/press.svg?react";
import EmailIcon from "@/assets/icons/content-writing_icons/services_icons/email.svg?react";
const ContentWritingServices = () => {
  const services = [
    {
      id: 1,
      iconPath: <BlogIcon />,
      title: "Blog Posts & Articles",
      description:
        "We write SEO-friendly blogs and articles that educate audiences, increase engagement, and improve search engine rankings.",
    },
    {
      id: 2,
      iconPath: <CopyWritingIcon />,
      title: "Website Copywriting",
      description:
        "We create compelling website copy that improves user experience, builds trust, and increases customer conversions effectively.",
    },
    {
      id: 3,
      iconPath: <ProductIcon />,
      title: "Product Descriptions",
      description:
        "We write persuasive product descriptions highlighting features, benefits, and emotions to increase customer purchase decisions.",
    },
    {
      id: 4,
      iconPath: <SocialMediaIcon />,
      title: "Social Media Content",
      description:
        "We create engaging social media content that strengthens brand identity and connects effectively with target audiences.",
    },
    {
      id: 5,
      iconPath: <SeoIcon />,
      title: "SEO Content Writing",
      description:
        "We develop SEO-optimized content that improves search rankings, drives traffic, and increases online visibility organically.",
    },
    {
      id: 6,
      iconPath: <PressIcon />,
      title: "Press Releases",
      description:
        "We craft professional press releases that promote company news, product launches, and important business announcements effectively.",
    },
    {
      id: 7,
      iconPath: <EmailIcon />,
      title: "Email Marketing Campaigns",
      description:
        "We create personalized email campaigns that engage audiences, increase open rates, and drive customer actions successfully.",
    },
  ];

  return (
    <section className="relative w-full bg-black ">
      <div className="container py-16 lg:py-24">
        {/* Header Section */}
        <motion.div
          className="text-center mb-[6vh] sm:mb-[8vh] lg:mb-[10vh]"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}>
          <h2 className="font-stoke font-normal text-h2 leading-[1.3] text-white mb-[2vh] sm:mb-[3vh]">
            Our Content Writing Services
          </h2>
          <p className="font-outfit font-normal text-p leading-[1.3] text-textColor max-w-[890px] mx-auto px-4">
            At Aireb Solutions, we offer a comprehensive range of content
            writing services designed to meet the diverse needs of your
            business. From SEO-optimized website copy to in-depth articles and
            engaging social media posts, our team of expert writers is here to
            craft content that delivers results.
          </p>
        </motion.div>

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
                <div className="w-[clamp(44px,5vh,56px)] mb-[clamp(12px,2.5vh,28px)] h-[clamp(44px,5vh,56px)] bg-white text-black  flex items-center justify-center transition-all duration-500">
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

export default ContentWritingServices;
