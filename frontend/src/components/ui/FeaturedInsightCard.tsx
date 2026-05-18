import { useRef } from "react";
import BtnIcon from "@/assets/icons/btn_icon.svg?react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

type CardType = "case-study" | "blog" | "white-paper";

type FeaturedInsightCardProps = {
  type: CardType;
  tag: string;
  image: string;
  title: string;
  description: string;
  gradient?: string;
  index?: number;
};

const CARD_THEME = {
  "case-study": {
    content: "bg-white pt-4 text-black",
    title: "text-black",
    description: "text-black",
    footer: "bg-black",
    footerText: "text-white",
    footerIcon: "text-white",
  },
  blog: {
    content: "bg-black pt-4",
    title: "text-white",
    description: "text-white",
    footer: "bg-white",
    footerText: "text-black",
    footerIcon: "text-black",
  },
  "white-paper": {
    content: "bg-black pt-4",
    title: "text-white",
    description: "text-white",
    footer: "bg-white",
    footerText: "text-black",
    footerIcon: "text-black",
  },
} as const;

const CARD_ROUTES: Record<CardType, string> = {
  "case-study": "/resources/case-studies",
  blog: "/resources/blogs",
  "white-paper": "/resources/white-papers",
};

const FeaturedInsightCard: React.FC<FeaturedInsightCardProps> = ({
  type,
  tag,
  image,
  title,
  description,
  index = 0,
}) => {
  const navigate = useNavigate();
  const theme = CARD_THEME[type];

  return (
    <motion.div
      onClick={() => navigate(CARD_ROUTES[type])}
      className="max-w-md h-[450px] flex flex-col overflow-hidden transition-all duration-700 ease-out cursor-pointer bg-black"
      style={{ transitionDelay: `${index * 150}ms` }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}>
      {/* Image */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.15 }}
        viewport={{ once: true }}
        className="relative h-[240px] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${image})` }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
            delay: index * 0.15 + 0.1,
          }}
          className="absolute inset-0 bg-black"
        />
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
            delay: index * 0.15 + 0.2,
          }}
          className="absolute top-4 left-6 right-6 text-white">
          <p className="text-xl md:text-2xl font-normal font-stoke mb-1">
            {tag}
          </p>
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
        className={`flex flex-col flex-1 ${theme.content}`}>
        <h3
          className={`text-title font-medium leading-[1.3rem] font-outfit px-6 ${theme.title}`}>
          {title}
        </h3>
        <p
          className={`text-p font-outfit font-normal leading-[1.3rem] my-2 line-clamp-3 px-6 ${theme.description}`}>
          {description}
        </p>

        {/* Footer */}
        <div
          className={`mt-auto flex items-center justify-between cursor-pointer w-full px-0 py-4 ${theme.footer}`}>
          <p className={`text-sm pl-6 ${theme.footerText}`}>Read More</p>
          <div className="pr-6">
            <BtnIcon className={`w-3 h-3 ${theme.footerIcon}`} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FeaturedInsightCard;
