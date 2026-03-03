import React from "react";

const AboutHero = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#061326] to-[#0B1F3D] overflow-hidden">
      <div className=" px-6 lg:px-8 py-20 lg:py-24">
        <div className="flex lg:flex-row flex-col justify-between items-center gap-16">
          {/* LEFT CONTENT */}
          <div className="max-w-[560px]">
            <button className="bg-primary text-white font-jakarta font-bold text-sm md:text-base px-4 py-1.5 rounded-[5px] mb-6">
              About Us
            </button>

            <h1 className="text-white font-stoke font-normal text-[clamp(32px,4vw,42px)] leading-[1.2]  mb-6">
              Delivering software <br />
              teams, expertise <br />
              and results
            </h1>

            <p className="text-white font-outfit font-light text-[clamp(16px,2vw,24px)] leading-relaxed">
              Aireb Solutions delivers custom software development services to
              businesses worldwide, partnering with startups and enterprises to
              build scalable engineering teams and create high-quality digital
              solutions.
            </p>
          </div>

          {/* RIGHT SIDE CARDS */}
          <div
            className="relative flex flex-col items-center sm:items-start w-full  
    max-w-[600px]">
            {/* TOP ROW */}
            <div className="flex sm:flex-row flex-col-reverse items-center sm:items-end gap-8 w-full justify-end">
              {/* 100+ */}
              <div
                className="relative aboutUs_Cards_Edge bg-primary 
                              w-full sm:w-[180px] h-[130px]  p-6 shadow-xl flex flex-col items-center justify-center">
                <h3 className="text-white font-outfit  text-[clamp(32px,4vw,42px)] font-bold">
                  100 +
                </h3>
                <p className="text-white font-outfit font-light text-[clamp(12px,1vh,16px)] mt-1">
                  Projects are
                  <br /> completed
                </p>
              </div>

              {/* 30+ */}
              <div
                className="relative aboutUs_Cards_Edge bg-primary 
                             w-full sm:w-[180px] h-[130px]  p-6 shadow-xl flex flex-col items-center justify-center">
                <h3 className="text-white font-outfit  text-[clamp(32px,4vw,42px)] font-bold">
                  30 +
                </h3>
                <p className="text-white font-outfit font-light text-[clamp(12px,1vh,16px)] mt-1">
                  Multi Service
                  <br /> Provider
                </p>
              </div>
            </div>

            {/* BOTTOM CARD (Shifted Left Under 100+) */}
            <div className="mt-8 w-full">
              <div
                className="relative aboutUsCards_Edge bg-primary 
                              w-full sm:w-[180px] h-[130px]  p-6 shadow-xl flex flex-col items-center justify-center">
                <h3 className="text-white font-outfit  text-[clamp(32px,4vw,42px)] font-bold">
                  200 +
                </h3>
                <p className="text-white font-outfit font-light text-[clamp(12px,1vh,16px)] mt-1">
                  Global Reach,
                  <br /> Trusted Clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
