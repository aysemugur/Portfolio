import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import ToggleSwitch from "./ToggleSwitch";

const Header = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div className="container flex flex-row bg-slate-400 justify-between mx-auto w-[960px] h-[72px]  z-120">
      <h1 className="text-2xl py-3 font-medium tracking-medium text-lime-300 ">
        ayşem
      </h1>
      <div className="flex flex-rows text-top gap-x-9 ">
        <a
          onClick={toggleLanguage}
          className=" text-lime-300 font-medium  tracking-wider text-md "
        >
          TÜRKÇE'YE GEÇ
        </a>
        <div className="flex flex-rows text-indigo-700  items-top gap-x-2">
          <ToggleSwitch />
          <span className="font-medium tracking-wider text-md ">DARK MODE</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
