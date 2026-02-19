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
    title: "Tailored Solutions",
    description:
      "We create solutions specifically designed to meet the unique challenges of the education sector.",
  },
  {
    id: 2,
    title: "Scalability",
    description:
      "Our solutions are designed to grow with your institution, adapting to the evolving needs of students and educators.",
  },
  {
    id: 3,
    title: "Innovative Features",
    description:
      "We integrate AI, gamification, mobile learning, and personalized learning experiences to enhance engagement and performance.",
  },
  {
    id: 4,
    title: "Security & Compliance",
    description:
      "We ensure your platform complies with all relevant educational and data protection regulations.",
  },
  {
    id: 5,
    title: "Continuous Support",
    description:
      "Our team offers ongoing support to ensure your platform remains up-to-date, secure, and functional.",
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
      <h3 className="text-white font-outfit  text-lg sm:text-2xl font-normal leading-snug">
        {card.title}
      </h3>

      <p className="text-textColor font-outfit  text-sm md:text-base leading-[1.8] font-light">
        {card.description}
      </p>
    </div>
  );
}

export default function HealthCareExpertise() {
  const [headerRef, headerInView] = useInView(0.2);

  // Split into rows: 3 + 2
  //   const row1 = cards.slice(0, 3);
  //   const row2 = cards.slice(3);

  return (
    <>
      <section
        className=" px-6 lg:px-8 py-16 md:py-24"
        style={{
          background: "linear-gradient(180deg, #4285F4 0%, #0E1828 38.46%)",
        }}>
        <div className="">
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
            <h1 className="text-white font-normal font-stoke leading-tight mb-16 text-[clamp(36px,4vw,48px)] ">
              Why Choose Aireb Solutions for <br className="hidden lg:block" />{" "}
              Your Education Platform?
            </h1>
          </div>

          {/* ── Row 1: 3 cards ── */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
            {row1.map((card, i) => (
              <Card key={card.id} card={card} delay={i * 120} />
            ))}
          </div> */}

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
