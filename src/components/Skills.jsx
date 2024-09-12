import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { DiJavascript1, DiReact } from "react-icons/di";
import { TbBrandRedux } from "react-icons/tb";
import { FaNode } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { PiFigmaLogoFill } from "react-icons/pi";

const Skills = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      title: "Skills",
      skills: [
        { name: "JAVASCRIPT", Icon: DiJavascript1 },
        { name: "NODE", Icon: FaNode },
        { name: "REACT", Icon: DiReact },
        { name: "VS CODE", Icon: VscVscode },
        { name: "REDUX", Icon: TbBrandRedux },
        { name: "FIGMA", Icon: PiFigmaLogoFill },
      ],
    },
    tr: {
      title: "Yetenekler",
      skills: [
        { name: "JAVASCRIPT", Icon: DiJavascript1 },
        { name: "NODE", Icon: FaNode },
        { name: "REACT", Icon: DiReact },
        { name: "VS CODE", Icon: VscVscode },
        { name: "REDUX", Icon: TbBrandRedux },
        { name: "FIGMA", Icon: PiFigmaLogoFill },
      ],
    },
  };

  return (
    <section className=" skills bg-white py-16">
      <div className="container flex flex-row items-start justify-between mx-auto w-[960px]">
        <h2 className="text-4xl font-bold tracking-wide text-indigo-700 mb-8 ">
          {content[language].title}
        </h2>
        <div className="grid grid-cols-2 gap-x-[62px] gap-y-8 mr-4">
          {content[language].skills.map(({ name, Icon }, index) => (
            <div
              key={index}
              className="flex flex-row items-center tracking-wide  "
            >
              <div className="flex w-42 h-42 bg-black rounded-md mr-6 p-4 items-center justify-center">
                <Icon className="w-24 h-24 text-indigo-700  " />
              </div>
              <span className="text-center text-2xl font-normal text-[#8f8f8f]">
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
