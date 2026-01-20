import { Search, Users, Wrench, RefreshCw, UserCheck } from "lucide-react";

interface ValueCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ValueCard = ({ title, description, icon, className = "" }: ValueCardProps) => (
  <div
    className={`bg-primary text-white p-6 hover:p-5 transition-all max-sm:pt-4 md:p-8 flex flex-col justify-between sm:min-h-[180px] ${className}`}
  >
    <div className="flex justify-between items-center">
      <h3 className="text-2xl md:text-[26px] font-stoke">{title}</h3>
      <div className="bg-white text-black size-10 sm:size-11 flex justify-center items-center">
        {icon}
      </div>
    </div>
    <p className="text-muted-foreground leading-[22px] mt-3.5">
      {description}
    </p>
  </div>
);

const StrategicApproach = () => {
  const values = [
    {
      title: "Clarity",
      description:
        "We identify where the real opportunities lie and where systems, brand or processes get stuck, so every next decision drives direction and impact.",
      icon: <img src="/src/assets/icons/development_skill.png" alt="Clarity Icon" className="size-7 sm:size-8"/>,
    },
    {
      title: "Partnership",
      description:
        "We don't just build for you we build with you. Together we operate as one team that turns ambition into scalable reality.",
      icon: <img src="/src/assets/icons/conference.png" alt="Partnership Icon" className="size-7 sm:size-8"/>,
    },
    {
      title: "Engineering",
      description:
        "We build technology that works seamlessly, scales intelligently and is strategically designed to push your business forward.",
      icon: <img src="/src/assets/icons/tools.png" alt="Engineering Icon" className="size-7 sm:size-8"/>,
    },
    {
      title: "Evolution",
      description:
        "We create solutions that adapt to change, respond faster, work smarter and help your brand get more out of every new development.",
      icon: <img src="/src/assets/icons/life_cycle.png" alt="Evolution Icon" className="size-7 sm:size-8"/>,
    },
    {
      title: "Leadership",
      description:
        "We strengthen your position in the market by sharpening visibility, improving performance and building an advantage that continues to grow.",
      icon: <img src="/src/assets/icons/business_group.png" alt="Leadership Icon" className="size-7 sm:size-8"/>,
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32 px-2 md:px-5">
      <div className="font-outfit">
        {/* Header */}
        <div className="sm:text-center mb-16 md:mb-20">
          <span className="inline-block bg-primary text-white px-6 py-3 text-2xl leading-4 mb-9 sm:mb-6">
            Strategic Approach
          </span>
          <h2 className="font-serif text-black mb-6 sm:mb-3.5 text-[32px] md:text-[42px] leading-[48px] md:leading-[56px]">
            The drive behind <br className="sm:hidden" /> everything we build
          </h2>
          <p className="text-muted max-w-[833px] mx-auto text-base leading-[22px]">
            We don't just create strategies we show the numbers. Growth means higher conversions,
            lower costs, and stronger brands. Discover how we help brands grow smarter
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1.5 text-white">
          {/* Top Row - 3 Cards */}
          {values.slice(0, 3).map((value, index) => (
            <ValueCard
              key={index}
              title={value.title}
              description={value.description}
              icon={value.icon}
            />
          ))}
        </div>

        {/* Bottom Row - 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 mt-1.5">
          {values.slice(3, 5).map((value, index) => (
            <ValueCard
              key={index + 3}
              title={value.title}
              description={value.description}
              icon={value.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicApproach;
