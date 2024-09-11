import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Header = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div className="container flex flex-row items-end bg-slate-700 justify-between mx-auto text-white w-[960px] h-[50px] top-[110px] right-[50%] gap-x-3  z-20 m-0">
      <a
        onClick={toggleLanguage}
        className="px-3 py-1  hover:bg-white hover:text-indigo-700 transition-colors"
      >
        TURKCE'YE GEC
      </a>
      <div className="items-center">
        <button
          // onClick={toggleLanguage}
          className="px-3 py-1 border border-white rounded hover:bg-white hover:text-indigo-700 transition-colors"
        >
          {/* {language === "en" ? "TR" : "EN"} */}
        </button>
        <span>DARK MODE</span>
      </div>
    </div>
  );
};

export default Header;
