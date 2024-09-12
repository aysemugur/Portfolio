import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import ToggleSwitch from "./ToggleSwitch";

const Header = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  {
    /* <div className="container flex flex-row items-end bg-slate-700 justify-between mx-auto text-white w-[960px] h-[50px] top-[110px] right-[50%] gap-x-3  z-20 m-0"></div> */
  }

  // <div className="absolute top-0 right-0 flex justify-between items-center w-[40%] h-16 bg-lime-300 px-6">

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
