import FeaturedInsightCard from "../ui/FeaturedInsightCard";
import caseImg from "../../assets/case_study.png";
import paperImg from "../../assets/white_paper.jpg";
import btnIcon from "../../assets/icons/btn_icon.png";
import AnimatedParagraph from "../ui/AnimatedParagraph";

const FeaturedSection = () => {
  return (
    <section className="w-full bg-white px-4 md:px-6 py-8 sm:py-10 md:py-12 flex flex-col gap-8 sm:gap-10 md:gap-12 mx-auto">
      <div className="w-full flex flex-col lg:flex-row items-start  gap-16">
        {/* Text Content */}
        <div className="flex-1 flex flex-col md:gap-[40px] gap-[48px]">
          <p className="text-[25px] font-normal text-[#0B23C8]">
            Featured Insights
          </p>

          {/* <p className="lg:max-w-[60vw] text-base sm:text-lg md:text-xl font-normal font-outfit text-[#000000] leading-relaxed"> */}
          <AnimatedParagraph
            className="lg:max-w-[80vw] text-2xl md:text-4xl font-outfit leading-[48px] md:leading-relaxed"
            text="Highlights our latest perspectives on design, technology, and
            digital innovation. From UI/UX best practices and modern web
            development to DevOps, automation, and emerging tech trends, we
            share practical insights that help businesses make smarter
            decisions, stay competitive, and build scalable digital solutions."
          />
          {/* </p> */}
        </div>

        {/* Button */}
        <div className="w-full lg:w-auto flex lg:justify-end items-start">
          <button className="flex items-center gap-2 bg-primary text-white text-sm font-medium px-[22px] py-[18px] hover:bg-blue-700 transition">
            Let's work together
            <img src={btnIcon} alt="icon" className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        <FeaturedInsightCard
          type="case-study"
          tag="Case Study"
          image={caseImg}
          icon={btnIcon}
          title="Designing UI/UX that Converts:"
          heading="Best Practices for 2025"
          description="Understand digital possibilities, activate marketing 
opportunities, and get the inside track on eDesign news 
"
        />

        <FeaturedInsightCard
          type="blog"
          tag="Blogs"
          image={caseImg}
          icon={btnIcon}
          title="Designing UI/UX that Converts:"
          heading="Best Practices for 2025"
          description="Understand digital possibilities, activate marketing 
opportunities, and get the inside track on eDesign news 
"
          gradient="linear-gradient(180deg, #0B23C8 0%, #000000 100%)"
        />

        <FeaturedInsightCard
          type="white-paper"
          tag="White Paper"
          image={paperImg}
          icon={btnIcon}
          title="Modernizing Legacy Systems with Confidence"
          description="A Fool-proof Guide To Transitioning Your Business from Outdated Systems to Modern Technology"
        />
      </div>
    </section>
  );
};

export default FeaturedSection;
