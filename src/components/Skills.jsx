import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import { DiJavascript1, DiReact } from "react-icons/di";
import { TbBrandRedux } from "react-icons/tb";
import { FaNode } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { PiFigmaLogoFill } from "react-icons/pi";

const Skills = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const content = {
    en: {
      title: "Skills",
      skills: [
        { name: "JavaScript", Icon: DiJavascript1 },
        { name: "Node.js", Icon: FaNode },
        { name: "React", Icon: DiReact },
        { name: "VS Code", Icon: VscVscode },
        { name: "Redux", Icon: TbBrandRedux },
        { name: "Figma", Icon: PiFigmaLogoFill },
      ],
    },
    tr: {
      title: "Yetenekler",
      skills: [
        { name: "JavaScript", Icon: DiJavascript1 },
        { name: "Node.js", Icon: FaNode },
        { name: "React", Icon: DiReact },
        { name: "VS Code", Icon: VscVscode },
        { name: "Redux", Icon: TbBrandRedux },
        { name: "Figma", Icon: PiFigmaLogoFill },
      ],
    },
  };

  return (
    <section
      className={` skills py-[70px] ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="container flex flex-row  justify-between mx-auto max-w-[960px]">
        <h2
          className={`text-5xl font-bold tracking-wide mb-8 ${
            theme === "dark" ? "text-indigo-400" : "text-indigo-700"
          }`}
        >
          {content[language].title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {content[language].skills.map(({ name, Icon }, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`flex w-16 h-16 rounded-md mr-6 p-3 items-center justify-center ${
                  theme === "dark" ? "bg-gray-800" : "bg-gray-200"
                }`}
              >
                <Icon
                  className={`w-10 h-10 ${
                    theme === "dark" ? "text-indigo-400" : "text-indigo-700"
                  }`}
                  aria-hidden="true"
                />
              </div>
              <span
                className={`text-xl font-normal ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
