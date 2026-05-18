import React, { useEffect, useState } from "react";

const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easeOutCubic
      const ease = 1 - Math.pow(1 - progress, 3);

      const value = Math.floor(ease * end);
      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return count;
};

const AboutHero = () => {
  const count100 = useCountUp(100);
  const count30 = useCountUp(30);
  const count200 = useCountUp(200);

  return (
    <section className="heros_height flex flex-col justify-center relative w-full bg-gradient-to-b from-[#061326] to-[#0B1F3D]  overflow-hidden">
      <div className="container py-8 lg:py-10 flex lg:flex-row flex-col justify-between items-center gap-16">
        {/* LEFT CONTENT */}
        <div className="max-w-[560px]">
          <button className="bg-primary cursor-default text-white font-jakarta font-bold text-sm md:text-base px-4 py-1.5 rounded-[5px] mb-6">
            About Us
          </button>

          <h1 className="text-white font-stoke font-normal text-h2 leading-[1.2]  mb-6">
            Delivering software <br />
            teams, expertise <br />
            and results
          </h1>

          <p className="text-white font-outfit font-extralight text-p leading-relaxed">
            Aireb Solutions delivers custom software development services to
            businesses worldwide, partnering with startups and enterprises to
            build scalable engineering teams and create high-quality digital
            solutions.
          </p>
        </div>

        {/* RIGHT SIDE CARDS */}
        <div className="relative flex flex-col items-center sm:items-start w-full max-w-[600px]">
          {/* TOP ROW */}
          <div className="flex sm:flex-row flex-col-reverse items-center sm:items-end gap-8 w-full justify-end">
            {/* 100+ */}
            <div className="relative aboutUs_Cards_Edge bg-primary w-full sm:w-[180px] h-[130px] p-6 shadow-xl flex flex-col items-center justify-center">
              <h3 className="text-white font-outfit text-[clamp(18px,4vw,42px)] font-bold">
                {count100} +
              </h3>
              <p className="text-white font-outfit font-light text-[clamp(12px,1vh,16px)] mt-1">
                Projects are
                <br /> completed
              </p>
            </div>

            {/* 30+ */}
            <div className="relative aboutUs_Cards_Edge bg-primary w-full sm:w-[180px] h-[130px] p-6 shadow-xl flex flex-col items-center justify-center">
              <h3 className="text-white font-outfit text-[clamp(18px,4vw,42px)] font-bold">
                {count30} +
              </h3>
              <p className="text-white font-outfit font-light text-[clamp(12px,1vh,16px)] mt-1">
                Multi Service
                <br /> Provider
              </p>
            </div>
          </div>

          {/* BOTTOM CARD */}
          <div className="mt-8 w-full">
            <div className="relative aboutUsCards_Edge bg-primary w-full sm:w-[180px] h-[130px] p-6 shadow-xl flex flex-col items-center justify-center">
              <h3 className="text-white font-outfit text-[clamp(18px,4vw,42px)] font-bold">
                {count200} +
              </h3>
              <p className="text-white font-outfit font-light text-[clamp(12px,1vh,16px)] mt-1">
                Global Reach,
                <br /> Trusted Clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
