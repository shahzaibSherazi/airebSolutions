import React, { useEffect, useState } from "react";
import OptimizationImg from "@/assets/Dialer_assets/optimization.svg?react";
import CallIcon from "@/assets/Dialer_assets/call_icon.svg?react";
import SearchIcon from "@/assets/Dialer_assets/search_icon.svg?react";
import { motion } from "framer-motion";
const DialerSolutions = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      number: "01",
      title: "Setup & Customization",
      description:
        "The AI system is trained to understand your customer interactions and optimize the calling process, ensuring it continuously improves over time.",
      rightContent: (
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr,2fr] gap-6 ">
          {/* Left Column - Customer Details */}
          <div
            style={{
              background: "linear-gradient(180deg, #629DFF 0%, #0E1828 100%)",
            }}
            className=" rounded-[22px] border border-primary p-[22px] flex flex-col">
            <div className="bg-black rounded-[22px] px-5 py-2.5 mb-6 text-center">
              <span className="text-white text-sm md:text-lg font-outfit font-medium">
                Customer Details
              </span>
            </div>
            <div className="space-y-2 flex-grow">
              <div className="text-textColor font-outfit font-medium text-sm md:text-base">
                Name
              </div>
              <div className="text-textColor font-outfit font-medium text-sm md:text-base">
                Age
              </div>
              <div className="text-textColor font-outfit font-medium text-sm md:text-base">
                Gender
              </div>
              <div className="text-textColor font-outfit font-medium text-sm md:text-base">
                Website
              </div>
              <div className="text-textColor font-outfit font-medium text-sm md:text-base">
                Purchase history
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 font-outfit">
            {/* Contact History Card */}
            <div
              style={{
                background: "linear-gradient(180deg, #0E1828 0%, #629DFF 100%)",
              }}
              className=" border border-primary rounded-[22px] p-[22px]">
              <h3 className="text-textColor text-xl font-bold mb-5">
                Contact History
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-textColor text-sm md:text-base font-normal">
                    Created time
                  </span>
                  <span className="text-textColor text-sm md:text-base font-normal">
                    2025-11-03 17:47:06
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-textColor text-sm md:text-base font-normal">
                    Last connect
                  </span>
                  <span className="text-textColor text-sm md:text-base font-normal">
                    2025-11-03 17:47:06
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div
              style={{
                background: "linear-gradient(180deg, #0E1828 0%, #629DFF 100%)",
              }}
              className=" rounded-[22px] border border-primary overflow-hidden">
              <div className="bg-[#0E1828] border-primary border-b text-center py-1">
                <h3 className="text-textColor text-sm md:text-lg font-bold">
                  Action
                </h3>
              </div>
              <div className="flex items-center justify-center gap-2 px-4 py-5">
                <button className="px-4 py-2 bg-white text-black text-xs font-medium rounded-full hover:bg-black hover:text-textColor transition-colors">
                  Support
                </button>
                <button className="px-4 py-2 bg-white text-black text-xs font-medium rounded-full hover:bg-black hover:text-textColor transition-colors">
                  Sales
                </button>
                <button className="px-4 py-2 bg-white text-black text-xs font-medium rounded-full hover:bg-black hover:text-textColor transition-colors">
                  Premium
                </button>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      number: "02",
      title: "Integration",
      description:
        "The AI system is trained to understand your customer interactions and optimize the calling process, ensuring it continuously improves over time.",
      // rightContent: (
      //   <div className="grid grid-cols-1 md:grid-cols-[1.5fr,2fr] gap-6">
      //     {/* Left Column - Integration */}
      //     <div
      //       style={{
      //         background: "linear-gradient(180deg, #629DFF 0%, #0E1828 100%)",
      //       }}
      //       className=" rounded-[22px] p-6 flex flex-col border border-primary">
      //       <div className="bg-black rounded-[22px] px-5 py-2.5 mb-6 text-center">
      //         <span className="text-textColor text-sm md:text-lg font-outfit font-medium">
      //           Integration
      //         </span>
      //       </div>
      //       <div className="space-y-2 flex-grow">
      //         <div className="text-textColor font-outfit font-medium text-sm md:text-base">
      //           Name
      //         </div>
      //         <div className="text-textColor font-outfit font-medium text-sm md:text-base">
      //           Age
      //         </div>
      //         <div className="text-textColor font-outfit font-medium text-sm md:text-base">
      //           Gender
      //         </div>
      //         <div className="text-textColor font-outfit font-medium text-sm md:text-base">
      //           Website
      //         </div>
      //         <div className="text-textColor font-outfit font-medium text-sm md:text-base">
      //           Purchase history
      //         </div>
      //         <div className="text-textColor font-outfit font-medium text-sm md:text-base">
      //           Tracking Id
      //         </div>
      //         <div className="text-textColor font-outfit font-medium text-sm md:text-base">
      //           Contact Number
      //         </div>
      //       </div>
      //     </div>

      //     {/* Right Column - Contact History with bars */}
      //     <div className=" rounded-[22px] border-025 p-6">
      //       <h3 className="text-white text-base md:text-xl font-bold font-outfit mb-5">
      //         Contact History
      //       </h3>
      //       <div className="space-y-2">
      //         {[
      //           { label: "Name", width: "100%" },
      //           { label: "Gender", width: "85%" },
      //           { label: "Website", width: "90%" },
      //           { label: "Purchase history", width: "75%" },
      //           { label: "Tracking Id", width: "95%" },
      //           { label: "Contact Number", width: "80%" },
      //         ].map((item, index) => (
      //           <div
      //             key={index}
      //             className="space-y-2  grid grid-cols-1 md:grid-cols-2 md:gap-6">
      //             <div className="text-textColor font-outfit font-medium text-sm md:text-base">
      //               {item.label}
      //             </div>
      //             <div className="h-2 bg-gray-700/30 rounded-full overflow-hidden">
      //               <div
      //                 className="h-full bg-white rounded-full"
      //                 style={{ width: item.width }}
      //               />
      //             </div>
      //           </div>
      //         ))}
      //       </div>
      //     </div>
      //   </div>
      // ),
      rightContent: <Step2Bars isActive={activeStep === 2} />,
    },
    {
      id: 3,
      number: "03",
      title: "AI Training",
      description:
        "The AI system is trained to understand your customer interactions and optimize the calling process, ensuring it continuously improves over time.",
      rightContent: <Step3Content />,
    },
    {
      id: 4,
      number: "04",
      title: "Launch & Optimization",
      description:
        "The AI system is trained to understand your customer interactions and optimize the calling process, ensuring it continuously improves over time.",
      rightContent: (
        <div className="flex w-full h-full">
          <OptimizationImg className="w-full h-full object-contain" />
        </div>
      ),
    },
  ];

  const currentStep = steps.find((step) => step.id === activeStep);
  const isStep2Active = activeStep === 2;
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #0E1828 0%, #000000 22.96%)",
      }}
      className=" text-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] lg:leading-[56px] font-stoke font-normal mb-4">
              How Our AI Custom Dialer
              <br />
              Solutions Work
            </h2>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-2">
          {/* Left Side - Steps */}
          <div className="space-y-6">
            {steps.map((step) => (
              <div
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`cursor-pointer border-l-2 transition-all duration-300 ${
                  activeStep === step.id
                    ? "border-blue-500 bg-blue-500/10"
                    : "border-gray-700 hover:border-gray-600"
                }`}>
                <div
                  className={`p-6 ${
                    activeStep === step.id ? "bg-primary" : ""
                  }`}>
                  <div className="flex items-start gap-4">
                    <span
                      className={`text-base font-outfit font-normal ${
                        activeStep === step.id ? "text-black" : "text-textColor"
                      }`}>
                      {step.number}
                    </span>
                    <div className="flex-1">
                      <h3
                        className={`text-lg sm:text-xl font-outfit font-medium mb-2 ${
                          activeStep === step.id
                            ? "text-black"
                            : "text-textColor"
                        }`}>
                        {step.title}
                      </h3>
                      {activeStep === step.id && (
                        <p className="text-black text-base font-outfit leading-relaxed">
                          {step.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Dynamic Content */}
          <div className="">
            <h1 className="text-primary font-outfit text-sm md:text-2xl font-medium">
              {currentStep?.number}
            </h1>
            <div className="bg-[#0E1828] rounded-[6px] px-2 py-8 xl:max-w-full lg:max-w-[608px]  lg:h-[428px]">
              <div className="h-full">{currentStep?.rightContent}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Step2Bars = ({ isActive }) => {
  const items = [
    { label: "Name", width: 100 },
    { label: "Gender", width: 85 },
    { label: "Website", width: 90 },
    { label: "Purchase history", width: 75 },
    { label: "Tracking Id", width: 95 },
    { label: "Contact Number", width: 80 },
  ];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isActive) {
      // reset first
      setAnimate(false);

      // allow DOM paint, then trigger animation
      const timeout = setTimeout(() => {
        setAnimate(true);
      }, 50);

      return () => clearTimeout(timeout);
    } else {
      setAnimate(false);
    }
  }, [isActive]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1.5fr,2fr] gap-6">
      {/* Left Column - Integration */}
      <div
        style={{
          background: "linear-gradient(180deg, #629DFF 0%, #0E1828 100%)",
        }}
        className=" rounded-[22px] p-6 flex flex-col border border-primary">
        <div className="bg-black rounded-[22px] px-5 py-2.5 mb-6 text-center">
          <span className="text-textColor text-sm md:text-lg font-outfit font-medium">
            Integration
          </span>
        </div>
        <div className="space-y-2 flex-grow">
          <div className="text-textColor font-outfit font-medium text-sm md:text-base">
            Name
          </div>
          <div className="text-textColor font-outfit font-medium text-sm md:text-base">
            Age
          </div>
          <div className="text-textColor font-outfit font-medium text-sm md:text-base">
            Gender
          </div>
          <div className="text-textColor font-outfit font-medium text-sm md:text-base">
            Website
          </div>
          <div className="text-textColor font-outfit font-medium text-sm md:text-base">
            Purchase history
          </div>
          <div className="text-textColor font-outfit font-medium text-sm md:text-base">
            Tracking Id
          </div>
          <div className="text-textColor font-outfit font-medium text-sm md:text-base">
            Contact Number
          </div>
        </div>
      </div>
      <div className="rounded-[22px] border-025 p-6">
        <h3 className="text-white text-base md:text-xl font-bold font-outfit mb-5">
          Contact History
        </h3>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 md:gap-6 items-center">
              <div className="text-textColor font-outfit font-medium text-sm md:text-base">
                {item.label}
              </div>

              <div className="h-2 bg-gray-700/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white rounded-full"
                  style={{
                    width: animate ? `${item.width}%` : "0%",
                    transition: `width 1.2s cubic-bezier(0.22, 1, 0.36, 1) ${
                      index * 120
                    }ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Step3Content = () => {
  const [activeButton, setActiveButton] = useState("customer");

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1.5fr,2fr] gap-6">
      {/* Left Column - Boost with AI */}
      <div className="flex flex-col md:gap-12 gap-6">
        <div
          style={{
            background: "linear-gradient(180deg, #629DFF 0%, #0E1828 100%)",
          }}
          className="rounded-[22px] border border-primary px-2 flex flex-col pt-5 pb-10">
          <div className="flex items-center gap-3 mb-6 bg-white px-2 py-2 rounded-[22px]">
            <SearchIcon className="w-5 h-5 text-black" />

            <span className="text-black font-outfit text-base font-light">
              Boost with AI
            </span>
          </div>

          <div className="space-y-1 px-4 flex-grow">
            {/* Customer Details Button */}
            <div
              onClick={() => setActiveButton("customer")}
              className={`group cursor-pointer  px-1 rounded-[22px] hover:bg-black py-1 transition-all ${
                activeButton === "customer" ? "bg-black text-textColor" : "  "
              }`}>
              <p
                className={` group-hover:text-textColor font-outfit font-medium text-base ${activeButton === "customer" ? " text-textColor " : "text-black  "}`}>
                Customer Details
              </p>
            </div>
            <div
              onClick={() => setActiveButton("agent")}
              className={`group cursor-pointer px-1   rounded-[22px] hover:bg-black py-1 transition-all ${
                activeButton === "agent" ? "bg-black text-textColor " : "  "
              }`}>
              <p
                className={` group-hover:text-textColor font-outfit font-medium text-base ${activeButton === "agent" ? " text-textColor " : "text-black  "}`}>
                Agent Name
              </p>
            </div>
            {/* Contacts Details Button */}
            <div
              onClick={() => setActiveButton("contacts")}
              className={`group cursor-pointer px-1   rounded-[22px] hover:bg-black py-1 transition-all ${
                activeButton === "contacts" ? "bg-black text-textColor " : "  "
              }`}>
              <p
                className={` group-hover:text-textColor font-outfit font-medium text-base ${activeButton === "contacts" ? " text-textColor " : "text-black  "}`}>
                Contacts Details
              </p>
            </div>
            <div
              onClick={() => setActiveButton("setting")}
              className={`group cursor-pointer px-1  rounded-[22px] hover:bg-black py-1 transition-all ${
                activeButton === "setting" ? "bg-black text-textColor " : "  "
              }`}>
              <p
                className={` group-hover:text-textColor font-outfit font-medium text-base ${activeButton === "setting" ? " text-textColor " : "text-black  "}`}>
                Setting
              </p>
            </div>
          </div>
        </div>

        {/* Phone Icon */}
        <div className=" justify-center items-center flex">
          <div className="group cursor-pointer py-3 px-7 rounded-[6px] border-025 border-primary">
            <CallIcon className="w-12 h-12 call-bounce transition-all" />
          </div>
        </div>
      </div>

      {/* Right Column - Dynamic Content */}
      <div className="overflow-hidden">
        {activeButton === "customer" && (
          <div className="grid grid-cols-1 gap-2 ">
            {/* Left Column - Customer Details */}
            <div
              style={{
                background: "linear-gradient(180deg, #629DFF 0%, #0E1828 100%)",
              }}
              className=" rounded-[22px] border border-primary px-[8px] py-2 flex flex-col">
              <div className="bg-black rounded-[22px] px-2 py-1 mb-2 text-center">
                <span className="text-white text-xs md:text-lg  font-outfit font-medium">
                  Customer Details
                </span>
              </div>
              <div className="space-y-1 flex-grow">
                <div className="text-textColor font-outfit font-medium text-xs">
                  Name
                </div>
                <div className="text-textColor font-outfit font-medium text-xs ">
                  Age
                </div>
                <div className="text-textColor font-outfit font-medium text-xs ">
                  Gender
                </div>
                <div className="text-textColor font-outfit font-medium text-xs ">
                  Website
                </div>
                <div className="text-textColor font-outfit font-medium text-xs ">
                  Purchase history
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-2 font-outfit">
              {/* Contact History Card */}
              <div
                style={{
                  background:
                    "linear-gradient(180deg, #0E1828 0%, #629DFF 100%)",
                }}
                className=" border border-primary rounded-[22px] p-2">
                <h3 className="text-textColor text-xl font-bold mb-2">
                  Contact History
                </h3>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-textColor text-sm  font-normal">
                      Created time
                    </span>
                    <span className="text-textColor text-sm  font-normal">
                      2025-11-03 17:47:06
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-textColor text-sm  font-normal">
                      Last connect
                    </span>
                    <span className="text-textColor text-sm  font-normal">
                      2025-11-03 17:47:06
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  background:
                    "linear-gradient(180deg, #0E1828 0%, #629DFF 100%)",
                }}
                className=" rounded-[22px] border border-primary overflow-hidden">
                <div className="bg-[#0E1828] border-primary border-b text-center py-1">
                  <h3 className="text-textColor text-sm md:text-lg font-bold">
                    Action
                  </h3>
                </div>
                <div className="flex items-center justify-center gap-2 px-4 py-5">
                  <button className="px-4 py-2 bg-white text-black text-xs font-medium rounded-full hover:bg-gray-200 transition-colors">
                    Support
                  </button>
                  <button className="px-4 py-2 bg-white text-black text-xs font-medium rounded-full hover:bg-gray-200 transition-colors">
                    Sales
                  </button>
                  <button className="px-4 py-2 bg-white text-black text-xs font-medium rounded-full hover:bg-gray-200 transition-colors">
                    Premium
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeButton === "contacts" && (
          <div
            style={{
              background: "linear-gradient(180deg, #629DFF 0%, #0E1828 100%)",
            }}
            className=" rounded-[22px] p-[clamp(12px,2vh,24px)] flex flex-col  border border-primary">
            <h3 className="text-black font-outfit text-base md:text-xl font-bold">
              Fields Layout
            </h3>
            <div className="space-y-[clamp(2px,1.4vh,14px)] ">
              <div className="flex items-center justify-between">
                <span className="text-black text-sm md:text-base font-normal">
                  Created time
                </span>
                <span className="text-black text-sm md:text-base font-normal">
                  2025-11-03 17:47:06
                </span>
              </div>
              <div className="flex items-center gap-2 justify-between">
                <span className="text-black text-sm md:text-base font-normal">
                  Last connect
                </span>
                <span className="text-black text-sm md:text-base font-normal">
                  2025-11-03 17:47:06
                </span>
              </div>
            </div>
            <div
              style={{
                background: "linear-gradient(180deg, #000000 0%, #629DFF 100%)",
              }}
              className="mt-2 border-025 border-primary rounded-[22px] overflow-hidden flex justify-center flex-col items-center">
              <div className="w-full bg-primary border-b font-outfit text-center text-white text-sm md:text-base font-bold py-3 transition-colors mb-5">
                View Notes
              </div>

              <div className="space-y-2 py-4 px-2">
                <div className="text-white font-outfit font-light text-sm">
                  2025-11-03 17:47:06 &nbsp; Inbound calls
                </div>
                <div className="text-white font-outfit font-light text-sm">
                  2025-11-02 19:01:05 &nbsp; Inbound calls
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DialerSolutions;
