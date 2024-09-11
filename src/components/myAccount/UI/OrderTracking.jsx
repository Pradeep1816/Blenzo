import React, { useState } from "react";
import {
  FaTruck,
  FaCheckCircle,
  FaShippingFast,
  FaBoxOpen,
  FaHome,
} from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import TrackingMap from "./TrackingMap";
function OrderTracking() {
  const steps = [
    { label: "Order Confirmed", icon: <CgNotes /> },
    { label: "Preparing items", icon: <FaBoxOpen /> },
    { label: "Items is on the way", icon: <FaShippingFast /> },
    { label: "Delivered", icon: <FaHome /> },
  ];
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <>
      <div className="flex items-center justify-center my-5 w-full">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-center justify-center flex-1 relative"
          >
            {/* Label below each circle */}
            <div
              className={`text-xs text-center absolute top-0 ${
                index <= currentStep
                  ? "font-bold text-gray-800"
                  : "text-gray-500"
              }`}
            >
              <div className="flex flex-col items-center gap-1">
                <div className="text-3xl flex justify-end">{step.icon}</div>
                <p> {step.label}</p>
              </div>
            </div>
            {/* Circle for each step */}
            <div
              className={`absolute top-16 w-8 h-8 rounded-full flex items-center justify-center text-sm bg-white border border-gray-200 `}
            >
              <div
                className={`w-6 h-6 rounded-full ${
                  index <= currentStep ? "bg-custom-purple" : "bg-gray-300"
                } `}
              ></div>
            </div>

            {/* Line between steps */}
            {index < steps.length - 1 && (
              <div
                className={`absolute top-20 left-[50%] w-[100%] h-1 -z-10 ${
                  index < currentStep ? "bg-custom-purple" : "bg-gray-300"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-32">
        <TrackingMap />
      </div>
    </>
  );
}

export default OrderTracking;
