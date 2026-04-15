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
      "With years of experience in the travel and hospitality industry, we understand the unique challenges and opportunities of the sector.",
  },
  {
    id: 2,
    title: "Tailored Solutions",
    description:
      "We offer customized solutions that address your specific business requirements and enhance guest experiences. ",
  },
  {
    id: 3,
    title: "Scalable & Flexible",
    description:
      "Our solutions are designed to scale with your business, ensuring that your systems can evolve as you grow.",
  },
  {
    id: 4,
    title: "Innovative Technologies",
    description:
      "We stay at the forefront of technology trends, incorporating the latest tools and innovations into our solutions to help you stay competitive.",
  },
  {
    id: 5,
    title: "Ongoing Support",
    description:
      "We offer continuous support to ensure your business stays competitive and your digital platforms continue to meet the evolving needs of your customers.",
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
      className="rounded-[6px] border-[1.5px] border-transparent bg-[#0e1828] flex flex-col justify-start gap-4 p-6 sm:p-7 w-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(66,133,244,0.12)]"
      style={{
        ...cardBorder,
        minHeight: "215px",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transitionDelay: `${delay}ms`,
      }}>
      <h3 className="text-primary font-outfit line-clamp-3 overflow-hidden  text-lg sm:text-2xl font-normal leading-snug">
        {card.title}
      </h3>

      <p className="text-textColor font-outfit line-clamp-4 overflow-hidden  text-sm md:text-base leading-[1.8] font-light">
        {card.description}
      </p>
    </div>
  );
}

export default function TravelHospitalityExpertise() {
  const [headerRef, headerInView] = useInView(0.2);

  return (
    <>
      <section
        className=" "
        style={{
          background: "linear-gradient(180deg, #4285F4 0%, #0E1828 38.46%)",
        }}>
        <div className="container px-6 lg:px-8 py-16 md:py-24">
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
            <h1 className="text-white font-normal font-stoke leading-tight mb-16 text-h2 ">
              Why Choose Aireb Solutions for <br />
              Travel & Hospitality?
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
