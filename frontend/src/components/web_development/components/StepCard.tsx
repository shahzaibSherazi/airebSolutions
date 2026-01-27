import React from "react";
import { Step } from "../data/data";

interface StepCardProps {
  step: Step;
  isBlue: boolean;
  animateKey: number;
}

const StepCard: React.FC<StepCardProps> = ({ step, isBlue, animateKey }) => {
  const Icon = step.icon; // Render as component

  return (
    <div
      key={animateKey}
      className="step-card animate-card transition-all duration-700 ease-out">
      <div className="flex items-start gap-[clamp(24px,3.5vw,48px)]">
        {/* Step Number + CSS Vertical Line */}
        <div className="step-indicator relative">
          <div
            className={`step-circle w-[40px] h-[40px] rounded-full flex items-center justify-center font-bold ${
              isBlue ? "bg-primary text-white" : "bg-white text-black"
            }`}>
            {step.id}
          </div>
          {/* Vertical line via CSS */}
          <div className="absolute left-1/2 top-full w-[2px] h-full bg-gradient-to-b from-primary via-primary/60 to-primary/30" />
        </div>

        {/* Card */}
        <div
          className={`flex-1 border rounded-md transition-all duration-500 ${
            isBlue
              ? "bg-primary border-primary shadow-lg shadow-primary/30"
              : "border-gray-700 bg-black/60"
          }`}
          style={{ padding: "clamp(24px, 3.5vh, 40px)" }}>
          <div className="flex justify-between gap-6 items-center">
            <div>
              <h3
                className={`font-outfit font-semibold text-[clamp(18px,2vw,24px)] mb-2 ${
                  isBlue ? "text-white" : "text-gray-200"
                }`}>
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>

            <div className="icon-box p-2 bg-black/20 rounded-md">
              <Icon
                className={`w-10 h-10 ${isBlue ? "text-white" : "text-primary"}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepCard;
