import { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <button
      onClick={toggleSwitch}
      className={`w-[50px] h-[24px] flex items-center bg-indigo-500 rounded-full  px-1 cursor-pointer transition-colors duration-300 ${
        isOn ? "bg-green-500" : "bg-gray-300"
      }`}
    >
      {/* Kaydırmalı butonun iç kısmı */}
      <span
        className={`bg-yellow-300 w-4 h-4 rounded-full shadow-md  transform transition-transform duration-300 ${
          isOn ? "translate-x-0" : "translate-x-6"
        }`}
      />
    </button>
  );
};

export default ToggleSwitch;
