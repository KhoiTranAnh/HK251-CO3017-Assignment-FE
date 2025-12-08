import React from "react";
import CheckIcon from "@mui/icons-material/Check";

const Stepper = ({ activeStep, steps }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 mb-6">
      <div className="flex items-center justify-between px-20 relative">
        {/* Background Line */}
        <div className="absolute top-1/2 left-20 right-20 h1 bg-black transform -translate-y-1/2 -z-0 h-0.5"></div>

        {steps.map((step, index) => {
          const isCompleted = index < activeStep;
          const isActive = index === activeStep;

          let circleClass =
            "flex items-center justify-center w-10 h-10 rounded-full border-2 z-10 transition-colors duration-300 ";

          if (isCompleted) {
            circleClass += "bg-green-500 border-green-500 text-white"; // Completed = Green (like UI 1)
          } else if (isActive) {
            circleClass += "bg-amber-400 border-black text-black"; // Active = Yellow (like UI 1/2)
          } else {
            circleClass += "bg-white border-black text-black"; // Pending = White with black border
          }

          return (
            <div
              key={index}
              className="flex flex-col items-center gap-2 bg-white px-2 relative z-10"
            >
              <div className="text-center w-32 -mt-10 mb-2 font-medium text-sm text-gray-700 h-10 flex items-end justify-center">
                {step.label}
              </div>
              <div className={circleClass}>
                {isCompleted ? <CheckIcon fontSize="small" /> : ""}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
