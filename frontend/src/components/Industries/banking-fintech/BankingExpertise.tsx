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
      "Our team has in-depth knowledge of banking, financial services, and fintech trends, ensuring we deliver cutting-edge solutions.",
  },
  {
    id: 2,
    title: "Customized Solutions",
    description:
      "We tailor our solutions to meet your specific business needs and challenges, ensuring maximum impact.",
  },
  {
    id: 3,
    title: "Security and Compliance",
    description:
      "We prioritize security and regulatory compliance to protect your business and customers.",
  },
  {
    id: 4,
    title: "Innovative Technologies",
    description:
      "We leverage the latest technologies like blockchain, AI, and machine learning to provide innovative fintech solutions.",
  },
  {
    id: 5,
    title: "Proven Track Record",
    description:
      "With a history of successful projects in the fintech space, we have the experience and expertise to deliver results.",
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
      <h3 className="text-primary font-outfit  text-lg sm:text-2xl font-normal leading-snug">
        {card.title}
      </h3>

      <p className="text-textColor font-outfit  text-sm md:text-base leading-[1.8] font-light">
        {card.description}
      </p>
    </div>
  );
}

export default function BankingExpertise() {
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
            <h1 className="text-white font-normal font-stoke leading-tight mb-16 text-h2 ">
              Why Choose Aireb Solutions <br className="hidden lg:block" /> for
              Content Center Solutions?
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
