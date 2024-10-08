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
    <section
      className={` skills py-[32px] ${
        theme === "dark" ? "bg-[#252128] text-white" : "bg-white text-black"
      }`}
    >
      <div className="container flex flex-row justify-between mx-auto  max-w-[960px]">
        <h2
          className={`text-4xl font-bold tracking-wide mb-8  ${
            theme === "dark" ? "text-lime-300" : "text-indigo-700"
          }`}
        >
          {content[language].title}
        </h2>
        <div className=" grid gap-3 gap-x-32 max-[768px]:grid-cols-2 sm:grid-cols-2 ">
          {content[language].skills.map(({ name, Icon }, index) => (
            <div key={index} className="flex items-center ">
              <div
                className={`flex w-[100px] h-[100px] rounded-md mr-3 p-5 items-center justify-center ${
                  theme === "dark" ? "bg-gray-800" : "bg-gray-200 "
                }`}
              >
                <Icon
                  className={`w-60 h-60 ${
                    theme === "dark" ? "text-indigo-400" : "text-indigo-700"
                  }`}
                  aria-hidden="true"
                />
              </div>
              <span
                className={`text-medium font-normal ${
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
