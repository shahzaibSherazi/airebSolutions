import React from "react";
import cardIcon from "../../assets/icons/webService_icon.png";
const ContentWritingServices = () => {
  const services = [
    {
      id: 1,
      iconPath: cardIcon,
      title: "Blog Posts & Articles",
      description:
        "Regularly publishing informative and well-researched blog posts is one of the most effective ways to engage your audience, improve SEO rankings, and establish authority in your industry. Our blog posts are designed to educate, entertain, and inform, with a strong focus on SEO to drive organic traffic.",
    },
    {
      id: 2,
      iconPath: cardIcon,
      title: "Website Copywriting",
      description:
        "Your website is often the first point of contact between your brand and potential customers. That's why having clear, compelling, and persuasive website copy is crucial. Whether it's for landing pages, product descriptions, or about pages, we create copy that drives conversions and enhances user experience.",
    },
    {
      id: 3,
      iconPath: cardIcon,
      title: "Product Descriptions",
      description:
        "Product descriptions are essential for converting visitors into buyers. We write compelling, detailed descriptions that highlight the key features and benefits of your products, while also focusing on the emotions and desires that drive consumer decisions.",
    },
    {
      id: 4,
      iconPath: cardIcon,
      title: "Social Media Content",
      description:
        "Building a strong social media presence is key to brand success, and we're here to help you connect with your audience. Our social media content is crafted to engage, entertain, and inform while keeping your brand's voice consistent across all platforms.",
    },
    {
      id: 5,
      iconPath: cardIcon,
      title: "SEO Content Writing",
      description:
        "SEO (Search Engine Optimization) is the backbone of content strategy. Our SEO writing service ensures that your content is not only useful and informative but also optimized for the best possible rankings on search engines like Google.",
    },
    {
      id: 6,
      iconPath: cardIcon,
      title: "Press Releases",
      description:
        "Press releases are an excellent way to share important company news, events, product launches, or collaborations with the media and your audience. Our expert writers craft press releases that grab attention, convey key messages clearly, and ensure your brand gets the recognition it deserves.",
    },
    {
      id: 7,
      iconPath: cardIcon,
      title: "Email Marketing Campaigns",
      description:
        "Email marketing is one of the most direct ways to engage with your audience. We create personalized, engaging, and value-driven email copy that encourages recipients to open, read, and take action.",
    },
  ];

  return (
    <section className="relative w-full bg-black py-[8vh] sm:py-[10vh] lg:py-[12vh] px-8">
      <div className="">
        {/* Header Section */}
        <div className="text-center mb-[6vh] sm:mb-[8vh] lg:mb-[10vh]">
          <h2 className="font-stoke font-normal text-[clamp(28px,4.5vw,42px)] leading-[1.3] text-white mb-[2vh] sm:mb-[3vh]">
            Our Content Writing Services
          </h2>
          <p className="font-outfit font-normal text-[clamp(13px,1.3vw,16px)] leading-[1.6] text-textColor max-w-[890px] mx-auto px-4">
            At Aireb Solutions, we offer a comprehensive range of content
            writing services designed to meet the diverse needs of your
            business. From SEO-optimized website copy to in-depth articles and
            engaging social media posts, our team of expert writers is here to
            craft content that delivers results.
          </p>
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

export default ContentWritingServices;
