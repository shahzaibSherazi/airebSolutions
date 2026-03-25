import FeaturedInsightCard from "../ui/FeaturedInsightCard";
import caseImg from "../../assets/case_study.png";
import blogImg from "../../assets/blog.jpeg";
import paperImg from "../../assets/white_paper.jpg";
import BtnIcon from "@/assets/icons/btn_icon.svg?react";
import AnimatedParagraph from "../ui/AnimatedParagraph";

const FeaturedSection = () => {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #4285F4 0%, #5193FF 100%)",
      }}
      className="w-full px-6 lg:px-8 pb-16 lg:pb-24 flex flex-col gap-8 sm:gap-10 md:gap-12 mx-auto">
      <div className="w-full flex flex-col lg:flex-row items-start  gap-16">
        {/* Text Content */}
        <div className="flex-1 flex flex-col md:gap-[40px] gap-[48px]">
          <p className="text-[25px] font-outfit font-normal text-textColor lg:text-black">
            Featured Insights
          </p>

          {/* <p className="lg:max-w-[60vw] text-base sm:text-lg md:text-xl font-normal font-outfit text-[#000000] leading-relaxed"> */}
          <AnimatedParagraph
            className="lg:max-w-[80vw] text-[clamp(24px,3vw,32px)] font-outfit leading-[48px] md:leading-relaxed"
            text="We share insights on design, technology, and digital innovation from UI/UX design best practices, modern web development, DevOps automation and emerging tech. Explore our case studies, blogs and white papers for practical knowledge, real-world solutions and expert perspectives to help businesses make smarter decisions and build scalable digital solutions."
          />
          {/* </p> */}
        </div>

        {/* Button */}
        <div className="w-full lg:w-auto flex lg:justify-end items-start">
          <button className="group flex items-center gap-2 bg-black text-white text-sm font-outfit font-medium px-[22px] py-[18px] hover:bg-white hover:text-black transition">
            Let's work together
            <BtnIcon className="w-3 h-3 text-current  transition-colors duration-300" />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        <FeaturedInsightCard
          type="case-study"
          tag="Case Study"
          image={caseImg}
          // icon={BtnIcon}
          title="DevOps Transformation & Assessment for Improved Software Delivery"
          heading="Best Practices for 2025"
          description="DevOps assessment revealed gaps in automation, deployment workflows, and monitoring.
Manual processes and lack of CI/CD slowed releases and increased risk.
Optimizations enabled faster deployments, better reliability, and stronger collaboration. 
"
        />

        <FeaturedInsightCard
          type="blog"
          tag="Blogs"
          image={blogImg}
          // icon={BtnIcon}
          title="Boost Sales with Smart E-Commerce Development"
          heading="Best Practices for 2025"
          description="Build fast, secure, and user-friendly online stores that drive conversions, improve customer experience, and scale your business globally.
"
          gradient="linear-gradient(180deg, #629DFF 0%, #000000 100%)"
        />

        <FeaturedInsightCard
          type="white-paper"
          tag="White Paper"
          image={paperImg}
          // icon={BtnIcon}
          title="Transforming Businesses with Web Development Excellence"
          description="A strategic look at how modern web development drives growth, engagement, and digital success.
Helping businesses overcome challenges with scalable, user-focused solutions."
        />
      </div>
    </section>
  );
};

export default FeaturedSection;
