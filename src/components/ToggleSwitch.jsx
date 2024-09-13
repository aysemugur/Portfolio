import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const ToggleSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  const isOn = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={`w-[50px] h-[24px] flex items-center rounded-full px-1 cursor-pointer transition-colors duration-300 ${
        isOn ? "bg-green-500" : "bg-gray-300"
      }`}
    >
      <span
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
          isOn ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </button>
  );
};

export default ToggleSwitch;
