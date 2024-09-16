import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import ToggleSwitch from "./ToggleSwitch";

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const { theme } = useTheme();

  return (
    <div className="flex justify-between mt-4 items-top  w-full ">
      <h1 className="text-4xl font-semibold pt-4 tracking-medium text-lime-300">
        ayşem
      </h1>
      <div className="flex  space-x-12">
        <a
          onClick={toggleLanguage}
          className="text-lime-300  font-bold tracking-wider text-sm hover:text-lime-200 transition-colors"
        >
          {language === "tr" ? "TÜRKÇE'YE GEÇ" : "SWITCH TO ENGLISH"}
        </a>
        <div className="flex items-top space-x-2">
          <ToggleSwitch />
          <span className="font-bold tracking-wider text-sm text-indigo-700">
            {theme === "dark" ? "LIGHT MODE" : "DARK MODE"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
