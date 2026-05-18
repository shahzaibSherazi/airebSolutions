import { useRef, useState, useEffect } from "react";

const cardBorder = {
  backgroundImage:
    "linear-gradient(#0e1828, #0e1828), linear-gradient(180deg, #4285F4 0%, #000000 100%)",
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
};

const cards = [
  {
    id: 1,
    title: "Industry Expertise",
    description:
      "We understand real estate challenges well and provide solutions based on our experience in the industry.",
  },
  {
    id: 2,
    title: "Innovative Technology",
    description:
      "We use modern technologies like AI, mobile apps, and virtual reality to deliver advanced real estate solutions.",
  },
  {
    id: 3,
    title: "Customization & Flexibility",
    description:
      "We create fully customizable and scalable solutions that grow with your real estate business needs.",
  },
  {
    id: 4,
    title: "Comprehensive Services",
    description:
      "We offer complete services, including websites, mobile apps, marketing, and analytics, to support your business.",
  },
  {
    id: 5,
    title: "Ongoing Support",
    description:
      "We provide continuous support after launch to keep your real estate solutions updated and running smoothly.",
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function Card({ card, delay }) {
  const [ref, inView] = useInView(0.1);
  return (
    <div
      ref={ref}
      className="rounded-[6px] border-[1.5px] border-transparent bg-[#0e1828] flex flex-col justify-start gap-4 p-6 sm:p-7 w-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]  hover:shadow-[0_12px_32px_rgba(66,133,244,0.12)]"
      style={{
        ...cardBorder,
        minHeight: "215px",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transitionDelay: `${delay}ms`,
      }}>
      <h3 className="text-primary font-outfit line-clamp-2 overflow-hidden text-title font-normal leading-snug">
        {card.title}
      </h3>

      <p className="text-textColor font-outfit line-clamp-4 overflow-hidden  text-p leading-[1.8] font-light">
        {card.description}
      </p>
    </div>
  );
}

export default function RealEstateExpertise() {
  const [headerRef, headerInView] = useInView(0.2);

  return (
    <>
      <section
        className=" "
        style={{
          background: "linear-gradient(180deg, #4285F4 0%, #0E1828 38.46%)",
        }}>
        <div className="container py-16 md:py-24">
          {/* ── Badge ── */}
          <div
            ref={headerRef}
            className="transition-all duration-700 ease-out"
            style={{
              opacity: headerInView ? 1 : 0,
              transform: headerInView ? "translateY(0)" : "translateY(20px)",
            }}>
            <span className="inline-block bg-white  text-black text-base font-outfit  font-medium px-4 py-2 mb-8 tracking-wide">
              Our Expertise
            </span>

            {/* ── Heading ── */}
            <h1 className="text-white font-normal font-stoke leading-tight mb-16 text-[clamp(24px,4vw,48px)] ">
              Why Choose Aireb Solutions for <br />
              Real Estate?
            </h1>
          </div>

          {/* ── Row 2: 2 cards (left-aligned, matching card widths) ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cards.map((card, i) => (
              <Card key={card.id} card={card} delay={i * 120 + 360} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
