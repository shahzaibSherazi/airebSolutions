import FeaturedInsightCard from "../ui/FeaturedInsightCard";
import caseImg from "../../assets/case_study.png";
import blogImg from "../../assets/blog.png";
import paperImg from "../../assets/white_paper.png";
import BtnIcon from "@/assets/icons/btn_icon.svg?react";
import AnimatedParagraph from "../ui/AnimatedParagraph";
import { useCallback } from "react";
import { smoothScroll } from "@/lib/smooth-scroll";

const FeaturedSection = () => {
  const scrollToContact = useCallback(() => {
    const el = document.getElementById("contact-form");
    if (!el) return;

    const lenis = smoothScroll.getInstance();

    if (lenis) {
      lenis.scrollTo(el, {
        offset: -100, // header height adjust
        duration: 1.2,
        immediate: false,
      });
    } else {
      // fallback if reduced motion or Lenis disabled
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #4285F4 0%, #5193FF 100%)",
      }}>
      <div className="container px-2 lg:px-8 pb-16 lg:pb-24 flex flex-col gap-8 sm:gap-10 md:gap-12">
        <div className="w-full flex flex-col lg:flex-row items-start  gap-16">
          {/* Text Content */}
          <div className="flex-1 flex flex-col md:gap-[40px] gap-[48px]">
            <p className="text-2xl font-outfit font-normal text-textColor lg:text-black">
              Featured Insights
            </p>

            {/* <p className="lg:max-w-[60vw] text-base sm:text-lg md:text-xl font-normal font-outfit text-[#000000] leading-relaxed"> */}
            <AnimatedParagraph
              className="lg:max-w-[80vw] text-[clamp(18px,3vw,36px)] font-outfit sm:leading-[48px] md:leading-relaxed"
              text="We share insights on design, technology, and digital innovation from UI/UX design best practices, modern web development, DevOps automation and emerging tech. Explore our case studies, blogs and white papers for practical knowledge, real-world solutions and expert perspectives to help businesses make smarter decisions and build scalable digital solutions."
            />
            {/* </p> */}
          </div>

          {/* Button */}
          <button
            onClick={scrollToContact}
            className="group lg:w-auto  lg:justify-end flex items-center gap-2 bg-black text-white text-sm font-outfit font-medium px-[22px] py-[18px] hover:bg-white hover:text-black transition">
            Let's work together
            <BtnIcon className="w-3 h-3 text-current  transition-colors duration-300" />
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          <FeaturedInsightCard
            type="case-study"
            tag="Case Study"
            image={caseImg}
            // icon={BtnIcon}
            title="DevOps Transformation & Assessment for Improved Software Delivery"
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
      </div>
    </section>
  );
};

export default FeaturedSection;
